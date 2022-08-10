import { TextWrapper } from "./Text.styles";

const Text = ({ value, setFormData, name }) => {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: {
        value: e.target.value,
        type: prev[e.target.name].type,
      },
    }));
  };

  return (
    <>
      <TextWrapper
        placeholder="Input text"
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
};

export default Text;
