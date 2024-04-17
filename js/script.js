document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    var navList = document.getElementById('nav-list');
    if (navList.style.display === 'block') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
});
