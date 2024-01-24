function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("c").value;
    var f2 = document.getElementById("f").value;
    var f = (c * 9/5) + 32
    var c2 = (f2-32) * (5/9)
    document.getElementById("f").value = f
    document.getElementById("c").value = c2
}

function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kg").value;
    var p2 = document.getElementById("lbs").value;
    var p = kg * 2.2
    var kg2 = p2 / 2.2
    document.getElementById("lbs").value = p
    document.getElementById("kg").value = kg2
}

function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var m2 = document.getElementById("m").value;
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    var km2 = m2/0.62137
    document.getElementById("m").value = m
    document.getElementById("km").value = km2
}