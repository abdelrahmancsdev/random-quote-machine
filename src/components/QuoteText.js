import React from "react";
const QuoteText = (props) => {
  return (
    <p id="text" className="animate">
      {props.quotes.length ? props.text : ""}
    </p>
  );
};
export default QuoteText;
