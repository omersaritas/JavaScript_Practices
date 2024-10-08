function generatePassword(lenght, includeLowerCase, includeUpperCase, includeNumbers, includeSybmols){
    const lowercaseChars = "qwertyuopasdfghjklizxcvbnm";
    const uppercaseChars = "QWERTYUİOPASDFGHJKLZXCVBNM";
    const numberChars = "0123456789";
    const symbolChars = "!'^+%&/()=?_-*é"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSybmols ? symbolChars : "";

    if(lenght <= 0){
        return `!PASSWORD lenght MUST be at least 7!`;
    }
    if(allowedChars.length === 0){
        return `!At least 1 set of character need to be selected!`;
    }

    for(let i = 0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password
}


const passwordLenght = 17;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSybmols = true;

const password = generatePassword(passwordLenght, 
                                    includeLowerCase, 
                                    includeUpperCase, 
                                    includeNumbers, 
                                    includeSybmols);

console.log(`Generated Password = ${password}`)