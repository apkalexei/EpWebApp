import { SchedulerComponent } from './scheduler/scheduler.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [

    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'search', 
        component: SearchComponent,
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always', 
    },
    { 
        path: 'scheduler',
        component: SchedulerComponent,
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always', 
    },
    { 
        path: '**', 
        redirectTo: 'search', 
        pathMatch: 'full' 
    }
];

// provides routing to app.module.ts
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);