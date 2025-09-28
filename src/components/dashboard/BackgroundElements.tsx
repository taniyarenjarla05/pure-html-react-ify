import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
      </div>

      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="particle"></div>
        ))}
      </div>
    </>
  );
};

export default BackgroundElements;