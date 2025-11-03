# LSR Standalone App - Load Request Grid

A standalone, fully responsive web application for managing Load Request Grids with Commercial Items and POSM (Point of Sale Materials) tracking.

## Features

- ✅ **No Authentication Required** - Run standalone without any backend authentication
- ✅ **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Commercial Items Tab** - Manage commercial product orders
- ✅ **POSM Tab** - Track Point of Sale Materials
- ✅ **Dynamic Data Grid** - Interactive table with SKU, product names, UOM, and quantities
- ✅ **Delivery Date Planning** - Schedule and track planned delivery dates
- ✅ **Real-time Calculations** - Automatic calculation of totals and summaries

## Screenshots Reference

This application is based on the design from:
- `/Users/suryakantkumar/Desktop/LBCL/Screenshot 2025-11-03 at 6.57.29 PM.png`
- `/Users/suryakantkumar/Desktop/LBCL/Screenshot 2025-11-03 at 6.57.38 PM.png`

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful icon library
- **shadcn/ui components** - High-quality UI components

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd lsr-standalone-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3001
```

The application will run on port 3001 (to avoid conflicts with other apps).

## Available Scripts

- `npm run dev` - Start development server on port 3001
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
lsr-standalone-app/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/
│   │   ├── ui/                  # UI components (Button, Input, Table, etc.)
│   │   └── LoadRequestGrid.tsx  # Main grid component
│   └── lib/
│       └── utils.ts             # Utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile** (< 640px) - Single column layout, stacked elements
- **Tablet** (640px - 1024px) - Optimized two-column layout
- **Desktop** (> 1024px) - Full multi-column grid view

## Customization

### Adding More Products

Edit the `commercialItems` or `posmItems` arrays in `/src/components/LoadRequestGrid.tsx`:

```typescript
const commercialItems: LoadRequestItem[] = [
  {
    sku: 'YOUR-SKU',
    product_name: 'Product Name',
    uom: 'PCS',
    recommended: 100,
    preOrder: 20,
    bufferAdj: 0,
    totalQty: 120,
  },
  // Add more items...
];
```

### Changing Colors

Modify the theme in `tailwind.config.ts` or update CSS variables in `src/app/globals.css`.

### Adding API Integration

To connect to a real backend:

1. Create a service file in `src/services/`
2. Replace static data with API calls
3. Add loading states and error handling

## License

This is a standalone version created for development and testing purposes.

## Support

For issues or questions, please refer to the main LBCL project documentation.
# load_request
