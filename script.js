
let registeredUser = null;
let sessionActive = false;

function showRegister() {
    document.getElementById("registerBox")
        .classList.remove("hidden");

    document.getElementById("loginBox")
        .classList.add("hidden");

    document.getElementById("dashboard")
        .classList.add("hidden");
}

function showLogin() {
    document.getElementById("registerBox")
        .classList.add("hidden");

    document.getElementById("loginBox")
        .classList.remove("hidden");

    document.getElementById("dashboard")
        .classList.add("hidden");
}

function validateInput(username, password) {

    if (username === "" || password === "") {
        return "Please fill all fields.";
    }

    if (username.length < 3) {
        return "Username must contain at least 3 characters.";
    }

    if (password.length < 8) {
        return "Password must contain at least 8 characters.";
    }

    const unsafePattern = /[<>\"']/;

    if (unsafePattern.test(username)) {
        return "Invalid characters detected in username.";
    }

    return "";
}

function registerUser() {

    const username =
        document.getElementById("regUsername")
        .value.trim();

    const password =
        document.getElementById("regPassword")
        .value;

    const message =
        document.getElementById("registerMessage");

    const error =
        validateInput(username, password);

    if (error !== "") {
        message.textContent = error;
        message.style.color = "#dc2626";
        return;
    }

    registeredUser = {
        username: username,
        password: password
    };

    message.textContent =
        "Registration successful! You can now login.";

    message.style.color = "#16a34a";

    document.getElementById("regUsername").value = "";
    document.getElementById("regPassword").value = "";
}

function loginUser() {

    const username =
        document.getElementById("loginUsername")
        .value.trim();

    const password =
        document.getElementById("loginPassword")
        .value;

    const message =
        document.getElementById("loginMessage");

    if (registeredUser === null) {
        message.textContent =
            "No account found. Please register first.";

        message.style.color = "#dc2626";
        return;
    }

    if (
        username === registeredUser.username &&
        password === registeredUser.password
    ) {

        sessionActive = true;

        document.getElementById("loginBox")
            .classList.add("hidden");

        document.getElementById("registerBox")
            .classList.add("hidden");

        document.getElementById("dashboard")
            .classList.remove("hidden");

        document.getElementById("welcomeMessage")
            .textContent =
            "Welcome, " + username + "! Your session is active.";

    } else {

        message.textContent =
            "Invalid username or password.";

        message.style.color = "#dc2626";
    }
}

function logoutUser() {

    sessionActive = false;

    document.getElementById("dashboard")
        .classList.add("hidden");

    document.getElementById("loginBox")
        .classList.remove("hidden");

    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";

    document.getElementById("loginMessage")
        .textContent =
        "You have been logged out.";

    document.getElementById("loginMessage")
        .style.color = "#16a34a";
}
