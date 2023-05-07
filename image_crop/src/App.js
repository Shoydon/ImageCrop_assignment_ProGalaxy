import React from 'react';
// import ReactCrop from 'react-image-crop'
// import 'react-image-crop/dist/ReactCrop.css'
// import Cropper from 'react-easy-crop'
import Cropper from 'cropperjs'
import "cropperjs/dist/cropper.min.css"
import './App.css'

import { useState, useRef, useEffect } from "react";
import upload from './upload-icon.png' ;

export default () => {
  const inpRef = useRef(null)
  const [file, setFile] = useState("");
  const handleChange = (e) => {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    setFile(fileURL);
  }
  const cropImage = () => {
    let image = document.getElementById("img")
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      
      // crop(ev){
      //   console.log(ev.detail.x);
      //   console.log(ev.detail.y);
      //   console.log(ev.detail.width);
      //   console.log(ev.detail.height);
      //   console.log(ev.detail.rotate);
      //   console.log(ev.detail.scaleX);
      //   console.log(ev.detail.scaleY);
      // },
      autoCrop: false,
      cropBoxMovable: true,
      preview: document.getElementById("temp")
      
    })
    console.log(cropper.getData())
    cropper.crop()
    cropper.
  }
  return(
    <div className="MainApp">
      <h2>Tap on the upload icon to insert your image</h2>
      <div>
        <img width={100} src={upload} onClick={() => {inpRef.current.click();}}/>
        <input type="file" onChange={handleChange} ref={inpRef} style={{display: "none"}}/><br/><br/><br/>
      </div>
      <button className="clear-image" onClick={() => {setFile()}}>Clear</button><br/><br/><br/>
      <div>
        <img src={file} alt="no image selected" id="img"/>
      </div>
      <button onClick={() => cropImage()} > Crop</button>
        <div className='img-prev'></div>
        <div>

        <img id='temp' alt='just tp' />
        </div>
    </div>
  )
}


function MainApp() {
  const inpRef = useRef(null);
  const [file, setFile] = useState("");
  const [filename, setFileName] = useState("");
  // const [crop, setCrop] = useState();2
  // const [cropWidth, setCropWidth] = useState(200);
  // const [cropHeight, setCropHeight] = useState(200);

  // const [crop, setCrop] = useState<Crop>({
  //   unit: '%',
  //   x: 25,
  //   y: 25,
  //   width: 50,
  //   height: 50
  // })

  
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);

  }
  
  function cropImage() {
    console.log(document.getElementById("img"));
    const image = document.getElementById("img")
    let canvas = document.createElement("canvas");
    canvas.setAttribute("width",200);
    canvas.setAttribute("height",200);
    let context1 = canvas.getContext("2d");
    context1.drawImage(document.getElementById("img"),0,0,200,200);
    console.log("cropImage",file)
    const cropper = new Cropper(canvas, {
      aspectRatio: 16 / 9,
      // crop(ev){
      //   console.log(ev.detail.x);
      //   console.log(ev.detail.y);
      //   console.log(ev.detail.width);
      //   console.log(ev.detail.height);
      //   console.log(ev.detail.rotate);
      //   console.log(ev.detail.scaleX);
      //   console.log(ev.detail.scaleY);
      // },
      autoCrop: false,
      
    })

    console.log(cropper.getImageData())
    // console.log((cropper.getImageData().left).toString())
    // console.log((cropper.getImageData().top).toString())
    
  }

  // function onImageLoad(e){
  //   const {naturalWidth: width, naturalHeight: height} = e.currentTarget;
  // }

  return (
    <div className="App">
      <h2>Tap on the upload icon to insert your image</h2>
      <div>
        <img width={100} src={upload} onClick={() => {inpRef.current.click();}}/>
        <input type="file" onChange={handleChange} ref={inpRef} style={{display: "none"}}/><br/><br/><br/>
      </div>
      <button className="clear-image" onClick={() => {setFile()}}>Clear</button><br/><br/><br/>
      {/* <button className="crop">Crop</button><br/><br/><br/> */}
      {/* {file ? (
        <img src={file} alt="ff"/>
        ) : (
          <img src={upload} width={40} alt="rr"/>
          )} */}
        {/* <ReactCrop crop={crop} aspect={16/9} onChange={c => setCrop(c)}>

          <img src={file} alt="no image selected" id="img" onLoad={onImageLoad}/>
        </ReactCrop> */}
        {/*onLoad={() => {console.log("inner function")}}*/}
        <img src={file} alt="no image selected" id="img" onLoad={cropImage}/>
        <div className='img-prev'></div>
    </div>
  );
}

// export default App;
