---
layout: default
title: "Home | Stronger Self Fitness"
description: "Your journey to strength, wellness, and transformation starts here."
---

<!-- Hero Section -->
<section class="hero d-flex align-items-center text-center text-white" style="background: url('{{ '/assets/images/hero-bg.jpg' | relative_url }}') no-repeat center center/cover; height:100vh;">
  <div class="container hero-content shadow-box p-4">
    <h1>Welcome to Stronger Self Fitness and Health</h1>
    <p>Your journey to strength, wellness, and transformation starts here.</p>
    <button class="btn btn-danger mt-3" data-bs-toggle="modal" data-bs-target="#signupModal">
      Sign Up Now<i class="fas fa-arrow-right"></i>
    </button>
  </div>
</section>
<!-- Videos Section -->
<section class="py-5 text-center">
  <div class="container">
    <h2 class="section-heading">Are you ready for the Wellness Experience?</h2>
    <p class="mb-4">We don’t just train bodies — we transform lives through mindset, discipline, and health.</p>
    <div class="row">
      <div class="col-md-6 mb-4">
        <video controls width="100%">
          <source src="{{ '/assets/videos/video1.mp4' | relative_url }}" type="video/mp4">
        </video>
      </div>
      <div class="col-md-6 mb-4">
        <video controls width="100%">
          <source src="{{ '/assets/videos/video2.mp4' | relative_url }}" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</section>

<!-- Gym Images Section -->
<section class="py-5">
  <div class="container">
    <div class="row g-3">
      <div class="col-md-4 position-relative">
        <img src="{{ '/assets/images/gym1.jpg' | relative_url }}" class="img-fluid feature-img" alt="Gym Floors">
        <h4 class="position-absolute top-50 start-50 translate-middle text-white">Gym Floors</h4>
      </div>
      <div class="col-md-4 position-relative">
        <img src="{{ '/assets/images/gym2.jpg' | relative_url }}" class="img-fluid feature-img" alt="Weights">
        <h4 class="position-absolute top-50 start-50 translate-middle text-white">Weights</h4>
      </div>
      <div class="col-md-4 position-relative">
        <img src="{{ '/assets/images/gym3.jpg' | relative_url }}" class="img-fluid feature-img" alt="Cardio">
        <h4 class="position-absolute top-50 start-50 translate-middle text-white">Cardio</h4>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section id="services" class="py-5 bg-light text-center">
  <div class="container">
    <h2 class="mb-4 section-heading">Our Services</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <img src="{{ '/assets/images/service1.jpg' | relative_url }}" class="img-fluid mb-3" alt="Personal Training">
        <h4>Personal Training</h4>
        <p>One-on-one customized sessions tailored to your goals.</p>
      </div>
      <div class="col-md-4 mb-4">
        <img src="{{ '/assets/images/service2.jpg' | relative_url }}" class="img-fluid mb-3" alt="Group Classes">
        <h4>Group Classes</h4>
        <p>High-energy sessions designed to keep you motivated.</p>
      </div>
      <div class="col-md-4 mb-4">
        <img src="{{ '/assets/images/service3.jpg' | relative_url }}" class="img-fluid mb-3" alt="Nutrition Coaching">
        <h4>Nutrition Coaching</h4>
        <p>Holistic guidance on eating habits that fuel transformation.</p>
      </div>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section id="stats" class="py-5 bg-danger text-white text-center">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h3 class="counter" data-target="200">0</h3>
        <p>Members Trained</p>
      </div>
      <div class="col-md-3">
        <h3 class="counter" data-target="500">0</h3>
        <p>Kilos Lost</p>
      </div>
      <div class="col-md-3">
        <h3 class="counter" data-target="50">0</h3>
        <p>Programs Completed</p>
      </div>
      <div class="col-md-3">
        <h3 class="counter" data-target="150">0</h3>
        <p>Happy Clients</p>
      </div>
    </div>
  </div>
</section>

<!-- Classes Section -->
<section id="classes" class="py-5">
  <div class="container">
    <h2 class="mb-4 section-heading">Our Classes</h2>
    <div class="row align-items-center">
      <div class="col-md-6">
        <p>Our group classes are designed for all fitness levels, focusing on strength, endurance, and fun. With personalized attention in a group setting, you’ll find motivation and energy that keeps you coming back.</p>
        <p>Whether it’s high-intensity interval training or calming wellness classes, we have something for everyone. Join us and become part of a supportive community dedicated to achieving results together.</p>
      </div>
      <div class="col-md-6">
        <img src="{{ '/assets/images/gym4.jpg' | relative_url }}" class="img-fluid" alt="Classes">
      </div>
    </div>
  </div>
</section>

<!-- Equipment Section -->
<section class="py-5 text-center bg-danger text-white">
  <div class="container">
    <h2 class="mb-5">We also have an amazing selection of cardio equipment</h2>
    <div class="row g-3">
      <div class="col-md-4"><img src="{{ '/assets/images/gym1.jpg' | relative_url }}" class="img-fluid hover-zoom feature-img" alt="Equipment"></div>
      <div class="col-md-4"><img src="{{ '/assets/images/gym2.jpg' | relative_url }}" class="img-fluid hover-zoom feature-img" alt="Equipment"></div>
      <div class="col-md-4"><img src="{{ '/assets/images/gym3.jpg' | relative_url }}" class="img-fluid hover-zoom feature-img" alt="Equipment"></div>
    </div>
  </div>
</section>
