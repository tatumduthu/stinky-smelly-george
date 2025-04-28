$(document).ready(() => {
  $("#saveParking").click(() => {
    const date = $("#dateParked").val();
    const parkingLot = $("#wheredPark").val();
    const time = $("#timeParked").val();
    const additionalInfo = $("#additionalInfo").val() || "none";

    if (!date || !parkingLot || !time) {
      alert("Please fill out all required fields.");
      return;
    }

    // Add data to the table--help from w3Schools
    const table = $("#parkingTable tbody");
    const newRow = `
      <tr>
        <td>${date}</td>
        <td>${parkingLot}</td>
        <td>${time}</td>
        <td>${additionalInfo}</td>
      </tr>
    `;
    table.append(newRow);

    // Reset the form
    $("#parkingForm")[0].reset();
  });
});





// w3s: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
