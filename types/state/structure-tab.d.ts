export default class StructureTabStateContainer extends Container<any> {
    constructor();
    state: {
        selectedNode: any;
    };
    selectNode: ({ node }: {
        node: any;
    }) => void;
}
import { Container } from "unstated";
