
const textCircle = document.getElementsByClassName("text")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const overlay2 = document.getElementsByClassName("overlay")[1];
const alphabet = [...'abcdefghijklmnopqrstuvwxyz1234567890'];

/**
 * 
 * @returns {number} random number between 0 and 35 for alphabet array
 */
var generateInt = function(){
    return Math.floor(Math.random()*alphabet.length);
}
/**
 * 
 * @param {HTMLElement} div containning the text 
 */
var generateText = function(div){
    let text = '';
    for(let i=0;i<4000;i++){
        const num = generateInt();
        text += alphabet[num];
    }
    div.textContent = text;
}
/**
 * 
 * @param {MouseEvent} e mouseEvent
 */
var mouseMovement = function(e){
    const x = e.offsetX;
    const y = e.offsetY;
    const parentDiv = e.target.parentElement;
    const cursor = parentDiv.querySelector('.cursor');
    cursor.style.marginLeft = (x-100) + 'px';
    cursor.style.marginTop = (y-100) + 'px';
    generateText(parentDiv.querySelector('.text'));
}
generateText(textCircle);

overlay.addEventListener('mousemove',mouseMovement, false)
overlay2.addEventListener('mousemove',mouseMovement, false)