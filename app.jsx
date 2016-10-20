import React from 'react';
import ReactDOM from 'react-dom';
import GeoNodeViewer from './geonode.jsx';
import enMessages from 'boundless-sdk/locale/en.js';
import {IntlProvider} from 'react-intl';
import Viewer from './viewer.jsx';

var config = {"defaultSourceType": "gxp_wmscsource", "about": {"abstract": "", "title": "Sprint Coverage"}, "map": {"layers": [{"opacity": 1.0, "group": "background", "name": "mapnik", "visibility": true, "source": "0", "fixed": true, "type": "OpenLayers.Layer.OSM"}, {"opacity": 1.0, "name": "geonode:Sprint_85", "title": "Sprint_85", "source": "1", "selected": true, "visibility": true, "srs": "EPSG:900913", "bbox": [-17821432.386584494, 1997190.3387437353, -7194334.231366029, 6275272.874913283], "getFeatureInfo": {"fields": ["DBA", "Technology"], "propertyNames": {"DBA": null, "Technology": null}}, "fixed": false, "queryable": true, "schema": [{"visible": true, "name": "the_geom"}, {"visible": true, "name": "DBA"}, {"visible": true, "name": "Technology"}]}], "center": [-8855994.09712052, 4469502.35491911], "units": "m", "maxResolution": 156543.03390625, "maxExtent": [-20037508.34, -20037508.34, 20037508.34, 20037508.34], "zoom": 2, "projection": "EPSG:900913"}, "id": 60, "sources": {"1": {"ptype": "gxp_wmscsource", "url": "http://exchange-dev.boundlessps.com/geoserver/wms", "restUrl": "/gs/rest", "isVirtualService": false, "title": "Local Geoserver"}, "0": {"ptype": "gxp_osmsource"}, "3": {"ptype": "gxp_olsource"}, "2": {"url": "http://exchange-dev.boundlessps.com/geoserver/wms", "restUrl": "/gs/rest", "ptype": "gxp_wmscsource", "title": "Local Geoserver"}, "4": {"url": "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/", "remote": true, "ptype": "gxp_wmscsource", "name": "ESRI"}}};

let viewer = new Viewer('main', config);
viewer.view();
