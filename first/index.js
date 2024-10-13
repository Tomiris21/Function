function showMessage() {
    return`Я учу JavaScript!`
}
console.log(showMessage());

const img = document.querySelector("img");

function nextImg(){
   img.src = "img/img2.jpg";
}

function prevImg(){
    img.src="img/img1.jpg";
 }