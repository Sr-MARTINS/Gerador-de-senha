// const tilte = document.querySelector("#title");
const quantCaract = document.querySelector("#inCaracters");
const letterMin = document.querySelector("#inMinuscula");
const letterMain = document.querySelector("#inMaiuscula");
const number = document.querySelector("#inNumber");
const caractEspess = document.querySelector("#inEspeciais");

const bntGeneret = document.querySelector("#submit");
const boxPassword = document.querySelector(".box-senha");
const password = document.querySelector("#password");

const obterLetterMin = () => {
   return String.fromCharCode(Math.floor(Math.random() * 25) + 97)
}
const obterLetterMain = () => {
   return String.fromCharCode(Math.floor(Math.random() * 25) + 65)
}
const obterNumber = () => {
   return Math.floor(Math.random() * 10).toString()
}
const obterCaract = () => {
    const symboll = "(){}[]!@#$%&*_=+-<>?/\,.|";
    return symboll [Math.floor(Math.random() * symboll.length)]
}

const passwordCreat = (obterLetterMain, obterLetterMin, obterCaract, obterNumber) => {
    // obterCaract()
}

bntGeneret.addEventListener("click", (e) => {
    e.preventDefault();

   boxPassword.classList.toggle('hidden')
   password.innerHTML = ``
})
;