var num = 0;

var counterBorder = document.getElementsByClassName('counter')[0];
var minus = document.getElementsByClassName('minus')[0];
var plus = document.getElementsByClassName('plus')[0];
var counter = document.getElementsByClassName('number')[0];
counter.style.fontSize = '80px';

function count(arg) {
    if(arg < 0) {
        counter.style.color = 'red';
       
        
    }else  {
        counter.style.color = 'green';
        
    } 
    counter.innerHTML = arg;
}
count(num);

plus.onclick = () => {
    num += 1;
    count(num);
}

minus.onclick = () => {
    num -= 1;
    count(num);
}

