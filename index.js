let likesCounter = 0;
const likeButton = document.getElementById("likeButton");
// a function that increments the number of likes

const addLike = (incrementBy) => {
  likesCounter += incrementBy;
  // show number of likes on the button, like this (3)
  likeButton.innerText = `(${likesCounter}) Like`;

  if (likesCounter === 10) {
    alert("CONGRATS!");
  }
};

likeButton.addEventListener("click", () => {
  addLike(1);
});
