$(document).ready(function () {
    var counter = 0;
    var arr = [];
    var restoname, cuisine, loc, owner;
    var entry = {
        restoname: restoname,
        cuisine: cuisine,
        loc: loc,
        owner: owner
    };


    function register() {
        restoname = $('#restoname').val();
        cuisine = $('#cuisine').val();
        loc = $('#loc').val();
        owner = $('#owner').val();

    }

    $('#register').click(function () {
        register();
        var appender = "<tr><th>" + restoname + "</th><td>" + cuisine + "</td><td>" + loc + "</td><td>" + owner + "</td><td>" + "4/10" + "</td></tr>";
        $('tbody').append(appender);
        entry = {
            restoname: restoname,
            cuisine: cuisine,
            loc: loc,
            owner: owner
        };
        var stringer = JSON.stringify(entry)
        arr.push(stringer);
        console.log(arr);
        console.log(stringer);
        localStorage.setItem('oldregistered', arr);
        localStorage.setItem('updateregistered', arr);


    });
    console.log(arr);

    // var last = 'oldregistered' + max;
    var temp = localStorage.getItem('oldregistered');
    var array = JSON.parse("[" + temp + "]");
    console.log(array);

    function displayPrevious() {
        for (var i = 0; i < array.length; i++) {
            $('tbody').append("<tr><th>" + array[i].restoname + "</th><td>" + array[i].cuisine + "</td><td>" + array[i].loc + "</td><td>" + array[i].owner + "</td><td>" + "4/10" + "</td></tr>");
        }

    };
    displayPrevious();




});
