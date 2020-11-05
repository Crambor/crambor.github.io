$('.fTab').on('click', function(){
    $(this).toggleClass('active');
    let text = $('.fTab').text()
    if (text === "Show Author Details") $('.fTab').text("Hide Author Details")
    else $('.fTab').text("Show Author Details")
});