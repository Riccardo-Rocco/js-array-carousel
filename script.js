const immagini = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const carosello = document.querySelector(".carosello");
const anteprimeContainer = document.querySelector(".anteprime");
const frecce = document.querySelectorAll(".freccia");

let immagineAttuale = 0;


function cambiaImmagine(index) {
    document.querySelector(".carosello-image.active").classList.remove("active");
    document.querySelectorAll(".carosello-image")[index].classList.add("active");
    immagineAttuale = index;
}


frecce.forEach(freccia => {
    freccia.addEventListener("click", () => {
        if (freccia.classList.contains("prev")) {
            immagineAttuale = (immagineAttuale - 1 + immagini.length) % immagini.length;
        } else if (freccia.classList.contains("next")) {
            immagineAttuale = (immagineAttuale + 1) % immagini.length;
        }
        cambiaImmagine(immagineAttuale);
    });
});


for (let i = 0; i < immagini.length; i++) {
    const immagine = document.createElement("img");
    immagine.src = immagini[i];
    immagine.classList.add("carosello-image");
    if (i === 0) {
        immagine.classList.add("active");
    }
    carosello.appendChild(immagine);

    const anteprima = document.createElement("img");
    anteprima.src = immagini[i];
    anteprima.classList.add("anteprima-image");
    anteprima.dataset.index = i;
    anteprima.addEventListener("click", () => {
        const index = anteprima.dataset.index;
        cambiaImmagine(index);
    });
    anteprimeContainer.appendChild(anteprima);
}
