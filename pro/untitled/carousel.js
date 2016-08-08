
var slideIndex = 0;
var timer;
var pause;
showDivs(slideIndex);
slide();

function slide(){
    var i;
    var pic = document.getElementsByClassName("imgs");
    var page = document.getElementsByClassName("btn-indicators");

    for(i=0; i < pic.length; i++)
    {
        pic[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > pic.length)
    {
        slideIndex=1
    }

    for(i=0;i<page.length;i++){
        page[i].className = page[i].className.replace("w3-red","");
    }

    page[slideIndex-1].className+=" w3-red";
    pic[slideIndex-1].style.display = "block";
    timer = setTimeout(slide, 2000);
}

function plusDivs(n){
    showDivs(slideIndex+=n);
    clearTimeout(timer);
    timer = setTimeout(slide, 2000);
}

function currentDiv(n){
    showDivs(slideIndex=n);
    clearTimeout(timer);
    timer = setTimeout(slide, 2000);
}

function showDivs(n){
    var i;
    var pic = document.getElementsByClassName("imgs");
    var page = document.getElementsByClassName("btn-indicators");
    if(n > pic.length)
    {
        slideIndex=1;
    }
    if(n < 1)
    {
        slideIndex = pic.length;
    }

    for(i=0;i<pic.length;i++)
    {
        pic[i].style.display="none";
    }

    for(i=0;i<page.length;i++){
        page[i].className = page[i].className.replace(" w3-red","");
    }
    pic[slideIndex-1].style.display = "block";
    page[slideIndex-1].className+=" w3-red";
}

function paused(){
    pause = true;
    if(pause == true){
        clearTimeout(timer);
    }
}

function play(){
    pause = false;
    if(pause == false){
        timer = setTimeout(slide, 2000);
    }
}

