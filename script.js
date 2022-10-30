$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  $("#btn12").click(function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const project = document.getElementById("project").value;
    const msg = document.getElementById("msg").value;
    Email.send({
      SecureToken: "d6bbfc6f-fd29-4a8a-b982-042d86a061ac",
      To: "himanshuramavat07@gmail.com",
      From: "hr20072001@gmail.com",
      Subject: "Contact Us:- Portfolio",
      Body: [
        {
          Name: name,
          Email: email,
          Project: project,
          Message: msg,
        },
      ],
    })
      .then((message) =>
        alert("Thank you for contacting me.  \n I will get back to you soon ")
      )
      .then(() => window.location.reload());
  });

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});
