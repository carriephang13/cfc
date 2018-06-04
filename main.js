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
