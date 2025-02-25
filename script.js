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