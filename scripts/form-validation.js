function checkMissing() {
    let requiredFields = document.querySelectorAll(".required");
    let missingCount = 0;

    requiredFields.forEach(function(field) {
        if (field.value === "") {
            missingCount++;
        }
    });

    let message = document.getElementById("missing-count");

    if (missingCount > 0) {
        message.textContent = "Required fields remaining: " + missingCount;
    } else {
        message.textContent = "All required fields are complete.";
    }
}

function validateEmail() {
    let emailField = document.getElementById("email");
    let emailValue = emailField.value;

    if (emailValue.length < 8) {
        emailField.classList.add("email-error");
        return false;
    } else {
        emailField.classList.remove("email-error");
        return true;
    }
}

function runValidation(event) {
    checkMissing();
    let emailIsValid = validateEmail();

    let requiredFields = document.querySelectorAll(".required");
    let missingCount = 0;

    requiredFields.forEach(function(field) {
        if (field.value === "") {
            missingCount++;
        }
    });

    if (missingCount > 0 || emailIsValid === false) {
        alert("Please complete all required fields and enter a valid email.");
        event.preventDefault();
    }
}

let submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", runValidation);





