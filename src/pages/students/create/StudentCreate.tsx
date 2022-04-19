import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StudentForm from "../../../components/student-form/StudentForm";
import { StudentContext } from "../../../contexts/StudentContext";
import { ToastContext } from "../../../contexts/ToastContext";
import { createStudent } from "../../../services/students";
import { Student } from "../../../types";

const StudentCreate = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(StudentContext);
  const { dispatch: toastDispatch } = useContext(ToastContext);


  const onFormSubmit = (data: Partial<Student>) => {
    createStudent(data)
      .then((res) => {
        dispatch({ type: "CREATE_STUDENT", payload: "Student was created!" });
        if (res.id) {
          navigate("/students");
        }
        toastDispatch({
          type: "SUCCESS",
          payload: {
            message: "Student was created",
            props: {
              autoClose: 2000,
            },
          },
        });
      })
      .catch((err) => {
        toastDispatch({
          type: "ERROR",
          payload: { message: err.message || "Student creation failed" },
        });
      });
  };

  return (
    <div>
      <h2>Create student</h2>
      <StudentForm onSubmit={onFormSubmit} />
      {state.message}
    </div>
  );
};

export default StudentCreate;
function toastDispatch(arg0: { type: string; payload: { message: any } }) {
  throw new Error("Function not implemented.");
}
