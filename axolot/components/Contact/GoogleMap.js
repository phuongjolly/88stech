import React from "react"; 

const GoogleMap = () => {
  return (
    <>
      <div className="mb-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.295060525117!2d-122.7675548!3d49.289753499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867f16930a9781%3A0x197a3fffbab1dbfa!2s1224%20Oxbow%20Way%2C%20Coquitlam%2C%20BC%20V3E%201M9!5e0!3m2!1svi!2sca!4v1739994537129!5m2!1svi!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </>
  );
};

export default GoogleMap;
