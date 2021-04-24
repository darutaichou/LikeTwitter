const favoriteButtons = document.getElementsByClassName('favorite-button');

for (let index = 0; index < favoriteButtons.length; index++) {
    favoriteButtons[index].addEventListener("click", () => {
        console.log("Yes!");
    });
};