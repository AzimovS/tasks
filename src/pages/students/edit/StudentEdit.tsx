import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentForm from "../../../components/student-form/StudentForm";
import { StudentContext } from "../../../contexts/StudentContext";
import { editStudent, getStudent } from "../../../services/students";
import { Student } from "../../../types";

const StudentEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState<Student>();
  const { dispatch } = useContext(StudentContext);

  useEffect(() => {
    if (!id) {
      return;
    }
    getStudent(id).then((res) => {
      setStudent(res);
    });
  }, [id]);

  const onSubmit = (data: Partial<Student>) => {
    console.log(data);
    if (!id) {
      return;
    }

    editStudent(id, data).then((res) => {
      dispatch({ type: "EDIT_STUDENT", payload: "Student was edited!" });
      navigate(`/students/${id}`);
    });
  };

  return (
    <div>
      <h2>Edit student</h2>
      {student && <StudentForm initialValues={student} onSubmit={onSubmit} />}
    </div>
  );
};

export default StudentEdit;
