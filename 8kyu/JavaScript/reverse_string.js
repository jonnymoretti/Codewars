function reverseString(str) {
    var splitString = str.split("");
    var reverseString = splitString.reverse();
    var joinString = reverseString.join("");
    return joinString
}

frase = reverseString("hello");
console.log(frase)