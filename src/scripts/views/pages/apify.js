import { createApifyTemplate } from '../templates/template-creator';
import TheVenueSource from '../../data/venue-source';

const Apify = {
  async render() {
    return `
        <h2>HASHTAG HIDDEN GEM</h2>
        <div class="break-line"></div>
        <div class="content">
          <div id="venue-list" class="venue-list"></div>
        </div>
      `;
  },

  async afterRender() {
    const locations = await TheVenueSource.Apify();
    const locationsContainer = document.querySelector('#venue-list');
    locations.forEach((apify) => {
      locationsContainer.innerHTML += createApifyTemplate(apify);
    });
  },
};

export default Apify;
