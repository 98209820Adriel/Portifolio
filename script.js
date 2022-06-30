

function mostraSlide(num){
    let valor =  num;

    if(valor === 1){
        document.getElementById('check-1').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 2){
        document.getElementById('check-2').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 3){
        document.getElementById('check-3').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 4){
        document.getElementById('check-4').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 5){
        document.getElementById('check-5').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 6){
        document.getElementById('check-6').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 7){
        document.getElementById('check-7').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 8){
        document.getElementById('check-8').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 9){
        document.getElementById('check-9').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 10){
        document.getElementById('check-10').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 11){
        document.getElementById('check-11').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 12){
        document.getElementById('check-12').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 13){
        document.getElementById('check-13').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 14){
        document.getElementById('check-14').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }else if(valor === 15){
        document.getElementById('check-15').style.display = 'flex';
        document.getElementsByClassName('projeto-1').style.display = 'flex';
    }
    
    
}

function exitPro(num){
    let valor =  num;


    if(valor === 1){
        document.getElementById('check-1').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 2){
        document.getElementById('check-2').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 3){
        document.getElementById('check-3').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 4){
        document.getElementById('check-4').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 5){
        document.getElementById('check-5').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 6){
        document.getElementById('check-6').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 7){
        document.getElementById('check-7').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 8){
        document.getElementById('check-8').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 9){
        document.getElementById('check-9').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 10){
        document.getElementById('check-10').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 11){
        document.getElementById('check-11').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 12){
        document.getElementById('check-12').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 13){
        document.getElementById('check-13').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 14){
        document.getElementById('check-14').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }else if(valor === 15){
        document.getElementById('check-15').style.display = 'none';
        document.getElementsByClassName('projeto-1').style.display = 'none';
    }

    

   
}

function menuBug(){
    let menu = document.getElementById('men');

    if(menu.classList.contains('test')){
        menu.style.display = 'block';
        menu.classList.remove('test');
    }else{
        menu.style.display = 'none';
        menu.classList.add('test');
    }
}