let turn = "X"
let line = document.getElementsByClassName("line")[0]
// let won = null
let gameOver = false
// let resetBtn = document.getElementById("reset")
let changeTurn = ()=>{
    return turn === "X"? "0" : "X"
}

let checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText")
    let won = []
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6], 
        [1,4,7], 
        [2,5,8],
        [0,4,8], 
        [2,4,6]
    ]

    wins.forEach((e)=>{
        if((boxText[e[0]].innerHTML !== "")&&(boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[0]].innerHTML === boxText[e[2]].innerHTML)){
            let info = document.getElementsByClassName("info")[0]
            info.innerHTML = `${boxText[e[0]].innerHTML} Won ${"\n"}Reload page to play again`
            gameOver = true
            // won = boxText[e[0]].innerHTML
            won.push(e[0])
            won.push(e[1])
            won.push(e[2])
        }
    })
    console.log(won)
    console.log(typeof(won))
    if(gameOver){

        line.style.visibility = "visible"
    }
    console.log(wins[0].toString() == won.toString())
    if(wins[0].toString() == won.toString()){
        line.style.transform = "translate(-15vw, -11.5vw) rotate(90deg)"
    }
    if(wins[1].toString() == won.toString()){
        line.style.transform = "translate(-15vw, -1.5vw) rotate(90deg)"
    }
    if(wins[2].toString() == won.toString()){
        line.style.transform = "translate(-15vw, 8.5vw) rotate(90deg)"
    }
    if(wins[3].toString() == won.toString()){
        line.style.transform = "translate(-25vw,-1.5vw)"
    }
    if(wins[4].toString() == won.toString()){
        line.style.transform = "translate(-15vw,-1.5vw)"
    }
    if(wins[5].toString() == won.toString()){
        line.style.transform = "translate(-5vw,-1.5vw)"
    }
    if(wins[6].toString() == won.toString()){
        line.style.transform = "translate(-15vw, -1.5vw) rotate(-45deg)"
    }
    if(wins[7].toString() == won.toString()){
        line.style.transform = "translate(-15vw, -1.5vw) rotate(45deg)"
    }
    
    

}



// Main Logic

// resetBtn.addEventListener("click", ()=>{
//     let boxText = document.getElementsByClassName("boxText")
    
//     Array.from(boxText).forEach((element)=>{
//         element.innerHTML = ""
//         element.classList.remove("done")
//     })

//     let info = document.getElementsByClassName("info")[0]
//     info.innerHTML = "Turn for " + turn
//     // line.style.transform = "none"
//     // line.style.visibility = "hidden"
// })

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((element)=>{
    let boxText = element.getElementsByClassName("boxText")[0]
    element.addEventListener("click", ()=>{
        if(!gameOver){

            if(boxText.classList.contains("done") == false){
                boxText.innerHTML = turn
                turn = changeTurn();
                checkWin();
                if(!gameOver){
                    let info = document.getElementsByClassName("info")[0]
                    info.innerHTML = "Turn for " + turn
                    boxText.classList.add("done")
                }   
            }
        }
        

    })
})