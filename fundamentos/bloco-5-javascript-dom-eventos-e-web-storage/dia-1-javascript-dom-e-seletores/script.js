/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1- Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2- Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3- Crie uma função que mude a cor do quadrado vermelho para branco.
 4- Crie uma função que corrija o texto da tag <h1>.
 5- Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6- Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
let mudancaDeTexto = document.getElementsByTagName("p")[1];
mudancaDeTexto.innerText = "Quero estar trabalhando de Home Office e morando em um sítio"
let mudancaDeCor = document.getElementsByClassName("main-content")[0];
mudancaDeCor.style.backgroundColor = "rgb(76,164,109";
let mudancaDeCor2 = document.getElementsByClassName("center-content")[0];
mudancaDeCor2.style.backgroundColor = "white";
let correcaoDeTexto = document.getElementsByTagName("h1")[0];
correcaoDeTexto.innerHTML = 'Exercício 5.1 - JavaEscript';
function paragraphUpperCase() {
    let paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase();

function showParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
        console.log(paragraphs[index].innerHTML);
    }
}