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
    console.log(JSON.stringify(data, null, '\t'));
  // not sure how to do this part...

  // const request = new XMLHttpRequest();
  // request.open('POST', 'data.json');
  // request.send();

  //for thank you page to appear:
  document.querySelector(".mainContent").style.display = "none";
  document.querySelector(".afterSubmit").style.display = "block";
}
form.addEventListener("submit", handleSubmit);
