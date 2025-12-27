import type { Order, CheckoutRequest, CheckoutResponse } from '../types/order';
import { auth } from '../lib/firebase';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

/**
 * Refresh backend session if expired
 */
const refreshSession = async (): Promise<void> => {
    try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }

        const idToken = await currentUser.getIdToken(true);

        const response = await fetch(`${API_BASE}/sessionLogin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ token: idToken }),
        });

        if (!response.ok) {
            throw new Error('Failed to refresh session');
        }

        console.log('✅ Session refreshed successfully');
    } catch (error) {
        console.error('❌ Session refresh failed:', error);
        throw error;
    }
};

/**
 * Get user's orders
 * @returns List of orders
 */
export const getOrders = async (): Promise<Order[]> => {
    const res = await fetch(`${API_BASE}/orders`, {
        credentials: 'include',
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || 'Failed to fetch orders');
    }

    return res.json();
};

/**
 * Get single order details
 * @param orderId Order ID
 * @returns Order details
 */
export const getOrderDetail = async (orderId: string): Promise<Order> => {
    const res = await fetch(`${API_BASE}/orders/${orderId}`, {
        credentials: 'include',
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || 'Failed to fetch order details');
    }

    return res.json();
};

/**
 * Create order from cart (checkout)
 * @param request Checkout request with delivery options
 * @returns Created order
 */
export const checkout = async (request?: CheckoutRequest, retryCount = 0): Promise<CheckoutResponse> => {
    const res = await fetch(`${API_BASE}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(request || {}),
    });

    if (!res.ok) {
        const error = await res.text();

        // If 401 and haven't retried yet, refresh session and retry
        if (res.status === 401 && retryCount === 0) {
            console.log('🔄 Session expired, refreshing and retrying...');
            try {
                await refreshSession();
                return await checkout(request, retryCount + 1);
            } catch (refreshError) {
                console.error('❌ Session refresh failed:', refreshError);
                throw new Error('Please log in again to continue');
            }
        }

        throw new Error(error || 'Failed to checkout');
    }

    return res.json();
};

/**
 * Select print shop for pending order
 * @param orderId Order ID
 * @param shopId Print shop ID to assign
 */
export const selectPrintShop = async (orderId: string, shopId: string): Promise<void> => {
    const res = await fetch(`${API_BASE}/orders/select-printshop`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ orderId, printShopId: shopId }),
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || 'Failed to select print shop');
    }
};

/**
 * Get matching print shops for an order
 * @param orderId Order ID to find matches for
 * @returns List of matching print shops with scores
 */
export const getOrderMatches = async (orderId: string): Promise<any[]> => {
    const res = await fetch(`${API_BASE}/orders/matches?orderId=${orderId}`, {
        credentials: 'include',
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || 'Failed to fetch order matches');
    }

    return res.json();
};

/**
 * Assign order to a specific print shop (admin function)
 * @param orderId Order ID
 * @param printShopId Print shop ID to assign
 */
export const assignOrder = async (orderId: string, printShopId: string): Promise<void> => {
    const res = await fetch(`${API_BASE}/orders/assign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ orderId, printShopId }),
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || 'Failed to assign order');
    }
};
