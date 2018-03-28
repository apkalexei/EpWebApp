import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FilterService } from '../_services/filter.service';
import { Router, Params, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  datePickerConfig: Partial<BsDatepickerConfig>;
  productionGroups: any;
  resourcesByProductionGroup: any;

  constructor(
    private formBuilder: FormBuilder, 
    private filterService: FilterService, 
    private router: Router,
    private route: ActivatedRoute) 
    {}
 
  ngOnInit() {
    this.filterService
      .getProductionGroupsForFilter()
      .subscribe(res => this.productionGroups = res);

    this.createSearchForm();
    this.tryAssignSearchParams();

    /* DatePicker configuration */
    this.datePickerConfig = Object.assign({}, { showWeekNumbers: false });
  }

  /* Creates form */
  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      productionGroup: ['', Validators.required],
      resource: [{value: null, disabled: true }, Validators.required],
      date: [{value: new Date(), disabled: true }, Validators.required]
    });
  }

  /* Changes Resource dropdown list when Production group item is changed and turns on resource dropdown as production group is selected */
  onProdGroupChange() {

    this.filterService
      .getResourcesForFilter(this.searchForm.value.productionGroup)
      .subscribe(res => this.resourcesByProductionGroup = res);

    this.searchForm.controls['resource'].enable();
  }

  /* Turns-on date-picker as resource is selected */
  onResourceChange() {
    this.searchForm.controls['date'].enable();
  }

  /* Gets params from route in case they are sent back from scheduler via search again button */
  getSearchParams() {
    let result: any;
    this.route.params.subscribe((params: Params) => {
        result = params;
    });

    return {
        productionGroup: Number(result.productionGroup),
        resource: Number(result.resource),
        date: new Date(result.date),
        searchAgain: Boolean(result.searchAgain)
    }
  }

  /* Assign search params to form components if there are any */
  tryAssignSearchParams() {
    let searchParams = this.getSearchParams();
    
    if (searchParams.searchAgain == true) {
      this.searchForm.controls['resource'].enable();
      this.searchForm.controls['date'].enable();

      this.filterService
        .getResourcesForFilter(searchParams.productionGroup)
        .subscribe(res => this.resourcesByProductionGroup = res);

      this.searchForm.setValue({
        productionGroup: searchParams.productionGroup,
        resource: searchParams.resource,
        date: searchParams.date
      });
    }
  }

  /* Sends data from the searchForm to the scheduler  */
  formSubmit() {
    let searchData = this.searchForm.value;
    searchData.date = this.filterService.getFormatDate(this.searchForm.value.date);
    this.router.navigate(["scheduler", searchData]);
  }

}