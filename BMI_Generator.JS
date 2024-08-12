const form= document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault(); //this would stop the default working of the submit/calculate button//
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const result= document.querySelector('.result');

    if(height === '' || height < 0 || isNaN(height))
    {
        result.innerHTML= `Please enter a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight))
    {
        result.innerHTML=`Please enter a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000))

        result.innerHTML = `<span>${bmi}</span>`;
    }
})
