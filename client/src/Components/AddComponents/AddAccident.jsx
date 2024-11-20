import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddAccident = ({ selecteTable, allcars }) => {
  const accidentHistoryUrl =
    import.meta.env.VITE_API_BACKEND_URL + "accidentHistory";

  const dispatch = useDispatch();

  const [formData, setformData] = useState({
    carID: "",
    name: "",
    description: "",
    accidentDate: "",
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
      carID: parseInt(formData.carID),
      name: formData.name,
      description: formData.description,
      accidentDate: formData.accidentDate,
    };

    try {
      const result = await axios.post(accidentHistoryUrl, dataToSave);
      dispatch({
        type: "ADDACCIDENT",
        payload: { ...dataToSave, id: result.data.id },
      });
      selecteTable();
      alert("Accident added successfuly");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="actions-div">
        <div className="text-center py-3">
          <h3>Add Accident</h3>
        </div>
        <form onSubmit={saveData}>
          <div>
            <label htmlFor="carID">Car</label>
            <select name="carID" id="carID" onChange={handleChanges}>
              <option value="">Select a car</option>
              {allcars?.map((car, index) => {
                return (
                  <option key={index} value={car.id}>
                    {car.id}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="name">Driver Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              onChange={handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="accidentDate">Accident Date</label>
            <input
              type="date"
              name="accidentDate"
              id="accidentDate"
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

export default AddAccident;
