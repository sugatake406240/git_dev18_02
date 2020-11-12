// jsを記述する際はここに記載していく
// 無名関数により、ＨＴＭＬ読み上げ後にＪＳを実行

$(function () {
// この中に書いていく
// 


let hum=0;
const GU    = 1;
const CHOKI = 2;
const PA    = 3;

let view1="";
let view2="";
let view3="";

// 
//  コンピューターの手と比較する関数
// 
function func_janken(){
if (hum == GU || hum == CHOKI || hum == PA) {

  // コンピュータの手を決める
  let com = Math.floor(Math.random() * 3) + 1;
  console.log("com=  "+com);


  // コンピュータの手の名前
  let comHandName = '';
  switch (com) {
    case GU:
      comHandName = 'グー';
      break;
    case CHOKI:
      comHandName = 'チョキ';
      break;
    case PA:
      comHandName = 'パー';
      break;
  }

  // 結果の判定
  let msgResult = '';
  if (hum === com) {
    msgResult = '結果はあいこでした。';
    view3='<img src="img/drow.png" width="400"> <div class="profile_wrapper flex" style="justify-content: space-around;"><a href="syahou.html"><img id="start_gif" src="img/woman.gif" alt=""></a></div> '; 

  } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
    msgResult = '勝ちました。';
    view3='<img src="img/win.png" width="200">'; 
  } else {
    msgResult = '負けました。';
    view3='<img src="img/lost.png" width="200">'; 
  }

  // 最終的な結果の表示
  msgResult = msgResult + 'コンピュータの出した手は「' + comHandName + '」でした';
  // alert(msgResult);

// あなたの選択表示
  if(hum == 1){
    view1='<img src="img/gu.png" width="150">'; 
  }else if(hum == 2){
    view1='<img src="img/cyoki.png" width="150">';
  }else if(hum == 3){
    view1='<img src="img/pa.png" width="150">';
  }
// コンピューターの選択表示
  if(com==1){
    view2='<img src="img/gu.png" width=150>';
  }else if(com == 2){
    view2='<img src="img/cyoki.png" width=150>';
  }else if(com == 3){
    view2='<img src="img/pa.png" width=150>';
  }


  $("#echo1").html(view1);
  $("#echo2").html(view2);
  $("#echo3").html(view3);

}else{
  alert("選択が間違っています");
}

};






// あなたの選択　検出

$("#btn_g").on("click",function(e){
  hum=1;
  console.log("hum =  "+hum);
  // alert("選んだのはグー");

  func_janken();
 }
);


$("#btn_c").on("click",function(e){
  hum=2;
  console.log("hum =  "+hum);
  // alert("選んだのはチョキ");

  func_janken();     
 }
);

$("#btn_p").on("click",function(e){
  hum=3;
  console.log("hum=  "+hum);
  // alert("選んだのはパー");

  func_janken();      
 }

);



  

  // この上に書く
});
