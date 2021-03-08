// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollTopButton()};

function scrollTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goTopBtn").style.display = "block";
  } else {
    document.getElementById("goTopBtn").style.display = "none";
  }
}

//Smooth scroll to the top of the document
function smoothScrollTop(){
    var timer  = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    });
}

function tocScroll() {
    var target = decodeURI(this.hash.replace(/^#/, ''));
    $('html,body').animate({scrollTop: $(":header[id='" + target + "']").offset().top - 70}, 300);
}

var tocLinks = document.querySelectorAll('.toc-link');
    for( var i in tocLinks){
        tocLinks[i].onclick = tocScroll;
    }