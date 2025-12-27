import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { getPrintOptions } from '../../services/utils';
import { toast } from 'sonner';

interface PrintOption {
    id: string;
    category: 'size' | 'material' | 'frame' | 'medium';
    name: string;
    description?: string;
    available: boolean;
}

interface PrintOptionsSelection {
    size?: string;
    material?: string;
    frame?: string;
    medium?: string;
}

interface PrintOptionsSelectorProps {
    onSelectionChange: (selection: PrintOptionsSelection) => void;
    initialSelection?: PrintOptionsSelection;
}

/**
 * PrintOptionsSelector Component
 * Comprehensive print options selector for size, material, frame, and medium
 */
export const PrintOptionsSelector: React.FC<PrintOptionsSelectorProps> = ({
    onSelectionChange,
    initialSelection = {},
}) => {
    const [options, setOptions] = useState<PrintOption[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selection, setSelection] = useState<PrintOptionsSelection>(initialSelection);

    useEffect(() => {
        loadOptions();
    }, []);

    const loadOptions = async () => {
        try {
            const data = await getPrintOptions();
            setOptions(data);
        } catch (error) {
            toast.error('Failed to load print options');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (category: keyof PrintOptionsSelection, value: string) => {
        const newSelection = { ...selection, [category]: value };
        setSelection(newSelection);
        onSelectionChange(newSelection);
    };

    const getOptionsByCategory = (category: string) => {
        return options.filter((opt) => opt.category === category && opt.available);
    };

    if (isLoading) {
        return (
            <Card>
                <CardContent className="py-8 text-center text-gray-500">
                    Loading print options...
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Print Options</CardTitle>
                <CardDescription>
                    Customize your print with the options below
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Size Selection */}
                <div className="space-y-2">
                    <Label htmlFor="size">Size</Label>
                    <select
                        id="size"
                        value={selection.size || ''}
                        onChange={(e) => handleChange('size', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="">Select size</option>
                        {getOptionsByCategory('size').map((opt) => (
                            <option key={opt.id} value={opt.id}>
                                {opt.name}
                                {opt.description && ` - ${opt.description}`}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Material Selection */}
                <div className="space-y-2">
                    <Label htmlFor="material">Material</Label>
                    <div className="grid grid-cols-2 gap-2">
                        {getOptionsByCategory('material').map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => handleChange('material', opt.id)}
                                className={`p-3 border rounded-lg text-left transition-all ${selection.material === opt.id
                                        ? 'border-primary bg-primary/10'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}
                            >
                                <div className="font-medium">{opt.name}</div>
                                {opt.description && (
                                    <div className="text-xs text-gray-500 mt-1">
                                        {opt.description}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Medium Selection */}
                <div className="space-y-2">
                    <Label htmlFor="medium">Medium</Label>
                    <select
                        id="medium"
                        value={selection.medium || ''}
                        onChange={(e) => handleChange('medium', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="">Select medium</option>
                        {getOptionsByCategory('medium').map((opt) => (
                            <option key={opt.id} value={opt.id}>
                                {opt.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Frame Selection */}
                <div className="space-y-2">
                    <Label>Frame (Optional)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <button
                            onClick={() => handleChange('frame', '')}
                            className={`p-3 border rounded-lg text-center transition-all ${!selection.frame
                                    ? 'border-primary bg-primary/10'
                                    : 'border-gray-300 hover:border-gray-400'
                                }`}
                        >
                            <div className="font-medium">No Frame</div>
                        </button>
                        {getOptionsByCategory('frame').map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => handleChange('frame', opt.id)}
                                className={`p-3 border rounded-lg text-center transition-all ${selection.frame === opt.id
                                        ? 'border-primary bg-primary/10'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}
                            >
                                <div className="font-medium">{opt.name}</div>
                                {opt.description && (
                                    <div className="text-xs text-gray-500 mt-1">
                                        {opt.description}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
