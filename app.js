let gameDiv = document.getElementById('game');
let characterDiv = document.getElementById('character');

document.addEventListener('keydown', handleKeys)
var characterLeftAdd = 0;
function handleKeys(e){
    let keyPress = e.code;
    if (keyPress === 'ArrowRight'){
        characterLeftAdd += 10;
        characterDiv.style.left = characterLeftAdd + 'px';

        /*if (characterLeftAdd >= 1500) {
            alert ('Llego al limite');
            characterLeftAdd -=10
        }*/

    }
    if (keyPress === 'ArrowLeft'){
        characterLeftAdd -= 10;
        characterDiv.style.left = characterLeftAdd + 'px';
    }
    if (characterLeftAdd <= 0) {
        alert ('Llego al limite');
        characterLeftAdd +=1
    }

}
document.getElementById('rightButton').addEventListener('click', handleTouch);
function handleTouch(e) {
    characterLeftAdd += 10;
    characterDiv.style.left = characterLeftAdd + 'px';
}