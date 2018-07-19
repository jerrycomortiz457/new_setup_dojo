$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#myReviews").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myReviewTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    var restolist = [];
    // var restoname, cuisine, loc, owner, avgrating;
    var resto = {
        restoname: restoname,
        cuisine: cuisine,
        loc: loc,
        owner: owner,
        avgrating: avgrating,
        reviews: reviews
    }

    var restoid = $(this).attr('id');
    var restolist = [
        {
            restoname: "Thunderbird",
            cuisine: "Asian Cuisines",
            loc: "San Fernando, 2500 La Union",
            owner: "Jose Rizal",
            avgrating: "8/10",
            reviews: [{
                customer: "hello",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "world 2",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "anonymous 3",
                star: 1,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "Sebay",
            cuisine: "Asian Cuisines",
            loc: "San Juan, 2500 La Union",
            owner: "Raisa Yabes",
            avgrating: "8/10"
        },
        {
            restoname: "1",
            cuisine: "Asian Cuisines",
            loc: "San Juan, 2500 La Union",
            owner: "Raisa Yabes",
            avgrating: "8/10"
        },
        {
            restoname: "2",
            cuisine: "Asian Cuisines",
            loc: "San Juan, 2500 La Union",
            owner: "Raisa Yabes",
            avgrating: "8/10"
        },
        {
            restoname: "Plaza De Castiel",
            cuisine: "Asian Cuisines",
            loc: "San Juan, 2500 La Union",
            owner: "Ms. Che",
            avgrating: "8/10"
        }
    ];


    // var review = {
    //     customername: customername,
    //     star: star,
    //     description: description
    // };

    // var reviewlist = [
    //     {
    //         customer: "hello",
    //         star: 4,
    //         description: "the quick brown fox jumps over the lazy dog."
    //     },
    //     {
    //         customer: "world 2",
    //         star: 3,
    //         description: "the quick brown fox jumps over the lazy dog."
    //     },
    //     {
    //         customer: "anonymous 3",
    //         star: 1,
    //         description: "the quick brown fox jumps over the lazy dog."
    //     }

    // ];
    // console.log(reviewlist)  
    //REGISTRATION AREA
    function registerResto() {
        restoname = $('#restoname').val();
        cuisine = $('#cuisine').val();
        loc = $('#loc').val();
        owner = $('#owner').val();
        resto = {
            restoname: restoname,
            cuisine: cuisine,
            loc: loc,
            owner: owner,
            avgrating: avgrating,
            reviews: reviews
        }

        restolist.push(resto);
        updateTable();
        console.log(restoname, cuisine, loc, owner)
    }
    //LOAD DATA AREA
    function loadTable() {
        console.log(restolist)
        avgrating = '0/10'
        for (var i = 0; i < restolist.length; i++) {
            var option_buttons = '<div class="options"><span id="' + i + '" class="glyphicon glyphicon-eye-open rate" aria-hidden="true"></span><span id="' + i + '" class="glyphicon glyphicon-pencil edit" aria-hidden="true" data-toggle="modal" data-target="#editModal"></span><span id="' + i + '" class="glyphicon glyphicon glyphicon-trash delete " aria-hidden="true" data-toggle="modal" data-target="#deleteModal"></span></div>';
            var appender = '<tr id="' + i + '"><td>' + restolist[i].restoname + '</td><td>' + restolist[i].cuisine + '</td><td>' + restolist[i].loc + '</td><td>' + restolist[i].owner + '</td><td>' + restolist[i].avgrating + option_buttons + '</td></tr>';

            $('#myTable').append(appender);
        }

        $('.options').hide();
    }

    function loadReview() {

        for (var i = 0; i < restolist[restoid].reviews.length; i++) {
            var option_buttons = '<div class="options"><span id="' + i + '" class="glyphicon glyphicon-eye-open rate" aria-hidden="true"></span><span id="' + i + '" class="glyphicon glyphicon-pencil edit" aria-hidden="true" data-toggle="modal" data-target="#editModal"></span><span id="' + i + '" class="glyphicon glyphicon glyphicon-trash delete " aria-hidden="true" data-toggle="modal" data-target="#deleteModal"></span></div>';
            var reviewsappender = '<tr id="' + i + '"><td>' + restolist[restoid].reviews[i].customer + '</td><td>' + restolist[restoid].reviews[i].star + '</td><td>' + restolist[restoid].reviews[i].description + option_buttons + '</td></tr>';

            $('#myReviewTable').append(reviewsappender);
        }

        $('.options').hide();
        console.log()
    }



    function removeNullValue(array) {
        var index = array.indexOf(null);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    $(document).on('click', '#register', function () {
        registerResto();
        $('#restoname').val('')
        $('#cuisine').val('')
        $('#loc').val('')
        $('#owner').val('')
    })

    //DELETE AREA
    function confirmDelete(array, element) {
        array[element] = null;
        removeNullValue(array);
        updateTable();

    }
    $(document).on('click', '.delete', function () {
        restoid = $(this).attr('id');
        $('.delete-mb').text('Are you sure you want to delete "' + restolist[restoid].restoname + '" ? ');
    })
    $(document).on('click', '.deleter', function () {
        confirmDelete(restolist, restoid);
    })

    //EDIT AREA
    $('#myTable').on('click', 'span.edit', function () {
        restoid = $(this).attr('id');
        $('#erestoname').val(restolist[restoid].restoname);
        $('#ecuisine').val(restolist[restoid].cuisine);
        $('#eloc').val(restolist[restoid].loc);
        $('#eowner').val(restolist[restoid].owner);
        $('#eowner').val(restolist[restoid].owner);
        $('#eavgrating').val(restolist[restoid].avgrating);
        //     // console.log(restolist[restoid].avgrating)
    })

    $(document).on('click', '#updater', function () {
        restoname = $('#erestoname').val();
        cuisine = $('#ecuisine').val();
        loc = $('#eloc').val();
        owner = $('#eowner').val();
        avgrating = $('#eavgrating').val();
        // console.log(avgrating)

        resto = {
            restoname: restoname,
            cuisine: cuisine,
            loc: loc,
            owner: owner,
            avgrating: avgrating,
            reviews: reviews
        }

        if (restolist[restoid] <= 0) {
            confirmDelete(restolist, restoid);
            restolist.unshift(resto);
        }
        else {
            restolist[restoid] = resto;
        }


        // confirmDelete(restolist, restoid);

        // console.log(restolist)
        updateTable();
    })

    //RATE AREA
    $(document).on('click', '.rate', function () {
        $('.review-div').show();
        loadReview();
    })

    //OPTION HOVER
    $(document).on('mouseover', 'td', function () {
        $(this).children().show();
    })
    $(document).on('mouseover', 'td', function () {
        $(this).siblings().children().show('drop', 1000);
    })
    $(document).on('mouseout', 'td', function () {
        $(this).siblings().children().hide();
    })
    $(document).on('mouseout', 'td', function () {
        $(this).children().hide();
    })
    //UPDATE DATAe
    function updateTable() {
        $('#myTable').children().remove();

        loadTable();
    }

    $('.review-div').hide();
    loadTable();

});
