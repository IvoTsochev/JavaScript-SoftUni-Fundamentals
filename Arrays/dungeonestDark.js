function solve(input) {
    let rooms = input[0].split("|");
    let isAlive = true;
    let playerHealth = 100;
    let coins = 0;
    let roomsCount = 0;

    for(let room of rooms) {
        roomsCount++;
        let command = room.split(" ")[0];
        let number = Number(room.split(" ")[1]);

        if (command === `potion`) {
            drinkPotion(number);
        } else if (command === `chest`) {
            collectCoins(number);
        } else {
            isAlive = fight(command, number);

            if (!isAlive) {
                break;
            }
        }
    }

    if (isAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${playerHealth}`);
        
        
    }

    function drinkPotion(health) {
        let increasedHealth = playerHealth + health;

        if (increasedHealth > 100) {
            increasedHealth = 100;
        }

        console.log(`You healed for ${increasedHealth - playerHealth} hp.`);
        playerHealth = increasedHealth;
        console.log(`Current health: ${playerHealth} hp.`);
    }

    function collectCoins(value) {
        coins += value;
        console.log(`You found ${value} coins.`);
    }

    function fight(monster, damage) {
        let decreasedHealth = playerHealth - damage;

        if (decreasedHealth <= 0) {
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${roomsCount}`);
            
            return false;
        }

        playerHealth = decreasedHealth;
        console.log(`You slayed ${monster}.`);
        
        return true;
    }
    
}

solve([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ])