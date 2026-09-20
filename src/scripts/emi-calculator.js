/**
 * Nakoda Real Estate - Interactive Client-Side EMI Calculator
 * Formats all calculations in Indian Rupee currency standard.
 */

export function initEmiCalculator() {
  const amountSlider = document.getElementById('calc-amount');
  const rateSlider = document.getElementById('calc-rate');
  const tenureSlider = document.getElementById('calc-tenure');

  const amountDisplay = document.getElementById('calc-amount-val');
  const rateDisplay = document.getElementById('calc-rate-val');
  const tenureDisplay = document.getElementById('calc-tenure-val');

  const emiResult = document.getElementById('calc-emi-result');
  const principalResult = document.getElementById('calc-principal-result');
  const interestResult = document.getElementById('calc-interest-result');
  const totalResult = document.getElementById('calc-total-result');

  if (!amountSlider || !rateSlider || !tenureSlider) return;

  function formatRupees(amount) {
    return '₹ ' + Math.round(amount).toLocaleString('en-IN');
  }

  function formatLakhsCrores(val) {
    if (val >= 10000000) {
      const cr = val / 10000000;
      return `₹ ${cr.toFixed(cr % 1 === 0 ? 0 : 2)} Cr`;
    }
    const l = val / 100000;
    return `₹ ${l.toFixed(0)} Lakhs`;
  }

  function calculate() {
    const P = parseFloat(amountSlider.value);
    const annualRate = parseFloat(rateSlider.value);
    const years = parseFloat(tenureSlider.value);

    // Update Slider Displays
    if (amountDisplay) amountDisplay.textContent = formatLakhsCrores(P);
    if (rateDisplay) rateDisplay.textContent = annualRate.toFixed(1) + ' %';
    if (tenureDisplay) tenureDisplay.textContent = years + (years === 1 ? ' Year' : ' Years');

    // EMI Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
    const n = years * 12;
    const r = annualRate / 12 / 100;

    let emi = 0;
    if (r === 0) {
      emi = P / n;
    } else {
      emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    if (emiResult) emiResult.textContent = formatRupees(emi);
    if (principalResult) principalResult.textContent = formatRupees(P);
    if (interestResult) interestResult.textContent = formatRupees(totalInterest);
    if (totalResult) totalResult.textContent = formatRupees(totalPayment);
  }

  amountSlider.addEventListener('input', calculate);
  rateSlider.addEventListener('input', calculate);
  tenureSlider.addEventListener('input', calculate);

  // Initial calculation
  calculate();
}
