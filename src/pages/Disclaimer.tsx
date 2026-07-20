import LegalPageLayout from '../components/LegalPageLayout';

export default function Disclaimer() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      eyebrow="Good to Know"
      lastUpdated="20 July 2026"
    >
      <p>
        The information provided on this website by Vignesh Super Store is for general
        informational purposes only. By using this website, you agree to the following
        disclaimer.
      </p>

      <h2>1. Product Images & Craftsmanship</h2>
      <p>
        Every item featured on this website is handcrafted using traditional
        techniques. As a result, each piece is unique, and minor variations in size,
        weight, colour, and finish compared to the photographs shown are natural and
        should be expected rather than treated as a defect.
      </p>

      <h2>2. No Professional Advice</h2>
      <p>
        Any information on this website relating to the use, care, or significance of
        our brass and copper products is provided for general guidance only and should
        not be treated as professional, religious, or ritual advice.
      </p>

      <h2>3. External Links</h2>
      <p>
        Our website may contain links to third-party websites, such as map or social
        media platforms, for your convenience. We are not responsible for the content,
        accuracy, or privacy practices of any external website.
      </p>

      <h2>4. Availability of Products</h2>
      <p>
        Products displayed on our website are subject to availability. Certain designs
        or sizes may be discontinued, out of stock, or updated without prior notice.
      </p>

      <h2>5. Metal Care</h2>
      <p>
        Brass and copper are natural metals that may tarnish or change appearance over
        time with exposure to air, moisture, and regular use. This is a natural
        property of the metal and not a manufacturing defect. Regular cleaning and
        proper care can help maintain the shine of your product.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        While we make every effort to ensure the accuracy of the information on this
        website, Vignesh Super Store makes no warranties or guarantees, express or
        implied, about the completeness or reliability of the content. Your use of any
        information on this site is at your own discretion and risk.
      </p>

      <h2>7. Changes to This Disclaimer</h2>
      <p>
        We may update this Disclaimer periodically. Please check this page from time to
        time for any changes.
      </p>

      <h2>8. Contact Us</h2>
      <p>If you have any questions about this Disclaimer, please contact us:</p>
      <ul>
        <li>
          Email:{' '}
          <a href="mailto:vigneshsuperstores@gmail.com">vigneshsuperstores@gmail.com</a>
        </li>
        <li>
          Phone: <a href="tel:+919876543210">+91 98765 43210</a>
        </li>
        <li>Address: Sri Vignesh Metal, 13, Paramasiva Street, Park Town, Chennai – 600003, Tamil Nadu</li>
      </ul>
    </LegalPageLayout>
  );
}