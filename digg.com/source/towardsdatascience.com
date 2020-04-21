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
<link rel="canonical" href="https://digg.com/source/towardsdatascience.com">

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
<meta name="twitter:title" content="Stories from towardsdatascience.com - Digg">
<meta name="twitter:image" content="https://digg.com/static/images/digg-logo-og.png">
<meta name="twitter:description" content="Archive of the best towardsdatascience.com stories on Digg including articles, videos, and photos.">
<meta property="fb:app_id" content="123277257693179">
<meta property="og:url" content="https://digg.com/source/towardsdatascience.com">
<meta property="og:type" content="website">
<meta property="og:title" content="Stories from towardsdatascience.com - Digg">
<meta property="og:image" content="https://digg.com/static/images/digg-logo-og.png">
<meta property="og:description" content="Archive of the best towardsdatascience.com stories on Digg including articles, videos, and photos.">
<meta name="application-name" content="Digg">
<meta name="msapplication-TileImage" content="https&#x3A;&#x2F;&#x2F;digg.com/static/images/digg-logo-144.png">
<meta name="msapplication-TileColor" content="#ffffff">
<title>Stories from towardsdatascience.com - Digg</title>
<meta name="description" content="Archive of the best towardsdatascience.com stories on Digg including articles, videos, and photos.">

<link rel="alternate" type="application/rss+xml" title="Stories from towardsdatascience.com - Digg" href="/rss/towardsdatascience.com.rss">
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
<h1 class="object-hed">towardsdatascience.com</h1>
</section>
<section class="wrapper search">
<div class="results" data-collect-stats="yes">
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="783739">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;word-clouds-without-context-3a71b6dc3e2d&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2019&#x2F;11&#x2F;29121505&#x2F;1651976152-test-8.png" loading="lazy" alt="Stop&#x20;Using&#x20;Word&#x20;Clouds&#x20;Without&#x20;The&#x20;Context">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
CLOUDY WITH A CHANCE OF MISINTERPRETATION </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;word-clouds-without-context-3a71b6dc3e2d&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
Stop Using Word Clouds Without The Context
</a>
</h2>
<div class="metadata">
<span>
1
digg </span>
<span>
<a href="/source/towardsdatascience.com" alt="towardsdatascience.com">towardsdatascience.com</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/language" alt="Language">Language</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/technology" alt="Technology">Technology</a>
</span>
<span>
<time datetime="2019-11-29 12:15:41 GMT">4 months ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p>Word clouds don't show the relations between the words, losing the context. </p>
</div>
<div class="share-story" data-id="783739" data-url="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;word-clouds-without-context-3a71b6dc3e2d&#x3F;utm_source&#x3D;digg" data-title="Stop&#x20;Using&#x20;Word&#x20;Clouds&#x20;Without&#x20;The&#x20;Context">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
 <span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="738395">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;an-obscure-mathematical-theory-and-the-consciousness-debate-in-ai-424f5f95ada&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2019&#x2F;09&#x2F;13105827&#x2F;2049298762-test40.jpg" loading="lazy" alt="An&#x20;Obscure&#x20;Mathematical&#x20;Theory&#x20;And&#x20;The&#x20;Consciousness&#x20;Debate&#x20;In&#x20;AI">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
</div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;an-obscure-mathematical-theory-and-the-consciousness-debate-in-ai-424f5f95ada&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
An Obscure Mathematical Theory And The Consciousness Debate In AI
</a>
</h2>
<div class="metadata">
<span>
<a href="/source/towardsdatascience.com" alt="towardsdatascience.com">towardsdatascience.com</a>
</span>
<span>
<time datetime="2019-09-13 10:59:15 GMT">7 months ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
Gödel Incompleteness Theorem and the Theory of Consciousness can be at the center of the strong vs. weak AI debate.
</div>
<div class="share-story" data-id="738395" data-url="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;an-obscure-mathematical-theory-and-the-consciousness-debate-in-ai-424f5f95ada&#x3F;utm_source&#x3D;digg" data-title="An&#x20;Obscure&#x20;Mathematical&#x20;Theory&#x20;And&#x20;The&#x20;Consciousness&#x20;Debate&#x20;In&#x20;AI">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="738393">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;an-obscure-mathematical-theory-and-the-consciousness-debate-in-ai-424f5f95ada&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;wp-content&#x2F;uploads&#x2F;2019&#x2F;09&#x2F;13105851&#x2F;1596597088-Screen-Shot-2019-09-13-at-10.57.43-AM.jpg" loading="lazy" alt="An&#x20;Obscure&#x20;Mathematical&#x20;Theory&#x20;And&#x20;The&#x20;Consciousness&#x20;Debate&#x20;In&#x20;AI">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
I GET AI </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;an-obscure-mathematical-theory-and-the-consciousness-debate-in-ai-424f5f95ada&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
 An Obscure Mathematical Theory And The Consciousness Debate In AI
</a>
</h2>
<div class="metadata">
<span>
<a href="/source/towardsdatascience.com" alt="towardsdatascience.com">towardsdatascience.com</a>
</span>
<span>
<time datetime="2019-09-13 10:58:58 GMT">7 months ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
Gödel Incompleteness Theorem and the Theory of Consciousness can be at the center of the strong vs. weak AI debate
</div>
<div class="share-story" data-id="738393" data-url="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;an-obscure-mathematical-theory-and-the-consciousness-debate-in-ai-424f5f95ada&#x3F;utm_source&#x3D;digg" data-title="An&#x20;Obscure&#x20;Mathematical&#x20;Theory&#x20;And&#x20;The&#x20;Consciousness&#x20;Debate&#x20;In&#x20;AI">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="723390">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;the-little-robot-that-lived-at-the-library-90431f34ae2c&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;images&#x2F;8260ca36d9f24e29ac11b3576c0aaa86_2K2t2w5_1_www_large_thumb.jpeg" loading="lazy" alt="The&#x20;Little&#x20;Robot&#x20;That&#x20;Lived&#x20;At&#x20;The&#x20;Library">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
READING ROBOT </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;the-little-robot-that-lived-at-the-library-90431f34ae2c&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
The Little Robot That Lived At The Library
</a>
</h2>
<div class="metadata">
<span>
5
diggs </span>
<span>
<a href="/source/towardsdatascience.com" alt="towardsdatascience.com">towardsdatascience.com</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/books" alt="Books">Books</a>
</span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/technology" alt="Technology">Technology</a>
</span>
<span>
<time datetime="2019-07-25 16:56:32 GMT">8 months ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p>How we built an emotive social robot to guide library customers to books.</p>
</div>
<div class="share-story" data-id="723390" data-url="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;the-little-robot-that-lived-at-the-library-90431f34ae2c&#x3F;utm_source&#x3D;digg" data-title="The&#x20;Little&#x20;Robot&#x20;That&#x20;Lived&#x20;At&#x20;The&#x20;Library">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="724100">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;your-dataset-is-a-giant-inkblot-test-b9bf4c53eec5&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;images&#x2F;dba0ac720c2446449a40187264939d8e_2JK7DYl_1_www_large_thumb.jpeg" loading="lazy" alt="Your&#x20;Dataset&#x20;Is&#x20;A&#x20;Giant&#x20;Inkblot&#x20;Test">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
CAREFUL WHAT YOU SEE </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;your-dataset-is-a-giant-inkblot-test-b9bf4c53eec5&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
Your Dataset Is A Giant Inkblot Test
</a>
</h2>
<div class="metadata">
<span>
<a href="/source/towardsdatascience.com" alt="towardsdatascience.com">towardsdatascience.com</a>
</span>
<span>
<time datetime="2019-07-17 23:42:11 GMT">9 months ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p>Complex datasets practically beg you to find false meaning in them.</p>
</div>
<div class="share-story" data-id="724100" data-url="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;your-dataset-is-a-giant-inkblot-test-b9bf4c53eec5&#x3F;utm_source&#x3D;digg" data-title="Your&#x20;Dataset&#x20;Is&#x20;A&#x20;Giant&#x20;Inkblot&#x20;Test">
<span data-controller="digg" class="digg"></span>
<span data-controller="save" class="save"></span>
<span data-controller="facebook" class="facebook"></span>
<span data-controller="twitter" class="twitter"></span>
</div>
</div>
</div>
</article>
<article class="s-vertical-story" itemtype="http://schema.org/Article" data-id="376684">
<div class="grid">
<div class="col col--4-of-12 col--m-2-of-4">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;your-mobile-banking-app-has-a-problem-c2fe006e76c7&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
<picture>
<img src="https&#x3A;&#x2F;&#x2F;cdn.digg.com&#x2F;images&#x2F;4cb7f6fad9974b278f25eb4f98fba84c_2XMvBaX_1_www_large_thumb.jpeg" loading="lazy" alt="Your&#x20;Mobile&#x20;Banking&#x20;App&#x20;Has&#x20;A&#x20;Problem&#x20;&#x28;And&#x20;I&#x27;m&#x20;Not&#x20;Sure&#x20;Anyone&#x20;Knows&#x20;About&#x20;It&#x29;">
</picture>
</a>
</div>
<div class="col col--8-of-12 col--m-2-of-4">
<header>
<div itemprop="alternativeHeadline" class="alternativeHeadline" style="color:">
SOMEONE NEEDS TO GIVE IT A CHECK </div>
<h2 itemprop="headline" class="headline">
<a href="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;your-mobile-banking-app-has-a-problem-c2fe006e76c7&#x3F;utm_source&#x3D;digg" itemprop="url" rel="bookmark&#x20;noopener" target="_blank" aria-label="Opens a new window">
Your Mobile Banking App Has A Problem (And I'm Not Sure Anyone Knows About It)
</a>
</h2>
<div class="metadata">
<span>
4
diggs </span>
<span>
<a href="/source/towardsdatascience.com" alt="towardsdatascience.com">towardsdatascience.com</a>
 </span>
<span>
<a itemprop="keywords" rel="tag" href="/channel/money" alt="Money">Money</a>
</span>
<span>
<time datetime="2019-04-24 15:27:18 GMT">11 months ago</time>
</span>
</div>
</header>
<div itemprop="description" class="description">
<p>Errors in machine learning algorithms are creating critical (and nearly invisible) consequences.</p>
</div>
<div class="share-story" data-id="376684" data-url="https&#x3A;&#x2F;&#x2F;towardsdatascience.com&#x2F;your-mobile-banking-app-has-a-problem-c2fe006e76c7&#x3F;utm_source&#x3D;digg" data-title="Your&#x20;Mobile&#x20;Banking&#x20;App&#x20;Has&#x20;A&#x20;Problem&#x20;&#x28;And&#x20;I&#x27;m&#x20;Not&#x20;Sure&#x20;Anyone&#x20;Knows&#x20;About&#x20;It&#x29;">
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
