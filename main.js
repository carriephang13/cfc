var playing = 0;
function playMusic(){
  if (playing == 1){
    $("#song").trigger("pause");
    $(".play").addClass("hidden")
    $(".pause").removeClass("hidden")
  }
  if (playing == 0){
    $("#song").trigger("play");
    $(".pause").addClass("hidden")
    $(".play").removeClass("hidden")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playBom").click(playMusic)

function playMusic1(){
  if (playing == 1){
    $("#dimple").trigger("pause");
    $(".play").addClass("hidden")
    $(".pause").removeClass("hidden")
  }
  if (playing == 0){
    $("#dimple").trigger("play");
    $(".pause").addClass("hidden")
    $(".play").removeClass("hidden")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playDimple").click(playMusic1)

function playMusic2(){
  if (playing == 1){
    $("#dna").trigger("pause");
    $(".play").addClass("hidden")
    $(".pause").removeClass("hidden")
  }
  if (playing == 0){
    $("#dna").trigger("play");
    $(".pause").addClass("hidden")
    $(".play").removeClass("hidden")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playDna").click(playMusic2)

function playMusic3(){
  if (playing == 1){
    $("#gogo").trigger("pause");
    $(".play").addClass("hidden")
    $(".pause").removeClass("hidden")
  }
  if (playing == 0){
    $("#gogo").trigger("play");
    $(".pause").addClass("hidden")
    $(".play").removeClass("hidden")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playGogo").click(playMusic3)

function playMusic4(){
  if (playing == 1){
    $("#her").trigger("pause");
    $(".play").addClass("hidden")
    $(".pause").removeClass("hidden")
  }
  if (playing == 0){
    $("#her").trigger("play");
    $(".pause").addClass("hidden")
    $(".play").removeClass("hidden")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playHer").click(playMusic4)

function playMusic5(){
  if (playing == 1){
    $("#md").trigger("pause");
    $(".play").addClass("hidden")
    $(".pause").removeClass("hidden")
  }
  if (playing == 0){
    $("#md").trigger("play");
    $(".pause").addClass("hidden")
    $(".play").removeClass("hidden")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playMd").click(playMusic5)

function playMusic6(){
  if (playing == 1){
    $("#piedPiper").trigger("pause");
    $(".play").addClass("hidden")
    $(".pause").removeClass("hidden")
  }
  if (playing == 0){
    $("#piedPiper").trigger("play");
    $(".pause").addClass("hidden")
    $(".play").removeClass("hidden")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playPiedPiper").click(playMusic6)

function playMusic7(){
  if (playing == 1){
    $("#serendipity").trigger("pause");
    $(".play").addClass("hidden")
    $(".pause").removeClass("hidden")
  }
  if (playing == 0){
    $("#serendipity").trigger("play");
    $(".pause").addClass("hidden")
    $(".play").removeClass("hidden")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playSerendipity").click(playMusic7)

function playMusic8(){
  if (playing == 1){
    $("#skit").trigger("pause");
    $(".play").addClass("hidden")
    $(".pause").removeClass("hidden")
  }
  if (playing == 0){
    $("#skit").trigger("play");
    $(".pause").addClass("hidden")
    $(".play").removeClass("hidden")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playSkit").click(playMusic8)
