import { createVenueItemTemplate } from '../templates/template-creator';
import TheVenueSource from '../../data/venue-source';

const VenueFullList = {
  async render() {
    return `
        <h2><span>ALL</span> LOCATIONS</h2>
        <div class="break-line"></div>
        <div class="content">
          <div id="venue-list" class="venue-list"></div>
        </div>
      `;
  },

  async afterRender() {
    const locations = await TheVenueSource.Home();
    const locationsContainer = document.querySelector('#venue-list');
    locations.forEach((location) => {
      locationsContainer.innerHTML += createVenueItemTemplate(location);
    });
  },
};

export default VenueFullList;
