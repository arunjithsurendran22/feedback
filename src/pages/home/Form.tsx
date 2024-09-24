import React, { useState } from "react";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";
import RatingSlider from "../../components/Slider";
import { useFormContext } from "../../context/FormContext";
import InputBox from "../../components/ui/InputBox ";

interface FormData {
  name: string;
  contact: string;
  email: string;
  comments: string;
  rating: string;
}

const Form: React.FC = () => {
  const [rating, setRating] = useState(1);
  const { setFormDataContext } = useFormContext();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    comments: "",
    rating: "",
  });

  const [errors, setErrors] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    comments: "",
    rating: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
    setFormData((prevData) => ({
      ...prevData,
      rating: value.toString(),
    }));
  };

  const validateForm = () => {
    const newErrors: FormData = {
      name: formData.name ? "" : "Name is required",
      contact: formData.contact ? "" : "Contact number is required",
      email: formData.email ? "" : "Email is required",
      comments: formData.comments ? "" : "Comments are required",
      rating: formData.rating ? "" : "Rating is required",
    };
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormDataContext((prevData: any) => [...prevData, formData]);

      // Reset form
      setFormData({
        name: "",
        contact: "",
        email: "",
        comments: "",
        rating: "",
      });
      setErrors({
        name: "",
        contact: "",
        email: "",
        comments: "",
        rating: "",
      });
      setRating(1);
    }
  };

  // Check if any error exists
  const hasErrors = Object.values(errors).some((error) => error !== "");

  return (
    <div
      className={`w-[410px] bg-white rounded-[12px] shadow-md p-6 ${
        hasErrors ? "h-[48rem]" : ""
      }`}
    >
      <h1 className="text-lightBlue text-[14px] font-[500] mb-4">
        Please Provide Your Feedback
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between gap-8">
          <div className="w-full">
            <InputBox
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <InputBox
              label="Contact Number"
              name="contact"
              type="number"
              value={formData.contact}
              onChange={handleChange}
            />
            {errors.contact && (
              <p className="text-red-500 text-xs">{errors.contact}</p>
            )}
          </div>
        </div>

        <div className="w-[160px]">
          <InputBox
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        <RatingSlider
          onRatingChange={handleRatingChange}
          initialRating={rating}
        />
        {errors.rating && (
          <p className="text-red-500 text-xs">{errors.rating}</p>
        )}

        <div className="w-full">
          <TextArea
            name="comments"
            placeHolder="Add your comments..."
            value={formData.comments}
            onChange={handleChange}
          />
          {errors.comments && (
            <p className="text-red-500 text-xs">{errors.comments}</p>
          )}
        </div>

        <Button
          onClick={handleSubmit}
          label="Submit"
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg"
        />
      </form>
    </div>
  );
};

export default Form;
