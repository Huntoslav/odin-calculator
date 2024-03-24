const numbersAndOperators = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    rest: ["(", ")", ".", "/", "*", "**", "-"],
}



let selectNumber = document.querySelectorAll(".num")
selectNumber.forEach(function(number){
    number.addEventListener("click", function(e){
        e.preventDefault()
       let showChosenNum = document.createElement("p")
       showChosenNum.textContent = e.target.innerHTML
       document.querySelector(".result-tab").appendChild(showChosenNum)
    })

})



