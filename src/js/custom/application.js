var App = {

  _isWithTooltips: false,

  init: function () {
    App._tableSorters()
    App._tooltips()
    App._quickLinksSearch()

    $(window).on('resize', App._tooltips)
    $(window).on('resize', App._dataTables)

    $(document).on('shown.bs.tab', function () {
      $(document).trigger('redraw.bs.charts');
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

	_updateProgressBars: function() {
		var trs = document.querySelectorAll('.table-progress-bars tbody tr');
		for (var i=0; i<trs.length; i++) {
			var tr = trs[i];
			var pr = tr.querySelector('.table-progress');
			if(pr) {
				pr.style.left = (tr.dataset.progress - 100)+'%';
				pr.style.height = tr.clientHeight + 'px';
			}
		}
	}

 }

App.init()
