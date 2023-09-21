const fechaActual = new Date();

const anioActual = fechaActual.getFullYear();
const mesActual = fechaActual.getMonth();
const diaActual = fechaActual.getDay();

let diaNacimiento = document.getElementById("dia");
let mesNacimiento = document.getElementById("mes");
let anioNacimiento = document.getElementById("anio");
let formulario = document.getElementById("formulario");

let resultadoDias = document.getElementById("resultadoDias");
let resultadoMeses = document.getElementById("resultadoMeses");
let resultadoAnios = document.getElementById("resultadoAnios");

diaNacimiento.addEventListener("input", validarDia);
mesNacimiento.addEventListener("input", validarMes);
anioNacimiento.addEventListener("input", validarAnio);

console.log(`${diaActual} / ${mesActual} / ${anioActual}`);

console.log(diaActual);

const boton = document.getElementById("calcularBtn")
boton.addEventListener("click", getBirthDate);


function getBirthDate(){
    
    let diaNac = parseInt(diaNacimiento.value);
    let mesNac = parseInt(mesNacimiento.value);
    let anioNac = parseInt(anioNacimiento.value);

    let validadorDia = validarDia();
    let validadorMes = validarMes();
    let validadorAnio =validarAnio();

    if(validadorDia===true && validadorMes===true && validadorAnio===true){
        calculateAge(anioNac, mesNac, diaNac);
    }else{
        resultadoAnios.innerHTML = "--";
        resultadoMeses.innerHTML = "--";
        resultadoDias.innerHTML = "--";
    }
}

function calculateAge(anioNac, mesNac, diaNac){

    let anios= anioActual - anioNac;

    let meses = mesActual - mesNac;

    if( meses < 0){
        anios = anios-1;
        meses = 12 + meses;
    }

    let dias = diaNac + diaActual;

    if (dias > 30){
        dias = dias - 30;
        meses= meses+1;
    }
    

    resultadoAnios.innerHTML = anios;
    resultadoMeses.innerHTML = meses;
    resultadoDias.innerHTML = dias;
    formulario.reset();
}
 function validarDia(){
    const tituloDia = document.getElementById("tituloDia");
    let day = parseInt(diaNacimiento.value);
    if( day > 31 || day < 1){
        let alerta = document.getElementById("alertaInvalidDay");
        alerta.textContent = "Must be a valid day";

        diaNacimiento.classList.remove("entrada");
        diaNacimiento.classList.add("entradaInvalida");

        tituloDia.classList.remove("tituloCaja");
        tituloDia.classList.add("tituloCajaInvalida");

        return false;
    }
    else if( day < 31 ){
        let alerta = document.getElementById("alertaInvalidDay");
        alerta.textContent = "";

        diaNacimiento.classList.remove("entradaInvalida");
        diaNacimiento.classList.add("entrada");

        tituloDia.classList.remove("tituloCajaInvalida");
        tituloDia.classList.add("tituloCaja");

        return true;
    }else if(diaNacimiento.value == ""){
        let alerta = document.getElementById("alertaInvalidDay");
        alerta.textContent = "This field is required";

        diaNacimiento.classList.remove("entrada");
        diaNacimiento.classList.add("entradaInvalida");

        tituloDia.classList.remove("tituloCaja");
        tituloDia.classList.add("tituloCajaInvalida");

        return false;
    }
    else{
        let alerta = document.getElementById("alertaInvalidDay");
        alerta.textContent = "";

        diaNacimiento.classList.remove("entradaInvalida");
        diaNacimiento.classList.add("entrada");

        tituloDia.classList.remove("tituloCajaInvalida");
        tituloDia.classList.add("tituloCaja");

        return true;
    }
    
 }
 function validarMes(){

    const tituloMes = document.getElementById("tituloMes");
    let month = parseInt(mesNacimiento.value);

    if( month > 12 || month < 1){
        let alerta = document.getElementById("alertaInvalidMonth");
        alerta.textContent = "Must be a valid month";

        mesNacimiento.classList.remove("entrada");
        mesNacimiento.classList.add("entradaInvalida");

        tituloMes.classList.remove("tituloCaja");
        tituloMes.classList.add("tituloCajaInvalida");

        return false;
    }
    else if( month <= 12){
        let alerta = document.getElementById("alertaInvalidMonth");
        alerta.textContent = "";

        mesNacimiento.classList.remove("entradaInvalida");
        mesNacimiento.classList.add("entrada");

        tituloMes.classList.remove("tituloCajaInvalida");
        tituloMes.classList.add("tituloCaja");

        return true;
    }else if(mesNacimiento.value == ""){
        let alerta = document.getElementById("alertaInvalidMonth");
        alerta.textContent = "This field is required";

        mesNacimiento.classList.remove("entrada");
        mesNacimiento.classList.add("entradaInvalida");

        tituloMes.classList.remove("tituloCaja");
        tituloMes.classList.add("tituloCajaInvalida");

        return false;
    }else{
        let alerta = document.getElementById("alertaInvalidMonth");
        alerta.textContent = "";

        mesNacimiento.classList.remove("entradaInvalida");
        mesNacimiento.classList.add("entrada");

        tituloMes.classList.remove("tituloCajaInvalida");
        tituloMes.classList.add("tituloCaja");

        return true;
    }
 }
 function validarAnio(){
    const tituloAnio = document.getElementById("tituloAnio");

    let year = parseInt(anioNacimiento.value);
    if( year > anioActual || year <1){
        if(year <1){
            let alerta = document.getElementById("alertaInvalidYear");
            alerta.innerHTML = `Must be a valid year <br>
            greater than 0`;

            anioNacimiento.classList.remove("entrada");
            anioNacimiento.classList.add("entradaInvalida");

            tituloAnio.classList.remove("tituloCaja");
            tituloAnio.classList.add("tituloCajaInvalida");

            return false;
        }
        let alerta = document.getElementById("alertaInvalidYear");
        alerta.textContent = "Must be in the past";

        anioNacimiento.classList.remove("entrada");
        anioNacimiento.classList.add("entradaInvalida");

        tituloAnio.classList.remove("tituloCaja");
        tituloAnio.classList.add("tituloCajaInvalida");

        return false;   
    }else if( year < anioActual){
        let alerta = document.getElementById("alertaInvalidYear");
        alerta.textContent = "";

        anioNacimiento.classList.remove("entradaInvalida");
        anioNacimiento.classList.add("entrada");

        tituloAnio.classList.remove("tituloCajaInvalida");
        tituloAnio.classList.add("tituloCaja");

        return true;
    }else if(anioNacimiento.value == ""){
        let alerta = document.getElementById("alertaInvalidYear");
        alerta.textContent = "This field is required";

        anioNacimiento.classList.remove("entrada");
        anioNacimiento.classList.add("entradaInvalida");

        tituloAnio.classList.remove("tituloCaja");
        tituloAnio.classList.add("tituloCajaInvalida");

        return false; 
    }
    else{
        let alerta = document.getElementById("alertaInvalidYear");
        alerta.textContent = "";

        anioNacimiento.classList.remove("entradaInvalida");
        anioNacimiento.classList.add("entrada");

        tituloAnio.classList.remove("tituloCajaInvalida");
        tituloAnio.classList.add("tituloCaja");

        return true; 
    }
 }
