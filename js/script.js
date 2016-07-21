// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
 document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quotes = [
    {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
    tag: "President"
    },
    {
    quote: "The true sign of intelligence is not knowledge but imagination.",
    source: "Albert Einstein",
    tag: "Genius"
    },
    {
    quote: "The coldest winter I ever spent was a summer in San Francisco.",
    source: "Mark Twain",
    tag: "Country"
    },
    {
    quote: "You can do anything, but not everything.",
    source: "David Allen",
    citation: "Making It All Work",
    year: 2009,
    tag: "Author"
    }
];


function getRandomQuote () {
    //get a random number
    var randoNum = Math.floor(Math.random() * quotes.length);
    //get the quote that goes with that number
    var randoQ = quotes[randoNum];
    //return the quote
    return randoQ;
}

function printQuote () {
    // store the quote object
    var randoQobj = getRandomQuote();
    // store html and stuff
    var stuff = '<p class="quote">' + randoQobj.quote + '</p> <p class="source">' + randoQobj.source;
    if (randoQobj.citation) {
        stuff += '<span class="citation">' + randoQobj.citation + '</span>';
    } else {
        stuff += '</p>'
    }
    if (randoQobj.year) {
        stuff += '<span class="year">' + randoQobj.year + '</span>';
    } else {
        stuff += '</p>';
    } 
    
     
    // print out the quote
    document.getElementById('quote-box').innerHTML = stuff;
}