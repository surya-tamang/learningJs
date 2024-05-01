
// let button = document.querySelector('#btn');

// button.addEventListener('click', clicked)

// function clicked(e) {
//     console.log(e);
//     button.innerText = "you clicked me";
// }


let form = document.querySelector('#form');
let keyEvent = document.querySelector('#email');

keyEvent.addEventListener('keydown', () => {
    let x = document.querySelector('#email')
    x.value = x.value.toUpperCase();
})

keyEvent.addEventListener('focusin', () => {
    keyEvent.style.border = "5px solid blue"
}) 
keyEvent.addEventListener('focusout', () => {
    keyEvent.style.border = "1px solid blue"
})

form.addEventListener('submit', submitted);
// document.querySelector('button').addEventListener('click', submitted);

function submitted(e) {
    e.preventDefault();

    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let pwd = document.querySelector('#password');


    let user_email = document.querySelector('#user_email');
    let user_pwd = document.querySelector('#user_pwd');


    user_name.innerText = name.value;
    user_email.innerText = email.value;
    user_pwd.innerText = pwd.value;
}

//event listener