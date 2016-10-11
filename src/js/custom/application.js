var App = {

  _isWithTooltips: false,

  init: function () {
    App._tableSorters()
    App._tooltips()
    App._quickLinksSearch()
    App._calendar()
    App._dataTables()

    $(window).on('resize', App._tooltips)
    $(window).on('resize', App._calendar)
    //$(window).on('resize', App._dataTables.dtTables.refreshUi)

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
   },

   _dataTables: function() {
     $.extend( $.fn.dataTable.defaults, {
         searching: false,
         lengthChange: false,
         paging: false,
         info: false
     } );
     var dtTables = $('.table-datatable').DataTable( {
         responsive: {
             details: {
               renderer: function ( api, rowIdx, columns ) {
                   var data = $.map( columns, function ( col, i ) {
                       return col.hidden ?
                           '<div class="row" data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                               '<div class="col-sm-6">'+col.title+':'+'</div> '+
                               '<div class="col-sm-6">'+col.data+'</div>'+
                           '</div>' :
                           '';
                   } ).join('');

                   return data ?
                       $('<div/>').append( data ) :
                       false;
               }
             }
         }
     } );
    //  dtTables.prototype.refreshUi = function() {
    //     console.log("Redrawn!");
    //     $.dataTable.columns.adjust().draw();
    //     $.dataTable.responsive.recalc();
    //  };
   }
 }

App.init()
