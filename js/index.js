let counter = 3

let likesCount = document.querySelector("#likes-total");
console.log(likesCount)

function aumentaLikes ( elemento ) {
  counter ++;
  likesCount.innerText = counter + " like(s)";
  console.log(counter);

}