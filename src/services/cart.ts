import type { CartItem as FrontendCartItem } from '../context/CartContext';
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

        // Get fresh ID token
        const idToken = await currentUser.getIdToken(true); // Force refresh

        // Create new session
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

export interface BackendCartItem {
    artworkId: string;
    quantity: number;
    price: number;
    printOptions: {
        size: string;
        material: string;
        medium: string;
        frame: string;
        quantity: number;
        rushOrder: boolean;
    };
}

/**
 * Add item to backend cart
 * @param item Cart item to add
 */
export const addToBackendCart = async (item: BackendCartItem, retryCount = 0): Promise<void> => {
    console.log('📤 Adding to backend cart:', item);
    const res = await fetch(`${API_BASE}/cart/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(item),
    });

    console.log('📥 Backend cart response:', res.status, res.statusText);

    if (!res.ok) {
        const error = await res.text();

        // If 401 and haven't retried yet, refresh session and retry
        if (res.status === 401 && retryCount === 0) {
            console.log('🔄 Session expired, refreshing and retrying...');
            try {
                await refreshSession();
                // Retry once with fresh session
                return await addToBackendCart(item, retryCount + 1);
            } catch (refreshError) {
                console.error('❌ Session refresh failed:', refreshError);
                throw new Error('Please log in again to continue');
            }
        }

        console.error('❌ Failed to add to cart:', error);
        throw new Error(`Failed to add to cart (${res.status}): ${error || res.statusText}`);
    }

    console.log('✅ Item added to backend cart');
};

/**
 * Sync frontend cart items to backend cart
 * This is needed before checkout since backend reads from its own cart
 * @param frontendCartItems Frontend cart items to sync
 */
export const syncCartToBackend = async (frontendCartItems: FrontendCartItem[]): Promise<void> => {
    // Clear backend cart first by getting it and removing all items
    // Then add all frontend items

    for (const item of frontendCartItems) {
        const backendItem: BackendCartItem = {
            artworkId: item.artId?.toString() || item.id.toString(),
            quantity: item.quantity,
            price: item.price,
            printOptions: {
                size: item.size,
                material: item.material,
                medium: 'paper', // Default medium
                frame: item.frame,
                quantity: item.quantity,
                rushOrder: false, // Default no rush
            },
        };

        await addToBackendCart(backendItem);
    }
};

/**
 * Get backend cart
 */
export const getBackendCart = async (retryCount = 0): Promise<any> => {
    const res = await fetch(`${API_BASE}/cart`, {
        credentials: 'include',
    });

    if (!res.ok) {
        const error = await res.text();

        // If 401 and haven't retried yet, refresh session and retry
        if (res.status === 401 && retryCount === 0) {
            console.log('🔄 Session expired, refreshing and retrying...');
            try {
                await refreshSession();
                return await getBackendCart(retryCount + 1);
            } catch (refreshError) {
                console.error('❌ Session refresh failed:', refreshError);
                throw new Error('Please log in again to continue');
            }
        }

        throw new Error(error || 'Failed to get cart');
    }

    return res.json();
};

/**
 * Remove item from backend cart
 */
export const removeFromBackendCart = async (artworkId: string, retryCount = 0): Promise<void> => {
    const res = await fetch(`${API_BASE}/cart/remove`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ artworkId }),
    });

    if (!res.ok) {
        const error = await res.text();

        // If 401 and haven't retried yet, refresh session and retry
        if (res.status === 401 && retryCount === 0) {
            console.log('🔄 Session expired, refreshing and retrying...');
            try {
                await refreshSession();
                return await removeFromBackendCart(artworkId, retryCount + 1);
            } catch (refreshError) {
                console.error('❌ Session refresh failed:', refreshError);
                throw new Error('Please log in again to continue');
            }
        }

        throw new Error(error || 'Failed to remove from cart');
    }
};
