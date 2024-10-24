

function checkWebP() {
  var img = new Image();
  img.onload = function() {
      document.documentElement.classList.add('webp');
      document.querySelector('.support-status').textContent = 
          '이 브라우저는 WebP를 지원합니다! (테두리가 파란색으로 표시됩니다)';
  };
  img.onerror = function() {
      document.documentElement.classList.add('no-webp');
      document.querySelector('.support-status').textContent = 
          '이 브라우저는 WebP를 지원하지 않습니다. (테두리가 빨간색으로 표시됩니다)';
  };
  img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
}

function startLoading() {
  
  document.querySelector('.content').classList.add('hide');
  document.querySelector('.loading').classList.add('show');

  setTimeout(function() {
      document.querySelector('.loading').classList.remove('show');
      document.querySelector('.content').classList.remove('hide');
      checkWebP();
  }, 3000);
}

// 페이지 로드시 WebP 체크 먼저 실행
checkWebP();

// 그 다음 컨텐츠를 숨기고 로딩 표시
document.querySelector('.content').classList.add('hide');
document.querySelector('.loading').classList.add('show');