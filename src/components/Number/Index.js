import { NumberWrapper } from "./Number.styles";

const Number = ({ value, setFormData, name }) => {
  const handleChange = (e) => {
    setFormData((prev) =>
      name === "paginationResults"
        ? {
            ...prev,
            [name]: e.target.value,
          }
        : {
            ...prev,
            [e.target.name]: {
              value: e.target.value,
              type: prev[e.target.name].type,
            },
          }
    );
  };
  return (
    <>
      <NumberWrapper
        as="input"
        type="number"
        placeholder="Input number"
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
};

export default Number;
