
import styles from './index.module.css';

const Privacy_Policy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Privacy Policy</h1>
        <p>
          At TDG Furniture Exchange, powered by The Designers Group, we are committed to ensuring the security and protection of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website or services.
        </p>
      </div>
      
      <div className={styles.section}>
        <h2 className={styles.subHeading}>Information We Collect</h2>
        <div className={styles.content}>
          <h3>User Information:</h3>
          <p>We may collect personal information such as your name, email address, and contact details when you register on our website or communicate with us.</p>
          <h3>Transaction Information:</h3>
          <p>When you engage in transactions with us, we may collect information related to the transaction, such as product details and payment information.</p>
          <h3>Usage Information:</h3>
          <p>We collect information about how you interact with our website, including pages visited, links clicked, and browsing patterns.</p>
          <h3>Device Information:</h3>
          <p>We may collect information about the device you use to access our website, such as your IP address, browser type, and operating system.</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subHeading}>Use of Collected Information</h2>
        <div className={styles.content}>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>Providing and personalizing our services to meet your needs.</li>
            <li>Processing transactions and delivering products or services you request.</li>
            <li>Communicating with you, including responding to your inquiries and providing customer support.</li>
            <li>Analyzing and improving the quality of our website and services.</li>
            <li>Sending promotional emails and marketing communications, if you have opted in to receive them.</li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subHeading}>Sharing of Personal Information</h2>
        <div className={styles.content}>
          <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>
          <p>We may also disclose your information when we believe it is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subHeading}>Security Measures</h2>
        <div className={styles.content}>
          <p>We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction.</p>
          <p>We use industry-standard encryption protocols to safeguard sensitive data transmitted between your browser and our website.</p>
          <p>Despite our efforts to maintain the security of your data, please be aware that no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subHeading}>Data Retention</h2>
        <div className={styles.content}>
          <p>We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subHeading}>Your Rights</h2>
        <div className={styles.content}>
          <p>You have the right to access, update, or delete your personal information. You may also have the right to restrict or object to certain processing activities and to receive a copy of your data in a structured, machine-readable format.</p>
          <p>If you wish to exercise any of these rights or have questions about our privacy practices, please contact us using the information provided below.</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subHeading}>Changes to this Privacy Policy</h2>
        <div className={styles.content}>
          <p>We reserve the right to update or modify this Privacy Policy at any time, without prior notice. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this policy periodically for any updates or changes.</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subHeading}>Contact Us</h2>
        <div className={styles.content}>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at [contact email/phone number/address].</p>
        </div>
      </div>

      <p className={styles.notice}>By using our website or services, you consent to the terms of this Privacy Policy and agree to be bound by its provisions.</p>
    </div>
  );
};

export default Privacy_Policy;
