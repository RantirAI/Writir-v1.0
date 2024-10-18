"use client";
import React, { useState } from "react";
import { initEditor } from "./editor";

import { createContext, useContext } from "react";
import { AffineEditorContainer, EdgelessEditor } from "@blocksuite/presets";
import { DocCollection } from "@blocksuite/store";

export const EditorContext = createContext<{
  editor: AffineEditorContainer | EdgelessEditor;
  collection: DocCollection | null;
  setEdgeLess: React.Dispatch<React.SetStateAction<boolean>>;
  edgeLess: boolean;
} | null>(null);

export const BlocksuiteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [edgeLess, setEdgeLess] = useState(false);

  const { editor, collection } = initEditor(edgeLess);

  return (
    <EditorContext.Provider
      value={{
        editor,
        collection,
        setEdgeLess,
        edgeLess,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within a BlocksuiteProvider");
  }
  return context;
}
