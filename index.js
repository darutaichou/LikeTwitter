// お気に入りボタン
const favoriteButtons = document.getElementsByClassName('favorite-button');
// ツイートボタン
const tweetButton = document.getElementById('tweet-button');

// お気に入りボタンを押すとボタンが赤くなる効果
// idを "favorite-button-pink" に変更
for (let index = 0; index < favoriteButtons.length; index++) {
    const favoriteButton = favoriteButtons[index];
    if (favoriteButton.id == 'favorite-button' || favoriteButton.id == 'favorite-button-gray') {
        favoriteButton.addEventListener("click", () => {
            console.log(favoriteButton.style.color);
            favoriteButton.style.color = '#ff69b4';
            favoriteButton.style.borderColor = '#ff69b4';
            favoriteButton.id = 'favorite-button-pink'
            console.log(favoriteButton.style.color);
        });
    }
};

// お気に入りボタンをもう一度押すとボタンの色が戻る
// idを "favorite-button-gray" に変更
for (let index = 0; index < favoriteButtons.length; index++) {
    const favoriteButton = favoriteButtons[index];
    if (favoriteButton.style.color == 'rgb(255, 105, 180)') {
        favoriteButton.addEventListener("click", () => {
            console.log("OK");
            favoriteButton.style.color = '#c0c0c0';
            favoriteButton.style.borderColor = '#c0c0c0';
            favoriteButton.id = 'favorite-button-gray'
            console.log(favoriteButton.id);
        });
    }
}

// ツイートボタンを押すとボタンの色が暗くなる
tweetButton.addEventListener("mousedown", () => {
    tweetButton.style.backgroundColor = '#4682b4';
})

// ツイートボタンを離すとボタンの色が戻る
tweetButton.addEventListener("mouseup", () => {
    tweetButton.style.backgroundColor = '';
})