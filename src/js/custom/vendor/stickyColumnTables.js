/* ========================================================================
 * Sticky Column Tables.js v0.1
 # jQuery dependant tool for making the first column sticky on properly formed tables
 # @appleguy
 * ========================================================================
*/

(function ($) {
  'use strict';

    $.fn.stickyColumnTables = function() {

      function splitTable(original) {
        original.wrap("<div class='sticky-column-table-wrapper' />");

        var copy = original.clone();
        copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
        copy.removeClass("table-responsive-sticky-column");

        original.closest(".sticky-column-table-wrapper").append(copy);
        copy.wrap("<div class='pinned' />");
        original.wrap("<div class='scrollable' />");

        setCellHeights(original, copy);
      }

      function unsplitTable(original) {
        original.closest(".sticky-column-table-wrapper").find(".pinned").remove();
        original.unwrap();
        original.unwrap();
      }

      function setCellHeights(original, copy) {
        var tr = original.find('tr'),
            tr_copy = copy.find('tr'),
            heights = [];

        tr.each(function (index) {
          var self = $(this),
              tx = self.find('th, td');

          tx.each(function () {
            var height = $(this).outerHeight(true);
            heights[index] = heights[index] || 0;
            if (height > heights[index]) heights[index] = height;
          });

        });

        tr_copy.each(function (index) {
          $(this).height(heights[index]);
        });
      }

    }


})(window.jQuery || {});
