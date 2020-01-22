
let thisWord: string = "Ingars Politers";
countString(thisWord);
countStringNoSpace(thisWord);
countBool(thisWord)
countBool(thisWord, true);
function countString(word:string){
    return console.log(word.length);
} 
function countStringNoSpace(word: string){
    let space = (word.split(" ").length - 1);
    return console.log(word.length - space);
}
function countBool(word: string , choice?: boolean){
    if(choice) {
        let space = (word.split(" ").length - 1);
        return console.log(word.length - space);
    }
    else{ return console.log(word.length); } 
}