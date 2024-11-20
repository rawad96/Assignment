import "../CSS/AdminDashboard.css";
import { Suspense, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import CarsManagement from "../Components/CarsManagement";
import ModelManagement from "../Components/ModelsManagement";
import Features from "../Components/Features";
import EmployeesManagement from "../Components/EmployeesManagement";
import CarFeatures from "../Components/CarFeatures";
import AccidentHistory from "../Components/AccidentHistory";
import axios from "axios";
import { useDispatch } from "react-redux";
import AddCar from "../Components/AddComponents/AddCar";
import AddModel from "../Components/AddComponents/AddModel";
import AddFeature from "../Components/AddComponents/AddFeature";
import AddEmployee from "../Components/AddComponents/AddEmployee";
import AddAccident from "../Components/AddComponents/AddAccident";
import AddCarFeature from "../Components/AddComponents/AddCarFeature";

const AdminDashboard = () => {
  const carsUrl = import.meta.env.VITE_API_BACKEND_URL + "cars";
  const employeesUrl = import.meta.env.VITE_API_BACKEND_URL + "employees";
  const featuresUrl = import.meta.env.VITE_API_BACKEND_URL + "features";
  const modelsUrl = import.meta.env.VITE_API_BACKEND_URL + "models";
  const carFeaturesUrl = import.meta.env.VITE_API_BACKEND_URL + "carFeatures";
  const accidentsUrl = import.meta.env.VITE_API_BACKEND_URL + "accidentHistory";

  const dispatch = useDispatch();

  const [selectedTable, setselectedTable] = useState("");
  const [tablesData, settablesData] = useState({
    cars: [],
    employees: [],
    features: [],
    models: [],
    carFeatures: [],
    accidents: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data: cars } = await axios.get(carsUrl);
      const { data: employees } = await axios.get(employeesUrl);
      const { data: features } = await axios.get(featuresUrl);
      const { data: models } = await axios.get(modelsUrl);
      const { data: carFeatures } = await axios.get(carFeaturesUrl);
      const { data: accidentHistory } = await axios.get(accidentsUrl);

      settablesData((prevData) => ({
        ...prevData,
        cars: cars,
        employees: employees,
        features: features,
        models: models,
        carFeatures: carFeatures,
        accidentHistory: accidentHistory,
      }));

      dispatch({ type: "LOADCARS", payload: cars });
      dispatch({ type: "LOADMODELS", payload: models });
      dispatch({ type: "LOADFEATURES", payload: features });
      dispatch({ type: "LOADCARFEATURES", payload: carFeatures });
      dispatch({ type: "LOADACCIDENTS", payload: accidentHistory });
      dispatch({ type: "LOADEMPLOYEES", payload: employees });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="dashboard-div">
        <div className="dashboard-menu">
          <h3>Menu</h3>
          <hr />
          <ul>
            <li>
              <button onClick={() => setselectedTable("cars")}>Cars</button>
            </li>
            <li>
              <button onClick={() => setselectedTable("models")}>Models</button>
            </li>
            <li>
              <button onClick={() => setselectedTable("features")}>
                Features
              </button>
            </li>
            <li>
              <button onClick={() => setselectedTable("employees")}>
                Employees
              </button>
            </li>
            <li>
              <button onClick={() => setselectedTable("carFeatures")}>
                Car Features
              </button>
            </li>
            <li>
              <button onClick={() => setselectedTable("accidentHistory")}>
                Accident History
              </button>
            </li>
            <li>
              <button onClick={() => setselectedTable("addcar")}>
                Add Car
              </button>
            </li>
            <li>
              <button onClick={() => setselectedTable("addmodel")}>
                Add Model
              </button>
            </li>
            <li>
              <button onClick={() => setselectedTable("addfeature")}>
                Add Feature
              </button>
            </li>
            <li>
              <button onClick={() => setselectedTable("addemployee")}>
                Add Employee
              </button>
            </li>
            <li>
              <button onClick={() => setselectedTable("addaccident")}>
                Add Accident
              </button>
            </li>
            <li>
              <button onClick={() => setselectedTable("addcarfeature")}>
                Add Car Features
              </button>
            </li>
          </ul>
        </div>
        <div className="table-div">
          {selectedTable === "cars" && (
            <Suspense fallback={<Spinner />}>
              <CarsManagement />
            </Suspense>
          )}
          {selectedTable === "models" && (
            <Suspense fallback={<Spinner />}>
              <ModelManagement />
            </Suspense>
          )}
          {selectedTable === "features" && (
            <Suspense fallback={<Spinner />}>
              <Features />
            </Suspense>
          )}
          {selectedTable === "employees" && (
            <Suspense fallback={<Spinner />}>
              <EmployeesManagement />
            </Suspense>
          )}
          {selectedTable === "carFeatures" && (
            <Suspense fallback={<Spinner />}>
              <CarFeatures />
            </Suspense>
          )}
          {selectedTable === "accidentHistory" && (
            <Suspense fallback={<Spinner />}>
              <AccidentHistory />
            </Suspense>
          )}
          {selectedTable === "addcar" && (
            <AddCar selecteTable={() => setselectedTable("")} />
          )}
          {selectedTable === "addmodel" && (
            <AddModel selecteTable={() => setselectedTable("")} />
          )}
          {selectedTable === "addfeature" && (
            <AddFeature selecteTable={() => setselectedTable("")} />
          )}
          {selectedTable === "addemployee" && (
            <AddEmployee selecteTable={() => setselectedTable("")} />
          )}
          {selectedTable === "addaccident" && (
            <AddAccident
              selecteTable={() => setselectedTable("")}
              allcars={tablesData.cars}
            />
          )}
          {selectedTable === "addcarfeature" && (
            <AddCarFeature
              selecteTable={() => setselectedTable("")}
              allcars={tablesData.cars}
              allfeatures={tablesData.features}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
