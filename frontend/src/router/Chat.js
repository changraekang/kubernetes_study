import React, { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Depth from "../components/Depth";

const EditorComponent = (props) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [setValue]);
  const onChange = (e) => {
    setValue(e);
  };
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
        ],
      },
    };
  }, []);
  const onSubmit = () => {
    console.log(value);
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "link",
    "image",
    "video",
    "width",
  ];

  return (
    <>
      <Depth />
      <ReactQuill
        value={value}
        theme="snow"
        onChange={onChange}
        modules={modules}
        formats={formats}
      ></ReactQuill>
      <button onClick={onSubmit}>제출</button>
    </>
  );
};

export default EditorComponent;
