// Menu Item Type
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'tea' | 'pastry' | 'breakfast';
  image: string;
  popular?: boolean;
  new?: boolean;
}

// Category Type
export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// Testimonial Type
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

// Gallery Item Type
export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  category: string;
}

// Contact Form Data Type
export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
}

// Form State Type
export interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message: string;
  submitting: boolean;
  submitted: boolean;
  error?: string;
}
