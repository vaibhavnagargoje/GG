"use client";

import { Plus, X, Upload } from 'lucide-react';
import Image from "next/image";

export default function AboutProject({ formData, setFormData }) {
  // Initialize if not present
  if (!formData.aboutProject) {
    formData.aboutProject = {
      heading: '',
      tagline: '',
      description1: '',
      description2: '',
      sliderImages: []
    };
  }

  const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const imageUrl = URL.createObjectURL(file);
      
      setFormData(prev => {
        const newSliderImages = [...(prev.aboutProject?.sliderImages || [])];
        newSliderImages[index] = {
          src: imageUrl,
          alt: file.name
        };

        return {
          ...prev,
          aboutProject: {
            ...prev.aboutProject,
            sliderImages: newSliderImages
          }
        };
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleAddImage = () => {
    setFormData(prev => ({
      ...prev,
      aboutProject: {
        ...prev.aboutProject,
        sliderImages: [...(prev.aboutProject?.sliderImages || []), { src: '', alt: '' }]
      }
    }));
  };

  const handleRemoveImage = (index) => {
    setFormData(prev => ({
      ...prev,
      aboutProject: {
        ...prev.aboutProject,
        sliderImages: prev.aboutProject.sliderImages.filter((_, idx) => idx !== index)
      }
    }));
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-[#7A2631] mb-6">About Project</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Heading
          </label>
          <input
            type="text"
            value={formData.aboutProject?.heading || ''}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              aboutProject: { ...prev.aboutProject, heading: e.target.value }
            }))}
            className="w-full px-4 py-2 border text-black rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tagline
          </label>
          <input
            type="text"
            value={formData.aboutProject?.tagline || ''}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              aboutProject: { ...prev.aboutProject, tagline: e.target.value }
            }))}
            className="w-full px-4 py-2 border text-black rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description 1
          </label>
          <textarea
            value={formData.aboutProject?.description1 || ''}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              aboutProject: { ...prev.aboutProject, description1: e.target.value }
            }))}
            rows={4}
            className="w-full px-4 py-2 border text-black rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description 2
          </label>
          <textarea
            value={formData.aboutProject?.description2 || ''}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              aboutProject: { ...prev.aboutProject, description2: e.target.value }
            }))}
            rows={4}
            className="w-full px-4 py-2 border text-black rounded-md"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Slider Images
            </label>
            <button
              type="button"
              onClick={handleAddImage}
              className="flex items-center gap-2 px-4 py-2 bg-[#7A2631] text-white rounded-md hover:bg-[#9B2C2C]"
            >
              <Plus className="h-4 w-4" />
              Add Image
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {formData.aboutProject?.sliderImages?.map((image, index) => (
              <div key={index} className="relative">
                <div className="aspect-square border rounded-lg overflow-hidden">
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt || 'Slider Image'}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center bg-gray-100">
                      <input
                        type="file"
                        onChange={(e) => handleImageUpload(index, e)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept="image/*"
                      />
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}