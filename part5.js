var thisWord = "Ingars Politers";
countString(thisWord);
countStringNoSpace(thisWord);
countBool(thisWord);
countBool(thisWord, true);
function countString(word) {
    return console.log(word.length);
}
function countStringNoSpace(word) {
    var space = (word.split(" ").length - 1);
    return console.log(word.length - space);
}
function countBool(word, choice) {
    if (choice) {
        var space = (word.split(" ").length - 1);
        return console.log(word.length - space);
    }
    else {
        return console.log(word.length);
    }
}
