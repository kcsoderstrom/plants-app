/**
 * Preloads images 
 */
export function preLoadImages (images) {
    if (document.images) {
        const preLoadedImages = []
        images.forEach(image => {
            const newImage = new Image();
            newImage.src = image;
            preLoadedImages.push(newImage);
        })
    }
}