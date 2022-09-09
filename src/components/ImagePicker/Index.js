import { useRef } from "react";
import { BsImage } from "react-icons/bs";
import { MdPreview } from "react-icons/md";
import { ImagePickerWrapper, ImagePickerContent } from "./ImagePicker.styles";

const ImagePicker = ({ value, formData, setFormData, name }) => {
  const imageRef = useRef();

  const handleChange = (e) => {
    const reader = new FileReader();

    const file = e.target.files[0];

    reader.onload = () => {
      const imgURL = reader.result;
      imageRef.current.src = imgURL;
      name === "cover"
        ? setFormData((prev) => ({
            ...prev,
            [e.target.name]: imgURL,
          }))
        : setFormData((prev) => ({
            ...prev,
            [e.target.name]: { value: imgURL, type: "Image Picker" },
          }));
    };

    reader.readAsDataURL(file);
    console.log(formData);
  };

  return (
    <ImagePickerWrapper>
      <ImagePickerContent name={name}>
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
        {formData[name]?.value && (
          <p className="preview-text">
            <MdPreview fontSize={"1.2rem"} />
            <span>Image Preview</span>
          </p>
        )}
        <img ref={imageRef} alt="" src={value} />
      </ImagePickerContent>
    </ImagePickerWrapper>
  );
};

export default ImagePicker;
