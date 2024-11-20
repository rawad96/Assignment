import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddEmployee = ({ selecteTable }) => {
  const dispatch = useDispatch();
  const employeesUrl = import.meta.env.VITE_API_BACKEND_URL + "employees";

  const [formData, setformData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    salary: 0,
    dateOfBirth: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveData = async (e) => {
    e.preventDefault();
    const dataToSave = {
      name: formData.name,
      email: formData.email,
      jobTitle: formData.jobTitle,
      salary: parseInt(formData.salary),
      hireDate: new Date(),
      dateOfBirth: formData.dateOfBirth,
    };

    try {
      const result = await axios.post(employeesUrl, dataToSave);
      dispatch({
        type: "ADDEMPLOYEE",
        payload: { ...dataToSave, id: result.data.id },
      });
      selecteTable();
      alert("Employee added successfuly");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="actions-div">
        <div className="text-center py-3">
          <h3>Add Employee</h3>
        </div>
        <form onSubmit={saveData}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              onChange={handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              name="salary"
              id="salary"
              onChange={handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date Of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={handleChanges}
              required
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

export default AddEmployee;
