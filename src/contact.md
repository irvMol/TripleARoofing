---
layout: base.njk
title: Contact Us
draft: true
templateEngineOverride: njk
---

<section class="bg-brand-dark-grey/90 py-20 px-4">
  <div class="max-w-2xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-black text-white tracking-tight">
        Get in Touch
      </h1>
      <p class="text-brand-red font-bold uppercase tracking-widest mt-3">
        We’re Here to Help
      </p>
      <p class="text-gray-300 mt-4 text-lg">
        Reach out for a consultation, quote, or to learn more about our services.
      </p>
      <a
        href="{{ business.phone }}"
        class="inline-block mt-6 text-brand-red font-black text-2xl hover:underline"
      >
        {{ business.phoneDisplay }}
      </a>
    </div>
    {% set compact = false %}
    {% include "partials/contact-form.njk" %}
  </div>
</section>
