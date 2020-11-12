// jsを記述する際はここに記載していく


$(function () {
    // この中に書いていく

    $(".button").on("click", function () {
        // $(".button").css("color", "red");
        // $(".kekka").html("押されましたよ");
    
    var random = Math.floor(Math.random() * 5);
    console.log("数値＝",random, "   便利な機能を使ってランダムな数字が出ます");
    
    if (random == 0) {
        $(".kakka").html("大吉");
    }else if(random == 1){
        $(".kakka").html("中吉");
    }else if(random == 2){
        $(".kakka").html("小吉");
    }else if(random == 3){
        $(".kakka").html("吉");
    }else if(random == 4){
        $(".kakka").html("凶");
    }

 // この下は消さない
});

    // この上に書く
  });










