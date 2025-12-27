import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin, DollarSign, Clock, Star } from 'lucide-react';
import type { OrderMatch } from '../../types/order';

interface OrderMatchingResultsProps {
    matches: OrderMatch[];
    onSelectShop: (printShopId: string) => void;
    selectedShopId?: string;
}

/**
 * OrderMatchingResults Component
 * Displays matching print shops for an order with scores, pricing, and delivery estimates
 */
export const OrderMatchingResults: React.FC<OrderMatchingResultsProps> = ({
    matches,
    onSelectShop,
    selectedShopId,
}) => {
    if (matches.length === 0) {
        return (
            <Card>
                <CardContent className="py-8 text-center text-gray-500">
                    No matching print shops found for this order.
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Available Print Shops</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {matches.map((match) => (
                    <Card
                        key={match.printShopId}
                        className={`transition-all hover:shadow-lg ${selectedShopId === match.printShopId
                                ? 'ring-2 ring-primary'
                                : ''
                            }`}
                    >
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div>
                                    <CardTitle className="text-lg">
                                        {match.printShopName}
                                    </CardTitle>
                                    <CardDescription className="flex items-center gap-1 mt-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-medium">
                                            {(match.matchScore * 100).toFixed(0)}% Match
                                        </span>
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <DollarSign className="w-4 h-4" />
                                <span>Est. KES {match.estimatedPrice.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span>{match.estimatedDelivery}</span>
                            </div>
                            {match.distance && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <MapPin className="w-4 h-4" />
                                    <span>{match.distance.toFixed(1)} km away</span>
                                </div>
                            )}
                            <Button
                                className="w-full mt-4"
                                variant={
                                    selectedShopId === match.printShopId
                                        ? 'default'
                                        : 'outline'
                                }
                                onClick={() => onSelectShop(match.printShopId)}
                            >
                                {selectedShopId === match.printShopId
                                    ? 'Selected'
                                    : 'Select Shop'}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
