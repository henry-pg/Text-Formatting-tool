//script


function whiteSpace(){
    let text = document.getElementById("textbox").value;
    text = text.replace( /[\r\n]+/gm, "" );
    text = text.trim();

    insertText(text);
}

function addComas(){
    let text = document.getElementById("textbox").value;
    text = text.split(' ').join(', ');
    
    insertText(text);
}

function makeList(){
    
    whiteSpace();

    let text = document.getElementById("textbox").value;
    text = text.split(' ');
    text.forEach(element => {
        
        element.trim()
        
    });
    text = text.join('\n');

    insertText(text);
}

function makeNumberList(){
    /*
    let text = document.getElementById("textbox").value;
    text = text.split(' ');
    console.log(text);
    text.forEach((element, index) => {
        
        text[index] = index+1 + ". " + element
        
    });
    text = text.join('\n');
    */

    whiteSpace();

    let text = document.getElementById("textbox").value;
    text = text.split(' ').join('\n'); //returns a single element because the split element is not found in the string
    text = text.split('\n');
    for(let i = 0;i < text.length;i++){
        text[i] = i+1 + ". " + text[i];
    }

    text = text.join('\n');

    insertText(text);
}
function removePunc(){
    let text = document.getElementById("textbox").value;
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    
    insertText(text);
}

function toUpper(){

}

function toLower(){

}

function regexRemove(){

}

function removeReplace(){

}

function quotationSingle(){
    let text = document.getElementById("textbox").value;
    text = text.split(' ');
    text.forEach((element,index) => {

        text[index] = "'" + element + "'"
    })

    text = text.join(' ');

    insertText(text);
}

function quotationDouble(){
    let text = document.getElementById("textbox").value;
    text = text.split(' ');
    text.forEach((element, index) => {

        text[index] = '"' + element + '"'
    })

    text = text.join(' ');

    insertText(text);
}
function copyText(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
 }

function insertText(text) {
    document.getElementById("textbox").value= text;
}



