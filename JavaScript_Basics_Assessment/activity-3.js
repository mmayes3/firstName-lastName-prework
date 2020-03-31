const Names = ["John", "Dick", "Jane"];
for(let i = 0; i<3; i++){
    const NewName = prompt("Enter a name:");
    Names.push(NewName);
}
for(let j = 0; j<Names.length; j++){
    console.log(Names[j]);
}