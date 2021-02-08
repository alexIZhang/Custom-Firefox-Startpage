function getQuotes() {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => {
        var randomIndex = Math.floor((Math.random() * data.length));
        var quote = data[randomIndex].text;
        var quoteOwner = data[randomIndex].author;
        if (quoteOwner === null) {
          return quote;
        } else {
          return (quote + " -" + quoteOwner);
        }
      })
      .then(quote => {
        let marqueeDiv = document.getElementById("marqueeQuote");
        marqueeDiv.innerHTML = quote;
        //setTimeout(getQuotes, 11000);
      });
    }
getQuotes();