const quotes = (keyword) => {
  const url = `https://api.quotable.io/${keyword}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => randomQuote(data));
};

const randomQuote = (data) => {
  const randomQuote = document.getElementById("random-quote");
  randomQuote.innerHTML = `
  <p>${data.content}</p>
  `;
  const randomQuoteAuthor = document.getElementById("random-quote-author");
  randomQuoteAuthor.innerHTML = `
  <cite title="${data.author}">${data.author}</cite>
  `;
};
quotes("random");
