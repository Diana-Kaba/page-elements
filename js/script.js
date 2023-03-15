$(function () {
  $("header h1")
    .css("color", "white")
    .css("background", "black")
    .css("text-align", "center");
  $("header p").css("color", "white").css("background", "black");
  $(".wrap").css("color", "black");
  $(".chat, .dalle").css("color", "green");
  $("#flip").click(function () {
    $("#panel").slideDown();
  });

  $("#flip2").click(function () {
    $("#panel2").slideDown(5000);
  });
  $("#stop").click(function () {
    $("#panel2").stop();
  });

  $("#hide").click(function () {
    $(".child").toggle();
  });

  $("#center2").click(function () {
    $(".dalle").css("color", "coral").css("text-align", "center");
    $("#center2").css("visibility", "hidden");
  });
  $("#center").click(function () {
    $(".chat").css("text-align", "center");
    $("#center").css("visibility", "hidden");
  });

  $("#read").click(function () {
    $("#panel").text("Thank you for watching!");
  });
  $("#read2").click(function () {
    $("#panel2").text("Thank you for watching!");
  });

  $(document).ready(function () {
    $("#btn-anim").click(function () {
      $("#animate").animate({ left: "250px", height: "105px", width: "260px", opacity: "0.5", fontSize: "2.5em" });
    });
  });

  $("#show-menu").click(function () {
    $("#menu").slideToggle();
  });
});
