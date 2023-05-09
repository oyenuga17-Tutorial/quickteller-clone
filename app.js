window.onload = function () {
  let activeImage = 0;
  function changeImage() {
    var BackgroundImg = [
      "https://quick-mufasa.interswitchng.com/nextquickteller/images/background/bg-slide-2-min.jpg",
      "https://quick-mufasa.interswitchng.com/nextquickteller/images/background/bg-slide-1-min.jpg",
    ];
    if (activeImage === 0) {
      document.querySelector(
        ".search-bar"
      ).style.backgroundImage = `url("${BackgroundImg[0]}")`;
      activeImage = 1;
    } else {
      document.querySelector(
        ".search-bar"
      ).style.backgroundImage = `url("${BackgroundImg[1]}")`;
      activeImage = 0;
    }
  }
  window.setInterval(changeImage, 5000);
};
