$("#contact-email #submit").click(function(e) {
  e.preventDefault();
  var name = $("#contact-email #name").val();
  var email = $("#contact-email #email").val();
  var body = $("#contact-email #body").val();

  console.log("Name: " + name);
  console.log("E-Mail: " + email);
  console.log("Body: " + body);

  //Email.send({
  //    SecureToken : "1313eaa4-83ef-424d-b69d-f8dcb708d596",
  //    To : 'them@website.com',
  //    From : "kontakt@patrick-prestel.de",
  //    Subject : "This is the subject",
  //    Body : "And this is the body"
  //}).then(
  //  message => alert(message)
  //);
});

$("#contact-email #abort").click(function() {
  $("#contact-email").trigger("reset");
});
