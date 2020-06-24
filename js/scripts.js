$(document).ready(function () {
  $('tr.contacts').click(function () {
    $('div#contacts').slideToggle();
  });

  $('tr.skills').click(function () {
    $('div#skills').slideToggle();
  });
  $('tr.portfolio').click(function () {
    location.replace("portfolio.html");
  });
})