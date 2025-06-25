const collapsibles = document.querySelectorAll(".collapsible1, .collapsible2");

collapsibles.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.classList.toggle("active");
    });
});

