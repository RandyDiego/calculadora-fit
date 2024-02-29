function calcular(){
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;


    let peso=document.getElementById("peso").value;
    let pesoT=Number(peso);
    let estatura=document.getElementById("estatura").value;
    let estaturaT=Number(estatura);
    let imc= Math.ceil(+peso/(+estatura * +estatura));

    let mensaje=document.getElementById("mensaje");
    let mensaje1=document.getElementById("mensaje1");



    mensaje.textContent="Bienvendo " + nombre +" "+ apellido + " tus resultados:";
    mensaje1.textContent="Indice de Masa Corporal: "  + imc + "%";





    let edad=document.getElementById("edad").value;
    let edadT=Number(peso);
    let cintura=document.getElementById("cintura").value;
    let cinturaT=Number(peso);

    (1.2* +imc) + (0.23 * +edad) - (10.8 * 1) - 5.4;

    let mgc=Math.ceil((1.2* +imc) + (0.23 * +edad) - (10.8 * 1) - 5.4);
    let fgc=Math.ceil((1.2* +imc) + (0.23 * +edad) - 5.4);

    mensaje2=document.getElementById("mensaje2");

    if(document.getElementById("genero1").checked){
        mensaje2.textContent="Porcentaje de Grasa Corporal: " + mgc + "%";
    }
    if(document.getElementById("genero2").checked){
        mensaje2.textContent="Porcentaje de Grasa Corporal: " + fgc + "%";
    }



    let mensaje3=document.getElementById("mensaje3");
    let ejercicio=document.getElementById("ejercicio").value;

    let calorias1= +peso * 22 * 1.2;
    let calorias2= +peso * 22 * 1.4;
    let calorias3= +peso * 22 * 1.6;
    let calorias4= +peso * 22 * 1.8;
    let calorias5= +peso * 22 * 2;

    if(ejercicio=="poco"){
        mensaje3.textContent="Tu consumo de kilocalorias diarias es de: " + calorias1 + " kcal";
    }
    if(ejercicio=="ligero"){
        mensaje3.textContent="Consumo de kilocalorias diarias: " + calorias2 + " kcal";
    }
    if(ejercicio=="moderado"){
        mensaje3.textContent="Consumo de kilocalorias diarias: " + calorias3 + " kcal";
    }
    if(ejercicio=="fuerte"){
        mensaje3.textContent="Consumo de kilocalorias diarias: " + calorias4 + " kcal";
    }
    if(ejercicio=="mfuerte"){
        mensaje3.textContent="Consumo de kilocalorias diarias: " + calorias5 + " kcal";
    }

}