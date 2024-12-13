$(document).ready(function () {
    // 초기 테마 설정
    const preferredTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const preferredNav = localStorage.getItem('navbar') || "scroll";
    
    $('html').attr('class', preferredTheme);
    $('#nav').addClass(preferredNav); // 기존 클래스에 영향을 주지 않고 추가
    $('#display-config-theme\\.background').val(preferredTheme);

    // 테마 변경 감지 및 업데이트
    $('#display-config-theme\\.background').on('change', function () {
        const selectedValue = $(this).val(); // 선택된 옵션 값

        $('html').attr('class', selectedValue);
        localStorage.setItem('theme', selectedValue);
    });

    // 네비게이션 바 스타일 변경
    $('#display-config-theme\\.navbar').on('change', function () {
        const selectedValue = $(this).val(); // 선택된 옵션 값

        // 기존 클래스 제거하고 새로운 클래스 추가
        $('#nav').removeClass('scroll light dark').addClass(selectedValue);

        if (selectedValue === 'dark' || selectedValue === 'light') {
            $('html').attr('class', selectedValue);
            localStorage.setItem('theme', selectedValue);
        } else {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            $('html').attr('class', systemTheme);
            localStorage.removeItem('theme');
        }
    });
});