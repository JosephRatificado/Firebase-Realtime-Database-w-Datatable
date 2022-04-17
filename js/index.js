var db = firebase.database();
var Client_ref = db.ref('data');

var tblClient = $('#tblClient').DataTable ( { 
  language: { search: '', searchPlaceholder: "Search anything here " },
  "responsive":true,
  "lengthChange": true,
  "pageLength": 25,
  "paging":   true,
  "ordering": false,
  "info":     true,
  "searching":true,
  dom: 'Bfrtip',
  
// buttons: [ 'print', 'excel', 'pdf']
buttons: [
  
  {
      extend:    'excelHtml5',
      text:      '<i class="fa fa-file-excel-o" style="color:green"><span class="datatableIcon"> Excel</span></i>',
      titleAttr: 'Excel',
      exportOptions: {
        columns: [0,1,2,3,4]
    }
  },
 
  {
      extend:    'pdfHtml5',
      text:      '<i class="fa fa-file-pdf-o" style="color:red"><span class="datatableIcon"> PDF</span></i>',
      titleAttr: 'PDF',
      exportOptions: {
        columns: [0,1,2,3,4]
    }
  },
  {
    extend:    'print',
    text:      '<i class="fa fa-print" aria-hidden="true" style="color:orange"><span class="datatableIcon"> Print</span></i>',
    titleAttr: 'Print',
    exportOptions: {
      columns: [0,1,2,3,4]
  }
}
],

});
Client_ref.on('child_added',ClientData=> {
     
        var dataSet = [
          ClientData.child("client").val(),
          ClientData.child("location").val(),
          ClientData.child("name").val(),
          ClientData.child("time").val(),
          ClientData.child("work done").val()
        ];     
  
       
        tblClient.rows.add([dataSet]).draw();
  });



