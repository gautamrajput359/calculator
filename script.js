let input = document.getElementById("inputBox")
let button = document.querySelectorAll(".box")

let string = "";
Array.from(button).forEach((button)=> {
    button.addEventListener("click", (e)=> {
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1)
            input.value = string;
        }else if(e.target.innerHTML == "%"){
            string = string/100;
            input.value = string;
        } else {
            string = string + e.target.innerHTML;
            input.value = string
        }
    })
})
