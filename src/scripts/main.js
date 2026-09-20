/**
 * Nakoda Real Estate - Main Client Entry Script
 */

import { initModalManager } from './modal.js';
import { initFormHandler } from './form-handler.js';
import { initEmiCalculator } from './emi-calculator.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Sticky Header State
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile Drawer Navigation
  const mobileToggle = document.querySelector('.mobile-toggle-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');

  function toggleDrawer(open) {
    const shouldOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
    if (mobileToggle) mobileToggle.classList.toggle('open', shouldOpen);
    if (mobileDrawer) mobileDrawer.classList.toggle('open', shouldOpen);
    if (drawerBackdrop) drawerBackdrop.classList.toggle('active', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  if (mobileToggle && mobileDrawer && drawerBackdrop) {
    mobileToggle.addEventListener('click', () => toggleDrawer());
    drawerBackdrop.addEventListener('click', () => toggleDrawer(false));
    
    // Close drawer when clicking mobile links
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });
  }

  // 3. Tabbed Component Switcher (Floor Plans, Project Filters)
  document.querySelectorAll('[data-tab-group]').forEach(group => {
    const buttons = group.querySelectorAll('[data-tab-target]');
    const targetGroup = group.getAttribute('data-tab-group');
    const panes = document.querySelectorAll(`[data-tab-pane-group="${targetGroup}"]`);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab-target');
        
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        panes.forEach(pane => {
          if (target === 'all' || pane.getAttribute('data-tab-pane') === target) {
            pane.classList.add('active');
            pane.style.display = '';
          } else {
            pane.classList.remove('active');
            pane.style.display = 'none';
          }
        });
      });
    });
  });

  // 4. Subtle Scroll Animations
  const animElements = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window && animElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animElements.forEach(el => observer.observe(el));
  } else {
    animElements.forEach(el => el.classList.add('animated'));
  }

  // 5. Initialize Controllers
  initModalManager();
  initFormHandler();
  initEmiCalculator();
});
