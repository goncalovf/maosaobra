export default function copyright() {
  window.addEventListener('DOMContentLoaded', (event) => {
    const copyrightYear = document.querySelector('.js-copyright-year');
    if (copyrightYear !== null) {
      copyrightYear.textContent = new Date().getFullYear();
    }
});
};
