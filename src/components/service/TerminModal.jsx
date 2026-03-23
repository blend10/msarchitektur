"use client";

import { useState } from "react";
import { X, Calendar, Phone, User, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TerminModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic here to handle the form submission
    alert("Terminanfrage gesendet!");
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-xl font-semibold text-gray-900">Termin vereinbaren</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4" /> Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Telefonnummer
                </label>
                <input
                  required
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+41 00 000 00 00"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-1.5">
                  <label htmlFor="date" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Datum
                  </label>
                  <input
                    required
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                  />
                </div>

                {/* Time */}
                <div className="space-y-1.5">
                  <label htmlFor="time" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Uhrzeit
                  </label>
                  <input
                    required
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 active:scale-[0.98] transition-all"
              >
                Termin buchen
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
