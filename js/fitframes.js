(function () {
  Backdrop.behaviors.fitFrames = {
    attach: function (context, settings) {
      // Default settings values
      var $videoSources = null;

      // Get settings for this behaviour
      if (settings.fitframes.sources.length > 0) {
        $videoSources = settings.fitframes.sources;
      }
      else {
        $videoSources = ['iframe'];
      }

      var $width = null;
      var $height = null;

      document.querySelectorAll($videoSources.join(",")).forEach((video) => {
        $height = video.getAttribute("height").replace(/\D/g, '');;
        $width = video.getAttribute("width");
        if (!$width.includes("%") && $height !== "0") {
          $width = $width.replace(/\D/g, '');
          video.style.aspectRatio = `${$width}/${$height}`;
        }
        video.style.maxWidth = "100%";
        video.style.height = "auto";
      });
    }
  };
}());
