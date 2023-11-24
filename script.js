const getJokeBtn = document.getElementById('getJokeBtn');
const jokeSetup = document.getElementById('jokeSetup');
const jokeDelivery = document.getElementById('jokeDelivery');
const jokeCategorySelect = document.getElementById('jokeCategory');

getJokeBtn.addEventListener('click', () => {
  const selectedCategory = jokeCategorySelect.value;

  fetch(`https://v2.jokeapi.dev/joke/${selectedCategory}?blacklistFlags=nsfw,racist,sexist&type=twopart`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        jokeSetup.textContent = `Failed to fetch ${selectedCategory} joke. Please try again.`;
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