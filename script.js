const getJokeBtn = document.getElementById('getJokeBtn');
const jokeSetup = document.getElementById('jokeSetup');
const jokeDelivery = document.getElementById('jokeDelivery');

getJokeBtn.addEventListener('click', () => {
  fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        jokeSetup.textContent = 'Failed to fetch joke. Please try again.';
        jokeDelivery.textContent = '';
      } else {
        jokeSetup.textContent = data.setup;
        jokeDelivery.textContent = data.delivery;
      }
    })
    .catch(error => {
      jokeSetup.textContent = 'An error occurred while fetching the joke.';
      jokeDelivery.textContent = '';
      console.error('Error fetching joke:', error);
    });
});
