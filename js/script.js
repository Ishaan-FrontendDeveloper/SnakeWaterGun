window.addEventListener("load",function myFunction(){
        
        let start=Date.now();
        let intr=document.querySelector('#intro');
        let ina=document.querySelector('#hey')
        let s=intr.textContent;
        intr.style.visibility='hidden';
        ina.style.visibility='hidden';
           let timer=setInterval(function(){
               let timepassed=Date.now()-start;
               if(timepassed>=900){
                   intr.style.visibility='visible'
                   intr.style.animation='mirrori 2s linear'  
               }
               
           });
           ina.style.visiblity='visible'
                   ina.style.animation='slidedown 1s radial'
        
});



function hide(){ 
    let start=Date.now();
    let c=document.querySelectorAll('#hidden');
    for(let i=0;i<c.length;i++){
        c[i].classList.remove("hide");
    }


    let fasten=document.getElementById('hid');
    fasten.classList.add('animation');
    let timer=setInterval(function(){
        let timepassed = Date.now()-start;
        if (timepassed>=900){
            let initial=document.getElementById('hidden');   
            initial.classList.remove('hide');
            
            let con=document.getElementById('sec');
            if(con.classList.contains('hide')){
                con.classList.remove('hide');
                con.classList.add('animation2');
            }
            fasten.classList.add('hide');
            bc.classList.remove('hide');
            clearInterval(timer);
            return;
        }
    },30);
        let bc=document.getElementById('why');
        bc.classList.add('animation2');
}

function anim(){
    let bc=document.getElementById('why');
    if(bc.classList.contains('animation2')||bc.classList.contains('dummy')){
        bc.classList.add('animation3');
        bc.classList.remove('animation2');
        bc.classList.remove('dummy');
    }
    else if(bc.classList.contains('animation3')){
        bc.classList.remove('animation3');
        bc.classList.add('dummy');
    }
    
}