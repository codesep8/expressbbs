if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('html').attr('class', 'dark');
} else {
    $('html').attr('class', 'light');
}
