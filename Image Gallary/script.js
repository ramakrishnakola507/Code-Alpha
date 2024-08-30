function showCategory(category) {
    var galleries = document.getElementsByClassName('gallery');
    
    for (var i = 0; i < galleries.length; i++) {
        galleries[i].style.display = 'none';
    }

    document.getElementById(category).style.display = 'flex';
}
