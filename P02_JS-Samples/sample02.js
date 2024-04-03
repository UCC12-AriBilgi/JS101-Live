function kareAl() {
    var sayi = parseInt(document.getElementById("sayi").value); // ekrandaki bilgiyi al sayıya cevirerek

    var karesi = sayi * sayi;

    document.getElementById("sonuc").innerHTML = karesi;
}