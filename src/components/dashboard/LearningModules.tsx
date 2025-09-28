import React from 'react';

interface Module {
  id: string;
  icon: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

interface LearningModulesProps {
  onModuleClick: (moduleType: string) => void;
}

const LearningModules: React.FC<LearningModulesProps> = ({ onModuleClick }) => {
  const modules: Module[] = [
    {
      id: 'research',
      icon: '🔬',
      title: 'Research Overview',
      description: 'Explore environmental research projects and innovations',
      stats: [
        { label: 'Active Projects', value: '12' },
        { label: 'Patents', value: '8' }
      ]
    },
    {
      id: 'student-projects',
      icon: '👨‍🎓',
      title: 'Student Projects',
      description: 'Collaborative projects with fellow students',
      stats: [
        { label: 'Projects', value: '24' },
        { label: 'Success', value: '89%' }
      ]
    },
    {
      id: 'innovation',
      icon: '💡',
      title: 'Innovation Lab',
      description: 'Develop breakthrough environmental solutions',
      stats: [
        { label: 'Prototypes', value: '6' },
        { label: 'Rating', value: '94%' }
      ]
    },
    {
      id: 'plastic-recycling',
      icon: '♻️',
      title: 'Plastic Recycling Initiative',
      description: 'Transform plastic waste into valuable resources',
      stats: [
        { label: 'Recycled', value: '15.7T' },
        { label: 'Efficiency', value: '83%' }
      ]
    },
    {
      id: 'impact',
      icon: '🌍',
      title: 'Environmental Impact',
      description: 'Monitor and analyze environmental contributions',
      stats: [
        { label: 'CO₂ Saved', value: '2.1k' },
        { label: 'Goal', value: '78%' }
      ]
    },
    {
      id: 'resources',
      icon: '📖',
      title: 'Resource Library',
      description: 'Access comprehensive learning materials',
      stats: [
        { label: 'Resources', value: '250+' },
        { label: 'Access', value: '24/7' }
      ]
    }
  ];

  return (
    <div className="module-section">
      <h2 className="section-title">
        <span>🎓</span>
        Learning Modules
      </h2>
      <div className="modules-grid">
        {modules.map((module) => (
          <div 
            key={module.id}
            className="module-card"
            data-module={module.id}
            onClick={() => onModuleClick(module.id)}
          >
            <div className="module-icon">{module.icon}</div>
            <div className="module-title">{module.title}</div>
            <div className="module-description">{module.description}</div>
            <div className="module-stats">
              {module.stats.map((stat, index) => (
                <div key={index} className="stat-badge">
                  {stat.value} {stat.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningModules;