/// zadanie 1

function Base64Encode(toEncodeString ="") {

if(toEncodeString.trim().length === 0){
  return 'Podałeś puste pole'
}

const base64 = btoa(toEncodeString)
return base64;
  

}

const value = Base64Encode('Jakub Czarnecki');
console.log("Zadnie 1: "+value)




//zadanie 2
function GetStrongPassword() {

  let passwordString = ''
  let i=0;
  while(i<=10){
    const number = Math.trunc(Math.random() * (122 - 33) + 33);
    const char = String.fromCharCode(number);
    passwordString += char
    i++
  }

  return passwordString

}

const password = GetStrongPassword()
console.log("Zadnie 2: "+password)

// a. Nie krótsze niż 8 znaków  <-- done 
// b. Posiadać wielkie i małe litery <-- done 
// c. Posiadać cyfry <-- done 
// d. Posiadać znaki specjalne <-- done 
// e. Nie powinno zawierać słowa występującego w słownikach czy encyklopediach <-- done 


