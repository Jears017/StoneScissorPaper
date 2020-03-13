
let l = "pen";
//console.log(l[l.length - 1]);

let f = {
    1: "Stone",
    2: "Sirc",
    3: "Paper"
}

let playerStep = prompt('Enter: Stone, Sirc or Paper');

let c = f[Math.floor(Math.random() * 3) + 1]

function game(playerStep,c){
    if (c == "Stone" && playerStep == "Sirc" ){
        return "You are lose! Stone hit sirc"
    } else if ( c == "Sirc" && playerStep == "Sirc"){
        return "Draw"
    } else if (c == "Paper" && playerStep == "Sirc"){
        return "You are win! Sirc hit Paper"
    } else if (c == "Stone" && playerStep == "Stone"){
        return "Draw"
    } else if (c == "Sirc" && playerStep == "Stone"){
        return "You are win! Stone hit Sirc"
    } else if (c == "Paper" && playerStep == "Stone"){
        return "You are lose! Paper hit Stone"
    } else if (c == "Stone" && playerStep == "Paper"){
        return "You are win!"
    } else if (c == "Sirc" && playerStep == "Paper"){
        return "You are lose!"
    } else if (c == "Paper" && playerStep == "Paper"){
        return "Draw"
    }

}

console.log(`Computer step:${c}
Player step:${playerStep}\n`
+game(playerStep,c))

