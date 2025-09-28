import React from 'react';

interface ProgressItem {
  label: string;
  value: number;
}

const ProgressTracker: React.FC = () => {
  const progressItems: ProgressItem[] = [
    { label: 'Overall Progress', value: 78 },
    { label: 'Research Projects', value: 85 },
    { label: 'Lab Work', value: 92 }
  ];

  return (
    <div className="module-section">
      <h3 className="section-title">
        <span>📈</span>
        Progress Tracker
      </h3>
      <div className="progress-tracker">
        <div className="progress-title">Current Semester</div>
        {progressItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="progress-item">
              <span className="progress-label">{item.label}</span>
              <span className="progress-value">{item.value}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${item.value}%` }}></div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;