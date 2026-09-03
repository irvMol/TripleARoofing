---
layout: base.njk
title: Thank You | {{ business.name }}
permalink: /thank-you/
---

<section class="bg-brand-dark-grey/90 py-24 px-4">
<div class="max-w-3xl mx-auto text-center">
<div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-primary/10 text-brand-primary mb-8">
<span class="text-4xl">✓</span>
</div>
<h1 class="text-5xl font-black text-white tracking-tight mb-6">
  Thank You!
</h1>
<p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
  Your request has been received. A member of the {{ business.name }} team will review your information and contact you as soon as possible.
</p>
<div class="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto mb-10">
<p class="text-white font-semibold mb-2">
    Need immediate assistance?
</p>
<a
href="tel:{{ business.phone }}"
class="text-brand-primary font-black text-2xl hover:underline"
>
    {{ business.phoneDisplay }}
</a>
</div>
<a
href="/"
class="inline-flex items-center justify-center bg-brand-primary text-white font-black py-4 px-8 rounded-full hover:opacity-90 transition"
> Return Home
> </a>

</div>
</section>
