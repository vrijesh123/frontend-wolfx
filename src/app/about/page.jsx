"use client";

import GlobalForm from "@/components/common_components/GlobalForm/GlobalForm";
import React from "react";

const About = () => {
  const contact_form_json = [
    {
      type: "text",
      name: "organization",
      label: "Organization",
      fullWidth: true,
      xs: 12,
      validation_message: "Please enter your First Name",
      required: true,
    },
    {
      type: "date",
      name: "date",
      label: "Select Date",
      fullWidth: true,
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6,
      validation_message: "Please enter your Last Name",
      required: true,
    },
    {
      type: "select",
      name: "category",
      label: "Category",
      options: [
        { value: "Select", label: "Select" },
        { value: "Category 1", label: "Category 1" },
        { value: "Category 2", label: "Category 2" },
        { value: "Category 3", label: "Category 3" },
      ],
      fullWidth: true,
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6,
      validation_message: "Please enter your Email",
      required: true,
    },
    {
      type: "multi-select-dropdown",
      name: "artifacts",
      label: "Artifacts",
      options: [
        { value: "Category 1", label: "Category 1" },
        { value: "Category 2", label: "Category 2" },
        { value: "Category 3", label: "Category 3" },
        { value: "Category 4", label: "Category 4" },
        { value: "Category 5", label: "Category 5" },
        { value: "Category 6", label: "Category 6" },
      ],
      fullWidth: true,
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6,
      validation_message: "Please enter your Email",
      required: true,
    },
    {
      type: "text",
      name: "message",
      label: "Message",
      fullWidth: true,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      shrink: true,
      rows: 5,
      validation_message: "Please enter your Message",
    },
    {
      type: "chips",
      name: "alias",
      label: "Alias",
      fullWidth: true,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      validation_message: "Please enter up to 5 names",
      required: true,
      max_items: 5, // Optional: Limit the maximum number of items
    },
    {
      type: "image",
      name: "photo",
      label: "Photo",
      fullWidth: true,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      shrink: true,
      rows: 5,
      validation_message: "Please enter your Message",
    },
  ];

  const handleContactFormSubmit = (formData) => {
    console.log("Contact Form Submitted: ", formData);

    // Add your form submission logic here
  };

  return (
    <div className="container">
      <GlobalForm
        form_config={contact_form_json}
        on_Submit={handleContactFormSubmit}
      />
    </div>
  );
};

export default About;
