
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


//change event

document.querySelector('#name').addEventListener("change", handleChange());

function handleChange() {
    var inputValue = document.querySelector('#name').value;
    document.getElementById("user_name").innerText = "Value changed to: " + inputValue;
}

// input event

document.getElementById("email").addEventListener("input", (event) => {
    document.getElementById("user_email").innerText = event.target.value;
}
);

// mouseover

document.getElementById("name").addEventListener("mouseover", () => {
    document.getElementById("name").style.border ="5px solid red";
});