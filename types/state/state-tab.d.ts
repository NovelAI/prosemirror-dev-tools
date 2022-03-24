export default class StateTabStateContainer extends Container<any> {
    constructor();
    state: {
        selectionExpanded: boolean;
    };
    toggleSelection: () => void;
}
import { Container } from "unstated";
