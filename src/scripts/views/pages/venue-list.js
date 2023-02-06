import { createVenueRecommendationTemplate } from '../templates/template-creator';
import TheVenueSource from '../../data/venue-source';

const VenueList = {
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
    locations.slice(0, 8).forEach((location) => {
      locationsContainer.innerHTML += createVenueRecommendationTemplate(location);
    });
  },
};
export default VenueList;
