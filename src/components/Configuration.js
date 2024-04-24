import React from "react";
import SimpleImage from "./simple-image";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import axios from "axios";

const Configuration = () => {
  return {
    holder: "editorjs",
    autofocus: true,

    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */
    tools: {
      // image: {
      //   class: SimpleImage,
      //   inlineToolbar: true,
      // },

      header: Header,
      image: {
        class: ImageTool,
        config: {
          uploader: {
            async uploadByFile(file) {
              // your own uploading logic here
              const formData = new FormData();
              formData.append("file", file);

              const response = await axios.post(
                `http://localhost:4001/api/uploadImage/create`,
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                  withCredentials: false,
                }
              );

              if (response.data.success === 1) {
                return response.data;
              }
            },
            async uploadByUrl(url) {
              const response = await axios.post(
                `http://localhost:4001/api/uploadImage/createByUrl`,
                {
                  url,
                }
              );

              if (response.data.success === 1) {
                return response.data;
              }
            },
          },
          inlineToolbar: true,
        },
      },
    },

    onReady: () => {
      console.log("editor redy");
    },

    onChange: (api, event) => {
      console.log("Now I know that Editor's content changed!", event);
    },

    // data:
    //     {
    //         "time": 1643195431504,
    //         "blocks": [
    //             {
    //                 "id": "o72AO0sY-1",
    //                 "type": "paragraph",
    //                 "data": {
    //                     "text": "sdjcvdhsvcdsghvchgdsvghcds"
    //                 }
    //             },
    //             {
    //                 "id": "6LPs8gr9-a",
    //                 "type": "paragraph",
    //                 "data": {
    //                     "text": "vhjsbdjvbhjdbvjhdhsbvjhdbjfvdv"
    //                 }
    //             },
    //             {
    //                 "id": "c5vaZWuzj8",
    //                 "type": "paragraph",
    //                 "data": {
    //                     "text": "fdjkbdjfjbvfdkbvfdnkbnkfdbfd"
    //                 }
    //             },
    //             {
    //                 type: "image",
    //                 data: {
    //                   url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
    //                   caption: 'Here is a caption field',
    //                   withBorder: false,
    //                   withBackground: true,
    //                   stretched: false
    //                 }
    //               }
    //         ],
    //         "version": "2.22.2"
    //     }
  };
};

export default Configuration;
