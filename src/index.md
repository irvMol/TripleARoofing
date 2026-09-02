---
layout: hero.njk
hero_title: Your DFW Roofing Solution
hero_subtitle: Affordable, Attentive & Action-Driven roofing and storm restoration solutions for homeowners and businesses throughout
hero_cta_text: Contact Us
permalink: /
templateEngineOverride: njk
---

<!-- 1. Services Section -->
<div class="text-center mb-16" id="services">
  <h2 class="font-display text-4xl font-extrabold text-white tracking-tight">Our Expert Services</h2>
  <div class="h-1.5 w-24 bg-brand-primary mx-auto mt-6 rounded-full"></div>
  <p class="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">From minor repairs to full scale storm restoration, we provide invaluable experience and durable results.</p>
</div>
{% if site.servicesStyle == "carousel" %}
  {% include "partials/services-carousel.njk" %}
{% else %}
  {% include "partials/services-grid.njk" %}
{% endif %}
<!-- 2. Conversion Section -->
<section class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-stretch">
<div class="bg-brand-dark-grey p-12 rounded-3xl shadow-2xl flex flex-col justify-center">
<h2 class="font-display text-3xl font-black mb-4 text-gray-200 uppercase tracking-tighter">
      Quick Estimate
</h2>
<p class="text-gray-400 mb-8">
      Call or message us with your project details
</p>
<div class="p-8 border-1 border-dashed border-gray-200 rounded-2xl bg-gray-100 text-center">
  {% set compact = true %}
  {% include "partials/contact-form.njk" %}
</div>
</div>
<div class="bg-brand-dark-grey rounded-3xl shadow-2xl overflow-hidden relative min-h-[450px]">
<div class="h-full flex items-center justify-center p-4">
<button
class="group text-left lightbox-trigger focus:outline-none w-full h-full rounded-2xl"
data-full="/assets/images/map.png"
data-alt="{{ business.serviceArea }} Service Area"
>
<div class="max-w-full max-h-full object-contain rounded-2xl cursor-pointer">
        {% image
          "/assets/images/map.png",
          business.serviceArea + " Service Area",
          "(max-width: 768px) 100vw, 33vw",
          "w-full rounded-2xl aspect-square object-cover transition duration-500 group-hover:scale-105"
        %}
</div>
</button>
</div>
</div>
</section>
