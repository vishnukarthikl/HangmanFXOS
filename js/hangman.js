$("body").ready(function () {
    var movie = [
            {name: "Broken City", category: "war"},
            {name: "Gangster Squad", category: "action"},
            {name: "Silver Linings Playbook", category: "humour"},
            {name: "Game of Thrones", category: "book"}
        ]
        ;
    var category = [];
    category[0] = movie[0].category;
    for (var i = 1; i < movie.length; i++) {
        for (var j = 0; j < category.length; j++) {
            if (movie[i].category != category[j]) {
                category.push(movie[i].category);
                break;
            }
        }
    }
    for (var i = 0; i < category.length; i++) {
        tag = "<span class='category " + category[i] + " ' value='" + category[i] + "'>&nbsp" + category[i] + "</span>";
        $('#categoryList').append(tag);
    }
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var checkArray = "AEIOU ";
    var tag;


    for (var i = 0; i < letters.length; i++) {
        if (checkArray.indexOf(letters[i]) >= 0) {
            tag = "<span class='letters " + letters[i] + " strike invalid' value='" + letters[i] + "'>&nbsp" + letters[i] + "</span>";
        }
        else {
            tag = "<span class='letters " + letters[i] + "' value='" + letters[i] + "'>&nbsp" + letters[i] + "</span>";
        }
        $('#lettersContainer').append(tag);
    }

//var randomMovieNumber = Math.random() * 10 % movie.length;

    var randomMovieNumber;

    function constructTag(letterToCheck) {

        var value = "_";
        if (checkArray.indexOf(letterToCheck) >= 0) {
            value = letterToCheck;
        }
        return "<span class = 'disp " + letterToCheck + "' value = '" + letterToCheck + "'>&nbsp;" + value + "</span>";
    }


    $(".letters").click(function () {

        var clickedLetter = $(this).attr("value");
        for (var i = 0; i < movie[randomMovieNumber].name.length; i++) {
            var toSearch = "#wordContainer > ." + clickedLetter;
            var str = "#lettersContainer > ." + clickedLetter;
            $(str).addClass("strike").addClass("clicked");

            if ($(toSearch).length <= 0) {

            }
            else {
                $(toSearch).html("&nbsp" + clickedLetter);
            }
        }

    });

    $(".category").click(function () {

        var clickedCategory = $(this).attr("value");
        while(true)
        {
            randomMovieNumber=Math.floor((Math.random() * movie.length - 1 ) + 1)
            if(movie[randomMovieNumber].category==clickedCategory)
            {
                for (var i = 0; i < movie[randomMovieNumber].name.length; i++) {
                    $('#wordContainer').append(constructTag(movie[randomMovieNumber].name[i].toUpperCase()));
                }

                break;
            }
        }

    });
})
;
