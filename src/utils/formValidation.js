// utils/FormValidation.js

const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
  
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
  
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }
  
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }
  
    if (!formData.summary.trim()) {
      errors.summary = 'Professional summary is required';
    }
  
    return errors;
  };
  
  export default validateForm;
  