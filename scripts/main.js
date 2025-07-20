// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    menuBtn.classList.add('mobile-menu-btn');
    document.querySelector('.header').appendChild(menuBtn);
    
    menuBtn.addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('show');
    });
});
