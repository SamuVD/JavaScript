// Arreglo de mascotas
let petsArray = [
  {
    name: "zeus",
    specie: "canino",
    breed: "Rottweiler",
    weight: 36,
    age: searchPetsDateOfBirth("12/29/2020"),
    status: "estable",
    ownersName: "samuel villarreal",
    typeOwnersId: "cc",
    ownersIdNumber: "1038867696",
    ownersCellPhoneNumber: "3135664514",
    ownersMail: "samvillarreal@gmail.com",
  },
  {
    name: "roger",
    specie: "canino",
    breed: "san bernardo",
    weight: 30,
    age: searchPetsDateOfBirth("01/15/2022"),
    status: "estable",
    ownersName: "sofia uribe",
    typeOwnersId: "cc",
    ownersIdNumber: "5559936741",
    ownersCellPhoneNumber: "3157559669",
    ownersMail: "uribesofi@gmail.com",
  },
  {
    name: "tokio",
    specie: "canino",
    breed: "french bulldog",
    weight: 22,
    age: searchPetsDateOfBirth("07/20/2023"),
    status: "estable",
    ownersName: "diego cataño",
    typeOwnersId: "cc",
    ownersIdNumber: "2000364590",
    ownersCellPhoneNumber: "3219862545",
    ownersMail: "catañito@gmail.com",
  },
  {
    name: "pumba",
    specie: "canino",
    breed: "bulldog",
    weight: 20,
    age: searchPetsDateOfBirth("08/17/2019"),
    status: "critico",
    ownersName: "jose hurtado",
    typeOwnersId: "cc",
    ownersIdNumber: "1533648020",
    ownersCellPhoneNumber: "3007893663",
    ownersMail: "hurtado@gmail.com",
  },
  {
    name: "lupe",
    specie: "canino",
    breed: "cockapoo",
    weight: 13,
    age: searchPetsDateOfBirth("09/20/2022"),
    status: "estable",
    ownersName: "jose hurtado",
    typeOwnersId: "cc",
    ownersIdNumber: "1533648020",
    ownersCellPhoneNumber: "3007893663",
    ownersMail: "hurtado@gmail.com",
  },
  {
    name: "ricardo",
    specie: "canino",
    breed: "labradoodle",
    weight: 30,
    age: searchPetsDateOfBirth("05/30/2021"),
    status: "estable",
    ownersName: "samuel villarreal",
    typeOwnersId: "cc",
    ownersIdNumber: "1038867696",
    ownersCellPhoneNumber: "3135664514",
    ownersMail: "samvillarreal@gmail.com",
  },
  {
    name: "bills",
    specie: "felino",
    breed: "gato sphynx",
    weight: 11,
    age: searchPetsDateOfBirth("01/01/2024"),
    status: "estable",
    ownersName: "dayhana restrepo",
    typeOwnersId: "cc",
    ownersIdNumber: "2649853027",
    ownersCellPhoneNumber: "3156644554",
    ownersMail: "dayharestrepo@gmail.com",
  },
  {
    name: "victorino",
    specie: "canino",
    breed: "teckel",
    weight: 19,
    age: searchPetsDateOfBirth("11/09/2022"),
    status: "critico",
    ownersName: "mario alfonso",
    typeOwnersId: "cc",
    ownersIdNumber: "6995461032",
    ownersCellPhoneNumber: "3018557478",
    ownersMail: "mario@gmail.com",
  },
  {
    name: "albeiro",
    specie: "felino",
    breed: "gato persa",
    weight: 13,
    age: searchPetsDateOfBirth("11/09/2023"),
    status: "estable",
    ownersName: "samuel villarreal",
    typeOwnersId: "cc",
    ownersIdNumber: "1038867696",
    ownersCellPhoneNumber: "3135664514",
    ownersMail: "samvillarreal@gmail.com",
  },
  {
    name: "perla",
    specie: "felino",
    breed: "siamés",
    weight: 10,
    age: searchPetsDateOfBirth("10/25/2024"),
    status: "estable",
    ownersName: "valentina arboleda",
    typeOwnersId: "cc",
    ownersIdNumber: "5957648123",
    ownersCellPhoneNumber: "3024458998",
    ownersMail: "arboledavalen@yahoo.com",
  },
];

// Variables para actualizar datos
let registeredPets = [];
let arrayOfOwners = [];
let petsOfTheSameOwner = [];
let addNewPet = {};

// Menú para interactuar con el usuario
function menu() {
  let flag = true;

  while (flag) {
    let op = parseInt(
      prompt(`Menú:

      1. Agregar una nueva mascota.
      2. Ver Mascotas registradas.
      3. Ver todos los amos.
      4. Buscar una mascota.
      5. Ver mascotas con un mismo amo.
      6. Actualizar los datos de una mascota.
      7. Eliminar alguna mascota.
      8. Salir del sistema.
      `)
    );

    switch (op) {
      case 1:
        addPet();
        break;
      case 2:
        findAPet();
        break;
      case 3:
        findOwners();
        break;
      case 4:
        lookingForAPet();
        break;
      case 5:
        showOwnersPets();
        break;
      case 6:
        updateInfoPet();
        break;
      case 7:
        removeAPet();
        break;
      case 8:
        flag = false;
        break;
      default:
        console.info("Opción marcada incorrecta");
        break;
    }
  }
}

menu();

// Función para agregar una nueva mascota
function addPet() {
  let nameOfAPet = prompt(
    "Ingresa el nombre de la mascota que quiere añadir:"
  ).toLowerCase();
  let speciesOfPet = prompt(
    "Ingresa la especie de la mascota:"
  ).toLowerCase();
  let breedOfPet = prompt(
    "Ingresa la raza de la mascota:"
  ).toLowerCase();
  let petsBirthday = prompt(
    "Ingresa la fecha de cumpleaños de la mascota (mm/dd/yyyy):"
  );
  let weightOfPet = parseFloat(prompt(
    "Ingresa el peso de la mascota en kg:"
));
  let petsCondition = prompt(
    "Ingresa en que condición se encuentra la mascota (estable/critico):"
  ).toLowerCase();
  let petOwnersName = prompt(
    "Ingresa el nombre del amo de dicha mascota:"
  ).toLowerCase();
  let typeOwnersId = prompt(
    "Ingresa el tipo de documento de identidad del amo:"
  ).toLowerCase();
  let ownersIdNumber = prompt(
    "Ingresa el número del documento de identidad del amo:"
  );
  let cellPhoneOwner = prompt(
    "Ingresa el número de telefono del amo:"
  );
  let mailOwner = prompt(
    "Ingresa el correo electrónico del amo:"
  ).toLowerCase();

  addNewPet.name = nameOfAPet;
  addNewPet.specie = speciesOfPet;
  addNewPet.breed = breedOfPet;
  addNewPet.weight = weightOfPet;
  addNewPet.age = searchPetsDateOfBirth(petsBirthday);
  addNewPet.status = petsCondition;
  addNewPet.ownersName = petOwnersName;
  addNewPet.typeOwnersId = typeOwnersId;
  addNewPet.ownersIdNumber = ownersIdNumber;
  addNewPet.ownersCellPhoneNumber = cellPhoneOwner;
  addNewPet.ownersMail = mailOwner;

  petsArray.push(addNewPet);
}

// Función para calcular la edad de la mascota
function searchPetsDateOfBirth(birthday) {
  let dateBirthday = new Date(birthday);
  let yearBirthdayPet = dateBirthday.getFullYear();
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let agePet = currentYear - yearBirthdayPet;
  return agePet;
}

// Función para ver las mascotas registradas
function findAPet() {
  for (let i = 0; i < petsArray.length; i++) {
    let nameOfAPet = petsArray[i].name;
    registeredPets.push(nameOfAPet);
  }
  return console.log(registeredPets);
}

// Función para ver la lista de todos los amos
function findOwners() {
  for (let i = 0; i < petsArray.length; i++) {
    let nameOwner = petsArray[i].ownersName;
    arrayOfOwners.push(nameOwner);
  }
  return console.log(arrayOfOwners);
}

// Función para buscar a una mascota por su nombre
function lookingForAPet() {
  let findNamePet = prompt(
    "Ingresa el nombre de la mascota que deseas buscar:"
  ).toLowerCase();
  let infoPet = petsArray.filter((pet) => {
    return findNamePet === pet.name;
  });
  console.table(infoPet);
}

// Función para mostrar todas las mascotas pertenecientes a un mismo amo
function showOwnersPets() {
  let petsOfOneOwner = prompt(
    "Ingresa el nombre del amo:"
  );
  let filterThePets = petsArray.filter((pet) => {
    return pet.ownersName === petsOfOneOwner;
  });
  for (let i = 0; i < filterThePets.length; i++) {
    let nameOfAPet = filterThePets[i].name;
    petsOfTheSameOwner.push(nameOfAPet);
  }
  console.log(petsOfTheSameOwner);
}

// Función para actualizar la info de una mascota
function updateInfoPet() {
  let nameOfAPet = prompt(
    "Ingresa el nombre de la mascota que deseas actualizar:"
  ).toLowerCase();
  for (let i = 0; i < petsArray.length; i++) {
    if (nameOfAPet === petsArray[i].name) {
      let weightOfPet = parseFloat(prompt("Ingresa el nuevo peso en kg:"));
      let petsCondition = prompt("Ingresa la nueva condición en la que se encuentra:");
      let phoneOwnerPet = prompt("Ingresa el nuevo número de telefono del amo:");
      let mailOwner = prompt("Ingresa el nuevo correo electrónico del amo:");
      petsArray[i].weight = weightOfPet;
      petsArray[i].status = petsCondition;
      petsArray[i].ownersCellPhoneNumber = phoneOwnerPet;
      petsArray[i].ownersMail = mailOwner;
      console.log(petsArray[i]);
    }
  }
}

// Función para eliminar a una mascota
function removeAPet() {
  let removeThePet = prompt(
    "Ingresa el nombre de dicha mascota:"
  );
  for (let i = 0; i < petsArray.length; i++) {
    if (removeThePet === petsArray[i].name) {
      delete petsArray[i];
    }
  }
  console.table(petsArray);
}