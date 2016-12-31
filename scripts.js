var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmailValid (email) {
    return re.test(email);
}

function getFormValues () {
    var form = document.getElementById("rsvp-form").children;
    var elements = {};

    for (var i = 0; i < form.length; i++) {
        var elem = form[i].children;
        elements["entry." + (i + 1)] = elem[0].value;
    }

    return elements;
}

function resetForm () {
    var form = document.getElementById("rsvp-form");

    form.elements.forEach(function (element) {
        element.vale = "";
    });

    return elements;
}

function postToGoogle () {
    var formValues = getFormValues();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() { //Call a function when the state changes.
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            resetForm();
        }
    };

    xhr.open("POST", "/");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(formValues));
}
