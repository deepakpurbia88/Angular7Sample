import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DataTableDirective } from "angular-datatables";

declare var $;

@Component({
  selector: "app-datatablesexample",
  templateUrl: "./datatablesexample.component.html",
  styleUrls: ["./datatablesexample.component.css"]
})
export class DatatablesexampleComponent implements OnInit {
  dtOptions: any = {};

  @ViewChild(DataTableDirective, { static: true })
  private datatableElement: DataTableDirective;

  constructor() {}

  ngOnInit(): void {
    //const dataUrl = 'https://raw.githubusercontent.com/l-lin/angular-datatables/master/demo/src/data/data.json';
    const dataUrl = "assets/data/responseData.json";

    this.dtOptions = {
      ajax: dataUrl,
      columns: [
        {
          className: "details-control",
          orderable: false,
          data: null,
          defaultContent: `<i class="fa fa-plus" aria-hidden="true"></i>`
        },
        {
          title: "ID",
          data: "id"
        },
        {
          title: "First name",
          data: "firstName"
        },
        {
          title: "Last name",
          data: "lastName"
        },
        {
          title: "First name1",
          data: "firstName1"
        },
        {
          title: "Last name1",
          data: "lastName1"
        },
        {
          title: "First name2",
          data: "firstName2"
        },
        {
          title: "Last name2",
          data: "lastName2"
        },
        {
          title: "First name3",
          data: "firstName3"
        },
        {
          title: "Last name3",
          data: "lastName3"
        },
        {
          title: "First name4",
          data: "firstName4"
        },
        {
          title: "Last name4",
          data: "lastName4"
        },
        {
          orderable: false,
          data: null,
          defaultContent: `<i class="fa fa-ellipsis-v" aria-hidden="true"></i>`
        }
      ],
      info: false,
      scrollX: true,
      responsive: true,
      dom: '<"top"f>rt<"bottom"lp>'
      /*
      fixedColumns: {
        leftColumns: 1
      }*/
    };
  }

  ngAfterViewInit() {
    const self = this;
    this.datatableElement.dtInstance.then(table => {
      // Add event listener for opening and closing details
      $("table tbody").on("click", "td.details-control", function() {
        var tr = $(this).closest("tr");

        var row = table.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass("shown");
          $(this)
            .find("i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        } else {
          $(this)
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
          var d = row.data();
          row.child(self.format(row.data())).show();

          var childTable = $("#child_details").DataTable({
            destroy: true,
            paging: false,
            info: false,
            searching: false
          });

          tr.addClass("shown");
        }
      });
    });
  }

  format(d) {
    // `d` is the original data object for the row
    return `<table id = "child_details" style="padding-left:20px;">
    <thead>
      <tr>
        <th>Profile Name</th>
        <th>Profile Id</th>
        <th>Talktime</th>
        <th>Validity(Days)</th>
        <th>Description</th>
        <th>Status</th>
        <th>Expiry</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        

      </tr>
      <tr>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        
      </tr>
      <tr>
      <td>${d.firstName}</td>
      <td>${d.firstName}</td>
      <td>${d.firstName}</td>
      <td>${d.firstName}</td>
      <td>${d.firstName}</td>
      <td>${d.firstName}</td>
      <td>${d.firstName}</td>
      
      </tr>
      <tr>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
        <td>${d.firstName}</td>
      </tr>
      
      
    </tbody>
  </table>`;
  }

  /*
  format(d) {
    // `d` is the original data object for the row
    return `<table datatable style="padding-left:50px;">
        <tr>
            <td>Full name:</td>
            <td>${d.firstName} ${d.lastName}</td>
        </tr>
        <tr>
            <td>Extra info:</td>
            <td>And any further details here (images etc)...</td>
        </tr>
    </table>`;
  }
  */
}
