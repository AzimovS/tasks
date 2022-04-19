import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FacultyForm from '../../../components/faculty-form/FacultyForm';
import { ToastContext } from '../../../contexts/ToastContext';
import { editFaculty, getFaculty } from '../../../services/faculties';
import { Faculty } from '../../../types';

const FacultyEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState<Faculty>();
  const { dispatch: toastDispatch } = useContext(ToastContext);


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
      toastDispatch({
        type: "SUCCESS",
        payload: {
          message: "Faculty was edited",
          props: {
            autoClose: 2000,
          },
        },
      });
    }).catch((err) => {
      toastDispatch({
        type: "ERROR",
        payload: { message: err.message || "Faculty was not edited" },
      });
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
