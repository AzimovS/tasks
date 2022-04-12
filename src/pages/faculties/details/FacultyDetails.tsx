import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFaculty } from '../../../services/faculties';
import { Faculty } from '../../../types';

const FacultyDetails = () => {
  const { id } = useParams();
  const [faculty, setFaculty] = useState<Faculty>();

  useEffect(() => {
    if (!id) {
      return;
    }
    getFaculty(id).then((res) => {
      setFaculty(res);
    });
  }, [id]);
  return faculty ? (
    <div>
      <h2>Faculty details {faculty.id}</h2>
      <Link to={`/faculties/edit/${faculty.id}`}>Edit</Link>
      <ul>
        <li>Name: {faculty.name}</li>
        <li>Created At: {faculty.createdAt}</li>
        <li>Updated At: {faculty.updatedAt}</li>
      </ul>
    </div>
  ) : (
    <h2>Faculty not found</h2>
  );
};

export default FacultyDetails;
