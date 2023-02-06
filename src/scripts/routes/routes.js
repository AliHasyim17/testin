import VenueList from '../views/pages/venue-list';
import Wishlist from '../views/pages/wishlist';
import Detail from '../views/pages/detail';
import VenueFullList from '../views/pages/venue-full-list';
import Pantai from '../views/pages/pantai';
import Gunung from '../views/pages/gunung';
import Hutan from '../views/pages/hutan';
import Fnb from '../views/pages/fnb';
import Kota from '../views/pages/kota';
import Taman from '../views/pages/taman';
import Gallery from '../views/pages/gallery';
import Bukit from '../views/pages/bukit';
import Apify from '../views/pages/apify';

const routes = {
  '/': VenueList,
  '/list': VenueFullList,
  '/hashtag': Apify,
  '/pantai': Pantai,
  '/gunung': Gunung,
  '/hutan': Hutan,
  '/fnb': Fnb,
  '/kota': Kota,
  '/taman': Taman,
  '/gallery': Gallery,
  '/bukit': Bukit,
  '/wishlist': Wishlist,
  '/detail/:id': Detail,
};

export default routes;
