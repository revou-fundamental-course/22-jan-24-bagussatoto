let introName = prompt("May I know your name?", "");
document.getElementById('banner-name').innerHTML = introName;

function validateForm(){
    const formName = document.forms['form-message']['name'].value;
    const dateOfBirth = new Date(document.forms['form-message']['date-birth'].value);
    const birthToString = document.forms['form-message']['date-birth'].value;
    let currentDate = new Date();
    const kelaminRadio = document.querySelector('input[name="gender"]:checked');
    const pesan = document.forms['form-message']['pesan'].value;

    if (formName == ""){
        alert("Nama tidak boleh kosong!");
        document.getElementById('name').focus();
        return false;
    } else if (birthToString == ""){
        alert("Tanggal Lahir tidak boleh kosong!");
        document.getElementById('date-birth').focus();
        return false;
    } else if(dateOfBirth.setHours(0, 0, 0, 0) > currentDate.setHours(0, 0, 0, 0)){
        alert("Tanggal Lahir tidak boleh lebih dari tanggal sekarang!");
        document.getElementById('date-birth').focus();
        return false;
    } else if (kelaminRadio == null){
        alert("Jenis kelamin tidak boleh kosong!");
        return false;
    } else if (pesan == ""){
        alert("Pesan tidak boleh kosong!");
        document.getElementById('pesan').focus();
        return false;
    }
    else{
        document.getElementById('message-name').innerHTML = formName;
        currentDate = new Date();
        document.getElementById('message-current').innerHTML = currentDate;
        document.getElementById('message-date-birth').innerHTML = birthToString;
        let kelamin = kelaminRadio.value;
        document.getElementById('message-gender').innerHTML = kelamin;
        document.getElementById('message-pesan').innerHTML = pesan;
        return false;
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var x = document.getElementsByClassName('mySlides');
    
    if(n > x.length) {
        slideIndex = 1;
    } else if(n<1){
        slideIndex = x.length;
    }
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000)