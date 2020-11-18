import React, { useState, useEffect } from "react";
import "./App.css";
import Quote from "./Quote/Quote";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const proxyUrl = "https://enigmatic-river-44240.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  //carrega a frase quando o site é aberto
  useEffect(() => {
    getQuote();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getQuote = () => {
    setIsLoaded(false);
    fetch(proxyUrl + apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data.quoteText);
        if (data.quoteAuthor === "") {
          setAuthor("Desconhecido");
        } else {
          setAuthor(data.quoteAuthor);
        }
        setIsLoaded(true);
      })
      .catch((error) => {
        getQuote();
      });
  };
  //Abre a página do twitter com a frase gerada
  const postTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="App background">
      {/* realiza um teste para verificar se a página já foi carregada*/}
      {isLoaded ? (
        <Quote
          quote={quote}
          author={author}
          getQuote={getQuote}
          postTwitter={postTwitter}
        />
      ) : (
        <div className="loader"> </div>
      )}
    </div>
  );
}

export default App;
