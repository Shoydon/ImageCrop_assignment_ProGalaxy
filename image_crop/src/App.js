import React from 'react';
// import ReactCrop from 'react-image-crop'
// import 'react-image-crop/dist/ReactCrop.css'
// import Cropper from 'react-easy-crop'
import Avatar from 'react-avatar-edit'

import { useState, useRef, useCallback } from "react";
import upload from './upload-icon.png' ;


function App() {

  const inpRef = useRef(null);
  const [file, setFile] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="App">
      <h2>Tap on the upload icon to insert your image</h2>
      <div>
        <img width={100} src={upload} onClick={() => {inpRef.current.click();}}/>
        <input type="file" onChange={handleChange} ref={inpRef} style={{display: "none"}}/><br/><br/><br/>
      </div>
      <button className="clear-image" onClick={() => {setFile()}}>Clear</button><br/><br/><br/>
      <button className="crop">Crop</button><br/><br/><br/>
      {/* {file ? (
        <img src={file} alt="ff"/>
        ) : (
          <img src={upload} width={40} alt="rr"/>
          )} */}
        <img src={file} alt="no image selected"/>
    </div>
  );
}

export default App;
