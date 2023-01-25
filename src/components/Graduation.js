import React from "react";

function Graduation({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Graduation..."
        value={formData.graduation}
        onChange={(e) => {
          setFormData({ ...formData, graduation: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Specialization..."
        value={formData.specialization}
        onChange={(e) => {
          setFormData({ ...formData, specialization: e.target.value });
        }}
      />
    </div>
  );
}

export default Graduation;