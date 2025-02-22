
//Получаем доступ к єлементам 
const $InputMax = document.getElementById("inputMaxValue");
const $inputMin = document.getElementById("inputMinValue");

// создаем функцию которая  рисует пирамиду, рекурсивно создавая уровни.

function createPyramid(levels , parentElement , minValue, maxValue){
    //услови прекращение работы функции
    if(levels === 0){
        return
    }

    // количество блоков
    const blocksCount = Math.floor(Math.random() * (maxValue - minValue) + minValue)

     //получаем доступ к pyramid
     const $pyramid = document.getElementById("pyramid");

     //цыкл для создания блоков
     for(let i = 0; i < blocksCount; i++){
        const block = document.createElement("block")
        block.classList.add("block")
        $pyramid.appendChild(block)
     }

     //выводим следующий ряд
     createPyramid(levels -1, parentElement,minValue,maxValue)
}