import { useState } from "react";
import { TextWrapper } from "./Text.styles";

const Text = ({ value, setFormData, setFetch, setIsFetching, name }) => {
  const [, setText] = useState("");
  const handleChange = (e) => {
    setFormData((prev) => {
      if (name === "schoolSlug" || name === "deletePhrase") {
        return e.target.value;
      } else if (name === "author" || name === "title") {
        return {
          ...prev,
          [name]: e.target.value,
        };
      } else if (name === "recipient") {
        return {
          ...prev,
          [name]: { name: e.target.value, id: null },
        };
      } else {
        return {
          ...prev,
          [e.target.name]: {
            value: e.target.value,
            type: prev[e.target.name].type,
          },
        };
      }
    });
  };

  return (
    <>
      <TextWrapper
        as="input"
        placeholder={name[0].toUpperCase() + name.slice(1)}
        name={name}
        value={value}
        onChange={(e) => {
          setText(e.target.value);
          handleChange(e);
          setFetch && setFetch(true);
          setIsFetching && setIsFetching(true);
        }}
      />
    </>
  );
};

export default Text;
