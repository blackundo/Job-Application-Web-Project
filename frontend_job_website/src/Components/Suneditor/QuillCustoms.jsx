import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useRef } from "react";

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

export default function QullCustoms({ setContent, content }) {
  const handleChange = (value) => {
    setContent(value);
  };
  const editor = useRef();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };
  return (
    <div className="flex flex-col items-end justify-center w-full">
      <div className="flex items-center justify-center pb-[25px] w-full">
        <div className="h-72 pb-[42.84px]  w-full ">
          <SunEditor
            getSunEditorInstance={getSunEditorInstance}
            width="100%"
            height="12.5rem"
            setContents={content}
            onChange={handleChange}
            setOptions={options}
          />
        </div>
      </div>
    </div>
  );
}
