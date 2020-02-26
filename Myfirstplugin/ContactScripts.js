
var Sdk = window.Sdk || {};

(function () {

    this.FirstnameOnchange = function (Executioncontext) {
        var formcontext = Executioncontext.getFormContext();
        var Fullname = formcontext.getAttributes("fullname").getValue();

        alert("Name of the contact is" + Fullname );
    }

}
).call(Sdk);
