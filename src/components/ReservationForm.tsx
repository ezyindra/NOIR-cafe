import React, { useState } from 'react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    requests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[#999] text-sm mb-2 font-light">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors placeholder-[#555]"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-[#999] text-sm mb-2 font-light">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors placeholder-[#555]"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[#999] text-sm mb-2 font-light">Reservation Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors placeholder-[#555]"
            required
          />
        </div>
        <div>
          <label className="block text-[#999] text-sm mb-2 font-light">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors placeholder-[#555]"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-[#999] text-sm mb-2 font-light">Number of Guests</label>
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
        </select>
      </div>

      <div>
        <label className="block text-[#999] text-sm mb-2 font-light">Special Requests</label>
        <textarea
          name="requests"
          value={formData.requests}
          onChange={handleChange}
          rows={4}
          className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors placeholder-[#555] resize-none"
          placeholder="Any special occasions, dietary restrictions, or requests..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#d4af37] text-black py-4 px-6 font-medium tracking-wider hover:bg-[#e5c158] transition-colors duration-300"
      >
        Reserve Your Table
      </button>
    </form>
  );
}
