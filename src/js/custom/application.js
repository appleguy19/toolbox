var App = {

  _isWithTooltips: false,

  init: function () {
    App._tableSorters()
    App._tooltips()
    App._quickLinksSearch()
		App._dateTimePicker()
		App._dataTables()

    $(window).on('resize', App._tooltips)

    $(document).on('shown.bs.tab', function () {
      $(document).trigger('redraw.bs.charts');
    });

		$('#quick-links-drawer').on('shown.bs.drawer', function() {
			console.log('drawer opened!')
	    $('#quick-links-search').focus();
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

	_dateTimePicker: function () {
		$('.datetimepicker').datetimepicker({
			icons : {
				time: 'icon icon-clock',
				date: 'icon icon-calendar',
				up: 'icon icon-chevron-up',
				down: 'icon icon-chevron-down',
				previous: 'icon icon-chevron-left',
				next: 'icon icon-chevron-right',
				today: 'icon icon-flag',
				clear: 'icon icon-trash',
				close: 'icon icon-cross'
			}
		});
  },

  _quickLinksSearch: function() {
    $('#quick-links-search').quickSearch($('#quick-links-content'));
  },

	_dataTables: function() {
		$.fn.dataTable.Buttons.swfPath = 'flashExport.swf';
		$.extend( $.fn.dataTable.defaults, {
			lengthChange: true,
			pageLength: 50,
			info: true,
			buttons: {
        buttons: [
					{ extend: 'excel', text: '<span class="icon icon-download" title="copy"></span>', className: 'btn btn-info-outline btn-sm' },
					{ extend: 'copy', text: '<span class="icon icon-clipboard" title="copy"></span>', className: 'btn btn-info-outline btn-sm' },
					{ extend: 'print', text: '<span class="icon icon-print" title="print"></span>', className: 'btn btn-info-outline btn-sm' }
        ],
        dom: {
          container: {
              className: 'text-right'
          }
        }
      },
			dom: "<'row'<'col-sm-6'l><'col-sm-4'f><'col-sm-2'B>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
		});

		$('.table-datatable').DataTable();
		// Needed to format empty cells in DataTables in Safari browser
		$('td:empty').html('&nbsp;');
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
 $( document ).ready(function() {
	 App.init()
 });
