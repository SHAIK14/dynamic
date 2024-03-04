/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

const DynamicForm = ({ config }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const initialData = {};
    config.sections.forEach((section) => {
      section.fields.forEach((field) => {
        initialData[field.id] = field.value || "";
      });
    });
    setFormData(initialData);
  }, [config]);

  const handleChange = (fieldId, value) => {
    setFormData((prevData) => ({ ...prevData, [fieldId]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {config.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          {section.fields.map((field) => (
            <div key={field.id} className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                {field.name}
              </label>
              {field.type === "text" && (
                <input
                  type="text"
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              )}
              {field.type === "select" && (
                <select
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full"
                >
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {field.type === "date" && (
                <input
                  type="date"
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
