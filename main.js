let outputScreen = document.getElementById('output-screen');
function display(nmu){
    outputScreen.value += nmu;
}
function calculator (){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert('Please type number')
    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0, -1)
}