const button = document.getElementById("btn");//получение объекта по id
const color = document.querySelector(".color");//возвращает первый элемент в документе по указанному селектору (здесь - классу)

const hex = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",
];

//задаем прослушиватель и функцию
button.addEventListener("click", () =>{
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
});

//создание рандомного hex-кода
function generateHex(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

//рандомная переменная из массива hex
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}