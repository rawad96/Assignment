import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EditEmployee = ({ employee, edited }) => {
  const dispatch = useDispatch();
  const employeesUrl = import.meta.env.VITE_API_BACKEND_URL + "employees";

  const [formData, setformData] = useState({
    name: employee.name,
    email: employee.email,
    jobTitle: employee.jobTitle,
    salary: employee.salary,
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    const dataToSave = {
      name: formData.name,
      email: formData.email,
      jobTitle: formData.jobTitle,
      salary: parseInt(formData.salary),
    };

    try {
      const result = await axios.put(
        `${employeesUrl}/${employee.id}`,
        dataToSave
      );
      dispatch({
        type: "UPDATEEMPLOYEE",
        payload: { ...dataToSave, id: employee.id },
      });
      edited();
      alert("Employee updated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="actions-div">
        <div className="text-center py-3">
          <h3>Edit Car</h3>
        </div>
        <form onSubmit={updateEmployee}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChanges}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChanges}
            />
          </div>

          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              onChange={handleChanges}
              value={formData.jobTitle}
            />
          </div>

          <div>
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              name="salary"
              id="salary"
              onChange={handleChanges}
              value={formData.salary}
            />
          </div>

          <div className="text-center mt-4">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditEmployee;
