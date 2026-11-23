let elevi = [];
let dateSalvate = localStorage.getItem("elevi");
if (dateSalvate !== null) {
    elevi = JSON.parse(dateSalvate);
}
let formular = document.getElementById("formularElev");
let listaElevi = document.getElementById("listaElevi");
let mesaj = document.getElementById("mesaj");
function afisareElevi() {
    listaElevi.innerHTML = "";
    if (elevi.length === 0) {
        listaElevi.innerHTML =
            '<p class="text-center text-muted">Nu există elevi înregistrați.</p>';
        return;
    }
    for (let i = 0; i < elevi.length; i++) {
        let coloana = document.createElement("div");
        coloana.className = "col-md-6 col-lg-4";
        let card = document.createElement("div");
        card.className = "card shadow-sm h-100";
        let corp = document.createElement("div");
        corp.className = "card-body";
        let titlu = document.createElement("h5");
        titlu.className = "card-title";
        titlu.textContent = elevi[i].nume;
        let varsta = document.createElement("p");
        varsta.className = "card-text";
        varsta.textContent = "Vârsta: " + elevi[i].varsta + " ani";
        let grupa = document.createElement("p");
        grupa.className = "card-text";
        grupa.textContent = "Grupa: " + elevi[i].grupa;
        let email = document.createElement("p");
        email.className = "card-text";
        email.textContent = "E-mail: " + elevi[i].email;
        let buton = document.createElement("button");
        buton.className = "btn btn-danger btn-sm";
        buton.textContent = "Șterge";
        buton.addEventListener("click", function () {
            stergeElev(elevi[i].id);
        });
        corp.appendChild(titlu);
        corp.appendChild(varsta);
        corp.appendChild(grupa);
        corp.appendChild(email);
        corp.appendChild(buton);
        card.appendChild(corp);
        coloana.appendChild(card);
        listaElevi.appendChild(coloana);
    }
}
formular.addEventListener("submit", function (event) {
    event.preventDefault();
    let nume = document.getElementById("nume").value.trim();
    let varsta = Number(document.getElementById("varsta").value);
    let grupa = document.getElementById("grupa").value.trim();
    let email = document.getElementById("email").value.trim();
    if (nume === "" || grupa === "" || email === "" ||
        document.getElementById("varsta").value === "") {
        mesaj.innerHTML =
            '<div class="alert alert-danger">Completați toate câmpurile!</div>';
        return;
    }
    if (varsta <= 0 || !Number.isInteger(varsta)) {
        mesaj.innerHTML =
            '<div class="alert alert-danger">Vârsta trebuie să fie un număr pozitiv întreg!</div>';
        return;
    }
    let formatEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatEmail.test(email)) {
        mesaj.innerHTML =
            '<div class="alert alert-danger">Introduceți un e-mail valid!</div>';
        return;
    }
    let elev = {
        id: Date.now(),
        nume: nume,
        varsta: varsta,
        grupa: grupa,
        email: email
    };
    elevi.push(elev);
    localStorage.setItem("elevi", JSON.stringify(elevi));
    afisareElevi();
    mesaj.innerHTML =
        '<div class="alert alert-success">Elevul a fost adăugat cu succes!</div>';
    formular.reset();
});
function stergeElev(id) {
    elevi = elevi.filter(function (elev) {
        return elev.id !== id;
    });
    localStorage.setItem("elevi", JSON.stringify(elevi));
    afisareElevi();
    mesaj.innerHTML =
        '<div class="alert alert-success">Elevul a fost șters!</div>';
}
afisareElevi();
