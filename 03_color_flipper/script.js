let input_color = document.querySelector(".input_box")


function changeColor(){
    console.log(input_color.value)
    document.querySelector("*").style.backgroundColor =input_color.value
}