const rl = require('readline').createInterface(process.stdin, process.stdout)

let randomNumber = Math.round(Math.random() * 10)


async function getUserInput() {
    let promise = new Promise(function(resolve, reject) {
        rl.question('Введите число: ', (input) => {
            let number = input;
            rl.pause();
            return resolve(number); 
            
        });  
    });
    return await promise;
}


async function play() {
    let counter = 0;
    while(true) {
        let input = await getUserInput()
        let userNumber = +input

        if(isNaN(userNumber)) {
            console.log(`Неверный ввод`)
            continue
        }

        counter++;
    
        if(userNumber === randomNumber) {
            console.log(`Верно! Правильное число: ${randomNumber}. Вы сделали ${+counter} попыток!\n`);
            break
        }
    
        if(userNumber > randomNumber) {
            console.log(`Меньше! Попытка №${counter}\n`);
        } else {
            console.log(`Больше! Попытка №${counter}\n`);
        }

    }
    rl.close()
}


play()
