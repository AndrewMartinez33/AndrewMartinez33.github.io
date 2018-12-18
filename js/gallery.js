let images = {
  galleryImg1: {
    src: "../images/gallery-images/galleryImage1.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg2: {
    src: "../images/gallery-images/galleryImage2.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg3: {
    src: "../images/gallery-images/galleryImage3.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg4: {
    src: "../images/gallery-images/galleryImage4.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg5: {
    src: "../images/gallery-images/galleryImage5.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg6: {
    src: "../images/gallery-images/galleryImage6.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg7: {
    src: "../images/gallery-images/galleryImage7.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg8: {
    src: "../images/gallery-images/galleryImage8.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg10: {
    src: "../images/gallery-images/galleryImage10.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg12: {
    src: "../images/gallery-images/galleryImage12.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg13: {
    src: "../images/gallery-images/galleryImage13.jpg",
    alt: "This is a description of the above photo. November 2018."
  },

  galleryImg15: {
    src: "../images/gallery-images/galleryImage15.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg16: {
    src: "../images/gallery-images/galleryImage16.jpg",
    alt: "This is a description of the above photo. November 2018."
  },

  galleryImg18: {
    src: "../images/gallery-images/galleryImage18.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg19: {
    src: "../images/gallery-images/galleryImage19.jpg",
    alt: "This is a description of the above photo. November 2018."
  },
  galleryImg20: {
    src: "../images/gallery-images/galleryImage20.jpg",
    alt: "This is a description of the above photo. November 2018."
  }
};

function loadGallery() {
  let imageContainer;
  let imageTemplate;
  let imageDescription;
  let imageText;
  let imageGallery = document.querySelector("#desiGallery");
  let allImages = document.createElement("div");
  allImages.setAttribute("class", "row m-0 p-0");

  for (let [key, value] of Object.entries(images)) {
    imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "col-6 col-md-4 col-xl-3 p-0");

    imageTemplate = document.createElement("img");
    imageTemplate.setAttribute("id", key);
    imageTemplate.setAttribute("class", "lazy img-fluid desi-img col-3 p-2");
    imageTemplate.setAttribute("data-src", value.src);
    imageTemplate.setAttribute("alt", value.alt);
    imageTemplate.setAttribute("src", value.src);

    // imageDescription = document.createElement("p");
    // imageText = document.createTextNode(value.alt);
    // imageDescription.appendChild(imageText);
    // imageDescription.setAttribute("class", "image-text mb-3 px-2");

    imageContainer.appendChild(imageTemplate);
    // imageContainer.appendChild(imageDescription);

    allImages.appendChild(imageContainer);
  }

  imageGallery.appendChild(allImages);
}

window.addEventListener("load", loadGallery);
