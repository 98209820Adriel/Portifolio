

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

function tema(){
    let select = document.querySelector('.select-1');
    let op = select.options[select.selectedIndex].value;
    let selects = document.querySelector('.select-2');
    let ops = selects.options[selects.selectedIndex].value;
    


    let op1 = document.querySelector('.body-1');
    let op2 = document.querySelector('.logotipo');
    let op3 = document.querySelectorAll('.cor');
    let op4 = document.querySelector('.section-banner');
    let op5 = document.querySelector('.area-1-title');
    let op6 = document.querySelector('.code-1');
    let op7 = document.querySelector('.git');
    let op8 = document.querySelector('.link');
    let op9 = document.querySelector('.area-sobre-1');
    let op10 = document.querySelector('.area-sobre-2-title');
    let op11 = document.querySelector('.sobre-botao');
    let op12 = document.querySelector('.sobre-botao-2');
    let op13 = document.querySelector('.section-espec');
    let op14 = document.querySelector('.espec-area-1');
    let op15 = document.querySelector('.espec-img');
    let op16 = document.querySelector('.espec-img-2');
    let op17 = document.querySelector('.section-project');
    let op18 = document.querySelectorAll('.card');
    let op19 = document.querySelectorAll('.c');
    let op20 = document.querySelectorAll('.projet-bot');
    let op21 = document.querySelectorAll('.projeto-area');
    let op22 = document.querySelectorAll('.skills');
    let op23 = document.querySelectorAll('.skills-area');
    let op24 = document.querySelectorAll('.skills-area-2');
    let op25 = document.querySelectorAll('.projeto-text');
    let op26 = document.querySelector('.section-servi');
    let op27 = document.querySelector('.espec-serv');
    let op28 = document.querySelector('.espec-serv-2');
    let op29 = document.querySelector('.espec-area-2');
    let op30 = document.querySelector('.section-contato');
    let op31 = document.querySelectorAll('.area-cont');
    let op32 = document.querySelectorAll('.area-cont-2');
    let op33 = document.querySelector('.rodape');
    let menu = document.querySelector('.nav-mobile-3');

    if(op === 'neon' || ops === 'neon'){
        menu.style.backgroundColor = '#e970df';
        selects.style.backgroundColor = '#e970df';
        select.style.backgroundColor = '#e970df';
        op1.classList.add('body-2');
        op2.classList.add('logotipo-2');
        op3.forEach(element =>{
            element.classList.add('cor-2')
         });
        op4.classList.add('section-banner-2');
        op5.classList.add('area-1-title-2');
        op6.classList.add('code-2');
        op7.classList.add('git-2');
        op8.classList.add('link-2');
        op9.classList.add('area-sobre-1-B');
        op10.classList.add('area-sobre-2-title-B');
        op11.classList.add('sobre-botao-B');
        op12.classList.add('sobre-botao-2-B');
        op13.classList.add('section-espec-2');
        op14.classList.add('espec-area-1-B');
        op15.style.display = 'none';
        op16.style.display = 'flex';
        op17.classList.add('section-project-2');
        op18.forEach(element =>{
           element.classList.add('card-B')
        });
        
        op19.forEach(element =>{
            element.classList.add('c-2')
         });
         op20.forEach(element =>{
            element.classList.add('projet-bot-2')
         });

         op21.forEach(element =>{
            element.classList.add('projeto-area-2')
         });

         op22.forEach(element =>{
            element.classList.add('skills-2')
         });
         
         op23.forEach(element =>{
            element.style.display = 'none';
         });

         op24.forEach(element =>{
            element.style.display = 'flex';
         });

         op25.forEach(element =>{
            element.classList.add('projeto-text-2')
         });

         op26.classList.add('section-servi-2');
         op27.style.display = 'none';
         op28.style.display = 'flex';
         op29.classList.add('espec-area-2-B');
         op30.classList.add('section-contato-2');
         op31.forEach(element =>{
            element.style.display = 'none';
         });
         op32.forEach(element =>{
            element.style.display = 'flex';
         });
         op33.classList.add('rodape-2');
    }else if(op === 'classico' || ops === 'classico'){
        menu.style.backgroundColor = '#00DF5E';
        selects.style.backgroundColor = '#00DF5E';
        select.style.backgroundColor = '#00DF5E';
        op1.classList.remove('body-2');
        op2.classList.remove('logotipo-2');
        op3.forEach(element =>{
            element.classList.remove('cor-2')
         });
        op4.classList.remove('section-banner-2');
        op5.classList.remove('area-1-title-2');
        op6.classList.remove('code-2');
        op7.classList.remove('git-2');
        op8.classList.remove('link-2');
        op9.classList.remove('area-sobre-1-B');
        op10.classList.remove('area-sobre-2-title-B');
        op11.classList.remove('sobre-botao-B');
        op12.classList.remove('sobre-botao-2-B');
        op13.classList.remove('section-espec-2');
        op14.classList.remove('espec-area-1-B');
        op15.style.display = 'flex';
        op16.style.display = 'none';
        op17.classList.remove('section-project-2');
        op18.forEach(element =>{
           element.classList.remove('card-B')
        });
        
        op19.forEach(element =>{
            element.classList.remove('c-2')
         });
         op20.forEach(element =>{
            element.classList.remove('projet-bot-2')
         });

         op21.forEach(element =>{
            element.classList.remove('projeto-area-2')
         });

         op22.forEach(element =>{
            element.classList.remove('skills-2')
         });
         
         op23.forEach(element =>{
            element.style.display = 'flex';
         });

         op24.forEach(element =>{
            element.style.display = 'none';
         });

         op25.forEach(element =>{
            element.classList.remove('projeto-text-2')
         });

         op26.classList.remove('section-servi-2');
         op27.style.display = 'flex';
         op28.style.display = 'none';
         op29.classList.remove('espec-area-2-B');
         op30.classList.remove('section-contato-2');
         op31.forEach(element =>{
            element.style.display = 'flex';
         });
         op32.forEach(element =>{
            element.style.display = 'none';
         });
         op33.classList.remove('rodape-2');
    }

    

}