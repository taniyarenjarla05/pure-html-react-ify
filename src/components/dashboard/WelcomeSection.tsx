import React from 'react';

interface WelcomeSectionProps {
  onQuickAction: (action: string) => void;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onQuickAction }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const action = e.currentTarget.textContent?.trim() || '';
    onQuickAction(action);
  };

  return (
    <section className="welcome-section">
      <h1 className="welcome-title">Welcome Back, Alex! 🌍</h1>
      <p className="welcome-subtitle">Ready to make an impact? Your environmental journey continues here.</p>
      
      <div className="quick-actions">
        <button className="quick-action-btn" onClick={handleClick}>📊 View Progress</button>
        <button className="quick-action-btn" onClick={handleClick}>🎯 Daily Challenges</button>
        <button className="quick-action-btn" onClick={handleClick}>👥 Join Study Group</button>
        <button className="quick-action-btn" onClick={handleClick}>📚 New Resources</button>
      </div>
    </section>
  );
};

export default WelcomeSection;