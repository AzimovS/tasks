import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getStudent } from '../../../services/students';
import { Student } from '../../../types';

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<Student>();

  useEffect(() => {
    if (!id) {
      return;
    }
    getStudent(id).then((res) => {
      setStudent(res);
    });
  }, [id]);
  return student ? (
    <div>
      <h2>Student details {student.id}</h2>
      <Link to={`/students/edit/${student.id}`}>Edit</Link>
      <ul>
        <li>First name: {student.firstName}</li>
        <li>Last name: {student.lastName}</li>
        <li>Score: {student.score}</li>
        <li>
          Courses:
          <ul>
            {student.courses?.map((course, idx) => (
              <li key={`${course.name}-${idx}`}>{course.name}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  ) : (
    <h2>Student not found</h2>
  );
};

export default StudentDetails;
