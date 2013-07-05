(function ($) {
  Drupal.behaviors.fitvids = {
  attach: function (context, settings) {
    
    // Get settings for this behaviour
    var selectors = settings.fitvids['selectors'];
    var simplifymarkup = settings.fitvids['simplifymarkup'];
    console.log(simplifymarkup);
    var custom_domains = settings.fitvids['custom_domains'].join();
        
    // Remove media wrappers
    if (simplifymarkup) {
      if ($(".media-youtube-outer-wrapper").length) {
        $(".media-youtube-outer-wrapper").removeAttr("style");
        $(".media-youtube-preview-wrapper").removeAttr("style");
        $(".media-youtube-outer-wrapper").removeClass("media-youtube-outer-wrapper");
        $(".media-youtube-preview-wrapper").removeClass("media-youtube-preview-wrapper");
        // console.log('Removed .media-youtube... wrappers');
      }
      if ($(".media-vimeo-outer-wrapper").length) {
        $(".media-vimeo-outer-wrapper").removeAttr("style");
        $(".media-vimeo-preview-wrapper").removeAttr("style");
        $(".media-vimeo-outer-wrapper").removeClass("media-vimeo-outer-wrapper");
        $(".media-vimeo-preview-wrapper").removeClass("media-vimeo-preview-wrapper");
        // console.log('Removed .media-vimeo... wrappers');
      }
    }
    
    // Fitvids!
    for (var x = 0; x < selectors.length; x ++) {
      $(selectors[x]).fitVids();
    }
  }
};
}(jQuery));
