import React, { useState } from "react";

export default function Text(props) {
  let changeval = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" converted tp uppercase", "success");
  };
  let changelower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" converted tp lowercase", "success");
  };
  let handleonchange = (event) => {
    setText(event.target.value);
    if(text === " "){
      let newtext = "";
      setText(newtext);
    }
  };
  let changeclear = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert(" Text is Cleared", "success");
  };
  const countWords = (str) => {
    let words;
    if (text === "") {

      words = 0;
    } else {
      words = str.trim().split(/\s+/).length;
    }
    return words;
  };
  const [text, setText] = useState("kuchh likh le mc");
 

  return (
    <>
      <div className={`container text-${props.mode === 'dark'? 'white': 'black'}`}  >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
           
            className={`form-control text-${props.mode === 'dark'? 'white': 'black'}`}
            id="myBox"
         value={text}
            onChange={handleonchange}
            style={{backgroundColor:props.mode === 'dark'? '#0a1e3c': 'white'}}
            rows="5"
            
          ></textarea>                                                                                                          ,
          <button onClick={changeval} type="button" className="btn btn-primary">
            Convert to UpperCase
          </button>
          <button
            onClick={changelower} 
            type="button "
            className="btn btn-primary mx-4"
          >
            Convert to LowerCase
          </button>
          <button onClick={changeclear} type="button " className="btn btn-primary ">
            Clear
          </button>
          
          
        </div>
      </div>
      <div className={`container my-1 text-${props.mode === 'dark'? 'white': 'black'}`}>
        <h2>Paragraph Details</h2>
        <p>{countWords(text)} words and {text.length} characters</p>
        <p> {0.008 * text.split("").length} minutes to read </p>
        <h3 >Preview</h3>
        <p>{text.length>0? text: "Enter some texts to see preview"}</p>
      </div>
    </>
  );
}
