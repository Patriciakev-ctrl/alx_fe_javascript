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
    const labelForText = document.createElement("label");
    labelForText.innerHTML = "Quote Text";
    const inputForText = document.createElement("input");
    inputForText.setAttribute("type","text");

    const labelForCategory = document.createElement("label");
    labelForCategory.innerHTML = "Quote Category";
    const inputForCategory = document.createElement("input");
    inputForText.setAttribute("type","text");

    const button = document.createElement("button");
    button.innerHTML = "Create";

    form.appendChild(labelForText);
    form.appendChild(inputForText);
    form.appendChild(labelForCategory);
    form.appendChild(inputForCategory);
    form.appendChild(button);
    document.body.appendChild(form);


}

createAddQuoteForm();