import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useRef, useState } from "react";

const options = {
  height: 200,
  buttonList: [
    ["undo", "redo"],
    ["font", "fontSize", "formatBlock"],
    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
    ["removeFormat"],
    ["outdent", "indent"],
    ["align", "horizontalRule", "list", "lineHeight"],
    ["table", "link", "image", "video"],
    ["fullScreen", "showBlocks", "codeView"],
  ],
};

export default function SuneditorCustom({ setContent, content, setNext }) {
  const [charCount, setCharCount] = useState(0);
  const editor = useRef();
  const maxLength = 1500;
  const handleChange = (value) => {
    let sanitizedValue = value.replace(/<[^>]*>/g, "");
    sanitizedValue = sanitizedValue.slice(0, maxLength);
    setContent(value);
    setCharCount(sanitizedValue.length);
    if (sanitizedValue.length === maxLength) {
      setNext(false);
    } else {
      setNext(true);
    }
  };

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  const isExceeded = charCount === maxLength;

  return (
    <div className="flex flex-col items-end justify-center w-full ">
      <div className="flex items-center justify-center pb-[25px] w-full">
        <div className="h-72 pb-[42.84px]  w-full ">
          <SunEditor
            getSunEditorInstance={getSunEditorInstance}
            width="100%"
            height="12.5rem"
            setContents={content}
            // defaultValue={content}
            onChange={handleChange}
            setOptions={options}
          />
        </div>
      </div>
      <p className={`${isExceeded ? "text-red-700" : ""}`}>
        Character Count: {charCount} / {maxLength}
      </p>
    </div>
  );
}
