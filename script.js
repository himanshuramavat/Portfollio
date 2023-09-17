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

  $('#btn12').on("click", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const project = document.getElementById("project").value;
    const msg = document.getElementById("msg").value;
    Email.send({
      SecureToken: "f8241ff9-e843-4a78-b890-b0126bc07cf6",
      To: "himanshuramavat07@gmail.com",
      From: email,
      Subject: "Contact Us:- Portfolio",
      Body: name + "<br>" +project+ "<br>"+ msg
    }).then((message) =>      
      showSuccessAlert("Thank you for contacting me.  \n I will get back to you soon  added")
    );
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

  const birthdayYear = 2001;
  const currentYear = new Date();
  $('#age')[0].innerHTML = `<span> age : </span> ${currentYear.getFullYear() - birthdayYear}`
});

function showSuccessAlert(message) {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
  });
}