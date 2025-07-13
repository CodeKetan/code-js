// ads-loader.js
(function () {
  const readyToShowAds = false; // 🔁 Change to true when you're ready

  if (!readyToShowAds) return;

  const adHTML = `
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="YYYYYYYYYY"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  `;

  const container = document.getElementById("adContainer");
  if (container) container.innerHTML = adHTML;
})();
