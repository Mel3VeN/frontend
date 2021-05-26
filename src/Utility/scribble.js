/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
// Alle Workouts eines Programms auslesen

// Alle Workouts in Array speichern

// forEachFunction bauen

// fE array erstellen

// Für jeden nicht bekannten Eintrag, Eintrag in fe Array anlegen

// Für jeden bekannten Eintrag, jweiligem Eintrag ++ geben

// Kategorien zählen - hässlich
const data = [
  'strength',
  'stamina',
  'cardio',
  'cardio',
  'cardio',
  'coordination',
  'strength',
  'cardio',
];

// kategorien zählen -- geil

const count = {};

function createObject() {
  data.forEach((element) => (count[element] = null));
  console.log(count);
  data.forEach((element) => (count[element] += 1));
  console.log(count);

  return count;
}
createObject();

function countStuff(arr) {
  const splits = { strength: 0, stamina: 0, cardio: 0, coordination: 0 };

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 'strength') {
      splits.strength++;
    } else if (arr[i] == 'stamina') {
      splits.stamina++;
    } else if (arr[i] == 'cardio') {
      splits.cardio++;
    } else {
      splits.coordination++;
    }
  }
  console.log(splits);
}

countStuff(data);

// ForEach aufgeschlüsselt

function zumChecken(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == count[arr[i]]) {
      i++;
    } else {
      count[arr[i]] = 0;
    }
  }
  console.log(count);

  for (i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  console.log(count);
}
zumChecken(data);

function CreateArray() {
  const dataD = useQuery(GET_PROGRAM_CATEGORIES_BY_SLUG);
  console.log(Object.values(dataD));
}
CreateArray();
