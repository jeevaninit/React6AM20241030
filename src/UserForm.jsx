import React, { useState } from 'react';

function CourseForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    outcomes: '',
    requirements: '',
    contentTitle: '',
    lectures: '',
    duration: '',
    instructorName: '',
    instructorBio: '',
    instructorRatings: '',
    instructorStudents: ''
  });

  // State to track form errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validate = () => {
    const newErrors = {};

    if (formData.title.length < 5 || formData.title.length > 100) {
      newErrors.title = 'Title must be between 5 and 100 characters.';
    }
    if (formData.description.length < 10 || formData.description.length > 500) {
      newErrors.description = 'Description must be between 10 and 500 characters.';
    }
    if (!formData.lectures || formData.lectures < 1 || formData.lectures > 100) {
      newErrors.lectures = 'Number of lectures must be between 1 and 100.';
    }
    if (!formData.instructorRatings || formData.instructorRatings < 0 || formData.instructorRatings > 5) {
      newErrors.instructorRatings = 'Ratings must be between 0 and 5.';
    }
    if (!formData.instructorStudents || formData.instructorStudents <= 0) {
      newErrors.instructorStudents = 'Number of students must be greater than 0.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
      setFormData({
        title: '',
        description: '',
        tags: '',
        outcomes: '',
        requirements: '',
        contentTitle: '',
        lectures: '',
        duration: '',
        instructorName: '',
        instructorBio: '',
        instructorRatings: '',
        instructorStudents: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='myfrom'>
      {/* Course Details */}
      <div>
        <h2>Course Details</h2>
        <label>Course Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter course title"
        />
        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter course description"
        />
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

        <label>Tags (comma-separated)</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="e.g., Angular, Web Development"
        />
      </div>

      {/* Learning Outcomes */}
      <div>
        <h2>What You Will Learn</h2>
        <label>Learning Outcomes</label>
        <textarea
          name="outcomes"
          value={formData.outcomes}
          onChange={handleChange}
          placeholder="e.g., Learn Angular basics, Build scalable apps"
        />
      </div>

      {/* Requirements */}
      <div>
        <h2>Requirements</h2>
        <label>Course Requirements</label>
        <textarea
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          placeholder="e.g., Basic JavaScript knowledge, HTML basics"
        />
      </div>

      {/* Content */}
      <div>
        <h2>Course Content</h2>
        <label>Section Title</label>
        <input
          type="text"
          name="contentTitle"
          value={formData.contentTitle}
          onChange={handleChange}
          placeholder="e.g., Getting Started"
        />

        <label>Number of Lectures</label>
        <input
          type="number"
          name="lectures"
          value={formData.lectures}
          onChange={handleChange}
          placeholder="Enter number of lectures"
        />
        {errors.lectures && <p style={{ color: 'red' }}>{errors.lectures}</p>}

        <label>Duration</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="e.g., 1h 30m"
        />
      </div>

      {/* Instructor Info */}
      <div>
        <h2>Instructor Information</h2>
        <label>Name</label>
        <input
          type="text"
          name="instructorName"
          value={formData.instructorName}
          onChange={handleChange}
          placeholder="Enter instructor name"
        />

        <label>Bio</label>
        <textarea
          name="instructorBio"
          value={formData.instructorBio}
          onChange={handleChange}
          placeholder="Enter instructor bio"
        />

        <label>Ratings</label>
        <input
          type="number"
          name="instructorRatings"
          value={formData.instructorRatings}
          onChange={handleChange}
          placeholder="e.g., 4.7"
        />
        {errors.instructorRatings && <p style={{ color: 'red' }}>{errors.instructorRatings}</p>}

        <label>Number of Students</label>
        <input
          type="number"
          name="instructorStudents"
          value={formData.instructorStudents}
          onChange={handleChange}
          placeholder="Enter number of students"
        />
        {errors.instructorStudents && <p style={{ color: 'red' }}>{errors.instructorStudents}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CourseForm;
