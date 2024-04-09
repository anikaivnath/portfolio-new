window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var fltbtn = document.getElementById('flt');
    let xyz=document.getElementById('get');

    if (scrollPosition>0) {
        fltbtn.style.display = 'block';
        xyz.innerText=scrollPosition;
    } else {
        fltbtn.style.display = 'none';
    }
});
