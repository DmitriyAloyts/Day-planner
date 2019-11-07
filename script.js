$(document).ready(function () {

    function renderDescriptions() {
        desc09.value = localStorage.getItem("desc09");
        desc10.value = localStorage.getItem("desc10");
        desc11.value = localStorage.getItem("desc11");
        desc12.value = localStorage.getItem("desc12");
        desc13.value = localStorage.getItem("desc13");
        desc14.value = localStorage.getItem("desc14");
        desc15.value = localStorage.getItem("desc15");
        desc16.value = localStorage.getItem("desc16");
        desc17.value = localStorage.getItem("desc17");

        $("#currentDay").text(moment().format('dddd, MMMM Do')); // Wednesday November 6th 
        var curhour = moment().format('HH');

        if (curhour < 09){
            $("#desc09").attr("class","future col-8 description");
            $("#desc10").attr("class","future col-8 description");
            $("#desc11").attr("class","future col-8 description");
            $("#desc12").attr("class","future col-8 description");
            $("#desc13").attr("class","future col-8 description");
            $("#desc14").attr("class","future col-8 description");
            $("#desc15").attr("class","future col-8 description");
            $("#desc16").attr("class","future col-8 description");
            $("#desc17").attr("class","future col-8 description");
        }
        if (curhour == 09){
            $("#desc09").attr("class","present col-8 description");
            $("#desc10").attr("class","future col-8 description");
            $("#desc11").attr("class","future col-8 description");
            $("#desc12").attr("class","future col-8 description");
            $("#desc13").attr("class","future col-8 description");
            $("#desc14").attr("class","future col-8 description");
            $("#desc15").attr("class","future col-8 description");
            $("#desc16").attr("class","future col-8 description");
            $("#desc17").attr("class","future col-8 description");
        }
        if (curhour == 10){
            $("#desc09").attr("class","past col-8 description");
            $("#desc10").attr("class","present col-8 description");
            $("#desc11").attr("class","future col-8 description");
            $("#desc12").attr("class","future col-8 description");
            $("#desc13").attr("class","future col-8 description");
            $("#desc14").attr("class","future col-8 description");
            $("#desc15").attr("class","future col-8 description");
            $("#desc16").attr("class","future col-8 description");
            $("#desc17").attr("class","future col-8 description");
        }
        if (curhour == 11){
            $("#desc09").attr("class","past col-8 description");
            $("#desc10").attr("class","past col-8 description");
            $("#desc11").attr("class","present col-8 description");
            $("#desc12").attr("class","future col-8 description");
            $("#desc13").attr("class","future col-8 description");
            $("#desc14").attr("class","future col-8 description");
            $("#desc15").attr("class","future col-8 description");
            $("#desc16").attr("class","future col-8 description");
            $("#desc17").attr("class","future col-8 description");
        }
        if (curhour == 12){
            $("#desc09").attr("class","past col-8 description");
            $("#desc10").attr("class","past col-8 description");
            $("#desc11").attr("class","past col-8 description");
            $("#desc12").attr("class","present col-8 description");
            $("#desc13").attr("class","future col-8 description");
            $("#desc14").attr("class","future col-8 description");
            $("#desc15").attr("class","future col-8 description");
            $("#desc16").attr("class","future col-8 description");
            $("#desc17").attr("class","future col-8 description");
        }
        if (curhour == 13){
            $("#desc09").attr("class","past col-8 description");
            $("#desc10").attr("class","past col-8 description");
            $("#desc11").attr("class","past col-8 description");
            $("#desc12").attr("class","past col-8 description");
            $("#desc13").attr("class","present col-8 description");
            $("#desc14").attr("class","future col-8 description");
            $("#desc15").attr("class","future col-8 description");
            $("#desc16").attr("class","future col-8 description");
            $("#desc17").attr("class","future col-8 description");
        }
        if (curhour == 14){
            $("#desc09").attr("class","past col-8 description");
            $("#desc10").attr("class","past col-8 description");
            $("#desc11").attr("class","past col-8 description");
            $("#desc12").attr("class","past col-8 description");
            $("#desc13").attr("class","past col-8 description");
            $("#desc14").attr("class","present col-8 description");
            $("#desc15").attr("class","future col-8 description");
            $("#desc16").attr("class","future col-8 description");
            $("#desc17").attr("class","future col-8 description");
        }
        if (curhour == 15){
            $("#desc09").attr("class","past col-8 description");
            $("#desc10").attr("class","past col-8 description");
            $("#desc11").attr("class","past col-8 description");
            $("#desc12").attr("class","past col-8 description");
            $("#desc13").attr("class","past col-8 description");
            $("#desc14").attr("class","past col-8 description");
            $("#desc15").attr("class","present col-8 description");
            $("#desc16").attr("class","future col-8 description");
            $("#desc17").attr("class","future col-8 description");
        }
        if (curhour == 16){
            $("#desc09").attr("class","past col-8 description");
            $("#desc10").attr("class","past col-8 description");
            $("#desc11").attr("class","past col-8 description");
            $("#desc12").attr("class","past col-8 description");
            $("#desc13").attr("class","past col-8 description");
            $("#desc14").attr("class","past col-8 description");
            $("#desc15").attr("class","past col-8 description");
            $("#desc16").attr("class","present col-8 description");
            $("#desc17").attr("class","future col-8 description");
        }
        if (curhour == 17){
            $("#desc09").attr("class","past col-8 description");
            $("#desc10").attr("class","past col-8 description");
            $("#desc11").attr("class","past col-8 description");
            $("#desc12").attr("class","past col-8 description");
            $("#desc13").attr("class","past col-8 description");
            $("#desc14").attr("class","past col-8 description");
            $("#desc15").attr("class","past col-8 description");
            $("#desc16").attr("class","past col-8 description");
            $("#desc17").attr("class","present col-8 description");
        }
        if (curhour > 17){
            $("#desc09").attr("class","past col-8 description");
            $("#desc10").attr("class","past col-8 description");
            $("#desc11").attr("class","past col-8 description");
            $("#desc12").attr("class","past col-8 description");
            $("#desc13").attr("class","past col-8 description");
            $("#desc14").attr("class","past col-8 description");
            $("#desc15").attr("class","past col-8 description");
            $("#desc16").attr("class","past col-8 description");
            $("#desc17").attr("class","past col-8 description");
        }
    }

    renderDescriptions();

    $("#btn-09").on("click", function () {
        localStorage.setItem("desc09", desc09.value);
    });
    $("#btn-10").on("click", function () {
        localStorage.setItem("desc10", desc10.value);
    });
    $("#btn-11").on("click", function () {
        localStorage.setItem("desc11", desc11.value);
    });
    $("#btn-12").on("click", function () {
        localStorage.setItem("desc12", desc12.value);
    });
    $("#btn-13").on("click", function () {
        localStorage.setItem("desc13", desc13.value);
    });
    $("#btn-14").on("click", function () {
        localStorage.setItem("desc14", desc14.value);
    });
    $("#btn-15").on("click", function () {
        localStorage.setItem("desc15", desc15.value);
    });
    $("#btn-16").on("click", function () {
        localStorage.setItem("desc16", desc16.value);
    });
    $("#btn-17").on("click", function () {
        localStorage.setItem("desc17", desc17.value);
    });

});