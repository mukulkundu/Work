const hexBtn = document.querySelector('.hex-button');
const hexColorValue = document.querySelector('.hex-color-value');
const rgbColorValue = document.querySelector('.rgb-color-value');


hexBtn.addEventListener('click', () => {
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = "";

    for(let i =0, characterSetLength=characterSet.length; i<6; i++){
        hexColorOutput += characterSet.charAt(
            Math.floor(Math.random()*characterSetLength)
        );
    }
    hexColorValue.textContent=`#${hexColorOutput}`;
    hexColorValue.parentElement.style.backgroundColor = `#${hexColorOutput}`;
})


const rgbBtn = document.getElementById('rgb-button');

const redValue = document.getElementById('red');
const greenValue = document.getElementById('green');
const blueValue = document.getElementById('blue');

const rgbContainer = document.querySelector('.rgb-color-container');

rgbBtn.addEventListener('click', () => {
    let extractRed = redValue.value;
    let extractGreen = greenValue.value;
    let extractBlue = blueValue.value;

    rgbColorValue.textContent = `rgb(${extractRed}, ${extractGreen}, ${extractBlue})`;
    rgbContainer.style.backgroundColor = `rgb(${extractRed}, ${extractGreen}, ${extractBlue})`;
    
})


const hexCopy = document.querySelector('.hex-copy-color');
const rgbCopy = document.querySelector('.rgb-copy-color');

hexCopy.addEventListener('click', copyHex)

rgbCopy.addEventListener('click', copyRGB)

function copyHex(){
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert("The Hex Code is Copied!");
    
}

function copyRGB(){
    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert("The RGB Value is Copied!");
}