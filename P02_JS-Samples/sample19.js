// Sayfa yüklendiğinde menu divinin kapalı olarak gelmesini gostermek için
var menuDurum = 0; // menu kapalı

function menuDegistir() {
    var menuObj = document.getElementById("menu");

    if (menuDurum == 0) {
        // demekki menu kapalı onu aç..
        menuObj.style.display = "block";
        menuDurum = 1; // menu acık

    }
    else {
        //menu acıksa kapat
        menuObj.style.display = "none";
        menuDurum = 0; // menu acık
    }

}