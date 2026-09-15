document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.querySelector('[data-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('.suggestion-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const group = pill.parentElement;
      if (!group) return;
      group.querySelectorAll('.suggestion-pill').forEach((item) => item.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  const accessForm = document.querySelector('#access-request-form');
  const accessSuccess = document.querySelector('#access-success');
  if (accessForm && accessSuccess) {
    accessForm.addEventListener('submit', (event) => {
      event.preventDefault();
      accessForm.hidden = true;
      accessSuccess.hidden = false;
    });
  }

  const signupForm = document.querySelector('.auth-form[action="dashboard.html"]');
  if (signupForm) {
    signupForm.addEventListener('submit', () => {
      const firstName = signupForm.querySelector('#first-name')?.value.trim() || '';
      const lastName = signupForm.querySelector('#last-name')?.value.trim() || '';
      const fullName = [firstName, lastName].filter(Boolean).join(' ');
      if (fullName) {
        localStorage.setItem('discreetspyUserName', fullName);
      }
    });
  }

  const dashboardUserName = document.querySelector('.user-name');
  const dashboardAvatar = document.querySelector('.user-avatar');
  if (dashboardUserName && dashboardAvatar) {
    const savedName = localStorage.getItem('discreetspyUserName') || 'Guest User';
    const initials = savedName
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((name) => name[0].toUpperCase())
      .join('');
    dashboardUserName.textContent = savedName;
    dashboardAvatar.textContent = initials || 'GU';
  }
});
