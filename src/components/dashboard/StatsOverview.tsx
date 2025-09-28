import React from 'react';

interface StatsOverviewProps {
  onCardClick: (label: string) => void;
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ onCardClick }) => {
  const stats = [
    { icon: '📚', value: '8', label: 'Active Courses', change: '+2 this semester' },
    { icon: '🏆', value: '94%', label: 'Average Grade', change: '+5% from last term' },
    { icon: '🌱', value: '12', label: 'Projects Complete', change: '3 pending review' },
    { icon: '⚡', value: '2.4k', label: 'Impact Points', change: '+340 this week' }
  ];

  return (
    <section className="stats-overview">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="overview-card"
          onClick={() => onCardClick(stat.label)}
        >
          <span className="overview-icon">{stat.icon}</span>
          <div className="overview-value">{stat.value}</div>
          <div className="overview-label">{stat.label}</div>
          <div className="overview-change">{stat.change}</div>
        </div>
      ))}
    </section>
  );
};

export default StatsOverview;