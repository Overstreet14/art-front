// Utility types for general-purpose endpoints

export interface HealthStatus {
    status: 'healthy' | 'degraded' | 'down';
    timestamp: string;
    services?: {
        database?: boolean;
        storage?: boolean;
        payment?: boolean;
    };
}

export interface PrintOption {
    id: string;
    category: 'size' | 'material' | 'frame' | 'medium';
    name: string;
    description?: string;
    available: boolean;
}

export interface PriceCalculation {
    basePrice: number;
    totalPrice: number;
    breakdown: {
        label: string;
        value: number;
    }[];
}
