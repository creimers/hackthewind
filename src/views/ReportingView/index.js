import React from 'react';
import Loadable from 'react-loadable';

const LazyReportingView = Loadable({
  loader: () => import('./Lazy.js'),
  loading: () => <div></div>,
});

export default LazyReportingView
