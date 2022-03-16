function escuro() {
   const html = document.getElementById("html");

   html.classList.toggle("claro");
   if (html.classList.contains("claro") == true) {
      document.getElementById("bt-dark-mode").src = `Conteudo/moon.svg`;
   } else {
      document.getElementById("bt-dark-mode").src = `Conteudo/sun-shape-svgrepo-com.svg`;
   }
}


function toggleMenu() {
   var btnmobile = document.getElementById("btn-mobile");
   const menu = document.getElementById("teste");
   menu.classList.toggle("active");
}