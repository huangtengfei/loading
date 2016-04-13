
////////////////////////////  add and remove loading ////////////////////////////////

var loading = $('.loading'),
    container = $('.container');

if (supportCss3('animation')) {
    $('.css-loading').show();
} else {
    $('.jq-loading').show();
}

setTimeout(function(){
    $('.loading').hide();
    container.append('<p>我是异步加载的数据</p>');
}, 3000)

////////////////////////////////  jquery loading ////////////////////////////////////

// var delVal = 50;
// function autoMove() {
//     delVal++;
//     if (delVal > 400) {
//         delVal = 50;
//     }
//     $(".line").css("left", delVal);
// }
// setInterval(autoMove, 8);

////////////////////////////////  if support css3 ////////////////////////////////////

function supportCss3(style) {
    var prefix = ['webkit', 'Moz', 'ms', 'o'],
        i,
        humpString = [],
        htmlStyle = document.documentElement.style,
        _toHumb = function (string) {
            return string.replace(/-(\w)/g, function ($0, $1) {
                return $1.toUpperCase();
            });
        };

    for (i in prefix){
        humpString.push(_toHumb(prefix[i] + '-' + style));
    }
    
    humpString.push(_toHumb(style));

    for (i in humpString){
        if (humpString[i] in htmlStyle){
            return true;
        }
    }
    
    return false;
}
