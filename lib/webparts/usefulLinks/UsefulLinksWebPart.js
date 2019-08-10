var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as jQuery from 'jquery';
import 'jqueryui';
import 'bootstrap';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import * as strings from 'UsefulLinksWebPartStrings';
import UsefulLinksTemplate from './UsefulLinksTemplate';
var UsefulLinksWebPart = /** @class */ (function (_super) {
    __extends(UsefulLinksWebPart, _super);
    function UsefulLinksWebPart() {
        var _this = _super.call(this) || this;
        SPComponentLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
        return _this;
    }
    UsefulLinksWebPart.prototype.render = function () {
        this.domElement.innerHTML = UsefulLinksTemplate.templateHtml;
        var accordionOptions = {
            animate: true,
            collapsible: false,
            icons: {
                header: 'ui-icon-circle-arrow-e',
                activeHeader: 'ui-icon-circle-arrow-s'
            }
        };
        jQuery('.accordion', this.domElement).accordion(accordionOptions);
    };
    Object.defineProperty(UsefulLinksWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    UsefulLinksWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return UsefulLinksWebPart;
}(BaseClientSideWebPart));
export default UsefulLinksWebPart;
//# sourceMappingURL=UsefulLinksWebPart.js.map