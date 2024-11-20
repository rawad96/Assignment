import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EditCar = ({ car, edited }) => {
  const dispatch = useDispatch();
  const carsUrl = import.meta.env.VITE_API_BACKEND_URL + "cars";

  const [formData, setformData] = useState({
    year: car.year,
    price: car.price,
    mileage: car.mileage,
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateCar = async (e) => {
    e.preventDefault();
    const dataToSave = {
      year: parseInt(formData.year),
      price: parseInt(formData.price),
      mileage: parseInt(formData.mileage),
    };

    try {
      const result = await axios.put(`${carsUrl}/${car.id}`, dataToSave);
      dispatch({
        type: "UPDATECAR",
        payload: { ...dataToSave, id: car.id },
      });
      edited();
      alert("Car edited");
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
        <form onSubmit={updateCar}>
          <div>
            <label htmlFor="year">Year</label>
            <input
              type="number"
              name="year"
              id="year"
              value={formData.year}
              onChange={handleChanges}
            />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChanges}
            />
          </div>

          <div>
            <label htmlFor="mileage">Mileage</label>
            <input
              type="number"
              name="mileage"
              id="mileage"
              onChange={handleChanges}
              value={formData.mileage}
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

export default EditCar;
