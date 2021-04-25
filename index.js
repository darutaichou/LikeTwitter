// お気に入りボタン
const favoriteButtons = document.getElementsByClassName('favorite-button');
// ツイートボタン
const tweetButton = document.getElementById('tweet-button');
console.log(tweetButton);

// お気に入りボタンを押すとボタンが赤くなる効果
for (let index = 0; index < favoriteButtons.length; index++) {
    favoriteButtons[index].addEventListener("click", () => {
        console.log("Favorite!");
        favoriteButtons[index].style.color = '#ff69b4';
        favoriteButtons[index].style.border = 'solid 1px #ff69b4';
    });
};

// お気に入りボタンをもう一度押すとボタンの色が戻る
for (let index = 0; index < favoriteButtons.length; index++) {
    favoriteButtons[index].addEventListener("click", () => {
        console.log("Favorite!");
        favoriteButtons[index].style.color = '';
        favoriteButtons[index].style.border = '';
    });
};

// ツイートボタンを押すとボタンの色が暗くなる
tweetButton.addEventListener("mousedown", ()=> {
    tweetButton.style.backgroundColor = '#4682b4';
})

// ツイートボタンを離すとボタンの色が戻る
tweetButton.addEventListener("mouseup", () => {
    tweetButton.style.backgroundColor = '';
})