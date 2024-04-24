import React, { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import Configuration from "./Configuration";

const Editor = (props) => {
  useEffect(() => {
    const editor = new EditorJS(Configuration());
  }, []);
  return (
    <div>
      <h1>Content</h1>
      <div>
        <button> Save content</button>
        <button> cancel</button>
      </div>
      <div id="editorjs"></div>
    </div>
  );
};

export default Editor;
