
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmailValid (email) {
    return re.test(email);
}

function getFormValues () {
    var form = document.getElementById("rsvp-form").children;
    return {
        "entry.636979296": document.getElementById("name-text").value,
        "entry.1800459233": document.getElementById("email-text").value,
        "entry.2004245756": document.getElementById("phone-text").value,
        "entry.969010078": document.getElementById("guest-text").value,
        "entry.278213806": document.getElementById("dietary-text").value
    };
}

function resetForm () {
    document.getElementById("name-text").value = "";
    document.getElementById("email-text").value = "";
    document.getElementById("phone-text").value = "";
    document.getElementById("guest-text").value = "";
    document.getElementById("dietary-text").value = "";
}

function showSnackbar (option) {
    var snackBarOptions = {};
    var data = {};
    var snackbarContainer = document.querySelector('#rsvp-snackbar');
    if (option === 1) {
        snackBarOptions.msg = "Your RSVP has been accepted!";
        snackBarOptions.color = "#43A047";
    } else if (option === 2) {
        snackBarOptions.msg = "Something went wrong email us";
        snackBarOptions.color = "#F44336";
    } else if (option === 3) {
        snackBarOptions.msg = "Please fill out everything";
        snackBarOptions.color = "#F44336";
    }
    data.message = snackBarOptions.msg;
    data.timeout = 5000;

    snackbarContainer.MaterialSnackbar.queuedNotifications_ = [];
    snackbarContainer.style.backgroundColor = snackBarOptions.color;
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}

function isFormValid(formValues) {
    for (var prop in formValues) {
        if (!formValues[prop]) {
            return false;
        }
    }

    return true;
}

function postToGoogle () {
    var formValues = getFormValues();

    if (isFormValid(formValues)) {
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSepKqwPYUvcYYGcTCnUAkxxnB958sYUArvwHEyfWIkmWTRxpg/formResponse",
            data: formValues,
            type: "POST",
            dataType: "xml",
            statusCode:{ 0: function () { showSnackbar(1); }, 200: function () { showSnackbar(2); } }
        });
    } else {
        showSnackbar(3);
    }
}
