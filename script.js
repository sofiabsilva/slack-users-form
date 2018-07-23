const form= document.querySelector(".myForm");

function handleSubmit(event) {
  event.preventDefault();
  const data = {
    username: form.username.value,
    favoriteEmojiCombo: form.favoriteEmojiCombo.value,
    bio: form.bio.value,
    twitter: form.twitter.value,
    website: form.website.value,
    learning: form.learning.value,
    birthPlace: form.birthPlace.value,
    currentCountry: form.currentCountry.value
  };
    console.log(JSON.stringify(data, null, '\t')); //converting object to JSON strings

  const url = "https://jsonplaceholder.typicode.com/posts/";

    $.post(url, data, function(data, status) {
      console.log(`${data} and status is ${status}`);
    })

  //for thank you to appear:
  document.querySelector(".mainContent").style.display = "none";
  document.querySelector(".afterSubmit").style.display = "block";
}
form.addEventListener("submit", handleSubmit);
