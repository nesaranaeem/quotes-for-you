const randomQuotes = (keyword) => {
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

//new
const loadLoveQuotes = () => {
  fetch("https://quotable.io/quotes?tags=love%7Chappiness")
    .then((res) => res.json())
    .then((data) => displayUsers(data.results));
};

const displayUsers = (quotes) => {
  const loveHapiness = document.getElementById("love-happiness");
  for (const quote of quotes) {
    console.log(quote);
    const loveHapinessQuotes = document.createElement("div");
    loveHapinessQuotes.classList.add("col-lg-4");
    loveHapinessQuotes.classList.add("col-md-6");
    loveHapinessQuotes.innerHTML = `
          
          <!-- start -->
         
            <div class="border bg-light h-100">
            <p>${quote.content}</p>
            <cite title="${quote.author}">By- ${quote.author}</cite>
            </div>
         
          <!-- end -->
      `;
    loveHapiness.appendChild(loveHapinessQuotes);
  }
};

loadLoveQuotes();
randomQuotes("random");
