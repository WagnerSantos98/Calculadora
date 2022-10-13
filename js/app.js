let outScreen = document.querySelector('.output input');
mode = 'calc';

function insert(num){
    outScreen.value += num;
    if(mode == 'equal'){
        outScreen.value = '';
        outScreen.value += num;
        mode = 'calc';
    }
}

function clr(){
    outScreen.value = '';
}

function del(){
    outScreen.value = outScreen.value.slice(0, -1);
    if(mode == 'equal'){
        outScreen.value = '';
    }
}

function calc(){
    try{
        outScreen.value = eval(outScreen.value);
        mode = 'equal';
    }catch (err){
        outScreen.value = 'INVÁLIDO';
        mode = 'equal';
    }
}

let menuIcon = document.querySelector('.icon');
menu = document.querySelector('.menu');

menuIcon.onclick = function(){
    menu.classList.toogle('open');
}

let blueTheme = document.querySelector('.blue');
let orangeTheme = document.querySelector('.orange');
let redTheme = document.querySelector('.red');
let purpleTheme = document.querySelector('.purple');
let pinkTheme = document.querySelector('.pink');

blueTheme.onclick = function(){
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('purple');
    document.body.classList.remove('pink');
    document.body.classList.add('blue');
    menu.classList.remove('open');
}

orangeTheme.onclick = function(){
    document.body.classList.remove('blue');
    document.body.classList.remove('red');
    document.body.classList.remove('purple');
    document.body.classList.remove('pink');
    document.body.classList.add('orange');
    menu.classList.remove('open');
}

redTheme.onclick = function(){
    document.body.classList.remove('orange');
    document.body.classList.remove('blue');
    document.body.classList.remove('purple');
    document.body.classList.remove('pink');
    document.body.classList.add('red');
    menu.classList.remove('open');
}

pinkTheme.onclick = function(){
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('purple');
    document.body.classList.remove('blue');
    document.body.classList.add('pink');
    menu.classList.remove('open');
}