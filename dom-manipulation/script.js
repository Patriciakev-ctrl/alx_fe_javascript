const quoteDisplay = document.getElementById("quoteDisplay");
const newQuote = document.getElementById("newQuote");


function getItems() {
    const quotes = JSON.parse(localStorage.getItem("quote")) || [{quote: "Je suis le CHEMIN", category:"biblique"}];
    return quotes;
}

function addItem(item) {
    let items = [{quote: "Je suis le CHEMIN", category:"biblique"}];
    items = getItems();
    items.push();
    localStorage.setItem("quote",JSON.stringify(items));
}


function showRandomQuote(arrayQuote) {
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
    

    form.appendChild(inputForText);
    form.appendChild(inputForCategory);
    form.appendChild(button);
    document.body.appendChild(form);

        button.addEventListener("click",()=>{
            addItem({quote: inputForText.value, category: inputForCategory.value});
        });
    
    


}
document.addEventListener("DOMContentLoaded",()=>{

    newQuote.addEventListener("click", ()=>{
        createAddQuoteForm();
    });

    const quotes = getItems();
    quotes.forEach(element => {
        const ul = document.createElement("ul");
        const newQuote = document.createElement("li");
            newQuote.innerHTML = "<i>"+element.quote+"</i>"+"<br/>"+"<em>"+element.category+"</em>";
            button =document.createElement("button");
            button.textContent = "Remove";
            button.classList.add("remove-btn");
            button.addEventListener("click", ()=>{
                ul.removeChild(newQuote);
            });
            newQuote.appendChild(button);
            ul.appendChild(newQuote);
            quoteDisplay.appendChild(ul);
            quoteDisplay.style.display = "block";
    });
})

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      const quotesArray = importedQuotes.split('\n').map(quote => quote.trim()).filter(quote => quote);
    
      // Create a JSON object
      const jsonData = JSON.stringify(quotesArray, null, 2);
  
      // Create a Blob with the JSON data
      const blob = new Blob([jsonData], { type: 'application/json' });
     addItem(quotesArray)
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);

      
  }


//createAddQuoteForm();