function loadExternalScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false; // zachowaj kolejność ładowania
  document.head.appendChild(script);
}

loadExternalScript("https://r.mobirisesite.com/449045/assets/bootstrap/js/bootstrap.bundle.min.js");
loadExternalScript("https://r.mobirisesite.com/449045/assets/smoothscroll/smooth-scroll.js");
loadExternalScript("https://r.mobirisesite.com/449045/assets/ytplayer/index.js");
loadExternalScript("https://r.mobirisesite.com/449045/assets/dropdown/js/navbar-dropdown.js");
loadExternalScript("https://r.mobirisesite.com/449045/assets/vimeoplayer/player.js");
loadExternalScript("https://r.mobirisesite.com/449045/assets/masonry/masonry.pkgd.min.js");
loadExternalScript("https://r.mobirisesite.com/449045/assets/imagesloaded/imagesloaded.pkgd.min.js");
loadExternalScript("https://r.mobirisesite.com/449045/assets/theme/js/script.js");
loadExternalScript("https://r.mobirisesite.com/449045/assets/gallery/player.min.js");
loadExternalScript("https://r.mobirisesite.com/449045/assets/gallery/script.js");
loadExternalScript("https://r.mobirisesite.com/449045/assets/formoid/formoid.min.js");