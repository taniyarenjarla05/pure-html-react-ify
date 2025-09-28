export function showToast(message: string): void {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 30px;
    right: 30px;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    color: white;
    padding: 15px 25px;
    border-radius: 25px;
    font-weight: 600;
    transform: translateX(400px);
    transition: transform 0.5s ease;
    z-index: 1000;
    box-shadow: 0 10px 30px rgba(74, 222, 128, 0.3);
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 100);

  setTimeout(() => {
    toast.style.transform = 'translateX(400px)';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 3000);
}