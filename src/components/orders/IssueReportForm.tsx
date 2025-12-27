import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { AlertCircle, Upload, X } from 'lucide-react';
import { reportOrderIssue } from '../../services/printshop';
import { toast } from 'sonner';

interface IssueReportFormProps {
    orderId: string;
    onSuccess?: () => void;
    onCancel?: () => void;
}

type IssueType = 'quality' | 'delay' | 'damage' | 'other';

/**
 * IssueReportForm Component
 * Form for reporting issues with print shop orders
 */
export const IssueReportForm: React.FC<IssueReportFormProps> = ({
    orderId,
    onSuccess,
    onCancel,
}) => {
    const [issueType, setIssueType] = useState<IssueType>('quality');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newImages = Array.from(e.target.files);
            setImages((prev) => [...prev, ...newImages]);
        }
    };

    const removeImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!description.trim()) {
            toast.error('Please provide a description of the issue');
            return;
        }

        setIsSubmitting(true);

        try {
            // For now, we'll send image URLs as empty array
            // In a real implementation, you'd upload images first and get URLs
            await reportOrderIssue({
                orderId,
                issueType,
                description: description.trim(),
                images: [], // TODO: Upload images and get URLs
            });

            toast.success('Issue reported successfully');
            setDescription('');
            setImages([]);
            onSuccess?.();
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to report issue');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <CardTitle>Report Order Issue</CardTitle>
                </div>
                <CardDescription>
                    Let us know about any problems with your order
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Issue Type Selection */}
                    <div className="space-y-2">
                        <Label htmlFor="issueType">Issue Type</Label>
                        <select
                            id="issueType"
                            value={issueType}
                            onChange={(e) => setIssueType(e.target.value as IssueType)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="quality">Quality Issue</option>
                            <option value="delay">Delivery Delay</option>
                            <option value="damage">Damaged Item</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Please describe the issue in detail..."
                            rows={5}
                            className="resize-none"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-2">
                        <Label>Images (Optional)</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors">
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                className="hidden"
                                id="image-upload"
                            />
                            <label
                                htmlFor="image-upload"
                                className="cursor-pointer flex flex-col items-center gap-2"
                            >
                                <Upload className="w-8 h-8 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                    Click to upload images
                                </span>
                            </label>
                        </div>

                        {/* Image Previews */}
                        {images.length > 0 && (
                            <div className="grid grid-cols-3 gap-2 mt-2">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-square rounded-lg overflow-hidden border border-gray-200"
                                    >
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt={`Preview ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Report'}
                        </Button>
                        {onCancel && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onCancel}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </Button>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};
