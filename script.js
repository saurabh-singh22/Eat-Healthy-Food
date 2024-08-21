let plus = document.querySelector("#plus");
let reset = document.querySelector("#reset");
let count = 0;
let arr = ['<div style="width:100%;height:0;padding-bottom:56%;position:relative;margin-top:1%"><iframe src="https://giphy.com/embed/G96zgIcQn1L2xpmdxi" width="50%" height="20%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>', 
            '<div style="width:100%;height:0;padding-bottom:56%;position:relative;margin-top:1%"><iframe src="https://giphy.com/embed/YIvKui8iZMUNO" width="50%" height="20%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>', 
            '<div style="width:100%;height:0;padding-bottom:56%;position:relative;margin-top:1%"><iframe src="https://giphy.com/embed/gkXJ9WxXkWBxu" width="50%" height="20%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'];

plus.addEventListener("click", () => { // plus.addEventListener("click", () => {})
    count++;
    increasenum();
    playgif();
});

function increasenum(){
    document.querySelector(".count").innerText = count;
};

reset.addEventListener("click", () => {
    count = 0;
    document.querySelector(".count").innerText = count;
    resetgif();
});

function playgif(){
    let random = Math.floor(Math.random()*3); //2
    console.log(random);
    document.querySelector("#play").innerHTML = arr[random]; 
    setTimeout(function(){
        document.querySelector("#play").innerHTML = '';
    }, 5000);
};

function resetgif(){
    document.querySelector("#play").innerHTML = '<div style="width:100%;height:0;padding-bottom:56%;position:relative;margin-top:1%"><iframe src="https://giphy.com/embed/PrXTautlW8Sha" width="50%" height="20%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'; 
    setTimeout(function(){
        document.querySelector("#play").innerHTML = '';
    }, 5000);
}

