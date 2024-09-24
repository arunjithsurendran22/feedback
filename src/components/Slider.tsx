import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; 

interface RatingSliderProps {
    onRatingChange: (value: number) => void; 
    initialRating: number; 
  }
const RatingSlider: React.FC<RatingSliderProps> = ({ onRatingChange ,initialRating,})=> {
  const [rating, setRating] = useState(1); // Initial rating

  
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
    setRating(value); 
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
                filter: rating === index + 1 ? "none" : "grayscale(100%)",
                opacity: rating === index + 1 ? 1 : 0.5, 
                transition: "opacity 0.3s, filter 0.3s", 
              }}
            />
            {/* Display corresponding name below the image with the same dim effect */}
            <p
              className="w-12"
              style={{
                color: rating === index + 1 ? "#105955" : "#A5E0DD", 
                opacity: rating === index + 1 ? 1 : 0.5,
                transition: "opacity 0.3s, color 0.3s", 
                fontWeight: "bold",
                marginTop: "10px", 
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
        max={5} 
        value={rating}
        onChange={handleSliderChange}
        step={1}
        trackStyle={{ backgroundColor: "#105955", height: 8, borderRadius: 10 }} 
        handleStyle={{
          borderColor: "#105955",
          height: 20, 
          width: 20,
          marginLeft: -10,
          marginTop: -6, 
          backgroundColor: "#A5E0DD",
        }}
        railStyle={{ height: 8, borderRadius: 10 }} 
      />
    </div>
  );
};

export default RatingSlider;
