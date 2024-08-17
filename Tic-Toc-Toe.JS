let board= ['','','','','','','','',''];
let current_player = 'X';
let active_game= true;

function move(index){
    if(board[index]==='' && active_game)
    {
        board[index]=current_player
    
    document.getElementsByClassName('cell')[index].innerHTML=current_player


if(checkwin()){
    alert (`player ${current_player} wins!`)
    active_game=false
}
else if(board.every(cell => cell !=='')){
    alert("Its a Draw")
    active_game=false
}
else{
current_player=current_player=== 'X'?'O':'X'
}
    }
}
function checkwin(){
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winConditions.some(condition=> condition.every(index=>board[index]===current_player))
}
function reset(){
    board=['','','','','','','','',''];
    active_game=true
    current_player='X'
    document.querySelectorAll('.cell').forEach(cell =>cell.innerHTML='')
}
