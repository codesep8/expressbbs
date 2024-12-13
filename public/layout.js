$(document).ready(function() {
    const preferredTheme = localStorage.getItem('theme');

    if (preferredTheme) {
        $('html').attr('class', preferredTheme);
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            $('html').attr('class', 'dark');
        } else {
            $('html').attr('class', 'light');
        }
    }
});

  $(document).ready(function () {
    // Select 요소의 변경 이벤트를 감지
    $('#display-config-theme\\.background').on('change', function () {
      const selectedValue = $(this).val(); // 선택된 옵션 값
      
      // body에 클래스를 추가/제거하여 모드 전환
      if (selectedValue === 'dark') {
        $('html').removeClass('light').addClass('dark');
        localStorage.setItem('theme', 'dark');
      } else if (selectedValue === 'light') {
        $('body').removeClass('dark').addClass('light');
        localStorage.setItem('theme', 'light');
      } else {
        $('body').removeClass('dark light');
      }
    });
});

function toggleTheme() {
    const currentTheme = $('html').attr('class');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    $('html').attr('class', newTheme);
    localStorage.setItem('theme', newTheme); // 변경된 테마를 로컬 스토리지에 저장
}
