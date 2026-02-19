let toggle = document.getElementById("modeToggle");

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
}

toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});
