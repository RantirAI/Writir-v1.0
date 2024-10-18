"use client";
/*
 * Documentation:
 * Chat Message Bar2 — https://app.subframe.com/f9d9c05fa583/library?component=Chat+Message+Bar2_016a5e9b-a4f1-4a1a-8f3c-54c576c06942
 * Dropdown Menu — https://app.subframe.com/f9d9c05fa583/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Icon Button — https://app.subframe.com/f9d9c05fa583/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Text Field — https://app.subframe.com/f9d9c05fa583/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { DropdownMenu } from "./DropdownMenu";
import { IconButton } from "./IconButton";
import { TextField } from "./TextField";

interface ChatMessageBar2RootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ChatMessageBar2Root = React.forwardRef<
  HTMLElement,
  ChatMessageBar2RootProps
>(function ChatMessageBar2Root(
  { className, ...otherProps }: ChatMessageBar2RootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full max-w-[768px] items-center justify-center rounded-full bg-neutral-100 px-2 py-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SubframeCore.DropdownMenu.Root>
        <SubframeCore.DropdownMenu.Trigger asChild={true}>
          <IconButton size="large" icon="FeatherSparkles" />
        </SubframeCore.DropdownMenu.Trigger>
        <SubframeCore.DropdownMenu.Portal>
          <SubframeCore.DropdownMenu.Content
            side="bottom"
            align="start"
            sideOffset={4}
            asChild={true}
          >
            <DropdownMenu>
              <DropdownMenu.DropdownItem icon="FeatherCloud">
                Connect to Google Drive
              </DropdownMenu.DropdownItem>
              <DropdownMenu.DropdownItem icon="FeatherFilePlus2">
                Upload from computer
              </DropdownMenu.DropdownItem>
            </DropdownMenu>
          </SubframeCore.DropdownMenu.Content>
        </SubframeCore.DropdownMenu.Portal>
      </SubframeCore.DropdownMenu.Root>
      <TextField
        className="h-auto grow shrink-0 basis-0"
        variant="filled"
        label=""
        helpText=""
      >
        <TextField.Input placeholder="Create a Draft about..." />
      </TextField>
    </div>
  );
});

export const ChatMessageBar2 = ChatMessageBar2Root;
