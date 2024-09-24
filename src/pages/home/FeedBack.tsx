import React from "react";
import { useFormContext } from "../../context/FormContext";

const MyForm: React.FC = () => {
  const { formDataContext } = useFormContext();

 
  const images = [
    { src: "/1.png", name: "Worst", rating: "1" },
    { src: "/2.png", name: "Not Good", rating: "2" },
    { src: "/3.png", name: "Fine", rating: "3" },
    { src: "/4.png", name: "Look Good", rating: "4" },
    { src: "/5.png", name: "Very Good", rating: "5" },
  ];

  return (
    <div>
      <h1 className="text-[20.27px] font-[800] text-lightBlue mb-4">Submitted Feedbacks</h1>
      <div className="flex flex-col gap-3">
        {/* Map over the formDataContext and display each feedback as a card */}
        {formDataContext.length > 0 ? (
          formDataContext.map((feedback, index) => {
            // Find the corresponding image for the rating
            const image = images.find((img) => img.rating === feedback.rating);

            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-[12px] p-4 w-[410px] h-[100px] flex justify-between items-center"
              >
                <div>
                  <p className="text-lightBlue text-[14px] font-[700]">
                    {feedback.comments}
                  </p>
                  <p className="text-lightBlue text-[14px] font-[500]">
                    {feedback.name}
                  </p>
                </div>

                {/* Display image based on rating */}
                {image ? (
                  <div className="flex items-center flex-col justify-center">
                    <img
                      src={image.src}
                      alt={image.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <p className="ml-2 text-[#39AB26] text-[10.5px] font-[700]">
                      {image.name}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-700">{feedback.rating}</p>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-700">No feedback submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyForm;
