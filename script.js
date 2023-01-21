//your code here
let evaluatedText = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

evaluatedText.addEventListener("input", countWord)

function countWord(){
   let word = evaluatedText.value;
   let count = word.length;
   letterCount.innerHTML = count;
}