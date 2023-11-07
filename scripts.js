/// Initialize Swiper
let mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // 'vertical' for vertical slider
  loop: true, // Loop the slides
  navigation: {          
      nextEl: ".swiper-button-next",          
      prevEl: ".swiper-button-prev",        
  }
  
});
$(document).ready(function () {
  $("#payment-form").validate({
    rules: {
      cardNumber: {
        required: true,
        minlength: 10,
        maxlength: 10,
        number: true,
      },
      expDate: {
        required: true,
      },
      cvv: {
        required: true,
        number: true,
        minlength: 3,
        maxlength: 3
      }
    },
    messages: {
      cardNumber: {
        required: "Please enter Credit card number",
        minlength: "Credit card number should be 10 digit only",
        maxlength: "Credit card number should be 10 digit only"
      },
      expDate: {
        required: "Please enter a expiry date"
      },
      cvv: {
        required: "Please enter CVV",
        minlength: "CVV should be 3 digit only",
        maxlength: "CVV should be 3 digit only"
      }
    }
  });
});
