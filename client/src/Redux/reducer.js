const initialState = {
  cars: [],
  features: [],
  carFeatures: [],
  models: [],
  accidents: [],
  employees: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADCARS": {
      return { ...state, cars: action.payload };
    }
    case "LOADFEATURES": {
      return { ...state, features: action.payload };
    }
    case "LOADCARFEATURES": {
      return { ...state, carFeatures: action.payload };
    }
    case "LOADMODELS": {
      return { ...state, models: action.payload };
    }
    case "LOADACCIDENTS": {
      return { ...state, accidents: action.payload };
    }
    case "LOADEMPLOYEES": {
      return { ...state, employees: action.payload };
    }
    case "ADDCAR": {
      return { ...state, cars: [...state.cars, action.payload] };
    }
    case "ADDMODEL": {
      return { ...state, models: [...state.models, action.payload] };
    }
    case "ADDEMPLOYEE": {
      return { ...state, employees: [...state.employees, action.payload] };
    }
    case "ADDFEATURE": {
      return { ...state, features: [...state.features, action.payload] };
    }
    case "ADDACCIDENT": {
      return { ...state, accidents: [...state.accidents, action.payload] };
    }
    case "ADDCARFEATURE": {
      return {
        ...state,
        carFeatures: [...state.carFeatures, action.payload],
      };
    }
    case "DELETECAR": {
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    }
    case "DELETECARFEATURES": {
      return {
        ...state,
        carFeatures: state.carFeatures.filter(
          (feature) => feature.carId !== action.payload
        ),
      };
    }
    case "DELETEACCIDENTS": {
      return {
        ...state,
        accidents: state.accidents.filter(
          (accident) => accident.carID !== action.payload
        ),
      };
    }
    case "DELETEEMPLOYEE": {
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    }
    case "DELETEACCIDENT": {
      return {
        ...state,
        accidents: state.accidents.filter(
          (accident) => accident.id !== action.payload
        ),
      };
    }
    case "UPDATECAR": {
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.id ? { ...car, ...action.payload } : car
        ),
      };
    }
    case "UPDATEEMPLOYEE": {
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id
            ? { ...employee, ...action.payload }
            : employee
        ),
      };
    }
    default:
      return state;
  }
};

export default appReducer;
