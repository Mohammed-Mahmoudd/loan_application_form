import "./App.css";
import Error from "./ErrorPopUp.js";
import { useState } from "react";
import MyComponent from "./MyComponent.js";
import { FirstContext } from "./contexts/InputFormContexts.js";
import { UserContext } from "./contexts/UserContext.js";

function App() {
  const inputStyle = {
    paddingTop: "5px",
    paddingBottom: "5px",
  };
  function Button() {
    if (
      fromInput.age !== "" &&
      fromInput.name !== "" &&
      fromInput.phone !== ""
    ) {
      return (
        <button
          style={{
            width: "70px",
            border: "none",
            background: "red",
            color: "white",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          Submit
        </button>
      );
    } else {
      return (
        <button
          disabled
          style={{
            width: "70px",
            border: "none",
            background: "#3f3f3f",
            color: "white",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          Submit
        </button>
      );
    }
  }
  function handleMyComponentName(value) {
    setFormInput({ ...fromInput, name: value });
  }
  function handleMyComponentPhone(value) {
    setFormInput({ ...fromInput, phone: value });
  }
  function handleMyComponentAge(value) {
    setFormInput({ ...fromInput, age: value });
  }
  const [fromInput, setFormInput] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
    visible: false,
  });

  return (
    <UserContext.Provider
      value={{
        name: "Mohammed",
        email: "gamermada2@gmail.com",
        phone: 201126633680,
      }}
    >
      <div className="App">
        <div
          style={{
            borderRadius: "15px",
            width: "650px",
            backgroundColor: "#2C00A0",
            padding: "20px",
          }}
        >
          <h1>Requesting a Loan</h1>
          <hr></hr>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setFormInput({ ...fromInput, visible: true });
              console.log(fromInput);
            }}
          >
            <FirstContext.Provider
              value={{
                value: fromInput.name,
                handleFunction: handleMyComponentName,
                title: "Name:",
              }}
            >
              <MyComponent />
            </FirstContext.Provider>

            <FirstContext.Provider
              value={{
                value: fromInput.phone,
                handleFunction: handleMyComponentPhone,
                title: "Phone Number:",
              }}
            >
              <MyComponent />
            </FirstContext.Provider>

            <FirstContext.Provider
              value={{
                value: fromInput.age,
                handleFunction: handleMyComponentAge,
                title: "Age:",
              }}
            >
              <MyComponent />
            </FirstContext.Provider>

            <div
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                marginBottom: "7px",
              }}
            >
              <label>Are you an employee?</label>
              <input
                type="checkbox"
                checked={fromInput.isEmployee}
                style={{ transform: "scale(3)", margin: "20px" }}
                onChange={(event) => {
                  setFormInput({
                    ...fromInput,
                    isEmployee: event.target.checked,
                  });
                }}
              />
            </div>
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                marginBottom: "7px",
              }}
            >
              <label>Salary:</label>
              <select
                style={inputStyle}
                value={fromInput.salary}
                onChange={(event) => {
                  setFormInput({ ...fromInput, salary: event.target.value });
                }}
              >
                <option>less than 500$</option>
                <option>more than 500$</option>
                <option>more than 1500$</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "7px",
              }}
            >
              <Button />
            </div>
          </form>
          <div
            onClick={() => {
              setFormInput({ ...fromInput, visible: false });
            }}
          >
            <div
              style={{
                height: "100vh",
                background:
                  " linear-gradient(rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 5))",
                display: fromInput.visible ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
              }}
            >
              <Error
                name={fromInput.name}
                phone={fromInput.phone}
                age={fromInput.age}
              ></Error>
            </div>
          </div>
        </div>
        );
      </div>
    </UserContext.Provider>
  );
}

export default App;
