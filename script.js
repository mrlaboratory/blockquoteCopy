$('head').append('<link rel="stylesheet" type="text/css" href="https://mrlaboratory.github.io/blockquoteCopy/style.css">');
var g = $(".post blockquote");
for (var i = 0, len = g.length; i < len; i++)
{
 (function(index){
 $(".post blockquote:eq("+i+")").after().on("click",function(){
    var texttt = $(".post blockquote:eq("+index+")").text();
    navigator.clipboard.writeText(texttt);
    $(".post blockquote:eq("+index+")").after("Copied");
        })
 
    })(i);
}
