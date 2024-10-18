/* eslint-disable @next/next/no-img-element */

"use client";
import React from "react";
import { FooterMain } from "@/subframe/components/FooterMain";
import BlocksuiteTopbar from "../Blocksuite/BlocksuiteTopbar";
import Sidebar from "../Sidebar";
import { useParams } from "next/navigation";
import Topbar from "../Topbar";
import { BlocksuiteProvider } from "@/context/blocksuite/BlocksuiteProvider";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const { docId } = useParams();

  return (
    <BlocksuiteProvider>
      <div className="flex h-screen w-full flex-col items-start bg-neutral-50">
        {docId ? <BlocksuiteTopbar /> : <Topbar />}
        <div className="flex w-full grow shrink-0 basis-0 items-start">
          <Sidebar />
          {children}
        </div>
        <FooterMain
          image="https://res.cloudinary.com/subframe/image/upload/v1728678148/uploads/2266/lq1trxcanscyixjcy467.svg"
          text="Computir, Inc. All rights reserved. Version 1.2 2024"
          text2="Writir is a product of Computir AI Suite"
        />
      </div>
    </BlocksuiteProvider>
  );
};

export default AppLayout;
