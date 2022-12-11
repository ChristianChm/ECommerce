var txt1 = document.getElementById('txt');
var btn = document.getElementById('review');
var out = document.getElementById('reviews');

function fun1(){
    out.innerHTML = txt1.value;
}

btn.addEventListener('click', fun1);