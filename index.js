const favoriteButtons = document.getElementsByClassName('favorite-button');

for (let index = 0; index < favoriteButtons.length; index++) {
    favoriteButtons[index].addEventListener("click", () => {
        console.log("Favorite!");
        favoriteButtons[index].style.color = '#ff1493';
        favoriteButtons[index].style.border-color = '#ff69b4';
    });
};

