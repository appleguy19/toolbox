/* ========================================================================
 * quickSearch.js v0.1
 # jQuery dependant search function that also toggles a nested list
 # @appleguy
 * ========================================================================
*/

(function ($) {
  'use strict';

    $.fn.quickSearch = function(list) { // input is the search field, list is an unordered list
        $(this).keyup(function(){
            var searchTerms = $(this).val();
            $(list).closest('.drawer').addClass('is-searched');
            if (!searchTerms) {
              // $(list).find()
              $(list).find('.collapse').collapse('hide');
              $(list).find('li').show();
              $(list).closest('.drawer').removeClass('is-searched');
            }
            else {
              $(list).find('li').each(function() {
                var hasMatch = searchTerms.length == 0 || $(this).text().toLowerCase().indexOf(searchTerms.toLowerCase()) >= 0;
                $(this).toggle(hasMatch);
                if (hasMatch) {
                  $(this).closest('.collapse').collapse('show');
                };
              });
            }
        });
    }


})(window.jQuery || {});
