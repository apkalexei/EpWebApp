import { NotifyService } from './../_services/notify.service';
import { ResourceForScheduler } from './../_models/resource/resourceForScheduler';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResourceService } from './../_services/resource.service';
import { ResourceAllocations } from './../_models/resource/resourceAllocations';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DxSchedulerModule, DxSchedulerComponent} from 'devextreme-angular';
import { AdaptService } from '../_services/adapt.service';
import { FilterService } from '../_services/filter.service';
import { DatePipe } from '@angular/common';

declare var require: any;

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  adaptOptions: any;
  searchParams: any;
  resourceDetail: ResourceForScheduler;
  productionGroupInfo: any;
  resAllocs: ResourceAllocations[] = [];
  searchDate: Date = new Date();

  /* Scheduler config */
  SchedulerStartDayHour = require('../../assets/configuration.json').SchedulerStartDayHour;
  SchedulerEndDayHour = require('../../assets/configuration.json').SchedulerEndDayHour;
  SchedulerAllDayPanel = require('../../assets/configuration.json').SchedulerAllDayPanel;
  SchedulerShowCurrentTimeIndicator = require('../../assets/configuration.json').SchedulerShowCurrentTimeIndicator;

  constructor(

    private resourceService: ResourceService,
    private adaptService: AdaptService,
    private route: ActivatedRoute,
    private router: Router,
    private filterService: FilterService,
    private notifyService: NotifyService,
    private datePipe: DatePipe) {

    this.searchParams = this.getSearchParams();

    this.resourceService
      .getResAllocsForGivenResource(this.searchParams.resource)
      .subscribe(res => {
        this.setResAlloc(res);
      }, err => {
        this.notifyService.error("Error occured. Please try again.");
      });

    this.resourceService
      .getProductionGroup(this.searchParams.productionGroup)
      .subscribe(res => {
        this.productionGroupInfo = res;
      }, err => {
        this.notifyService.error("Error occured. Please try again.");
      });

    this.resourceService
      .getResourceDetailById(this.searchParams.resource)
      .subscribe(res => {
        this.resourceDetail = res;
      }, err => {
        this.notifyService.error("Error occured. Please try again.");
      });

    this.adaptService.adapt$.subscribe(item => {
      this.adaptOptions = this.adaptService.getOptionsForAdaptation(item);
    });

  }

  ngOnInit() {
    this.adaptation();
    this.searchDate = this.searchParams.date;
  }

  OnDestroy() {
    this.resAllocs = [];
    this.searchParams = {};
    this.adaptOptions = {};
  }

  /* gets search parameters from URL */
  getSearchParams() {
    let result: any;
    this.route.params.subscribe((params: Params) => {
      result = params;
    });

    if (!result.date)
      result.date = new Date();

    return {
      productionGroup: Number(result.productionGroup),
      resource: Number(result.resource),
      date: new Date(result.date)
    }
  }

  /* changes adaptOptions based on screen size */
  adaptation() {
    this.adaptService.setAdaptValue();
  }

  /* return back to search component + sends back search parameters */
  searchAgain() {
    let sendParams = this.searchParams;
    sendParams.date = this.filterService.getFormatDate(sendParams.date);
    sendParams.searchAgain = true;
    this.router.navigate(["search", sendParams]);
  }

  /* Creates custom appointment detail - to be done*/
  onAppointmentFormCreated(data) {

    var form = data.form;

    /* Values from API will be placed instead into VALUE fields */
    form.option("items", [{

      label: {
        text: "Start/End time"
      },
      name: "time",
      editorType: "dxTextBox",
      editorOptions: {
        value: this.datePipe.transform(data.appointmentData.startDate, 'shortTime') + " - " + this.datePipe.transform(data.appointmentData.endDate, 'shortTime'),
      }
    },{

      label: {
        text: "Prod. ID"
      },
      name: "productionId",
      editorType: "dxTextBox",
      editorOptions: {
        value: "XT-020485",
      }
    }, {

      label: {
        text: "Prod. Unit"
      },
      name: "productionUnitId",
      editorType: "dxTextBox",
      editorOptions: {
        value: "Strasbourg",
      }
    }, {

      label: {
        text: "Prod. Status"
      },
      name: "productionStatus",
      editorType: "dxTextBox",
      editorOptions: {
        value: "Completed",
      }
    }, {

      label: {
        text: "Prod. Kind"
      },
      name: "productionKind",
      editorType: "dxTextBox",
      editorOptions: {
        value: "Media news",
      }
    }, {

      label: {
        text: "Customer"
      },
      name: "customer",
      editorType: "dxTextBox",
      editorOptions: {
        value: "RTV Slovenija",
      }
    }, {

      label: {
        text: "Contact person"
      },
      name: "contactPerson",
      editorType: "dxTextBox",
      editorOptions: {
        value: "Boštjan Veselič",
      }
    }, {

      label: {
        text: "Project note"
      },
      name: "projectNote",
      editorType: "dxTextBox",
      editorOptions: {
        value: "",
      }
    }, {

      label: {
        text: "Note for planning"
      },
      name: "noteForPlanning",
      editorType: "dxTextBox",
      editorOptions: {
        value: "",
      }
    }
    ]);
  }

  /* Iterates over objects returned from server and stores them into resAllocs variable */
  private setResAlloc(data: ResourceAllocations[]) {
    for (let resAlloc of data) {
      this.resAllocs.push(resAlloc);
    }
  };

}
