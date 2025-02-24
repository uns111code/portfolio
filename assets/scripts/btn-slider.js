const slide = ["assets/img/projects/1.png", "assets/img/projects/2.png", "assets/img/projects/3.png", "assets/img/projects/4.png", "assets/img/projects/5.png", "assets/img/projects/6.png", "assets/img/projects/7.png", "assets/img/projects/8.png"];
let numero = 0;
let pic = document.querySelector(".swiper-slide");
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    pic.src = slide[numero];
    console.log("numero");
}