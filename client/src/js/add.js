const form = document.forms["form"];

const name = form.elements["name"];
const username = form.elements["username"];
const password = form.elements["password"];
const email = form.elements["email"];

const body = document.body;
const main = body.children.namedItem("main-container");
const output = main.children.namedItem("output");

form.addEventListener("submit", event => {
    event.preventDefault();

    output.textContent = "submitted";
});
