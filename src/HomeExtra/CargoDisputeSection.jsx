import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import cargoImages from "../data/cargoImages";

export default function CargoDisputeSection() {
  const navigate = useNavigate(); // ✅ useNavigate hook

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Left Text - Centered Vertically */}
  <div className="flex justify-center">
    <div className="bg-white rounded-xl shadow-lg p-10 text-gray-800 max-w-xl space-y-8">
      <h2 className="text-3xl font-extrabold text-indigo-600">
        Facing Cargo Disputes?
      </h2>

      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          <strong className="text-indigo-700">Your vessel has just loaded a cargo.</strong> 
          Now there is a dispute between the Master and the shipper as to the quantity of cargo loaded. What do you do?
        </p>
        <p>
          <strong className="text-indigo-700">Your vessel has just discharged cargo.</strong> 
          Now there is a dispute between the Master and the receiver as to the quantity of cargo discharged. What do you do?
        </p>
        <p>
          You open cargo holds at the discharge port and find cargo has shifted and there could possibly be damage to it. What do you do?
        </p>
        <p>
          You are a ship owner expecting a strict cargo hold inspection before you load delicate cargo and want your interests protected. What do you do?
        </p>
        <p className="font-semibold text-indigo-600">
          Call on an experienced and trusted Marine Consultant and Surveyor, is what you do.
        </p>
      </div>

      <button
        type="button"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        onClick={() => navigate("/contact")}
      >
        Contact Us Now
      </button>
    </div>
  </div>

  {/* Right Image Slider */}
  <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-300 bg-white">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    loop
    className="rounded-3xl"
  >
    {cargoImages.map((src, i) => (
      <SwiperSlide key={i}>
        <div className="relative group aspect-video">
          <img
            src={src}
            alt={`Cargo image ${i + 1}`}
            loading="lazy"
            className="w-full h-full object-cover rounded-3xl transition duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Optional Caption */}
          {/* 
          <div className="absolute bottom-4 left-4 text-white text-sm font-medium z-10">
            Cargo Scene {i + 1}
          </div> 
          */}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

</section>
  );
}
