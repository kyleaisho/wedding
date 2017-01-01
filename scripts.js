
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
    var form = document.getElementById("rsvp-form").children;

    document.getElementById("name-text").value = "";
    document.getElementById("email-text").value = "";
    document.getElementById("phone-text").value = "";
    document.getElementById("guest-text").value = "";
    document.getElementById("dietary-text").value = "";
}

function postToGoogle () {
    var formValues = getFormValues();

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSepKqwPYUvcYYGcTCnUAkxxnB958sYUArvwHEyfWIkmWTRxpg/formResponse",
        data: formValues,
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: resetForm,
            200: resetForm
        }
    });
}
