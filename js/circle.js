(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,
        area: 0,
        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let calculatedArea = Math.PI * Math.pow(this.radius, 2);
            this.area = calculatedArea;
            return calculatedArea; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let circleArea = this.getArea();
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) {
                circleArea = Math.round(circleArea)
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
