import simpleSvgPlaceholder from "./simple-svg-placeholder/mjs/index.js";

[].slice.call(document.querySelectorAll("img[data-ph-size]")).forEach(placeholderImg => {
    let widthHeight = placeholderImg.getAttribute("data-ph-size");
    let width = widthHeight.slice(0, widthHeight.indexOf("x"));
    let height = widthHeight.slice(width.length + 1);
    placeholderImg.src = simpleSvgPlaceholder({width:width, height: height});
});;