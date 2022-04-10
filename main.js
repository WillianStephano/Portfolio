/* Dark mode */
function escuro() {
   const html = document.getElementById("html");
   
   html.classList.toggle("claro");
   if (html.classList.contains("claro") == true) {
      document.getElementById("bt-dark-mode").src = `Conteudo/moon.svg`;
   } else {
      document.getElementById("bt-dark-mode").src = `Conteudo/sun-shape-svgrepo-com.svg`;
   }
}

/* Menu mobile */
function toggleMenu() {
   var btnmobile = document.getElementById("btn-mobile");
   const menu = document.getElementById("teste");
   menu.classList.toggle("active");
}

/* Projetos */

const container = document.querySelector('.conteudo-projetos .container')
const btProjetos = document.querySelector('.bt_secao_projetos')

btProjetos.addEventListener('click',function () {
   container.classList.toggle('container-ativo')


})