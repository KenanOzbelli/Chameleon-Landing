const yarnContainer = document.querySelector('.yarn-colors-div');
const hueButton = yarnContainer.querySelector('.hueButton');
const hueTitle = yarnContainer.querySelector('#HueTitle');
const yarn_colors = yarnContainer.querySelectorAll('.yarn-changing-image');

let ChangedColor = false;

const changeColors = () => {
    ChangedColor = true;

    hueTitle.style.opacity = 0;

    //    Change the colors of the title
    setTimeout(() => {
        hueTitle.innerHTML = 'Hues with Sun';
        hueTitle.style.opacity = 1;
        hueTitle.style.color = 'rgb(220, 176, 0)';
    }, 1000);

    //    Change the colors of the yarns
    changeYarnColors();
}

const changeYarnColors = () => {
    yarn_colors.forEach((colors)=> {
        const yarnBall = colors.querySelector('img');

        const originalImage = yarnBall.src;
        const newImage = yarnBall.dataset.src;

        colors.style.opacity = 0;
        setTimeout(() => {
            yarnBall.src = newImage;
            yarnBall.dataset.src = originalImage;
            colors.style.opacity = 1;
            hueButton.removeAttribute('disabled');
        }, 1500)
     })
}
const unChangeColors = () => {
    ChangedColor = false;

    hueTitle.style.opacity = 0;

    //    Change the colors of the title
    setTimeout(() => {
        hueTitle.innerHTML = 'Hues without Color';
        hueTitle.style.opacity = 1;
        hueTitle.style.color = 'black';
    }, 1000);
    //    Change the colors of the yarns
    changeYarnColors();
}

 // add Button to active change colors
const ChangeClick = () => {

        hueButton.setAttribute('disabled', 'disabled');

        switch (ChangedColor) {
            case false: changeColors();
                break;
            case true: unChangeColors();
                break;
        }
} 

hueButton.addEventListener('click', ChangeClick)