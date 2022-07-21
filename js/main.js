
const text=document.querySelector('.hey');
const realText= text.textContent;
const splitText= realText.split("");


let icon=document.querySelector(".icon");
let navbar=document.querySelector(".navbar-nav");
icon.addEventListener('click',()=>{
  navbar.classList.toggle('active')
  
});

 text.textContent="";



for (let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>"+splitText[i]+"</span>";
}

let char=0;
let timer= setInterval(onTick, 550);

    function onTick(){
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
         char++;
            if(char === splitText.length){
                complete();
                return;
            }
    }

    function complete(){
        clearInterval(timer);
        timer=null;
    }
    

    const hero=document.querySelector('.banner-area');
    const text2=document.querySelector(".banner-title");
    const image=document.querySelector(".banner-img");
    const header=document.querySelector(".header-area");
        
    const tl=new TimelineMax();
    
    // tl.fromTo(hero, 1, { width:"0%"},  {width:'100%'})
      tl.fromTo(hero,2, {x:"-100%"}, {x:"0%", ease:Power1.easeInOut })
      .fromTo(text2, 1, {y:"-300%"}, {y:"0%", ease:Power1.easeInOut })
      .fromTo(image, 1, {y:"150%"}, {y:"0%", ease:Power1.easeInOut })
      .fromTo(header, 1, {x:"350%"}, {x:"0%", ease:Power1.easeInOut });
         
