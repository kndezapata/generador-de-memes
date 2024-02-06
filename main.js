const $ = (selector) => document.querySelector(selector);

/*  Función para cargar la imagen desde la URL y aplicar los filtros */
const contenedorMemeUrl = document.querySelector(".contenedor-meme");
const containMeme = document.querySelector(".contenedor-meme");
const urlInput = document.querySelector("#url");
const filtrosInput = document.querySelector("#seleccion-filtros");
const cargarImagen = () => {
  const imageUrl = urlInput.value;
  if (imageUrl) {
    containMeme.style.backgroundImage = `url('${imageUrl}')`;
    containMeme.style.filter = filtrosInput.value;
  }
};
urlInput.addEventListener("input", cargarImagen);
filtrosInput.addEventListener("change", cargarImagen);
/* ----------------------------es hasta aca------------------------------- */

/* funcion que cambia el menu de texto  y el menu de imagen */
const toggleMenu = (menuClass) => {
  const menus = document.querySelectorAll(".aside-bar-img, .aside-bar-text");
  menus.forEach((menu) => {
    menu.style.display = "none";
  });

  const menu = document.querySelector(`.${menuClass}`);
  menu.style.display = "block";
};

document.getElementById("boton-imagen").addEventListener("click", () => {
  toggleMenu("aside-bar-img");
});

document.getElementById("boton-texto").addEventListener("click", () => {
  toggleMenu("aside-bar-text");
});
/* -----------------------es hasta aca----------------------- */

/* -------------------------filtros--------------------------- */
const contenedorMeme = document.querySelector(".contenedor-meme");
const brillo = document.querySelector("#brightness");
const opacidad = document.querySelector("#opacity");
const contraste = document.querySelector("#contrast");
const desenfoque = document.querySelector("#blur");
const escalaGrises = document.querySelector("#grayscale");
const sepia = document.querySelector("#sepia");
const hue = document.querySelector("#hue-rotate");
const saturado = document.querySelector("#saturate");
const negativo = document.querySelector("#invert");

/* fubncion para los filtros */
const filtersMeme = () => {
  contenedorMeme.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${escalaGrises.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
};

/* aca escucha los eventos */
brillo.addEventListener("input", filtersMeme);
opacidad.addEventListener("input", filtersMeme);
contraste.addEventListener("input", filtersMeme);
desenfoque.addEventListener("input", filtersMeme);
escalaGrises.addEventListener("input", filtersMeme);
sepia.addEventListener("input", filtersMeme);
hue.addEventListener("input", filtersMeme);
saturado.addEventListener("input", filtersMeme);
negativo.addEventListener("input", filtersMeme);

filtersMeme();
/* ---------------------es hasta aca------------------------- */

/* resetear los filtros */

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  // Reiniciar los valores de los filtros de imagen
  document.getElementById("brightness").value = `100`;
  document.getElementById("contrast").value = `100`;
  document.getElementById("blur").value = `0`;
  document.getElementById("grayscale").value = `0`;
  document.getElementById("sepia").value = `0`;
  document.getElementById("hue-rotate").value = `0`;
  document.getElementById("saturate").value = `100`;
  document.getElementById("invert").value = `0`;

  const containerMeme = document.querySelector(`.contenedor-meme`);
  containerMeme.style.mixBlendMode = `normal`;
  const contenedorMeme = document.querySelector(`.contenedor-meme`);
  contenedorMeme.style.filter = "";
  const colorInputMeme = document.getElementById(`color-fondo-meme`);
  colorInputMeme.value = `#ffffff"`;
  contenedorMeme.style.backgroundColor = ``;
});

/* resetear los valores de los filtros de texto */
const resetearFiltrosTexto = () => {
  document.querySelector(".text-top-meme").style.color = "#000000";
  document.querySelector(".text-bottom-meme").style.color = "#000000";

  document.getElementById("text-fondo").value = "#ffffff";
  document.querySelector(".contenedor-texto-meme").style.backgroundColor =
    "#ffffff";

  document.getElementById("tamanioLetra").value = "40";
  document.querySelector(".text-top-meme").style.fontSize = "40px";
  document.querySelector(".text-bottom-meme").style.fontSize = "40px";

  document.getElementById("text-interlineado-input").value = "1";
  document.querySelector(".text-top-meme").style.lineHeight = "1";
  document.querySelector(".text-bottom-meme").style.lineHeight = "1";
};

document
  .getElementById("reset-button-text")
  .addEventListener("click", resetearFiltrosTexto);

/* cambiar filtros del contenedor de memes */

const containerFilters = document.querySelector(`.contenedor-meme`);
const filtrosContainer = document.getElementById(`seleccion-filtros`);

filtrosContainer.addEventListener("input", (e) => {
  containerFilters.style.mixBlendMode = e.target.value;
});

/* cambiar fondo del editor de memes */
const colorInputMeme = document.getElementById("color-fondo-meme");
const containerMeme = document.querySelector(".contenedor-meme");

colorInputMeme.addEventListener("input", (e) => {
  const colorSeleccionado = e.target.value;
  containerMeme.style.backgroundColor = colorSeleccionado;
});

/* ajustes para el texto */
const contenedorTextMeme = document.querySelector(`.contenedor-texto-meme`);
const fondo = document.querySelector("#checkbox-fondo-transparent");
/* estos dos van juntos */
const textoSuperior = document.querySelector(`#textoSuperior`);
const color = document.querySelector("#text-fondo");
const contornoNull = document.querySelector("#boton-contorno-null");
const contornoClaro = document.querySelector("#boton-contorno-claro");
const contornoOscuro = document.querySelector("#boton-contorno-oscuro");
const textEspaciado = document.querySelector("#text-espaciado-input");
const textInterlineado = document.querySelector("#text-interlineado-input");
const textoMemeSuperior = document.querySelector(`.textoSuperior`);
/* ----------------------------------------------------------- */
/* funcion del texto del meme */
const contTextMemeTop = document
  .getElementById(`textoSuperior`)
  .addEventListener("input", function (e) {
    document.querySelector(".text-top-meme").innerText = e.target.value;
  });
const contTextMemeBot = document
  .getElementById(`textoInferior`)
  .addEventListener("input", function (e) {
    document.querySelector(".text-bottom-meme").innerText = e.target.value;
  });

const textTopMeme = document.querySelector(".text-top-meme");
document
  .getElementById("borrarTextoSup")
  .addEventListener("click", function () {
    textTopMeme.innerText = "";
  });
const textBottomMeme = document.querySelector(".text-bottom-meme");
document
  .getElementById("borrarTextoInf")
  .addEventListener("click", function () {
    textBottomMeme.innerText = "";
  });
/* ----------------------------------------------------------- */

/* funcion que saca el background del texto */

const backgroundTextWhite = document.getElementById("contenedor-editor-meme"); // Reemplaza 'tuContenedorTextMeme' con el ID de tu contenedor de texto

const filtersText = () => {
  if (contenedorTextMeme.style.backgroundColor === "transparent") {
    contenedorTextMeme.style.backgroundColor = "white";
  } else {
    contenedorTextMeme.style.backgroundColor = "transparent";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const botonFondo = document.getElementById("remove-background");
  botonFondo.addEventListener("click", () => {
    filtersText();
  });
});

/* eventos del texto */
color.addEventListener("input", filtersText);
/* fondo.addEventListener('input', filtersText); */ /* con este evento le cambiamos el fondo */
textEspaciado.addEventListener("input", filtersText);
textInterlineado.addEventListener("input", filtersText);
/* hasta aca son los ajustes para el texto */

/* llamamos con el DOM las fuentes */
const arial = document.querySelector(`.Arial`);
const americanT = document.querySelector(".American Tipe Writer");
const andaleM = document.querySelector(`.Andale Mono`);
const comicS = document.querySelector(`.Comic Sans Ms`);
const helvetica = document.querySelector(`.Helvetica`);
const impact = document.querySelector(`.Impact`);
const verdana = document.querySelector(`.Verdana`);
const timesN = document.querySelector(`.Times New Roman`);

const fuenteMeme = () => {
  contenedorMeme.style.fontFamily = text - fuentes.value;
};

$("#text-fuentes").addEventListener("input", (e) => {
  $(".text-top-meme").style.fontFamily = e.target.value;
  $(".text-bottom-meme").style.fontFamily = e.target.value;
});
/* ----------------------------------------------- */
const fontSize = document.getElementById(`tamanioLetra`);

$(`#tamanioLetra`).addEventListener(`input`, (e) => {
  const fontSizeText = e.target.value + "px";
  $(".text-top-meme").style.fontSize = fontSizeText;
  $(".text-bottom-meme").style.fontSize = fontSizeText;
});
/* ------------------------------------------------------ */

const modoOscuro = document.querySelector(".menu-controles");
const asideOscuroImg = document.querySelector(".aside-bar-img");
const asideOscuroText = document.querySelector(".aside-bar-text");
const backgroundOscuro = document.querySelector(`.contenedor-editor-meme`);
const botonImgShadow = document.querySelector(`.boton-imagen`);
const botonTextShadow = document.querySelector(`.boton-texto`);
const botonModoOscuro = document.querySelector(`.boton-fondo`);
modoOscuro.addEventListener("click", (e) => {
  if (e.target.classList.contains("boton-fondo")) {
    modoOscuro.style.backgroundColor = "#2c2c2c";
    asideOscuroImg.style.backgroundColor = `#838383`;
    asideOscuroText.style.backgroundColor = `#838383`;
    backgroundOscuro.style.backgroundColor = `#585858`;
    botonImgShadow.style.boxShadow = `0px 0px 4px #ffff`;
    botonTextShadow.style.boxShadow = `0px 0px 4px #ffff`;
    botonModoOscuro.style.boxShadow = `0px 0px 4px #ffff`;
    botonImgShadow.style.hover = `#ffff`;
  }
});

const botonDescarga = document.getElementById("descarga");

botonDescarga.addEventListener("click", () => {
  domtoimage
    .toBlob(document.querySelector(".contenedor-texto-meme"))
    .then((blob) => {
      saveAs(blob, "meme.png");
    });
});

/* funcion para cambiar la posicion del texto */
/* seleccionamos las clases que vamos a modificar, de ahi estable el textAling segun el parametro que tome la funcion */
const cambiarPosicionTexto = (alineacion) => {
  const textTopMeme = document.querySelector(".text-top-meme");
  const textBottomMeme = document.querySelector(".text-bottom-meme");

  textTopMeme.style.textAlign = alineacion;
  textBottomMeme.style.textAlign = alineacion;
};

document.addEventListener("DOMContentLoaded", function () {
  /* DOMContentLoaded para que se cargue completo */ const btnAlinearDerecha =
    document.querySelector(".cambiar-posicion-der");
  const btnAlinearCentro = document.querySelector(".cambiar-posicion-center");
  const btnAlinearIzquierda = document.querySelector(".cambiar-posicion-izq");

  btnAlinearDerecha.addEventListener("click", function () {
    cambiarPosicionTexto(
      "right"
    ); /* aca esa funcion de arriba (linea 187) toma como parametro `right` y alineacion pasa a hacer que el texto se vaya para la derecha */
  });

  btnAlinearCentro.addEventListener("click", function () {
    cambiarPosicionTexto("center");
  });

  btnAlinearIzquierda.addEventListener("click", function () {
    cambiarPosicionTexto("left");
  });
});

/* funcion que le da color al texto, lo llame con el query selector a las clases de texto y despues al input con el id, despues defini una variable (constante) que toma el valor del input y se lo pasa a los textos superior e inferior  */

const textSeleccionadoTop = document.querySelector(`.text-top-meme`);
const textSeleccionadoBottom = document.querySelector(`.text-bottom-meme`);
const colorInput = document.getElementById(`text-color`);

colorInput.addEventListener(`input`, function () {
  const selectedColor =
    colorInput.value; /* lo que hace aca es capturar ese valor cuando el usuario selecciona el color. Value obtiene el valor del input */
  textSeleccionadoTop.style.color = selectedColor;
  textSeleccionadoBottom.style.color = selectedColor;
});

/* ahora hago lo mismo pero esta vez en lugar de seleccionar el texto selecciono el contendor donde esta el texto y pongo backgroundColor en lugar de color */

const fondoTop = document.querySelector(
  `.contenedor-texto-meme`
); /* cambia a ambos fondos */
const fondoInput = document.getElementById(`text-fondo`);

fondoInput.addEventListener(`input`, function () {
  const selectFondo = fondoInput.value;
  fondoTop.style.backgroundColor = selectFondo;
});

/* funcion para el grosor del texto */

// Función para quitar el borde a los textos
const quitarBorde = () => {
  const textTopMeme = document.querySelector(".text-top-meme");
  const textBottomMeme = document.querySelector(".text-bottom-meme");
  textTopMeme.style.textShadow = "none";
  textBottomMeme.style.textShadow = "none";
};

const agregarBordeClaro = () => {
  const textTopMeme = document.querySelector(".text-top-meme");
  const textBottomMeme = document.querySelector(".text-bottom-meme");
  textTopMeme.style.color = `white`;
  textBottomMeme.style.color = `white`;
  textTopMeme.style.textShadow =
    "0 0 4px black, 0 0 4px black, 0 0 4px black, 0 0 4px black";
  textBottomMeme.style.textShadow =
    "0 0 4px black, 0 0 4px black, 0 0 4px black, 0 0 4px black";
};
/* hacer algo para que se reinicie el valor asi toma bien esto */
const agregarBordeOscuro = () => {
  const textTopMeme = document.querySelector(".text-top-meme");
  const textBottomMeme = document.querySelector(".text-bottom-meme");
  textTopMeme.style.textShadow =
    "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black";
  textBottomMeme.style.textShadow =
    "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black";
};

const botonContornoNull = document.getElementById("boton-contorno-null");
botonContornoNull.addEventListener("click", quitarBorde);

const botonContornoClaro = document.getElementById("boton-contorno-claro");
botonContornoClaro.addEventListener("click", agregarBordeClaro);

const botonContornoOscuro = document.getElementById("boton-contorno-oscuro");
botonContornoOscuro.addEventListener("click", agregarBordeOscuro);

/* funcion para espaciado */

const espaciadoTextTop = document.querySelector(".text-top-meme");
const espaciadoTextBottom = document.querySelector(".text-bottom-meme");
const espaciadoText = document.getElementById(`text-espaciado-input`);

espaciadoText.addEventListener("input", (e) => {
  const paddingValue = e.target.value + "px";
  espaciadoTextTop.style.padding = paddingValue;
});

espaciadoText.addEventListener("input", (e) => {
  const paddingValue = e.target.value + "px";
  espaciadoTextBottom.style.padding = paddingValue;
});

/* interlineado */

$("#text-interlineado-input").addEventListener("input", (e) => {
  $(".text-top-meme").style.lineHeight = e.target.value;
  $(".text-bottom-meme").style.lineHeight = e.target.value;
});

/* cerrar aside */
document.addEventListener("DOMContentLoaded", function () {
  const cerrarPanelImg = document.getElementById("close-img");
  const cerrarPanelText = document.getElementById("close-text");
  const asideImg = document.getElementById("menu-img");
  const asideText = document.getElementById("menu-text");

  const ocultarPanelImagen = () => {
    asideImg.classList.toggle("oculto");
  };
  ``;

  const ocultarPanelTexto = () => {
    asideText.classList.toggle("oculto");
  };

  cerrarPanelImg.addEventListener("click", ocultarPanelImagen);
  cerrarPanelText.addEventListener("click", ocultarPanelTexto);
});
