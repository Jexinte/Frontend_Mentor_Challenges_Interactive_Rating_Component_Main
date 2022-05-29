const formulaire = document.querySelector('form');

formulaire.addEventListener('submit',(e) => {
    e.preventDefault()
    const rating1 = document.getElementById('number1');
    const rating2 = document.getElementById('number2');
    const rating3 = document.getElementById('number3');
    const rating4 = document.getElementById('number4');
    const rating5 = document.getElementById('number5');
    const number1State = document.querySelector('.number1Selected')
    const number2State = document.querySelector('.number2Selected')
    const number3State = document.querySelector('.number3Selected')
    const number4State = document.querySelector('.number4Selected')
    const number5State = document.querySelector('.number5Selected');
   
    if(rating1.checked){
        number1State.style.backgroundColor = "hsl(216, 12%, 54%)"
        number1State.style.color ="white"
        alert(`The selected number is ${rating1.value}`)
        window.location.href=`thanks.html?number=${rating1.value}`
    }


    else if(rating2.checked){
        number2State.style.backgroundColor = "hsl(216, 12%, 54%)"
        number2State.style.color ="white"
        alert(`The selected number is ${rating2.value}`)
        window.location.href=`thanks.html?number=${rating2.value}`
    }


    else if(rating3.checked){
        number3State.style.backgroundColor = "hsl(216, 12%, 54%)"
        number3State.style.color ="white"
        alert(`The selected number is ${rating3.value}`)
        window.location.href=`thanks.html?number=${rating3.value}`
    }

    else if(rating4.checked){  
        number4State.style.backgroundColor = "hsl(216, 12%, 54%)"
        number4State.style.color ="white"
        alert(`The selected number is ${rating4.value}`)
        window.location.href=`thanks.html?number=${rating4.value}`
    }
    else if(rating5.checked){
        number5State.style.backgroundColor = "hsl(25, 97%, 53%)"
        number5State.style.color ="white"
        alert(`The selected number is ${rating5.value}`)
        window.location.href=`thanks.html?number=${rating5.value}`
    }
    else
        console.log('Error 404')

})
