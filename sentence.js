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
console.log(`the length of your sentence is: ${length}`);
