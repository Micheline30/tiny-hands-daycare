/**
 * ============================================================
 *  Tiny Hands Big Hearts Daycare — Configuration
 * ============================================================
 *
 *  IMPORTANT: Fill in YOUR credentials below before deploying.
 *
 *  If you're using GitHub Pages:
 *    - Option A (simple): Fill in values here, make the repo PRIVATE.
 *    - Option B (recommended): Use GitHub Actions secrets + a build step
 *      to inject values, so API keys are never stored in code.
 *
 *  Service setup links:
 *    PayPal:     https://developer.paypal.com/dashboard/applications
 *    Square:     https://developer.squareup.com/apps
 *    Formspree:  https://formspree.io (free tier: 50 submissions/month)
 *
 * ============================================================
 */

window.THBH_CONFIG = {

  // ── FORMSPREE ────────────────────────────────────────────
  // Sends booking details to your email when someone books.
  // 1. Go to https://formspree.io and create a free account
  // 2. Create a new form, set the email to tbighearts@gmail.com
  // 3. Copy the form endpoint URL below
  // Example: 'https://formspree.io/f/xeernbzp'
  FORMSPREE_URL: 'YOUR_FORMSPREE_URL',

  // ── PAYPAL ───────────────────────────────────────────────
  // 1. Log in to https://developer.paypal.com
  // 2. Go to My Apps & Credentials → Create App
  // 3. Copy the Client ID (use LIVE credentials for real payments)
  // Example: 'AaBbCcDdEeFf...'
  PAYPAL_CLIENT_ID: 'YOUR_PAYPAL_CLIENT_ID',

  // ── SQUARE ───────────────────────────────────────────────
  // 1. Log in to https://developer.squareup.com
  // 2. Create or open an app → Web Payments SDK
  // 3. Copy both values from your Production credentials
  // App ID example:     'sq0idp-xxxxxxxxx'
  // Location ID example: 'XXXXXXXXXXXXXXXXX'
  SQUARE_APP_ID:      'YOUR_SQUARE_APP_ID',
  SQUARE_LOCATION_ID: 'YOUR_SQUARE_LOCATION_ID',

  // ── CASH APP ─────────────────────────────────────────────
  // Your Cash App $Cashtag that customers will send money to.
  // Example: '$TinyHandsBigHearts'
  CASHAPP_TAG: '$YourCashTag',

  // ── BUSINESS INFO (used in footer / emails) ───────────────
  PHONE:    '843-858-1217',
  EMAIL:    'tbighearts@gmail.com',
  FACEBOOK: 'https://facebook.com/TinyHandsBigHeartsDaycare',

  // ── RATES ────────────────────────────────────────────────
  // Hourly rate per child in USD
  HOURLY_RATE: 8,

};
