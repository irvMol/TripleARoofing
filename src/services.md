---
layout: base.njk
templateEngineOverride: njk
title: Our Services | Triple A Roofing
description: Explore our full range of roofing and construction services across the Dallas - Forth Worth Metroplex
permalink: /services/
---

<section class="relative overflow-hidden bg-[#2f2f2f] text-white">
    <div class="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <p class="uppercase tracking-[0.15em] text-xs text-brand-primary font-semibold mb-4">
            {{ business.serviceArea }}
        </p>
        <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            Our Services
        </h1>
        <p class="max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
            {{ description }}
        </p>
    </div>
</section>
<section class="bg-[#f7f7f7] py-20">
    <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {% for service in services %}
            <a href="/services/{{ service.slug }}/" class="block group h-full">
                <div class="h-full p-10 border-l-4 border-brand-primary bg-white text-[#3d3e3f] transition-all hover:shadow-xl">
                    <div class="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        {{ service.icon | safe }}
                    </div>
                    <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">{{ service.description }}</p>
                    <p class="mt-6 text-sm font-bold text-brand-primary group-hover:underline">Learn more →</p>
                </div>
            </a>
        {% endfor %}
        </div>
    </div>
</section>
<section class="bg-brand-primary text-white py-20">
    <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-black leading-tight mb-6">
            Ready to Get Started?
        </h2>
        <p class="max-w-2xl mx-auto text-base md:text-lg text-white/85 leading-relaxed mb-10">
            Contact {{ business.name }} today for a free inspection and estimate.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact/" class="inline-flex items-center justify-center bg-white text-brand-primary font-black py-4 px-8 rounded-full hover:bg-gray-100 transition">
                Request a Free Estimate
            </a>
            <a href="tel:{{ business.phone }}" class="inline-flex items-center justify-center border-2 border-white/40 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition">
                {{ business.phoneDisplay }}
            </a>
        </div>
    </div>
</section>
