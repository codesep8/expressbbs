$(document).ready(function () {
    // 초기 테마 설정
    const preferredTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    $('html').attr('class', preferredTheme);
    $('#display-config-theme\\.background').val(preferredTheme);

    // 테마 변경 감지 및 업데이트
    $('#display-config-theme\\.background').on('change', function () {
        const selectedValue = $(this).val(); // 선택된 옵션 값

        if (selectedValue === 'dark' || selectedValue === 'light') {
            $('html').attr('class', selectedValue);
            localStorage.setItem('theme', selectedValue);
        } else {
            $('html').attr('class', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
            localStorage.removeItem('theme');
        }
    });
});