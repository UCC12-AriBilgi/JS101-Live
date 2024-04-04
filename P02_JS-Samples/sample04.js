function toplama() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);

    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var sonuc = sayi1 + sayi2;

    document.getElementById("sonuc").innerHTML = sonuc;
}

function cikarma() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);

    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var sonuc = sayi1 - sayi2;

    document.getElementById("sonuc").innerHTML = sonuc;
}

function carpma() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);

    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var sonuc = sayi1 * sayi2;

    document.getElementById("sonuc").innerHTML = sonuc;
}

function bolme() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);

    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var sonuc = sayi1 / sayi2;

    document.getElementById("sonuc").innerHTML = sonuc;
}