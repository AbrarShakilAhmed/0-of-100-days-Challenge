const UserInputName = "e2xample 34hasan   #";

function removeSpecialCharacters(name) {
    return name.replace(/[^a-zA-Z\s]/g, '');
}
function NameCurrector (name){
    let correctName = name.trim()
    correctName = correctName.split(" ")
    correctName[0] = correctName[0].charAt(0).toUpperCase() + correctName[0].slice(1).toLowerCase()
    correctName[1] = correctName[1].charAt(0).toUpperCase() + correctName[1].slice(1).toLowerCase()
    correctName = correctName[0] + " " + correctName[1]
    console.log(correctName)
}

const cleanedName = removeSpecialCharacters(UserInputName);
NameCurrector(cleanedName)
