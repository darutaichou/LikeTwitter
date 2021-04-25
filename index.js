// --- 変数定義 ---

// ツイートボタン
const tweetButton = document.getElementById('tweet-button');
// ツイートボックス
const tweetBox = document.getElementById('tweet-box')
console.log(tweetBox);
// ツイートボックスのデフォルトの高さ
let tweetBoxHeight = tweetBox.style.height;
// ツイート文を入れるテキストエリア
const tweetTextArea = document.getElementById('tweet-textbox');
// テキストエリアのデフォルトの高さを取得
let tweetTextAreaHeight = tweetTextArea.clientHeight;
// お気に入りボタン
const favoriteButtons = document.getElementsByClassName('favorite-button');
// お気に入りボタンの色フラグ
let pinkOrGray = "gray";


// --- 主処理 ---

// ツイートボタンを押すとボタンの色が暗くなる
tweetButton.addEventListener("mousedown", () => {
    tweetButton.style.backgroundColor = '#4682b4';
})

// ツイートボタンを離すとボタンの色が戻る
tweetButton.addEventListener("mouseup", () => {
    tweetButton.style.backgroundColor = '';
})

// ツイート分を入れるテキストエリアを可変長にする
tweetTextArea.addEventListener('input', () => {
    // textareaの要素の高さを設定
    tweetTextArea.style.height = tweetTextAreaHeight + 'px';
    // textareaの入力内容の高さを取得
    let scrollHeight = tweetTextArea.scrollHeight;
    // textareaの高さに入力内容の高さを設定
    tweetTextArea.style.height = scrollHeight + 'px';

    // textareaのでデフォルトと設定後の差分を計算
    const difference = scrollHeight -  tweetTextAreaHeight;
    // ツイートボックスの高さを設定
    tweetBox.style.height = tweetBoxHeight + difference;
})

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