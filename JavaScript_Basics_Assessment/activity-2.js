const userinput = prompt("Enter a word.");
if(userinput.length>4){
    alert(`Your word "${userinput}" is greater than 4 characters.`);
} else{
    alert(`Your word "${userinput}" is not greater than 4 characters.`)
}