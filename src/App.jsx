import FileUploader from "./lib/components/uploader";
import "./App.css";

function App() {
  const handleFile = (file) => {
    console.log("file", file);
  };

  return (
    <>
      <FileUploader handleFile={handleFile} />
    </>
  );
}

export default App;
