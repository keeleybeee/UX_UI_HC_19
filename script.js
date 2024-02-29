
const hero = document.getElementById('hero');
const profileImg = document.getElementById('profileImg');
const heroContent = document.getElementById('heroContent');


hero.addEventListener('mouseenter', function() {
    profileImg.style.transform = 'scale(0.8)'; 
    heroContent.style.opacity = '1'; 
});

hero.addEventListener('mouseleave', function() {
    profileImg.style.transform = 'scale(1)'; 
    heroContent.style.opacity = '0'; 
});
