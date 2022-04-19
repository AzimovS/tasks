import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FacultyForm from "../../../components/faculty-form/FacultyForm";
import { ToastContext } from "../../../contexts/ToastContext";
import { createFaculty } from "../../../services/faculties";
import { Faculty } from "../../../types";

const FacultyCreate = () => {
  const navigate = useNavigate();
  const { dispatch: toastDispatch } = useContext(ToastContext);

  const onFormSubmit = (data: Partial<Faculty>) => {
    console.log("REQUEST BODY", data);
    createFaculty(data)
      .then((res) => {
        console.log("RESPONSE", res);
        if (res.id) {
          navigate("/faculties");
        }
        toastDispatch({
          type: "SUCCESS",
          payload: {
            message: "Faculty was created",
            props: {
              autoClose: 2000,
            },
          },
        });
      })
      .catch((err) => {
        toastDispatch({
          type: "ERROR",
          payload: { message: err.message || "Faculty creation failed" },
        });
      });
  };

  return (
    <div>
      <h2>Create faculty</h2>
      <FacultyForm onSubmit={onFormSubmit} />
    </div>
  );
};

export default FacultyCreate;
