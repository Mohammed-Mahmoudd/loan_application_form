import { useContext } from "react";
import { FirstContext } from "./contexts/InputFormContexts";
import { UserContext } from "./contexts/UserContext";
export default function MyComponent() {
  let InputContext = useContext(FirstContext);
  const inputStyle = {
    paddingTop: "5px",
    paddingBottom: "5px",
  };

  let UserData = useContext(UserContext);
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        marginBottom: "7px",
      }}
    >
      <label>{InputContext.title}</label>
      <input
        type="text"
        onChange={(event) => {
          InputContext.handleFunction(event.target.value, "name");
        }}
        value={InputContext.value}
        style={inputStyle}
      />
    </div>
  );
}
