const inputs = document.querySelectorAll(".input");

function focusFunction() {
    let parent = this.parentNode;
    parent.classlist.add("focus"); 
}


function focusFunction() {
    let parent = this.parentNode;
    parent.classlist.remove("focus"); 
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});