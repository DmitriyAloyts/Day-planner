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
        $("#btn-09").attr("data-hour","09");
        $("#btn-10").attr("data-hour","10");
        $("#btn-11").attr("data-hour","11");
        $("#btn-12").attr("data-hour","12");
        $("#btn-13").attr("data-hour","13");
        $("#btn-14").attr("data-hour","14");
        $("#btn-15").attr("data-hour","15");
        $("#btn-16").attr("data-hour","16");
        $("#btn-17").attr("data-hour","17");
    }

    renderDescriptions();

    $('button').on("click", function(){
        event.preventDefault();
        var key = "desc" + $(this).attr("data-hour");
        localStorage.setItem(key, $("#" + key).val());
    });
});