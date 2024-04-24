import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Configuration from "./Configuration";

const Editor = (props) => {
  const [editor, seteditor] = useState({});

  useEffect(() => {
    const editor = new EditorJS(Configuration());
    seteditor(editor);
  }, []);

  const onSave = () => {
    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  return (
    <div>
      <h1>Content</h1>
      <div>
        <button
          onClick={() => {
            onSave();
          }}
        >
          Save content
        </button>
        <button> cancel</button>
      </div>
      <div id="editorjs"></div>
    </div>
  );
};

export default Editor;
