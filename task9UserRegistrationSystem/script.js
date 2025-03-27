
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            registerUser();
        });
    }
    loadUsers();
});

function registerUser() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let address = document.getElementById("address").value.trim();

    if (!name || !email || !contact || !address) {
        alert("All fields are required!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, contact, address });

    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered Successfully!");
    document.getElementById("registrationForm").reset();
}

// Function to load users into the table
function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userTable = document.getElementById("userTable");

    if (userTable) {
        userTable.innerHTML = "";
        users.forEach((user, index) => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>`;
            userTable.innerHTML += row;
        });
    }
}
