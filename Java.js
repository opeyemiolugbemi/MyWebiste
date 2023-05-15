var firstname = 'Adedotun'
var lastname = 'Adetunji'
var fullname = firstname + " " + lastname
let age = prompt('enter your age')
if (age >= 18 && age <= 50 ) {
    document.getElementById('test').innerHTML = 'Welcome ' + fullname + " <br> You can Vote";
    document.getElementById('test').style.color = 'green'
    document.getElementById('test').style.backgroundColor = 'orange'
}else if(age >= 51 && age <= 70 ){
    document.getElementById('test').innerHTML = 'welcome' + fullname + " <br> You can Vote at the aged category";
    document.getElementById('test').style.color = 'blue'
    document.getElementById('test').style.backgroundColor = 'magenta'
}else if(age > 70) {
    document.getElementById('test').innerHTML = 'welcome' + fullname + " <br> You can Vote at the aged category";
    document.getElementById('test').style.color = 'yelow'
    document.getElementById('test').style.backgroundColor = 'purple'
}
else{
    document.getElementById('test').innerHTML = 'Not Welcome ' + fullname + " <br> You cannot Vote";
    document.getElementById('test').style.color = 'red'
    document.getElementById('test').style.backgroundColor = 'lightblue'
}