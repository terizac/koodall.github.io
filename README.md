# Koodall AR Website
[![](https://www.koodall.ai/media/images/logo/logo-color.svg)](https://www.koodall.ai/)


## Project Setup

### 1. Create package.json

Create a `package.json` file in your project root with the following content:

```json
{
  "name": "koodall-site-ar",
  "version": "0.1.13",
  "description": "Koodall AR Website",
  "scripts": {
    "start": "http-server . -p 3000",
    "dev": "http-server . -p 3000"
  },
  "dependencies": {
    "@banuba/webar": "^1.16.0",
    "http-server": "^14.1.1"
  }
}
```

### 2. Install Dependencies

Navigate to your project directory and run:

```bash
npm install
```

This will install all necessary dependencies including:
- WebAR SDK
- http-server: Local development server

### 3. Run the Project

You can start the development server using either of these commands:

```bash
# Using npx
npx http-server . -p 3000

# Or using npm script
npm run dev
```

The application will be available at:
- http://localhost:3000
- http://127.0.0.1:3000

## Project Structure

```
koodall-site-ar-v0.1.13/
├── index.html          # Main entry point
├── index-prod.html     # Production entry point
├── package.json        # Project configuration
├── css/               # Stylesheets
├── js/                # JavaScript files
├── media/             # Media assets
├── images/            # Image assets
├── en/                # English localization
├── cn/                # Chinese localization
└── tw/                # Traditional Chinese localization
```

## Notes

- Make sure you have Node.js and npm installed on your system
- The server runs on port 3000 by default
- The application requires camera access for AR features 