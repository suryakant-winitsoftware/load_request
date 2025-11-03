'use client';

import { useState } from 'react';
import { Plus, ShoppingCart, Package, Layers, ChevronRight, Upload, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface LoadRequestItem {
  sku: string;
  product_name: string;
  uom: string;
  recommended: number;
  preOrder: number;
  bufferAdj: number;
  totalQty: number;
}

export default function LoadRequestGrid() {
  const [activeTab, setActiveTab] = useState<'commercial' | 'posm'>('commercial');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Sample data for Commercial Items
  const commercialItems: LoadRequestItem[] = [
    {
      sku: 'LL325BL03',
      product_name: 'LION LAGER 325ML-BOTTLE 4PACK',
      uom: 'BOT',
      recommended: 149,
      preOrder: 26,
      bufferAdj: 0,
      totalQty: 175,
    },
    {
      sku: 'EMBT6005',
      product_name: 'AMBER 500ML BOTTLE-EMPTY',
      uom: 'BOT',
      recommended: 197,
      preOrder: 39,
      bufferAdj: 0,
      totalQty: 236,
    },
    {
      sku: 'LL19KL01',
      product_name: 'LION LAGER 19L-KEG',
      uom: 'PAC',
      recommended: 180,
      preOrder: 29,
      bufferAdj: 0,
      totalQty: 209,
    },
    {
      sku: 'FGLL0001TR5',
      product_name: 'LION LAGER 500ML-24CAN',
      uom: 'EA',
      recommended: 153,
      preOrder: 27,
      bufferAdj: 0,
      totalQty: 180,
    },
    {
      sku: 'FGLL000130L',
      product_name: 'LION LAGER 30ML-KEG',
      uom: 'CRT',
      recommended: 104,
      preOrder: 25,
      bufferAdj: 0,
      totalQty: 129,
    },
  ];

  // Sample data for POSM Items
  const posmItems: LoadRequestItem[] = [
    {
      sku: 'FGLL0001325',
      product_name: 'LION LAGER 325ML-20BOTTLE',
      uom: 'BOT',
      recommended: 117,
      preOrder: 33,
      bufferAdj: 0,
      totalQty: 150,
    },
    {
      sku: 'ABD0058215',
      product_name: 'Air-Val Angry Birds Yellow G Set Edt 50ml+Tag+Chain+Notebook',
      uom: 'PCS',
      recommended: 51,
      preOrder: 19,
      bufferAdj: 0,
      totalQty: 70,
    },
    {
      sku: 'ABD007140T',
      product_name: 'ABD007140T',
      uom: 'PCS',
      recommended: 87,
      preOrder: 22,
      bufferAdj: 0,
      totalQty: 109,
    },
    {
      sku: 'LL500CL06',
      product_name: 'LION LAGER 500ML-CAN 12PACK',
      uom: 'EA',
      recommended: 76,
      preOrder: 41,
      bufferAdj: 0,
      totalQty: 117,
    },
    {
      sku: 'Test001',
      product_name: 'Test Cashew',
      uom: 'Case',
      recommended: 114,
      preOrder: 17,
      bufferAdj: 0,
      totalQty: 131,
    },
  ];

  const currentItems = activeTab === 'commercial' ? commercialItems : posmItems;

  const totalItems = currentItems.length;
  const totalRecommended = currentItems.reduce((sum, item) => sum + item.recommended, 0);
  const totalPreOrders = currentItems.reduce((sum, item) => sum + item.preOrder, 0);
  const totalQuantity = currentItems.reduce((sum, item) => sum + item.totalQty, 0);

  const handleNextToPOSM = () => {
    setActiveTab('posm');
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCreateOrder = () => {
    setShowSuccessModal(true);
    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 rounded-full p-3 mb-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Order Created Successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                  Your load request has been submitted successfully. You will receive a confirmation shortly.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 w-full mb-6">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-600">Total Items:</span>
                    <span className="font-bold text-gray-900">{commercialItems.length + posmItems.length}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-600">Commercial Items:</span>
                    <span className="font-bold text-gray-900">{commercialItems.length}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-600">POSM Items:</span>
                    <span className="font-bold text-gray-900">{posmItems.length}</span>
                  </div>
                  <div className="flex justify-between items-center text-base pt-2 border-t mt-2">
                    <span className="text-gray-900 font-medium">Total Quantity:</span>
                    <span className="font-bold text-gray-900">
                      {commercialItems.reduce((sum, item) => sum + item.totalQty, 0) +
                       posmItems.reduce((sum, item) => sum + item.totalQty, 0)}
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => setShowSuccessModal(false)}
                  className="bg-black hover:bg-gray-800 text-white w-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border p-3 sm:p-4 md:p-6 mb-4 md:mb-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-gray-100 rounded-lg p-2 sm:p-3 shrink-0">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Load Request Grid
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage your product inventory and orders</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <Badge variant="outline" className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2">
                  <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Items</span>
                  <span className="font-bold text-xs sm:text-sm">{totalItems}</span>
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2">
                  <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Total Qty</span>
                  <span className="font-bold text-xs sm:text-sm">{totalQuantity}</span>
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border mb-4">
          <div className="flex border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab('commercial')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'commercial'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Commercial Items
            </button>
            <button
              onClick={() => setActiveTab('posm')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'posm'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              POSM
            </button>
          </div>
        </div>

        {/* Mobile Card View (Hidden on Desktop) */}
        <div className="block lg:hidden space-y-3">
          {currentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-500 mb-1">{item.sku}</div>
                  <div className="font-semibold text-gray-900 text-sm mb-2">{item.product_name}</div>
                  <Badge variant="outline" className="text-xs">{item.uom}</Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    Recommended
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-xs h-8">
                    {item.recommended}
                  </Button>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <Package className="w-3 h-3" />
                    Pre-Order
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-xs h-8">
                    {item.preOrder}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <Plus className="w-3 h-3" />
                    Buffer Adj.
                  </div>
                  <Input
                    type="number"
                    value={item.bufferAdj}
                    className="w-full text-center text-xs h-8"
                    readOnly
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <Package className="w-3 h-3" />
                    Total Qty
                  </div>
                  <Button className="bg-black hover:bg-gray-800 text-white w-full text-xs h-8">
                    {item.totalQty} PCS
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View (Hidden on Mobile) */}
        <div className="hidden lg:block bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-700 text-xs whitespace-nowrap">SKU</TableHead>
                  <TableHead className="font-semibold text-gray-700 min-w-[250px] text-xs">PRODUCT NAME</TableHead>
                  <TableHead className="font-semibold text-gray-700 text-xs whitespace-nowrap">UOM</TableHead>
                  <TableHead className="font-semibold text-gray-700 text-xs whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <ChevronRight className="w-3.5 h-3.5" />
                      RECOMMENDED
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold text-gray-700 text-xs whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Package className="w-3.5 h-3.5" />
                      PRE-ORDER
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold text-gray-700 text-xs whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5" />
                      BUFFER ADJ.
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold text-gray-700 text-xs whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Package className="w-3.5 h-3.5" />
                      TOTAL QTY
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((item, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-700 text-sm">{item.sku}</TableCell>
                    <TableCell className="text-gray-900 text-sm">{item.product_name}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-medium text-xs">
                        {item.uom}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="font-medium text-xs">
                        {item.recommended}
                        <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="font-medium text-xs">
                        {item.preOrder}
                        <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        value={item.bufferAdj}
                        className="w-20 text-center text-sm"
                        readOnly
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        className="bg-black hover:bg-gray-800 text-white font-medium text-xs"
                        size="sm"
                      >
                        {item.totalQty} PCS
                        <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer Summary */}
          <div className="border-t bg-gray-50 px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm">
                <span className="text-gray-600">
                  Total Items: <span className="font-bold text-gray-900">{totalItems}</span>
                </span>
                <span className="text-gray-600">
                  Recommended: <span className="font-bold text-gray-900">{totalRecommended}</span>
                </span>
                <span className="text-gray-600">
                  Pre-Orders: <span className="font-bold text-gray-900">{totalPreOrders}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                <span className="text-gray-600 text-xs sm:text-sm">Total Quantity:</span>
                <span className="font-bold text-gray-900 text-base sm:text-lg">{totalQuantity}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Summary (Shown only on mobile) */}
        <div className="block lg:hidden bg-white rounded-lg shadow-sm border p-4 mt-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Total Items:</span>
              <span className="font-bold text-gray-900">{totalItems}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Recommended:</span>
              <span className="font-bold text-gray-900">{totalRecommended}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Pre-Orders:</span>
              <span className="font-bold text-gray-900">{totalPreOrders}</span>
            </div>
            <div className="flex justify-between items-center text-base pt-2 border-t">
              <span className="text-gray-900 font-medium flex items-center gap-2">
                <Package className="w-4 h-4" />
                Total Quantity:
              </span>
              <span className="font-bold text-gray-900">{totalQuantity}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button variant="outline" className="flex items-center justify-center gap-2 text-xs sm:text-sm h-9 sm:h-10">
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {activeTab === 'commercial' ? 'Add Commercial Item' : 'Add POSM Item'}
          </Button>
          <Button variant="outline" className="flex items-center justify-center gap-2 text-xs sm:text-sm h-9 sm:h-10">
            <Upload className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Import Items
          </Button>
          {activeTab === 'commercial' ? (
            <Button
              onClick={handleNextToPOSM}
              className="bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2 text-xs sm:text-sm h-9 sm:h-10"
            >
              <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Next: POSM Items
            </Button>
          ) : (
            <Button
              onClick={handleCreateOrder}
              className="bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2 text-xs sm:text-sm h-9 sm:h-10"
            >
              <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Create Order
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
