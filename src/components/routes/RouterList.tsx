import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './list';

const RouterList: FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((item) => {
          return <Route path={item.path} element={<item.componet />} key={`key-${item.path}`} />;
        })}
      </Routes>
    </Router>
  );
};
// /* <Route path="/" element={} /> exact={item.exact}*/
export default RouterList;
