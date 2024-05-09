import React from "react";

export default function About(props) {
  return (
    <div className="accordion my-2"  id="accordionExample" >
      <div className="accordion-item " >
        <h2 className="accordion-header" id="headingOne">
          <button
            className={`accordion-button bg-${props.mode} text-${props.mode === "dark" ? "white" : "black"} `}
            
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <strong > Analyze Your Text</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className={`accordion-body text-${props.mode === "dark" ? "white": "black"}`}
          style={{
              backgroundColor: props.mode ==="dark" ? "#0a1e3c" : "white",
            }} >
            Textutils gives you a way to analyze your text quickly and
            efficiently. Be it word count, character count or
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
          className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "white" : "black"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <strong> Free to Use</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className={`accordion-body text-${props.mode === "dark" ? "white": "black"}`}
          style={{
            backgroundColor: props.mode === "dark" ? "#0a1e3c" : "white",
          }} >
            Textutils is a free character counter tool that provides instant
            character count & word count statistics for a given text. Textutils
            reports the number of words and characters. Thus it is suitable for
            writing text with word/ character limit
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "white" : "black"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <strong> Browser compatible</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className={`accordion-body text-${props.mode === "dark" ? "white": "black"}`}
          style={{
            backgroundColor: props.mode === "dark" ? "#0a1e3c" : "white",
          }} >
            This word counter software works in any web browsers such as Chrome,
            Firefox, Internet Explorer, Safari, Opera. It sults to count
            characters in facebook, blog, books, excel document, pdf
            document, essays, etc.
          </div>
        </div>
      </div>
    </div>
  );
}
