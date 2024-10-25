function saveSettings() {
    const checkboxes = document.querySelectorAll("#questionForm input[type='checkbox']");
    const selectedQuestions = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedQuestions.push(parseInt(checkbox.value));
        }
    });

    localStorage.setItem("questionSettings", JSON.stringify(selectedQuestions));
    alert("Settings saved successfully!");
};

window.onload = function () {
    const storedSettings = localStorage.getItem("questionSettings");
    if (storedSettings) {
        const selectedQuestions = JSON.parse(storedSettings);
        const checkboxes = document.querySelectorAll("input[type='checkbox']");

        checkboxes.forEach(checkbox => {
            if (selectedQuestions.includes(parseInt(checkbox.value))) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
    }
};

//animation

document.addEventListener('DOMContentLoaded', () => {
    const collapsibles = document.getElementsByClassName("collapsible");

    for (let i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});
