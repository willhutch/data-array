# Next.js Migration Summary

This document summarizes the migration from a vanilla JS webpack-based application to Next.js with React.

## What's Changed

### 1. Project Structure
- Added Next.js configuration (`next.config.js`)
- Created `pages/` directory for Next.js pages and API routes
- Created `components/` directory for React components
- Existing `src/` directory remains for shared utilities and models

### 2. Backend API (Server-Side)
- **New API Route**: `pages/api/data/index.js`
  - Handles fetching data from Google Sheets, CSV, and JSON sources
  - Uses `googleapis` library for Google Sheets API on the server
  - All data fetching now happens server-side
  - Returns processed radar data to the frontend

### 3. Frontend (React Components)
- **Main Page**: `pages/index.js`
  - React component that fetches radar data from the API
  - Shows loading and error states
  - Only displays the radar (no landing page form)
  
- **Radar Visualization Component**: `components/RadarVisualization.js`
  - Wraps existing D3.js visualization code
  - Uses existing `plotRadarGraph` function from factory exports

### 4. Configuration
- Updated `package.json` with Next.js and React dependencies
- `next.config.js` configured for SCSS support and webpack customizations
- Environment variables configured in `next.config.js`

## How to Use

### Development
```bash
npm install  # Install new dependencies
npm run dev  # Start Next.js development server (replaces old npm run dev)
```

### Production Build
```bash
npm run build  # Build Next.js application
npm start      # Start production server
```

### Environment Variables
Set the following environment variables:
- `CLIENT_ID` - Google OAuth Client ID (for private sheets - not yet fully supported in backend)
- `API_KEY` - Google API Key (for public sheets)
- `RINGS` - Custom ring names (JSON array)
- `QUADRANTS` - Custom quadrant names (JSON array)
- `GTM_ID` - Google Tag Manager ID (optional)
- `ADOBE_LAUNCH_SCRIPT_URL` - Adobe Launch script URL (optional)

## API Usage

The radar can be accessed via URL parameters:
```
/?documentId=<GOOGLE_SHEET_URL_OR_CSV_OR_JSON_URL>
/?sheetId=<GOOGLE_SHEET_ID>
/?sheetId=<SHEET_ID>&sheetName=<SHEET_NAME>
```

Examples:
```
/?documentId=https://docs.google.com/spreadsheets/d/1GBX3-jzlGkiKpYHF9RvVtu6GxRadarSheet/edit
/?documentId=https://example.com/data.csv
/?documentId=https://example.com/data.json
```

## Key Differences from Original

1. **No Landing Page Form**: The application only shows the radar visualization. Data must be provided via URL parameters.

2. **Server-Side Data Fetching**: All Google Sheets, CSV, and JSON fetching happens on the server via API routes, not in the browser.

3. **React Components**: The frontend now uses React components instead of vanilla JavaScript DOM manipulation.

4. **D3.js Integration**: The existing D3.js visualization code is preserved and wrapped in React components using `useEffect`.

## What's Not Yet Migrated

1. **Private Google Sheets with OAuth**: The backend API route currently only supports public Google Sheets with an API key. Private sheet authentication via OAuth needs to be implemented.

2. **Landing Page**: If you want a landing page with a form to enter the sheet URL, it would need to be added as a React component.

3. **Full Testing**: Tests need to be updated for Next.js structure.

## Notes

- The existing models, utilities, and D3.js visualization code remain mostly unchanged
- SCSS styles are imported in `_app.js` and work the same as before
- Images should be in `public/images/` directory for Next.js to serve them
