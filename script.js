const quoteElement = document.querySelector("main .quote");
const authorElement = document.querySelector("main .author");
const anotherQuoteButton = document.querySelector("main button");

const fetchQuoteApi = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data;
};

const populateQuote = async () => {
  const data = await fetchQuoteApi();
  const quote = data.content;
  const author = data.author;

  quoteElement.textContent = quote;
  authorElement.textContent = `-${author}`;
};

anotherQuoteButton.addEventListener("click", populateQuote);

populateQuote();
