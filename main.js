const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */

const imgAltText = {
    'pic1.jpg': 'eyes',
    'pic2.jpg': 'marble',
    'pic3.jpg': 'flower',
    'pic4.jpg': 'painting',
    'pic5.jpg': 'butterfly'
};
/* Looping through images */
for (let imgname of imgFileNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imgname);
    newImage.setAttribute('alt', imgAltText[imgname]);
    thumbBar.appendChild(newImage);
    newImage.onclick = function (e) {
        displayedImage.setAttribute('src', e.target.getAttribute('src'));
    }
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});