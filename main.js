const $= (selector)=>document.querySelector(selector)


// Función para cargar la imagen desde la URL y aplicar filtros
const contenedorMemeUrl = document.querySelector('.contenedor-meme');
const containMeme = document.querySelector('.contenedor-meme');
const urlInput = document.querySelector('#url');
const filtrosInput = document.querySelector('#seleccion-filtros');

const cargarImagen = () => {
    const imageUrl = urlInput.value;
    if (imageUrl) {
        containMeme.style.backgroundImage = `url('${imageUrl}')`;
        containMeme.style.filter = filtrosInput.value;
    }
};
urlInput.addEventListener('input', cargarImagen);
filtrosInput.addEventListener('change', cargarImagen);
/* ----------------------------es hasta aca------------------------------- */

/* funcion que cambia el menu de texto  y el menu de imagen */
const toggleMenu = (menuClass) => {
    const menus = document.querySelectorAll('.aside-bar-img, .aside-bar-text');
    menus.forEach(menu => {
        menu.style.display = 'none';
    });

    const menu = document.querySelector(`.${menuClass}`);
    menu.style.display = 'block';
};

document.getElementById('boton-imagen').addEventListener('click', () => {
    toggleMenu('aside-bar-img');
});

document.getElementById('boton-texto').addEventListener('click', () => {
    toggleMenu('aside-bar-text');
});
/* -----------------------es hasta aca----------------------- */

/* -------------------------filtros--------------------------- */
const contenedorMeme = document.querySelector('.contenedor-meme');
const brillo = document.querySelector('#brightness');
const opacidad = document.querySelector('#opacity');
const contraste = document.querySelector('#contrast');
const desenfoque = document.querySelector('#blur');
const escalaGrises = document.querySelector('#grayscale');
const sepia = document.querySelector('#sepia');
const hue = document.querySelector('#hue-rotate');
const saturado = document.querySelector('#saturate');
const negativo = document.querySelector('#invert');

/* fubncion para los filtros */
const filtersMeme = () => {
    contenedorMeme.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${escalaGrises.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
};

/* aca escucha los eventos */
brillo.addEventListener('input', filtersMeme);
opacidad.addEventListener('input', filtersMeme);
contraste.addEventListener('input', filtersMeme);
desenfoque.addEventListener('input', filtersMeme);
escalaGrises.addEventListener('input', filtersMeme);
sepia.addEventListener('input', filtersMeme);
hue.addEventListener('input', filtersMeme);
saturado.addEventListener('input', filtersMeme);
negativo.addEventListener('input', filtersMeme);

filtersMeme();
/* ---------------------es hasta aca------------------------- */

/* ajustes para el texto */
const contenedorTextMeme = document.querySelector(`.contenedor-texto-meme`) 
const fondo = document.querySelector('#checkbox-fondo-transparent'); 
/* estos dos van juntos */
const textoSuperior = document.querySelector(`#textoSuperior`)
const color = document.querySelector('#text-fondo');
const contornoNull = document.querySelector('#boton-contorno-null');
const contornoClaro = document.querySelector('#boton-contorno-claro');
const contornoOscuro = document.querySelector('#boton-contorno-oscuro');
const textEspaciado = document.querySelector('#text-espaciado-input');
const textInterlineado = document.querySelector('#text-interlineado-input');
const textoMemeSuperior = document.querySelector(`.textoSuperior`)
/* ----------------------------------------------------------- */
/* funcion del texto del meme */
const contTextMemeTop = document.getElementById(`textoSuperior`).addEventListener('input', function (e) {
    document.querySelector('.text-top-meme').innerText = e.target.value;
});
const contTextMemeBot = document.getElementById(`textoInferior`).addEventListener('input', function (e) {
    document.querySelector('.text-bottom-meme').innerText = e.target.value;
});
/* no doy mas 01.09hs---- */
const textTopMeme = document.querySelector('.text-top-meme');
document.getElementById('borrarTextoSup').addEventListener('click', function () {
    textTopMeme.innerText = '';
    
});
const textBottomMeme = document.querySelector('.text-bottom-meme');
document.getElementById('borrarTextoInf').addEventListener('click', function () {
    textBottomMeme.innerText = '';
    
});
/* ----------------------------------------------------------- */

/* funcion fondo div que contiene el texto-transparente */
const filtersText = () => {
    if (fondo.checked) { /* valida, esto es de input */
        contenedorTextMeme.style.backgroundColor = 'transparent';
    } else {
        contenedorTextMeme.style.backgroundColor = 'white';
    }
};

/* eventos del texto */
color.addEventListener('input', filtersText);
fondo.addEventListener('input', filtersText);/* con este evento le cambiamos el fondo */
textEspaciado.addEventListener('input', filtersText);
textInterlineado.addEventListener('input', filtersText);
/* hasta aca son los ajustes para el texto */

/* llamos con el DOM las fuentes */
const arial= document.querySelector(`.Arial`)
const americanT= document.querySelector('.American Tipe Writer'); 
const andaleM= document.querySelector(`.Andale Mono`);
const comicS= document.querySelector(`.Comic Sans Ms`)
const helvetica= document.querySelector(`.Helvetica`)
const impact= document.querySelector(`.Impact`)
const verdana= document.querySelector(`.Verdana`)
const timesN= document.querySelector(`.Times New Roman`)

const fuenteMeme = () => {
    contenedorMeme.style.fontFamily= (text-fuentes.value)
    /* contenedorMeme.style.fontFamily = `American Tipe Writer(${text-fuentes.value})`
    contenedorMeme.style.fontFamily = `Andale Mono(${text-fuentes.value})`
    contenedorMeme.style.fontFamily =   `Comic Sans Ms(${text-fuentes.value})`
    contenedorMeme.style.fontFamily =  `Helvetica(${text-fuentes.value})`
    contenedorMeme.style.fontFamily = `Impact(${text-fuentes.value}) `
    contenedorMeme.style.fontFamily =  `Verdana(${text-fuentes.value})`
    contenedorMeme.style.fontFamily =  `Impact(${text-fuentes.value})`
    contenedorMeme.style.fontFamily = `Times New Roman(${text-fuentes.value}) ` */

};


/* americanT.addEventListener(`input`, fuenteMeme)
andaleM.addEventListener(`input`, fuenteMeme)
comicS.addEventListener(`input`, fuenteMeme)
helvetica.addEventListener(`input`, fuenteMeme)
impact.addEventListener(`input`, fuenteMeme)
verdana.addEventListener(`input`, fuenteMeme)
timesN.addEventListener(`input`, fuenteMeme) */

$("#text-fuentes").addEventListener("input", (e) => {
    $(".text-top-meme").style.fontFamily= e.target.value
    $(".text-bottom-meme").style.fontFamily= e.target.value
})