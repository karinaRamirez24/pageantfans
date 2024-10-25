document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');

            // Oculta todos los contenidos
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.display = 'none';
            });

            // Muestra el contenido de la sección clickeada
            accordionContent.style.display = 'block';
        });
    });
});