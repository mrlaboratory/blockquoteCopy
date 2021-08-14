// $(".postdiv blockquote").after().on("click",function(){
//  alert("worked");
// })

// $(".postdiv blockquote").after(function() {
//     alert("worked");
//   });
 $('head').append('<link rel="stylesheet" type="text/css" href="https://mrlaboratory.github.io/blockquoteCopy/style.css">');
var g = $(".post-outer blockquote");
for (var i = 0, len = g.length; i < len; i++)
{
 (function(index){
 $(".post-outer blockquote:eq("+i+")").after().on("click",function(){
    var texttt = $(".post-outer blockquote:eq("+index+")").text();
    navigator.clipboard.writeText(texttt);
    $(".post-outer blockquote:eq("+index+")").after("Copied");
        })
 
    })(i);
}


