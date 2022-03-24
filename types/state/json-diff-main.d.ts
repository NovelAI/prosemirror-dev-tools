export class JsonDiffMain {
    diffPatcher: DiffPatcher;
    scheduler: IdleScheduler;
    diff(input: any): Promise<{
        id: any;
        delta: import("jsondiffpatch").Delta;
    }>;
}
import { DiffPatcher } from "jsondiffpatch";
import { IdleScheduler } from "./idle-scheduler";
