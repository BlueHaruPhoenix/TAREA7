const btnEnviar = document.getElementById("btnEnviar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pResultado1 = document.getElementById("pResultado1");
const pResultado2 = document.getElementById("pResultado2");
const pResultado3 = document.getElementById("pResultado3");
const pResultado4 = document.getElementById("pResultado4");

function validar (){
    let name = nombre.value;
    let expRegName = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    pResultado3.innerText = "";

    if(name == "" || !expRegName.test(name)){
        pResultado3.innerText = "Nombre invalido"
    }else{
        pResultado3.innerText = "Nombre valido"
    }
    let surname = apellido.value;
    let expRegApellido = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    pResultado4.innerText = "";

    if(surname == "" || !expRegApellido.test(surname)){
        pResultado4.innerText = "Apellido invalido"
    }else{
        pResultado4.innerText = "Apellido valido"
    }
    let mail = email.value;
    let expRegMail=  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    pResultado1.innerText = "";

    if(mail == "" || !expRegMail.test(mail)){
        pResultado1.innerText = "Email invalido"
    }else{
        pResultado1.innerText = "Email valido"
    }

    let fono = phone.value;
    let expRegPhone = /^[0-9]{9}$/;
    pResultado2.innerText = "";

    if(fono == "" || !expRegPhone.test(fono)){
        pResultado2.innerText = "Telefono invalido"
    }else{
        pResultado2.innerText = "Telefono valido"
    }
}
btnEnviar.onclick = () => validar();