import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFaculties } from '../../../services/faculties';
import { Faculty } from '../../../types';

const FacultiesList = () => {
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    getFaculties().then((res) => {
      setFaculties(res);
    });
  }, []);

  return (
    <div>
      <h2>Faculties</h2>
      <Link to="/faculties/create">Create</Link>
      <table style={{ width: '100%' }}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
        {faculties.map((faculty) => (
          <tr key={faculty.id}>
            <td>{faculty.id}</td>
            <td>{faculty.name}</td>
            <td>{faculty.createdAt}</td>
            <td>{faculty.updatedAt}</td>
            <td>
              <Link to={`/faculties/${faculty.id}`}>View</Link>
              <Link to={`/faculties/edit/${faculty.id}`}>Edit</Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FacultiesList;
