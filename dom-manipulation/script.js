const quoteDisplay = document.getElementById("quoteDisplay");
const newQuote = document.getElementById("newQuote");
const arrayQuote = [{
    quote: "",
    category: ""
}];

function showRandomQuote() {
    let randomNumber = 99*(Math.random());
    return arrayQuote[randomNumber];
}

function createAddQuoteForm() {
    const form = document.createElement("form");
    
    const inputForText = document.createElement("input");
    inputForText.setAttribute("type","text");
    inputForText.setAttribute("placeholder","Enter a new quote");
    inputForText.setAttribute("id","newQuoteText");

    
    const inputForCategory = document.createElement("input");
    inputForCategory.setAttribute("type","text");
    inputForCategory.setAttribute("placeholder","Enter quote category");
    inputForCategory.setAttribute("id","newQuoteCalegory");

    const button = document.createElement("button");
    button.innerHTML = "Add Quote";
    button.setAttribute("onclick","addQuote()");
    
    form.appendChild(labelForText);
    form.appendChild(inputForText);
    form.appendChild(labelForCategory);
    form.appendChild(inputForCategory);
    form.appendChild(button);
    document.body.appendChild(form);


}

newQuote.addEventListener("click", ()=>{});

//createAddQuoteForm();