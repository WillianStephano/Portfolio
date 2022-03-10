function escuro() {
   var html = document.getElementById("html")
   
   html.classList.toggle("claro");
   
   if (html.classList.contains('claro') == true) {
      document.getElementById('bt-dark-mode').src = `Conteudo/moon.svg`
   }else{
      document.getElementById('bt-dark-mode').src = `Conteudo/sun-shape-svgrepo-com.svg`
   }
}