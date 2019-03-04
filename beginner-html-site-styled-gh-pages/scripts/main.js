/*let monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello world!';*/

/*let monImage = document.querySelector('img');
monImage.addEventListener('click',function(){
    let monSrc = monImage.getAttribute('src');
    if (monSrc === "images/firefox-icon.png")
    {
        monImage.setAttribute('src',"images/firefox2.png");
    }
    else {
        monImage.setAttribute('src',"images/firefox-icon.png");
    }
});*/

let monBtn = document.querySelector('button');
let monTitre = document.querySelector('h1');

function definirNomUser(){
    let monNom = prompt("Entrez votre nom svp");
    localStorage.setItem('nom',monNom);
    monTitre.textContent="Mozilla is coll "+monNom;
}

monBtn.addEventListener('click',function(){
definirNomUser();
});

if(!localStorage.getItem('nom'))
{
    definirNomUser();
}
else
{
    let nomSave = localStorage.getItem('nom');
     monTitre.textContent="Mozilla is coll "+nomSave;
}