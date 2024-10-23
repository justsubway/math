function saveSettings() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const selectedQuestions = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
        selectedQuestions.push(parseInt(checkbox.value));
    }
});

    localStorage.setItem("questionSettings", JSON.stringify(selectedQuestions));
    alert("Settings saved!");
}

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
