$('li').dblclick(function () {
    $.ajax({
        type: "patch",
        url: "/deleteperma",
        data: $(this).text().trim()
    });
});

$('li').mouseup(function () {
    if ($(this).hasClass('strike') == false) {
        $(this).addClass('strike');
        removeFromList($(this).text().trim());

    }
    else {
        $(this).removeClass('strike');
        backToList($(this).text().trim());
    }

});

function removeFromList(item) {
    $.ajax({
        type: "post",
        url: "/delete",
        data: item
    });
}

function backToList(item) {
    $.ajax({
        type: "post",
        url: "/add",
        data: item
    });
}
