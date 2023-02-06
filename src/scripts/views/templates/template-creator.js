import CONFIG from '../../globals/config';

const createVenueItemTemplate = (location) => `
<div class="venue-item">
    <div class="venue-item__header">
        <img tabindex="0" 
            class="venue-item__header__poster" 
            src="${CONFIG.BASE_IMAGE_URL + location.img1}" 
            alt="${location.nama}." 
            height="170px"
       />
    </div>
    <div class="venue-item__content">
      <h1 tabindex="-1" class="venue-item__title">
        <a tabindex="0" class="venue-item__content__link" href="${`/#/detail/${location.id}`}">
          <span class=  venue-item__content__title>
            ${location.nama}
          </span>
        </a>
      </h1>
      <p tabindex="0" class="venue-item__content__city">${location.kota}</p>
      <p tabindex="0" class="venue-item__description">${location.desc}</p>
    </div>
  </div>
`;

const createVenueDetailTemplate = (detail) => `
  <div class="venue__detail">
  <img class="venue__poster" src="${CONFIG.BASE_IMAGE_URL + detail.img1}" alt="${detail.name}" width="300" height="350"/>
  <div class="venue__info">
  <h3 class="venue__title">${detail.nama}</h3>
    <h4>City</h4>
    <p><i class="fa-solid fa-location-dot"></i></i>${detail.kota}</p>
    <h4>Address <i class="fa fa-address-book"></i></h4>
    <p>${detail.alamat}</p>
    <h4>Type <i class="fa fa-sort-desc"></i></h4>
    <p>${detail.type}</p>
    <h4>Access to location <i class="fa fa-sort-desc"></i></h4>
    <p>${detail.akses}</p>
    <h4>Description <i class="fa fa-sort-desc"></i></h4>
    <p>${detail.desc}</p>
    <h4>Review <i class="fa fa-sort-desc"></i></h4>
    <p>${detail.alasan}</p>
    <h4>Opening Hours</h4>
    <p><i class="fa-solid fa-face-smile-wink"></i>${detail.jambuka}-${detail.jamtutup}</p>
    <h4>Contact</h4>
    <p><i class="fa-solid fa-face-smile-wink"></i>${detail.telp}</p>
  </div>
</div>
`;

const createVenueRecommendationTemplate = (location) => `
<div class="venue-item">
    <div class="venue-item__header">
        <img tabindex="0" 
            class="venue-item__header__poster" 
            src="${CONFIG.BASE_IMAGE_URL + location.img1}" 
            alt="${location.nama}." 
            height="170px"
       />
    </div>
    <div class="venue-item__content">
      <h1 tabindex="-1" class="venue-item__title">
        <a tabindex="0" class="venue-item__content__link" href="${`/#/detail/${location.id}`}">
          <span class=  venue-item__content__title>
            ${location.nama}
          </span>
        </a>
      </h1>
      <p tabindex="0" class="venue-item__description">${location.desc}</p>
    </div>
    <a href="${`/#/detail/${location.id}`}" class="detailbtn">Details</a>
  </div>
`;

const createApifyTemplate = (apify) => `
<div class="venue-item">
    <div class="venue-item__header">
        <img tabindex="0" crossorigin=""
            class="venue-item__header__poster" 
            src="${apify.displayUrl}" 
            alt="${apify.ownerUsername}." 
            height="170px"
       />
    </div>
    <div class="venue-item__content">
      <h1 tabindex="-1" class="venue-item__title">
        <a tabindex="0" class="venue-item__content__link" href="${apify.url}" target="_blank">
          <span class=  venue-item__content__title>
            ${apify.ownerUsername}
          </span>
        </a>
      </h1>
      <p tabindex="0" class="venue-item__content__city">${apify.caption}</p>
      <p tabindex="0" class="venue-item__description">${apify.hashtags}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this venue" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this venue" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createVenueItemTemplate,
  createVenueDetailTemplate,
  createVenueRecommendationTemplate,
  createApifyTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
