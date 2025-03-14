const admins = document.querySelector(".admin-slide");
const prevButton = document.querySelector(".prev-admin");
const nextButton = document.querySelector(".next-admin");
let currentIndex = 0; // 現在のスライド位置

const totalAdmins = document.querySelectorAll(".admin").length;

nextButton.addEventListener("click", () => {
  if (currentIndex < totalAdmins - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // 最後のadminから最初に戻る
  }
  admins.style.transform = `translateX(-${currentIndex * 100}%)`; // スライド
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalAdmins - 1; // 最初のadminから最後に戻る
  }
  admins.style.transform = `translateX(-${currentIndex * 100}%)`; // スライド
});
