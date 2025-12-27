import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Calculator, DollarSign } from 'lucide-react';
import { calculatePrice } from '../../services/utils';
import { toast } from 'sonner';

interface PriceCalculatorProps {
    onPriceCalculated?: (price: number) => void;
    compact?: boolean;
}

interface CalculationOptions {
    size: string;
    material: string;
    medium: string;
    frame?: string;
    quantity: number;
    rushOrder: boolean;
}

/**
 * PriceCalculator Component
 * Real-time price calculation widget with interactive options
 */
export const PriceCalculator: React.FC<PriceCalculatorProps> = ({
    onPriceCalculated,
    compact = false,
}) => {
    const [options, setOptions] = useState<CalculationOptions>({
        size: '',
        material: '',
        medium: '',
        frame: '',
        quantity: 1,
        rushOrder: false,
    });
    const [priceData, setPriceData] = useState<any>(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleCalculate = async () => {
        if (!options.size || !options.material || !options.medium) {
            toast.error('Please select size, material, and medium');
            return;
        }

        setIsCalculating(true);

        try {
            const result = await calculatePrice(options);
            setPriceData(result);
            onPriceCalculated?.(result.totalPrice);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to calculate price');
        } finally {
            setIsCalculating(false);
        }
    };

    useEffect(() => {
        // Auto-calculate when options change (debounced)
        const timer = setTimeout(() => {
            if (options.size && options.material && options.medium) {
                handleCalculate();
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [options]);

    if (compact) {
        return (
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-primary" />
                        <span className="font-medium">Estimated Price</span>
                    </div>
                    {priceData ? (
                        <div className="text-2xl font-bold text-primary">
                            KES {priceData.totalPrice.toLocaleString()}
                        </div>
                    ) : (
                        <div className="text-gray-500">Configure options</div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    <CardTitle>Price Calculator</CardTitle>
                </div>
                <CardDescription>
                    Calculate the price based on your selections
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Quantity */}
                <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <input
                        type="number"
                        id="quantity"
                        min="1"
                        value={options.quantity}
                        onChange={(e) =>
                            setOptions({ ...options, quantity: parseInt(e.target.value) || 1 })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Rush Order */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="rushOrder"
                        checked={options.rushOrder}
                        onChange={(e) =>
                            setOptions({ ...options, rushOrder: e.target.checked })
                        }
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <Label htmlFor="rushOrder" className="cursor-pointer">
                        Rush Order (+KES 500)
                    </Label>
                </div>

                {/* Calculate Button */}
                <Button
                    onClick={handleCalculate}
                    disabled={isCalculating || !options.size || !options.material || !options.medium}
                    className="w-full"
                >
                    {isCalculating ? 'Calculating...' : 'Calculate Price'}
                </Button>

                {/* Price Breakdown */}
                {priceData && (
                    <div className="mt-6 space-y-3 border-t pt-4">
                        <h4 className="font-semibold text-sm text-gray-700">Price Breakdown</h4>
                        {priceData.breakdown.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="flex justify-between text-sm"
                            >
                                <span className="text-gray-600">{item.label}</span>
                                <span className="font-medium">
                                    KES {item.value.toLocaleString()}
                                </span>
                            </div>
                        ))}
                        <div className="flex justify-between text-lg font-bold pt-3 border-t">
                            <span>Total</span>
                            <span className="text-primary flex items-center gap-1">
                                <DollarSign className="w-5 h-5" />
                                KES {priceData.totalPrice.toLocaleString()}
                            </span>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
