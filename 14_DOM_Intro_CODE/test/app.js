// app.js에서 색상이라는 색상 이름의 배열을 찾을 수 있습니다. ['빨간색', '주황색', '노란색', '녹색', '파란색', '남색', '보라색']처럼 보입니다.

// 귀하의 작업은 모든 범위를 선택하고 반복하여 색상 배열에서 각 색상을 할당하는 것입니다.
// 첫 번째 범위는 빨간색, 두 번째 범위는 주황색 등이어야 합니다. 결과는 다음과 같아야 합니다.

const spans = document.querySelectorAll("span");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

for (let span of spans) {
  span.style.color = colors[span];
}

for (let i = 0; i < spans.length; i++) {
  spans[i].style.color = colors[i];
}

for (let i = 0; i < spans.length; i++) {
  console.log(colors[i]);
}
