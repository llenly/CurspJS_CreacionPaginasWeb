

/* ESTILOS JQUERY , PERO ESTA INCLUIDO BOOSRAP 5 Y NO LEVA JQUERY*/
// $(document).ready(function () {
//    $('.enlaces').click(function () {
//        var valor = $(this).attr('data-nombre');
//       console.log(valor);
//     if (valor == 'todos') {
//         $('.filtro').show('100');
//     }else{
//         $('.filtro').not('.'+ valor).hide('100');
//         $('.filtro').filter('.'+ valor).show('100');
//     }
//    }) 
// })

/*INCLUYENDO LA LIBRERIA MUURI RESPONSIVE DE PORTAFOLIO */
const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
})

//acceder a las imagenes que estan ocultas cuando se cargue toda la pagina o ventana
window.addEventListener('load', () => {
    //metodo de la libreria muuri para recalcular la grid y hacer el responsive
    grid.refreshItems().layout();
    //agregar al grid la imagenes cargadas
    document.getElementById('grid').classList.add('imagenes-cargadas');

    //AGREGAR LOS LISTENESR  DE LO S ENLACES PARA FILTAR POR CATEGORIAS
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((element) => {
        // console.log(element);
        //le ponga la clase active al enlace que se de click
        element.addEventListener('click', (evento) => {
            //evitar el comportamiento por defecto del navegador para los enlaces
            evento.preventDefault();
            //console.log(evento.target); saber que enlace fue clickeado

            //quitarle la clase de activo
            enlaces.forEach((enlace) => {
                enlace.classList.remove('activo');
            })

            // para agragrale la clase activo al enlace clickeado
            evento.target.classList.add('activo');

            //filtrar las categorias con un metodo de la libreria
            const categoria = evento.target.innerHTML.toLowerCase();
            // console.log(categoria);

            //condicional para que muestre todoas las categorias o solo la filtre
            categoria === 'todos' ? grid.filter(`[data-categoria]`) : grid.filter(`[data-categoria ="${categoria}"]`);//muestra todos los item que tengan el atributo data


        })
    });

    //AGREGAR EL LISTENER PARA LA BARRA DE BUSQUEDA
    //llamar al input mediante su id y capturar cuando escriben en el input
    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        // console.log(busqueda);
        // grid.filter( (item)=> {
        //     return  item.getElement().dataset.etiquetas;
        // })
        //lo mismo que arriba en una sola linea funcion de callback o de flecha con unasola linea de codigo
        grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
    })



    //LISETENER PARA LAS IMAGENES Y SE MUESTRE SOLO LA QUE DA CLICK
    const overlay = document.getElementById('overlay');
    //acceder a las img y luego a su ruta
    document.querySelectorAll('.grid .item img').forEach((element) => {
        //  const ruta = element;
        //  console.log(ruta);
        element.addEventListener('click', () => {
            const ruta = element.getAttribute('src');
            //acceder a la descripcion subiendo por los padres de del elemento img
            const descripcion = element.parentNode.parentNode.dataset.descripcion;
            console.log(descripcion);
            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
            // console.log(ruta);
          console.log(descripcion);
        });

    });
    //EVENTLISENETR PARA CERRA EL BOTON 
    document.querySelector('#btn-cerrar-popup').addEventListener('click', () =>{
        overlay.classList.remove('activo');
    });
 //EVENTLISENETR PARA CERRA EL BOTON 
     overlay.addEventListener('click', (event) =>{
         event.target.id ==='overlay' ? overlay.classList.remove('activo'): '';
     })

});





/* ESTILOS para cuando pinche cada boton se ponga en active la targeta o box */
// 
/* const html = document.getElementById('html')
      box = document.getElementById('box');

   const busqueda = () => {
       console.log(html.value);
   }
html.addEventListener('click', (e) => {
    box.classList.add('activo');
    console.log(e.target.dataset.html );
}) */



