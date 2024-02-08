// URLを取得
let url = new URL(window.location.href);

// URLSearchParamsオブジェクトを取得
let params = url.searchParams;

document.getElementById("time_result").innerHTML = "タイム：" + params.get('time').toString();

var b = document.getElementById('btn');

const audio = new Audio('music.mp3');
// イベントハンドラ
b.addEventListener('click', function(){
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}, false);

// クリックイベントを発火
b.click();