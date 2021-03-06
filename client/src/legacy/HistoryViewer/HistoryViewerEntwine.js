import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadComponent } from 'lib/Injector';

/**
 * Uses entwine to inject the HistoryViewer React component into the DOM, when used
 * outside of a React context e.g. in the CMS
 */
jQuery.entwine('ss', ($) => {
  $('.js-injector-boot .history-viewer__container').entwine({
    onmatch() {
      const cmsContent = this.closest('.cms-content').attr('id');
      const context = (cmsContent)
        ? { context: cmsContent }
        : {};

      const HistoryViewerComponent = loadComponent('HistoryViewer', context);

      ReactDOM.render(
        <HistoryViewerComponent
          recordId={this.data('record-id')}
          recordClass={this.data('record-class')}
          contextKey={this.data('context-key')}
          isPreviewable={!!parseInt(this.data('preview-enabled'), 10)}
          limit={30}
          offset={0}
          page={0}
        />,
        this[0]
      );
    },

    onunmatch() {
      ReactDOM.unmountComponentAtNode(this[0]);
    }
  });

  // Prevent the default anchor behaviour for any CMS tab links that are rendered in
  // via a React FormBuilder
  $('.history-viewer__version-detail .nav-link').entwine({
    onclick(e) {
      e.preventDefault();
      this._super(e);
    }
  });
});
