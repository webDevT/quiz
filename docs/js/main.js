$(function(){

$('.quize-btn').click(function(){
  $('.quize-btn').removeClass('active');
  $(this).addClass('active');
  $('.next-btn').addClass('active');
})

$('.lets-try-button').click(function(){
  $(".quize__text-content").hide();
  $('.photo-wrapper').hide();
  $('.special-offer__content').addClass('no-active');
  $('.steps-row').show();  
  $('.step1').show();
  $('.next-btn').addClass('show');
})

$('.next-btn--1').click(function(){
  $('.step1').hide();
  $('.step2').show();
  $('.step-line--2').addClass('active');
})

$('.next-btn--2').click(function(){
  $('.step2').hide();
  $('.step3').show();
  $('.step-line--3').addClass('active');
})

$('.next-btn--3').click(function(){
  $('.step3').hide();
  $('.step4').show();
  $('.steps-row').hide();

})

});

