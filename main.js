// Cara header berubah warna
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
  // Nav Mobile
  const burgir = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav");
  
  burgir.addEventListener("click", () => {
    burgir.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  
  //nav close
  navMenu.addEventListener("click", () => {
    burgir.classList.remove("active")
    navMenu.classList.remove("active")
  })