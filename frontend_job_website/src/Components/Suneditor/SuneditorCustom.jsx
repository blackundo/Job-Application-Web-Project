import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useRef } from "react";

const options = {
  showPathLabel: false,
  charCounter: true,
  maxCharCount: 1500,
  minHeight: "200px",
  maxHeight: "200px",
  buttonList: [
    ["undo", "redo"],
    ["font", "fontSize", "formatBlock"],
    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
    ["removeFormat"],
    ["outdent", "indent"],
    ["align", "horizontalRule", "list", "lineHeight"],
    ["table", "link"],
    ["fullScreen", "showBlocks", "codeView"],
  ],
};

export default function SuneditorCustom({ setContent, content, setNext }) {
  const editor = useRef();
  const handleChange = (value) => {
    if (value.includes("<img")) {
      // Có thẻ img -> Báo lỗi
      alert("Không được nhập hình ảnh!");
      setNext(false);
      return;
    }
    setContent(value);
  };

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  // const onImageUploadBefore = (files, info, core, uploadHandler) => {
  //   console.log(hasInsertedImage);
  //   if (hasInsertedImage) {
  //     editor.current.core.getEditor().querySelector("img").remove();
  //     console.error("You can only insert one image");
  //     return;
  //   }
  //   () => {
  //     console.log("inserting image");
  //     setHasInsertedImage(true);
  //   };
  //   // Check if the file is an image and has a valid URL
  //   if (files.length === 1 && /^https?:\/\/\S+\.\S+/.test(files[0])) {
  //     setHasInsertedImage(true);
  //     const imageUrl = files[0];
  //     const res = {
  //       result: [
  //         {
  //           url: imageUrl,
  //           name: "inserted-image",
  //         },
  //       ],
  //     };

  //     uploadHandler(res);
  //   } else {
  //     // Reject the upload
  //     console.error("Invalid image URL");
  //   }
  // };

  return (
    <div className="flex flex-col items-end justify-center w-full ">
      <div className="flex items-center justify-center pb-[25px] w-full">
        <div className="h-72 pb-[42.84px]  w-full">
          <SunEditor
            getSunEditorInstance={getSunEditorInstance}
            width="100%"
            height="12.5rem"
            setContents={content}
            // onImageUploadBefore={(e) => onImageUploadBefore(e)}
            onChange={handleChange}
            setOptions={options}
          />
        </div>
      </div>
    </div>
  );
}
