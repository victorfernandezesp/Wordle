document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("keydown", function (e) {
        e.preventDefault();
    });

    // Palabras posibles
    const palabras = [
        "sabor", "luzca", "bravo", "moral", "cruce", "grano", "plaza", "fluir", "traje", "creer",
        "jugar", "miedo", "noble", "ocaso", "pudor", "quema", "roble", "sutil", "trote", "unido",
        "volar", "yacer", "zorro", "abrir", "broma", "chico", "dulce", "etapa", "fuego", "golpe",
        "hacer", "ideal", "joven", "kilos", "letra", "mundo", "nacer", "oasis", "poder", "queso",
        "risa", "saber", "tango", "unir", "vivir", "xenon", "yogur", "zarza", "actos", "brisa",
        "campo", "datos", "exito", "flora", "grito", "horno", "icono", "jamon", "karma", "llama",
        "mesa", "nubes", "opera", "piano", "quien", "radio", "salsa", "tarta", "union", "video",
        "winds", "yemas", "zinc", "amigo", "bosco", "celda", "drama", "extra", "fresa", "gusto",
        "hotel", "indio", "jaula", "koala", "limon", "mango", "nuevo", "ostra", "pajaro", "quimio",
        "rosas", "soplo", "tulip", "uvula", "virus", "whisky", "yogurt", "zocalo", "acero", "bongo"
      ];
    let palabra = (palabras[Math.floor(Math.random() * palabras.length)]).toUpperCase();
    console.log("La palabra es: " + palabra);

    let mensaje = document.createElement("span");
    let laPalabra = document.createElement("h1");
    let delDia = document.createElement("h2");
    laPalabra.innerHTML = "LA PALABRA"
    delDia.innerHTML = "DEL DIA"
    document.body.appendChild(laPalabra);
    document.body.appendChild(delDia);

    let cuadros = document.createElement("main");
    cuadros.classList.add("cuadros");

    for (let i = 0; i < 6; i++) {
        let fila = document.createElement("div");
        for (let j = 0; j < 5; j++) {
            let letraintroducida = document.createElement("input");
            letraintroducida.type = "text";
            letraintroducida.maxLength = "1";
            letraintroducida.classList.add("letra");
            fila.appendChild(letraintroducida);
        }
        cuadros.appendChild(fila);
        document.body.appendChild(cuadros);
    }


    const teclado = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ", "↲", "Z", "X", "C", "V", "B", "N", "M", "⌫"];
    let cajaTeclado = document.createElement("div");
    cajaTeclado.classList.add("cajaTeclado");

    for (let i = 0; i < teclado.length; i++) {
        let tecla = document.createElement("button");
        tecla.classList.add("tecla");
        tecla.innerHTML = teclado[i];
        cajaTeclado.appendChild(tecla);
    }
    document.body.appendChild(cajaTeclado);

    let palabraIntroducida = "";
    let palabraRandom = palabra.split("");
    let row = 0;
    let acumulador = 0;
    let intentos = 0;

    document.addEventListener("click", function (e) {
        let inputs = document.querySelectorAll("input");
        if (e.target.tagName === "BUTTON") {
            if (e.target.innerHTML === "⌫" || e.target.innerHTML === "↲") {

                if (e.target.innerHTML === "⌫") {
                    palabraIntroducida = palabraIntroducida.slice(0, -1);
                    let div = document.querySelectorAll("div");
                    div[row].children[palabraIntroducida.length].value = "";


                }
                else if (e.target.innerHTML === "↲") {
                    intentos++;
                    palabraIntroducida.split("").forEach((letra, index) => {
                        if (palabraRandom.includes(letra)) {
                            if (letra == palabraRandom[index]) {
                                document.querySelectorAll(".letra")[index + acumulador].style.backgroundColor = "green";
                                document.querySelectorAll(".letra")[index + acumulador].style.color = "white";
                                let teclas = document.querySelectorAll("button");
                                teclas.forEach(tecla => {
                                    if (tecla.innerHTML === letra) {
                                        tecla.style.backgroundColor = "green";
                                        document.querySelectorAll(".letra")[index + acumulador].style.color = "white";
                                    }
                                });
                            }

                            else {
                                document.querySelectorAll(".letra")[index + acumulador].style.backgroundColor = "yellow";
                                document.querySelectorAll(".letra")[index + acumulador].style.color = "white";
                                let teclas = document.querySelectorAll("button");
                                teclas.forEach(tecla => {
                                    if (tecla.innerHTML === letra) {
                                        tecla.style.backgroundColor = "yellow";
                                        document.querySelectorAll(".letra")[index + acumulador].style.color = "white";
                                    }
                                });
                            }
                        }

                        else {
                            document.querySelectorAll(".letra")[index + acumulador].style.backgroundColor = "red";
                            document.querySelectorAll(".letra")[index + acumulador].style.color = "white";
                            let teclas = document.querySelectorAll("button");
                            teclas.forEach(tecla => {
                                if (tecla.innerHTML === letra) {
                                    tecla.style.backgroundColor = "red";
                                    document.querySelectorAll(".letra")[index + acumulador].style.color = "white";
                                }
                            });
                        }
                    });
                    if (palabraIntroducida == palabra || intentos == 6) {
                        let teclas = document.querySelectorAll("button");
                        teclas.forEach(tecla => {
                            tecla.disabled = true;
                        });
                        if (palabraIntroducida == palabra) {
                            mensaje.innerHTML = "¡¡¡HAS GANADO!!!";
                            mensaje.classList.add("mensaje");
                            document.body.appendChild(mensaje);
                        }
                        else {
                            mensaje.innerHTML = "¡¡¡HAS PERDIDO!!!";
                            mensaje.classList.add("mensaje");
                            document.body.appendChild(mensaje);
                        }
                    }
                    palabraIntroducida = "";
                    row++;
                    acumulador += 5;
                }

            }
            else if (palabraIntroducida.length < 5) {
                palabraIntroducida += e.target.innerHTML;
                let div = document.querySelectorAll("div");
                div[row].children[palabraIntroducida.length - 1].value = e.target.innerHTML;
            }
        }


    });

});
