/**
 * Nakoda Real Estate - Lead Capture & Google Form Submission Dispatcher
 *
 * Implements strict frontend validation and dispatches lead data
 * to the centralized Google Forms / Sheets backend.
 */

import { GOOGLE_FORM_CONFIG } from '../config/google-form.js';
import { CONTACT_CONFIG } from '../config/contact.js';

export function initFormHandler() {
  const form = document.getElementById('lead-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('lead-submit-btn');

  if (!form || !feedback || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Extract values
    const nameInput = form.querySelector('[name="name"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const emailInput = form.querySelector('[name="email"]');
    const projectInput = form.querySelector('[name="project"]');
    const configInput = form.querySelector('[name="configuration"]');
    const dateInput = form.querySelector('[name="visitDate"]');
    const timeInput = form.querySelector('[name="visitTime"]');
    const messageInput = form.querySelector('[name="message"]');
    const consentInput = form.querySelector('[name="consent"]');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim().replace(/\D/g, '') : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const project = projectInput ? projectInput.value : '';
    const configuration = configInput ? configInput.value : '';
    const visitDate = dateInput ? dateInput.value : '';
    const visitTime = timeInput ? timeInput.value : '';
    const message = messageInput ? messageInput.value.trim() : '';
    const consent = consentInput ? consentInput.checked : false;

    // 2. Validation
    if (!name || name.length < 2) {
      showFeedback('error', 'Please enter your full name (minimum 2 characters).');
      if (nameInput) nameInput.focus();
      return;
    }

    // Indian 10-digit mobile number starting with 6, 7, 8, or 9
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    // If phone has 91 country code prefix (12 digits)
    const normalizedPhone = phone.length === 12 && phone.startsWith('91') ? phone.slice(2) : phone;

    if (!indianPhoneRegex.test(normalizedPhone)) {
      showFeedback('error', 'Please enter a valid 10-digit Indian mobile number.');
      if (phoneInput) phoneInput.focus();
      return;
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback('error', 'Please enter a valid email address.');
        if (emailInput) emailInput.focus();
        return;
      }
    }

    if (!consent) {
      showFeedback('error', 'Please check the consent box to allow our advisory team to contact you.');
      return;
    }

    // 3. Check Google Form Configuration Status
    if (!GOOGLE_FORM_CONFIG.isConfigured()) {
      console.warn('Nakoda Real Estate - Lead Capture Notice: Google Form is in test/unconfigured mode.', {
        name,
        phone: normalizedPhone,
        email,
        project,
        configuration,
        visitDate,
        visitTime,
        message,
        timestamp: new Date().toISOString()
      });

      showFeedback(
        'info',
        `<strong>Inquiry Captured (Demo Mode):</strong> Google Form field mapping is awaiting production IDs in <code>src/config/google-form.js</code>.<br><br>For immediate assistance, please connect directly with our advisory desk via WhatsApp (${CONTACT_CONFIG.whatsapp}) or Call (${CONTACT_CONFIG.phone}).`
      );
      return;
    }

    // 4. Production Submission to Google Forms
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting Request...';

    const formData = new FormData();
    if (GOOGLE_FORM_CONFIG.fields.name) formData.append(GOOGLE_FORM_CONFIG.fields.name, name);
    if (GOOGLE_FORM_CONFIG.fields.phone) formData.append(GOOGLE_FORM_CONFIG.fields.phone, normalizedPhone);
    if (GOOGLE_FORM_CONFIG.fields.email && email) formData.append(GOOGLE_FORM_CONFIG.fields.email, email);
    if (GOOGLE_FORM_CONFIG.fields.project && project) formData.append(GOOGLE_FORM_CONFIG.fields.project, project);
    if (GOOGLE_FORM_CONFIG.fields.configuration && configuration) formData.append(GOOGLE_FORM_CONFIG.fields.configuration, configuration);
    if (GOOGLE_FORM_CONFIG.fields.visitDate && visitDate) formData.append(GOOGLE_FORM_CONFIG.fields.visitDate, visitDate);
    if (GOOGLE_FORM_CONFIG.fields.visitTime && visitTime) formData.append(GOOGLE_FORM_CONFIG.fields.visitTime, visitTime);
    if (GOOGLE_FORM_CONFIG.fields.message && message) formData.append(GOOGLE_FORM_CONFIG.fields.message, message);
    if (GOOGLE_FORM_CONFIG.fields.consent) formData.append(GOOGLE_FORM_CONFIG.fields.consent, 'Yes');

    try {
      // Dispatched using standard no-cors mode to safely send to Google Forms endpoint
      await fetch(GOOGLE_FORM_CONFIG.formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      showFeedback(
        'success',
        '<strong>Thank you!</strong> Your site visit inquiry has been successfully received. A senior advisor from Nakoda Real Estate will contact you shortly to confirm your schedule.'
      );
      form.reset();
    } catch (err) {
      console.error('Lead submission error:', err);
      showFeedback(
        'error',
        `Unable to dispatch request automatically. Please message us on WhatsApp (${CONTACT_CONFIG.whatsapp}) or call our office.`
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Confirm & Book Site Visit';
    }
  });

  function showFeedback(type, htmlContent) {
    feedback.className = `form-feedback ${type}`;
    feedback.innerHTML = htmlContent;
    feedback.style.display = 'block';
  }
}
