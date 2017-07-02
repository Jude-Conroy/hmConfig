"use strict";

angular.module("app", ["ngRoute", "ngMaterial", "ngMessages", "ngAnimate","ngAria", "framework", "ngTable"])
    .config(function ($locationProvider, $qProvider) { //config your locationProvider
        $locationProvider.html5Mode(true).hashPrefix('*');
        // suppress angular errors about unhandled promise rejections since 1.6.0
        //$qProvider.errorOnUnhandledRejections(false);
    });


