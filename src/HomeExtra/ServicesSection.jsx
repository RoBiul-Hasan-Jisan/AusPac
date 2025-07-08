import React from "react";
import { useNavigate } from "react-router-dom";
const services = [
  {
    name: "Draft Survey",
    image: "/image/draft survey.jpg",
  },
  {
    name: "On / Off Hire Survey",
    image: "/image/on off hire survey.jpg",
  },
  {
    name: "Cargo Hold Cleanliness Inspection",
    image: "/image/Cargo-hold-cleaning-inspection.jpg",
  },
  {
    name: "Cargo Holds Water-tightness Test / Sealing",
    image: "/image/water tightness.jpg",
  },
  {
    name: "Preparatory Port State Control Inspection",
    image: "/image/port control inspections.jpg",
  },
  {
    name: "Container / Cargo Damage Surveys",
    image: "/image/cargo damage.jpg",
  },
  {
    name: "Container / Flatrack Lashing Surveys",
    image: "/image/flatrack LASHING-SURVEY.jpg",
  },
  {
    name: "General Superintendence",
    image: "/image/General Superintendence.jpg",
  },
  {
    name: "P and I Clubs",
    image: "/image/P and I Clubs.webp",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900">
        Surveys We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.name}
              className="h-44 sm:h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-4 flex-grow flex items-center justify-center">
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => navigate("/services")}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          View All Services
        </button>
      </div>
    </section>
  );
}
