function sayiAl() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);

    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var toplam1 = sayi1 + sayi2; // normal toplama işlemi

    var toplam2 = sayi1 + " - " + sayi2; // karaktersel birleştirme

    document.getElementById("sonuc1").innerHTML = toplam1;

    document.getElementById("sonuc2").innerHTML = toplam2;
}