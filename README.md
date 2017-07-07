# FitVids Backdrop module

## Description

This module uses the FitVids.js library for fluid width video embeds. It supports YouTube, Vimeo, Blip.tv and Kickstarter by default, and you should be able to use it with other video providers. You don't need it for pure HTML5 videos.

It's useful if you are using a responsive theme and want the videos to scale.

![FitVids](https://github.com/backdrop-contrib/fitvids/blob/1.x-1.x/images/fitvids.jpg "FitVids example")

## Configuration

### jQuery selectors

You can usually use the defaults. It assumes that you'll want to apply it to all videos on the page.

If your theme uses a different class or id, or you only want to target certain videos, you can specify that class/id in the video containers field. You can use any valid jQuery selector, e.g.

`#my-video-container`

`.content`

`body`

You can specify as many containers as you want.


### Video providers

Not all players will work with FitVids, but you can try it out by adding the domain (in the Custom iframe URLs field).


## Issues

Bugs and Feature requests should be reported in the
[Issue Queue](https://github.com/backdrop-contrib/fitvids/issues)

## Current Maintainers

- [Laryn Kragt Bakker](https://github.com/laryn) - [CEDC.org](https://cedc.org)

## Credits

- Ported to Backdrop CMS by [Laryn Kragt Bakker](https://github.com/laryn) - [CEDC.org](https://cedc.org).
- Maintained for Drupal by [Derek Ahmedzai](https://github.com/derekahmedzai).

## License

This project is GPL v2 software. See the [LICENSE.txt](https://github.com/backdrop-contrib/fitvids/blob/1.x-1.x/LICENSE.txt) file in this directory for
complete text.
