import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import 'jqueryui';
import 'bootstrap';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IUsefulLinksWebPartProps {
    description: string;
}
export default class UsefulLinksWebPart extends BaseClientSideWebPart<IUsefulLinksWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    constructor();
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=UsefulLinksWebPart.d.ts.map