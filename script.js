
// function fun1() {
//  const chbox = document.getElementById('one')

// if(chbox.checked) {
//     alert('Выбран')
// }
// else 
// {
//  alert('Не выбран')
// }      
// }


// function fun1() {
//     const radi = document.getElementsByName('r1')
//     for (let i = 0; i < radi.length; i++) {
//         if(radi[i].checked) {
//             alert('Выбран ' +i+ ' элемент')
//         }
        
//     }
// }

function fun1 () {
    const sel = document.getElementById('mySelect').selectedIndex
    const options = document.getElementById('mySelect').options
    alert('Выбрана опция ' +options[sel].text)
}


function fun2 () {
    const rng  = document.getElementById('r1')
    const div = document.getElementById('test')
   div.style.width=rng.value+ 'px'
}


function fun3 () {
    const rtl = document.getElementById('rtl').value
    const rtr = document.getElementById('rtr').value
    const rbr = document.getElementById('rbr').value
    const rbl = document.getElementById('rbl').value

    const ttl = document.getElementById('ttl')
    const ttr = document.getElementById('ttr')
    const tbr = document.getElementById('tbr')
    const tbl = document.getElementById('tbl')

    const block = document.getElementById('block')

    ttl.value=rtl
    ttr.value=rtr
    tbr.value=rbr
    tbl.value=rbl
    
    block.style.borderRadius=rtl+'px ' +rtr +'px ' +rbr +'px ' +rbl + 'px ' 
}


document.getElementById('nav').onmouseover = function (event) {
    const target = event.target

    if(target.className === 'menu-item') {
        const s = target.getElementsByClassName('submenu')
        closeMenu()
        s[0].style.display='block'
    }
}

document.onmouseover=function (event) {
    const target = event.target
    console.log(event.target)
    if(target.className != 'menu-item' && target.className!= 'submenu') {
    closeMenu();
    }
}

function closeMenu() {
    const menu = document.getElementById('nav')
    const subm = document.getElementsByClassName('submenu')
    for(let i = 0; i < subm.length; i++) {
        subm[i].style.display='none'
    }
}






 
// 1. Вынесли переменные наверх, чтобы их видели все функции ниже
let tabContent;
let tab;

window.onload = function () {
    // 2. Убрали const отсюда
    tabContent = document.getElementsByClassName('tabContent')
    tab = document.getElementsByClassName('tab')
    hideTabsContent(1)
}

function hideTabsContent(a) {
    for(let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show')
        tabContent[i].classList.add('hide')
        tab[i].classList.remove('whiteborder') // ИСПРАВЛЕНО: было revome
    }
}

document.getElementById('tabs').onclick = function (event) {
    const target = event.target
    // Проверяем через contains, так как у первой вкладки класс 'tab whiteborder'
    if(target.classList.contains('tab')) { 
        for(let i = 0; i < tab.length; i++) {
            if(target === tab[i]) {
                showTabsContent(i)   
                break
            }
        }
    }
}

function showTabsContent(b) {
    if(tabContent[b].classList.contains('hide')) {
        hideTabsContent(0)
        tab[b].classList.add('whiteborder')
        tabContent[b].classList.remove('hide')
        tabContent[b].classList.add('show')
    }
}


let modal = document.getElementById("myModal")
let btn = document.getElementById("myBtn")
let span = document.getElementsByClassName("close")[0]


btn.onclick = function () {
    modal.style.display = "block"
}

span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
if(event.target === modal) {
  modal.style.display = "none"
}
}

function myMove() {
    const elem = document.getElementById('myAnimation')
    let pos = 0
    const id = setInterval(frame, 10); 
   
    function frame () {
     if(pos == 350) {
        clearInterval(id)
     } else {
      pos++
      elem.style.top = pos + 'px'  
      elem.style.left = pos + 'px'  
     }
    }
}


let slideIndex = 1
showSlides(slideIndex)


function plusSlides (n) {
   showSlides(slideIndex += n) 
}

function currentSlide (n) {
 showSlides(slideIndex = n) 
}

function showSlides (n) {
let i 
let slides = document.getElementsByClassName("mySlides")
let dots = document.getElementsByClassName("dot")

if(n > slides.length) {
 slideIndex = 1   
}
if(n < 1 ) {
 slideIndex = slides.length   
}
for(i=0; i< slides.length; i++) {
 slides[i].style.display='none'
}
for(i=0; i< dots.length; i++) {
  dots[i].className = dots[i].className.replace('active', '')
}
slides[slideIndex-1].style.display= "block"
dots[slideIndex-1].className += " active"
}



function myFunction () {
   let input, filter, ul, li, a, i
   input = document.getElementById('myInput') 
   filter = input.value.toUpperCase()
   ul = document.getElementById("myUL")
   li = document.getElementsByTagName('li')

   for(i=0; i< li.length; i++) {
    a = li[i].getElementsByTagName("a")[0]
    if(a.innerHTML.toUpperCase() .indexOf(filter) > -1) {
     li[i].style.display = "" 
    }
    else{
        li[i].style.display = "none"
    }
   }
}


function plus () {
  let num1
  let num2
  let result 

  num1 = document.getElementById('n1').value
  num1 = parseInt(num1)

  num2 = document.getElementById('n2').value
  num2 = parseInt(num2)

    result = num1 + num2

    document.getElementById('out').innerHTML = result
}


function minus () {
 let num1
  let num2
  let result 


  num1 = document.getElementById('n1').value
  num1 = parseInt(num1)

  num2 = document.getElementById('n2').value
  num2 = parseInt(num2)

 result = num1 - num2

 document.getElementById('out').innerHTML = result

}


function multiply () {
  num1 = document.getElementById('n1').value
  num1 = parseInt(num1)

  num2 = document.getElementById('n2').value
  num2 = parseInt(num2)

 result = num1 * num2

 document.getElementById('out').innerHTML = result

}


let md2 = document.getElementById('myModal2')
let img = document.getElementById('myImg')
let modalImg = document.getElementById("img01")
let captionText = document.getElementById("caption")

img.onclick = function () {
    md2.style.display="block"
    modalImg.src = this.src
    captionText.innerHTML = this.alt
}

let span2 = document.getElementsByClassName("close2")[0]

span2.onclick = function () {
    md2.style.display = "none"
}

function move () {
 let bar = document.getElementById("myBar")   
 let width = 10
 let id = setInterval(frame, 10)

 function frame () {
   if(width>=100) {
    clearInterval(id)
   }
   else {
    width++ 
    bar.style.width = width + '%'
    document.getElementById("label").innerHTML = width*1 + '%'
   }
 }
}

function popfun () {
    let popup = document.getElementById("myPopup")
    popup.classList.toggle('show')
}


let acc = document.getElementsByClassName("accrodion")
let i

for(i=0; i < acc.length; i++) {
   acc[i].onclick = function () {
    this.classList.toggle("active")

    this.nextElementSibling.classList.toggle("show")
   }
}