import React, { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './menu.scss';
// eslint-disable-next-line
import listRoutes from '../routes/list';

const Menu: FC = () => {
  const location = useLocation();
  console.log(location);

  return (
    <menu className="menu">
      <div className="menu__logo" />

      <div className="menu__item" />

      {listRoutes.map((item) => (
        <Link className="menu__item" to={item.path}>
          {item.name}
        </Link>
      ))}

      <div className="menu__user" />
    </menu>
  );
};
export default Menu;
