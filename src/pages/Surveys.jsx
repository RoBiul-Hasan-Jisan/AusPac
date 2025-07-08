// src/pages/Surveys.jsx

//import { motion } from "framer-motion";
//import surveys from "../data/surveyData"; // your JSON-based survey data

//export default function Surveys() {
  //return (
    //<section className="bg-gradient-to-b from-white via-blue-50 to-purple-50 py-20 px-4 sm:px-8">
     // <h2 className="text-center text-4xl font-bold text-indigo-800 mb-16">
      //  Our Survey Services
     // </h2>

      //<div className="relative max-w-5xl mx-auto">
      //  {/* Vertical Road Line */}
      //  <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-indigo-300 z-0" />

      //  {/* Timeline Cards */}
      //  {surveys.map((survey, index) => {
       //   const isLeft = index % 2 === 0;
        //  return (
          //  <div
          //    key={survey.title}
           //  className={`relative w-full flex ${
             //   isLeft ? "justify-start" : "justify-end"
              //} mb-20 z-10`}
            //>
              //<div className="w-full sm:w-1/2 px-4">
               // <motion.div
                //  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                 // whileInView={{ opacity: 1, x: 0 }}
                  //exit={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  //transition={{ duration: 0.6, ease: "easeInOut" }}
                 // viewport={{ once: false, amount: 0.3 }}
                 // className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-600"
                //>
                  //<h3 className="text-xl font-bold text-indigo-700 mb-2">
                  //  {survey.title}
                 // </h3>
                 // <p className="text-gray-600">{survey.paragraphs[0]}</p>
                //</motion.div>
              //</div>
            //</div>
          //);
        //})}
      //</div>
    //</section>
  //);
//}
import { motion } from "framer-motion";
import surveys from "../data/surveyData";

export default function Surveys() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-purple-100 py-16 px-4 sm:px-10">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-12 sm:mb-16 tracking-tight">
        Our Survey Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 max-w-7xl mx-auto">
        {surveys.map((survey) => (
          <motion.article
            key={survey.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 30px rgba(99, 102, 241, 0.2)",
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform duration-300 max-w-xs sm:max-w-none mx-auto"
            tabIndex={0}
            aria-labelledby={`${survey.title}-title`}
          >
            <motion.img
              src={survey.image}
              alt={survey.title}
              className="w-full object-cover transition-transform duration-500 ease-in-out"
              style={{ height: "180px", maxHeight: "calc(45vw)" }} // improved for mobile
              whileHover={{ scale: 1.05 }}
              loading="lazy"
              draggable={false}
            />
            <div className="p-5 sm:p-6">
              <h3
                id={`${survey.title}-title`}
                className="text-xl sm:text-2xl font-semibold text-indigo-800 mb-3 leading-snug"
              >
                {survey.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed line-clamp-4">
                {survey.paragraphs[0]}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
