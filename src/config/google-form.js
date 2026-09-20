/**
 * Nakoda Real Estate - Google Form Integration Configuration
 *
 * Central configuration file for connecting website lead-generation forms
 * directly to a Google Form and Google Sheets destination.
 *
 * Refer to GOOGLE_FORM_SETUP.md for complete instructions on obtaining
 * your form URL and entry field IDs.
 */

export const GOOGLE_FORM_CONFIG = {
  // Production Google Form response URL
  // Example: "https://docs.google.com/forms/d/e/1FAIpQLSeXXXXXXXXXXXXX/formResponse"
  formUrl: "",

  // Mapping of website form fields to Google Form entry IDs
  // When setting up your form, inspect the entry IDs (e.g., "entry.123456789")
  fields: {
    name: "",          // entry.XXXXXXXXX for Full Name
    phone: "",         // entry.XXXXXXXXX for Mobile Number
    email: "",         // entry.XXXXXXXXX for Email Address
    project: "",       // entry.XXXXXXXXX for Interested Project
    configuration: "", // entry.XXXXXXXXX for Interested Configuration (e.g., 3 BHK, 4 BHK)
    visitDate: "",     // entry.XXXXXXXXX for Preferred Site Visit Date
    visitTime: "",     // entry.XXXXXXXXX for Preferred Site Visit Time
    message: "",       // entry.XXXXXXXXX for Message / Enquiry
    consent: ""        // entry.XXXXXXXXX for Consent checkbox
  },

  // Helper function to check if the integration is actively configured
  isConfigured() {
    return Boolean(this.formUrl && this.fields.name && this.fields.phone);
  }
};
