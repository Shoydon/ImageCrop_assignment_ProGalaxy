import React from 'react';
import ReactCrop from 'react-image-crop'
// import 'react-image-crop/dist/ReactCrop.css'
// import Cropper from 'react-easy-crop'
import Cropper from 'cropperjs'

import { useState, useRef, useEffect } from "react";
import upload from './upload-icon.png' ;


function App() {

  const inpRef = useRef(null);
  const [file, setFile] = useState("");
  const [crop, setCrop] = useState();
  const [cropWidth, setCropWidth] = useState(200);
  const [cropHeight, setCropHeight] = useState(200);

  
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));

    const image = document.getElementById("img")
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      crop(ev){
        console.log(ev.detail.x);
        console.log(ev.detail.y);
        console.log(ev.detail.width);
        console.log(ev.detail.height);
        console.log(ev.detail.rotate);
        console.log(ev.detail.scaleX);
        console.log(ev.detail.scaleY);
      },
      autoCrop: false,
      
    })
  }

  function editImage(){
    return(
      <div>

      </div>
    )
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
        <img src={file} alt="no image selected" id="img"/>
        <div className='img-prev'></div>
    </div>
  );
}

export default App;
