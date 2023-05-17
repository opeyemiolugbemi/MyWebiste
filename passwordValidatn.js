function passwordValidation() {
    let password = document.getElementById('pass').value;
    let Cpassword = document.getElementById('cpass').value;
    if (password== Cpassword) {
        alert('password match')
    }
        else{
            alert('password does not match')
        }
}