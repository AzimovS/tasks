import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FacultyForm from '../../../components/faculty-form/FacultyForm';
import { editFaculty, getFaculty } from '../../../services/faculties';
import { Faculty } from '../../../types';

const FacultyEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState<Faculty>();

  useEffect(() => {
    if (!id) {
      return;
    }
    getFaculty(id).then((res) => {
      setFaculty(res);
    });
  }, [id]);

  const onSubmit = (data: Partial<Faculty>) => {
    console.log(data);
    if (!id) {
      return;
    }

    editFaculty(id, data).then((res) => {
      navigate(`/faculties/${id}`);
    });
  };

  return (
    <div>
      <h2>Edit faculty</h2>
      {faculty && <FacultyForm initialValues={faculty} onSubmit={onSubmit} />}
    </div>
  );
};

export default FacultyEdit;
