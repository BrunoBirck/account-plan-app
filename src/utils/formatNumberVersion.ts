import { IAccountPlanItem } from "../interfaces/accountPlanInterface";

export function formatNumberVersion(item: IAccountPlanItem) {
    let newVersion;
    let versionSplitedByDot = item && item.code && item.code.split('.');
    if (Number(versionSplitedByDot[versionSplitedByDot.length - 1]) < 999) {
        newVersion = Number(versionSplitedByDot[versionSplitedByDot.length - 1]) + 1;
        versionSplitedByDot.pop();
        return { fatherCode: versionSplitedByDot.join('.'), codeFormatted: `${versionSplitedByDot.join(".")}.${newVersion}` };
    } else {
        const searchTerm = "999";
        let index = versionSplitedByDot.indexOf(searchTerm);
        while (index >= 0) {
            versionSplitedByDot.splice(index, 1);
            index = versionSplitedByDot.indexOf(searchTerm);
        }
        newVersion = Number(versionSplitedByDot[versionSplitedByDot.length - 1]) + 1;
        versionSplitedByDot.pop();
        return { fatherCode: versionSplitedByDot[0] }
    }
}