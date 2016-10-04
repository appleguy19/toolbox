var App = {

  _isWithTooltips: false,

  init: function () {
    App._tableSorters()
    App._tooltips()
    App._quickLinksSearch()
    App._calendar()

    $(window).on('resize', App._tooltips)
    $(window).on('resize', App._calendar)

    $(document).on('shown.bs.tab', function () {
      $(document).trigger('redraw.bs.charts')
    })
  },

  _tooltips: function () {
    if ($(window).width() > 768) {
      if (App._isWithTooltips) return
      App._isWithTooltips = true
      $('[data-toggle="tooltip"]').tooltip()

    } else {
      if (!App._isWithTooltips) return
      App._isWithTooltips = false
      $('[data-toggle="tooltip"]').tooltip('destroy')
    }

  },

  _tableSorters: function () {
    $('[data-sort="table"]').tablesorter( {sortList: [[1,0]]} );
  },

  _quickLinksSearch: function() {
    $('#quick-links-search').quickSearch($('#quick-links-content'));
  },

  _calendar: function() {
    $('#calendar').fullCalendar({
      header : {  left:   '',
                  center: '',
                  right:  ''
               },
     });
     if ($(window).width() > 768) {
       $('#calendar').fullCalendar('option', 'aspectRatio', 1.7)

     } else{
       $('#calendar').fullCalendar('option', 'aspectRatio', .9)
     }
   }
 }

App.init()
