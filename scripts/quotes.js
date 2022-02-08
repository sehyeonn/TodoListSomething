const quotes = [
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    },
    {
        quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        author: "Bill Keane"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    {
        quote: "If you don't stand for something you will fall for anything.",
        author: "Gordon A. Eadie"
    },
    {
        quote: "Love all, trust a few, do wrong to none.",
        author: "William Shakespeare, All's Well That Ends Well"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        quote: "For every minute you are angry you lose sixty seconds of happiness.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "If you judge people, you have no time to love them.",
        author: "Mother Teresa"
    },
    {
        quote: "If you can't explain it to a six year old, you don't understand it yourself.",
        author: "Albert Einstein"
    },
    {
        quote: "We don't see things as they are, we see them as we are.",
        author: "Anaïs Nin"
    },
    {
        quote: "Sometimes the questions are complicated and the answers are simple.",
        author: "Dr. Seuss"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `" ${todaysQuote.quote} "`;
author.innerText = `- ${todaysQuote.author}`;