import React from 'react';
import Loadable from 'react-loadable';

const LazyParkDetailView = Loadable({
  loader: () => import('./Lazy.js'),
  loading: () => <div></div>,
});

export default LazyParkDetailView
