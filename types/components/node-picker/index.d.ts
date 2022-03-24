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
    theme?: import(".pnpm/@emotion+react@11.8.2_e2acc81454c2cce4f2597be79e2ca8bf/node_modules/@emotion/react").Theme;
    as?: React.ElementType<any>;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
import React from "react";
