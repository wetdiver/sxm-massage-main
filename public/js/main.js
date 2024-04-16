tempArr=[]



thePage=document.querySelectorAll('[data-page]');
theHeader=document.querySelectorAll('[data-head]');
topMenu=document.querySelectorAll('[data-top-nav]'); 
theTitle=document.querySelectorAll('[data-title]');
tempMenu=document.querySelectorAll('[data-tempNav]');
dataLink=document.querySelectorAll('[data-link]');

tempMenu.forEach(element => {
    element.style.background='blue'
    element.style. background=' #2a2a36';
    element.style.fontSize= '73%';
    element.style.wordSpacing= '15px';
    element.style.textTransform= 'capitalize';
    element.style.fontStyle= 'italic';
    element.style.color= '#FFEB3B';
    element.style.padding= '1%';
})


doText_slide=function(slide_arr){
  arr=[]

  slide_arr.forEach(element => {
    arr.push(element)
  });

console.log(arr)
}



dataLink.forEach(element => {
   
    element.addEventListener('click',()=>{
        tempArr.push(element.innerText)
        console.log(tempArr)
    })
})


theHeader.forEach(element => {
    element.style.backgroundImage='url(https://www.gravatar.com/avatar/1a3c77049e188b4334bf7d589d438b9f?s=64&d=identicon&r=PG)'  
    element.style.color='#d71e1e'
    element.style.minHeight='220px'
    element.style.overflow='hidden'
    element.style.textShadow='3px 3px 12px #7d0707'
    element.style.backgroundSize='cover'
    element.style.background='black'
   
    
  });


  topMenu.forEach(element => { 
    element.style.position='sticky'
    element.style.background='white'  
    element.style.color='white'
    element.style.height='3%'
    element.style.width='100%'
    element.style.top='66%'


  });


  theTitle.forEach(element => {
    ///element.style.background='red'  
    element.style.color='#FF9801'
    element.style.overflow='hidden'
    element.style.width= '100%',
    element.style.height= '3%',
    element.style.position= 'absolute',
    element.style.top= '1%'
    element.style.maxWidth='100%'
    element.style.fontSize='1.5em'
    element.style.fontFamily= 'League Spartan, arial, helvetica, sans-serif';
    element.style.fontWeight= '700'
  });
  




thePage.forEach(element => {
  element.style.background='black'  
  element.style.color='white'
});
