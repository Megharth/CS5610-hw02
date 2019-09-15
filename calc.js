window.onload = function() {
    let btn = document.querySelectorAll(".btn")
    let screen = document.querySelector("#screen")
    let tempState, currentOperation, answer
    btn.forEach((el) => {
        el.addEventListener('click', ()=> {
            if(el.innerHTML === "C") {
                if(answer !== undefined) {
                    answer = undefined
                    tempState = undefined
                    currentOperation = undefined
                }
                screen.innerHTML = ""
            }
            else if(el.innerHTML === "+/=") {
                if(currentOperation === undefined) {
                    currentOperation = "+"
                    tempState = parseFloat(screen.innerHTML)
                    screen.innerHTML = ""
                }
                else if(currentOperation === "+") {
                    tempState += parseFloat(screen.innerHTML)
                    answer = tempState
                    screen.innerHTML = answer
                }
                else if(currentOperation === "-") {
                    tempState -= parseFloat(screen.innerHTML)
                    answer = tempState
                    screen.innerHTML = answer
                    currentOperation = "+"
                }
                else if(currentOperation === "x") {
                    tempState = tempState * parseFloat(screen.innerHTML)
                    answer = tempState
                    screen.innerHTML = answer
                    currentOperation = "+"
                }
                else if(currentOperation === "/") {
                    tempState = tempState / parseFloat(screen.innerHTML)
                    answer = tempState
                    screen.innerHTML = answer
                    currentOperation = "+"
                }
            }
            else if(el.innerHTML === "-") {
                if(currentOperation === undefined || currentOperation === "+") {
                    currentOperation = "-"
                    tempState = parseFloat(screen.innerHTML)
                    screen.innerHTML = ""
                }
                else if(currentOperation = "-") {
                    tempState -= parseFloat(screen.innerHTML)
                    answer = tempState
                    screen.innerHTML = answer
                }
            }
            else if(el.innerHTML === "x") {
                if(currentOperation === undefined || currentOperation === "+") {
                    currentOperation = "x"
                    tempState = parseFloat(screen.innerHTML)
                    screen.innerHTML = ""
                }
                else if(currentOperation = "x") {
                    tempState = tempState * parseFloat(screen.innerHTML)
                    answer = tempState
                    screen.innerHTML = answer
                }
            }
            else if(el.innerHTML === "/") {
                if(currentOperation === this.undefined || currentOperation === "+") {
                    currentOperation = "/"
                    tempState = parseFloat(screen.innerHTML)
                    screen.innerHTML = ""
                }
                else if(currentOperation === "/") {
                    tempState = tempState / parseFloat(screen.innerHTML)
                    answer = tempState
                    screen.innerHTML = answer
                }
            }
            else {
                if(answer !== undefined){
                    screen.innerHTML = ""
                    answer = undefined
                    screen.innerHTML = el.innerHTML
                }
                else
                screen.innerHTML += el.innerHTML
            }
        })
    })
}