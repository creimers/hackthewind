import React from 'react';
import Loadable from 'react-loadable';

const LazyLoginView = Loadable({
  loader: () => import('./Lazy.js'),
  loading: () => <div></div>,
});

export default LazyLoginView
