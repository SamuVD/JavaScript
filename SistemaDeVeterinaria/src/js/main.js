const section = document.querySelector(".section-contenedor");
let div = document.createElement("div");


// Arreglo de mascotas
let petsArray = [
  {
    id: 1,
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
    img: "https://mivet.com/hubfs/shutterstock_590291273.jpg",
  },
  {
    id: 2,
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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rey_nieve.jpg/640px-Rey_nieve.jpg",
  },
  {
    id: 3,
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
    img: "https://tomkingskennel.com/wp-content/uploads/2020/04/Photo-2020.-03.-29.-18-24-21-e1586436552477.jpg",
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
    img: "https://www.dondemiveterinario.com/wp-content/uploads/2020/05/perro-bulldog-ingles.jpg",
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
    img: "https://smylepets.com/wp-content/uploads/2022/03/cockapoo-adulto.jpg",
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
    img: "https://www.hundeo.com/wp-content/uploads/2021/10/Labradoodle-Garten.jpeg",
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
    img: "https://www.gatoexotico.com/wp-content/uploads/2020/04/nature-2808276_640.jpg",
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
    img: "https://blog.dogfydiet.com/wp-content/uploads/2023/09/Teckel-Pelo-duro-2.jpg",
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
    img: "https://www.santevet.es/uploads/images/es_ES/razas/un_gato_persa.jpeg",
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
    img: "https://clinicaveterinarium.es/wp-content/uploads/2023/11/lindo-gatito-gato-siames-interior.jpg",
  },
];

function nav() {
  for (let i = 0; i < petsArray.length; i++) {
    div.innerHTML += ` 
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button> 
      </form>
    </div>
  </div>
</nav>
  `;
  }
}

nav();

function pintar() {
  div.innerHTML = "";
  for (let i = 0; i < petsArray.length; i++) {
    div.innerHTML += `
    <div class="card" style="width: 20.063rem;">
          <img src="${petsArray[i].img}" style="width: 20rem; height: 250px " class="card-img-top " alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${petsArray[i].name}</h5>
          <p class="card-text"><strong>Especie: </strong>${petsArray[i].specie}</p>
          <p class="card-text"><strong>Raza: </strong>${petsArray[i].breed}</p>
          <p class="card-text"><strong>Estado: </strong>${petsArray[i].status}</p>
          <p class="card-text"><strong>Amo: </strong>${petsArray[i].ownersName}</p>
          <p class="card-text"><strong>tel: </strong>${petsArray[i].ownersCellPhoneNumber}</p>
           <button type="button" onclick="deletePet(${petsArray[i].id})" class="btn btn-danger">Eliminar</button>
        </div>
      </div>
  `;
  }
}
pintar();

function footer() {
  footer.innerHTML += `
  <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2024 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
      </ul>
    </div>
  `
}
footer()

// function printCards() {
//   div.innerHTML = ""
//   for (let i = 0; i < petsArray.length; i++) {
//       div.innerHTML +=
//       (`
//           <article class="card" style="width: 25rem">
//               <img class="card-img-top" src=${petsArray[i].img} alt="Image Dog" style="height: 400px";>
//               <div class="card-body">
//                   <h5 class="card-title">${petsArray[i].name}</h5>
//                   <p class="card-text"><strong>Breed:</strong> ${petsArray[i].breed} </p>
//                   <p><strong>Age: </strong> ${petsArray[i].age}</p>
//                   <button type="button" class="btn btn-success">Actualizar</button>
//                   <button type="button" onclick="deletePet(${petsArray[i].id})" class="btn btn-danger">Eliminar</button>
//               </div>
//           </article>
//       `);
//   };
// }
// printCards();

section.appendChild(div);
section.classList.add(
  "container",
  "d-flex",
  "flex",
  "justify-content-center",
  "align-items-center",
  "gap-3"
);
div.classList.add(
  "d-flex",
  "flex-wrap",
  "justify-content-center",
  "align-items-center",
  "gap-5"
);

// Variables para actualizar datos
// let registeredPets = [];
// let arrayOfOwners = [];
// let petsOfTheSameOwner = [];
// let addNewPet = {};

// // Menú para interactuar con el usuario
// function menu() {
//   let flag = true;

//   while (flag) {
//     let op = parseInt(
//       prompt(`Menú:

//       1. Agregar una nueva mascota.
//       2. Ver Mascotas registradas.
//       3. Ver todos los amos.
//       4. Buscar una mascota.
//       5. Ver mascotas con un mismo amo.
//       6. Actualizar los datos de una mascota.
//       7. Eliminar alguna mascota.
//       8. Salir del sistema.
//       `)
//     );

//     switch (op) {
//       case 1:
//         addPet();
//         break;
//       case 2:
//         findAPet();
//         break;
//       case 3:
//         findOwners();
//         break;
//       case 4:
//         lookingForAPet();
//         break;
//       case 5:
//         showOwnersPets();
//         break;
//       case 6:
//         updateInfoPet();
//         break;
//       case 7:
//         removeAPet();
//         break;
//       case 8:
//         flag = false;
//         break;
//       default:
//         console.info("Opción marcada incorrecta");
//         break;
//     }
//   }
// }

// menu();

// // Función para agregar una nueva mascota
// function addPet() {
//   let nameOfAPet = prompt(
//     "Ingresa el nombre de la mascota que quiere añadir:"
//   ).toLowerCase();
//   let speciesOfPet = prompt(
//     "Ingresa la especie de la mascota:"
//   ).toLowerCase();
//   let breedOfPet = prompt(
//     "Ingresa la raza de la mascota:"
//   ).toLowerCase();
//   let petsBirthday = prompt(
//     "Ingresa la fecha de cumpleaños de la mascota (mm/dd/yyyy):"
//   );
//   let weightOfPet = parseFloat(prompt(
//     "Ingresa el peso de la mascota en kg:"
// ));
//   let petsCondition = prompt(
//     "Ingresa en que condición se encuentra la mascota (estable/critico):"
//   ).toLowerCase();
//   let petOwnersName = prompt(
//     "Ingresa el nombre del amo de dicha mascota:"
//   ).toLowerCase();
//   let typeOwnersId = prompt(
//     "Ingresa el tipo de documento de identidad del amo:"
//   ).toLowerCase();
//   let ownersIdNumber = prompt(
//     "Ingresa el número del documento de identidad del amo:"
//   );
//   let cellPhoneOwner = prompt(
//     "Ingresa el número de telefono del amo:"
//   );
//   let mailOwner = prompt(
//     "Ingresa el correo electrónico del amo:"
//   ).toLowerCase();

//   addNewPet.name = nameOfAPet;
//   addNewPet.specie = speciesOfPet;
//   addNewPet.breed = breedOfPet;
//   addNewPet.weight = weightOfPet;
//   addNewPet.age = searchPetsDateOfBirth(petsBirthday);
//   addNewPet.status = petsCondition;
//   addNewPet.ownersName = petOwnersName;
//   addNewPet.typeOwnersId = typeOwnersId;
//   addNewPet.ownersIdNumber = ownersIdNumber;
//   addNewPet.ownersCellPhoneNumber = cellPhoneOwner;
//   addNewPet.ownersMail = mailOwner;

//   petsArray.push(addNewPet);
// }

// // Función para calcular la edad de la mascota
function searchPetsDateOfBirth(birthday) {
  let dateBirthday = new Date(birthday);
  let yearBirthdayPet = dateBirthday.getFullYear();
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let agePet = currentYear - yearBirthdayPet;
  return agePet;
}

// // Función para ver las mascotas registradas
// function findAPet() {
//   for (let i = 0; i < petsArray.length; i++) {
//     let nameOfAPet = petsArray[i].name;
//     registeredPets.push(nameOfAPet);
//   }
//   return console.log(registeredPets);
// }

// // Función para ver la lista de todos los amos
// function findOwners() {
//   for (let i = 0; i < petsArray.length; i++) {
//     let nameOwner = petsArray[i].ownersName;
//     arrayOfOwners.push(nameOwner);
//   }
//   return console.log(arrayOfOwners);
// }

// Función para buscar a una mascota por su nombre
// function lookingForAPet() {
//   let findNamePet = prompt(
//     "Ingresa el nombre de la mascota que deseas buscar:"
//   ).toLowerCase();
//   let infoPet = petsArray.filter((pet) => {
//     return findNamePet === pet.name;
//   });
//   console.table(infoPet);
//   nav();
  
// }

// // Función para mostrar todas las mascotas pertenecientes a un mismo amo
// function showOwnersPets() {
//   let petsOfOneOwner = prompt(
//     "Ingresa el nombre del amo:"
//   );
//   let filterThePets = petsArray.filter((pet) => {
//     return pet.ownersName === petsOfOneOwner;
//   });
//   for (let i = 0; i < filterThePets.length; i++) {
//     let nameOfAPet = filterThePets[i].name;
//     petsOfTheSameOwner.push(nameOfAPet);
//   }
//   console.log(petsOfTheSameOwner);
// }

// // Función para actualizar la info de una mascota
// function updateInfoPet() {
//   let nameOfAPet = prompt(
//     "Ingresa el nombre de la mascota que deseas actualizar:"
//   ).toLowerCase();
//   for (let i = 0; i < petsArray.length; i++) {
//     if (nameOfAPet === petsArray[i].name) {
//       let weightOfPet = parseFloat(prompt("Ingresa el nuevo peso en kg:"));
//       let petsCondition = prompt("Ingresa la nueva condición en la que se encuentra:");
//       let phoneOwnerPet = prompt("Ingresa el nuevo número de telefono del amo:");
//       let mailOwner = prompt("Ingresa el nuevo correo electrónico del amo:");
//       petsArray[i].weight = weightOfPet;
//       petsArray[i].status = petsCondition;
//       petsArray[i].ownersCellPhoneNumber = phoneOwnerPet;
//       petsArray[i].ownersMail = mailOwner;
//       console.log(petsArray[i]);
//     }
//   }
// }

// Función para eliminar a una mascota
// function removeAPet(idPet) {
//   for (let i = 0; i < petsArray.length; i++) {
//     if (idPet === petsArray[i].id) {
//       petsArray.splice([i],1);
//       pintar()
//     }
//   }

// }

function deletePet(pets) {
  for (let i = 0; i < petsArray.length; i++) {
    if (pets === petsArray[i].id) {
      petsArray.splice([i], 1);
      pintar();
    }
  }
}
