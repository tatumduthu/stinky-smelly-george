$(document).ready(function() {

    $("#login").on("click", function() {
        let statusText = underConstruction("logout button");
        $("#login").text(statusText).prop("disabled", true);
    });

    function underConstruction(status) {
        return "Logout";
    }


// 'https://tatumduthu.github.io/stinky-smelly-george/data/parkingData.json'
    fetch('data/parkingData.json')
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
                      <h6 class="card-subtitle mb-2 text-muted">${log.time}</h6>
                      <p class="card-text">${log.note}</p>
                      <a href="#" class="btn btn-primary">Edit</a>
                      <a href="#" class="btn btn-danger">Delete</a>
                    </div>
                  </div>
                </div>
              `);
        });
    }

});


// extra
//   function search_fact() {
//     let input = document.getElementById('searchBar').value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName('card-body');

//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         }
//         else {
//             x[i].style.display = "list-item";
//         }
//     }

// Got this ^^^^ from https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/





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
