let gameDiv = document.getElementById('game');
let characterDiv = document.getElementById('character');
let scenarioDiv = document.getElementById('scenario');

document.addEventListener('keydown', handleKeys)
var scenarioLeftAdd = 0;
function handleKeys(e){
    let keyPress = e.code;
    if (keyPress === 'ArrowLeft'){
        scenarioLeftAdd += 10;
        scenarioDiv.style.left = scenarioLeftAdd + 'px';

        /*if (characterLeftAdd >= 1500) {
            alert ('Llego al limite');
            characterLeftAdd -=10
        }*/

    }
    if (keyPress === 'ArrowRight'){
        scenarioLeftAdd -= 10;
        scenarioDiv.style.left = scenarioLeftAdd + 'px';
    }
    /*if (scenarioLeftAdd <= 0) {
        alert ('Llego al limite');
        scenarioLeftAdd +=1
    }*/

}
document.getElementById('rightButton').addEventListener('click', handleTouch);
function handleTouch(e) {
    characterLeftAdd += 10;
    characterDiv.style.left = characterLeftAdd + 'px';
}