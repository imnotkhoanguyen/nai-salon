// Core Web Vitals optimization and monitoring
(function() {
  'use strict';
  
  // LCP (Largest Contentful Paint) Optimization
  function optimizeLCP() {
    // Preload critical images
    const criticalImages = [
      '/images/gallery/portrait-turquoise-nails.webp',
      '/images/gallery/white-nails-portrait.webp',
      '/images/gallery/speckled-nail-art.webp'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });
    
    // Optimize font loading
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  }
  
  // CLS (Cumulative Layout Shift) Prevention
  function preventCLS() {
    // Add CSS to prevent layout shifts
    const style = document.createElement('style');
    style.textContent = `
      .hero, .services, .card, .gallery-item {
        contain: layout style;
      }
      
      .lazy-image-container {
        aspect-ratio: 4/3;
        background-color: #f3f4f6;
      }
      
      html {
        font-display: swap;
      }
      
      .card, .gallery-item {
        will-change: transform;
      }
      
      img {
        height: auto;
        max-width: 100%;
      }
    `;
    document.head.appendChild(style);
  }
  
  // FID (First Input Delay) Optimization
  function optimizeFID() {
    // Use passive event listeners
    const passiveEvents = ['scroll', 'touchstart', 'touchmove', 'wheel'];
    passiveEvents.forEach(eventType => {
      document.addEventListener(eventType, () => {}, { passive: true });
    });
    
    // Defer non-critical JavaScript
    const deferScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        if (script.src) {
          const newScript = document.createElement('script');
          newScript.src = script.src;
          newScript.async = true;
          newScript.integrity = script.integrity;
          newScript.crossOrigin = script.crossOrigin;
          document.head.appendChild(newScript);
        }
      });
    };
    
    // Run after page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', deferScripts);
    } else {
      deferScripts();
    }
  }
  
  // Performance Monitoring
  function monitorWebVitals() {
    if (!('PerformanceObserver' in window)) return;
    
    // Monitor LCP
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (lastEntry && lastEntry.startTime) {
          console.log('LCP:', lastEntry.startTime + 'ms');
          reportWebVital('LCP', lastEntry.startTime);
        }
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP monitoring not supported');
    }
    
    // Monitor CLS
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        
        if (clsValue > 0) {
          console.log('CLS:', clsValue);
          reportWebVital('CLS', clsValue);
        }
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS monitoring not supported');
    }
    
    // Monitor FID
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = entry.processingStart - entry.startTime;
          console.log('FID:', fid + 'ms');
          reportWebVital('FID', fid);
        }
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID monitoring not supported');
    }
    
    // Monitor FCP
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        
        if (fcpEntry) {
          console.log('FCP:', fcpEntry.startTime + 'ms');
          reportWebVital('FCP', fcpEntry.startTime);
        }
      });
      
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP monitoring not supported');
    }
  }
  
  // Report Web Vitals to analytics
  function reportWebVital(name, value) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        event_category: 'Core Web Vitals',
        event_label: name,
        value: Math.round(value)
      });
    }
    
    // Google Analytics Universal
    if (typeof ga !== 'undefined') {
      ga('send', 'event', 'Web Vitals', name, name, Math.round(value));
    }
    
    // Custom analytics endpoint
    if (typeof fetch !== 'undefined') {
      fetch('/api/web-vitals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          value: value,
          timestamp: Date.now(),
          url: window.location.href
        })
      }).catch(() => {
        // Silently fail if analytics endpoint doesn't exist
      });
    }
  }
  
  // Initialize optimizations
  function init() {
    optimizeLCP();
    preventCLS();
    optimizeFID();
    monitorWebVitals();
  }
  
  // Run optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Re-run on page navigation
  document.addEventListener('astro:page-load', init);
})();
