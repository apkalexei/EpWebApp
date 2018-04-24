import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare var require: any;

@Injectable()
export class AdaptService {

    /* This service is for providing responsibility across the application mainly for responsible scheduler  */

    private adapt = new Subject<any>();
    adapt$ = this.adapt.asObservable();

    smallSize: any = {
        views: require('../../assets/configuration.json').SchedulerSmallSizeViews,
        currentView: require('../../assets/configuration.json').SchedulerSmallSizeCurrentView,
        size: "400",
        notifyPosition: "bottom"
    }

    /* Agenda is a special mode for schedulers for displaying scheduler on mobile devices */

    largeSize: any = {
        views: require('../../assets/configuration.json').SchedulerLargeSizeViews,
        currentView: require('../../assets/configuration.json').SchedulerLargeSizeCurrentView,
        size: "700",
        notifyPosition: "bottom right"
    }

    getOptionsForAdaptation(value: boolean) {
        if (value) {
            return this.smallSize;
        } else {
            return this.largeSize;
        }
    }

    setAdaptValue() {
        let width = window.innerWidth;
        if (width < 768)
            this.adapt.next(true);
        else
            this.adapt.next(false);
    }
}