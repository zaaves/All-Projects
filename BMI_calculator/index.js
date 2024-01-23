let form = document.querySelector("form")
/*
this usecase will give you empty value
const height = parseInt(document.querySelector("#height").value)
*/
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = (document.querySelector("#height").value)

    const weight = (document.querySelector("#weight").value)

    const result = document.querySelector("#result h2")

    const result1 = document.querySelector("#result h3")

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height";
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight";
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            result1.textContent = `Underweight`
        }
        else if(bmi > 18.6 && bmi < 24.9){
            result1.textContent = `Normal range`
        }
        else{
            result1.textContent = `Overweight`
        }
    }

});