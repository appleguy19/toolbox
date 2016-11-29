var App = {

  _isWithTooltips: false,

  init: function () {
    App._tableSorters()
    App._tooltips()
    App._quickLinksSearch()
		App._dataTables()

    $(window).on('resize', App._tooltips)

    $(document).on('shown.bs.tab', function () {
      $(document).trigger('redraw.bs.charts');
    });

		//close the drawer when we get a click outside of it
		$(document).on('click touch', function (e) {
			var container = $("#quick-links-drawer");
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0 // ... nor a descendant of the container
					&& container.hasClass("open")) //is open
      {
        container.drawer('hide');
      }
		});
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

	_dataTables: function() {
		$.extend( $.fn.dataTable.defaults, {
			lengthChange: false,
			paging: false,
			info: false,
			buttons: [
				{
					extend: 'print',
					text: '<span class="icon icon-print" title="print"></span>',
					className: 'btn btn-info-outline btn-sm'
				}
    ]
		} );

		$('.table-datatable').DataTable();
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
