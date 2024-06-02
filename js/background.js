const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// 이미지 요소 생성
const bgImage = document.createElement("img");

// 이미지 소스 설정
bgImage.src = `img/${chosenImage}`;

// 이미지 스타일 설정 (예: 너비 50%로 설정)
bgImage.style.width = "100%";
bgImage.style.height = "auto"; // 가로 너비에 맞추어 비율을 유지

// 문서에 이미지 추가
document.body.appendChild(bgImage);
