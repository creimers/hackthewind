import React from 'react';
import Loadable from 'react-loadable';

const LazyForecastView = Loadable({
  loader: () => import('./Lazy.js'),
  loading: () => <div></div>,
});

export default LazyForecastView
