let input= document.getElementById('guess');
let guessbutton= document.getElementById('checkguess');
let restartbutton= document.getElementById('restart');
let message= document.getElementById('message');
let chancesleftDOM= document.getElementById('chancesLeft');
let random;
let chancesleft=10;

function playgame()
{
    random= Math.floor((Math.random()*100)+1)
    chancesleft=10;
    input.value='';
    input.disabled=false;
    guessbutton.disabled=false;
    message.textContent='';
    updateChancesLeft();

}
function updateChancesLeft()
{
    chancesleftDOM.innerHTML= `Chances left are ${chancesleft}`
}

function checkguess(){
    let userinput=parseInt(input.value);
    if (isNaN(userinput) || userinput==0 || userinput>100)
    {
        message.textContent='Please enter a valid value'
        return
    }
    
    if(chancesleft<=0)
        {
            message.textContent=`Game Over. The number was ${random}`
            endgame()
            return
            
        }
       
    
    if(userinput<random)
    {
        message.textContent='Guess number too low'

    }
    else if(userinput>random)
    {
        message.innerHTML='Guess number too high'
    }
    else if(userinput===random)
    {
    message.innerHTML=`You Guesed the Correct Number ${random}`
    endgame()
    }
    chancesleft--
    updateChancesLeft()
    
}

function endgame()
{
    input.disabled=true
    guessbutton.disabled=true
}
guessbutton.addEventListener('click',checkguess)
restartbutton.addEventListener('click',playgame)
playgame()
