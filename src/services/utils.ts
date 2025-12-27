import type { HealthStatus, PrintOption, PriceCalculation } from '../types/utils';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

/**
 * Check system health status
 * @returns Health status information
 */
export const checkHealth = async (): Promise<HealthStatus> => {
    const res = await fetch(`${API_BASE}/health`, {
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Health check failed');
    }

    return res.json();
};

/**
 * Get available print options (sizes, materials, frames, mediums)
 * @returns List of available print options
 */
export const getPrintOptions = async (): Promise<PrintOption[]> => {
    const res = await fetch(`${API_BASE}/print-options`, {
        credentials: 'include',
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || 'Failed to fetch print options');
    }

    return res.json();
};

/**
 * Calculate price for print options
 * @param options Price calculation request
 * @returns Price calculation result
 */
export const calculatePrice = async (options: any): Promise<PriceCalculation> => {
    const res = await fetch(`${API_BASE}/calculate-price`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(options),
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || 'Failed to calculate price');
    }

    return res.json();
};
