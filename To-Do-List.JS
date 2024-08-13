document.getElementById('addtask').addEventListener('click',function(){
    const takeinput= document.getElementById('entertext').value;

    if(takeinput==''){
        alert('Please enter a value or a task');
        return
        
    }
 const ULlists= document.getElementById('lists')
 if(ULlists.getElementsByTagName('li').length>5){
    alert("Please delete some lists before adding another")
    return
 }

 const list= document.createElement('li')

 const span = document.createElement('span')
 span.textContent=takeinput
 list.appendChild(span)

 const del= document.createElement('button')
 del.textContent='Delete';
 list.appendChild(del)

 ULlists.appendChild(list)

 takeinput.value= "";

 del.addEventListener('click',function(){
    ULlists.removeChild(list)
 })
})
