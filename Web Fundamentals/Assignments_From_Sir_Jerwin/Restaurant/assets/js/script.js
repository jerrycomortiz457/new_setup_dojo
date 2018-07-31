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
    var restoname, cuisine, loc, owner, avgrating, customer, star, description, avgratingappend = '0/0';
    var review = [];
    var resto = {
        restoname: restoname,
        cuisine: cuisine,
        loc: loc,
        owner: owner,
        avgrating: avgratingappend,
        reviews: []
    }

    var restolist = [
        {
            restoname: "Noma",
            cuisine: "European Cuisines",
            loc: "Copenhagen, Denmark",
            owner: "Redzepi",
            avgrating: avgrating,
            reviews: [{
                customer: "1",
                star: 5,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "2",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "3",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "Celler de Can Roca",
            cuisine: "European and African Cuisines",
            loc: "Girona, Spain",
            owner: "Joan,  Josep, Jordi",
            avgrating: avgrating,
            reviews: [{
                customer: "4",
                star: 5,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "5",
                star: 5,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "6",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "Osteria Francescana",
            cuisine: "Italian Cuisines",
            loc: "Modena, Italy",
            owner: "Massimo Bottura",
            avgrating: avgrating,
            reviews: [{
                customer: "1",
                star: 5,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "2",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "3",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "Eleven Madison Park",
            cuisine: "American Cuisines",
            loc: "New York, USA",
            owner: "Daniel Humm",
            avgrating: avgrating,
            reviews: [{
                customer: "10",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "11",
                star: 2,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "12",
                star: 2,
                description: "the quick brown fox jumps over the lazy dog."
            }]

        },
        {
            restoname: "Dinner",
            cuisine: "British Cuisines",
            loc: "London, England",
            owner: "Heston Blumenthal",
            avgrating: avgrating,
            reviews: [{
                customer: "1",
                star: 5,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "2",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "3",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "Mugaritz",
            cuisine: "Spanish Cuisines",
            loc: "Errenteria, Spain",
            owner: "Andoni Luis Aduriz l",
            avgrating: avgrating,
            reviews: [{
                customer: "1",
                star: 5,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "2",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "3",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "D.O.M",
            cuisine: "Brazilian Cuisines",
            loc: "Saõ Paulo, Brazil",
            owner: "Alex Atala",
            avgrating: avgrating,
            reviews: [{
                customer: "1",
                star: 2,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "2",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "3",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "Arzak",
            cuisine: "Spanish Cuisines",
            loc: "San Sebastian, Spain",
            owner: "Juan Mari Arzak",
            avgrating: avgrating,
            reviews: [{
                customer: "1",
                star: 5,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "2",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "3",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "Alinea",
            cuisine: "Italian Cuisines",
            loc: "Chicago, Illinois",
            owner: "Grant Achatz",
            avgrating: avgrating,
            reviews: [{
                customer: "1",
                star: 2,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "2",
                star: 4,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "3",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
        {
            restoname: "The Ledbury",
            cuisine: "British Cuisines",
            loc: "London, England",
            owner: "Brett Graham",
            avgrating: avgrating,
            reviews: [{
                customer: "1",
                star: 5,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "2",
                star: 2,
                description: "the quick brown fox jumps over the lazy dog."
            },
            {
                customer: "3",
                star: 3,
                description: "the quick brown fox jumps over the lazy dog."
            }]
        },
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
        $('#restonamereview').text(restolist[restoid].restoname + ' Reviews')
        loadReview();
        // console.log(restolist[restoid].reviews[0].customer)
    })

    //BACK TO RESTO
    $('.review-div').on('click', '#back', function () {
        $('.review-div').hide();
        $('#nav').show();
        $('#main').show();
        $('#myReviewTable').children().remove();
        updateTable();
    })

    //REGISTRATION AREA
    function registerResto() {
        restoname = $('#restoname').val();
        cuisine = $('#cuisine').val();
        loc = $('#loc').val();
        owner = $('#owner').val();
        avgrating = avgratingappend;
        resto = {
            restoname: restoname,
            cuisine: cuisine,
            loc: loc,
            owner: owner,
            avgrating: avgratingappend,
            reviews: []
        }
        restolist.push(resto);
        updateTable();
        // console.log(restoname, cuisine, loc, owner)
    }

    //ADD NEW REVIEW - REGISTER
    function addNewReview() {
        customer = $('#customer').val();
        star = starcount;
        description = $('#description').val();
        review = {
            customer: customer,
            star: star,
            description: description
        }
        // console.log(restolist[restoid])
        restolist[restoid].reviews.push(review);
        $('.star').css('fill', 'white');
        $('.star').css('color', 'white');
        updateReviewTable();
        // console.log(customer, star, description)
    }

    //STAR APPENDER
    function starAppend(starshade) {
        if (starshade == 1) {
            return '&#9733;&#9734;&#9734;&#9734;&#9734;';
        }
        if (starshade == 2) {
            return '&#9733;&#9733;&#9734;&#9734;&#9734;';
        }
        if (starshade == 3) {
            return '&#9733;&#9733;&#9733;&#9734;&#9734;';
        }
        if (starshade == 4) {
            return '&#9733;&#9733;&#9733;&#9733;&#9734;';
        }
        if (starshade == 5) {
            return '&#9733;&#9733;&#9733;&#9733;&#9733;';
        }
    }

    //LOAD DATA AREA - RESTO TABLE
    function loadTable() {
        console.log(restolist)
        for (var i = 0; i < restolist.length; i++) {
            avgrating = loadAvgRating(restolist, i);
            restolist[i].avgrating = avgrating;
            var option_buttons = '<div class="options"> \
            <span id="' + i + '" class="glyphicon glyphicon-eye-open rate" aria-hidden="true"></span> \
            <span id="' + i + '" class="glyphicon glyphicon-pencil edit" aria-hidden="true" data-toggle="modal" data-target="#editModal"></span> \
            <span id="' + i + '" class="glyphicon glyphicon glyphicon-trash delete " aria-hidden="true" data-toggle="modal" data-target="#deleteModal"></span> \
            </div>';
            var retoTrTd = '<tr id="' + i + '"><td><input type="checkbox" name="selectresto" class="selectresto"></td> \
            <td>' + restolist[i].restoname + '</td> <td>' + restolist[i].cuisine + '</td> \
            <td>' + restolist[i].loc + '</td> <td>' + restolist[i].owner + '</td> \
            <td class="avgratingtd">' + avgrating + option_buttons + '</td></tr > ';
            $('#myTable').append(retoTrTd);
        }
        if (restolist.length == 0) {
            $('#myTable').append('<tr><td colspan="6" class="noitems">- This field has no items -</td></tr>');
        }
        selectAllCheckbox();
        //hidden
        // $('.options').hide();        
    }

    function loadAvgRating(restocurrent, index) {
        ratingcounter = 0;
        for (var j = 0; j < restocurrent[index].reviews.length; j++) {
            // console.log(restocurrent[index].reviews[j].star)
            if (restocurrent[index].reviews.length != 0) {
                avgratingappend = ratingcounter + '/' + restocurrent[index].reviews.length;
            }
            if (restocurrent[index].reviews[j].star >= 3) {
                ratingcounter++;
                avgratingappend = ratingcounter + '/' + restocurrent[index].reviews.length;
            }
        }
        if (restocurrent[index].reviews.length == 0) {
            return '0/0';
        }
        else {
            return avgratingappend;
        }
    }
    //LOAD REVIEW
    function loadReview() {
        let count = 1;
        for (var i = 0; i < restolist[restoid].reviews.length; i++) {
            rated = starAppend(restolist[restoid].reviews[i].star);
            reviewsrating = restolist[restoid].reviews[i].star;
            if (reviewsrating >= 3) {
                avgratingappend = count++ + '/' + restolist[restoid].reviews.length;
            }
            let option_buttons_review = '<div class="options"> \
            <span id="' + restoid + '" class="glyphicon glyphicon-pencil editreview" aria-hidden="true" data-toggle="modal" data-target="#editReviewModal" tag="' + i + '"></span> \
            <span id="' + restoid + '" class="glyphicon glyphicon glyphicon-trash deletereview " aria-hidden="true" data-toggle="modal" data-target="#deleteReviewModal" tag="' + i + '"></span> \
            </div>';
            let reviewsappender = '<tr id="' + i + '"><td><input type="checkbox" name="selectreview" class="selectreview"></td> <td>' + restolist[restoid].reviews[i].customer + '</td> <td id="ratestars">' + rated + '</td> \
            <td>' + restolist[restoid].reviews[i].description + option_buttons_review + '</td></tr > ';
            $('#myReviewTable').append(reviewsappender);
        }
        if (restolist[restoid].reviews.length == 0) {
            $('#myReviewTable').append('<tr><td colspan="4" class="noitems">- This field has no items -</td></tr>');
        }
        selectAllCheckbox();
        return avgratingappend;
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

    //TABLES SORTER
    function updateSort() {
        $("#restotable").trigger("update");
        $("#reviewtable").trigger("update");
    }

    //SELECTIONS - CHECKBOX
    function selectAllCheckbox() {
        $("#selectallresto").click(function () {
            $('input:checkbox').prop('checked', this.checked);
            // $("#selectallresto").tablesorter()
        });
        $("#selectallreviews").click(function () {
            $('input:checkbox').not(this).prop('checked', this.checked);
        });
    }

    //DELETE SELECTIONS
    function changeToNull(array, element) {
        if ($(this).prop('checked', true)) {
            array[element] = null;
        }
    }

    $(document).on('click', '')

    $('#main').on('click', '#deleteselection', function () {
        restoid = $(this).attr('id');
        deleteSelected(restolist, restoid);
    })

    //REGISTER BUTTON - RESET
    $(document).on('click', '#register', function () {
        registerResto();
        $('#restoname').val('')
        $('#cuisine').val('')
        $('#loc').val('')
        $('#owner').val('')
        $('#register').attr('disabled', true);
    })

    $(document).on('click', '.cancel', function () {
        $('.registerinput').val('')
        // $('#cuisine').val('')
        // $('#loc').val('')
        // $('#owner').val('')
        // $('#customer').val('')
        // $('#star').val('')
        // $('#description').val('')
    })
    // ADD REVIEW BUTTON - ADD AND RESET
    $(document).on('click', '#addreview', function () {
        addNewReview();
        $('#customer').val('')
        $('#star').val('')
        $('#description').val('')
        $('#addreview').attr('disabled', true);
    })

    //DELETE FUNCTION NULLER FOR RESTO
    function confirmDelete(array, element) {
        array[element] = null;
        removeNullValue(array);
        updateTable();
    }
    //REVIEW DELETE CONFIRMATION
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
        // if (restolist.length == 0) {
        //     console.log(restolist.length)
        // }
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
        // console.log(restolist[restoid].avgrating)
    })

    //NEW REVIEW
    $('.review-div').on('click', '.newreview', function () {
        currentrestoid = $(this).attr('id');
        $('.review-modal-title').text('Write a review for "' + restolist[currentrestoid].restoname + '"');
        $('.star').css('fill', 'white').css('color', 'white');
    })
    //EDIT A REVIEW
    $(document).on('click', '.editreview', function () {
        currentrestoid = $(this).attr('id');
        tag = $(this).attr('tag');
        starcount = restolist[currentrestoid].reviews[tag].star;
        starrated = restolist[currentrestoid].reviews[tag].star;
        $('.editreview-modal-title').text('Update a review for "' + restolist[currentrestoid].restoname + '"');
        $('#ecustomer').val(restolist[currentrestoid].reviews[tag].customer);
        $('#edescription').val(restolist[currentrestoid].reviews[tag].description);

        $('#updatereview').attr('tag', tag);
        $('#updatereview').attr('tag2', currentrestoid);
        $('.star').css('fill', 'white').css('color', 'white');

        if (starrated == 1) {
            $('.star1').css('color', '#D03425').css('fill', '#D03425')
            $('.star1').siblings().css('fill', 'white').css('color', 'white')
        }

        if (starrated == 2) {
            $('.star2').css('color', '#D03425').css('fill', '#D03425')
            $('.star2').next().css('fill', '#D03425').css('color', '#D03425')
            $('.star2').next().next().css('color', '#D03425')
            $('.star2').prev().css('color', 'white')
            $('.star2').prev().prev().css('color', 'white')
            $('.star2').prev().prev().prev().css('color', 'white')
        }
        if (starrated == 3) {
            $('.star3').css('color', '#D03425').css('fill', '#D03425')
            $('.star3').next().css('fill', '#D03425').css('color', '#D03425')
            $('.star3').next().next().css('color', '#D03425')
            $('.star3').prev().css('color', 'white')
            $('.star3').prev().prev().css('color', 'white')
        }

        if (starrated == 4) {
            $('.star4').css('color', '#D03425').css('fill', '#D03425')
            $('.star4').next().css('fill', '#D03425').css('color', '#D03425')
            $('.star4').next().next().css('color', '#D03425')
            $('.star4').next().next().next().css('color', '#D03425')
            $('.star4').prev().css('color', 'white')
        }

        if (starrated == 5) {
            $('.star5').css('color', '#D03425').css('fill', '#D03425')
            $('.star5').siblings().css('fill', '#D03425').css('color', '#D03425')
        }
    })


    //UPDATE BUTTON - REVIEW
    $(document).on('click', '#updatereview', function () {
        currentresto = $(this).attr('tag2')
        tag = $(this).attr('tag')
        customer = $('#ecustomer').val();
        star = starcount;
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
        $('#updater').attr('disabled', true);

    })

    //STARS - RATING
    $('.rating').on('click', 'span', function () {
        starcount = $(this).attr('id')

        if ($(this).attr('id') == 1) {
            $(this).css('color', '#D03425').css('fill', '#D03425')
            $(this).siblings().css('fill', 'white').css('color', 'white')
        }
        if ($(this).attr('id') == 2) {
            $(this).css('color', '#D03425').css('fill', '#D03425')
            $(this).next().css('fill', '#D03425').css('color', '#D03425')
            $(this).next().next().css('color', '#D03425')
            $(this).prev().css('color', 'white')
            $(this).prev().prev().css('color', 'white')
            $(this).prev().prev().prev().css('color', 'white')
        }
        if ($(this).attr('id') == 3) {
            $(this).css('color', '#D03425').css('fill', '#D03425')
            $(this).next().css('fill', '#D03425').css('color', '#D03425')
            $(this).next().next().css('color', '#D03425')
            $(this).prev().css('color', 'white')
            $(this).prev().prev().css('color', 'white')
        }
        if ($(this).attr('id') == 4) {
            $(this).css('color', '#D03425').css('fill', '#D03425')
            $(this).next().css('fill', '#D03425').css('color', '#D03425')
            $(this).next().next().css('color', '#D03425')
            $(this).next().next().next().css('color', '#D03425')
            $(this).prev().css('color', 'white')
        }
        if ($(this).attr('id') == 5) {
            $(this).css('color', '#D03425').css('fill', '#D03425')
            $(this).siblings().css('fill', '#D03425').css('color', '#D03425')
        }
        // console.log(starcount)
    })

    // //OPTION HOVER
    // $('#restotable').on('mouseover', 'tr', function () {
    //     $(this).find('.options').animate({ right: '-5%' }, 'fast');
    //     $(this).mouseover(function () {
    //         $(this).children().children('.options').stop(true, false);
    //     })
    // })
    // $('#restotable').on('mouseout', 'tr', function () {
    //     $(this).children().children('.options').animate({ right: '-550%' }, 'fast');
    //     // $(this).children().children().css('right', '-600%');
    // })

    // $('#reviewtable').on('mouseover', 'tr', function () {
    //     $(this).find('.options').animate({ right: '0%' }, 'fast');
    //     $(this).mouseover(function () {
    //         $(this).children().children('.options').stop(true, false);
    //     })
    // })
    // $('#reviewtable').on('mouseout', 'tr', function () {
    //     $(this).children().children('.options').animate({ right: '-550%' }, 'fast');
    // })

    $('#register').attr('disabled', true);
    $('input').keyup(function () {
        if ($('#restoname').val().length != 0 && $('#cuisine').val().length != 0 && $('#loc').val().length != 0 && $('#owner').val().length != 0)
            $('#register').attr('disabled', false);
        else
            $('#register').attr('disabled', true);
    })
    $('#addreview').attr('disabled', true);
    $('input').keyup(function () {
        if ($('#customer').val().length != 0)
            $('#addreview').attr('disabled', false);
        else
            $('#addreview').attr('disabled', true);
    })
    $('#updater').attr('disabled', true);
    $('input').keyup(function () {
        if ($('#erestoname').val().length != 0 && $('#ecuisine').val().length != 0 && $('#eloc').val().length != 0 && $('#eowner').val().length != 0)
            $('#updater').attr('disabled', false);
        else
            $('#updater').attr('disabled', true);
    })
    //UPDATE DATA
    function updateTable() {
        $('#myTable').children().remove();
        loadTable();
        updateSort();
    }
    function updateReviewTable() {
        $('#myReviewTable').children().remove();
        loadReview();
        updateSort();
    }
    $(document).on('click', '.sorter', function () {
        $("#restotable").tablesorter({
            headers: {
                0: {
                    sorter: false
                }
            }
        });
        $("#reviewtable").tablesorter({
            headers: {
                0: {
                    sorter: false
                }
            }
        });
    })

    $('.review-div').hide();
    loadTable();
});
