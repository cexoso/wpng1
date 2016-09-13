import angular from "angular";
import combobox from "./combobox/combobox.js";
import pagination from "./pagination/pagination.js";
const components = "components";
angular.module(components, []);
combobox(components);
pagination(components)
export default components;
