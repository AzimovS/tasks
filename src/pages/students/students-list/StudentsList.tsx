import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StudentContext } from "../../../contexts/StudentContext";
import { deleteStudent, getStudents } from "../../../services/students";

const StudentsList = () => {
  const { state, dispatch } = useContext(StudentContext);
  const navigate = useNavigate();

  useEffect(() => {
    getStudents().then((res) => {
      dispatch({ type: "GET_STUDENTS", payload: res });
    });
  }, [state]);

  const deleteStudentButton = (id: string) => {
    deleteStudent(id)
      .then((res) => {
        dispatch({ type: "DELETE_STUDENT", payload: "Student was deleted!" });
        if (res.id) {
          navigate("/students");
        }
      })
      .catch((err) => {
        dispatch({
          type: "DELETE_STUDENT",
          payload: "Student deletion failed!",
        });
      });
  };

  return (
    <div>
      <h2>Students</h2>
      <Link to="/students/create">Create</Link>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
            <th>Courses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.score}</td>
              <td>
                {student.courses?.map((course) => course.name).join(", ")}
              </td>
              <td>
                <Link to={`/students/${student.id}`}>View</Link>
                <Link to={`/students/edit/${student.id}`}>Edit</Link>
                <button onClick={() => deleteStudentButton(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
