import React from 'react';
import ReactCrop from 'react-image-crop'
import { useState, useRef } from "react";

function App() {

  const inpRef = useRef(null);

  const [file, setFile] = useState("");
  // const [src, setSrc] = useState("")

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function uploadImage(){
    inpRef.current.click();
  }

  return (
    <div className="App">
      <h2>Insert your image here</h2>
      <div>
        {/* <img width={100} src='../public/upload-icon.png' onClick={uploadImage}/> */}
        <input type="file" onChange={handleChange} ref={inpRef}/><br/><br/><br/>
      </div>
      <button className="clear-image" onClick={() => {setFile()}}>Clear</button><br/><br/><br/>
      <button className="crop">Crop</button><br/><br/><br/>
      {file ? (
        <img src={file} alt=""/>
        ) : (
          <img src="./upload-icon.png" alt="rr"/>
      )}
    </div>
  );
}

export default App;
