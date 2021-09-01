let panels = document.querySelectorAll('.panel')
// console.log(panels);

panels.forEach((panel)=>{
    panel.addEventListener('click' , ()=>{
            activeClassesRemove()
        panel.classList.add('active')
    })
})

const   activeClassesRemove = ()=>{
   panels.forEach( panel =>{
       panel.classList.remove('active')
   })
}