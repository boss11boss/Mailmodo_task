let but=document.querySelector('#but')
let modal=document.querySelector('#modal')
let buttt=document.querySelector('#buttt')

let aa=document.querySelector('#aa')
let bb=document.querySelector('#bb')
let cc=document.querySelector('#cc')
let dd=document.querySelector('#dd')
let ee=document.querySelector('#ee')
let ff=document.querySelector('#ff')
let gg=document.querySelector('#gg')
let hh=document.querySelector('#hh')
let fr=document.querySelector('#footright')







but.addEventListener('click',function(){
    modal.style.display = 'initial' 
    

})

buttt.addEventListener('click',function(){


    let aav=aa.value
    let bbv=bb.value
    let ccv=cc.value
    let ddv=dd.value
    let eev=ee.value
    let ffv=ff.value
    let ggv=gg.value
    let hhv=hh.value
    
    let template=`<div id="maindetail">
    <p >${aav}</p>
    <p>${bbv}</p>
    <p>${ccv}</p>
    <p>${ddv}</p>
    <p>${eev}</p>
    <p>${ffv}</p>
    <p>${ggv}</p>
    <p id="green">${hhv}</p>
</div>`

    fr.innerHTML+=template

    modal.style.display = 'none'
})