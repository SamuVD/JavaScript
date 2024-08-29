// Llamar al formulario
const form = document.getElementById("register-form")

// Llamar a los campos del formulario
const userName = document.getElementById("username")
const lastName = document.getElementById("last-Name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-Password")
const URL = "http://localhost:3000/users"



form.addEventListener("submit", async (event) => {
    event.preventDefault() // Este 'preventDefault' evita que la página se recargue.
    const revisionEmail = await checkEmail(email)
    const revisionPassword = checkPasswords(password, confirmPassword)


    alert("w")
    if (revisionEmail === true && revisionPassword === true) {
        await registerUser(userName, lastName, email, password)
        window.location.href = "/"
    }
})


async function checkEmail(email) {                         // Esto es un queryparámetro, son parámetros que se pasan en la url.
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`)
    const datos = await response.json()

    if (datos.length > 0) {
        return false
    } else {
        return true
    }
}

function checkPasswords(password, confirmPassword) {
    if (password.value === confirmPassword.value) {
        return true
    } else {
        return false
    }
}


async function registerUser(userName, lastName, email, password) {
    const userNew = {
        userName: userName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        }, body: JSON.stringify(userNew)
    })
}















// const sectionForm= document.querySelector("section")
// export function section() {
//     sectionForm.innerHTML = `
//     <div class="row justify-content-center">
//             <div class="col-md-6">
//                 <div class="card">
//                     <div class="card-header">
//                         <h3 class="text-center">Register</h3>
//                     </div>
//                     <div class="card-body">
//                         <form id="register-form">
//                             <div class="form-group">
//                                 <label for="userName">User Name</label>
//                                 <input type="text" class="form-control" id="user-Name" placeholder="Enter user name">
//                             </div>
//                             <div class="form-group">
//                                 <label for="lastName">Last Name</label>
//                                 <input type="text" class="form-control" id="last-Name" placeholder="Enter last name">
//                             </div>
//                             <div class="form-group">
//                                 <label for="email">Email address</label>
//                                 <input type="email" class="form-control" id="email" placeholder="Enter email">
//                             </div>
//                             <div class="form-group">
//                                 <label for="password">Password</label>
//                                 <input type="password" class="form-control" id="password" placeholder="Password">
//                             </div>
//                             <div class="form-group">
//                                 <label for="confirmPassword">Confirm Password</label>
//                                 <input type="password" class="form-control" id="confirm-Password"
//                                     placeholder="Confirm password">
//                             </div>
//                             <button type="submit" class="btn btn-primary btn-block">Register</button>
//                         </form>
//                     </div>
//                     <div class="card-footer">
//                         <p class="text-center">Already have an account? <a href="#">Login here</a>.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `
// }