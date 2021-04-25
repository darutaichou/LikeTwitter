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

// ツイートボタンを押すとボタンの色が暗くなる
tweetButton.addEventListener("mousedown", ()=> {
    tweetButton.style.backgroundColor = '#4682b4';
})

// ツイートボタンを離すとボタンの色が戻る
tweetButton.addEventListener("mouseup", () => {
    tweetButton.style.backgroundColor = '';
})