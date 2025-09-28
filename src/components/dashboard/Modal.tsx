import React from 'react';
import { moduleData } from '../../data/moduleData';

interface ModalProps {
  isOpen: boolean;
  moduleType: string | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, moduleType, onClose }) => {
  if (!moduleType || !moduleData[moduleType]) return null;

  const data = moduleData[moduleType];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      id="modal-overlay" 
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-icon">{data.icon}</div>
          <div className="modal-title-section">
            <h2 className="modal-title">{data.title}</h2>
            <p className="modal-subtitle">{data.subtitle}</p>
          </div>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="modal-section">
            {/* Statistics Grid */}
            <div className="modal-grid">
              {data.stats.map((stat: any, index: number) => (
                <div key={index} className="modal-stat-card">
                  <span className="modal-stat-icon">{stat.icon}</span>
                  <div className="modal-stat-value">{stat.value}</div>
                  <div className="modal-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Progress Section */}
            <div className="modal-progress-section">
              <h3 className="modal-progress-title">Current Progress</h3>
              {data.progress.map((item: any, index: number) => (
                <div key={index} className="modal-progress-item">
                  <div className="modal-progress-info">
                    <div className="modal-progress-name">{item.name}</div>
                  </div>
                  <div className="modal-progress-bar">
                    <div className="modal-progress-fill" style={{ width: `${item.value}%` }}></div>
                  </div>
                  <div className="modal-progress-value">{item.value}%</div>
                </div>
              ))}
            </div>

            {/* Items List */}
            <h3 className="modal-progress-title">Key Activities</h3>
            <ul className="modal-list">
              {data.items.map((item: any, index: number) => (
                <li key={index} className="modal-list-item">
                  <div className="modal-list-icon">{item.icon}</div>
                  <div className="modal-list-content">
                    <div className="modal-list-title">{item.title}</div>
                    <div className="modal-list-desc">{item.description}</div>
                    <div className="modal-list-meta">{item.meta}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button className="modal-button primary">Explore Details</button>
              <button className="modal-button">Download Report</button>
              <button className="modal-button">Share Progress</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;