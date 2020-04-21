<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="microtip" content="33NWbMsckoLcoVX6Tz9o6ksuBrJVeu3en2" data-currency="btc">
<meta name="theme-color" content="#ffffff">

<link rel="preconnect" href="https://srv.buysellads.com" crossorigin>
<link rel="preconnect" href="https://www.google-analytics.com" crossorigin>
<link rel="preconnect" href="https://www.google.com" crossorigin>
<link rel="preconnect" href="https://googleads.g.doubleclick.net" crossorigin>
<link rel="preconnect" href="https://cdn.ampproject.org" crossorigin>
<link rel="preconnect" href="https://s3.amazonaws.com" crossorigin>
<link rel="preconnect" href="https://images.digg.com" crossorigin>
<link rel="manifest" href="/manifest.json?v=1587400711">
<link rel="stylesheet" href="/static/base.css?v=1587400711">
<link rel="canonical" href="https://digg.com/source/protocol.com">

<link rel="icon" href="/static/images/digg-favicon.png?v=1587400711" type="image/png">
<link rel="apple-touch-icon" href="/static/images/digg-logo-512.png?v=1587400711">

<script type='text/javascript'>
      (function () {
        var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
        _sf_async_config.uid = 30608;
        _sf_async_config.domain = 'digg.com';
        _sf_async_config.flickerControl = false;
        _sf_async_config.useCanonical = true;
        _sf_async_config.useCanonicalDomain = true;
        _sf_async_config.sections = ''; //CHANGE THIS TO YOUR SECTION NAME(s)
        _sf_async_config.authors = ''; //CHANGE THIS TO YOUR AUTHOR NAME(s)
        function loadChartbeat() {
          var e = document.createElement('script'); e.type = 'text/javascript'; e.async = true; e.src = '//static.chartbeat.com/js/chartbeat.js';
          var n = document.getElementsByTagName('script')[0]; n.parentNode.insertBefore(e, n);
        }
        loadChartbeat();
      })();
    </script>
<script async src="https://static.chartbeat.com/js/chartbeat_mab.js"></script>



<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@digg">
<meta name="twitter:title" content="Stories from protocol.com - Digg">
<meta name="twitter:image" content="https://digg.com/static/images/digg-logo-og.png">
<meta name="twitter:description" content="Archive of the best protocol.com stories on Digg including articles, videos, and photos.">
<meta property="fb:app_id" content="123277257693179">
<meta property="og:url" content="https://digg.com/source/protocol.com">
<meta property="og:type" content="website">
<meta property="og:title" content="Stories from protocol.com - Digg">
<meta property="og:image" content="https://digg.com/static/images/digg-logo-og.png">
<meta property="og:description" content="Archive of the best protocol.com stories on Digg including articles, videos, and photos.">
<meta name="application-name" content="Digg">
<meta name="msapplication-TileImage" content="https&#x3A;&#x2F;&#x2F;digg.com/static/images/digg-logo-144.png">
<meta name="msapplication-TileColor" content="#ffffff">
<title>Stories from protocol.com - Digg</title>
<meta name="description" content="Archive of the best protocol.com stories on Digg including articles, videos, and photos.">

<link rel="alternate" type="application/rss+xml" title="Stories from protocol.com - Digg" href="/rss/protocol.com.rss">
<link rel="search" type="application/opensearchdescription+xml" title="Digg" href="/opensearch.xml">
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-33556916-1"></script>
<script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-33556916-1', {
        'custom_map': {
          'dimension7': 'user_login_status'
        }
      });

            gtag('event', 'page_load', { 'user_login_status': 'no' });
          </script>
</head>
<body class=" ">
<header class="main-navigation">
<div class="main-navigation__inner">
<div class="main-navigation__inactive-overlay"></div>
<div class="main-navigation__inner-left left">
<a href="/" class="logo">
<svg viewBox="0 0 47 27" width="47" height="27" xmlns="http://www.w3.org/2000/svg" aria-label="Digg">
<title>Digg</title>
<path d="M5.025 10.025H7V17H5.025v-6.975zM0 21h12V0H7v6H0v15zM14 6h5v15h-5zm0-6h5v4h-5zm12 10h2v7h-2v-7zm-5 11h7v2h-7v4h12V6H21v15zm19-11h2v7h-2v-7zm-5 11h7v2h-7v4h12V6H35v15z" fill="#1B1A19" fill-rule="evenodd"></path>
</svg>
</a>
<div class="main-navigation__primary">
<a href="#" class="main-navigation__primary-trigger">
<svg height="18" viewBox="0 0 48 48" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"></path>
</svg>
</a>
<nav role="navigation" class="main-navigation__primary-panel">
<ul class="main-navigation__primary-links">
<li>
<a href="/">
<svg viewBox="0 0 48 48" width="12" height="12" xmlns="http://www.w3.org/2000/svg" aria-label="Frontpage">
<g fill="none" fill-rule="evenodd">
<path fill="#000" d="M6.03 23.958H0L24 0l24 23.958h-6.03V46H6.03V23.958zM20 46h8V30h-8v16z"></path>
</g>
</svg>
<span>Frontpage</span>
</a>
</li>
<li>
<a href="/video">
<svg viewBox="0 0 48 48" width="12" height="12" xmlns="http://www.w3.org/2000/svg" aria-label="Video">
<g fill="none" fill-rule="evenodd">
<path fill="#000" d="M8 2v44l37-22z"></path>
</g>
</svg>
<span>Video</span>
</a>
</li>
<li>
<a href="https://store.digg.com?utm_source=digg.com&amp;utm_medium=topnav" target="" rel="noopener" aria-label="Opens a new window">
<svg viewBox="0 0 48 48" width="12" height="12" xmlns="http://www.w3.org/2000/svg" aria-label="Store">
<g fill="none" fill-rule="evenodd">
<path fill="#000" d="M36 12h8v36H4V12h8c0-6.627 5.373-12 12-12 6.626 0 12 5.373 12 12zm-20 0h16c0-4.417-3.583-8-8-8-4.418 0-8 3.583-8 8z"></path>
</g>
</svg>
<span>Store</span>
</a>
</li>
<li>
<a href="/channel/digg-pick">
<svg viewBox="0 0 92 92" width="12" height="12" xmlns="http://www.w3.org/2000/svg" aria-label="Picks">
<path fill="#F38F31" fill-rule="nonzero" d="M50 80.362L20.61 95.45l5.27-32.614L2.447 39.55l32.646-5.067L50 5l14.907 29.482 32.646 5.067L74.12 62.837l5.27 32.614z">
</path>
</svg>
<span>Picks</span>
</a>
</li>
</ul>
<div class="main-navigation__primary-channels">
<ul class="main-navigation__primary-channels-left">
<li><a href="/channel/technology" style="color: ">Technology</a></li>
<li><a href="/channel/longreads" style="color: ">Long Reads</a></li>
 <li><a href="/channel/photos" style="color: ">Photos</a></li>
<li><a href="/channel/science" style="color: ">Science</a></li>
</ul>
<ul class="main-navigation__primary-channels-right">
<li><a href="/channel/design" style="color: ">Design</a></li>
<li><a href="/channel/digg-feature" style="color: ">Digg Features</a></li>
<li><a href="/channel/bitcoin" style="color: ">&#8383;itcoin</a></li>
<li><a href="/channel/coronavirus" style="color: ">Coronavirus</a></li>
</ul>
</div>
</nav>
</div>
</div>
<div class="main-navigation__secondary right ">
<nav>
<ul>
<li>
<label class="switch" title="Automatically detect dark mode?">
<input type="checkbox" class="darkmode-toggle">
<span class="slider"></span>
</label>
</li>
<li>
<a class="main-navigation__secondary-subscribe" href="/subscribe">
<svg viewBox="0 0 32 32" width="13" height="13" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M16,15.834l13-7.8V8a2,2,0,0,0-2-2H5A2,2,0,0,0,3,8v.034Z" />
<path d="M16.515,17.857a1,1,0,0,1-1.03,0L3,10.366V24a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V10.366Z" />
</g>
</svg>
<span>Newsletter</span>
</a>
</li>
<li>
<a class="main-navigation__secondary-search">
<label>
<svg viewBox="0 0 48 48" width="13" height="13" xmlns="http://www.w3.org/2000/svg" aria-label="Search">
<g fill="none" fill-rule="evenodd">
<path fill="#000" d="M21.038 1.4c8.284 0 15 6.717 15 15 0 8.286-6.716 15-15 15-8.284 0-15-6.714-15-15 0-8.283 6.716-15 15-15m5.153 32.146L34.555 46.7l6.523-4.147-8.132-12.796c-1.925 1.718-4.222 3.026-6.753 3.79z">
</path>
</g>
</svg>
<span>Search</span>
</label>
<form action="/search" method="get">
<input type="search" name="q" autocomplete="off" spellcheck="false" placeholder="Search Digg" aria-label="Search Digg">
</form>
</a>
</li>
<li class="main-navigation__secondary-account">
<a href="/welcome" class="main-navigation__secondary-login">
<span>Sign In</span>
</a>
</li>
</ul>
</nav>
</div>
</div>
</header>
<section class="wrapper search">
<h1 class="object-hed">protocol.com</h1>
</section>
<section class="wrapper search">
<div class="results" data-collect-stats="yes">
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="869239">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;venn-gaming-esports-launch-date&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2020&#x2F;04&#x2F;09212421&#x2F;1149840680-Screen-Shot-2020-04-09-at-5.23.06-PM.png" loading="lazy" alt="How&#x20;To&#x20;Build&#x20;A&#x20;Post-Cable&#x20;TV&#x20;Network&#x20;From&#x20;Quarantine">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
STILL LOADING </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;venn-gaming-esports-launch-date&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
How To Build A Post-Cable TV Network From Quarantine
</a>
</h2>
<div class="metadata">
<span>
1
digg </span>
<span>
<a href="/source/protocol.com" alt="protocol.com">protocol.com</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/business" alt="Business">Business</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/media" alt="Media">Media</a>
</span>
<span>
<time datetime="2020-04-09 21:27:43 GMT">1 week ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p>Shut out of one of its studios, gaming TV network Venn is fast-tracking its launch with a remote workforce.</p>
</div>
<div class="share-story" data-id="869239" data-url="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;venn-gaming-esports-launch-date&#x3F;utm_source&#x3D;digg" data-title="How&#x20;To&#x20;Build&#x20;A&#x20;Post-Cable&#x20;TV&#x20;Network&#x20;From&#x20;Quarantine">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="867467">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;edison-onmail-better-email-gmail&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2020&#x2F;04&#x2F;07210416&#x2F;362318152-Screen-Shot-2020-04-07-at-5.02.47-PM.jpg" loading="lazy" alt="This&#x20;Tiny&#x20;Startup&#x20;Thinks&#x20;It&#x20;Can&#x20;Do&#x20;Email&#x20;Better&#x20;Than&#x20;Google">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
'WHY BUILD ANOTHER GMAIL?' </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;edison-onmail-better-email-gmail&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
This Tiny Startup Thinks It Can Do Email Better Than Google
</a>
</h2>
<div class="metadata">
<span>
5
diggs </span>
<span>
<a href="/source/protocol.com" alt="protocol.com">protocol.com</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/technology" alt="Technology">Technology</a>
</span>
<span>
<time datetime="2020-04-07 21:04:21 GMT">1 week ago</time>
</span>
</div>
</header>
 <div itemprop="description" class="description">
<p>After years of building email apps, Edison decided the only way to fix email was to do it from the ground up. With OnMail, it's taking on Gmail head on.</p>
</div>
<div class="share-story" data-id="867467" data-url="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;edison-onmail-better-email-gmail&#x3F;utm_source&#x3D;digg" data-title="This&#x20;Tiny&#x20;Startup&#x20;Thinks&#x20;It&#x20;Can&#x20;Do&#x20;Email&#x20;Better&#x20;Than&#x20;Google">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="860102">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;coronavirus-tripactions-layoffs-on-zoom&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2020&#x2F;03&#x2F;26213608&#x2F;1618940820-Screen-Shot-2020-03-26-at-5.35.34-PM.png" loading="lazy" alt="What&#x20;It&#x20;Feels&#x20;Like&#x20;To&#x20;Be&#x20;Laid&#x20;Off&#x20;On&#x20;Zoom&#x20;During&#x20;This&#x20;Crisis">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
'PEOPLE WERE CRYING' </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;coronavirus-tripactions-layoffs-on-zoom&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
What It Feels Like To Be Laid Off On Zoom During This Crisis
</a>
</h2>
<div class="metadata">
<span>
1
digg </span>
<span>
<a href="/source/protocol.com" alt="protocol.com">protocol.com</a>
</span>
<span>
<time datetime="2020-03-26 21:36:19 GMT">3 weeks ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p>Hundreds of tech employees are getting laid off amid the coronavirus outbreak &mdash; but now it's all happening over Zoom.</p>
</div>
<div class="share-story" data-id="860102" data-url="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;coronavirus-tripactions-layoffs-on-zoom&#x3F;utm_source&#x3D;digg" data-title="What&#x20;It&#x20;Feels&#x20;Like&#x20;To&#x20;Be&#x20;Laid&#x20;Off&#x20;On&#x20;Zoom&#x20;During&#x20;This&#x20;Crisis">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="856842">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;instacart-wants-hire-300k-coronavirus&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2020&#x2F;03&#x2F;23195544&#x2F;1643964764-instacart.png" loading="lazy" alt="Instacart&#x20;Planning&#x20;300,000-Worker&#x20;Expansion&#x20;Amid&#x20;Coronavirus">
 </picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
LET THE OUTSIDE COME TO YOU </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;instacart-wants-hire-300k-coronavirus&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
Instacart Planning 300,000-Worker Expansion Amid Coronavirus
</a>
</h2>
<div class="metadata">
<span>
1
digg </span>
<span>
<a href="/source/protocol.com" alt="protocol.com">protocol.com</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/business" alt="Business">Business</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/coronavirus" alt="Coronavirus">Coronavirus</a>
</span>
<span>
<time datetime="2020-03-23 19:56:15 GMT">4 weeks ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p>​Some gig-economy hiring spikes as layoffs begin and delivery explodes to serve COVID-19 lockdowns.</p>
</div>
<div class="share-story" data-id="856842" data-url="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;instacart-wants-hire-300k-coronavirus&#x3F;utm_source&#x3D;digg" data-title="Instacart&#x20;Planning&#x20;300,000-Worker&#x20;Expansion&#x20;Amid&#x20;Coronavirus">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="844572">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;government-buying-location-data&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2020&#x2F;03&#x2F;05144811&#x2F;639030489-Screen-Shot-2020-03-05-at-9.42.57-AM.png" loading="lazy" alt="Through&#x20;Apps,&#x20;Not&#x20;Warrants,&#x20;&#x27;Locate&#x20;X&#x27;&#x20;Allows&#x20;Federal&#x20;Law&#x20;Enforcement&#x20;To&#x20;Track&#x20;Phones">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
BIG TECH IS WATCHING </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;government-buying-location-data&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
Through Apps, Not Warrants, 'Locate X' Allows Federal Law Enforcement To Track Phones
</a>
</h2>
<div class="metadata">
<span>
2
diggs </span>
<span>
<a href="/source/protocol.com" alt="protocol.com">protocol.com</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/technology" alt="Technology">Technology</a>
</span>
<span>
<time datetime="2020-03-05 14:49:14 GMT">1 month ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p>Federal agencies have big contracts with Virginia-based Babel Street. Depending on where you've traveled, your movements may be in the company's data.</p>
</div>
<div class="share-story" data-id="844572" data-url="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;government-buying-location-data&#x3F;utm_source&#x3D;digg" data-title="Through&#x20;Apps,&#x20;Not&#x20;Warrants,&#x20;&#x27;Locate&#x20;X&#x27;&#x20;Allows&#x20;Federal&#x20;Law&#x20;Enforcement&#x20;To&#x20;Track&#x20;Phones">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="837156">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;daqri-snap-ar-failure&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2020&#x2F;02&#x2F;24152224&#x2F;813281743-Screen-Shot-2020-02-24-at-2.22.10-PM.jpg" loading="lazy" alt="Inside&#x20;The&#x20;Collapse&#x20;Of&#x20;Daqri&#x27;s&#x20;&#x24;300&#x20;Million&#x20;Bet&#x20;On&#x20;Augmented&#x20;Reality">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
JUST A HEADS UP </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;daqri-snap-ar-failure&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
Inside The Collapse Of Daqri's $300 Million Bet On Augmented Reality
</a>
</h2>
<div class="metadata">
<span>
11
diggs </span>
<span>
<a href="/source/protocol.com" alt="protocol.com">protocol.com</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/business" alt="Business">Business</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/technology" alt="Technology">Technology</a>
</span>
<span>
<time datetime="2020-02-24 15:22:33 GMT">1 month ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p> The startup rode a wave of augmented reality hype and about $300 million in funding to a series of half-baked products before failing spectacularly and shutting down last year.</p>
</div>
<div class="share-story" data-id="837156" data-url="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;daqri-snap-ar-failure&#x3F;utm_source&#x3D;digg" data-title="Inside&#x20;The&#x20;Collapse&#x20;Of&#x20;Daqri&#x27;s&#x20;&#x24;300&#x20;Million&#x20;Bet&#x20;On&#x20;Augmented&#x20;Reality">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="836964">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;tesla-racism-claims-arbitration&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2020&#x2F;02&#x2F;24131030&#x2F;37544391-Screen-Shot-2020-02-24-at-12.09.45-PM.png" loading="lazy" alt="Inside&#x20;The&#x20;Legal&#x20;Battle&#x20;Dividing&#x20;Tech">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
ARBITRATION 2.0 </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;tesla-racism-claims-arbitration&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
Inside The Legal Battle Dividing Tech
</a>
</h2>
<div class="metadata">
<span>
<a href="/source/protocol.com" alt="protocol.com">protocol.com</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/race" alt="Race">Race</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/technology" alt="Technology">Technology</a>
</span>
<span>
<time datetime="2020-02-24 13:12:26 GMT">1 month ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p>In three racism lawsuits filed against Tesla, the company has tried to convince judges that as many workers' cases as possible should be moved to private arbitration. But Google, Facebook, Uber, Lyft, Airbnb, Microsoft and eBay, among others, have begun to relax their arbitration policies.</p>
</div>
<div class="share-story" data-id="836964" data-url="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;tesla-racism-claims-arbitration&#x3F;utm_source&#x3D;digg" data-title="Inside&#x20;The&#x20;Legal&#x20;Battle&#x20;Dividing&#x20;Tech">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="827010">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;amazon-alexa-toni-reid&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2020&#x2F;02&#x2F;10144829&#x2F;579219068-Screen-Shot-2020-02-10-at-1.46.56-PM.png" loading="lazy" alt="Amazon&#x27;s&#x20;Toni&#x20;Reid&#x20;On&#x20;Teaching&#x20;Alexa&#x20;Every&#x20;Language">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
VISION TO REALITY </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;amazon-alexa-toni-reid&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
Amazon's Toni Reid On Teaching Alexa Every Language
</a>
</h2>
<div class="metadata">
<span>
<a href="/source/protocol.com" alt="protocol.com">protocol.com</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/business" alt="Business">Business</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/technology" alt="Technology">Technology</a>
</span>
<span>
<time datetime="2020-02-10 14:48:59 GMT">2 months ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p>She wants the voice assistant to be ubiquitous.</p>
</div>
<div class="share-story" data-id="827010" data-url="https&#x3A;&#x2F;&#x2F;www.protocol.com&#x2F;amazon-alexa-toni-reid&#x3F;utm_source&#x3D;digg" data-title="Amazon&#x27;s&#x20;Toni&#x20;Reid&#x20;On&#x20;Teaching&#x20;Alexa&#x20;Every&#x20;Language">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
</div>
</section>
<section class="wrapper">
<footer class="footer" role="contentinfo">
<div class="grid">
<div class="col col--9-of-12">
<ul>
<li><a href="/about">About</a></li>
<li><a href="/faq">FAQ</a></li>
<li><a href="/advertising">Advertise</a></li>
<li><a href="/community-guidelines">Community Guidelines</a></li>
<li><a href="https://chrome.google.com/webstore/detail/digg-new-tab-extension/ifhmmfkaojalpgphoaknehmekeoilfhh" target="" class="chrome">Get the Digg New Tab Extension</a></li>
</ul>
</div>
<div class="col col--3-of-12 right">
<ul class="copyright">
<li><a href="/tos">Terms</a></li>
<li><a href="/privacy">Privacy</a></li>
<li>&copy; 2020 Digg</li>
</ul>
</div>
</div>
</footer>
</section>
<script src="/static/bundle.js?v=1587400711" async></script>
<script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>
<script>
      if ('serviceWorker' in navigator) {
        //navigator.serviceWorker.register('/service-worker.js');
      }
    </script>
<script>
      const diggUserData = {
        diggs: [],
        saves: [],
      };
    </script>

<script src="https://stats.digg.com/library/tracker.js?v=1587400711" async></script>

<script>
      window.diggTargetAttribute = '_blank';
    </script>

<script type="text/javascript">
      let displayAds = true;

      if (typeof (Storage) !== 'undefined') {
        if (localStorage.getItem('disable-digg-ads')) {
          displayAds = false;
        }
      }
      var videoEmbedDiv = document.getElementsByClassName('embedd-code')[0],
        videoFrame = videoEmbedDiv ? videoEmbedDiv.getElementsByTagName('iframe')[0] : false,
        isRumble = videoFrame ? (videoFrame.className == 'rumble' ? true : false) : false;

      if (displayAds && !isRumble) {
        (function () {
          var bsa_optimize = document.createElement('script');
          bsa_optimize.type = 'text/javascript';
          bsa_optimize.async = true;
          bsa_optimize.src = 'https://cdn4.buysellads.net/pub/digg.js?' + (new Date() - new Date() % 960000);
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bsa_optimize);
        })();
      }
      else {
        var dfp1 = document.createElement('script');
        dfp1.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dfp1);
        var dfp2 = document.createElement('script');
        dfp2.src = 'https://imasdk.googleapis.com/js/sdkloader/gpt_proxy.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dfp2);
        window.googletag = window.googletag || { cmd: [] };
        googletag.cmd.push(function () {
          googletag.defineSlot('/8691100/Digg_S2S_RightRail_Companion_ATF', [300, 250], 'div-gpt-ad-1568682532978-0')
            .addService(googletag.companionAds())
            .addService(googletag.pubads());
          googletag.companionAds().setRefreshUnfilledSlots(true);
          googletag.pubads().enableVideoAds();
          googletag.enableServices();
          googletag.display('div-gpt-ad-1568682532978-0');
        });
      }
    </script>
<script src="//m.servedby-buysellads.com/monetization.js?1571424878" type="text/javascript"></script>
<script>
      (function () {
        if (typeof _bsa !== 'undefined' && _bsa) {
          if (window.location.pathname == '/') {
            _bsa.init('flexbar', 'CE7DCKJJ', 'placement:digg');
          } else if (window.location.pathname.substring(0, 6) == "/video") {
            _bsa.init('flexbar', 'CE7ITK3N', 'placement:digg');
          }
          _bsa.init('stickybox', 'CK7I4K7Y', 'placement:digg');

          var template = '<a href="##link##" itemprop="url" rel="bookmark noopener" target="_blank" aria-label="Opens a new window"><picture><img src="##image##" loading="lazy" alt="##headline##" width="350" height="190"></picture></a><header><div itemprop="alternativeHeadline" class="alternativeHeadline" data-store="##store##">##kicker##</div><h2 itemprop="headline" class="headline"><a href="##link##" itemprop="url" rel="bookmark noopener" target="_blank" aria-label="Opens a new window">##headline##</a></h2><div class="metadata"><span><a itemprop="keywords" rel="tag" href="/advertising" alt="Promotion">Promotion</a></span></div></header><div itemprop="description" class="description">##description##</div>';

          _bsa.init('custom', 'CK7ICKQE', 'placement:digg', {
            target: 'article.fp-vertical-story[data-id="742304"]',
            template: template,
            clear_contents: true
          });

          _bsa.init('custom', 'CE7DC2QI', 'placement:digg', {
            target: 'article.fp-vertical-story[data-id="742403"]',
            template: template,
            clear_contents: true
          });

          _bsa.init('custom', 'CE7DC2JE', 'placement:digg', {
            target: 'article.fp-vertical-story[data-id="827995"]',
            template: template,
            clear_contents: true
          });

          _bsa.init('custom', 'CE7DC2JJ', 'placement:digg', {
            target: 'article.fp-vertical-story[data-id="838019"]',
            template: template,
            clear_contents: true
          });

        }
      })();
      function BSANativeCallback(a) {
        if (a.ads && a.ads.length > 0 && (a.ads[0].zonekey == 'CE7DCKJJ' || a.ads[0].zonekey == 'CE7ITK3N')) {
          var body = document.getElementsByTagName('body')[0];
          body.className += ' not-fixed';
        }
        if (a.key == 'CK7ICKQE') {
          var element = document.querySelector('article.fp-vertical-story[data-id="742304"]');
          element.classList.remove('placeholder');
        }
        if (a.key == 'CE7DC2QI') {
          var element = document.querySelector('article.fp-vertical-story[data-id="742403"]');
          element.classList.remove('placeholder');
        }
        if (a.key == 'CE7DC2JE') {
          var element = document.querySelector('article.fp-vertical-story[data-id="827995"]');
          element.classList.remove('placeholder');
        }
        if (a.key == 'CE7DC2JJ') {
          var element = document.querySelector('article.fp-vertical-story[data-id="838019"]');
          element.classList.remove('placeholder');
        }
      }
    </script>

<script>
      function getCookie(name) {
        var nameEQ = name + '=',
          ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
        }
        return null;
      }

      function hideElementCheck(which) {
        if (getCookie(which))
          hideElement(which);
      }

      function hideElement(id) {
        var s = document.getElementById(id);
        if (typeof s !== 'undefined' && s != null)
          s.style.display = 'none';
      }
      function hideElementAndSetCookie(id, hours) {
        var s = document.getElementById(id);
        var now = new Date();
        now.setHours(now.getHours() + hours);
        if (typeof s !== 'undefined' && s != null)
          document.cookie = id + '=hide;expires=' + now.toGMTString() + '; SameSite=Lax; path=/';
        s.style.display = 'none';
      }
      hideElementCheck('subscribePromotion');
      hideElementCheck('subscribeBar');
    </script>
</body>
</html>
