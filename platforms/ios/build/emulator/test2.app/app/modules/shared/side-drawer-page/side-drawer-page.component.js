"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var action_bar_1 = require("ui/action-bar");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var SideDrawerPageComponent = (function () {
    function SideDrawerPageComponent(routerExtensions, activatedRoute, page, ngZone) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.page = page;
        this.ngZone = ngZone;
        /**
         * On tap of any side-drawer item, hiding content if this flag is true.
         */
        this.isContentVisible = true;
        /**
         * Navigation Menu Items
         */
        this.navMenu = [
            { name: 'Contact', commands: ['/'] },
            { name: 'Formation', commands: ['/formation'] },
            { name: 'Expériences', commands: ['/experiences'] },
            { name: 'Compétences', commands: ['/competences'] },
            { name: 'Intérets', commands: ['/interets'] }
        ];
        this.setActionBarIcon(this.page);
        this.setDrawerTransition();
    }
    SideDrawerPageComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    SideDrawerPageComponent.prototype.ngOnDestroy = function () {
        this.drawer.off('drawerClosed');
    };
    SideDrawerPageComponent.prototype.toggleSideDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    /**
     * Navigates to next page after drawer is closed.
     */
    SideDrawerPageComponent.prototype.navigateTo = function (routeCommands) {
        var _this = this;
        this.drawer.closeDrawer();
        var currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        var newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
        var newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
        if (currentUrl !== newUrl) {
            this.isContentVisible = false;
            this.drawer.on('drawerClosed', function () {
                _this.ngZone.run(function () {
                    _this.routerExtensions.navigate(routeCommands, {
                        clearHistory: true,
                        animated: false
                    });
                    _this.isContentVisible = true;
                    _this.drawer.off('drawerClosed');
                });
            });
        }
    };
    SideDrawerPageComponent.prototype.setDrawerTransition = function () {
        if (platform_1.isAndroid) {
            this.drawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        }
        if (platform_1.isIOS) {
            this.drawerTransition = new sidedrawer_1.PushTransition();
        }
    };
    SideDrawerPageComponent.prototype.setActionBarIcon = function (page) {
        if (platform_1.isAndroid) {
            page.actionBar.navigationButton = this.getNavigationButton();
        }
        if (platform_1.isIOS) {
            page.actionBar.actionItems.addItem(this.getNavigationButton());
        }
    };
    SideDrawerPageComponent.prototype.getNavigationButton = function () {
        var navActionItem = new action_bar_1.ActionItem();
        navActionItem.icon = 'res://ic_menu_white_24dp';
        if (navActionItem.ios) {
            navActionItem.ios.position = 'left';
        }
        navActionItem.on('tap', this.toggleDrawer.bind(this));
        return navActionItem;
    };
    SideDrawerPageComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return SideDrawerPageComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], SideDrawerPageComponent.prototype, "drawerComponent", void 0);
SideDrawerPageComponent = __decorate([
    core_1.Component({
        selector: 'side-drawer-page',
        templateUrl: 'modules/shared/side-drawer-page/side-drawer-page.component.html',
        styleUrls: ['modules/shared/side-drawer-page/side-drawer-page.component.css']
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        router_1.ActivatedRoute,
        page_1.Page,
        core_1.NgZone])
], SideDrawerPageComponent);
exports.SideDrawerPageComponent = SideDrawerPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUV1QjtBQUN2QiwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELGdDQUErQjtBQUMvQixxQ0FBNEM7QUFDNUMsNENBQTJDO0FBQzNDLHNFQUVvRDtBQUNwRCxpRUFFNEM7QUFPNUMsSUFBYSx1QkFBdUI7SUEwQmxDLGlDQUNVLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixJQUFVLEVBQ1YsTUFBYztRQUhkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBM0J4Qjs7V0FFRztRQUNILHFCQUFnQixHQUFZLElBQUksQ0FBQztRQU9qQzs7V0FFRztRQUNILFlBQU8sR0FBVTtZQUNmLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDL0MsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ25ELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNuRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUU7U0FDOUMsQ0FBQztRQVVBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJ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dEQsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRU8sOENBQVksR0FBcEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQTFHRCxJQTBHQztBQXpHb0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBa0IsZ0NBQXNCO2dFQUFDO0FBRGhFLHVCQUF1QjtJQUxuQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsaUVBQWlFO1FBQzlFLFNBQVMsRUFBRSxDQUFDLGdFQUFnRSxDQUFDO0tBQzlFLENBQUM7cUNBNEI0Qix5QkFBZ0I7UUFDbEIsdUJBQWM7UUFDeEIsV0FBSTtRQUNGLGFBQU07R0E5QmIsdUJBQXVCLENBMEduQztBQTFHWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tICd1aS9hY3Rpb24tYmFyJztcbmltcG9ydCB7XG4gIFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlXG59IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQge1xuICBQdXNoVHJhbnNpdGlvbiwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvblxufSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZS1kcmF3ZXItcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9zaGFyZWQvc2lkZS1kcmF3ZXItcGFnZS9zaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21vZHVsZXMvc2hhcmVkL3NpZGUtZHJhd2VyLXBhZ2Uvc2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZURyYXdlclBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogT24gdGFwIG9mIGFueSBzaWRlLWRyYXdlciBpdGVtLCBoaWRpbmcgY29udGVudCBpZiB0aGlzIGZsYWcgaXMgdHJ1ZS5cbiAgICovXG4gIGlzQ29udGVudFZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBGb3IgYW5kcm9pZCB1c2luZyBTbGlkZU9uVG9wIHRyYW5zaXRpb24gYW5kIGZvciBpT1MsIHB1c2ggdHJhbnNpdGlvbi5cbiAgICovXG4gIGRyYXdlclRyYW5zaXRpb246IGFueTtcblxuICAvKipcbiAgICogTmF2aWdhdGlvbiBNZW51IEl0ZW1zXG4gICAqL1xuICBuYXZNZW51OiBhbnlbXSA9IFtcbiAgICB7IG5hbWU6ICdDb250YWN0JywgY29tbWFuZHM6IFsnLyddIH0sXG4gICAgeyBuYW1lOiAnRm9ybWF0aW9uJywgY29tbWFuZHM6IFsnL2Zvcm1hdGlvbiddIH0sXG4gICAgeyBuYW1lOiAnRXhww6lyaWVuY2VzJywgY29tbWFuZHM6IFsnL2V4cGVyaWVuY2VzJ10gfSxcbiAgICB7IG5hbWU6ICdDb21ww6l0ZW5jZXMnLCBjb21tYW5kczogWycvY29tcGV0ZW5jZXMnXSB9LFxuICAgIHsgbmFtZTogJ0ludMOpcmV0cycsIGNvbW1hbmRzOiBbJy9pbnRlcmV0cyddIH1cbiAgXTtcblxuICBwcml2YXRlIGRyYXdlcjogU2lkZURyYXdlclR5cGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuc2V0QWN0aW9uQmFySWNvbih0aGlzLnBhZ2UpO1xuICAgIHRoaXMuc2V0RHJhd2VyVHJhbnNpdGlvbigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZHJhd2VyLm9mZignZHJhd2VyQ2xvc2VkJyk7XG4gIH1cblxuICB0b2dnbGVTaWRlRHJhd2VyKCkge1xuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGVzIHRvIG5leHQgcGFnZSBhZnRlciBkcmF3ZXIgaXMgY2xvc2VkLlxuICAgKi9cbiAgbmF2aWdhdGVUbyhyb3V0ZUNvbW1hbmRzOiBhbnlbXSkge1xuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgbGV0IGN1cnJlbnRVcmwgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnVybDtcbiAgICBsZXQgbmV3VXJsVHJlZSA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIuY3JlYXRlVXJsVHJlZShyb3V0ZUNvbW1hbmRzKTtcbiAgICBsZXQgbmV3VXJsID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5zZXJpYWxpemVVcmwobmV3VXJsVHJlZSk7XG4gICAgaWYgKGN1cnJlbnRVcmwgIT09IG5ld1VybCkge1xuICAgICAgdGhpcy5pc0NvbnRlbnRWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZHJhd2VyLm9uKCdkcmF3ZXJDbG9zZWQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKHJvdXRlQ29tbWFuZHMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmlzQ29udGVudFZpc2libGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZHJhd2VyLm9mZignZHJhd2VyQ2xvc2VkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREcmF3ZXJUcmFuc2l0aW9uKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHRoaXMuZHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICB0aGlzLmRyYXdlclRyYW5zaXRpb24gPSBuZXcgUHVzaFRyYW5zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGlvbkJhckljb24ocGFnZTogUGFnZSkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24gPSB0aGlzLmdldE5hdmlnYXRpb25CdXR0b24oKTtcbiAgICB9XG5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFyLmFjdGlvbkl0ZW1zLmFkZEl0ZW0odGhpcy5nZXROYXZpZ2F0aW9uQnV0dG9uKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkJ1dHRvbigpIHtcbiAgICBsZXQgbmF2QWN0aW9uSXRlbSA9IG5ldyBBY3Rpb25JdGVtKCk7XG4gICAgbmF2QWN0aW9uSXRlbS5pY29uID0gJ3JlczovL2ljX21lbnVfd2hpdGVfMjRkcCc7XG4gICAgaWYgKG5hdkFjdGlvbkl0ZW0uaW9zKSB7XG4gICAgICBuYXZBY3Rpb25JdGVtLmlvcy5wb3NpdGlvbiA9ICdsZWZ0JztcbiAgICB9XG4gICAgbmF2QWN0aW9uSXRlbS5vbigndGFwJywgdGhpcy50b2dnbGVEcmF3ZXIuYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIG5hdkFjdGlvbkl0ZW07XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZURyYXdlcigpIHtcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICB9XG59XG4iXX0=