import Pagination from 'tui-pagination';
import ImageService from './src/API-service';
import '/node_modules/tui-pagination/dist/tui-pagination.css';
import { load } from './src/index';

// console.dir(load);

export const container = document.getElementById('tui-pagination-container');

const imageService = new ImageService();

export const options = {
  totalItems: imageService.totalHits,
  itemsPerPage: imageService.perPage,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

// export const instance = new Pagination(container, options);

// instance.on('afterMove', evt => {
//   const currentPage = evt.page;
// });
