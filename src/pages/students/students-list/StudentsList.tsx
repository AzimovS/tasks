import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStudents } from '../../../services/students';
import { Student } from '../../../types';

const StudentsList = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    getStudents().then((res) => {
      setStudents(res);
    });
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <Link to="/students/create">Create</Link>
      <table style={{ width: '100%' }}>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Score</th>
          <th>Courses</th>
          <th>Actions</th>
        </tr>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.score}</td>
            <td>{student.courses?.map((course) => course.name).join(', ')}</td>
            <td>
              <Link to={`/students/${student.id}`}>View</Link>
              <Link to={`/students/edit/${student.id}`}>Edit</Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default StudentsList;
