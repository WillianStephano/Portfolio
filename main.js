/* Dark mode */
const btTema = document.querySelector('.bt-tema')

btTema.addEventListener('click',function () {
   const html = document.getElementById("html");
   
   html.classList.toggle("claro");
   if (html.classList.contains("claro") == true) {
      document.querySelector(".bt-tema").src = `Conteudo/moon.svg`;
   } else {
      document.querySelector(".bt-tema").src = `Conteudo/sun-shape-svgrepo-com.svg`;
   }
})



/* Menu mobile */
const btMobile = document.querySelector(".bt-mobile");

btMobile.addEventListener('click',function () {
   const menu = document.getElementById("teste");
   menu.classList.toggle("active");
} )



/* Projetos */
const container = document.querySelector('.conteudo-projetos .container')
const btProjetos = document.querySelector('.bt_secao_projetos')
var seta = document.querySelector('.arrow')

btProjetos.addEventListener('click',function () {
   container.classList.toggle('container-ativo')
   seta.classList.toggle('up')
})