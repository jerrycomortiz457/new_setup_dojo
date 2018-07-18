$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    var counter = 0;
    var arr = [];
    // var jsondata = $('#jsondata').val();
    // var jsonlist = JSON.parse("[" + jsondata + "]");
    var jsondataupdated;
    var restoname, cuisine, loc, owner;
    var entry = {
        restoname: restoname,
        cuisine: cuisine,
        loc: loc,
        owner: owner
    };


    // function register() {
    //     restoname = $('#restoname').val();
    //     cuisine = $('#cuisine').val();
    //     loc = $('#loc').val();
    //     owner = $('#owner').val();

    // }



    var xmlhttp, text;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', '../assets/js/data.txt', false);
    xmlhttp.send();
    text = xmlhttp.responseText;
    console.log(text)
    var jsonlist = JSON.parse("[" + text + "]");
    var option_buttons = '<div class="options"><span class="glyphicon glyphicon-eye-open rate" aria-hidden="true"></span><span class="glyphicon glyphicon-pencil edit" aria-hidden="true"></span><span class="glyphicon glyphicon glyphicon-remove delete " aria-hidden="true"></span></div>'

    function loadPreviousData() {
        // console.log(jsondata)
        console.log(jsonlist)
        for (var i = 0; i < jsonlist.length; i++) {
            var appender = "<tr><td>" + jsonlist[i].restoname + "</td><td>" + jsonlist[i].cuisine + "</td><td>" + jsonlist[i].loc + "</td><td>" + jsonlist[i].owner + "</td><td>" + "4/10" + option_buttons + "</td></tr>";
            $('tbody').append(appender);
            $('#jsondata').text(text);
            hoverOptions();
        }
    }
    loadPreviousData();
    $('.options').hide()
    function registerData() {
        restoname = $('#restoname').val();
        cuisine = $('#cuisine').val();
        loc = $('#loc').val();
        owner = $('#owner').val();
        var tableupdate = "<tr><td>" + restoname + "</td><td>" + cuisine + "</td><td>" + loc + "</td><td>" + owner + "</td><td>" + "4/10" + option_buttons + "</td></tr>";
        $('tbody').append(tableupdate);
        $('#jsondata').append(',{"restoname":"' + restoname + '","cuisine":"' + cuisine + '","loc":"' + loc + '","owner":"' + owner + '"}');
        $('.options').hide()
        hoverOptions();
    }
    function updateJsonData() {
        jsondataupdated = $('#jsondata').val();
        console.log(jsondataupdated);
        jsonlist = JSON.parse("[" + jsondataupdated + "]");
        console.log(jsonlist)
    }

    $('#register').click(function () {
        registerData();
        updateJsonData();
        hoverOptions();
    })


    function hoverOptions() {
        $('td').hover(function () {
            console.log('td hovering');
            $(this).siblings().children('div').toggle(600);
            // var options = $(".options").toggle("slide", 'slow');
        })
        $('td').hover(function () {
            console.log('td hovering');
            $(this).children('div').toggle(600);
            // var options = $(".options").toggle("slide", 'slow');
        })
    }
    hoverOptions();

    // $(document).on('click', '.delete', function () {

    //     // $(this).parent().parent().parent().siblings('t').remove();
    //     $('#1'

    // })



    // $('#register').click(function () {
    //     register();
    //     

    //     entry = {
    //         restoname: restoname,
    //         cuisine: cuisine,
    //         loc: loc,
    //         owner: owner
    //     };
    //     var stringer = JSON.stringify(entry)
    //     arr.push(stringer);
    //     console.log(arr);
    //     console.log(stringer);
    //     var arr_object = "[" + arr + "]";
    //     localStorage.setItem('oldregistered', arr_object);
    //     // localStorage.setItem('updateregistered', arr);

    // });
    // console.log(arr);

    // // var last = 'oldregistered' + max;
    // // var temp = localStorage.getItem('oldregistered');
    // // var array = JSON.parse(temp);
    // // console.log(array);
    // var jsonlist = $('#jsondata').val();
    // console.log(jsonlist)
    // var jsonparsed = JSON.parse(jsonlist);
    // console.log(jsonparsed)


    // function displayPrevious() {
    //     for (var i = 0; i < jsonparsed.length; i++) {
    //         $('tbody').append("<tr><th>" + jsonparsed[i].restoname + "</th><td>" + jsonparsed[i].cuisine + "</td><td>" + jsonparsed[i].loc + "</td><td>" + jsonparsed[i].owner + "</td><td>" + "4/10" + "</td></tr>");
    //     }

    // };
    // displayPrevious();


    // function saveResto(restoObject) {

    // }





    // Storage.prototype.setObject = function (key, value) {
    //     this.setItem(key, JSON.stringify(value));
    // }

    // Storage.prototype.getObject = function (key) {
    //     return JSON.parse(this.getItem(key));
    // }


});
