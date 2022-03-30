export class NodePicker extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    initEventHandlers(): void;
    destroyEventHandlers(): void;
    handleMouseMove: (e: any) => void;
    handleNodeClick: (e: any) => void;
    closePicker: () => void;
    render(): JSX.Element;
}
export const NodePickerTrigger: import("@emotion/styled").StyledComponent<{
    theme?: import(".pnpm/@emotion+react@11.8.2_01d56d277bbc737f671dd85124c7a696/node_modules/@emotion/react").Theme;
    as?: React.ElementType<any>;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
import React from "react";
