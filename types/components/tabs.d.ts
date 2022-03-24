export const TabList: import("@emotion/styled").StyledComponent<{
    theme?: import(".pnpm/@emotion+react@11.8.2_e2acc81454c2cce4f2597be79e2ca8bf/node_modules/@emotion/react").Theme;
    as?: React.ElementType<any>;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export const TabsStled: import("@emotion/styled").StyledComponent<{
    theme?: import(".pnpm/@emotion+react@11.8.2_e2acc81454c2cce4f2597be79e2ca8bf/node_modules/@emotion/react").Theme;
    as?: React.ElementType<any>;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export const TabStyled: import("@emotion/styled").StyledComponent<{
    theme?: import(".pnpm/@emotion+react@11.8.2_e2acc81454c2cce4f2597be79e2ca8bf/node_modules/@emotion/react").Theme;
    as?: React.ElementType<any>;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export class Tab extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
export namespace Tab {
    namespace contextTypes {
        const tabs: PropTypes.Validator<object>;
    }
}
export const TabPanelStyled: import("@emotion/styled").StyledComponent<{
    theme?: import(".pnpm/@emotion+react@11.8.2_e2acc81454c2cce4f2597be79e2ca8bf/node_modules/@emotion/react").Theme;
    as?: React.ElementType<any>;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export class TabPanel extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
export namespace TabPanel {
    export namespace contextTypes_1 {
        const tabs_1: PropTypes.Validator<object>;
        export { tabs_1 as tabs };
    }
    export { contextTypes_1 as contextTypes };
}
export class Tabs extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    getChildContext(): {
        tabs: {
            onSelect: any;
            selectedIndex: any;
        };
    };
    render(): JSX.Element;
}
export namespace Tabs {
    namespace childContextTypes {
        const tabs_2: PropTypes.Requireable<object>;
        export { tabs_2 as tabs };
    }
}
import React from "react";
import PropTypes from "prop-types";
