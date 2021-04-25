// ツイートボタン
const tweetButton = document.getElementById('tweet-button');
// お気に入りボタン
const favoriteButtons = document.getElementsByClassName('favorite-button');
// お気に入りボタンの色フラグ
let pinkOrGray = "gray";

// お気に入りボタンを押すとボタンの色が赤くなる
// お気に入りボタンをもう一度押すとボタンの色がグレーに戻る
for (let index = 0; index < favoriteButtons.length; index++) {
    const favoriteButton = favoriteButtons[index];
    favoriteButton.addEventListener("click", () => {
        console.log(pinkOrGray);
        switch (pinkOrGray) {
            case "gray":
                favoriteButton.style.color = '#ff69b4';
                favoriteButton.style.borderColor = '#ff69b4';
                pinkOrGray = "pink";
                break;
            case "pink":
                favoriteButton.style.color = '#c0c0c0';
                favoriteButton.style.borderColor = '#c0c0c0';
                pinkOrGray = "gray";
                break;
        }
    });
};

// ツイートボタンを押すとボタンの色が暗くなる
tweetButton.addEventListener("mousedown", () => {
    tweetButton.style.backgroundColor = '#4682b4';
})

// ツイートボタンを離すとボタンの色が戻る
tweetButton.addEventListener("mouseup", () => {
    tweetButton.style.backgroundColor = '';
})