// Set the date we're counting down to
const countDownDate = new Date("Feb 1, 2025 00:00:00").getTime();

// Update the count down every 1 second
const countdownfunction = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in the respective elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.querySelector(".countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Handle form submission
document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
});
