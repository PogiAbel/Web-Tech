const mainElement = document.getElementById("Fancy");
const textCircle = document.getElementsByClassName("text")[0];
const cursor = document.getElementsByClassName("cursor")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const alphabet = [...'abcdefghijklmnopqrstuvwxyz1234567890'];
var root = document.documentElement;
var generateInt = function(){
    return Math.floor(Math.random()*alphabet.length);
}
var generateText = function(e){
    let text = '';
    for(let i=0;i<4000;i++){
        const num = generateInt();
        text += alphabet[num];
    }
    textCircle.textContent = text;
}
var mouseMovement = function(e){
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.marginLeft = (x-100) + 'px';
    cursor.style.marginTop = (y-100) + 'px';
    generateText();
}
generateText();

overlay.addEventListener('mousemove',mouseMovement, false)