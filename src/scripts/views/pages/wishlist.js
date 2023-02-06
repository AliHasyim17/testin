import WishlistVenueIdb from '../../data/wishlistvenue-idb';
import { createVenueItemTemplate } from '../templates/template-creator';

const Wishlist = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your <span>Wishlist</span> Venue</h2>
        <h3 class="content__subheading">Please find the place you <a href="#/list"><span>want</span></a> and put it on the wishlist!</h3>
        <div id="venue-list" class="venue-list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const locationList = await WishlistVenueIdb.getAllVenues();
    const locationsContainer = document.querySelector('#venue-list');
    locationList.forEach((location) => {
      locationsContainer.innerHTML += createVenueItemTemplate(location);
    });
  },
};

export default Wishlist;
