import React, { useState } from "react";

export default function Text(props) {
  let changeval = () => {
    //console.log("button clicked");
    let newText = text.toUpperCase()
    setText(newText);
  };
  let changelower = () => {
    //console.log("button clicked");
    let newText = text.toLowerCase()
    setText(newText);
  };
  let handleonchange = (event) => {
    //console.log("luchh toh ho raha hai");
    setText(event.target.value);
  };
  const [text, setText] = useState("kuchh likh le mc");
  //setText("kya re randi");
  return (
    <>
    <div>
      <h1 class="p-1 mb-2 bg-primary text-white">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleonchange}
          rows="5" 
        ></textarea>
        <button onClick={changeval} type="button" class="btn btn-primary">Convert to UpperCase</button>
        <button onClick={changelower} type="button mx-4" class="btn btn-primary">Convert to LowerCase</button>
      </div>
    </div>
    <div className="container my-1">
    <h3>Paragraph Details</h3>
    <p > {text.split("").length} words and {text.length} charachters </p>
    <p> {0.008*text.split("").length} minutes to read </p>
    <h3 class="p-1 mb-1 bg-warning text-dark">Preview</h3>
    <p>{text}</p>
    </div>
    </>
  );
}
