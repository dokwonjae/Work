// TODO : form input 태그 접근해서 디자인 적용 4가지 사용법

$(function () {
  // 1) 사용법 : 태그[속성] (속성선택자) : 해당되는 속성이 있는 태그를 선택
  $("#wrap a[target]").css({ color: "red" });

  // 2) 사용법 : 속성의 값 중 https 로 시작되는(^) 태그 선택
  $("#wrap a[href^=https]").css({ color: "skyblue" });

  // 3) 사용법 : 속성의 값 중 net 로 끝나는($) 태그 선택
  $("#wrap a[href$=net]").css({ color: "blue" });

  // 4) 속성의 값 중 google 이 포함되는(*) 태그 선택
  $("#wrap a[href*=google]").css({ color: "yellow" });
});
