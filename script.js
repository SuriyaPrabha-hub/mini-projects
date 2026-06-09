document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let room = document.getElementById("room").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;

  if (name === "" || email === "" || room === "" || checkin === "" || checkout === "") {
    alert("⚠ Please fill all fields!");
    return;
  }

  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    alert("⚠ Enter a valid email address!");
    return;
  }

  if (new Date(checkin) >= new Date(checkout)) {
    alert("⚠ Check-out date must be after check-in date!");
    return;
  }

  // If all good → Redirect to confirmation page
  window.location.href = "confirmation.html";
});
