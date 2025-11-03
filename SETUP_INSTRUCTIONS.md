# Quick Setup Instructions

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd /Users/suryakantkumar/Desktop/LBCL/lsr-standalone-app
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:3001**

---

## ✨ What You Get

✅ **Load Request Grid** - Fully functional grid interface
✅ **Commercial Items Tab** - Manage commercial products
✅ **POSM Tab** - Track Point of Sale Materials
✅ **Fully Responsive** - Works on mobile, tablet, and desktop
✅ **No Authentication** - Runs standalone, no backend needed

---

## 📱 Responsive Design

The app automatically adapts to:
- **Mobile** (<640px) - Single column, stacked layout
- **Tablet** (640px-1024px) - Two column optimized view
- **Desktop** (>1024px) - Full multi-column grid

---

## 🎨 Key Features

### Header Section
- Real-time item count display
- Total quantity tracking
- Delivery date selector
- Clean, professional UI

### Data Grid
- **SKU** - Product codes
- **Product Name** - Full product names
- **UOM** - Unit of Measure badges
- **Recommended** - AI-recommended quantities
- **Pre-Order** - Pre-ordered amounts
- **Buffer Adjustment** - Manual adjustments
- **Total Qty** - Calculated totals

### Interactive Elements
- Switch between Commercial Items and POSM tabs
- Click on quantities to see breakdowns (UI ready)
- Adjust buffer quantities
- Add new items
- Import bulk data

---

## 📂 Project Structure

```
lsr-standalone-app/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind + custom styles
│   │   ├── layout.tsx           # App layout
│   │   └── page.tsx             # Home page (renders grid)
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── table.tsx
│   │   │   ├── badge.tsx
│   │   │   └── select.tsx
│   │   └── LoadRequestGrid.tsx  # Main grid component
│   └── lib/
│       └── utils.ts             # Utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🔧 Customization

### Change Sample Data

Edit `/src/components/LoadRequestGrid.tsx`:

```typescript
// Line ~25: Commercial Items
const commercialItems: LoadRequestItem[] = [
  {
    sku: 'YOUR-SKU',
    product_name: 'Your Product',
    uom: 'PCS',
    recommended: 100,
    preOrder: 20,
    bufferAdj: 0,
    totalQty: 120,
  },
];

// Line ~60: POSM Items
const posmItems: LoadRequestItem[] = [
  // Add your POSM items here
];
```

### Modify Styles

Update colors in `/src/app/globals.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... more variables */
}
```

---

## 🔌 Add Backend Integration

To connect to an API:

1. Create a service file:
```typescript
// src/services/loadRequestService.ts
export async function fetchLoadItems() {
  const response = await fetch('YOUR_API_URL');
  return response.json();
}
```

2. Update LoadRequestGrid to use the service:
```typescript
import { fetchLoadItems } from '@/services/loadRequestService';

// In component:
useEffect(() => {
  async function loadData() {
    const data = await fetchLoadItems();
    setCommercialItems(data.commercial);
    setPosmItems(data.posm);
  }
  loadData();
}, []);
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

The production build will be optimized and ready to deploy.

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the `.next` folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"]
```

---

## ❓ Troubleshooting

### Port 3001 Already in Use
Change port in `package.json`:
```json
"dev": "next dev -p 3002"
```

### Dependencies Not Installing
Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Loading
Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

---

## 📝 Notes

- This is a **standalone version** - no authentication required
- Sample data is hardcoded for demo purposes
- Designed to match the provided screenshots exactly
- Fully responsive and production-ready
- TypeScript enabled for type safety
- Tailwind CSS for easy styling

---

## 🎯 Next Steps

1. Install and run the app
2. Explore the Commercial Items and POSM tabs
3. Customize the data to match your needs
4. Add backend API integration if needed
5. Deploy to your preferred hosting platform

---

**Ready to go!** Your standalone LSR Load Request Grid is ready to use. 🎉
