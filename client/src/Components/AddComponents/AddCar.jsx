import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddCar = ({ selecteTable }) => {
  const models = useSelector((state) => state.models);

  const dispatch = useDispatch();
  const carsUrl = import.meta.env.VITE_API_BACKEND_URL + "cars";

  const [formData, setformData] = useState({
    model_id: "",
    year: 0,
    price: 0,
    mileage: 0,
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
      model_id: parseInt(formData.model_id),
      year: parseInt(formData.year),
      price: parseInt(formData.price),
      mileage: parseInt(formData.mileage),
    };

    try {
      const result = await axios.post(carsUrl, dataToSave);
      dispatch({
        type: "ADDCAR",
        payload: { ...dataToSave, id: result.data.id },
      });
      selecteTable();
      alert("Car added successfuly");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="actions-div">
        <div className="text-center py-3">
          <h3>Add Car</h3>
        </div>
        <form onSubmit={saveData}>
          <div>
            <label htmlFor="model_id">Model</label>
            <select
              name="model_id"
              id="model_id"
              onChange={handleChanges}
              required
            >
              <option value="">Select a model</option>
              {models?.map((model, index) => {
                return (
                  <option key={index} value={model.id}>
                    {model.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="year">Year</label>
            <input
              type="number"
              name="year"
              id="year"
              onChange={handleChanges}
              required
            />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              onChange={handleChanges}
              required
            />
          </div>

          <div>
            <label htmlFor="mileage">Mileage</label>
            <input
              type="number"
              name="mileage"
              id="mileage"
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

export default AddCar;
