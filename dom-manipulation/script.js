//the place where the quotes will be display
const quoteDisplay = document.getElementById("quoteDisplay");
//to store the new quote
const newQuote = document.getElementById("newQuote");
//store all the quotes
let quotes;

//to get items from the localstorage
function getQuotes() {
    quotes = JSON.parse(localStorage.getItem("quote")) || [];
    return quotes;
}

 //to add one item to localstorage
 function addQuote() {
    
    let items = getQuotes();
    items.push();
    console.log(items);
    localStorage.setItem("quote",JSON.stringify(items));
    alert("This the input value:  "+inputForText.value);
}


//to show randomly a quote from the localstorage
function showRandomQuote(arrayQuote) {
    let randomNumber = 99*(Math.random());
    return arrayQuote[randomNumber];
}

//create a form dynamically using DOM, with a simple listener
function createAddQuoteForm() {
    newQuote.style.display = "none";
    const form = document.createElement("form");

    
    const inputForText = document.createElement("input");
    inputForText.type = "text";
    inputForText.placeholder = "Enter a new quote";
    inputForText.id = "newQuoteText";

    
    const inputForCategory = document.createElement("input");
    inputForCategory.type = "text";
    inputForCategory.placeholder = "Enter quote category";
    inputForCategory.id = "newQuoteCategory";

    const button = document.createElement("button");
    button.innerHTML = "Add Quote";
   
    

    form.appendChild(inputForText);
    form.appendChild(inputForCategory);
    form.appendChild(button);
    quoteDisplay.appendChild(form);
    
    button.onclick = function addQuote(){ 
        let items = getQuotes();
        items.push({quote:document.getElementById("newQuoteText").value, category:document.getElementById("newQuoteCategory").value});
        console.log(items);
        localStorage.setItem("quote",JSON.stringify(items));
        alert("This the input value:  "+inputForText.value);
    };

}
//Call the form creation after the click event on the button
    newQuote.addEventListener("click",()=>{createAddQuoteForm();
});

//Load all the stored quotes while the page is charging
document.addEventListener("DOMContentLoaded", ()=>{
        const quotes = getQuotes();
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
 });
 function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      localStorage.setItem("quote",JSON.stringify(quotes));
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

  document.getElementById("exportFile").addEventListener("click",()=>{

//convert quotes into JSON Object
const quotesJson = JSON.stringify(quotes);

//convert the JSON Object into BLOB Object
const quotesBlob = new Blob([quotesJson], {type: 'application/json'});

//create the download link
const url = URL.createObjectURL(quotesBlob);

//create the download link
const a = document.createElement("a");
a.href = url;
//set the downloaded file name
a.download = "quotes.json";

//append the link
document.body.appendChild(a);
a.click();

//remove the link after download it
document.body.removeChild(a);
URL.revokeObjectURL(url);


  })