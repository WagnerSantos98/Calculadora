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
    
}
