"use client";
import GlobalForm from "@/components/common_components/GlobalForm/GlobalForm";
import React from "react";

const contact_form_json = [
  {
    type: "text",
    name: "first_name",
    label: "First Name",
    fullWidth: true,
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6,
    validation_message: "Please enter your First Name",
    required: true,
  },
  {
    type: "text",
    name: "last_name",
    label: "Last Name",
    fullWidth: true,
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6,
    validation_message: "Please enter your Last Name",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    fullWidth: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    validation_message: "Please enter your Email",
    required: true,
  },
  {
    type: "number",
    name: "phone",
    label: "Phone Number",
    fullWidth: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    validation_message: "Please enter your Phone Number",
    required: true,
  },
  {
    type: "number",
    name: "age",
    label: "Age",
    fullWidth: true,
    min: 18,
    max: 65,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    validation_message: "Please enter your age between 18 and 65",
    required: true,
  },
  {
    type: "time",
    name: "appointment_time",
    label: "Appointment Time",
    validation_message: "Please select a time",
    fullWidth: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    required: true,
  },
  {
    type: "date-time",
    name: "event_datetime",
    label: "Event Date & Time",
    validation_message: "Please select a date and time",
    fullWidth: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    required: true,
  },
  {
    type: "checkbox",
    name: "terms",
    label: "I accept the terms and conditions",
    validation_message: "You must accept the terms and conditions",
    fullWidth: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    required: true,
  },
  {
    type: "switch",
    name: "newsletter",
    label: "Subscribe to newsletter",
    fullWidth: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    required: true,
  },
  {
    type: "file",
    name: "resume",
    label: "Upload Resume",
    validation_message: "Please upload your resume",
    fullWidth: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    required: true,
  },
  {
    type: "text",
    name: "username",
    label: "Username",
    pattern: "^[a-zA-Z0-9_]{5,15}$",
    pattern_message:
      "Username must be 5-15 characters and contain only letters, numbers, and underscores",
    validation_message: "Please enter a username",
    fullWidth: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    required: true,
  },
  {
    type: "hidden",
    name: "user_id",
    initialValue: "12345",
  },
  {
    type: "url",
    name: "website",
    label: "Website",
    validation_message: "Please enter a valid URL",
    fullWidth: true,
    xs: 12,
    required: true,
  },
  {
    type: "tel",
    name: "phone",
    label: "Phone Number",
    validation_message: "Please enter a valid phone number",
    fullWidth: true,
    xs: 12,
    required: true,
  },
  {
    type: "slider",
    name: "satisfaction",
    label: "Satisfaction Level",
    min: 0,
    max: 10,
    step: 1,
    validation_message: "Please select a value",
    required: true,
  },
  {
    type: "rating",
    name: "rating",
    label: "Rate our service",
    validation_message: "Please provide a rating",
    required: true,
  },
];

const defaultData = {
  first_name: "Anagha",
  last_name: "Ruchit",
  email: "kharwaruchit@gmail.com",
  phone: 9920049586,
  age: 32,
  appointment_time: "2024-10-23 18:00:00 +05:30",
  event_datetime: "2024-10-25 12:00:00 +05:30",
  terms: true,
  newsletter: true,
  resume: {
    path: "Cash Flow Tracker Report (11).pdf",
  },
  username: "mudassir0616",
  user_id: "",
  website: "https://weekend-fables-2p32.vercel.app/",
  satisfaction: 5,
  rating: 3,
};

const ContactUsForm = () => {
  const handleContactFormSubmit = (formData) => {
    console.log("Contact Form Submitted: ", formData);

    // Add your form submission logic here
  };

  return (
    <GlobalForm
      form_config={contact_form_json}
      on_Submit={handleContactFormSubmit}
      editingValues={defaultData}
    />
  );
};

export default ContactUsForm;
