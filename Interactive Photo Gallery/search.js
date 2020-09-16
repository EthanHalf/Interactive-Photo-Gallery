let searchBox = document.querySelector('#search');
let pictures = document.querySelectorAll('a');

searchBox.addEventListener("keyup", (event) => {
  for(let i = 0; i < pictures.length; i++) {
    if(pictures[i].dataset.title.includes(searchBox.value.toLowerCase()) || searchBox.value.length == 0) { //IF VALUE MATCHES PICTURE CAPTION OR NO SEARCH INPUT
      pictures[i].style.display = "inline";
    } else {
      pictures[i].style.display = 'none';
    }
  }
});
