import React, { useEffect } from "react";
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
import { Job, DocCollection } from "@blocksuite/store";
import { Schema } from "@blocksuite/store";
import { AffineSchemas } from "@blocksuite/blocks";
import { createEmptyDoc } from "@blocksuite/presets";
import { useRouter } from "next/navigation";
type Props = {};

const Topbar = (props: Props) => {
  const router = useRouter();
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
    </EditorTopBar2>
  );
};

export default Topbar;
