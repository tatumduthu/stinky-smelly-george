$(document).ready(function() {

    $("#login").on("click", function() {
        let statusText = underConstruction("logout button");
        $("#login").text(statusText).prop("disabled", true);
    });

    function underConstruction(status) {
        return "Logout";
    }


    // fetch('https://tatumduthu.github.io/stinky-smelly-george/data/parkingData.json')
    fetch('./data/parkingData.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data);
        displayParkingData(data.parkingData);
    })
    .catch(error => {
        console.error('Fetch Error :-S', error);
    });

    function displayParkingData(parkingData) {
        const container = $("#parkingDay");
        container.empty();        

        $.each(parkingData, (index, log) => {
            container.append(`
                <div class="col-md-4 mb-4">
                  <div class="card h-100">
                    <div class="card-body">
                      <h5 class="card-title"><strong>${log.date}</strong></h5>
                      <p class="card-text">Time: ${log.time}</p>
                      <p class="card-text-dark">Note: ${log.note}</p>
                    </div>
                  </div>
                </div>
            `);
        });
    }

});


// extra
// Got from https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
  function search_card() {
      let input = document.getElementById('searchBar').value.toLowerCase();
      let cards = document.querySelectorAll('.card');

      cards.forEach(card => {
          let text = card.querySelector('.card-body').innerText.toLowerCase();
          if (text.includes(input)) {
              card.style.display = "block";
          } else {
              card.style.display = "none";
          }
      });
  }


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
