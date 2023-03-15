const email = document.querySelector("#email")
const errormessage = document.querySelector("#er-msg")
const iconerror = document.querySelector("#icon")
const button = document.querySelector("#button")

button.addEventListener("click", (e) => {
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexemail.test(email.value)){
        e.preventDefault();
        errormessage.style.display = "block"
        iconerror.style.display = "block"
        email.style.border = "1px solid hsl(0, 93%, 68%)"
    }else{
        errormessage.style.display = "none"
        iconerror.style.display = "none"
        email.style.border = "1px solid hsl(0, 36%, 70%)"
    }
})