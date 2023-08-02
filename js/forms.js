(function(){
    "use strict";

    console.log("It worked...");

    let checkbox = document.querySelector("#submit_verify");
    let submitBtn = document.querySelector("#submit");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            submitBtn.removeAttribute("disabled");
        } else if (!this.checked) {
            submitBtn.setAttribute("disabled", "")
        }
    });

})();

