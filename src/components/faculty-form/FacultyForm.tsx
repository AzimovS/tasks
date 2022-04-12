import { stringify } from 'querystring';
import { useState } from 'react';
import { Faculty } from '../../types';

type Props = {
  initialValues?: Partial<Faculty>;
  onSubmit: (data: Partial<Faculty>) => void;
};

const FacultyForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState<Partial<Faculty>>(
    initialValues ?? {
      name: '',
      createdAt: '',
      updatedAt: '',
    }
  );

  const changeField = (fieldName: keyof Faculty) => {
    return (e: any) => {
      setValues((v) => ({
        ...v,
        [fieldName]: e.target.value,
      }));
    };
  };

  const sendForm = () => {
    onSubmit(values);
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type={'text'}
          value={values?.name}
          onChange={changeField('name')}
        />
      </div>
      <div>
        <label>Created At</label>
        <input
          type={'text'}
          value={values?.createdAt}
          onChange={changeField('createdAt')}
        />
      </div>
      <div>
        <label>Updated At</label>
        <input
          type={'text'}
          value={values?.updatedAt}
          onChange={changeField('updatedAt')}
        />
      </div>
      <button onClick={sendForm}>Submit</button>
    </div>
  );
};

export default FacultyForm;
