let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];

console.log("Exercitiul 1");
console.log("Lista fructelor:", fructe);
console.log("Ultimul fruct:", fructe[fructe.length - 1]);
console.log("Primul fruct:", fructe[0]);
console.log("Numarul de fructe:", fructe.length);


let orase = ["Chișinău", "Bălți", "Cahul"];

orase.push("Orhei");
orase.unshift("Soroca");

console.log("Exercitiul 2");
console.log("Lista finala:", orase);

orase.pop();
orase.shift();

console.log("Dupa eliminare:", orase);


let produse = ["Pâine", "Lapte", "Ouă"];

function afiseazaProduse() {
    let lista = document.getElementById("listaProduse");
    lista.innerHTML = "";

    if (produse.length === 0) {
        lista.textContent = "Lista este goală!";
        return;
    }

    produse.forEach(function(produs) {
        let element = document.createElement("li");
        element.textContent = produs;
        lista.appendChild(element);
    });
}

function adaugaSfarsit() {
    let produs = document.getElementById("produs").value.trim();

    if (produs !== "") {
        produse.push(produs);
        document.getElementById("produs").value = "";
        afiseazaProduse();
    }
}

function adaugaInceput() {
    let produs = document.getElementById("produs").value.trim();

    if (produs !== "") {
        produse.unshift(produs);
        document.getElementById("produs").value = "";
        afiseazaProduse();
    }
}

function stergePrimul() {
    if (produse.length > 0) {
        produse.shift();
    }

    afiseazaProduse();
}

function stergeUltimul() {
    if (produse.length > 0) {
        produse.pop();
    }

    afiseazaProduse();
}


let elevi = [
    { nume: "Popescu Ana", varsta: 17, nota: 9 },
    { nume: "Mazur Laura", varsta: 18, nota: 8 },
    { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

function afiseazaElevi() {
    let catalog = document.getElementById("catalog");
    catalog.innerHTML = "";

    document.getElementById("numarElevi").textContent =
        "Număr de elevi: " + elevi.length;

    elevi.forEach(function(elev, index) {
        let element = document.createElement("p");

        element.textContent =
            (index + 1) + ". " + elev.nume +
            "  Vârsta: " + elev.varsta +
            "  Nota: " + elev.nota;

        catalog.appendChild(element);
    });

    if (elevi.length === 0) {
        catalog.textContent = "Catalogul este gol!";
    }
}

function adaugaElev() {
    let nume = document.getElementById("nume").value.trim();
    let varstaText = document.getElementById("varsta").value;
    let notaText = document.getElementById("nota").value;

    let varsta = Number(varstaText);
    let nota = Number(notaText);

    let mesaj = document.getElementById("mesajAdaugare");

    if (nume === "" || varstaText === "" || notaText === "" ||
        varsta <= 0 || nota < 1 || nota > 10) {
        mesaj.textContent = "Introdu date corecte!";
        return;
    }

    let elevNou = {
        nume: nume,
        varsta: varsta,
        nota: nota
    };

    elevi.push(elevNou);

    mesaj.textContent = "Elevul a fost adăugat cu succes!";

    document.getElementById("nume").value = "";
    document.getElementById("varsta").value = "";
    document.getElementById("nota").value = "";

    afiseazaElevi();
}

function stergeElev() {
    let nume = document.getElementById("numeStergere").value.trim();
    let mesaj = document.getElementById("mesajStergere");

    let elevGasit = elevi.find(function(elev) {
        return elev.nume.toLowerCase() === nume.toLowerCase();
    });

    if (nume === "") {
        mesaj.textContent = "Introdu numele elevului!";
        return;
    }

    if (elevGasit) {
        let pozitie = elevi.indexOf(elevGasit);

        elevi.splice(pozitie, 1);
        mesaj.textContent = "Elevul a fost șters cu succes!";
    } else {
        mesaj.textContent = "Elevul nu a fost găsit!";
    }

    document.getElementById("numeStergere").value = "";

    afiseazaElevi();
}

function cautaElev() {
    let nume = document.getElementById("numeCautare").value.trim();
    let rezultat = document.getElementById("rezultatCautare");

    if (nume === "") {
        rezultat.textContent = "Introdu numele elevului!";
        return;
    }

    let elevGasit = elevi.find(function(elev) {
        return elev.nume.toLowerCase() === nume.toLowerCase();
    });

    if (elevGasit) {
        rezultat.textContent =
            "Elev găsit! Nume: " + elevGasit.nume +
            ", Vârsta: " + elevGasit.varsta +
            ", Nota: " + elevGasit.nota;
    } else {
        rezultat.textContent = "Elevul nu a fost găsit!";
    }
}


afiseazaProduse();
afiseazaElevi();
