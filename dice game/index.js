function roll(){
    return Math.ceil(Math.random()*6);
} 

function game(p, d){
    let temp = [];

    for(i = 0; i < p; i++){
        temp[`Player ${i}`] = {dice: [], score: 0}
        for(j = 0; j < d; j++){
            temp[`Player ${i}`].dice.push(roll())
        }
    }
   
    return temp
}

console.log(game(3, 5))