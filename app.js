// function maskify(msk) {}

// //Step one, turn charachters before last four into "#"

// const word = "mypassword";

// const newWord = word.slice(0, word.length - 4);

// const newWord2 = [...newWord];

// const newWord3 = newWord2.map((x) => (x = "#"));

// let final = "";
// for (let i = 0; i < newWord3.length; i++) {
//   final += newWord3[i];
// }

// console.log(final);

// //Step two, make last four characters alone, and concatinate them with those characters that came before them

// const secondWord = word.slice(word.length - 4, word.length);

// const finalWord = final + secondWord;

//If word is =< 4, than do nothing

//MY maskify function final version

function maskify(msk) {
  if (msk.length < 4) {
    return msk;
  } else {
    const newWord = msk.slice(0, msk.length - 4);

    const newWord2 = [...newWord];

    const newWord3 = newWord2.map((x) => (x = "#"));

    let final = "";
    for (let i = 0; i < newWord3.length; i++) {
      final += newWord3[i];
    }
    const secondWord = msk.slice(msk.length - 4, msk.length);

    const finalWord = final + secondWord;
    return finalWord;
  }
}

console.log(maskify("word"));
console.log(maskify("sword"));
console.log(maskify("mypassword"));

// //Short version

// function maskifyy(cc) {
//   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
// }

// VALIDATE PIN CODE

const mypin = "1234";

function validatePIN(pin) {
  //return true or false, if true it holds NaN
  const pinCheck = function isNumeric(num) {
    return isNaN(num);
  };
  const pinCheck2 = pinCheck(pin);

  //Function for checking if there is any element that is not wanted, if it returns true, the unwanted element is there
  const checkDot = (x) => {
    if (x.includes(".") || x.includes("+") || x.includes("-")) {
      return true;
    }
    return false;
  };

  const dotCheck = checkDot(pin);

  if (pin.length < 4) {
    return false;
  } else if (pin.length > 4 && pin.length < 6) {
    return false;
  } else if (pin.length > 6) {
    return false;
  } else if (pin.length === 4 && pinCheck2 === false && dotCheck === false) {
    return true;
  } else if (pin.length === 6 && pinCheck2 === false && dotCheck === false) {
    return true;
  }
  return false;
}

console.log(validatePIN(mypin));

//Separating function on smaller chunks so its easier for me to handle it

// console.log(validatePIN(mypin));
// console.log(isNaN("123"));

// function isNumeric(num) {
//   return console.log(isNaN(num));
// }

// isNumeric(mypin);

// let pinChecs = [...mypin].includes(".");
// const noDotw = pinChecs.includes(".");
// console.log(noDotw);
// pinCheck3 = pinCheck3.join("");
// console.log(pinCheck3);

// const checkDot = (x) => {
//   let y = [...x].includes(".");
//   if (y === true) {
//     return true;
//   }
//   return false;
// };

// console.log(checkDot("2334"));

//
// const checkDot = (x) => {
//   let y = [...x].includes(".");
//   if (y === true) {
//     return true;
//   }
//   return false;
// };

// const checkDot = (x) => {
//   if (x.includes(".") || x.includes("+") || x.includes("-")) {
//     return true;
//   }
//   return false;
// };

// console.log(checkDot("3232"));
