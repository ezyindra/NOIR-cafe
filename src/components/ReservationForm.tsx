import React, { useState } from 'react';
import { Icons } from '../utils/data';
import Toast from './Toast';
import { ReservationFormData } from '../types';

export default function ReservationForm() {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const validate = () => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ReservationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setToast({ message: 'Reservation request submitted successfully!', type: 'success' });

    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2,
      message: '',
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-gold mb-4">Reserve Your Table</h2>
        <p className="text-text-muted">Experience the epitome of luxury dining at NOIR CAFÉ</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-text-muted">Full Name</label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black border ${errors.name ? 'border-red-500' : 'border-gold/20'} text-white focus:border-gold focus:outline-none transition-colors pl-12`}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
              <Icons.User />
            </span>
          </div>
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-text-muted">Email Address</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black border ${errors.email ? 'border-red-500' : 'border-gold/20'} text-white focus:border-gold focus:outline-none transition-colors pl-12`}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
              <Icons.Mail />
            </span>
          </div>
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-text-muted">Phone Number</label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black border ${errors.phone ? 'border-red-500' : 'border-gold/20'} text-white focus:border-gold focus:outline-none transition-colors pl-12`}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
              <Icons.Phone />
            </span>
          </div>
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-text-muted">Number of Guests</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-gold/20 text-white focus:border-gold focus:outline-none transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-text-muted">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-black border ${errors.date ? 'border-red-500' : 'border-gold/20'} text-white focus:border-gold focus:outline-none transition-colors`}
          />
          {errors.date && <span className="text-red-500 text-sm">{errors.date}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-text-muted">Time</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-black border ${errors.time ? 'border-red-500' : 'border-gold/20'} text-white focus:border-gold focus:outline-none transition-colors`}
          >
            <option value="">Select Time</option>
            {['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && <span className="text-red-500 text-sm">{errors.time}</span>}
        </div>

        <div className="col-span-1 md:col-span-2 space-y-2">
          <label className="text-sm text-text-muted">Special Requests</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-black border border-gold/20 text-white focus:border-gold focus:outline-none transition-colors resize-none"
            placeholder="Any dietary restrictions or special occasions?"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold text-black px-8 py-4 font-serif text-lg font-medium hover:bg-gold-dim transition-all transform hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Processing...' : submitted ? 'Request Sent' : 'Confirm Reservation'}
          </button>
        </div>
      </form>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}

// Add missing icon
Icons.User = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
