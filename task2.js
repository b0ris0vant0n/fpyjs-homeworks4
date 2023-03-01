const rl = require('readline').createInterface(process.stdin, process.stdout)

let randomNumber = Math.round(Math.random() * 10)

let counter = 0;

function play() {
    rl.question('Введите число: ', (input) => {
        let userNumber = +input;

        if(isNaN(userNumber)) {
            console.log(`Неверно число`);
            play();
        }

        counter++;
    
        if(userNumber === randomNumber) {
            console.log(`Верно! Правильное число: ${randomNumber}. Вы сделали ${+counter} попыток!\n`);
            rl.close();
            return;
        }
    
        if(userNumber > randomNumber) {
            console.log(`Меньше! Попытка №${counter}\n`);
        } else {
            console.log(`Больше! Попытка №${counter}\n`);
        }
    
        rl.pause();
        play();
    });
}


play()
