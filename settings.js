document.getElementById("saveSettingsBtn").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll("#questionForm input[type='checkbox']");
    const selectedQuestions = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedQuestions.push(parseInt(checkbox.value));
        }
    });

    localStorage.setItem("questionSettings", JSON.stringify(selectedQuestions));
    alert("Settings saved successfully!");
});
