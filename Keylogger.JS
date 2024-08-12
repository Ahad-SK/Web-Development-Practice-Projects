let button1= document.getElementById('b1')
let button2= document.getElementById('b2')
let show=document.getElementById('showkey')

let keyfun= function (e){
    show.textContent=`the pressed key is ${e.key}`
}
button1.addEventListener('click',function(){
   
    document.addEventListener('keydown',keyfun)
    show.textContent='keylogger started'
})
button2.addEventListener('click', function() {
    // Remove the keydown listener when the "Stop" button is clicked
    document.removeEventListener('keydown', keyfun);
    show.textContent = "Keylogger stopped.";
});

