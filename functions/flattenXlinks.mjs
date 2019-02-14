export default function flattenXlinks($) {
  const $svg = $("svg");
  const xlinks = $svg.find("use[href]");
  xlinks.each(function flattenEachXlink() {
    const xlinkSelector = $(this).attr("href");
    if ($(xlinkSelector)) {
      $(this).replaceWith($(xlinkSelector));
    }
  });
}
