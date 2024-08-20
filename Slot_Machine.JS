const prompt = require("prompt-sync")();

const ROWS= 3;
const COLS= 3;

const SYMBOLS={
    "🍒" : 2,
    "🍋" : 4,
    "🍉" : 6,
    "⭐" : 8,
}

const SYMBOL_VALUES={
    "🍒" : 5,
    "🍋" : 4,
    "🍉" : 3,
    "⭐" : 2,
}


const user_deposit = ()=>{
    while(true){
    const deposit=prompt("Please enter the deposit amount:  ");
    const number_deposit=parseFloat(deposit);

    if(!isNaN(number_deposit) && number_deposit>0){
        return number_deposit;
    }
    else
    {    
    console.log("Invalid amount. Please enter the correct amount..");
      
    }
}
}

const selectlines = ()=>{
    while(true){
    const lines=prompt("Please enter the line chosen (1-3):  ");
    const numberoflines =parseFloat(lines);

    if(!isNaN(numberoflines) && numberoflines>=1 && numberoflines<=3){
        return numberoflines;
    }
    else
    {    
    console.log("Invalid. Please enter the correct line value..");
      
    }
}
}
const bet = (balance,lines)=>{
    while(true){
    const getbet=prompt("Please enter the amount to bet:  ");
    const numberbet =parseFloat(getbet);

    if(!isNaN(numberbet) && numberbet>0 && numberbet <= balance/lines){
        return numberbet;
    }
    else
    {    
    console.log("Invalid. Please enter the correct bet amount");
      
    }
}
}

const spin = ()=>{
    const symbols=[]
    for (const [symbol,count] of Object.entries(SYMBOLS)) {
        for(let i=0;i<count;i++){
            symbols.push(symbol)
            
        }
        
    }
    console.log(symbols);
    


const slots=[] //displaying the rows and columns of the slots in slot machine
for(let i=0;i<COLS;i++){
    slots.push([]) // adds a column for every time a column is needed
    const SlotSymbols= [...symbols] // ()...) is the spread operator used to duplicate an iterable object like array
    for(let j=0;j<ROWS;j++){
        const RandomIndex= Math.floor(Math.random()*SlotSymbols.length)
        const SelectedSymbol= SlotSymbols[RandomIndex]
        slots[i].push(SelectedSymbol)
        SlotSymbols.splice(RandomIndex,1)

    }
}
return slots
}
const AlignRows=(slots)=>{
    const rows=[]
    for(let i =0;i<ROWS;i++){
        rows.push([])
        for(let j=0;j<COLS;j++){
            rows[i].push(slots[j][i])

        }
    }
    return rows
}
const printrows=(rows)=>{
    rows.forEach((row,index) => {
        console.log(`ROW ${index+1} :${row.join('|')}`);
        
    });
}

const winnings=(rows,bet,selectlines)=>{
    let winnings =0
    for(let row=0;row<selectlines;row++){
        const symbols=rows[row]
        let allsame=true
    
    for(const symbol of symbols){
        if(symbol!=symbols[0]){
            allsame=false
            break
        }
    }
    if (allsame)
    {
        winnings+=bet*SYMBOL_VALUES[symbols[0]]
    }
}
return winnings
}



const game=()=>{
    let balance= user_deposit();
    while(true){
console.log(`The amount deposited is ${balance}`);
console.log(`You have a balance of ${balance}`)
const lines= selectlines()
console.log(`The lines selected are ${lines}`)
const betamount= bet(balance,lines)
console.log(`amount bet is ${betamount}`);
balance-= betamount*lines
const slots= spin()
const RowsAlign= AlignRows(slots)
printrows(RowsAlign)
const totalwinning=winnings(RowsAlign,betamount,lines)
balance+=totalwinning
console.log(`You Won ${totalwinning}`)
if(balance<=0)
{
    console.log("You ran out of Money Brokie!!!!");
    break
}
const playagain=prompt("Do you want to play again (y/n)?")
if(playagain !="y"){
    break}
    }
}
game()
