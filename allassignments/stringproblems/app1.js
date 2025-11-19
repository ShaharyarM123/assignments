// function toLowerCase(name) {
//     return name.toLowerCase();
// }

// var userName = prompt("Enter your name:");
// alert("Lowercase name: " + toLowerCase(userName));


//q2

// function shout(text) {
//     return text.toUpperCase();
// }

// // Example usage:
// var input = prompt("Enter a string:");
// alert("Shouting: " + shout(input));

//q3

// function countcharacters(str){
//   return str.length
// }

// var input = prompt("Enter a string:");
// alert("Number of characters: " + countcharacters(input));


//q4


// function character(str){
//     return str.charAt(0)
// }
// var input = prompt("Enter a string:");
// alert("First character: " + firstCharacter(input));

//q5

// function lastCharacter(str) {
//     return str.charAt(str.length - 1);
// }

// // Example usage:
// var input = prompt("Enter a string:");
// alert("Last character: " + lastCharacter(input));


//q6


// function findApple(sentence) {
//     return sentence.indexOf("apple");
// }

// // Example usage:
// var input = prompt("Enter a sentence:");
// alert("Position of 'apple': " + findApple(input));


//q7

// function extractFirstWord(sentence) {
//     var spaceIndex = sentence.indexOf(" ");
    
//     if (spaceIndex === -1) {
        
//         return sentence;
//     }

//     return sentence.slice(0, spaceIndex);
// }

// // Example usage:
// var input = prompt("Enter a sentence:");
// alert("First word: " + extractFirstWord(input));


//q8

function replaceBad(sentence) {
    return sentence.replace("bad", "good");
}

// Example:
console.log(replaceBad("This is a bad idea."));



//q9

// function replaceVowels(str) {
//     return str.replaceAll(/[aeiou]/gi, "*");
// }

// // Example:
// console.log(replaceVowels("Hello World"));

//q10
// function splitWords(sentence) {
//     return sentence.split(" ");
// }

// // Example:
// console.log(splitWords("JavaScript is fun"));


//q11
// function capitalize(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }

// // Example:
// console.log(capitalize("hello"));

//q12
function secondWord(sentence) {
    return sentence.split(" ")[1];
}

// Example:
console.log(secondWord("Hello world from JS"));


//q13
function censor(sentence) {
    return sentence.replaceAll("dumb", "****");
}

// Example:
console.log(censor("This is dumb and very dumb."));

//q14

function countWords(sentence) {
    return sentence.split(" ").length;
}

// Example:
console.log(countWords("I love programming"));

//q15
function wordExists(sentence, word) {
    return sentence.indexOf(word) !== -1;
}

// Example:
console.log(wordExists("The cat is here", "cat"));

//q16
function getDomain(email) {
    return email.slice(email.indexOf("@") + 1);
}

// Example:
console.log(getDomain("user@example.com"));

//q17
function reverseSentence(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

// Example:
console.log(reverseSentence("Hello world today"));

//q18
function isPalindrome(word) {
    word = word.toLowerCase();
    return word === word.split("").reverse().join("");
}

// Example:
console.log(isPalindrome("Level"));


//q19
function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i).toLowerCase())) count++;
    }
    return count;
}

// Example:
console.log(countVowels("Hello World"));

//q20

function altCase(str) {
    let out = "";
    for (let i = 0; i < str.length; i++) {
        out += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    return out;
}

// Example:
console.log(altCase("hello"));


//q21

function altCase(str) {
    let out = "";
    for (let i = 0; i < str.length; i++) {
        out += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    return out;
}

// Example:
console.log(altCase("hello"));


//q22

function removeDuplicates(sentence) {
    const words = sentence.toLowerCase().split(" ");
    const unique = [...new Set(words)];
    return unique.join(" ");
}

// Example:
console.log(removeDuplicates("Hello hello world world"));


//q23

function maskEmail(email) {
    const at = email.indexOf("@");
    return email[0] + "***" + email.slice(at);
}

// Example:
console.log(maskEmail("john.doe@example.com"));


//q25

function abbreviate(name) {
    return name
        .split(" ")
        .map(n => n.charAt(0).toUpperCase() + ".")
        .join("");
}

// Example:
console.log(abbreviate("John Ronald Reuel Tolkien"));

//q26

function isAnagram(a, b) {
    const clean = str => str.toLowerCase().replace(/ /g, "").split("").sort().join("");
    return clean(a) === clean(b);
}

// Example:
console.log(isAnagram("listen", "silent"));


//q27

function findPositions(str, word) {
    str = str.toLowerCase();
    word = word.toLowerCase();

    let out = [];
    let index = 0;

    while (true) {
        let pos = str.indexOf(word, index);
        if (pos === -1) break;
        out.push(pos);
        index = pos + 1;
    }
    return out;
}

// Example:
console.log(findPositions("apple banana apple grape apple", "apple"));


//q28
function reverseEach(sentence) {
    return sentence
        .split(" ")
        .map(w => w.split("").reverse().join(""))
        .join(" ");
}

// Example:
console.log(reverseEach("hello world"));


//q29

function wrapText(text, limit) {
    const words = text.split(" ");
    let line = "";
    let result = [];

    for (let w of words) {
        if ((line + w).length > limit) {
            result.push(line.trim());
            line = "";
        }
        line += w + " ";
    }

    if (line.trim()) result.push(line.trim());
    return result;
}

// Example:
console.log(wrapText("This is a long sentence that needs wrapping.", 12));


//q30
function longest(sentence) {
    return sentence.split(" ").reduce((a, b) => a.length >= b.length ? a : b);
}

// Example:
console.log(longest("JavaScript is powerful and expressive"));


//q31
function censorWords(text, badWords) {
    for (let b of badWords) {
        text = text.replaceAll(new RegExp(b, "gi"), "***");
    }
    return text;
}

// Example:
console.log(censorWords("you are dumb and stupid", ["dumb", "stupid"]));


//32
function repeatedChars(str) {
    let map = {};
    let result = [];

    for (let ch of str) {
        map[ch] = (map[ch] || 0) + 1;
    }

    for (let ch in map) {
        if (map[ch] > 1) result.push(ch);
    }

    return result;
}

// Example:
console.log(repeatedChars("banana"));

//q33
function compress(str) {
    let out = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            out += str[i - 1] + count;
            count = 1;
        }
    }
    return out;
}

// Example:
console.log(compress("aaabbbcc"));

//q34

function checkPassword(pw) {
    return pw.length >= 8 &&
           /[0-9]/.test(pw) &&
           /[A-Z]/.test(pw) &&
           /[a-z]/.test(pw);
}

// Example:
console.log(checkPassword("Strong123"));


//q35

function extractHashtags(text) {
    return text.split(" ").filter(w => w.startsWith("#"));
}

// Example:
console.log(extractHashtags("This is a post #fun #coding #JS"));


//q36

function camelCase(sentence) {
    const words = sentence.split(" ");
    return words[0].toLowerCase() + 
           words.slice(1)
                .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                .join("");
}

// Example:
console.log(camelCase("make this camel case"));

//q37

function parseCSV(csv) {
    return csv.split(",");
}

// Example:
console.log(parseCSV("name,age,email"));


//q38
function customSplit(str) {
    let words = [];
    let word = "";

    for (let ch of str) {
        if (ch === " ") {
            if (word) words.push(word);
            word = "";
        } else {
            word += ch;
        }
    }

    if (word) words.push(word);
    return words;
}

// Example:
console.log(customSplit("hello world this works"));


//q39
function formatPhone(num) {
    return `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`;
}

// Example:
console.log(formatPhone("1234567890"));


//q40
function palindromes(sentence) {
    return sentence.split(" ").filter(w => {
        const s = w.toLowerCase();
        return s === s.split("").reverse().join("");
    });
}

// Example:
console.log(palindromes("madam is at civic center"));



