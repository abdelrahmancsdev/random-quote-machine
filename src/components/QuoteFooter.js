import React from "react";
import ShareOptions from "./ShareOptions";
const QuoteFooter = (props) => {
  return (
    <div className="quote-footer animate">
      <cite id="author">{props.quotes.length ? props.author : ""}</cite>
      {props.randomQuote ? (
        <ShareOptions text={props.text} author={props.author} />
      ) : (
        ""
      )}
    </div>
  );
};
export default QuoteFooter;
