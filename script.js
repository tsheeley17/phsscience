function speed() {
    // Get the input values
    const distance = parseFloat(document.getElementById("d").value);
    const time = parseFloat(document.getElementById("t").value);

    // Calculate the speed
    const speed = distance / time;

    // Display the result
    document.getElementById("result").innerHTML = `The speed is: ${speed.toFixed(2)} m/s`;
}

function resetPage() {
    location.reload();
}

function calculateAcceleration() {
    var sv = parseFloat(document.getElementById("sv").value);
    var ev = parseFloat(document.getElementById("ev").value);
    var ft = parseFloat(document.getElementById("ft").value);
    var et = parseFloat(document.getElementById("et").value);

    var a = (ev - sv) / (et - ft);

    document.getElementById("result1").innerHTML = "The acceleration is " + a.toFixed(2) + " m/s²";
}

function calculateGravity() {
    var m1 = parseFloat(document.getElementById("m1").value);
    var m2 = parseFloat(document.getElementById("m2").value);
    var d = parseFloat(document.getElementById("d").value);

    var g = 0.000000000066743;
    var f = (g * m1 * m2) / d;

    document.getElementById("result2").innerHTML = "The force of gravity is " + f.toFixed(2) + " N";
}

function calculateVelocity() {
    var d = parseFloat(document.getElementById("d").value);
    var t = parseFloat(document.getElementById("t").value);

    var v = d / t;

    document.getElementById("result3").innerHTML = "The velocity is " + v.toFixed(2) + " m/s";
}

function calculateForce() {
    var m = parseFloat(document.getElementById("m").value);
    var a = parseFloat(document.getElementById("a").value);

    var f = m * a;

    document.getElementById("result4").innerHTML = "The force is " + f.toFixed(2) + " N";
}

function calculateWeight() {
    var m = parseFloat(document.getElementById("m").value);
    var custom_gravity = prompt("Would you like to enter a custom value for gravity? (default = 9.8)");
    var g;

    if (custom_gravity === null) {
        return; // User clicked Cancel
    } else if (custom_gravity.toLowerCase() === "y") {
        g = parseFloat(prompt("Enter your value for gravity: "));
    } else {
        g = 9.8;
    }

    var w = m * g;

    document.getElementById("result5").innerHTML = "The weight is " + w.toFixed(2) + " N";
}

function calculatePotential() {
    var m = parseFloat(document.getElementById("m").value);
    var h = parseFloat(document.getElementById("h").value);
    var custom_gravity = prompt("Would you like to enter a custom value for gravity? (default = 9.8)");
    var g;

    if (custom_gravity === null) {
        return; // User clicked Cancel
    } else if (custom_gravity.toLowerCase() === "y") {
        g = parseFloat(prompt("Enter your value for gravity: "));
    } else {
        g = 9.8;
    }

    var pe = m * g * h;

    document.getElementById("result6").innerHTML = "The potential energy is " + pe.toFixed(2) + " J";
}

function calculateKinetic() {
    var m = parseFloat(document.getElementById("m").value);
    var v = parseFloat(document.getElementById("v").value);

    var ke = 0.5 * m * v * v;

    document.getElementById("result7").innerHTML = "The kinetic energy is " + ke.toFixed(2) + " J";
}

function calculateElectricity() {
    var solve = prompt("Would you like to solve for volts (1), amps (2), or resistance (3)?");
    var answer;

    if (solve === null) {
        return; // User clicked Cancel
    } else if (solve === "1") {
        var i = parseFloat(prompt("How many amps?"));
        var r = parseFloat(prompt("How much resistance?"));
        answer = i * r;
    } else if (solve === "2") {
        var v = parseFloat(prompt("How many volts?"));
        var r = parseFloat(prompt("How much resistance?"));
        answer = v / r;
    } else if (solve === "3") {
        var v = parseFloat(prompt("How many volts?"));
        var i = parseFloat(prompt("How many amps?"));
        answer = v / i;
    } else {
        alert("Invalid input");
        return;
    }

    document.getElementById("result8").innerHTML = "The answer is " + answer.toFixed(2);
}

function calculateDensity() {
    var m = parseFloat(document.getElementById("m").value);
    var v = parseFloat(document.getElementById("v").value);

    var d = m / v;

    document.getElementById("result9").innerHTML = "The density is " + d.toFixed(2) + " kg/m^3";
}

function calculateBuoyancy() {
    var d = parseFloat(document.getElementById("d").value);
    var g = parseFloat(document.getElementById("g").value);
    var v = parseFloat(document.getElementById("v").value);

    var b = -d * g * v;

    document.getElementById("result10").innerHTML = "The buoyant force is " + b.toFixed(2) + " N";
}

function temp_conversion() {
    var temp = prompt("Would you like to find Celsius, Fahrenheit, or Kelvin? (Enter c, f, or k)");

    if (temp.toLowerCase() !== "c" && temp.toLowerCase() !== "f" && temp.toLowerCase() !== "k") {
        while (temp.toLowerCase() !== "c" && temp.toLowerCase() !== "f" && temp.toLowerCase() !== "k") {
            temp = prompt("Please enter c, f, or k.");
        }
    }

    if (temp.toLowerCase() === "c") {
        var start = prompt("Do you have Fahrenheit or Kelvin?");
        if (start.toLowerCase() !== "f" && start.toLowerCase() !== "k") {
            while (start.toLowerCase() !== "f" && start.toLowerCase() !== "k") {
                start = prompt("Please enter f or k.");
            }
        }
        if (start.toLowerCase() === "f") {
            var f = parseFloat(prompt("What is the temperature in Fahrenheit?"));
            var answer = (f - 32) * (5 / 9);
        } else if (start.toLowerCase() === "k") {
            var k = parseFloat(prompt("What is the temperature in Kelvin?"));
            var answer = k - 273.15;
        }
    } else if (temp.toLowerCase() === "f") {
        var start = prompt("Do you have Celsius or Kelvin?");
        if (start.toLowerCase() !== "c" && start.toLowerCase() !== "k") {
            while (start.toLowerCase() !== "c" && start.toLowerCase() !== "k") {
                start = prompt("Please enter c or k.");
            }
        }
        if (start.toLowerCase() === "c") {
            var c = parseFloat(prompt("What is the temperature in Celsius?"));
            var answer = (c * (9 / 5)) + 32;
        } else if (start.toLowerCase() === "k") {
            var k = parseFloat(prompt("What is the temperature in Kelvin?"));
            var answer = (k - 273.15) * (9 / 5) + 32;
        }
    } else if (temp.toLowerCase() === "k") {
        var start = prompt("Do you have Celsius or Fahrenheit?");
        if (start.toLowerCase() !== "c" && start.toLowerCase() !== "f") {
            while (start.toLowerCase() !== "c" && start.toLowerCase() !== "f") {
                start = prompt("Please enter c or f.");
            }
        }
        if (start.toLowerCase() === "c") {
            var c = parseFloat(prompt("What is the temperature in Celsius?"));
            var answer = c + 273.15;
        } else if (start.toLowerCase() === "f") {
            var f = parseFloat(prompt("What is the temperature in Fahrenheit?"));
            var answer = ((f - 32) * (5 / 9)) + 273.15;
        }
    }

    document.getElementById("result11").innerHTML = "Your answer is: " + answer.toFixed(2) + " degrees";
}

function distance() {
    var s = parseFloat(prompt("What is the speed of the object?"));
    var t = parseFloat(prompt("How long was it moving?"));
    var answer = s * t;

    document.getElementById("result12").innerHTML = "Your answer is: " + answer.toFixed(2);
}

function work() {
    var f = parseFloat(prompt("How strong is the force acting on the object?"));
    var d = parseFloat(prompt("What is the displacement of the object?"));
    var answer = f * d;

    document.getElementById("result13").innerHTML = "Your answer is: " + answer.toFixed(2) + " J";
}

function drag() {
    var d = parseFloat(prompt("What is the fluid density? (water = 997) "));
    var s = parseFloat(prompt("What is the speed of the object? "));
    var cd = parseFloat(prompt("What is the drag coefficient? "));
    var a = parseFloat(prompt("What is the cross sectional area? "));
    var answer = 1 / 2 * (d * (s * s) * cd * a);
    document.getElementById("result14").innerHTML = "The answer is " + answer.toFixed(2);
}

function mach() {
    var ov = parseFloat(prompt("What is the object velocity? "));
    var sv = parseFloat(prompt("What is the sound velocity? (around 760 mph on Earth but varies) "));
    var answer = ov / sv;
    document.getElementById("result15").innerHTML = "The answer is " + answer.toFixed(2);
}

function energy() {
    var m = parseFloat(prompt("What is the mass of the object? "));
    var c = prompt("Would you like to put your own value for the speed of light? (default = 186,000 miles per second) ");
    if (c.toLowerCase() === "y") {
        c = parseFloat(prompt("What is the speed of light? "));
    } else {
        c = 186000;
    }
    var answer = m * (c ** 2);
    document.getElementById("result16").innerHTML = "The answer is " + answer.toFixed(2);
}

