// important contents
const showClose = document.getElementById("showClose")
const toggleMenu = document.getElementById("toggleMenu")
const closeMenu = document.getElementById("closeMenu")


toggleMenu.addEventListener("click",()=>{
  toggleMenu.classList.add("hideMenu")
  showClose.classList.add("show")
  closeMenu.classList.add("showClose")

})

closeMenu.addEventListener("click",()=>{
   toggleMenu.classList.remove("hideMenu")
  showClose.classList.remove("show")
  closeMenu.classList.remove("showClose")
})