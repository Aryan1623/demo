const searchBox = document.querySelector(".search-box");
const hide = document.querySelector(".hide");

function addTask () {
    if (searchBox.value == ''){
        alert("please provide feedback");
        hide.style.visibility = "hidden"
    }else{
        hide.style.visibility = "visible"
    }

}
