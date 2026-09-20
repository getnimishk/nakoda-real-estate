/**
 * Nakoda Real Estate - Accessible Modal Controller
 */

export function initModalManager() {
  const modalOverlay = document.getElementById('lead-modal-overlay');
  if (!modalOverlay) return;

  const modalContainer = modalOverlay.querySelector('.modal-container');
  const closeBtn = modalOverlay.querySelector('.modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalLeadSubtitle = document.getElementById('modal-subtitle');
  const projectSelect = document.getElementById('lead-project');
  const leadForm = document.getElementById('lead-form');
  const formFeedback = document.getElementById('form-feedback');

  let activeTrigger = null;

  function openModal(options = {}) {
    activeTrigger = document.activeElement;
    
    // Customize title & subtitle based on intent
    const intent = options.intent || 'visit';
    if (intent === 'brochure') {
      if (modalTitle) modalTitle.textContent = 'Download Project Brochure';
      if (modalLeadSubtitle) modalLeadSubtitle.textContent = 'Please share your details to download the floor plans and specifications.';
      const visitRow = document.getElementById('visit-date-time-row');
      if (visitRow) visitRow.style.display = 'none';
    } else {
      if (modalTitle) modalTitle.textContent = 'Book an Exclusive Site Visit';
      if (modalLeadSubtitle) modalLeadSubtitle.textContent = 'Experience Nakoda residences firsthand with a private guided walkthrough in Nipania.';
      const visitRow = document.getElementById('visit-date-time-row');
      if (visitRow) visitRow.style.display = 'grid';
    }

    // Pre-select project if specified
    if (options.project && projectSelect) {
      projectSelect.value = options.project;
    }

    // Reset feedback
    if (formFeedback) {
      formFeedback.style.display = 'none';
      formFeedback.className = 'form-feedback';
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Trap focus inside modal
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (activeTrigger) activeTrigger.focus();
  }

  // Event Listeners
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach triggers
  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const project = btn.getAttribute('data-project') || '';
      const intent = btn.getAttribute('data-intent') || 'visit';
      openModal({ project, intent });
    });
  });

  return { openModal, closeModal };
}
