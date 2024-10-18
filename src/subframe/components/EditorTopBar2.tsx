"use client";
/*
 * Documentation:
 * Editor Top Bar2 — https://app.subframe.com/f9d9c05fa583/library?component=Editor+Top+Bar2_b97295dd-d2de-47ae-b117-3816c181586e
 * Dropdown Menu — https://app.subframe.com/f9d9c05fa583/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Button — https://app.subframe.com/f9d9c05fa583/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Toggle Group — https://app.subframe.com/f9d9c05fa583/library?component=Toggle+Group_2026f10a-e3cc-4c89-80da-a7259acae3b7
 * Icon Button — https://app.subframe.com/f9d9c05fa583/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Select — https://app.subframe.com/f9d9c05fa583/library?component=Select_bb88f90b-8c43-4b73-9c2f-3558ce7838f3
 * Text Field — https://app.subframe.com/f9d9c05fa583/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 * Switch — https://app.subframe.com/f9d9c05fa583/library?component=Switch_7a464794-9ea9-4040-b1de-5bfb2ce599d9
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { DropdownMenu } from "./DropdownMenu";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { Switch } from "./Switch";

interface EditorTopBar2RootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  text?: string;
  className?: string;
}

const EditorTopBar2Root = React.forwardRef<HTMLElement, EditorTopBar2RootProps>(
  function EditorTopBar2Root(
    { children, text, className, ...otherProps }: EditorTopBar2RootProps,
    ref
  ) {
    return children ? (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full cursor-pointer items-center gap-1 border-b border-solid border-brand-50 bg-neutral-50 px-4 py-3",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {children}
      </div>
    ) : null;
  }
);

export const EditorTopBar2 = EditorTopBar2Root;
