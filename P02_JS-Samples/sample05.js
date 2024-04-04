function degistir() {
    var element = document.getElementsByClassName("yazi"); // dokumandaki yazi class tanımı yapılmış tüm elementlerin hepsini bir anda secer.


    for (var index = 0;  index < element.length; index++) {
        element[index].style.color = "orange";
        element[index].style.fontSize = "26px";
    }
}