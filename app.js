let gameDiv = document.getElementById('game');
let characterDiv = document.getElementById('character');
let scenarioDiv = document.getElementById('scenario');

document.addEventListener('keydown', handleKeys)
var scenarioLeftAdd = 0;

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

async function handleKeys(e){
    let keyPress = e.code;
    let i = 0;
    if (keyPress === 'ArrowLeft'){
        while (i<100) {
            await sleep(10);
            scenarioLeftAdd += 15;
            scenarioDiv.style.left = scenarioLeftAdd + 'px';  
            i++;
        }
        /*if (characterLeftAdd >= 1500) {
            alert ('Llego al limite');
            characterLeftAdd -=10
        }*/

    }

    if (keyPress === 'ArrowRight'){
        while (i<100) {
        await sleep(10)
        scenarioLeftAdd -= 15;
        scenarioDiv.style.left = scenarioLeftAdd + 'px';
        i++;
    }
}
    /*if (scenarioLeftAdd <= 0) {
        alert ('Llego al limite');
        scenarioLeftAdd +=1
    }*/

}
document.getElementById('rightButton').addEventListener('click', handleTouch);
async function handleTouch(e) {
    let i = 0;
    while (i<100) {
        await sleep(10);
        scenarioLeftAdd -= 15;
        scenarioDiv.style.left = scenarioLeftAdd + 'px';  
        i++;
    }
}