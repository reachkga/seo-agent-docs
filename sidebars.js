/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'getting_started',
    'landingpage-types',
    {
      type: 'category',
      label: 'Keyword Research',
      items: [
        'keyword-research/understanding-intent',
        'keyword-research/ahrefs-guide',
        'keyword-research/semrush-guide'
      ],
    },
    {
      type: 'category',
      label: 'CMS Integrations',
      items: [
        'framer-integration',
        {
          type: 'category',
          label: 'WordPress CMS',
          items: [
            'cms-integrations/wordpress/wp-sheet-editor',
            'cms-integrations/wordpress/sheets-to-wp-posts',
            'cms-integrations/wordpress/combined-tools'
          ],
        },
        'cms-integrations/webflow',
      ],
    },
    'privacy-policy',
    'terms-of-service',
    'cancellation-refund-policy',
    'support'
  ],
};

module.exports = sidebars;
