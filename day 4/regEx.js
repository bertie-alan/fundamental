let statement = "The quick brown fox jumps over the lazy dog. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.";

let regEx = /a/gi;

const index = statement.replace(regEx,"..?..");
console.log(index);