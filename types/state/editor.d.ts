export function calculateSafeIndex(index: any, total: any): number;
export function buildColors(schema: any): {};
export function findPMNode(domNode: any): any;
export function getActiveMarks(editorState: any): any;
export function buildSelection(selection: any): {
    type: any;
    empty: any;
    anchor: any;
    head: any;
    from: any;
    to: any;
};
export function createHistoryEntry(editorState: any): {
    id: string;
    state: any;
    timestamp: number;
    diffPending: boolean;
    diff: any;
    selection: any;
    selectionContent: any;
};
export function shrinkEditorHistory(history: any, historyRolledBackTo: any): any;
export function updateEditorHistory(history: any, historyRolledBackTo: any, tr: any, newState: any): any;
export default class EditorStateContainer extends Container<any> {
    constructor(editorView: any, props: any);
    state: {
        EditorState: () => void;
        view: any;
        state: {};
        schema: {};
        nodeColors: {};
        activeMarks: any[];
        history: any[];
        expandPath: any[];
        historyRolledBackTo: boolean;
        selectedHistoryItem: number;
        snapshots: any;
        nodePicker: {
            top: number;
            left: number;
            width: number;
            height: number;
            active: boolean;
        };
    };
    updateState: (tr: any, oldState: any, newState: any) => void;
    diffWorker: JsonDiffMain;
    activatePicker: () => void;
    deactivatePicker: () => void;
    updateNodePickerPossition: (target: any) => void;
    nodePickerSelect: (target: any) => void;
    saveSnapshot: () => void;
    loadSnapshot: (snapshot: any) => void;
    deleteSnapshot: (snapshot: any) => void;
    logNodeFromJSON: ({ doc, node }: {
        doc: any;
        node: any;
    }) => void;
    selectHistoryItem: (index: any) => Promise<void>;
    rollbackHistory: (index: any) => void;
}
import { Container } from "unstated";
import { JsonDiffMain } from "./json-diff-main";
