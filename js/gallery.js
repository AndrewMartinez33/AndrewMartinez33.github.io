let images = {
    'galleryImg1' : { 'src' : '../images/galleryImage1.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg2' : { 'src' : '../images/galleryImage2.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg3' : { 'src' : '../images/galleryImage3.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg4' : { 'src' : '../images/galleryImage4.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg5' : { 'src' : '../images/galleryImage1.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg6' : { 'src' : '../images/galleryImage2.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg7' : { 'src' : '../images/galleryImage3.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg8' : { 'src' : '../images/galleryImage4.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg9' : { 'src' : '../images/galleryImage1.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg10' : {'src' : '../images/galleryImage2.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg11' : {'src' : '../images/galleryImage3.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg12' : {'src' : '../images/galleryImage4.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg13' : {'src' : '../images/galleryImage1.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg14' : {'src' : '../images/galleryImage2.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg15' : {'src' : '../images/galleryImage3.webp',
                      'alt': 'This is a description of the above photo. November 2018.'},
    'galleryImg16' : {'src' : '../images/galleryImage4.webp',
                      'alt': 'This is a description of the above photo. November 2018.'}
};

function loadGallery() {
    let imageContainer;
    let imageTemplate;
    let imageDescription;
    let imageText;
    let imageGallery = document.querySelector('#desiGallery');
    let allImages = document.createElement('div');
    allImages.setAttribute('class', 'row m-0 p-0');
    
    for (let [key,value] of Object.entries(images)) {
        imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'col-6 col-md-4 col-xl-3 p-0');
        
        imageTemplate = document.createElement('img');
        imageTemplate.setAttribute('id', key);
        imageTemplate.setAttribute('class', 'img-fluid desi-img col-3 p-0');
        imageTemplate.setAttribute('src', value.src);
        imageTemplate.setAttribute('alt', value.alt);
        
        imageDescription = document.createElement('p');
        imageText= document.createTextNode(value.alt);
        imageDescription.appendChild(imageText);
        imageDescription.setAttribute('class', 'image-text mb-3 px-2');
        
        imageContainer.appendChild(imageTemplate);
        imageContainer.appendChild(imageDescription);

        allImages.appendChild(imageContainer);
    }
    
    imageGallery.appendChild(allImages);
}

window.addEventListener('load', loadGallery);
