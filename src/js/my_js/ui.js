// Burger button
$('.burger_btn .btn_wraper').on('click', function() {
    $(this).toggleClass('active');
    $('.main_menu').toggleClass('mobile_hide');
});

var str = $('.trusts').text();
var newStr = '';
for(var i=0; i<str.length; i++) {
    if(str.length > 3 && i == 0) {
        newStr += '<span class="mr">' + str[i] + '</span>';
        continue;
    }
    newStr += '<span>' + str[i] + '</span>';    
}

$('.trusts').html(newStr);