import React, { useRef, useState } from "react";
import styled from "styled-components";
const UploadButton = styled.div`
  border: 1px dashed #1677ff;
  padding: 0.25rem 1rem;
  cursor: pointer;
`;

const Caption = styled.span`
  padding: 0.25rem 1rem;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;
const FileUploader = ({ handleFile }) => {
  const hiddenFileInput = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFileName(fileUploaded.name);
    handleFile(fileUploaded);
  };

  return (
    <>
      <UploadButton onClick={handleClick}>Upload a file</UploadButton>
      <Caption>{fileName}</Caption>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};
export default FileUploader;
