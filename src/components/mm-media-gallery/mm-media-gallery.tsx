import { Component, Element, h, Host } from "@stencil/core";

/*
  https://github.com/sachinchoolur/lightGallery
  https://codepen.io/collection/BNNjpR?cursor=ZD0xJm89MSZwPTEmdj0z
*/
import lightGallery from "lightgallery";

// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";

@Component({
  tag: "mm-media-gallery",
  styleUrl: "mm-media-gallery.scss",
  shadow: false, // stencil will add polyfills for older browsers
  scoped: false, // emultating shadow dom for older browsers
})
export class MmMediaGallery {
  @Element() el: HTMLElement;

  componentDidRender() {
    const gallery = lightGallery(this.el.querySelector(".lightgallery"), {
      plugins: [lgZoom, lgFullscreen, lgThumbnail],
      speed: 500,
      licenseKey: "your_license_key",
      mode: "lg-fade",
      subHtmlSelectorRelative: true, // only if data-sub-html is present in tag
      download: true,
      thumbnail: true,
      zoom: false,
      loop: false,
    });
    console.log(gallery);
  }

  render() {
    return (
      <Host>
        <slot />
        <div class="lightgallery">
          <a href="https://picsum.photos/id/0/768/288" data-lg-size="768-288">
            <img alt=".." src="https://picsum.photos/id/0/200/100" />
          </a>
          <a href="https://picsum.photos/id/0/768/288" data-lg-size="768-288">
            <img alt=".." src="https://picsum.photos/id/0/200/100" />
          </a>
          <a href="https://picsum.photos/id/0/768/288" data-lg-size="768-288">
            <img alt=".." src="https://picsum.photos/id/0/200/100" />
          </a>
          <a href="https://picsum.photos/id/0/768/288" data-lg-size="768-288">
            <img alt=".." src="https://picsum.photos/id/0/200/100" />
          </a>
        </div>
      </Host>
    );
  }
}
