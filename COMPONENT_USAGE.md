# Missing Routes Implementation - Component Usage Guide

## New Service Functions

All service functions are now available for use throughout the application.

### Payment Service (`src/services/payment.ts`)
- `handlePaymentWebhook(webhookData)` - Process payment webhooks

### Orders Service (`src/services/orders.ts`)
- `getOrderMatches(orderId)` - Get matching print shops for an order
- `assignOrder(orderId, printShopId)` - Assign order to print shop (admin)

### Artworks Service (`src/services/artworks.ts`)
- `getArtworkStatus(artworkId)` - Get artwork availability status

### Print Shop Service (`src/services/printshop.ts`)
- `getPrintShopDetails(shopId)` - Get detailed shop information
- `calculatePrintShopPrice(shopId, options)` - Calculate price for specific shop
- `uploadFrameImage(frameId, imageFile)` - Upload frame preview image
- `listFrameImages(frameId)` - List frame images
- `removeFrameImage(frameId, imageUrl)` - Remove frame image
- `reportOrderIssue(issue)` - Report order issue

### Utils Service (`src/services/utils.ts`)
- `checkHealth()` - System health check
- `calculatePrice(options)` - General price calculation
- `getPrintOptions()` - Get available print options

## New UI Components

### 1. OrderMatchingResults
**Location**: `src/components/orders/OrderMatchingResults.tsx`

**Usage**:
```tsx
import { OrderMatchingResults } from '../components/orders/OrderMatchingResults';
import { getOrderMatches } from '../services/orders';

const matches = await getOrderMatches(orderId);

<OrderMatchingResults
  matches={matches}
  onSelectShop={(shopId) => console.log('Selected:', shopId)}
  selectedShopId={selectedShop}
/>
```

**Integration Points**:
- Checkout flow after order creation
- Order details page for reassignment

---

### 2. IssueReportForm
**Location**: `src/components/orders/IssueReportForm.tsx`

**Usage**:
```tsx
import { IssueReportForm } from '../components/orders/IssueReportForm';

<IssueReportForm
  orderId={order.OrderID}
  onSuccess={() => toast.success('Issue reported')}
  onCancel={() => setShowForm(false)}
/>
```

**Integration Points**:
- Order details page
- Order history page

---

### 3. FrameImageManager
**Location**: `src/components/printshop/FrameImageManager.tsx`

**Usage**:
```tsx
import { FrameImageManager } from '../components/printshop/FrameImageManager';

<FrameImageManager
  frameId={frame.id}
  frameName={frame.name}
/>
```

**Integration Points**:
- Print Shop Console - Frames management section

---

### 4. PrintOptionsSelector
**Location**: `src/components/common/PrintOptionsSelector.tsx`

**Usage**:
```tsx
import { PrintOptionsSelector } from '../components/common/PrintOptionsSelector';

<PrintOptionsSelector
  onSelectionChange={(selection) => {
    console.log('Selected:', selection);
  }}
  initialSelection={{ size: 'A4', material: 'matte' }}
/>
```

**Integration Points**:
- Artwork detail pages
- Cart customization
- Checkout flow

---

### 5. PriceCalculator
**Location**: `src/components/common/PriceCalculator.tsx`

**Usage**:
```tsx
import { PriceCalculator } from '../components/common/PriceCalculator';

// Full widget
<PriceCalculator
  onPriceCalculated={(price) => setTotalPrice(price)}
/>

// Compact mode
<PriceCalculator
  compact={true}
  onPriceCalculated={(price) => setTotalPrice(price)}
/>
```

**Integration Points**:
- Product pages
- Cart summary
- Checkout page

## Next Steps

To fully integrate these components:

1. **Orders Page**: Add issue reporting button to order details
2. **Checkout Flow**: Integrate order matching after order creation
3. **Print Shop Console**: Add frame image manager to frames section
4. **Artwork Pages**: Add print options selector and price calculator
5. **Cart Page**: Add price calculator to cart summary
