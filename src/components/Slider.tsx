import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import rc-slider styles

interface RatingSliderProps {
    onRatingChange: (value: number) => void; // Callback prop type
    initialRating: number; 
  }
const RatingSlider: React.FC<RatingSliderProps> = ({ onRatingChange ,initialRating,})=> {
  const [rating, setRating] = useState(1); // Initial rating

  // Define 5 image paths and their corresponding names
  const images = [
    { src: "/public/1.png", name: "Worst" },
    { src: "/public/2.png", name: "Not Good" },
    { src: "/public/3.png", name: "Fine" },
    { src: "/public/4.png", name: "Look Good" },
    { src: "/public/5.png", name: "Very Good" },
  ];

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleSliderChange = (value: any) => {
    setRating(value); // Update rating on slide
    onRatingChange(value);
  };

  return (
    <div className="slider-container">
      <h1 className="text-lightBlue font-semibold mb-3">
        Share your experience in scaling
      </h1>

      {/* Slider-controlled Images and Names */}
      <div className="flex justify-between">
        {images.map((image, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src={image.src}
              alt={image.name}
              style={{
                width: "50px",
                height: "50px",
                filter: rating === index + 1 ? "none" : "grayscale(100%)", // Apply grayscale filter to dim the image
                opacity: rating === index + 1 ? 1 : 0.5, // Dim other images
                transition: "opacity 0.3s, filter 0.3s", // Smooth transition
              }}
            />
            {/* Display corresponding name below the image with the same dim effect */}
            <p
              className="w-12"
              style={{
                color: rating === index + 1 ? "#105955" : "#A5E0DD", // Dim color of text when not selected
                opacity: rating === index + 1 ? 1 : 0.5,
                transition: "opacity 0.3s, color 0.3s", // Smooth transition for text
                fontWeight: "bold",
                marginTop: "10px", // Space between image and name
                textAlign: "center",
              }}
            >
              {image.name}
            </p>
          </div>
        ))}
      </div>

      {/* Slider */}
      <Slider
        min={1}
        max={5} // Adjust max to 5 for 5 ratings
        value={rating}
        onChange={handleSliderChange}
        step={1}
        trackStyle={{ backgroundColor: "#105955", height: 8, borderRadius: 10 }} // Adjusted height and rounded the track
        handleStyle={{
          borderColor: "#105955",
          height: 20, // Adjust handle size to fit within the track
          width: 20,
          marginLeft: -10, // Center the handle on the track
          marginTop: -6, // Adjust the handle's vertical position to align with the track
          backgroundColor: "#A5E0DD",
        }}
        railStyle={{ height: 8, borderRadius: 10 }} // Ensure the rail matches the track's height and style
      />
    </div>
  );
};

export default RatingSlider;
