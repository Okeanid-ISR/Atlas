import {doApi} from "./list.js";
import {declareEvents} from "./list.js";

const init = () => {
    doApi();
    declareEvents()
}


init();