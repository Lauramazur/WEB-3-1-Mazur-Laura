
let studenti = [
    {
        id: 1,
        nume: "Ana Popescu",
        grupa: "SI-231",
        varsta: 19,
        specialitate: "Securitate informațională",
        avatar: "👩‍🎓"
    },
    {
        id: 2,
        nume: "Mihai Rusu",
        grupa: "SI-231",
        varsta: 20,
        specialitate: "Securitate informațională",
        avatar: "👨‍🎓"
    },
    {
        id: 3,
        nume: "Irina Ciobanu",
        grupa: "PR-232",
        varsta: 18,
        specialitate: "Programare",
        avatar: "🦉"
    },
    {
        id: 4,
        nume: "Andrei Munteanu",
        grupa: "PR-232",
        varsta: 21,
        specialitate: "Programare",
        avatar: "🧑‍💻"
    },
    {
        id: 5,
        nume: "Elena Marin",
        grupa: "WEB-241",
        varsta: 19,
        specialitate: "Administrarea aplicațiilor web",
        avatar: "👩‍🎓"
    }
];


const studentList = document.getElementById("studentList");
const studentCount = document.getElementById("studentCount");
const studentForm = document.getElementById("studentForm");
const formMessage = document.getElementById("formMessage");


function afiseazaStudenti() {
    studentList.innerHTML = "";
    studentCount.textContent = studenti.length;

    if (studenti.length === 0) {
        studentList.innerHTML =
            '<p class="empty-message">Nu există studenți în listă. Adaugă un student folosind formularul.</p>';
        return;
    }

    studenti.forEach(function(student) {
        const card = document.createElement("article");
        card.className = "student-card";

        card.innerHTML = `
            <div class="card-header">
                <div class="avatar">${student.avatar}</div>
                <div>
                    <h3 class="student-name">${student.nume}</h3>
                    <p class="group">Grupa: ${student.grupa}</p>
                </div>
            </div>

            <div class="details">
                <span class="detail-label">Vârsta</span>
                <strong class="detail-value">${student.varsta} ani</strong>

                <span class="detail-label">Specialitatea</span>
                <span class="detail-value">${student.specialitate}</span>

                <span class="detail-label">Statut</span>
                <span class="detail-value">
                    <span class="status">Înmatriculat</span>
                </span>
            </div>

            <button class="delete-button" type="button"
                data-id="${student.id}">
                Șterge
            </button>
        `;

        studentList.appendChild(card);
    });
}


function genereazaId() {
    let idMaxim = 0;

    studenti.forEach(function(student) {
        if (student.id > idMaxim) {
            idMaxim = student.id;
        }
    });

    return idMaxim + 1;
}

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nume = document.getElementById("name").value.trim();
    const grupa = document.getElementById("group").value.trim();
    const varsta = Number(document.getElementById("age").value);
    const specialitate = document.getElementById("specialty").value.trim();
    const avatar = document.getElementById("avatar").value;

    if (nume === "" || grupa === "" || specialitate === "") {
        formMessage.textContent = "Completează toate câmpurile!";
        return;
    }

    if (!Number.isInteger(varsta) || varsta < 14 || varsta > 100) {
        formMessage.textContent =
            "Vârsta trebuie să fie un număr întreg între 14 și 100.";
        return;
    }

    const studentNou = {
        id: genereazaId(),
        nume: nume,
        grupa: grupa,
        varsta: varsta,
        specialitate: specialitate,
        avatar: avatar
    };

    studenti.push(studentNou);

    afiseazaStudenti();

    studentForm.reset();

    formMessage.textContent = "Studentul a fost adăugat cu succes!";
});


studentList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {

        const idStudent = Number(event.target.dataset.id);

        studenti = studenti.filter(function(student) {
            return student.id !== idStudent;
        });

        afiseazaStudenti();
    }
});

const justifyControl = document.getElementById("justifyControl");
const alignControl = document.getElementById("alignControl");
const wrapControl = document.getElementById("wrapControl");
const gapControl = document.getElementById("gapControl");
const gapValue = document.getElementById("gapValue");


justifyControl.addEventListener("change", function() {
    studentList.style.justifyContent = justifyControl.value;
});


alignControl.addEventListener("change", function() {
    studentList.style.alignItems = alignControl.value;
});


wrapControl.addEventListener("change", function() {
    studentList.style.flexWrap = wrapControl.value;
});

gapControl.addEventListener("input", function() {
    studentList.style.gap = gapControl.value + "px";
    gapValue.textContent = gapControl.value;
});


afiseazaStudenti();