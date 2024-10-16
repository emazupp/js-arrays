const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
let j = 0;
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers[j] = teachers[i];
  j++;
}

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
let k = 0;
for (let i = 0; i < teachers.length; i++) {
  currentTeacher = teachers[i];
  if (currentTeacher.length >= 5) {
    longNames[k] = currentTeacher;
    k++;
  }
}

// 3. Rimuovi 'Ed' dall'array teachers

for (let i = 0; i < teachers.length; i++) {
  currentTeacher = teachers[i];
  if (currentTeacher === "Ed") {
    teachers.splice(i, 1);
  }
}
