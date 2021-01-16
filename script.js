const submitNewsletter = document.getElementById('submitNewsletter')
let count = 0;
submitNewsletter.addEventListener('click', () => {
    count = count + 1
    if(count % 2 === 0){
        submitNewsletter.value = "SUBSCRIBE";
    } else submitNewsletter.value = "WELCOME TO MUSIKER COMMUNITY!";
})

const submitFormButton = document.getElementById('submitFormButton')
submitFormButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitFormButton.value = "THANK YOU FOR YOUR MESSAGE!";
})