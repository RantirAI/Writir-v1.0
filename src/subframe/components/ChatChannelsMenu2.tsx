"use client";
/*
 * Documentation:
 * Chat Channels Menu2 — https://app.subframe.com/f9d9c05fa583/library?component=Chat+Channels+Menu2_7828946b-f756-4ab3-9e9c-bedadbbe3395
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconButton } from "./IconButton";
import { Accordion } from "./Accordion";

interface FolderProps extends React.ComponentProps<typeof Accordion> {
  children?: React.ReactNode;
  label?: string;
  icon?: SubframeCore.IconName;
  className?: string;
}

const Folder = React.forwardRef<HTMLElement, FolderProps>(function Folder(
  { children, label, icon = null, className, ...otherProps }: FolderProps,
  ref
) {
  return (
    <Accordion
      className={SubframeCore.twClassNames(
        "group/019cd06a cursor-pointer",
        className
      )}
      trigger={
        <div className="flex w-full items-center gap-2 rounded-md px-3 py-2 group-hover/019cd06a:bg-neutral-50">
          <SubframeCore.Icon
            className="text-body font-body text-default-font"
            name={icon}
          />
          {label ? (
            <span className="line-clamp-1 grow shrink-0 basis-0 text-body-bold font-body-bold text-subtext-color">
              {label}
            </span>
          ) : null}
          <IconButton size="small" icon="FeatherPin" />
          <IconButton size="small" />
          <Accordion.Chevron />
        </div>
      }
      ref={ref as any}
      {...otherProps}
    >
      {children ? (
        <div className="flex w-full flex-col items-start gap-1 pt-1">
          {children}
        </div>
      ) : null}
    </Accordion>
  );
});

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  children?: string;
  icon?: SubframeCore.IconName;
  rightSlot?: React.ReactNode;
  className?: string;
}

const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  {
    selected = false,
    children,
    icon = "FeatherFile",
    rightSlot,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/a455feda flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-white",
        { "bg-neutral-100 px-2 py-1 hover:bg-neutral-100": selected },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex items-center gap-2 rounded-md border border-solid border-brand-100 bg-default-background px-1 py-1">
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-body font-body text-subtext-color",
            { "text-default-font": selected }
          )}
          name={icon}
        />
      </div>
      {children ? (
        <span
          className={SubframeCore.twClassNames(
            "line-clamp-1 grow shrink-0 basis-0 text-body font-body text-subtext-color",
            { "text-body-bold font-body-bold text-default-font": selected }
          )}
        >
          {children}
        </span>
      ) : null}
      {rightSlot ? (
        <div className="flex flex-col items-start gap-2">{rightSlot}</div>
      ) : null}
    </div>
  );
});

interface ChatChannelsMenu2RootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const ChatChannelsMenu2Root = React.forwardRef<
  HTMLElement,
  ChatChannelsMenu2RootProps
>(function ChatChannelsMenu2Root(
  { children, className, ...otherProps }: ChatChannelsMenu2RootProps,
  ref
) {
  return children ? (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full flex-col items-start px-2 py-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {children}
    </div>
  ) : null;
});

export const ChatChannelsMenu2 = Object.assign(ChatChannelsMenu2Root, {
  Folder,
  Item,
});
