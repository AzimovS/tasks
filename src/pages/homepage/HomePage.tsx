import React from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/students'}>Students</Link>
        </li>
        <li>
          <Link to={'/faculties'}>Faculties</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
