export default function ErrorPopUp(data) {
  const regName = /^[a-zA-Z]+$/;
  const regAge = /^[0-9]+$/;
  const regPhone = /^\d{11}$/;
  function CheckName() {
    if (!regName.test(data.name)) {
      return (
        <h2 style={{ background: "white", color: "red ", padding: "15px" }}>
          Enter a valid Name
        </h2>
      );
    } else return null;
  }
  function CheckAge() {
    const num = parseInt(data.age);
    if (!regAge.test(data.age) || num <= 12 || num >= 100) {
      return (
        <h2 style={{ background: "white", color: "red ", padding: "15px" }}>
          Enter a valid age
        </h2>
      );
    } else return null;
  }
  function CheckPhone() {
    if (!regPhone.test(data.phone)) {
      return (
        <h2 style={{ background: "white", color: "red ", padding: "15px" }}>
          Enter a valid phone
        </h2>
      );
    } else return null;
  }
  function CheckSuccess() {
    const num = parseInt(data.age);
    if (
      regPhone.test(data.phone) &&
      regAge.test(data.age) &&
      regName.test(data.name) &&
      num > 12 &&
      num < 99
    ) {
      return (
        <h2 style={{ background: "white", color: "green ", padding: "15px" }}>
          Form is send Successfully
        </h2>
      );
    }
  }
  return (
    <div>
      <CheckName />
      <CheckPhone />
      <CheckAge />
      <CheckSuccess />
    </div>
  );
}
