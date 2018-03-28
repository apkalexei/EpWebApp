import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AdaptService {

    /* This service is for providing responsibility across the application mainly for responsible scheduler  */

    private adapt = new Subject<any>();
    adapt$ = this.adapt.asObservable();

    smallSize: any = {
        views: ["agenda"],
        currentView: "agenda",
        size: "350",
        notifyPosition: "bottom"
    }

    /* Agenda is a special mode for schedulers for displaying scheduler on mobile devices */

    largeSize: any = {
        views: ["day", "week", "workWeek", "month"],
        currentView: "week",
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