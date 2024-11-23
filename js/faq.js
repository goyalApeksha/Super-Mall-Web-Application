// FAQ Toggle Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.toggle-icon');

        // Toggle the visibility of the answer
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Change the toggle icon
        icon.textContent = icon.textContent === '+' ? '-' : '+';
    });
});
