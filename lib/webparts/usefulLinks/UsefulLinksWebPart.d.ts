import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IUsefulLinksWebPartProps {
    description: string;
}
export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    Title: string;
    Id: string;
}
export default class UsefulLinksWebPart extends BaseClientSideWebPart<IUsefulLinksWebPartProps> {
    protected onInit(): Promise<void>;
    private _getMockListData;
    private _getListData;
    private _renderList;
    private _renderListAsync;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=UsefulLinksWebPart.d.ts.map