//variables
var texto;
//events
$(document).ready(function () {


    if (document.URL.includes("contactus.html")) {
        quill();
    } else if (document.URL.includes("trabajos.html")) {
        $(".swalert").click(function () {
            swal({
                icon: this.getAttribute('src'),
                showCloseButton: true,
                button: false,
            })
        });
    }

    texto = messages();
    typedjs(texto);



});

//functions

function quill() {
    var options = {
        placeholder: "Escribe un mensaje...",
        readOnly: false,
        theme: 'snow'
    };

    var editor = new Quill('.editor', options);
}

function typedjs(text) {
    var typed = new Typed('.typedheader', {
        strings: text,
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 5000,
        startDelay: 1000,
        loop: true,
        cursorChar: ''
    });

}

function messages(texto) {
    if (document.URL.includes("contactus.html")) {
        texto = ["Utiliza la información de esta sección para contactar con nosotros.",
            "También puedes visitar nuestras redes sociales.", "Y si lo prefieres puedes dejarnos un mensaje en la sección inferior."];
    } else if (document.URL.includes("aboutus.html")) {
        texto = ["Conócenos un poco mejor.", "Aquí puedes revisar nuestras competencias y objetivos como compañía.",
            ""];
    } else if (document.URL.includes("trabajos.html")) {
        texto = ["Explora nuestro historial de proyectos", "No dudes en contratar nuestros servicios, seguiremos garantizando resultados"];
    } else if (document.URL.includes("servicios.html")) {
        texto = ["No sólo nos dedicamos al pladur y a la pintura, echa un vistazo a los muchos otros servicios que ofrecemos",
            "Si tienes alguna duda con algún servicio en concreto, no dudes en contactarnos"];
    }

    return texto;
}
