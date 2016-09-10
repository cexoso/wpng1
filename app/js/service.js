import angular from "angular";
angular.module('app').directive("ceMenu",[()=>{
    return {
        link(s,e) {
            e.on("mouseenter",()=>{
                s.$apply(()=>{
                    s.menuShow = true;
                })
            })
            e.on("mouseleave",()=>{
                s.$apply(()=>{
                    s.menuShow = false;
                })
            })
        }
    }
}]);
