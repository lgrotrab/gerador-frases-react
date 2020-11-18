import React from "react";
import { FaQuoteLeft, FaTwitterSquare, FaRedo } from "react-icons/fa";
import "./Quote.css";

const Quote = ({ quote, author, getQuote, postTwitter }) => {
  //verifica se a frase é longa para mudar o tamanho da letra
  let isLong;
  if (quote.length > 120) {
    isLong = "long-quote";
  } else {
    isLong = "";
  }
  return (
    //retorna o container com a frase e os botões
    <div className="quote-container">
      <div className={`quote-text ${isLong}`} id="quote">
        <FaQuoteLeft />
        {quote}
      </div>
      <div className="quote-author"> {author}</div>
      <div className="button-container">
        <button
          className="twitter-button"
          title="Twitte isso"
          onClick={postTwitter}
        >
          <FaTwitterSquare />
        </button>
        <button className="new-quote" onClick={getQuote}>
          <FaRedo />
        </button>
      </div>
    </div>
  );
};

export default Quote;
