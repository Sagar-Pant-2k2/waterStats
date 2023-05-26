// import React, { useEffect, useRef, useState } from 'react';


// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideshowRef = useRef(null);

//   useEffect(() => {
//     const slides = slideshowRef.current.querySelectorAll('.Slide');

//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const slides = slideshowRef.current.querySelectorAll('.Slide');
//     slides.forEach((slide, index) => {
//       slide.style.display = index === currentSlide ? 'block' : 'none';
//     });
//   }, [currentSlide]);

//   return (
//     <div className="slideshow-container" ref={slideshowRef}>
//       <div className="Slide">
//         <img alt="Slide 2" />
//       </div>
//       <div className="Slide">
//         <img src="https://th.bing.com/th/id/OIP.3bH4fDhbaAOLOeGoYm4gggHaFE?w=277&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Slide 1" />
//       </div>
//       <div className="Slide">
//         <img src= alt="Slide 3" />
//       </div>
//     </div>
//   );
// };

// export default Slider;


import React, { useEffect, useState } from 'react';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4); // Assuming there are 3 slides
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div className={`Slide ${currentSlide === 0 ? 'active' : ''}`}>
        <img src="./images/cot.jpg" alt="Slide 1" />
      </div>
      <div className={`Slide ${currentSlide === 1 ? 'active' : ''}`}>
        <img src="./images/pantnagar-slider.jpeg" />
      </div>
      <div className={`Slide ${currentSlide === 2 ? 'active' : ''}`}>
        <img src="./images/pantngarAerial.jpg"  />
      </div>
      <div className={`Slide ${currentSlide === 3 ? 'active' : ''}`}>
        <img src="./images/CotPantnagar.webp" alt="Slide 3" />
      </div>
      
      
    </div>
  );
};

export default Slider;
