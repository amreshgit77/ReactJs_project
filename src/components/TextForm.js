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
    props.showAlert("converted tp lowercase", "success");
  };
  let handleonchange = (event) => {
    setText(event.target.value);
    if (text === " ") {
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
    if (str.length !== 0) return str;
  };

  const handlecopy=()=> {
    navigator.clipboard.writeText(text);   
    props.showAlert(" Text is Copied", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}
  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container text-${
          props.mode === "dark" ? "white" : "black"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${
              props.mode === "dark" ? "white" : "black"
            }`}
            id="myBox"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#0a1e3c" : "white"
            }}
            rows="5"
            placeholder="Chal! Chal! Likh Kuchh"
          ></textarea>{" "}
          
          <button disabled={text.length===0} onClick={changeval} type="button" className="btn btn-primary mx-1 my-1" >
            Convert to UpperCase
          </button>
          <button
          disabled={text.length===0}
            onClick={changelower}
            type="button "
            className="btn btn-primary  mx-1 my-1"
          >
            Convert to LowerCase
          </button>
          <button
          disabled={text.length===0}
            onClick={changeclear}
            type="button "
            className="btn btn-primary mx-1 my-1 "
           
          >
            Clear
          </button>
          <button
          disabled={text.length===0}
            onClick={handlecopy}
            type="button "
            className="btn btn-primary mx-1 my-1 "
          >
           Copy
          </button>
          <button
          disabled={text.length===0}
            onClick={handleExtraSpaces}
            type="button "
            className="btn btn-primary mx-1 my-1 "
          >
           remove Extra Space
          </button>
        </div>
      </div>
      <div
        className={`container my-1 text-${
          props.mode === "dark" ? "white" : "black"
        }`}
      >
        <h2>Paragraph Details</h2>
        <p>
          {text.split(/\s+/).filter(countWords).length} words and {text.length}{" "}
          characters
        </p>
        <p> {0.008 * text.split(" ").filter(countWords).length} minutes to read </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter some texts to see preview"}</p>
      </div>
    </>
  );
}
