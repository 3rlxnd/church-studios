{/* <img src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"
                width="300px" />
            <img src="https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g"
                width="300px" />
            <img src="https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU"
                width="300px" />
            <img src="https://fastly.picsum.photos/id/59/2464/1632.jpg?hmac=uTfe6jCzLvCzANvJgtpo-a0fKhO8BvjpwLNYX3lqx_Q"
                width="300px" />
            <img src="https://fastly.picsum.photos/id/32/4032/3024.jpg?hmac=n7I3OdGszMIwuGcvplNthgBmAxvAZ3rNBBSuDFZaItQ"
                width="300px" />
            <img src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"
                width="300px" /> */}

const imageContainer = document.querySelector('#gallery-container')
const previewImage = document.querySelector('#gallery-preview-image')

const images = ['assets/images/IMG_7132.JPG', 'assets/images/IMG_0650.jpeg']
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