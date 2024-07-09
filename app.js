const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_"

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (dataSet) => {                 //ek funcn bnaya jisme dataset as a paarmeter pass kra jisko apn need k acc chnge krnge baad me
    return dataSet[Math.floor(Math.random() * dataSet.length)]              //dataset ki length k jitna hoga pw
}

const generatePassword = (password = "") => {
    if (upperInput.checked){
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked){
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked){
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked){
        password += getRandomData(symbolSet)
    }
    if(password.length < totalChar.value){
        return generatePassword(password)
    }

    passBox.innerText = truncaString(password,totalChar.value);
}

document.getElementById("btnn").addEventListener(
    "click",
    function() {
        generatePassword();
    }
)

function truncaString(str,num){
    if(str.length>num){
        let subStr = str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}