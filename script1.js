const combined = document.querySelector('banner slider'); 
const greaterButton = document.querySelector('greater-button'); 
const lesserButton = document.querySelector('smaller-button');

greaterButton.addEventListener('click', () => {
    combined.style.transform= 'perspective(1000px) rotateX(0deg) rotateY(36deg)';
});

lesserButton.addEventListener('click', () => {
    combined.style.transform = 'transform: perspective(1000px) rotateX(0deg) rotateY(-36deg)';
});
