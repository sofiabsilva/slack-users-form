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
  document.querySelector(".mainContent").style.display = "none";
  document.querySelector(".afterSubmit").style.display = "block";
  console.log(JSON.stringify(data, null, '\t'));
}
form.addEventListener("submit", handleSubmit);
