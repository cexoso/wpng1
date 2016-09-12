import angular from "angular";
export default function (components) {
    angular.module(components).directive('ceCombobox',[()=>{
        return {
            link() {
                console.log("link")
            }
        }
    }]);
}
