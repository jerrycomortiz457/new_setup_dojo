$(document).ready(function () {
    var restaurant =
    {
        restaurantName: restaurant_name,
        cuisine: cuisine,
        location: location,
        owner: owner
        // avg_rating: avg_rating
    };
    // var restaurant = {
    //     restaurantName: restaurant_name,
    //     cuisine: cuisine,
    //     location: loc,
    //     ownerName: owner_name,
    //     avgRating: avg_rating
    // };
    // var myJSON = JSON.stringify(restaurant);
    // console.log(restaurant);
    // console.log(myJSON);
    $('#register').click(function () {
        var arr = [];
        var restaurant_name = $('#restaurant_name').val();
        var cuisine = $('#cuisine').val();
        var location = $('#loc').val();
        var owner = $('#owner').val();
        // var avg_rating = $('#avg_rating').val();
        // restaurant =[
        //     {
        //         restaurantName: restaurant_name,
        //         cuisine: cuisine,
        //         location: location,
        //         owner: owner,
        //         avg_rating: avg_rating
        //     }];
        var appender = "<tr><th>" + restaurant_name + "</th><td>" + cuisine + "</td><td>" + location + "</td><td>" + owner + "</td><td>" + "4/10" + "</td></tr>";
        console.log(restaurant_name);
        console.log(cuisine);
        console.log(location);
        console.log(owner);
        // console.log(restaurant_name);
        $('tbody').append(appender);

        var myJSON = JSON.stringify(restaurant);
        // console.log(restaurant);
        // console.log(myJSON);
        // console.log(restaurant);
        // $('#jsonupdater').val(myJSON);
        // localStorage.setItem('restaurant', myJSON);


        var students = [];
        var student1 = myJSON;
        students.push(student1);
        localStorage.setItem("students", JSON.stringify(students));
        var stored = JSON.parse(localStorage.getItem("students"));
        var student2 = myJSON;
        stored.push(student2);
        localStorage.setItem("students", JSON.stringify(stored));
        var result = JSON.parse(localStorage.getItem("students"));
        console.log(result);

    });
    console.log("outside", restaurant);


    // function register(filename, text) {
    //     var obj = document.createElement('a');
    //     obj.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
    //     obj.setAttribute('download', filename);

    //     obj.style.display = 'none';
    //     document.body.appendChild(obj);

    //     obj.click();
    //     document.body.removeChild(obj);
    // }


});