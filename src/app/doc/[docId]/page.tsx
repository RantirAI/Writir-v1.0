"use client";

import dynamic from "next/dynamic";
import React from "react";

type Props = {
  params: {
    docId: string;
  };
};

const page = ({ params }: Props) => {
  const docId = params.docId;

  const BlocksuiteEditorContainerNoSSR = dynamic(
    () => import("@/components/Blocksuite/BlocksuiteEditorContainer"),
    { ssr: false }
  );

  console.log(docId);

  return <BlocksuiteEditorContainerNoSSR docId={docId} />;
};

export default page;
