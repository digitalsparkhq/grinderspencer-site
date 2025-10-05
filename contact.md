---
layout: default
title: Contact
---

<!-- Contact Hero -->
<section class="hero d-flex align-items-center text-center text-white" style="background: url('{{ '/assets/images/contact-bg.jpg' | relative_url }}') no-repeat center center/cover; height:50vh;">
  <div class="container">
    <h1>Contact Us</h1>
  </div>
</section>

<!-- Contact Form & Info -->
<section class="py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2>Get in Touch</h2>
        <p>Reach out to us for inquiries, memberships, or personal training consultations.</p>
        <p><i class="fas fa-phone"></i> +1 234 567 890</p>
        <p><i class="fas fa-envelope"></i> info@example.com</p>
        <p><i class="fas fa-map-marker-alt"></i> 123 Main Street, City, Country</p>
      </div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Your Name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Your Email">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" class="btn btn-danger">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>
