var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("rxjs-extensions", ['rxjs/add/observable/of', 'rxjs/add/observable/throw', 'rxjs/add/operator/catch', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/do', 'rxjs/add/operator/filter', 'rxjs/add/operator/map', 'rxjs/add/operator/switchMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (_9) {}],
        execute: function() {
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("app.component", ['@angular/core', "rxjs-extensions"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_10) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['app/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_2("AppComponent", AppComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("in-memory-data.service", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var InMemoryDataService;
    return {
        setters:[],
        execute: function() {
            InMemoryDataService = (function () {
                function InMemoryDataService() {
                }
                InMemoryDataService.prototype.createDb = function () {
                    var heroes = [
                        { id: 11, name: 'Mr. Nice' },
                        { id: 12, name: 'Narco' },
                        { id: 13, name: 'Bombasto' },
                        { id: 14, name: 'Celeritas' },
                        { id: 15, name: 'Magneta' },
                        { id: 16, name: 'RubberMan' },
                        { id: 17, name: 'Dynama' },
                        { id: 18, name: 'Dr IQ' },
                        { id: 19, name: 'Magma' },
                        { id: 20, name: 'Tornado' }
                    ];
                    return { heroes: heroes };
                };
                return InMemoryDataService;
            }());
            exports_3("InMemoryDataService", InMemoryDataService);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("hero", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero() {
                }
                return Hero;
            }());
            exports_4("Hero", Hero);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("hero.service", ['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_2, http_1;
    var HeroService;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_11) {}],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    this.heroesUrl = 'app/heroes'; // URL to web api
                }
                HeroService.prototype.getHeroes = function () {
                    return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                HeroService.prototype.getHero = function (id) {
                    return this.getHeroes()
                        .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
                };
                HeroService.prototype.save = function (hero) {
                    if (hero.id) {
                        return this.put(hero);
                    }
                    return this.post(hero);
                };
                HeroService.prototype.delete = function (hero) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.heroesUrl + "/" + hero.id;
                    return this.http
                        .delete(url, { headers: headers })
                        .toPromise()
                        .catch(this.handleError);
                };
                // Add new Hero
                HeroService.prototype.post = function (hero) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json' });
                    return this.http
                        .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                // Update existing Hero
                HeroService.prototype.put = function (hero) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.heroesUrl + "/" + hero.id;
                    return this.http
                        .put(url, JSON.stringify(hero), { headers: headers })
                        .toPromise()
                        .then(function () { return hero; })
                        .catch(this.handleError);
                };
                HeroService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                HeroService = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_5("HeroService", HeroService);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("dashboard.component", ['@angular/core', '@angular/router', "hero.service"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_3, router_1, hero_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(router, heroService) {
                    this.router = router;
                    this.heroService = heroService;
                    this.heroes = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.heroService.getHeroes()
                        .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
                };
                DashboardComponent.prototype.gotoDetail = function (hero) {
                    var link = ['/detail', hero.id];
                    this.router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_3.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'app/dashboard.component.html',
                        styleUrls: ['app/dashboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_6("DashboardComponent", DashboardComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("heroes.component", ['@angular/core', '@angular/router', "hero.service"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_4, router_2, hero_service_2;
    var HeroesComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (hero_service_2_1) {
                hero_service_2 = hero_service_2_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(router, heroService) {
                    this.router = router;
                    this.heroService = heroService;
                    this.addingHero = false;
                }
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService
                        .getHeroes()
                        .then(function (heroes) { return _this.heroes = heroes; })
                        .catch(function (error) { return _this.error = error; });
                };
                HeroesComponent.prototype.addHero = function () {
                    this.addingHero = true;
                    this.selectedHero = null;
                };
                HeroesComponent.prototype.close = function (savedHero) {
                    this.addingHero = false;
                    if (savedHero) {
                        this.getHeroes();
                    }
                };
                HeroesComponent.prototype.deleteHero = function (hero, event) {
                    var _this = this;
                    event.stopPropagation();
                    this.heroService
                        .delete(hero)
                        .then(function (res) {
                        _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
                        if (_this.selectedHero === hero) {
                            _this.selectedHero = null;
                        }
                    })
                        .catch(function (error) { return _this.error = error; });
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                    this.addingHero = false;
                };
                HeroesComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['/detail', this.selectedHero.id]);
                };
                HeroesComponent = __decorate([
                    core_4.Component({
                        selector: 'my-heroes',
                        templateUrl: 'app/heroes.component.html',
                        styleUrls: ['app/heroes.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, hero_service_2.HeroService])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_7("HeroesComponent", HeroesComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("hero-detail.component", ['@angular/core', '@angular/router', "hero", "hero.service"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_5, router_3, hero_1, hero_service_3;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_service_3_1) {
                hero_service_3 = hero_service_3_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(heroService, route) {
                    this.heroService = heroService;
                    this.route = route;
                    this.close = new core_5.EventEmitter();
                    this.navigated = false; // true if navigated here
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        if (params['id'] !== undefined) {
                            var id = +params['id'];
                            _this.navigated = true;
                            _this.heroService.getHero(id)
                                .then(function (hero) { return _this.hero = hero; });
                        }
                        else {
                            _this.navigated = false;
                            _this.hero = new hero_1.Hero();
                        }
                    });
                };
                HeroDetailComponent.prototype.save = function () {
                    var _this = this;
                    this.heroService
                        .save(this.hero)
                        .then(function (hero) {
                        _this.hero = hero; // saved hero, w/ id if new
                        _this.goBack(hero);
                    })
                        .catch(function (error) { return _this.error = error; }); // TODO: Display error message
                };
                HeroDetailComponent.prototype.goBack = function (savedHero) {
                    if (savedHero === void 0) { savedHero = null; }
                    this.close.emit(savedHero);
                    if (this.navigated) {
                        window.history.back();
                    }
                };
                __decorate([
                    core_5.Input(), 
                    __metadata('design:type', hero_1.Hero)
                ], HeroDetailComponent.prototype, "hero", void 0);
                __decorate([
                    core_5.Output(), 
                    __metadata('design:type', Object)
                ], HeroDetailComponent.prototype, "close", void 0);
                HeroDetailComponent = __decorate([
                    core_5.Component({
                        selector: 'my-hero-detail',
                        templateUrl: 'app/hero-detail.component.html',
                        styleUrls: ['app/hero-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [hero_service_3.HeroService, router_3.ActivatedRoute])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_8("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("app.routing", ['@angular/router', "dashboard.component", "heroes.component", "hero-detail.component"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var router_4, dashboard_component_1, heroes_component_1, hero_detail_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: 'detail/:id',
                    component: hero_detail_component_1.HeroDetailComponent
                },
                {
                    path: 'heroes',
                    component: heroes_component_1.HeroesComponent
                }
            ];
            exports_9("routing", routing = router_4.RouterModule.forRoot(appRoutes));
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("hero-search.service", ['@angular/core', '@angular/http'], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_6, http_2;
    var HeroSearchService;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            }],
        execute: function() {
            HeroSearchService = (function () {
                function HeroSearchService(http) {
                    this.http = http;
                }
                HeroSearchService.prototype.search = function (term) {
                    return this.http
                        .get("app/heroes/?name=" + term)
                        .map(function (r) { return r.json().data; });
                };
                HeroSearchService = __decorate([
                    core_6.Injectable(), 
                    __metadata('design:paramtypes', [http_2.Http])
                ], HeroSearchService);
                return HeroSearchService;
            }());
            exports_10("HeroSearchService", HeroSearchService);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("hero-search.component", ['@angular/core', '@angular/router', 'rxjs/Observable', 'rxjs/Subject', "hero-search.service"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_7, router_5, Observable_1, Subject_1, hero_search_service_1;
    var HeroSearchComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (hero_search_service_1_1) {
                hero_search_service_1 = hero_search_service_1_1;
            }],
        execute: function() {
            HeroSearchComponent = (function () {
                function HeroSearchComponent(heroSearchService, router) {
                    this.heroSearchService = heroSearchService;
                    this.router = router;
                    this.searchTerms = new Subject_1.Subject();
                }
                // Push a search term into the observable stream.
                HeroSearchComponent.prototype.search = function (term) {
                    this.searchTerms.next(term);
                };
                HeroSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.heroes = this.searchTerms
                        .debounceTime(300) // wait for 300ms pause in events
                        .distinctUntilChanged() // ignore if next search term is same as previous
                        .switchMap(function (term) { return term // switch to new observable each time
                        ? _this.heroSearchService.search(term)
                        : Observable_1.Observable.of([]); })
                        .catch(function (error) {
                        // TODO: real error handling
                        console.log(error);
                        return Observable_1.Observable.of([]);
                    });
                };
                HeroSearchComponent.prototype.gotoDetail = function (hero) {
                    var link = ['/detail', hero.id];
                    this.router.navigate(link);
                };
                HeroSearchComponent = __decorate([
                    core_7.Component({
                        selector: 'hero-search',
                        templateUrl: 'app/hero-search.component.html',
                        styleUrls: ['app/hero-search.component.css'],
                        providers: [hero_search_service_1.HeroSearchService]
                    }), 
                    __metadata('design:paramtypes', [hero_search_service_1.HeroSearchService, router_5.Router])
                ], HeroSearchComponent);
                return HeroSearchComponent;
            }());
            exports_11("HeroSearchComponent", HeroSearchComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("app.module", ['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', 'angular2-in-memory-web-api', "in-memory-data.service", "app.component", "app.routing", "heroes.component", "dashboard.component", "hero-detail.component", "hero.service", "hero-search.component"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_8, platform_browser_1, forms_1, http_3, http_4, angular2_in_memory_web_api_1, in_memory_data_service_1, app_component_1, app_routing_1, heroes_component_2, dashboard_component_2, hero_detail_component_2, hero_service_4, hero_search_component_1;
    var AppModule;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
                http_4 = http_3_1;
            },
            function (angular2_in_memory_web_api_1_1) {
                angular2_in_memory_web_api_1 = angular2_in_memory_web_api_1_1;
            },
            function (in_memory_data_service_1_1) {
                in_memory_data_service_1 = in_memory_data_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (heroes_component_2_1) {
                heroes_component_2 = heroes_component_2_1;
            },
            function (dashboard_component_2_1) {
                dashboard_component_2 = dashboard_component_2_1;
            },
            function (hero_detail_component_2_1) {
                hero_detail_component_2 = hero_detail_component_2_1;
            },
            function (hero_service_4_1) {
                hero_service_4 = hero_service_4_1;
            },
            function (hero_search_component_1_1) {
                hero_search_component_1 = hero_search_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_8.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            app_routing_1.routing,
                            http_3.HttpModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            heroes_component_2.HeroesComponent,
                            dashboard_component_2.DashboardComponent,
                            hero_detail_component_2.HeroDetailComponent,
                            hero_search_component_1.HeroSearchComponent
                        ],
                        providers: [
                            hero_service_4.HeroService,
                            { provide: http_4.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
                            { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService } // in-mem server data
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_12("AppModule", AppModule);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
System.register("main", ['@angular/platform-browser-dynamic', "app.module"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var platform_browser_dynamic_1, app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=bundle.js.map