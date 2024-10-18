"use client";
/*
 * Documentation:
 * Footer_Main — https://app.subframe.com/f9d9c05fa583/library?component=Footer_Main_a524f51b-10da-44a4-a803-46ea0ce07abc
 * Toggle Group — https://app.subframe.com/f9d9c05fa583/library?component=Toggle+Group_2026f10a-e3cc-4c89-80da-a7259acae3b7
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { ToggleGroup } from "./ToggleGroup";

interface FooterMainRootProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  text?: string;
  text2?: string;
  className?: string;
}

const FooterMainRoot = React.forwardRef<HTMLElement, FooterMainRootProps>(
  function FooterMainRoot(
    { image, text, text2, className, ...otherProps }: FooterMainRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full items-center justify-center gap-4 px-2 py-2",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex items-center gap-2">
          {image ? <img className="w-4 flex-none" src={image} /> : null}
          {text ? (
            <span className="text-body-bold font-body-bold text-default-font">
              {text}
            </span>
          ) : null}
          {text2 ? (
            <span className="text-caption-bold font-caption-bold text-subtext-color">
              {text2}
            </span>
          ) : null}
        </div>
        <ToggleGroup>
          <ToggleGroup.Item icon="FeatherHardDrive" value="a229020f">
            Data Policy
          </ToggleGroup.Item>
          <ToggleGroup.Item icon="FeatherFileCheck" value="b6150f60">
            Licenses
          </ToggleGroup.Item>
          <ToggleGroup.Item icon="FeatherBuilding" value="ddaf428c">
            Enterprise
          </ToggleGroup.Item>
          <ToggleGroup.Item icon="FeatherCloud" value="4a7729ec">
            Self Host
          </ToggleGroup.Item>
        </ToggleGroup>
      </div>
    );
  }
);

export const FooterMain = FooterMainRoot;
