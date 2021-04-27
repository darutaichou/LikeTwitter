// --- 変数定義 ---

// ツイート一覧
const tweetList = document.getElementById('tweet-list');
// ツイート文を入れるテキストエリア
const tweetTextBox = document.getElementById('tweet-textbox');
// テキストエリアのデフォルトの高さを取得
let tweetTextBoxHeight = tweetTextBox.clientHeight;
// ツイートボタン
const tweetButton = document.getElementById('tweet-button');
// お気に入りボタン
const favoriteButtons = document.getElementsByClassName('favorite-button');
// お気に入りボタンの色フラグ
let pinkOrGray = "gray";


// ##### ツイート処理 #####

// --- 関数定義 ---

// ボタンを活性化する
function acitivateButton(button) {
    button.disabled = false;
}

// ボタンを非活性化する
function deacitivateButton(button) {
    button.disabled = true;
}

// --- メイン処理 ---

// ツイートボックス内のツイート分が0文字の時にボタンを非活性化する
if (tweetTextBox.value.length === 0) {
    deacitivateButton(tweetButton);
    tweetButton.style.backgroundColor = '#87ceeb';
    tweetButton.style.border = '#87ceeb';
    tweetButton.style.color = '#e0ffff';
}

// ツイート文を入れるテキストエリアを可変長にする
tweetTextBox.addEventListener('input', () => {
    // textareaの要素の高さを設定
    tweetTextBox.style.height = tweetTextBoxHeight + 'px';
    // textareaの入力内容の高さを取得
    let scrollHeight = tweetTextBox.scrollHeight;
    // textareaの高さに入力内容の高さを設定
    tweetTextBox.style.height = scrollHeight + 'px';

    // ツイート文が140文字より多い時にボタンを非活性化する
    if (tweetTextBox.value.length > 141 || tweetTextBox.value.length === 0) {
        deacitivateButton(tweetButton);
        tweetButton.style.backgroundColor = '#87ceeb';
        tweetButton.style.border = '#87ceeb';
        tweetButton.style.color = '#e0ffff';
    } else {
        acitivateButton(tweetButton);
        tweetButton.style.backgroundColor = '';
        tweetButton.style.border = '';
        tweetButton.style.color = '';
    }
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
    // 要素作成：名前ラベル、ツイートテキスト、お気に入りボタン、ツイート
    const nameLabel = document.createElement("label");
    const tweetTexts = document.createElement("div");
    const addedFavoriteButton = document.createElement("button");
    const tweet = document.createElement("div");
    // 名前ラベル
    nameLabel.innerHTML = "風吹けば名無し";
    nameLabel.classList.add("name-label");
    nameLabel.id = "name-label";
    tweet.appendChild(nameLabel);
    // ツイートテキスト
    const tweetTextBoxNode = tweetTextBox.value;
    tweetTexts.value = tweetTextBoxNode;
    tweetTexts.innerHTML = tweetTexts.value;
    tweetTexts.classList.add("tweet-texts");
    tweetTexts.id="tweet-texts";
    // お気に入りボタン
    const favoriteText = document.createTextNode("ふぁぼ");
    addedFavoriteButton.appendChild(favoriteText);
    addedFavoriteButton.id = "favorite-button";
    addedFavoriteButton.classList.add("favorite-button");
    tweet.appendChild(tweetTexts);
    // ツイート
    tweet.appendChild(addedFavoriteButton);
    tweet.id = "tweet";
    tweet.classList.add("tweet")
    tweetList.prepend(tweet);
    // ツイートボックスの中身を空にする
    tweetTextBox.value = '';
})


// ##### お気に入り処理 #####

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