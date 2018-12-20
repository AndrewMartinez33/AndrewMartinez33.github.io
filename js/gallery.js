let images = {
  galleryImg1: {
    src: "../images/gallery-images/galleryImage1.jpg",
    alt:
      "D.E.S.I. client smiling and proudly displaying her creation of guacamole while holding a book entitled 'Salsas and Dips' during a health & wellness training exercise."
  },
  galleryImg2: {
    src: "../images/gallery-images/galleryImage2.jpg",
    alt:
      "D.E.S.I. client posing for a picture at Paramount studios during a community outing."
  },
  galleryImg3: {
    src: "../images/gallery-images/galleryImage3.jpg",
    alt:
      "D.E.S.I. clients, educators and volunteers pass out backpacks during a community giveaway in East Los Angeles. In the photo, the educator (centered) is gesturing to a group of interested students (right) while other D.E.S.I. volunteers look on (left)."
  },
  galleryImg4: {
    src: "../images/gallery-images/galleryImage4.jpg",
    alt:
      "D.E.S.I. client (below) and volunteer (above) posing for a picture at the Hollywood Bowl, during a community outing."
  },
  galleryImg5: {
    src: "../images/gallery-images/galleryImage5.jpg",
    alt:
      "D.E.S.I. educator (center) assisting D.E.S.I. clients (left and right) as they prepare the volunteer coordination tent at DEAFestival 2018."
  },
  galleryImg6: {
    src: "../images/gallery-images/galleryImage6.jpg",
    alt:
      "D.E.S.I. client giving a 'thumbs up' during his Community Integration Training (CIT)."
  },
  galleryImg7: {
    src: "../images/gallery-images/galleryImage7.jpg",
    alt:
      "DESI client volunteering at a local elementary school as part of his community-based education."
  },
  galleryImg8: {
    src: "../images/gallery-images/galleryImage8.jpg",
    alt:
      "D.E.S.I. client sharing the results of his skills-based learning exercise."
  },
  galleryImg10: {
    src: "../images/gallery-images/galleryImage10.jpg",
    alt:
      "D.E.S.I. client demonstrates money management, verbal communication skills and health and wellness skills, by purchasing his own healthy meal at a Subway restaurant."
  },
  galleryImg12: {
    src: "../images/gallery-images/galleryImage12.jpg",
    alt:
      "D.E.S.I. client receives assistance working in a grocery store as a product sampler."
  },
  galleryImg13: {
    src: "../images/gallery-images/galleryImage13.jpg",
    alt:
      "D.E.S.I. clients, educators and staff posing around a large tree during a group hike in the Angeles National Forest."
  },

  galleryImg15: {
    src: "../images/gallery-images/galleryImage15.jpg",
    alt:
      "D.E.S.I. client (right) demonstrating to his D.E.S.I educator (left) how he uses his ACCESS card, while boarding the metro stop in East Los Angeles."
  },
  galleryImg16: {
    src: "../images/gallery-images/galleryImage16.jpg",
    alt:
      "D.E.S.I. educator (left) and his client (right) pose outside Robert Hill Lane Elementary School in Los Angeles, CA after volunteering for the morning."
  },

  galleryImg18: {
    src: "../images/gallery-images/galleryImage18.jpg",
    alt:
      "D.E.S.I. client leading a drum circle activity in his community as part of a micro-enterprise training activity."
  },
  galleryImg19: {
    src: "../images/gallery-images/galleryImage19.jpg",
    alt:
      "D.E.S.I. educator (left) and client (right) pose in a cafe, while stopping for hydration during a Community Integration Training (CIT) outing."
  },
  galleryImg20: {
    src: "../images/gallery-images/galleryImage20.jpg",
    alt:
      "D.E.S.I. Founder Elizabeth Jinzo speaking at a California State Senate awards ceremony in 2014. Elizabeth received the Women of Achievement award from Senator Ed Hernandez."
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
    imageContainer.setAttribute("class", "col-6 col-md-4 col-xl-3 m-0 p-0");

    imageTemplate = document.createElement("img");
    imageTemplate.setAttribute("id", key);
    imageTemplate.setAttribute("class", "lazy img-fluid desi-img col-3 p-1");
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
