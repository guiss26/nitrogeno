const coll1 = document.getElementsByClassName("collapsible1");

for (let i = 0; i < coll1.length; i++) {
    coll1[i].addEventListener("click", function() {
        this.classList.toggle("active");

        const content1 = this.nextElementSibling;
        if (content1.style.display === "block") {
            content1.style.display = "none";
        } else {
            content1.style.display = "block";
        }
    });
}

const coll2 = document.getElementsByClassName("collapsible2");

for (let i = 0; i < coll2.length; i++) {
    coll2[i].addEventListener("click", function() {
        this.classList.toggle("active");

        const content2 = this.nextElementSibling;
        if (content2.style.display === "block") {
            content2.style.display = "none";
        } else {
            content2.style.display = "block";
        }
    });
}