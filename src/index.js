document.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
    const images = document.querySelectorAll('.stuff-image');

    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const imageCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };

        // Calculate distance in vw
        const distanceX = (event.clientX - imageCenter.x) / window.innerWidth * 100;
        const distanceY = (event.clientY - imageCenter.y) / window.innerWidth * 100;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        const maxDistance = 20; // Maximum distance in vw
        const minSize = 10; // Minimum size in vw
        const maxSize = 20; // Maximum size in vw

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