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

function toggleTheme() {
    const currentTheme = $('html').attr('class');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    $('html').attr('class', newTheme);
    localStorage.setItem('theme', newTheme); // 변경된 테마를 로컬 스토리지에 저장
}
