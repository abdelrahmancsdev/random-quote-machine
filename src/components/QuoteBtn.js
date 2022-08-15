import React from "react";
const QuoteButton = (props) => {
  return (
    <button id="new-quote" onClick={props.generateQuote}>
      Random Quote
    </button>
  );
};
export default QuoteButton;
