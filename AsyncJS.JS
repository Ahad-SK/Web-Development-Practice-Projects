let randomcolor= function(){
    const hex= '0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)]

    }
    return color
}

let intervalid;

function bodybg()
{
    document.body.style.backgroundColor=randomcolor()
}

const startbutton= document.querySelector('#start')
startbutton.addEventListener('click',function(){
    intervalid=setInterval(bodybg,1000)
})

const stopbutton= document.querySelector('#stop')
stopbutton.addEventListener('click',function(){
    clearInterval(intervalid)
})
