export default class GlobalStateContainer extends Container<any> {
    constructor();
    state: {
        opened: boolean;
        tabIndex: string;
        defaultSize: number;
    };
    toggleDevTools: () => void;
    selectTab: (tabIndex?: number) => void;
    updateBodyMargin: (devToolsSize: any) => void;
}
import { Container } from "unstated";
