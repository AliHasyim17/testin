import { createVenueItemTemplate } from '../templates/template-creator';
import TheVenueSource from '../../data/venue-source';

const Pantai = {
  async render() {
    return `
    <h2>OUR <span>RECOMMENDATIONS</span></h2>
    <div class="break-line"></div>
    <div class="content">
      <div id="recommendation-list" class="recommendation-list"></div>
    </div>
  `;
  },

  async afterRender() {
    const locations = await TheVenueSource.Home();
    const locationsContainer = document.querySelector('#recommendation-list');
    // eslint-disable-next-line eqeqeq
    const filtered = locations.filter((item) => item.type == 'Pantai');
    filtered.forEach((location) => {
      locationsContainer.innerHTML += createVenueItemTemplate(location);
    });
  },
};
export default Pantai;
