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
    var s = parseFloat(document.getElementById("speed").value);
    var t = parseFloat(document.getElementById("time").value);
    var answer = s * t;

    document.getElementById("result12").innerHTML = "Your answer is: " + answer.toFixed(2) + " meters.";
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

function heat() {
    var m = parseFloat(prompt("What is the mass of the object? "));
    var c = parseFloat(prompt("What is the specific heat of the object? "));
    var t = parseFloat(prompt("How much did the object's temperature change? "));
    var answer = m * c * t;
    document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
}

function momentum() {
    var m = parseFloat(prompt("What is the mass of the object? "));
    var v = parseFloat(prompt("What is the velocity of the object? "));
    var answer = m * v;
    document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
}

function friction() {
    var fc = parseFloat(prompt("What is the friction coefficient? "));
    var nf = parseFloat(prompt("How much force is being exerted on the object from the sloped surface? "));
    var answer = fc * nf;
    document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
}

function spring() {
    var solve = prompt("Would you like to solve for the spring force (1) or the spring constant (2)? ");
    if (solve !== "1" && solve !== "2" && solve !== "3") {
        while (solve !== "1" && solve !== "2" && solve !== "3") {
            solve = prompt("Please enter the number of the option you'd like to pick. ");
        }
    }

    if (solve === "1") {
        var k = parseFloat(prompt("What is the spring constant? "));
        var x = parseFloat(prompt("What is the displacement by the spring? "));
        var answer = -k * x;
    } else if (solve === "2") {
        var f = parseFloat(prompt("What is the spring force? "));
        var x = parseFloat(prompt("What is the displacement by the spring?"));
        var answer = -f * x;
    }

    document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
}

function power() {
    var w = parseFloat(prompt("How much work was done? "));
    var t = parseFloat(prompt("How much time has passed? "));
    var answer = w * t;

    document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
}

function tension() {
    var mg = parseFloat(prompt("What is the weight of the object? "));
    var ma = parseFloat(prompt("What is the acceleration of the object? "));
    var direction = prompt("Is the object moving up (1) or down (2)? ");
    if (direction !== "1" && direction !== "2") {
        while (direction !== "1" && direction !== "2") {
            direction = prompt("Enter one of the options. ");
        }
    }
    if (direction === "1") {
        var answer = mg + ma;
    } else if (direction === "2") {
        var answer = mg - ma;
    }

    document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
}

function surface_tension() {
    var f = parseFloat(prompt("What is the force? "));
    var l = parseFloat(prompt("What is the length of the object creating the force? "));
    var answer = f / l;

    document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
}

function electrical_constant() {
    const k = parseFloat(prompt("What is the Coulomb constant? "));
    const q = parseFloat(prompt("What is the charge? "));
    const r = parseFloat(prompt("What is the distance of separation? "));
    const answer = k * (q / r);
    document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
}

function charles_law() {
    let solve1 = prompt("Would you like to solve for volume (1) or temperature (2)? ");
    while (solve1 !== "1" && solve1 !== "2") {
        solve1 = prompt("Enter the number of the option you'd like to use. ");
    }

    if (solve1 === "1") {
        const v1 = parseFloat(prompt("What is the initial volume? "));
        const t1 = parseFloat(prompt("What is the initial temperature in Kelvin? "));
        const t2 = parseFloat(prompt("What is the second temperature in Kelvin? "));
        const answer = v1 / t1 * t2;
        alert("Your answer is: " + answer);
    } else if (solve1 === "2") {
        const v1 = parseFloat(prompt("What is the initial volume? "));
        const t1 = parseFloat(prompt("What is the initial temperature in Kelvin? "));
        const v2 = parseFloat(prompt("What is the second volume? "));
        const answer = t1 / v1 * v2;
        document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
    }
}

function boyles_law() {
    let solve2 = prompt("Would you like to solve for volume (1) or pressure (2)? ");
    while (solve2 !== "1" && solve2 !== "2") {
        solve2 = prompt("Enter the number of the option you'd like to use. ");
    }

    if (solve2 === "1") {
        const v1 = parseFloat(prompt("What is the initial volume? "));
        const p1 = parseFloat(prompt("What is the intial pressure? "));
        const p2 = parseFloat(prompt("What is the final volume? "));
        const answer = p1 * v1 / p2;
        document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
    } else if (solve2 === "2") {
        const v1 = parseFloat(prompt("What is the initial volume? "));
        const v2 = parseFloat(prompt("What is the final volume? "));
        const p1 = parseFloat(prompt("What is the initial pressure? "));
        const answer = p1 * v1 / v2;
        document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
    }
}

function avagadrosLaw() {
    let solve = prompt("Would you like to solve for volume (1) or the number of moles (2)?");
    while (solve != "1" && solve != "2") {
        solve = prompt("Please enter 1 to solve for volume or 2 to solve for the number of moles.");
    }

    if (solve == "1") {
        let v1 = parseFloat(prompt("What is the initial volume?"));
        let n1 = parseFloat(prompt("What is the initial amount of gas in moles?"));
        let n2 = parseFloat(prompt("What is the final amount of gas in moles?"));
        let answer = (n2 / n1) * v1;
        document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
    } else {
        let v1 = parseFloat(prompt("What is the initial volume?"));
        let v2 = parseFloat(prompt("What is the final volume?"));
        let n1 = parseFloat(prompt("What is the initial amount of gas in moles?"));
        let answer = (n1 / v1) * v2;
        document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
    }
}

function ideal_gas() {
    let solve4 = prompt("Would you like to solve for pressure (1), volume (2), amount of the substance (3), ideal gas constant (4), or temperature (5)? ");
    while (solve4 != "1" && solve4 != "2" && solve4 != "3" && solve4 != "4" && solve4 != "5") {
        solve4 = prompt("Enter the number of the option you'd like to use. ");
    }
    let answer;

    if (solve4 == "1") {
        let v = parseFloat(prompt("What is the volume? "));
        let n = parseFloat(prompt("How much gas is there in moles? "));
        let r = parseFloat(prompt("What is the ideal gas constant? "));
        let t = parseFloat(prompt("What is the temperature? "));
        answer = n * r * t * v;
    } else if (solve4 == "2") {
        let p = parseFloat(prompt("What is the pressure? "));
        let n = parseFloat(prompt("How much gas is there in moles? "));
        let r = parseFloat(prompt("What is the ideal gas constant? "));
        let t = parseFloat(prompt("What is the temperature? "));
        answer = (n * r * t) / p;
    } else if (solve4 == "3") {
        let p = parseFloat(prompt("What is the pressure? "));
        let v = parseFloat(prompt("What is the volume? "));
        let r = parseFloat(prompt("What is the ideal gas constant? "));
        let t = parseFloat(prompt("What is the temperature? "));
        answer = (p * v) / (r * t);
    } else if (solve4 == "4") {
        let p = parseFloat(prompt("What is the pressure? "));
        let v = parseFloat(prompt("What is the volume? "));
        let n = parseFloat(prompt("How much gas is there in moles? "));
        let t = parseFloat(prompt("What is the temperature? "));
        answer = (p * v) / (n * t);
    } else if (solve4 == "5") {
        let p = parseFloat(prompt("What is the pressure? "));
        let v = parseFloat(prompt("What is the volume? "));
        let n = parseFloat(prompt("How much gas is there in moles? "));
        let r = parseFloat(prompt("What is the ideal gas constant? "));
        answer = (p * v) / (n * r);
    }

    document.getElementById("result").innerHTML = "Your answer is: " + answer.toFixed(2);
}


