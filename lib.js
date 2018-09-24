function sentenceCase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


function titleCase(string){
    string=string.split(' ');
    let newString="";
    for(let i=0;i<string.length;i++){
        newString+=`${sentenceCase(string[i])} `;
    }
    newString=newString.slice(0, -1);
    return newString;
}

function saySomething(){
console.log("I am a turtle.");

}