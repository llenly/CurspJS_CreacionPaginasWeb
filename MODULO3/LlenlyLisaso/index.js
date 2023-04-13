
//Aqui creo el javascript para hacer las funciones
//los campos en rojos hay que controlarlos mediante alert y por javascript
// con class y name

//EJERCICIO1 descargar el pdf
function descargar() {

    var descarga = window.open("docs/Anexo IX.pdf");

    // document.getElementById('botones').value = descarga;

}
//FUNCION PARA VALIDAR DATOS Y MOSTRARLO EN LA VENATNA

var dato;
var mensaje = "";

var fotos = new Array();

function enviarDatos() {

    // nombre = document.getElementById('name_control').value;
    // direccion = document.getElementById('dir_control').value;
    // localidad = document.getElementById('loc_control').value;
    // comunidad = document.getElementById('regiones').value;
    // cp = document.getElementById('cp_control').value;
    // movil = document.getElementById('mov_control').value;
    // telefono = document.getElementById('tel_control').value;
    // correo = document.getElementById('email_control').value;
    // seguridadSocial = document.getElementById('email_control').value;
    // nacimiento = document.getElementById('date_control').value;
    // sexo = document.getElementById('var1').value;
    // discapacidad = document.getElementById('var2').value;
    // nacionalidad = document.getElementById('nac_control').value;
   var  nombre = document.formulario.nombre.value;
   var  direccion = document.formulario.direccion.value;
   var  localidad = document.formulario.localidad.value;
   var  comunidad = document.formulario.comunidad.value;
   var  cp = document.formulario.cp.value;
   var  movil = document.formulario.movil.value;
   var  telefono = document.formulario.telefono.value;
   var  correo = document.formulario.correo.value;
   var  seguridadSocial = document.formulario.seguridadsocial.value;
   var  nacimiento = document.formulario.nacimiento.value;
   var  sexo = document.formulario.sexo.value;
   var  discapacidad = document.formulario.discapacidad.value;
 //  var  nacionalidad = document.formulario.nacionalidad.value;

 console.log(nombre+ direccion+ localidad+comunidad+cp+movil+telefono+ correo+seguridadSocial+
    nacimiento+sexo+discapacidad+nacionalidad);

    var imagenes = new Array("imagenes/andalucia.png","imagenes/aragon.png", "./imagenes/cataluna.png", "imagenes/madrid.png", "imagenes/valencia.png", "imagenes/galicia.jpg", "imagenes/leon.png", "imagenes/pais-vasco.png", "imagenes/canariass.png", "imagenes/la-mancha.png", "imagenes/murcia.png", "imagenes/baleares.png", "imagenes/extremadura.png", "imagenes/asturias.png", "imagenes/navarra.jpg", "imagenes/cantabria.png", "imagenes/rioja.png", "imagenes/ceuta.png", "imagenes/melilla.png");
    
    var impImg = "";
    //validacion para el NOMBRE Y APELLIDOS
    if (nombre == "") {
        alert("por favor introduce un nombre");
    } else {
        mensaje = mensaje + "\nNombre: " + nombre;
    }

    //validacion para la DIRECCION   
    if (direccion == "") {
        alert("por favor introduce una direccion");
    }
    else {
        mensaje = mensaje + "\nDireccion: " + direccion;
    }
    // validacion para la LOCALIDAD
    if (localidad == "") {
        alert("por favor introduce una localidad");
    } else {
        mensaje = mensaje + "\nLocalidad: " + localidad + "\n";
    }

    // VALIDACION PARA SACAR LA COMUNIDAD 

    switch (comunidad) {
        case "and":
            impImg = imagenes[0];
            mensaje = mensaje + "tu comunidad es en Andalucia" + "\n";
            // imagen = "andalucia";

            break;

        case "ara":
            impImg = imagenes[1];
            mensaje = mensaje + "tu comunidad es en Aragon" + "\n";
            // imagen = "aragon";
            break;

        case "cat":
            impImg = imagenes[2];
            mensaje = mensaje + "tu comunidad es en Cataluña" + "\n";
            // imagen = "cataluña";
            break;

        case "mad":
            impImg = imagenes[3];
            mensaje = mensaje + "tu comunidad es en Madrid" + "\n";
            // imagen = "madrid";
            break;

        case "val":
            impImg = imagenes[4];
            mensaje = mensaje + "tu comunidad es en Valencia" + "\n";
            // imagen = "valencia";
            break;

        case "gal":
            impImg = imagenes[5];
            mensaje = mensaje + "tu comunidad es en Galicia" + "\n";
            // imagen = "galicia";
            break;

        case "leo":
            impImg = imagenes[6];
            mensaje = mensaje + "tu comunidad es en Castilla y Leon" + "\n";
            // imagen = "castilla y leon"
            break;

        case "vas":
            mensaje = mensaje + "tu comunidad es en Pais Vasco" + "\n";
            impImg = imagenes[7];
            // imagen = "pais-vazco"
            break;

        case "cna":
            mensaje = mensaje + "tu comunidad es Islas Canarias" + "\n";
            impImg = imagenes[8];
            // imagen = "canarias";
            break;

        case "cas":
            mensaje = mensaje + "tu comunidad es Castilla La Mancha" + "\n";
            impImg = imagenes[9];
            // imagen = "castilla";
            break;

        case "mur":
            mensaje = mensaje + "tu comunidad es Murcia" + "\n";
            impImg = imagenes[10];
            // imagen = "murcia";
            break;

        case "bal":
            mensaje = mensaje + "tu comunidad es Islas Baleares" + "\n";
            impImg = imagenes[11];
            // imagen = "baleares";
            break;

        case "ext":
            mensaje = mensaje + "tu comunidad es Extremadura" + "\n";
            impImg = imagenes[12];
            // imagen = "extremadura";
            break;

        case "ast":
            mensaje = mensaje + "tu comunidad es Principado de Asturias" + "\n";
            impImg = imagenes[13];
            // imagen = " asturias";
            break;

        case "nav":
            mensaje = mensaje + "tu comunidad es Navarra" + "\n";
            impImg = imagenes[14];
            // imagen = "navarra";
            break;

        case "can":
            mensaje = mensaje + "tu comunidad es Cantabria" + "\n";
            impImg = imagenes[15];
            // imagen = "canarias";
            break;

        case "rio":
            mensaje = mensaje + "tu comunidad es La Rioja" + "\n";
            impImg = imagenes[16];
            // imagen = "rioja";
            break;

        case "ceu":
            mensaje = mensaje + "tu comunidad es La Ceuta" + "\n";
            impImg = imagenes[17];
            // imagen = "ceuta";
            break;

        case "mel":
            mensaje = mensaje + "tu comunidad es La Melilla" + "\n";
            impImg = imagenes[18];
            // imagen = "melilla"
            break;

        default:
            break;
    }

    // creo una variable emergente que me guarde la ruta de las imagenes
    // var rutaImg = "imagenes/" + imagen + ".png";

    // console.log(rutaImg);

    //CODIGO POSTAL
    if (cp == "") {
        alert("por favor introduce una código postal");
    }
    else
        mensaje = mensaje + "\nCodigo Postal: " + cp;


    // validacion para el MOVIL
    if (movil == "") {
        alert("por favor introduce un móvil");
    } else if (movil != "") {
        mensaje = mensaje + "\nMovil: " + movil;
    }

    // TELEFONO FIJO
    if (telefono == "") {
        alert("por favor introduce un fijo");
    } else if (telefono != "") {
        mensaje = mensaje + "\nTelefono Fijo: " + telefono;
    }


    // validaciones para el CORREO
    if (correo == "") {
        alert("por favor introduce un correo");
    } else if (correo != "") {
        mensaje = mensaje + "\nCorreo: " + correo;
    }

    //seguridadSocial
    if (seguridadSocial == "") {
        alert("por favor introduce un numero de SS");
    } else if (seguridadSocial != "") {
        mensaje = mensaje + "\nSeguridad Social: " + seguridadSocial;
    }

    // nacimiento
    if (nacimiento == "") {
        alert("por favor introduce una Fecha");
    } else if (nacimiento != "") {
        mensaje = mensaje + "\nNacimiento : " + nacimiento;
    }


    // SEXO
    var longitud = document.formulario.sexo.length;

    var sexo = new Array(longitud);

    for (i = 0; i < longitud; i++) {
        sexo[i] = null;
    }

    for (i = 0; i < longitud; i++) {
        sexo[i] = document.formulario.sexo[i].checked;
    }

    for (i = 0; i < longitud; i++) {
        if (sexo[i] == true) {
            switch (i) {
                case 0:
                    mensaje = mensaje + "Tu sexo es hombre.\n";
                    break;
                case 1:
                    mensaje = mensaje + "Tu sexo es mujer.\n";
                    break;

                default:
                    break;
            }
        }
    }

    // DISCAPACIDAD

    longitud = document.formulario.discapacidad.length;
    var discapacidad = new Array(longitud);

    for (i = 0; i < longitud; i++) {
        discapacidad[i] = null;
    }

    for (i = 0; i < longitud; i++) {
        discapacidad[i] = document.formulario.discapacidad[i].checked;
    }

    for (i = 0; i < longitud; i++) {
        if (discapacidad[i] == true) {
            switch (i) {
                case 0:
                    mensaje = mensaje + "Con discapacidad.\n";
                    break;
                case 1:
                    mensaje = mensaje + "Sin discapacidad.\n";
                    break;

                default:
                    break;
            }
        }
    }
  // ESTUDIOS

  var var3 = document.formulario.var3.checked;	
  var var4 = document.formulario.var4.checked;
  var var5 = document.formulario.var5.checked;
  var var6 = document.formulario.var6.checked;
  var var7 = document.formulario.var7.checked;
  var var8 = document.formulario.var8.checked;
  var var9 = document.formulario.var9.checked;
  var var10 = document.formulario.var10.checked;
  var var11 = document.formulario.var11.checked;
  var apoyo = document.formulario.apoyo.value;

  if ( (var3 == false) && (var4 == false) && (var5 == false) && (var6 == false) && (var7 == false) && (var8 == false) && (var9 == false) && (var10 == false) && (var11 == false) ) {
      estudios = "";
  }else {
      estudios = "Tu estudios son: ";
  }

  if (var3 == true) {
      estudios = estudios + "Sin titulación ";
  }

  if (var4 == true) {
      estudios = estudios + "ESO / Graduado Esc.";
  }

  if (var5 == true) {
      estudios = estudios + "Técnico FP Grado Medio / FP1 ";
  }

  if (var6 == true) {
      estudios = estudios + "Técnico FP Grado Superior / FP2 ";
  }

  if (var7 == true) {
      estudios = estudios + "Bachiller ";
  }

  if (var8 == true) {
      estudios = estudios + "Diplomado (E. Universitaria 1º Ciclo) ";
  }

  if (var9 == true) {
      estudios = estudios + "Diplomado (E. Universitaria 2º Ciclo) ";
  }

  if (var10 == true) {
      estudios = estudios + "Doctor ";
  }

  if (var11 == true) {
      estudios = estudios  + apoyo;
  }

  mensaje = mensaje + estudios + "\n";


  // SITUACION LABORAL Y CATEGORIA

  // SITUACION LABORAL

  longitud = document.formulario.laboral.length;
  sit_lab = new Array(longitud);

  for (i = 0; i < longitud; i++) {
      sit_lab[i] = null;
  }

  for ( i = 0; i < longitud; i++) {
      sit_lab[i] = document.formulario.laboral[i].checked;
  }

  for ( i = 0; i < longitud; i++) {
      if (sit_lab[i] == true) {
          switch (i) {
              case 0:
                  mensaje = mensaje + "Area Funcional: Dirección\n";
                  break;
              case 1:
                  mensaje = mensaje + "Area Funcional: Administración\n";
                  break;
              case 2:
                  mensaje = mensaje + "Area Funcional: Comercial\n";
                  break;
              case 3:
                  mensaje = mensaje + "Area Funcional: Mantenimiento\n";
                  break;
              case 4:
                  mensaje = mensaje + "Area Funcional: Producción\n";
                  break;
          
              default:
                  break;
          }
      }
  }

  // CATEGORIA

  longitud = document.formulario.categ.length;
  categ = new Array(longitud);

  for (i = 0; i < longitud; i++) {
      categ[i] = null;
  }

  for ( i = 0; i < longitud; i++) {
      categ[i] = document.formulario.categ[i].checked;
  }

  for ( i = 0; i < longitud; i++) {
      if (categ[i] == true) {
          switch (i) {
              case 0:
                  mensaje = mensaje + "Categoría: Directivo/a\n";
                  break;
              case 1:
                  mensaje = mensaje + "Categoría: Mando Intermedio\n";
                  break;
              case 2:
                  mensaje = mensaje + "Categoría: Técnico\n";
                  break;
              case 3:
                  mensaje = mensaje + "Categoría: Trabajador/a cualificado\n";
                  break;
              case 4:
                  mensaje = mensaje + "Categoría: Trabajador/a de baja cualificación\n";
                  break;
          
              default:
                  break;
          }
      }
  }

    //capturo los datos enviados al boton enviar por su id
    var ver = document.getElementsByClassName("mostar").value = mensaje;

    //creo na ventana externa

    var ventana = window.open("", "Ventana Respuesta", "top=150px,left=150px,width=500px,height=500px");

    ventana.document.write('<head><title>Ventana Respuesta</title></head>');
    ventana.document.write('<body>');

    ventana.document.write('<div id="contenedor" align="center" style="width: 400px; border: 2px solid blue; padding: 50px;" >');
    ventana.document.write('<textarea id="pizarra" cols="40" rows="20" readonly style="resize: none; border: 2px solid blue;"></textarea><br><br>');//creo el texarea pa mostrar datos
    // ventana.document.write(`<img  id= "imagen" src = " ${rutaImg}" style="width: 400px ;"><br><br>`);//creo el texarea pa mostrar datos
    ventana.document.write('<img id="img" src="" style="width: 200px; box-shadow: 10px 10px 10px brown;" ><br><br>');
    ventana.document.write('<button id="boton"  onclick="window.close()" style="width: 100px ; height = 100px ; border-radius:10px; border: none; " >Cerrar Ventana</button>');//me cierra la ventana

    ventana.document.write('</div></body>');

    //captro lo que hay en rl texarea por su id e imprimo datos que viene lleno con los datos del btn enviar
    ventana.document.getElementById("pizarra").value = ver;
    ventana.document.getElementById("img").src = impImg;

}


//FUNCION PARA SACAR EL NIF Y EL DNI

//letra es un array de 23 posiciones
var letra = new Array(23);

letra[0] = "T ";
letra[1] = "R ";
letra[2] = "W ";
letra[3] = "A ";
letra[4] = "G ";
letra[5] = "M ";
letra[6] = " Y";
letra[7] = "F ";
letra[8] = " P";
letra[9] = "D ";
letra[10] = " X";
letra[11] = " B";
letra[12] = " N";
letra[13] = "J ";
letra[14] = " Z";
letra[15] = " S";
letra[16] = " Q";
letra[17] = "V ";
letra[18] = " H";
letra[19] = "L ";
letra[20] = " C";
letra[21] = " K";
letra[22] = " E";

function generarId() {

    //capturo español y extranjero
    nacionalidad = document.getElementById("nac_control").value;
    nif = document.getElementById("nif_control").value;

    if (nacionalidad == "esp") {

        //sacar el resto del numero introducido pro el usuario con esa formula
        var resto = (nif % 23);
        //variable nueva resultadoLetra va a coger el contenido del array letra y resto va a se una de las posiciones del array 
        resultadoLetra = letra[resto];

        document.getElementById("letra_control").value = resultadoLetra;

    }

    letra_nie = document.getElementById("letra_nie").value;

    mensaje = "\nNacionalidad : " + nacionalidad;


    if (nacionalidad == "ext") {

        if (letra_nie == "") {

            alert("por favor ingrese una letra");
        }


        if (letra_nie == "y") {
            nif = parseInt(nif);
            var nifOk = nif + 10000000;

            console.log(nif);
            console.log(nifOk);
        }

        if (letra_nie == "z") {
            var nifOk = nif + 20000000;
        }

        var resto = (nifOk % 23);
     
        letra[resto];

    }
    mensaje = "\nNacionalidad : " + "Extranjera";

    document.getElementById("letra_control").value = letra[resto];


}
