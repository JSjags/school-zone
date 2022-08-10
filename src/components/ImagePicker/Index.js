import { useRef } from "react";
import { BsImage } from "react-icons/bs";
import { ImagePickerWrapper, ImagePickerContent } from "./ImagePicker.styles";

const ImagePicker = ({ value, formData, setFormData, name }) => {
  const imageRef = useRef();

  const handleChange = (e) => {
    const reader = new FileReader();

    const file = e.target.files[0];

    reader.onload = () => {
      const imgURL = reader.result;
      imageRef.current.src = imgURL;
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: {
          value: imgURL,
          type: prev[e.target.name].type,
        },
      }));
    };

    reader.readAsDataURL(file);
    console.log(formData);
  };

  return (
    <ImagePickerWrapper>
      <ImagePickerContent>
        <label htmlFor="file-picker" className="primary-white-btn">
          <BsImage />
          <span>Click to select image</span>
        </label>
        <input
          name={name}
          type="file"
          id="file-picker"
          className="file-picker"
          onChange={handleChange}
        />
        {formData[name]?.value && <p className="preview-text">Image Preview</p>}
        <img ref={imageRef} alt="" />
      </ImagePickerContent>
    </ImagePickerWrapper>
  );
};

export default ImagePicker;
