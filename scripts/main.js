$("document").ready(function () {
  $("#navigation ul li").hide().slideDown(1000);
  $("#hello").hide().fadeIn(850);
  $(".pInfo, .skillContainer, #hideAll, #showAll, #projects").hide();

  $("#aboutMeButton").on("click", function () {
    $(".skillContainer, #hello, #hideAll").fadeOut();
    retextillate("#pProjects", "none", "fadeOutDown", "out");
    $(".aboutMeP, .pContainer").show();
    $("#projects").hide();
    retextillate(".aboutMeP", "bounceIn", "none", "in");
  });
  $("#projectsButton").on("click", function () {
    $("#hello, .skillContainer").fadeOut();
    retextillate(".aboutMeP", "none", "fadeOutDown", "out");
    $("#pProjects, #projects, .pInfo, .projectsTab").show();
    $("#hideAll").slideDown();
    retextillate(
      "#pProjects, .projectsH, .projectsP",
      "bounceIn",
      "none",
      "in"
    );
  });
  $("#skillsButton").on("click", function () {
    $("#hello, #hideAll").fadeOut();
    $(".pContainer").hide();
    retextillate(".pInfo, .projectsH", "none", "fadeOutDown", "out");
    $(".skillContainer").slideDown();
  });

  $("#hideAll").on("click", function () {
    $("header, #main").fadeOut("slow");
    $("#showAll").fadeIn(1200);
  });

  $("#showAll").on("click", function () {
    $(this).fadeOut(300);
    $("header, #main").fadeIn("slow");
  });

  let tabs = $(".projectsTab");
  for (let i = 0; i < tabs.length; i++) {
    $(tabs[i]).append(
      "<div id='buttonHandler'><div class='indexDots'></div><button class='previousB'><</button><button class='nextB'>></button></div>"
    );
    $(tabs[i]).css({
      left: i * 100 + "%",
    });
  }
  for (let i = 0; i < tabs.length; i++) {
    $(".indexDots").append("<span class='indexDot' numberId=" + i + "></span>");
  }

  let indexDots = $(".indexDot");

  $(indexDots[0]).css("background", "green");

  let currentPosition = 0;

  indexDots.on("click", function (event) {
    currentPosition = -Math.abs(event.target.getAttribute("numberid"));
    for (var i = 0; i < tabs.length; i++) {
      $(tabs[i]).animate({
        left: (currentPosition + i) * 200 + "%",
      });
    }
    $(indexDots).css("background", "transparent");
    $(".indexDot[numberid='" + Math.abs(currentPosition) + "']").css(
      "background",
      "#008000"
    );
  });

  $(".nextB").on("click", function () {
    currentPosition--;
    if (currentPosition <= -3) {
      currentPosition = -3;
    }
    for (var i = 0; i < tabs.length; i++) {
      $(tabs[i]).animate({
        left: (currentPosition + i) * 200 + "%",
      });
    }
    $(indexDots).css("background", "transparent");
    $(".indexDot[numberid='" + Math.abs(currentPosition) + "']").css(
      "background",
      "#008000"
    );
  });

  $(".previousB").on("click", function () {
    currentPosition++;
    if (currentPosition >= 0) {
      currentPosition = 0;
    }
    for (var i = 0; i < tabs.length; i++) {
      $(tabs[i]).animate({
        left: (currentPosition + i) * 200 + "%",
      });
    }
    $(indexDots).css("background", "transparent");
    $(".indexDot[numberid='" + Math.abs(currentPosition) + "']").css(
      "background",
      "#008000"
    );
  });
});

function retextillate(element, in_effect = "", out_effect = "", type) {
  $(element).textillate({
    loop: true,
    autoStart: false,
    in: {
      effect: in_effect,
      delay: 0.7,
      shuffle: true,
    },
    out: {
      effect: out_effect,
      reverse: true,
      delay: 0.5,
      shuffle: true,
      callback: function () {
        $(element).css("opacity", 0);
      },
    },
  });

  if (type == "in") {
    $(element).textillate("in");
    $(element).css("opacity", 1);
  } else if (type == "out") {
    $(element).textillate("out");
  } else if (type == "both") {
    $(element).textillate("in");
    setTimeout(function () {
      $(element).textillate("out");
    }, 1000);
  }
}
