import { NavLink } from 'react-router-dom';

const Hoc = ({ i, children }) => {
  return i !== 6 ? (
    <div className='card'>{children}</div>
  ) : (
    <NavLink className='card card-active' to='/open-card'>
      {children}
    </NavLink>
  );
};

export default Hoc;
