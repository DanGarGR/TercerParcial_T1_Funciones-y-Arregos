document.getElementById('toggleMenu').addEventListener('click', function() {
    const formContainer = document.getElementById('loginForm');
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
    } else {
        formContainer.classList.add('hidden');
    }
});
