import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { uploadFrameImage, listFrameImages, removeFrameImage } from '../../services/printshop';
import { toast } from 'sonner';

interface FrameImageManagerProps {
    frameId: string;
    frameName: string;
}

/**
 * FrameImageManager Component
 * Manages frame preview images - upload, list, and remove
 */
export const FrameImageManager: React.FC<FrameImageManagerProps> = ({
    frameId,
    frameName,
}) => {
    const [images, setImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        loadImages();
    }, [frameId]);

    const loadImages = async () => {
        setIsLoading(true);
        try {
            const imageList = await listFrameImages(frameId);
            setImages(imageList);
        } catch (error) {
            toast.error('Failed to load frame images');
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        setIsUploading(true);

        try {
            await uploadFrameImage(frameId, file);
            toast.success('Image uploaded successfully');
            await loadImages(); // Reload images
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to upload image');
        } finally {
            setIsUploading(false);
        }
    };

    const handleRemove = async (imageUrl: string) => {
        if (!confirm('Are you sure you want to remove this image?')) return;

        try {
            await removeFrameImage(frameId, imageUrl);
            toast.success('Image removed successfully');
            setImages((prev) => prev.filter((url) => url !== imageUrl));
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to remove image');
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Frame Images</CardTitle>
                <CardDescription>
                    Manage preview images for {frameName}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Upload Section */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={isUploading}
                        className="hidden"
                        id={`frame-upload-${frameId}`}
                    />
                    <label
                        htmlFor={`frame-upload-${frameId}`}
                        className="cursor-pointer flex flex-col items-center gap-2"
                    >
                        <Upload className="w-10 h-10 text-gray-400" />
                        <span className="text-sm font-medium text-gray-700">
                            {isUploading ? 'Uploading...' : 'Upload Frame Image'}
                        </span>
                        <span className="text-xs text-gray-500">
                            PNG, JPG up to 5MB
                        </span>
                    </label>
                </div>

                {/* Image Gallery */}
                {isLoading ? (
                    <div className="text-center py-8 text-gray-500">
                        Loading images...
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 flex flex-col items-center gap-2">
                        <ImageIcon className="w-12 h-12 text-gray-300" />
                        <p>No images uploaded yet</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((imageUrl, index) => (
                            <div
                                key={index}
                                className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group"
                            >
                                <img
                                    src={imageUrl}
                                    alt={`Frame preview ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                                    <Button
                                        size="sm"
                                        variant="destructive"
                                        onClick={() => handleRemove(imageUrl)}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X className="w-4 h-4 mr-1" />
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
