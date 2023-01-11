const navItems = document.querySelectorAll('.weaponCategory div')
navItems.forEach(e =>{
  e.addEventListener('mouseover', ()=>{
    console.log('mouse');
  })
})