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
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import styles from './UsefulLinksWebPart.module.scss';
import * as strings from 'UsefulLinksWebPartStrings';
//*** Custom Imports ***/
import UsefulLinksTemplate from './UsefulLinksTemplate';
import * as $ from 'jquery';
require('jquery-ui');
require('bootstrap');
require('./styles/custom.css');
//require('popper.js');
//*** Load External CSS ***/
import { SPComponentLoader } from '@microsoft/sp-loader';
import MockHttpClient from './MockHttpClient';
import { SPHttpClient } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
var UsefulLinksWebPart = /** @class */ (function (_super) {
    __extends(UsefulLinksWebPart, _super);
    function UsefulLinksWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //public constructor() {
    //  super();
    //  SPComponentLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
    //}
    UsefulLinksWebPart.prototype.onInit = function () {
        //SPComponentLoader.loadCss('https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css');
        SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
        return _super.prototype.onInit.call(this);
    };
    UsefulLinksWebPart.prototype._getMockListData = function () {
        return MockHttpClient.get()
            .then(function (data) {
            var listData = { value: data };
            return listData;
        });
    };
    UsefulLinksWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists?$filter=Hidden eq false", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    UsefulLinksWebPart.prototype._renderList = function (items) {
        var html = '';
        items.forEach(function (item) {
            html += "\n    <ul class=\"" + styles.list + "\">\n      <li class=\"" + styles.listItem + "\">\n        <span class=\"ms-font-l\">" + item.Title + "</span>\n      </li>\n    </ul>";
        });
        var listContainer = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
    };
    UsefulLinksWebPart.prototype._renderListAsync = function () {
        var _this = this;
        // Local environment
        if (Environment.type === EnvironmentType.Local) {
            this._getMockListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
        else if (Environment.type == EnvironmentType.SharePoint ||
            Environment.type == EnvironmentType.ClassicSharePoint) {
            this._getListData()
                .then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
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
        //$('.accordion', this.domElement).accordion(accordionOptions);
        $('.accordion', this.domElement).accordion();
        this._renderListAsync();
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