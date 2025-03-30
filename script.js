
let buttons=document.querySelectorAll('.button')
buttons.forEach((a)=>{
    a.addEventListener('click',function(e){
         if(e.target.id==='yellow'){
            document.querySelector('body').style.background=e.target.id
         }
         if(e.target.id==='black'){
            document.querySelector('body').style.background=e.target.id
         }
         if(e.target.id==='blue'){
            document.querySelector('body').style.background=e.target.id
         }
         if(e.target.id==='purple'){
            document.querySelector('body').style.background=e.target.id
         }
    })
})