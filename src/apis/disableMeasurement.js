/**
 * Disables measurement feature, affecting any elements related to measurement tools.
 * @method WebViewer#disableMeasurement
 * @example // 5.1 and after
WebViewer(...)
  .then(function(instance) {
    instance.disableMeasurement();
  });
 * @example // 4.0 ~ 5.0
var viewerElement = document.getElementById('viewer');
var viewer = new PDFTron.WebViewer(...);

viewerElement.addEventListener('ready', function() {
  var instance = viewer.getInstance();
  instance.disableMeasurement();
});
 */

import Feature from 'constants/feature';
import warnDeprecatedAPI from 'helpers/warnDeprecatedAPI';
import disableFeatures from './disableFeatures';

export default store => () => {
  warnDeprecatedAPI(
    'disableMeasurement()',
    'disableFeatures([instance.Feature.Measurement])',
    '6.0',
  );
  disableFeatures(store)([Feature.Measurement]);
};