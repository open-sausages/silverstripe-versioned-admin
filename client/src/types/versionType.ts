import PropTypes from 'prop-types';

// Describes the expected data structure for a member attached to a version
const memberShape = PropTypes.shape({
  FirstName: PropTypes.string,
  Surname: PropTypes.string,
});

export interface Member {
    FirstName?: string,
    Surname?: string
}

// Describes the data structure for a Version, returned via GraphQL scaffolding
const versionType = PropTypes.shape({
  Version: PropTypes.number,
  AbsoluteLink: PropTypes.string,
  LastEdited: PropTypes.string,
  Published: PropTypes.boolean,
  LiveVersion: PropTypes.boolean,
  LatestDraftVersion: PropTypes.boolean,
  Publisher: memberShape,
  Author: memberShape,
});

interface Version {
    Version: number,
    AbsoluteLink?: string,
    LastEdited?: string,
    Published?: boolean,
    LiveVersion?: boolean,
    LatestDraftVersion?: boolean,
    Publisher?: Member|null,
    Author?: Member|null,
}

// A default (empty) data set for a version
const defaultVersion = {
  Version: 0,
  AbsoluteLink: '',
  LastEdited: '',
  Published: false,
  LiveVersion: false,
  LatestDraftVersion: false,
  Publisher: {
    FirstName: '',
    Surname: '',
  },
  Author: {
    FirstName: '',
    Surname: '',
  },
};

export { versionType, defaultVersion, Version };
