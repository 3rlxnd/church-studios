const imageContainer = document.querySelector('#gallery-images')
const previewImage = document.querySelector('#gallery-preview-image')

const images = ['assets/images/IMG_0646.jpeg', 'assets/images/IMG_0650.jpeg', 'assets/images/IMG_0651.jpeg', 'assets/images/IMG_0656.jpeg', 'assets/images/IMG_0657.jpeg', 'assets/images/IMG_1054.JPG', 'assets/images/IMG_7131.JPG', 'assets/images/IMG_7132.JPG', 'assets/images/IMG_7136.JPG', 'assets/images/IMG_7145.JPG', 'assets/images/IMG_7150.JPG']
let currentImage = images[0]

function ImageSlider() {
    previewImage.id = ('gallery-preview-image')

    images.forEach((imagePath) => {
        const imageElement = document.createElement('img')
        imageElement.classList.add('gallery-image')
        imageElement.src = imagePath
        imageContainer.append(imageElement)

        imageElement.addEventListener('click', () => {
            currentImage = imagePath
            previewImage.src = currentImage
        })
    })
}

ImageSlider()