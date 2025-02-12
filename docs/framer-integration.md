---
sidebar_position: 3
title: Framer CMS
---

# Connecting Rankmonk to Framer CMS

Learn how to sync your Rankmonk-generated content with Framer CMS using Google Sheets as a bridge. This integration allows you to automatically update your landing pages with fresh content.

## Prerequisites

Before you begin, ensure you have:
- A Rankmonk account with generated content
- A Framer account and project
- Access to Google Sheets
- Framer Sheets plugin installed

## Step 1: Export Rankmonk Data to Google Sheets

1. From your Rankmonk dashboard, locate your generated content
2. Click the "Export to Google Sheets" button
3. Select your target Google Sheet or create a new one
4. Verify your data has been exported correctly

[Screenshot: Rankmonk export interface]

## Step 2: Set Up Google Sheets

1. Open your Google Sheet containing Rankmonk data
2. Ensure your sheet has clear column headers
3. Verify that you have a 'slug' column (required for Framer CMS)
4. Format your data appropriately:
   - Text columns for content
   - Number columns for metrics
   - Date columns for timestamps

[Screenshot: Example of properly formatted Google Sheet]

## Step 3: Install Framer Sheets Plugin

1. In your Framer project, click "Plugins" in the top navigation
2. Search for "Sheets"
3. Install the Sheets plugin
4. Verify the plugin appears in your plugins list

[Screenshot: Framer plugins menu with Sheets plugin]

## Step 4: Create CMS Collection

1. In Framer, go to Plugins > Sheets
2. Click "Create New Collection"
3. Name your collection (e.g., "RankmonkPages")
4. Click "Create"

[Screenshot: Creating new collection in Framer]

## Step 5: Connect Google Sheet

1. Click the "Sync" button in your new collection
2. Sign in to your Google account when prompted
3. Select your spreadsheet containing Rankmonk data
4. Choose the specific sheet containing your data

[Screenshot: Google Sheets selection interface]

## Step 6: Map Your Fields

1. Review the field mapping screen
2. Ensure the 'slug' field is correctly mapped
3. Set appropriate field types:
   - Text for content fields
   - Numbers for metrics
   - Colors for design elements
4. Deselect any columns you don't want to import
5. Click "Import from [Sheet Name]"

[Screenshot: Field mapping interface]

## Step 7: Verify and Update

1. Check your imported data in Framer CMS
2. Create or update your CMS template
3. Test the display of your content
4. To update content:
   - Make changes in Google Sheets
   - Go to Framer CMS
   - Click the sync button for your collection

## Best Practices

- Keep your Google Sheet structure consistent
- Always maintain a unique slug for each entry
- Regularly sync your collection to ensure content is up to date
- Back up your data before making major changes

## Troubleshooting

### Common Issues

1. **Sync Fails**
   - Check your Google account connection
   - Verify sheet permissions
   - Ensure stable internet connection

2. **Missing Data**
   - Verify field mappings
   - Check for required columns
   - Ensure data formats match field types

3. **Display Issues**
   - Review CMS template setup
   - Check field types
   - Verify content formatting

## Need Help?

If you encounter any issues:
- Check our [Support Documentation](/support)
- Contact support@rankmonk.io
- Join our [Slack community](https://rankmonk.slack.com)

## Next Steps

- Learn about [Landing Page Types](/landingpage-types)
- Explore advanced Framer CMS features
- Set up automated content updates 