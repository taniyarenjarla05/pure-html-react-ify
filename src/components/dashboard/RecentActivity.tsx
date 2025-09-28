import React from 'react';

interface Activity {
  icon: string;
  title: string;
  description: string;
  time: string;
}

interface RecentActivityProps {
  onActivityClick: (title: string) => void;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ onActivityClick }) => {
  const activities: Activity[] = [
    {
      icon: '🏆',
      title: 'Achievement Unlocked',
      description: 'Completed Plastic Recycling Project',
      time: '2h ago'
    },
    {
      icon: '📚',
      title: 'New Course Material',
      description: 'Advanced Sustainability Methods',
      time: '5h ago'
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Joined Carbon Footprint Study',
      time: '1d ago'
    },
    {
      icon: '💡',
      title: 'Innovation Submitted',
      description: 'Smart Waste Sorting Algorithm',
      time: '2d ago'
    }
  ];

  return (
    <div className="module-section">
      <h3 className="section-title">
        <span>🔄</span>
        Recent Activity
      </h3>
      {activities.map((activity, index) => (
        <div 
          key={index}
          className="activity-item"
          onClick={() => onActivityClick(activity.title)}
        >
          <div className="activity-icon">{activity.icon}</div>
          <div className="activity-content">
            <h4>{activity.title}</h4>
            <p>{activity.description}</p>
          </div>
          <span className="activity-time">{activity.time}</span>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;