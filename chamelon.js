const yarnContainer = document.querySelector('.yarn-colors-div');
const hueButton = yarnContainer.querySelector('.hueButton');
const hueTitle = yarnContainer.querySelector('#HueTitle');
const yarn_colors = yarnContainer.querySelectorAll('.yarn-changing-image');

let ChangedColor = false;

yarn_colors.forEach((yrnImg) => {
    yrnImg.addEventListener('mouseenter', () => {
            const yarnBall = yrnImg.querySelector('img');

                    const originalImage = yarnBall.src;
                    const newImage = yarnBall.dataset.src;
            
                    yrnImg.style.opacity = 0;
                    setTimeout(() => {
                        yarnBall.src = newImage;
                        yarnBall.dataset.src = originalImage;
                        yrnImg.style.opacity = 1;
                    }, 00)
    })
    yrnImg.addEventListener('mouseleave', () => {
        const yarnBall = yrnImg.querySelector('img');

                const originalImage = yarnBall.src;
                const newImage = yarnBall.dataset.src;
        
                yrnImg.style.opacity = 0;
                setTimeout(() => {
                    yarnBall.src = newImage;
                    yarnBall.dataset.src = originalImage;
                    yrnImg.style.opacity = 1;
                }, 00)
    })
})

console.log('Updated Version');