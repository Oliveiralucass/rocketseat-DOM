// //getElementById()
// const element = document.getElementById('blogTitle')

// console.log(element)

// //getElementByClass()
// const elementClass = document.getElementsByClassName('one')

// console.log(elementClass)

// //getElementsByTag()
// const elementTag = document.getElementsByTagName('meta')

// console.log(elementTag)

// // querySelector()

// const elementQuerySelector = document.querySelector('.one')
// console.log(elementQuerySelector)


// // querySelectorAll()

// const elementQuerySelectorAll = document.querySelectorAll('.blogTitle')
// console.log(elementQuerySelectorAll)

// elementQuerySelectorAll.forEach(el => console.log(el))



// Qual usar?

//getElementById (element)
//getElementsByClassName (HTML Collection)
//getElementsByTagName (HTML Collection)
// querySelector (element)
// querySelectorAll (NodeList)

// ======================================//

// INNER TEXT

// const element = document.querySelector ('h1')

// element.innerText = "Olá Devs"

// TEXT CONTENT

// const element = document.querySelector ('h1')

// element.textContent = "Olá Devs"

// INNER HTML

// const element = document.querySelector ('h1')

// element.innerHTML = "Olá Devs! <small>!!!</small>"


// // MANIPULANDO CONTEUDO
// //value

// const element = document.querySelector ('input')

// console.log(element.value)
// element.value = "outro valor"


// MANIPULANDO ELEMENTOS
// Atributos

// const header = document.querySelector('header')
// header.setAttribute('id', 'header')

// const headerID = document.querySelector('#header')

// console.log(headerID.getAttribute('class'))
// header.removeAttribute('class')

// console.log(headerID.getAttribute('class'))


// header.setAttribute('class', 'bg header')


// console.log(headerID.getAttribute('class'))


// // Alterando Estilos

// const element = document.querySelector('body')

// element.style.backgroundColor = "#f9f3d2"
// console.log(element.style.backgroundColor)


// Alterando Estilos
// Class List

// const element = document.querySelector('body')

// element.classList.add('green',)

// console.log(element.classList)

// const header = document.querySelector(".bg")

// header.classList.add('active')
// header.classList.remove('active')
// header.classList.toggle('active')

// // Navegando pelos Elementos pais
// // parentNode parentElement

// const element = document.querySelector('h1')

// console.log(element.parentNode)


// Navegando pelos Elementos filhos
// childNode children

// const el  = document.querySelector('body')

// console.log(el.children)

// // firstChild firstElementChild
// console.log(el.firstElementChild)

// // lastChild lastElementChild
// console.log(el.lastElementChild)


// // Navegando pelos Elementos
// const el = document.querySelector('body script')

// // nextSibling nextElementSibling
// console.log(el.nextElementSibling)

// // previousSibling previousElementSibling
// console.log(el.previousSibling)


// // criando e adicionando elementos
// // create element

// const div = document.createElement('div')
// div.innerText = "Olá Devs"

// //append prepend

// const body = document.querySelector('body')

// body.prepend(div)


// const div = document.createElement('div')
// div.innerText = "Olá Devs"

// //insertBefore
// const body = document.querySelector('body')
// const header = body.querySelector('header')
// body.insertBefore(div, header.nextSibling)

//Eventos
// argumento event

const input = document.querySelector('input');

input.onkeyup = function(event)  {
    console.log(event.currentTarget.value)
}
