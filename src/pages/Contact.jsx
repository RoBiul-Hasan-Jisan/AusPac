/*
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    contactNo: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const phoneRegex = /^\+\d{1,4}[\d\s\-]{5,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.company.trim()) newErrors.company = "Company is required.";
    if (!form.contactNo.trim()) {
      newErrors.contactNo = "Contact number is required.";
    } else if (!phoneRegex.test(form.contactNo.trim())) {
      newErrors.contactNo = "Please enter a valid contact number with country code.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const templateParams = {
      title: "Contact Us",
      name: form.name,
      company: form.company,
      contactNo: form.contactNo,
      email: form.email,
      message: form.message,
    };

    console.log("Sending email to both services with:", templateParams);

    const oldServiceID = "service_fq82rvh";
    const oldTemplateID = "template_hxliyvs";
    const userID = "vYxPD9QAGFx8Vt_9F";

    const newServiceID = "service_dyd3zik";
    const newTemplateID = "template_dznqepa";
    const newUserID = "KlqTlMBNBMrd3j7-X";

    Promise.all([
      emailjs.send(oldServiceID, oldTemplateID, templateParams, userID),
      emailjs.send(newServiceID, newTemplateID, templateParams, newUserID),
    ])
      .then(() => {
        alert("Email sent successfully to both addresses!");
        setForm({
          name: "",
          company: "",
          contactNo: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Oops! Something went wrong, please try again.");
        console.error("EmailJS error:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-xl">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-4">Contact Us</h1>
      <p className="text-md text-gray-600 text-center mb-8">
        We’d love to hear from you. Please fill out the form below or reach out directly.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {[
          { label: "Name", id: "name", type: "text" },
          { label: "Company", id: "company", type: "text" },
          { label: "Contact Number (with country code)", id: "contactNo", type: "tel", placeholder: "+880123456789" },
          { label: "Email", id: "email", type: "email" },
        ].map(({ label, id, type, placeholder = "" }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              value={form[id]}
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 ${
                errors[id] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"
              } transition`}
            />
            {errors[id] && <p className="text-sm text-red-500 mt-1">{errors[id]}</p>}
          </div>
        ))}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 resize-none ${
              errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"
            } transition`}
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl text-white font-semibold ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
          } transition-colors`}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <a
          href="tel:01912717255"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Call Me Now
        </a>
        <a
          href="https://wa.me/8801912717255"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          WhatsApp Me
        </a>
      </div>
    </div>
  );
}
*/


export default function ContactUs() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-blue-50 to-purple-100 p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left Side - Contact Info */}
        <div className="p-12 flex flex-col justify-center space-y-8">
          <h1 className="text-5xl font-extrabold text-indigo-700">
            Contact <span className="text-purple-600">AusPac</span>
          </h1>

          <p className="text-lg text-gray-600 italic max-w-md">
            “At AusPac, we’re here for you — delivering trusted marine service solutions with care and precision.”
          </p>

          <div className="space-y-6 text-gray-700 max-w-md">
            <ContactItem label="Office Address">
              PO Box 317<br />Cannon Hill, QLD 4170
            </ContactItem>
            <ContactItem label="Phone">
              <a href="tel:+61733486334" className="text-indigo-600 hover:underline">
                (+617) 3348 6334
              </a>
            </ContactItem>
            <ContactItem label="Fax">
              (+617) 3396 8709
            </ContactItem>
            <ContactItem label="Mobile">
              <a href="tel:+61418176815" className="text-indigo-600 hover:underline">
                (+61) 418 176 815
              </a>
            </ContactItem>
            <ContactItem label="Email">
              <a
                href="mailto:surveys@cargocare.com.au"
                className="text-indigo-600 hover:underline"
              >
                surveys@cargocare.com.au
              </a>
            </ContactItem>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="relative">
          <iframe
            title="AusPac Location"
            src="https://www.google.com/maps?q=PO+Box+317,+Cannon+Hill,+QLD+4170,+Australia&output=embed"
            className="w-full h-full min-h-[400px] md:min-h-full rounded-r-3xl border-l border-indigo-200"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

// Helper component for label + content pairing
function ContactItem({ label, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-indigo-500 tracking-wide uppercase mb-1">
        {label}
      </h3>
      <p className="text-base">{children}</p>
    </div>
  );
}
