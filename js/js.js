document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('h3');
        const content = item.querySelector('p');

        header.addEventListener('click', () => {
            const isActive = content.style.display === 'block';
            
          
            faqItems.forEach(i => {
                if (i !== item) {
                    i.querySelector('p').style.display = 'none';
                }
            });

            
            content.style.display = isActive ? 'none' : 'block';
        });
    });
});