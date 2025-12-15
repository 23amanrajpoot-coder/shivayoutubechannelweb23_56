const bannerInput = document.getElementById("bannerInput");
const dpInput = document.getElementById("dpInput");
const bannerImg = document.getElementById("bannerImg");
const dpImg = document.getElementById("dpImg");

// Banner Upload
function uploadBanner(){
  bannerInput.click();
  bannerInput.onchange = e =>{
    bannerImg.src = URL.createObjectURL(e.target.files[0]);
    bannerImg.style.display = "block";
    document.getElementById("bannerText").style.display="none";
  }
}

// DP Upload
function uploadDP(){
  dpInput.click();
  dpInput.onchange = e =>{
    dpImg.src = URL.createObjectURL(e.target.files[0]);
    dpImg.style.display = "block";
    document.getElementById("dpText").style.display="none";
  }
}

// YouTube redirects
function uploadShort(){
  window.open("https://www.youtube.com/upload", "_blank");
}
function uploadVideo(){
  window.open("https://www.youtube.com/upload", "_blank");
}
function createPost(){
  window.open("https://www.youtube.com/channel/UC/community", "_blank");
}
