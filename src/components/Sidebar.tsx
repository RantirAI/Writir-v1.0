import React from "react";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";

import { IconButton } from "@/subframe/components/IconButton";

import { Avatar } from "@/subframe/components/Avatar";
import { ChatChannelsMenu2 } from "@/subframe/components/ChatChannelsMenu2";
import { Badge } from "@/subframe/components/Badge";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import { useEditor } from "@/context/blocksuite/BlocksuiteProvider";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

type Props = {};

const Sidebar = (props: Props) => {
  const router = useRouter();

  return (
    <div className="flex w-72 flex-none flex-col items-start self-stretch bg-neutral-50 px-1 py-1 mobile:hidden">
      <div className="flex w-full items-center gap-2">
        <div className="flex grow shrink-0 basis-0 items-center gap-2 px-4 py-2">
          <img
            alt="writir"
            className="w-6 flex-none rounded-md"
            src="https://res.cloudinary.com/subframe/image/upload/v1713909352/uploads/279/rsam5v66hcvpj96fr5hc.avif"
          />
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <div className="flex items-center gap-2">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Subframe
                </span>
                <SubframeCore.Icon
                  className="text-caption font-caption text-default-font"
                  name="FeatherChevronDown"
                />
              </div>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={4}
                asChild={true}
              >
                <DropdownMenu>
                  <div className="flex w-full items-center gap-2 border-b border-solid border-brand-50 px-3 pt-3 pb-4">
                    <Avatar
                      image="https://res.cloudinary.com/subframe/image/upload/v1713909352/uploads/279/rsam5v66hcvpj96fr5hc.avif"
                      square={true}
                    >
                      A
                    </Avatar>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
                        Subframe
                      </span>
                      <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
                        subframe.com
                      </span>
                    </div>
                  </div>
                  <DropdownMenu.DropdownItem icon={null}>
                    Switch Workspace
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Sign out
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </div>
        <div className="flex items-center">
          <IconButton
            icon="FeatherFolderPlus"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          />
          <IconButton
            icon="FeatherArrowLeftFromLine"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          />
        </div>
      </div>
      <ChatChannelsMenu2 className="w-full grow shrink-0 basis-0">
        <ChatChannelsMenu2.Item
          onClick={() => {
            const newDocId = uuidv4();
            router.push(`/doc/${newDocId}`);
          }}
          icon="FeatherSparkles"
        >
          Start a New AI Document
        </ChatChannelsMenu2.Item>
        <ChatChannelsMenu2.Item
          icon="FeatherInbox"
          rightSlot={<Badge variant="neutral">1</Badge>}
        >
          Inbox
        </ChatChannelsMenu2.Item>
        <ChatChannelsMenu2.Item icon="FeatherHome">
          Back to Dashboard
        </ChatChannelsMenu2.Item>
        <ChatChannelsMenu2.Folder label="Folder 1" icon="FeatherFolderOpen">
          <ChatChannelsMenu2.Item
            selected={true}
            rightSlot={<Badge variant="neutral">Oct 11, 2024</Badge>}
          >
            Document 1
          </ChatChannelsMenu2.Item>
          <ChatChannelsMenu2.Item
            icon="FeatherHash"
            rightSlot={<Badge variant="neutral">Oct 2, 2024</Badge>}
          >
            Document 2
          </ChatChannelsMenu2.Item>
        </ChatChannelsMenu2.Folder>
        <ChatChannelsMenu2.Folder label="Folder 1" icon="FeatherFolderOpen">
          <ChatChannelsMenu2.Item
            rightSlot={<Badge variant="neutral">Aug 24, 2024</Badge>}
          >
            Document 1
          </ChatChannelsMenu2.Item>
          <ChatChannelsMenu2.Item
            icon="FeatherHash"
            rightSlot={<Badge variant="neutral">Aug 22, 2024</Badge>}
          >
            front-end
          </ChatChannelsMenu2.Item>
        </ChatChannelsMenu2.Folder>
        <ChatChannelsMenu2.Folder label="Draft Documents">
          <ChatChannelsMenu2.Item
            icon="FeatherHash"
            rightSlot={<Badge variant="neutral">1</Badge>}
          >
            general
          </ChatChannelsMenu2.Item>
          <ChatChannelsMenu2.Item icon="FeatherHash">
            inspo
          </ChatChannelsMenu2.Item>
          <ChatChannelsMenu2.Item
            icon="FeatherHash"
            rightSlot={<Badge variant="neutral">12</Badge>}
          >
            engineering
          </ChatChannelsMenu2.Item>
          <ChatChannelsMenu2.Item
            icon="FeatherHash"
            rightSlot={<Badge variant="neutral">2</Badge>}
          >
            gtm
          </ChatChannelsMenu2.Item>
        </ChatChannelsMenu2.Folder>
      </ChatChannelsMenu2>
    </div>
  );
};

export default Sidebar;
