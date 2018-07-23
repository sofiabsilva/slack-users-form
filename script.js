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
  console.log(data)
  document.querySelector(".mainContent").style.display = "none";
  document.querySelector(".afterSubmit").style.display = "block";

  // form.classList.add("thankyou");
}
form.addEventListener("submit", handleSubmit);
