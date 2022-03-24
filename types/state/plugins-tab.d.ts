export default class PluginsTabStateContainer extends Container<any> {
    constructor();
    state: {
        selected: number;
    };
    selectPlugin: (index: any) => void;
}
import { Container } from "unstated";
