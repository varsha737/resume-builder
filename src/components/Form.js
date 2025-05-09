import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Form.css'; // Import the CSS file

// Enhanced validation schema with new required fields
const formValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  education: Yup.string().required('Education is required'),
  experience: Yup.string(),
  skills: Yup.string(),
  linkedin: Yup.string().url('Invalid LinkedIn URL'),
  portfolio: Yup.string().url('Invalid Portfolio URL'),
  certifications: Yup.string(),
});

const Form = ({ onPreview }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      education: '',
      experience: '',
      skills: '',
      linkedin: '',
      portfolio: '',
      certifications: '',
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      onPreview(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Name Field */}
      <div className="form-group">
        <label>Name <span className="required-asterisk">*</span>:</label>
        <input
          type="text"
          name="name"
          {...formik.getFieldProps('name')}
          className="form-control"
        />
        {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label>Email <span className="required-asterisk">*</span>:</label>
        <input
          type="email"
          name="email"
          {...formik.getFieldProps('email')}
          className="form-control"
        />
        {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
      </div>

      {/* Phone Field */}
      <div className="form-group">
        <label>Phone <span className="required-asterisk">*</span>:</label>
        <input
          type="text"
          name="phone"
          {...formik.getFieldProps('phone')}
          className="form-control"
        />
        {formik.touched.phone && formik.errors.phone && <div className="error">{formik.errors.phone}</div>}
      </div>

      {/* Address Field */}
      <div className="form-group">
        <label>Address <span className="required-asterisk">*</span>:</label>
        <input
          type="text"
          name="address"
          {...formik.getFieldProps('address')}
          className="form-control"
        />
        {formik.touched.address && formik.errors.address && <div className="error">{formik.errors.address}</div>}
      </div>

      {/* Education Field */}
      <div className="form-group">
        <label>Education <span className="required-asterisk">*</span>:</label>
        <input
          type="text"
          name="education"
          {...formik.getFieldProps('education')}
          className="form-control"
        />
        {formik.touched.education && formik.errors.education && <div className="error">{formik.errors.education}</div>}
      </div>

      {/* Experience Field */}
      <div className="form-group">
        <label>Experience:</label>
        <textarea
          name="experience"
          {...formik.getFieldProps('experience')}
          className="form-control"
        />
      </div>

      {/* Skills Field */}
      <div className="form-group">
        <label>Skills:</label>
        <textarea
          name="skills"
          {...formik.getFieldProps('skills')}
          className="form-control"
        />
      </div>

      {/* LinkedIn URL Field */}
      <div className="form-group">
        <label>LinkedIn URL:</label>
        <input
          type="text"
          name="linkedin"
          {...formik.getFieldProps('linkedin')}
          className="form-control"
        />
        {formik.touched.linkedin && formik.errors.linkedin && <div className="error">{formik.errors.linkedin}</div>}
      </div>

      {/* Portfolio URL Field */}
      <div className="form-group">
        <label>Portfolio URL:</label>
        <input
          type="text"
          name="portfolio"
          {...formik.getFieldProps('portfolio')}
          className="form-control"
        />
        {formik.touched.portfolio && formik.errors.portfolio && <div className="error">{formik.errors.portfolio}</div>}
      </div>

      {/* Certifications Field */}
      <div className="form-group">
        <label>Certifications:</label>
        <textarea
          name="certifications"
          {...formik.getFieldProps('certifications')}
          className="form-control"
        />
      </div>

      <button type="submit">Preview Resume</button>
    </form>
  );
};

export default Form;
