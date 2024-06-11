document.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
    const images = document.querySelectorAll('.stuff-image');

    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const imageCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };

        const distance = Math.sqrt(
            Math.pow(event.clientX - imageCenter.x, 2) + Math.pow(event.clientY - imageCenter.y, 2)
        );

        const maxDistance = 300; // You can adjust this value based on your preference
        const minSize = 20; // Minimum size in vw
        const maxSize = 30; // Maximum size in vw

        if (distance < maxDistance) {
            const sizeIncrease = (1 - (distance / maxDistance)) * (maxSize - minSize);
            image.style.width = `${minSize + sizeIncrease}vw`;
            image.style.height = `${minSize + sizeIncrease}vw`;
        } else {
            image.style.width = `${minSize}vw`;
            image.style.height = `${minSize}vw`;
        }
    });
}
