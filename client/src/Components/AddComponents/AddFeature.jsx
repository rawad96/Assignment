import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddFeature = ({ selecteTable }) => {
  const dispatch = useDispatch();
  const featuresUrl = import.meta.env.VITE_API_BACKEND_URL + "features";

  const [formData, setformData] = useState({
    name: "",
    description: "",
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
      description: formData.description,
    };

    try {
      const result = await axios.post(featuresUrl, dataToSave);
      dispatch({
        type: "ADDFEATURE",
        payload: { ...dataToSave, id: result.data.id },
      });
      selecteTable();
      alert("Feature added successfuly");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="actions-div">
        <div className="text-center py-3">
          <h3>Add Feature</h3>
        </div>
        <form onSubmit={saveData}>
          <div>
            <label htmlFor="name">Feature Title</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Feature Title</label>
            <textarea
              type="text"
              name="description"
              id="description"
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

export default AddFeature;
