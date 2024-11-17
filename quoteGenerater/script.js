if (!localStorage.getItem("thought")) {
  const thought = [
    {
      quote:
        "if you are good no matter how people behave with you, you always win.",
      author: "siddique",
    },
    {
      quote: "The rarest of all human qualities is consistency.",
      author: "jeremey bentham",
    },
    {
      quote: "I am loyal because it's in me! Not because I need You.",
      author: "abdul",
    },
    {
      quote: "The magic you are looking for... is in the work you're avoiding.",
      author: "Stephen Hawking",
    },
    {
      quote:
        "Try not to become a man of success, But rather try to become a man of value.",
      author: "Albert Einstein",
    },
    {
      quote: "If you cannot decide, the answer is NO.",
      author: "Naval Ravikant",
    },
    {
      quote:
        "Vision without action is a daydream. Action without vision is a nightmare.",
      author: "japanese Proverb",
    },
    {
      quote:
        "Your life does not get better by chance, it gets better by change.",
      author: "jim rohn",
    },
    {
      quote:
        "A fool gives full vent to his anger, but A WISE MAN keeps himself under control.",
      author: "29:11",
    },
    {
      quote:
        "Once you carry your own water, you will learn the value of every drop.",
      author: "afrricen proverb",
    },
  ];
  localStorage.setItem("thought", JSON.stringify(thought));
}

function displayQuote() {
  const storeQuotes = JSON.parse(localStorage.getItem("thought"));
  if (storeQuotes && storeQuotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * storeQuotes.length);  //

    const randomQuote = storeQuotes[randomIndex];

    let quate = document.getElementById("quote");
    quate.innerText = randomQuote.quote;
    quate.style.fontSize = "25px";
    document.getElementById("author").innerText = "`" + randomQuote.author;
  } else {
    document.getElementById("quote").innerText = "No Quote Found";
    document.getElementById("author").innerText = "";
  }
}

function addingQuote() {
  const storeQuotes = JSON.parse(localStorage.getItem("thought"));
  let generateNewQuote = document.getElementById("new-quote").value;
  let generateAuthor = document.getElementById("author-name").value;

  if(!generateNewQuote || !generateAuthor){
     return alert("Please Fill the Quote and Author Name");
  }

  let addingArray = {
    quote: generateNewQuote,
    author: generateAuthor,
  };
  //  console.log(addingArray);

  storeQuotes.push(addingArray);
  localStorage.setItem("thought", JSON.stringify(storeQuotes));
  alert("Quote Saved Successfully");
  document.getElementById("new-quote").value = "";
  document.getElementById("author-name").value = "";
}
