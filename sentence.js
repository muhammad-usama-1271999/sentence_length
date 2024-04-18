#! /usr/bin/env node
import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "write a sentence and check the length of sentence"
    }
]);
let sentence = user.sentence.trim().split(" ");
console.log(sentence);
let length = sentence.length;
console.log(`In your sentence have word: ${length}`);
let a = user.sentence.replace(/ /g, "");
//console.log(a)
let b = a.length;
console.log("letters in your sentence count in number " + b);
