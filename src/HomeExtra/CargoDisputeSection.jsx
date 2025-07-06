

//const cargoImages = [
 //'/image/img1.jpeg',
  //'/image/img2.jpeg',
 // '/image/img3.jpeg',
 // '/image/img4.jpeg',
 // '/image/img5.jpeg',
 // '/image/img6.jpeg',
 // '/image/img7.jpeg',
 // '/image/img8.jpeg',
 // '/image/img9.jpeg',
  //'/image/img10.jpeg',
//];
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import modules from 'swiper/modules'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const cargoImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519659528534-75e227db988f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513569771921-daf7faaf5087?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
];



export default function CargoDisputeSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      
      {/* Left Text */}
      <div className="text-gray-900 space-y-6">
        <p>
          <strong>Your vessel has just loaded a cargo.</strong> Now there is a dispute between the Master and the shipper as to the quantity of cargo loaded. What do you do?
        </p>
        <p>
          <strong>Your vessel has just discharged cargo.</strong> Now there is a dispute between the Master and the receiver as to the quantity of cargo discharged. What do you do?
        </p>
        <p>
          You open cargo holds at the discharge port and find cargo has shifted and there could possibly be damage to it. What do you do?
        </p>
        <p>
          You are a ship owner expecting a rather strict cargo hold inspection before you load a delicate cargo and you want your interests protected. What do you do?
        </p>
        <p>
          <strong>Call on an experienced and trusted Marine Consultant and Surveyor, is what you do.</strong>
        </p>
      </div>

      {/* Right Image Slider */}
      <div className="rounded-lg overflow-hidden shadow-lg max-w-md w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {cargoImages.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Cargo related ${i + 1}`}
                className="w-full h-72 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
