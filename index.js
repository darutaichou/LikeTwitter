// --- 変数定義 ---

// ツイート一覧
const tweetList = document.getElementById('tweet-list');
// ツイート文を入れるテキストエリア
const tweetTextArea = document.getElementById('tweet-textbox');
// テキストエリアのデフォルトの高さを取得
let tweetTextAreaHeight = tweetTextArea.clientHeight;
// ツイートボタン
const tweetButton = document.getElementById('tweet-button');
// お気に入りボタン
const favoriteButtons = document.getElementsByClassName('favorite-button');
// お気に入りボタンの色フラグ
let pinkOrGray = "gray";


// --- ツイート処理 ---

// ツイート分を入れるテキストエリアを可変長にする
tweetTextArea.addEventListener('input', () => {
    // textareaの要素の高さを設定
    tweetTextArea.style.height = tweetTextAreaHeight + 'px';
    // textareaの入力内容の高さを取得
    let scrollHeight = tweetTextArea.scrollHeight;
    // textareaの高さに入力内容の高さを設定
    tweetTextArea.style.height = scrollHeight + 'px';
})

// ツイートボタンを押すとボタンの色が暗くなる
tweetButton.addEventListener("mousedown", () => {
    tweetButton.style.backgroundColor = '#4682b4';
})

// ツイートボタンを離すとボタンの色が戻る
tweetButton.addEventListener("mouseup", () => {
    tweetButton.style.backgroundColor = '';
})

// ツイートを投稿する
// ツイートボタンを押すとツイート一覧にツイートが増える
tweetButton.addEventListener("click", () => {
    // テストテキスト
    const tweetTexts = document.createElement("div");
    const testTexts = document.createTextNode("てすと");
    tweetTexts.appendChild(testTexts);
    tweetTexts.classList.add("tweet-texts");
    tweetTexts.id="tweet-texts";
    // お気に入りボタン
    const addedFavoriteButton = document.createElement("button");
    const favoriteText = document.createTextNode("ふぁぼ");
    addedFavoriteButton.appendChild(favoriteText);
    addedFavoriteButton.id = "favorite-button";
    addedFavoriteButton.classList.add("favorite-button");
    tweet.appendChild(tweetTexts);
    // ツイート
    const tweet = document.createElement("div");
    tweet.appendChild(addedFavoriteButton);
    tweet.id = "tweet";
    tweet.classList.add("tweet")
    tweetList.appendChild(tweet);
})


// --- お気に入り処理 ---

// お気に入りボタンを押すとボタンの色が赤くなる
// お気に入りボタンをもう一度押すとボタンの色がグレーに戻る
// ツイートボタンが押されるたびにこの処理を読み込む
tweetButton.addEventListener("click", () => {
    for (let index = 0; index < favoriteButtons.length; index++) {
        const favoriteButton = favoriteButtons[index];
        favoriteButton.addEventListener("click", () => {
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
});