import {Link} from 'react-router-dom';

const Navbar = () => {

  return (

    <nav>

      <li>
        <Link to='/home'>Home</Link>
      </li>

      <li>
        <Link to='/activities'>Activities</Link>
      </li>

      <li>
        <Link to='/carrental'>CarRental</Link>
      </li>

      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>

      <li>
        <Link to='/register'>Register</Link>
      </li>

      <li>
        <Link to='login'>Login</Link>
      </li>

      <li>
        <Link to='/airport'>AirPortTaxis</Link>
      </li>
    </nav>
  )
};

export default Navbar;

