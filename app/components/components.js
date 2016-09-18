import angular from "angular";
import combobox from "./combobox/combobox.js";
import pagination from "./pagination/pagination.js";
import modal from "./modal/modal.js";
const components = "components";
angular.module(components, []);
combobox(components);
pagination(components)
modal(components)
export default components;
