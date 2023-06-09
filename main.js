//---On sélectionne tous les inputs---
const inputs = document.querySelectorAll('input');

//---On crée une fonction: focusFunc qui nous permet de 
//rattacher la classe .focus du css au DOM html---
function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

//---On crée une fonction: blurFunc qui nous permet de 
//supprimer la classe .focus du css au DOM html après la saisi---
function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}
//---Cette fonction nous permet d'executer la fn addEventListener
//sur les deux fonctions précédentes
inputs.forEach(input =>{
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})