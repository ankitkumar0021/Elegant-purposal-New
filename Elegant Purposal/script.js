function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get references to the elements you want to toggle
const itineraryContent = document.getElementById('second');  // ID of the itinerary content
const otherContents = document.querySelectorAll('.field-content:not(#second)');  // Other content sections

// Function to show only the itinerary content and hide other content
function showItineraryContent() {
  itineraryContent.style.display = 'block';  // Show itinerary content
  otherContents.forEach(content => {
    content.style.display = 'none';  // Hide other content
  });
}

// Attach the function to the click event of the "Enter" image
const enterImage = document.querySelector('.location-details a img');
enterImage.addEventListener('click', showItineraryContent);
