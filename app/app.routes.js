"use strict";
var router_1 = require('@angular/router');
var bucketlist_component_1 = require('./bucketlist.component');
var user_component_1 = require('./user.component');
var registration_component_1 = require('./registration.component');
var routes = [
    {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: user_component_1.UserComponent
    },
    {
        path: 'bucketlist',
        component: bucketlist_component_1.BucketlistComponent
    },
    {
        path: 'new',
        component: registration_component_1.UserFormComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map