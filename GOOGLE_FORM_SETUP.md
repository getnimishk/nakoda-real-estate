# Google Form & Google Sheets Integration Guide: Nakoda Real Estate

This document details step-by-step how to link the Nakoda Real Estate website lead capture forms (Site Visit Booking, Brochure Downloads, General Inquiries) directly into a Google Form and connected Google Sheet with **zero server backend**.

---

## Architecture Flow

```
Website Customer Form (Custom Premium UI)
                  ↓
          fetch() HTTP POST
                  ↓
       Google Form Response Endpoint
                  ↓
        Google Spreadsheet
                  ↓
   Instant Email Alerts to Nakoda Team
```

---

## Step-by-Step Setup Instructions

### Step 1: Create the Google Form
1. Sign in to your Google Account (preferably an official Nakoda Real Estate account).
2. Go to [Google Forms](https://forms.google.com/) and create a new blank form.
3. Title the form: **"Nakoda Real Estate - Customer Leads & Site Visits"**.
4. In Form Settings:
   - Turn **OFF** "Require Sign-in" (so anyone can submit without a Google account).
   - Turn **OFF** "Limit to 1 response".

---

### Step 2: Add Form Questions (Fields)
Create the following questions in this exact order (set all question types to **Short answer** or **Paragraph**):

1. **Full Name** (Short answer, Required)
2. **Mobile Number** (Short answer, Required)
3. **Email Address** (Short answer)
4. **Interested Project** (Short answer or Dropdown: Nakoda Solitaire, Nakoda Terraces, Nakoda Green Pavilions, General Enquiry)
5. **Interested Configuration** (Short answer: 3 BHK Luxury, 4 BHK Royal Grand, etc.)
6. **Preferred Site Visit Date** (Short answer or Date)
7. **Preferred Site Visit Time** (Short answer: Morning, Afternoon, Evening)
8. **Customer Message** (Paragraph)
9. **Consent** (Short answer: Yes / Agreed)

---

### Step 3: Link the Google Form to a Google Sheet
1. Click the **Responses** tab in your Google Form.
2. Click **Link to Sheets** (green spreadsheet icon).
3. Select **"Create a new spreadsheet"** named: *"Nakoda Real Estate Leads 2026"*.
4. Click **Create**.
5. *Tip:* In the Google Sheet, go to `Tools` → `Notification settings` → `Edit notifications` and choose *"A user submits a form: Email right away"*. This alerts your sales team the moment a buyer registers!

---

### Step 4: Extract the Form URL & Field Entry IDs

#### Method: Inspect the Pre-filled Link
1. In your Google Form editor, click the three-dots menu (top right) and select **"Get pre-filled link"**.
2. Type dummy values into each field:
   - Full Name: `TESTNAME`
   - Mobile: `TESTPHONE`
   - Email: `TESTEMAIL`
   - Project: `TESTPROJECT`
   - Configuration: `TESTCONFIG`
   - Date: `TESTDATE`
   - Time: `TESTTIME`
   - Message: `TESTMSG`
   - Consent: `TESTCONSENT`
3. Click **"Get link"** at the bottom, then click **"Copy link"**.
4. Paste the copied link into a text editor. It will look like this:

```text
https://docs.google.com/forms/d/e/1FAIpQLSeAbc123xyz.../viewform?usp=pp_url&entry.123456789=TESTNAME&entry.987654321=TESTPHONE&entry.112233445=TESTEMAIL...
```

5. Extract the parameters:
   - **Form ID**: Replace `/viewform?usp=pp_url` with `/formResponse`.
     - Output: `https://docs.google.com/forms/d/e/1FAIpQLSeAbc123xyz.../formResponse`
   - **Field Entry IDs**: Note each `entry.XXXXXXXXX` associated with your dummy text.

---

### Step 5: Update the Website Configuration File
Open `src/config/google-form.js` in your codebase:

```javascript
export const GOOGLE_FORM_CONFIG = {
  formUrl: "https://docs.google.com/forms/d/e/YOUR_REAL_FORM_ID/formResponse",

  fields: {
    name: "entry.123456789",          // Your Full Name entry ID
    phone: "entry.987654321",         // Your Mobile Number entry ID
    email: "entry.112233445",         // Your Email Address entry ID
    project: "entry.223344556",       // Your Project entry ID
    configuration: "entry.334455667", // Your Configuration entry ID
    visitDate: "entry.445566778",     // Your Date entry ID
    visitTime: "entry.556677889",     // Your Time entry ID
    message: "entry.667788990",       // Your Message entry ID
    consent: "entry.778899001"        // Your Consent entry ID
  },

  isConfigured() {
    return Boolean(this.formUrl && this.fields.name && this.fields.phone);
  }
};
```

---

### Step 6: Test the Lead Submission
1. Start your local website: `npm run dev`
2. Click **"Book a Site Visit"** on any page.
3. Fill out the form with a test Indian mobile number (e.g., `9893012345`).
4. Click **Confirm & Book Site Visit**.
5. Verify that:
   - The website displays: *"Thank you! Your site visit inquiry has been successfully received."*
   - A new row appears immediately in your linked Google Sheet with all submitted details.

---

## Option B: Direct Embedded Google Form (Alternative)
If you ever prefer to embed the Google Form iframe directly rather than using the custom form:
1. In Google Forms, click **Send** → `< >` (Embed HTML tab).
2. Copy the iframe code.
3. Paste it into any section of your HTML.
*(Note: Option A provides a vastly superior luxury user experience matching the brand.)*
