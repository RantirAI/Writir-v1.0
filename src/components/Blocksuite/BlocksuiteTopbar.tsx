import React, { useEffect, useState } from "react";
import { Select } from "@/subframe/components/Select";
import { TextField } from "@/subframe/components/TextField";
import { Switch } from "@/subframe/components/Switch";
import { EditorTopBar2 } from "@/subframe/components/EditorTopBar2";
import { ToggleGroup } from "@/subframe/components/ToggleGroup";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import { IconButton } from "@/subframe/components/IconButton";
import { useEditor } from "@/context/blocksuite/BlocksuiteProvider";
import { Job, DocCollection, DocSnapshot } from "@blocksuite/store";
import { Schema } from "@blocksuite/store";
import { AffineSchemas } from "@blocksuite/blocks";
import { createEmptyDoc } from "@blocksuite/presets";
import { useParams, useRouter } from "next/navigation";
type Props = {};

const BlocksuiteTopbar = (props: Props) => {
  const { edgeLess, editor, setEdgeLess, collection } = useEditor();
  const router = useRouter();
  const { docId } = useParams();

  const [_, forceRender] = useState(0);

  const [importedDoc, setImportedDoc] = useState<any>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      console.log("triggering storage change");
      forceRender((prev) => prev + 1);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (!editor) return;

    // Function to load document from snapshot
    const loadDocument = async (dData: DocSnapshot, edgeLess: boolean) => {
      editor.doc.clear(); // Clear previous content

      if (edgeLess) {
        const doc = createEmptyDoc().init();
        const { collection } = doc;
        const job = new Job({ collection });
        const newDoc = await job.snapshotToDoc(dData);
        editor.doc = newDoc;
      } else {
        const schema = new Schema().register(AffineSchemas);
        const collection = new DocCollection({ schema });
        collection.meta.initialize();
        const job = new Job({ collection });
        const newDoc = await job.snapshotToDoc(dData);
        editor.doc = newDoc;
      }
    };

    // Check localStorage for saved data
    const jsonDoc = localStorage.getItem(`pageInfo-${docId}`);
    const dData: DocSnapshot | null = jsonDoc ? JSON.parse(jsonDoc) : null;

    // Load data if exists
    if (dData !== null) {
      loadDocument(dData, edgeLess);
    }
    // should be fetched from db
    //but must save editor data just after it loads on dom

    // If there is an imported document, load it
    if (importedDoc !== null) {
      loadDocument(importedDoc, edgeLess);
      setImportedDoc(null);
    }

    // Cleanup: dispose of the editor document on component unmount
    return () => {
      console.log("cleaning up");
      // localStorage.removeItem(`pageInfo-${docId}`);
      //we may add save to db func here instead of blocksuite container components
      editor.doc.dispose(); // Wait for dispose to complete,
    };
  }, [collection, editor, edgeLess, docId, importedDoc]);

  // useEffect(() => {
  //   if (!editor) return;
  //   const setDoc = async (dData) => {
  //     //@ts-ignore
  //     editor.doc.clear();
  //     const schema = new Schema().register(AffineSchemas);
  //     const collection = new DocCollection({ schema });
  //     collection.meta.initialize();

  //     const job = new Job({ collection });
  //     const newDoc = await job.snapshotToDoc(dData);

  //     editor.doc = newDoc;
  //   };

  //   const setEdgeLessDoc = async (dData) => {
  //     //@ts-ignore
  //     editor.doc.clear();
  //     const doc = createEmptyDoc().init();
  //     const { collection } = doc;
  //     const job = new Job({ collection });
  //     const newDoc = await job.snapshotToDoc(dData);
  //     editor.doc = newDoc;
  //   };
  //   const jsonDoc = localStorage.getItem(`pageInfo-${docId}`);
  //   const dData = jsonDoc ? JSON.parse(jsonDoc) : null;
  //   console.log({ dData });
  //   if (dData !== null) {
  //     if (edgeLess) {
  //       setEdgeLessDoc(dData);
  //     } else {
  //       setDoc(dData);
  //     }
  //   }

  //   if (importedDoc !== null) {
  //     if (edgeLess) {
  //       setEdgeLessDoc(importedDoc);
  //     } else {
  //       setDoc(importedDoc);
  //     }
  //   }

  //   return () => {
  //     //we are disposing the editor doc completely when the component unmounts
  //     editor.doc.dispose();
  //   };
  // }, [collection, editor, edgeLess, docId, importedDoc]);

  useEffect(() => {
    setEdgeLess(false);
  }, [docId]);

  const handleExportSnapshot = async () => {
    const doc = editor.doc;

    const { collection, blocks, meta } = doc;
    if (collection && blocks.size > 0) {
      const job = new Job({ collection });
      const jsonSnapshot = await job.docToSnapshot(doc);

      const blob = new Blob([JSON.stringify(jsonSnapshot)], {
        type: "application/json",
      });

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${meta?.title || "Untitled"}.json`;
      a.click();

      URL.revokeObjectURL(url);
    }
  };

  const handleImportSnapshot = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";

    input.onchange = async (e) => {
      //@ts-ignore
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = async (e) => {
        const json = e.target?.result;
        console.log({ json });

        if (!json) return;
        const parsedJson = JSON.parse(json as string);
        console.log({ parsedJson });
        setImportedDoc(parsedJson);
      };
    };
    input.click();
  };

  return (
    <EditorTopBar2
      className="mobile:h-auto mobile:w-auto mobile:flex-none"
      text="R.Cloud 2.2"
    >
      <div className="flex grow shrink-0 basis-0 items-center gap-2">
        <div className="flex h-9 w-32 flex-none items-center gap-1 rounded-md bg-neutral-100 px-1 py-1 ">
          <img
            onClick={() => router.push("/")}
            alt="writir"
            className="h-6 flex-none object-cover"
            src="https://res.cloudinary.com/subframe/image/upload/v1728678605/uploads/2266/kggneynzrosljsl3dhyy.svg"
          />
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <Button
                variant="neutral-secondary"
                size="small"
                iconRight="FeatherChevronDown"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Writir 1.0.1
              </Button>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={4}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon="FeatherUsers">
                    &#123;User_Name&#125;
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherPrinter">
                    Print Document
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherBug">
                    CSS Debug Menu
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherTicket">
                    Submit a Ticket
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherLogIn">
                    Log out
                  </DropdownMenu.DropdownItem>
                  <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                  <div className="flex w-full items-center gap-2 px-4 py-4">
                    <span className="text-body font-body text-default-font">
                      By
                    </span>
                    <img
                      alt="writir"
                      className="max-w-[128px] flex-none"
                      src="https://res.cloudinary.com/subframe/image/upload/v1727136720/uploads/2266/rnjvta31afqutcb5qyng.svg"
                    />
                  </div>
                  <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                  <DropdownMenu.DropdownItem icon="FeatherLifeBuoy">
                    Get Help
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherBookOpen">
                    Documentation
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherAppWindow">
                    More Computir Applications
                  </DropdownMenu.DropdownItem>
                  <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                  <div className="flex w-full flex-col items-center justify-center px-2 py-2">
                    <span className="font-['Inter'] text-[10px] font-[500] leading-[20px] text-default-font">
                      © All rights reserved by Computir, Inc.
                    </span>
                  </div>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </div>
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2 self-stretch">
        <ToggleGroup value="" onValueChange={(value: string) => {}}>
          <ToggleGroup.Item
            onClick={() => setEdgeLess(false)}
            icon="FeatherFileText"
            value="281eab24"
          >
            Document
          </ToggleGroup.Item>
          <ToggleGroup.Item
            onClick={() => setEdgeLess(true)}
            icon="FeatherDraftingCompass"
            value="8f2f541f"
          >
            Whiteboard
          </ToggleGroup.Item>
          <div className="flex grow shrink-0 basis-0 items-center justify-center gap-1 self-stretch px-1 py-1">
            <IconButton
              size="small"
              icon="FeatherPresentation"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
          </div>
        </ToggleGroup>
      </div>
      <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2 self-stretch">
        <Button
          variant="neutral-secondary"
          icon="FeatherUpload"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            handleImportSnapshot();
          }}
        >
          Import Snapshot
        </Button>
        <Button
          variant="neutral-secondary"
          icon="FeatherFileDown"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            handleExportSnapshot();
          }}
        >
          Export Snapshot
        </Button>
        {/* <Select
          disabled={false}
          error={false}
          variant="outline"
          label=""
          placeholder="Export"
          helpText=""
          icon="FeatherFileDown"
          value={undefined}
          onValueChange={(value: string) => {}}
        >
          <Select.Item value="Export Markdown">Export Markdown</Select.Item>
          <Select.Item value="Export HTML">Export HTML</Select.Item>
          <Select.Item value="Export PDF">Export PDF</Select.Item>
          <Select.Item value="Export Snapshot">Export Snapshot</Select.Item>
        </Select> */}
        <SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Trigger asChild={true}>
            <Button
              variant="neutral-secondary"
              icon="FeatherShare2"
              iconRight="FeatherChevronDown"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Share
            </Button>
          </SubframeCore.DropdownMenu.Trigger>
          <SubframeCore.DropdownMenu.Portal>
            <SubframeCore.DropdownMenu.Content
              side="bottom"
              align="start"
              sideOffset={4}
              asChild={true}
            >
              <DropdownMenu>
                <DropdownMenu.DropdownItem icon="FeatherCopy">
                  Copy Share Link
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem icon="FeatherMail">
                  Invite others to this document
                </DropdownMenu.DropdownItem>
                <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-4 py-4">
                  <TextField
                    className="h-auto w-full flex-none"
                    disabled={false}
                    error={false}
                    label="Add a new team member"
                    helpText=""
                    icon="FeatherMail"
                    iconRight={null}
                  >
                    <TextField.Input
                      placeholder=""
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <div className="flex w-full flex-col items-start py-2">
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                  </div>
                  <div className="flex w-full items-start gap-4">
                    <div className="flex grow shrink-0 basis-0 items-center gap-4 self-stretch rounded-md border border-solid border-brand-50 bg-default-background px-4 py-4 shadow-sm">
                      <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch">
                        <span className="w-full text-body-bold font-body-bold text-default-font">
                          Tayler
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          borderbabe2412@gmail.com
                        </span>
                      </div>
                      <Button
                        variant="neutral-tertiary"
                        size="small"
                        icon="FeatherShare2"
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      >
                        Full Access
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2 px-1 py-1">
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherLock"
                    />
                    <span className="text-body font-body text-default-font">
                      Give View only Access
                    </span>
                    <Switch
                      checked={false}
                      onCheckedChange={(checked: boolean) => {}}
                    />
                  </div>
                </div>
                <DropdownMenu.DropdownItem icon="FeatherTrash">
                  Remove Share access
                </DropdownMenu.DropdownItem>
              </DropdownMenu>
            </SubframeCore.DropdownMenu.Content>
          </SubframeCore.DropdownMenu.Portal>
        </SubframeCore.DropdownMenu.Root>
      </div>
    </EditorTopBar2>
  );
};

export default BlocksuiteTopbar;
