/*e-- > enter
o-- > ober
i-- > ines
a-- > ai
u-- > ufat*/
function encriptar() {
    var texto = document.getElementById("input-text").value.toLowerCase(); //hara que todo el input o cadenas de string que de el usuario se conviertan automaticamente en minusculas.
    //e es para que afecte mayusculas y minusculas
    //g es para toda la linea u oracion
    //m es para parrafos
    var txtcrifrador = texto.replace(/e/igm, "enter");
    var txtcrifrador =txtcrifrador.replace(/o/igm, "ober");
    var txtcrifrador = txtcrifrador.replace(/i/igm, "ines");
    var txtcrifrador = txtcrifrador.replace(/a/igm, "ai");
    var txtcrifrador = txtcrifrador.replace(/u/igm, "ufat");

    document.getElementById("imgriGht").style.display="none";
    document.getElementById("textaso").style.display="none";
    document.getElementById("textaso2").innerHTML=txtcrifrador;
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display="inherit";
}

function desencriptar() {
    var texto = document.getElementById("input-text").value.toLowerCase(); //hara que todo el input o cadenas de string que de el usuario se conviertan automaticamente en minusculas.
    //e es para que afecte mayusculas y minusculas
    //g es para toda la linea u oracion
    //m es para parrafos
    var txtcrifrador = texto.replace(/enter/igm, "e");
    var txtcrifrador =txtcrifrador.replace(/ober/igm, "o");
    var txtcrifrador = txtcrifrador.replace(/ines/igm, "i");
    var txtcrifrador = txtcrifrador.replace(/ai/igm, "a");
    var txtcrifrador = txtcrifrador.replace(/ufat/igm, "u");

    document.getElementById("imgriGht").style.display="none";
    document.getElementById("textaso").style.display="none";
    document.getElementById("textaso2").innerHTML=txtcrifrador;
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display="inherit";
}

function copiar(){
    var contenido = document.querySelector("#textaso2");
    contenido.select();
    document.execCommand ("cut");
    alert("Se a guardado en el portapapeles")
}