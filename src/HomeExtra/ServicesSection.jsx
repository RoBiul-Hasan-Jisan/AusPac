import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "Draft Survey",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "On / Off Hire Survey",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cargo Hold Cleanliness Inspection",
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cargo Holds Water-tightness Test / Sealing",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Preparatory Port State Control Inspection",
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Container / Cargo Damage Surveys",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Container / Flatrack Lashing Surveys",
    image:
      "https://images.unsplash.com/photo-1519659528534-75e227db988f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "General Superintendence",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "P and I Clubs",
    image:
      "https://images.unsplash.com/photo-1513569771921-daf7faaf5087?auto=format&fit=crop&w=400&q=80",
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
