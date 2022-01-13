let counter = 9

let likesCount = document.querySelector("#likes-1");
console.log(likesCount)

function aumentaLikes ( elemento ) {
  counter ++;
  likesCount.innerText = counter + " like(s)";
  console.log(counter);

}

let counter2 = 12
let likesCount2 = document.querySelector("#likes-2");

function aumentaLikes2 ( elemento ) {
  counter2 ++;
  likesCount2.innerText = counter2 + " like(s)";
  console.log(counter2);

}

let counter3 = 9
let likesCount3 = document.querySelector("#likes-3");

function aumentaLikes3 ( elemento ) {
  counter3 ++;
  likesCount3.innerText = counter3 + " like(s)";
  console.log(counter3);

}