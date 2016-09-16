var App = {

  _isWithTooltips: false,

  init: function () {
    App._tableSorters()
    App._tooltips()
    App._listSearch()

    $(window).on('resize', App._tooltips)

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

  _listSearch: function() {
    var options = {
      valueNames: [ 'quick-link' ]
    };

    var userList = new List('quick-links-drawer', options);
  }
}

App.init()
