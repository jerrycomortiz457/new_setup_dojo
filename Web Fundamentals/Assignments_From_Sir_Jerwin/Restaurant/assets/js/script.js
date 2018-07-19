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

    //VARIABLES
    var restolist = [];
    var restoname, cuisine, loc, owner, avgrating, reviews, customer, star, description, review;
    var review = [];
    var resto = {
        restoname: restoname,
        cuisine: cuisine,
        loc: loc,
        owner: owner,
        avgrating: avgrating,
        reviews: review
    }

    var restolist = [
        {
            restoname: "Thunderbird",
            cuisine: "Asian Cuisines",
            loc: "San Fernando, 2500 La Union",
            owner: "Jose Rizal",
            avgrating: "8/10",
            reviews: [{
                customer: "1",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "2",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "3",
                star: 1,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "Sebay",
            cuisine: "Asian Cuisines",
            loc: "San Juan, 2500 La Union",
            owner: "Raisa Yabes",
            avgrating: "8/10",
            reviews: [{
                customer: "4",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "5",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "6",
                star: 1,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "Diners",
            cuisine: "Asian Cuisines",
            loc: "Somewhere City, Anywhere",
            owner: "Diners' Owner",
            avgrating: "8/10",
            reviews: [{
                customer: "7",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "8",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "9",
                star: 1,
                description: "the quick brown fox jumps over the lazy dog."
            }]

        },
        {
            restoname: "The Canteen",
            cuisine: "Asian Cuisines",
            loc: "San Fernando, 2500 La Union",
            owner: "The Canteener",
            avgrating: "8/10",
            reviews: [{
                customer: "7",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "8",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "9",
                star: 1,
                description: "the quick brown fox jumps over the lazy dog."
            }]

        },
        {
            restoname: "Plaza De Castiel",
            cuisine: "Asian Cuisines",
            loc: "San Juan, 2500 La Union",
            owner: "Ms. Che",
            avgrating: "8/10",
            reviews: [{
                customer: "10",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "11",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "12",
                star: 1,
                description: "the quick brown fox jumps over the lazy dog."
            }]

        }
    ];



    // console.log(restolist[1].reviews[0].customer)
    var restoid = $(this).attr('id');
    var selected = restolist[restoid];
    //VARIABLES

    //RATE AREA
    $(document).on('click', '.rate', function () {
        restoid = $(this).attr('id');
        $('#nav').hide();
        $('#main').hide();
        $('.review-div').show();
        $('.newreview').attr('id', restoid)
        loadReview();
        // console.log(restolist[restoid].reviews[0].customer)
    })

    //BACK TO RESTO
    $('.review-div').on('click', '#back', function () {
        $('.review-div').hide();
        $('#nav').show();
        $('#main').show();
        $('#myReviewTable').children().remove();
    })

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
            reviews: []
        }

        restolist.push(resto);
        updateTable();
        // console.log(restoname, cuisine, loc, owner)
    }

    //ADD NEW REVIEW - REGISTER
    function addNewReview() {
        customer = $('#customer').val();
        star = $('#star').val();
        description = $('#description').val();
        review = {
            customer: customer,
            star: star,
            description: description
        }
        // console.log(restolist[restoid])
        restolist[restoid].reviews.push(review);
        updateReviewTable();
        // console.log(customer, star, description)
    }


    //LOAD DATA AREA - RESTO TABLE
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

    //LOAD REVIEW
    function loadReview() {
        for (var i = 0; i < restolist[restoid].reviews.length; i++) {
            var option_buttons_review = '<div class="options"><span id="' + restoid + '" class="glyphicon glyphicon-pencil editreview" aria-hidden="true" data-toggle="modal" data-target="#editReviewModal" tag="' + i + '"></span><span id="' + restoid + '" class="glyphicon glyphicon glyphicon-trash deletereview " aria-hidden="true" data-toggle="modal" data-target="#deleteReviewModal" tag="' + i + '"></span></div>';
            var reviewsappender = '<tr id="' + i + '"><td>' + restolist[restoid].reviews[i].customer + '</td><td>' + restolist[restoid].reviews[i].star + '</td><td>' + restolist[restoid].reviews[i].description + option_buttons_review + '</td></tr>';
            $('#myReviewTable').append(reviewsappender);
        }
        $('.options').hide();
        // console.log(restoid)
        // console.log(restolist[restoid].reviews[].customer)
        // console.log(restolist)
    }

    //REMOVE NULL
    function removeNullValue(array) {
        var index = array.indexOf(null);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    //REGISTER BUTTON - RESET
    $(document).on('click', '#register', function () {
        registerResto();
        $('#restoname').val('')
        $('#cuisine').val('')
        $('#loc').val('')
        $('#owner').val('')
    })
    // ADD REVIEW BUTTON - ADD AND RESET
    $(document).on('click', '#addreview', function () {
        addNewReview();
        $('#customer').val('')
        $('#star').val('')
        $('#description').val('')

    })

    //DELETE FUNCTION NULLER FOR RESTO
    function confirmDelete(array, element) {
        array[element] = null;
        removeNullValue(array);
        updateTable();
    }

    function confirmDeleteReview(array1, element1) {
        array1[element1] = null;
        removeNullValue(array1);
        updateReviewTable();
    }

    //DELETE BUTTON RESTO
    $(document).on('click', '.delete', function () {
        restoid = $(this).attr('id');
        $('.delete-mb').text('Are you sure you want to delete "' + restolist[restoid].restoname + '" ? ');
    })
    $(document).on('click', '.deleter', function () {
        confirmDelete(restolist, restoid);
    })

    //DELETE BUTTON REVIEW
    $('#myReviewTable').on('click', 'span.deletereview', function () {
        currentresto = $(this).attr('id')
        tag = $(this).attr('tag')
        // console.log(currentresto, tag)
        $('.delete-rt').text('Are you sure you want to delete "' + restolist[currentresto].reviews[tag].customer + "'s" + ' Review" ? ');
    })
    $(document).on('click', '.reviewdeleter', function () {
        // console.log('DELETE')

        confirmDeleteReview(restolist[currentresto].reviews, tag)
    })

    //EDIT AREA
    $('#myTable').on('click', 'span.edit', function () {
        restoid = $(this).attr('id');
        $('#erestoname').val(restolist[restoid].restoname);
        $('#ecuisine').val(restolist[restoid].cuisine);
        $('#eloc').val(restolist[restoid].loc);
        $('#eowner').val(restolist[restoid].owner);
        $('#eavgrating').val(restolist[restoid].avgrating);
        // console.log(restolist[restoid].reviews)
        reviewcopy = restolist[restoid].reviews
        //     // console.log(restolist[restoid].avgrating)
    })

    //NEW REVIEW
    $('.review-div').on('click', '.newreview', function () {
        currentrestoid = $(this).attr('id');
        $('.review-modal-title').text('Write a review for "' + restolist[currentrestoid].restoname + '"');
    })
    //EDIT A REVIEW
    $(document).on('click', '.editreview', function () {
        currentrestoid = $(this).attr('id');
        tag = $(this).attr('tag')
        $('.editreview-modal-title').text('Update a review for "' + restolist[currentrestoid].restoname + '"');
        $('#ecustomer').val(restolist[currentrestoid].reviews[tag].customer);
        $('#edescription').val(restolist[currentrestoid].reviews[tag].description);
        $('#estar').val(restolist[currentrestoid].reviews[tag].star);
        $('#updatereview').attr('tag', tag);
        $('#updatereview').attr('tag2', currentrestoid);

    })

    //UPDATE BUTTON - REVIEW
    $(document).on('click', '#updatereview', function () {
        currentresto = $(this).attr('tag2')
        tag = $(this).attr('tag')
        customer = $('#ecustomer').val();
        star = $('#estar').val();
        description = $('#edescription').val();
        // console.log(avgrating)
        review = {
            customer: customer,
            star: star,
            description: description
        }

        if (restolist[restoid] <= 0) {
            confirmDeleteReview(restolist[currentresto].reviews, tag)
            restolist[currentresto].reviews.unshift(review);
        }
        else {
            restolist[currentresto].reviews[tag] = review;
        }


        // confirmDelete(restolist, restoid);

        // console.log(restolist)
        updateReviewTable();
    })

    //UPDATE BUTTON - RESTO
    $(document).on('click', '#updater', function () {
        restoname = $('#erestoname').val();
        cuisine = $('#ecuisine').val();
        loc = $('#eloc').val();
        owner = $('#eowner').val();
        avgrating = $('#eavgrating').val();
        review = reviewcopy;
        // console.log(avgrating)

        resto = {
            restoname: restoname,
            cuisine: cuisine,
            loc: loc,
            owner: owner,
            avgrating: avgrating,
            reviews: review
        }

        if (restolist[restoid] <= 0) {
            confirmDelete(restolist, restoid);
            restolist.unshift(resto);
        }
        else {
            restolist[restoid] = resto;
        }


        // confirmDelete(restolist, restoid);
        // console.log(restolist[restoid].reviews)
        // console.log(restolist)
        updateTable();
    })

    //STARS - RATING
    $('.rating').on('mouseover', 'span', function () {
        starcount = $(this).attr('id')
        // for (var i = 0; i < 6; i++) {
        //     $(this).css('color', 'red')
        // }
        console.log(starcount)

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
    //UPDATE DATA
    function updateTable() {
        $('#myTable').children().remove();
        loadTable();
    }
    function updateReviewTable() {
        $('#myReviewTable').children().remove();
        loadReview();
    }

    $('.review-div').hide();
    loadTable();

});
