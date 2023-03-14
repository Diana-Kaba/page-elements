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

  // $("#flip").click(function () {
  //   alert("You clicked!");
  // });

  //   $("#hide").click(function () {
  //     $("#myid").hide();
  //   });

  //   $("#show").click(function () {
  //     $("#myid").show();
  //   });

  // $("#myid").hover(
  //   function () {
  //     alert("Вы над myid!");
  //   },
  //   function () {
  //     alert("Пока! Вы покидаете myid!");
  //   }
  // );

  //   $("#myid").remove();
});
