let num_elem = document.querySelector(".num_values")
let num_val = parseInt(num_elem.innerText)


function increase(){
    num_elem.innerText = ++num_val
}

function decrease(){
    num_elem.innerText = --num_val

}