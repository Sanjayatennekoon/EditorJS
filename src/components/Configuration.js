import React from "react";

const Configuration = () => {
  return {
    holderId: "editorjs",
    autofocus: true,

    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */
    tools: {
      constructor({ data, api }) {
        this.api = api;
      },

      openToolbar() {
        this.api.toolbar.open();

        // then do something else
      },
    },

    onReady: () => {
      console.log("editor redy");
    },
    onchange: () => {
      console.log("editor_change");
    },
  };
};

export default Configuration;
