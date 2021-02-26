function getQuotes() {
  fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let randomQuote = data.quotes[0];
      console.log(randomQuote);
      let text = randomQuote.text;
      let author = randomQuote.author;
      let string = text + " -" + author;
      return string;
    })
    .then(quote => {
      let marqueeDiv = document.getElementById("marqueeQuote");
      marqueeDiv.innerHTML = quote;
      //setTimeout(getQuotes, 11000);
    });
}
getQuotes();