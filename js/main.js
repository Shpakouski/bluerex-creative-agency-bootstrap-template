$('#videoPlayBtn').on('click', function (e) {
    e.preventDefault();
    $("#videoPlayer")[0].src += "?autoplay=1";
    setTimeout(function () {
        $('#videoPlayBtn').hide();
    }, 1000);

})