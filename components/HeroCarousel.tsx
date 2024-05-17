"use client" // This line specifies that this code should run on the client-side only

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing the CSS styles for the carousel component

import { Carousel } from 'react-responsive-carousel'; // Importing the Carousel component from the react-responsive-carousel library
import Image from "next/image"; // Importing the Image component from Next.js

const heroImages = [ // An array containing objects with image URLs and their corresponding alt text
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' }, // First image object
    { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' }, // Second image object
    { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' }, // Third image object
    { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' }, // Fourth image object
    { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' }, // Fifth image object
]

const HeroCarousel = () => { // Defining a functional component named HeroCarousel
  return (
    <div className="hero-carousel" > 
        <Carousel // Using the Carousel component from react-responsive-carousel
            showThumbs={false} // Hiding the thumbnail navigation
            autoPlay  //Enabling automatic slideshow
            infiniteLoop // Enabling infinite looping of slides
            interval={2000} // Setting interval for automatic slide change (in milliseconds)
            showArrows={false} // Hiding navigation arrows
            showStatus={false} // Hiding status indicators
        >
           {heroImages.map((image) => ( // Mapping over the heroImages array to render each image
            <Image // Using the Next.js Image component to render images
                src={image.imgUrl} // Setting the image source
                alt="image.alt" // Incorrect usage, should be {image.alt} to render alt text dynamically
                width={484} // Setting the width of the image
                height={484} // Setting the height of the image
                className="object-contain" // Applying CSS class for styling (object-contain)
                key={image.alt} // Setting a unique key for each image
            />
           ))}
        </Carousel>
        <Image // Using the Next.js Image component to render an additional image (arrow icon)
            src="/assets/icons/hand-drawn-arrow.svg" // Setting the image source
            alt="arrow" // Alt text for the image
            width={175} // Setting the width of the image
            height={175} // Setting the height of the image
            className="max-xl:hidden absolute -left-[15%] bottom-0" // Applying CSS classes for styling
        />
    </div>
  )
}

export default HeroCarousel // Exporting the HeroCarousel component for use in other parts of the application
