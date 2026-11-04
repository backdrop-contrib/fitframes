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

      document.querySelectorAll($videoSources.join(",")).forEach((video) => {
        var $height = video.getAttribute("height") || '';
        var $width = video.getAttribute("width") || '';
        if (!$width.includes("%") && !$height.includes("%")) {
          $height = $height.replace(/\D/g, '');
          $width = $width.replace(/\D/g, '');
          if (Number($width) > 0 && Number($height) > 0) {
            video.style.aspectRatio = `${$width}/${$height}`;
          }
        }
        video.style.maxWidth = "100%";
        video.style.height = "auto";
      });
    }
  };
}());
