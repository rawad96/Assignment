import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddCarFeature = ({ selecteTable, allcars, allfeatures }) => {
  const carFeaturesUrl = import.meta.env.VITE_API_BACKEND_URL + "carFeatures";

  const dispatch = useDispatch();

  const [formData, setformData] = useState({
    carId: "",
    featureId: "",
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
      carId: parseInt(formData.carId),
      featureId: parseInt(formData.featureId),
    };

    try {
      const result = await axios.post(carFeaturesUrl, dataToSave);
      dispatch({
        type: "ADDCARFEATURE",
        payload: { ...dataToSave },
      });
      selecteTable();
      alert("Car feature added successfuly");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="actions-div">
        <div className="text-center py-3">
          <h3>Add Car Feature</h3>
        </div>
        <form onSubmit={saveData}>
          <div>
            <label htmlFor="carId">Car</label>
            <select name="carId" id="carId" onChange={handleChanges}>
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
            <label htmlFor="featureId">Features</label>
            <select name="featureId" id="featureId" onChange={handleChanges}>
              <option value="">Select a Feature</option>
              {allfeatures?.map((feature, index) => {
                return (
                  <option key={index} value={feature.id}>
                    {feature.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="text-center mt-4">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCarFeature;
