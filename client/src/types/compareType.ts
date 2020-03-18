import PropTypes from 'prop-types';
import {Version, versionType} from './versionType';

// Describes the data structure for compare version storage
const compareType = PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
  versionFrom: versionType,
  versionTo: versionType,
})]);

export interface Compare {
  versionFrom?: Version,
  versionTo?: Version
}

// A default (empty) data set for a version
const defaultCompare = false;

export { compareType, defaultCompare };
