document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
                navbar.classList.remove('navbar-transparent', 'bg-transparent', 'text-white', 'py-6');
                navbar.classList.add('py-4');
            } else {
                navbar.classList.remove('navbar-scrolled', 'py-4');
                navbar.classList.add('navbar-transparent', 'bg-transparent', 'text-white', 'py-6');
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
