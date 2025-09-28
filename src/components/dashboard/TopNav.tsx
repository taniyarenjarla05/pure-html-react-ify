import React from 'react';

const TopNav: React.FC = () => {
  return (
    <nav className="top-nav">
      <div className="logo-section">
        <div className="logo-icon">🌱</div>
        <div className="logo-text">EcoQuest</div>
      </div>
      
      <div className="nav-stats">
        <div className="quick-stat">🏆 Level 12</div>
        <div className="quick-stat">🔥 15 Day Streak</div>
        <div className="quick-stat">⚡ 2,450 Points</div>
      </div>
      
      <div className="user-profile">
        <div className="avatar">A</div>
        <div className="user-info">
          <h3>Alex Johnson</h3>
          <p>Environmental Science Major</p>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;