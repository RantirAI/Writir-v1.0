"use client";
import { useEditor } from "@/context/blocksuite/BlocksuiteProvider";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/subframe/components/Button";

import { IconButton } from "@/subframe/components/IconButton";

import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Breadcrumbs } from "@/subframe/components/Breadcrumbs";
import { Job } from "@blocksuite/store";

type Props = {
  docId: string;
};

const BlocksuiteEditorContainer = ({ docId }: Props) => {
  const { editor, edgeLess } = useEditor();

  const blocksuiteContainerRef = useRef<HTMLDivElement>(null);

  const [docTitle, setDocTitle] = useState<string>("Untitled");

  useEffect(() => {
    //function to save the doc as JSON snapshot
    const saveJson = async () => {
      const doc = editor.doc;

      const { collection, blocks, meta } = doc;
      if (collection && blocks.size > 0) {
        if (meta?.title) {
          setDocTitle(meta?.title as string);
        }
        const job = new Job({ collection });
        const jsonSnapshot = await job.docToSnapshot(doc);

        localStorage.setItem(`pageInfo-${docId}`, JSON.stringify(jsonSnapshot));

        //create event (storage) to update live data by triggering the event in other components
        dispatchEvent(new Event("storage"));
      } else {
        console.log("doc is empty");
        dispatchEvent(new Event("storage"));
      }
    };

    //append the editor to the container
    if (blocksuiteContainerRef.current && editor) {
      console.log("editor found", editor);
      console.log("edgless mode", edgeLess);
      blocksuiteContainerRef.current.innerHTML = "";
      blocksuiteContainerRef.current.appendChild(editor);

      // check if the editor is updated/mutated and save the doc as JSON snapshot
      const observer = new MutationObserver(() => {
        saveJson();
        //implement save to db func if user is available with debounce method
        //or we may try saving it to db when the component unmounts. Check BlocksuiteTopbar -> in the useEffect there's a cleanup function that disposes the editor doc and removes the localStorage item. So, we can save the doc to db when the component unmounts.
      });

      observer.observe(blocksuiteContainerRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [editor, docId]);

  return (
    <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch rounded-[20px] bg-default-background shadow-md">
      <div className="flex w-full items-start gap-2 border-b border-solid border-brand-50 px-4 py-2 mobile:flex-col mobile:gap-2">
        <div className="flex grow shrink-0 basis-0 items-center gap-2">
          <div className="flex items-center gap-1 rounded-md border border-solid border-brand-50 bg-default-background px-1 py-1">
            <SubframeCore.Icon
              className="text-body font-body text-subtext-color"
              name="FeatherFolder"
            />
          </div>
          <Breadcrumbs>
            <Breadcrumbs.Item>Folder Name</Breadcrumbs.Item>
            <Breadcrumbs.Divider />
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon="FeatherFile"
                  iconRight="FeatherChevronDown"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  {docTitle}
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
                    <DropdownMenu.DropdownItem icon="FeatherFolderOpen">
                      Move to a different folder
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon="FeatherTrash">
                      Delete
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </Breadcrumbs>
        </div>
        <IconButton
          size="small"
          icon="FeatherSparkle"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        />
        <IconButton
          size="small"
          icon="FeatherMessageSquare"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        />
        <IconButton
          size="small"
          icon="FeatherTableProperties"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        />
        <IconButton
          size="small"
          icon="FeatherFrame"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        />
      </div>
      {/* NOTE: main editor */}
      <div
        className="block w-full grow shrink-0 basis-0 flex-col items-start px-4 py-4 overflow-auto bg-default-background"
        ref={blocksuiteContainerRef}
      ></div>
    </div>
  );
};

export default BlocksuiteEditorContainer;
