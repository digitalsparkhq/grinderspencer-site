---
layout: default
title: Contact
---

<!-- Featured Image -->
<section class="hero d-flex align-items-center text-center text-white" style="background: url('{{ '/assets/images/contact-bg.jpg' | relative_url }}') no-repeat center center/cover; height:50vh;">
  <div class="container">
    <h1>Contact Us</h1>
  </div>
</section>

<!-- Contact Section -->
<section class="py-5">
  <div class="container">
    <div class="row">
      <!-- Left: Contact Info -->
      <div class="col-md-6 mb-4">
        <h2>Get in Touch</h2>
        <p>We’d love to hear from you! Reach out to us via phone, email, or the form and we’ll respond promptly.</p>
        <p><i class="fas fa-phone"></i> +1 234 567 890</p>
        <p><i class="fas fa-envelope"></i> info@example.com</p>
        <p><i class="fas fa-map-marker-alt"></i> 123 Main Street, City, Country</p>
      </div>

      <!-- Right: Contact Form -->
      <div class="col-md-6">
        <form action="#" method="POST" class="p-4 border rounded">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Your Name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Your Email" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn btn-danger w-100">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>
