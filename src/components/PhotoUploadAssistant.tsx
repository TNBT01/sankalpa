import { useState, useEffect } from 'react';
import { Camera, Check, RefreshCw, Upload, Image, X } from 'lucide-react';

interface PhotoSlot {
  key: string;
  label: string;
  role: string;
  originalFileName: string;
}

const PHOTO_SLOTS: PhotoSlot[] = [
  {
    key: 'onevoice_pres',
    label: 'One Voice President Photo',
    role: 'Candidate in Blue Jacket',
    originalFileName: 'onevoiceparty.jpeg'
  },
  {
    key: 'sankalpa_vp',
    label: 'Sankalpa Vice President Photo',
    role: 'Candidate in Yellow Shirt with Folded Hands',
    originalFileName: 'WhatsApp Image 2026-10-06 at 8.35.19 PM (2).jpeg'
  },
  {
    key: 'sankalpa_symbol',
    label: 'Sankalpa Official Icon',
    role: 'Circular Emblem with Clenched Fist & Mountains',
    originalFileName: 'sankalpa icon.jpeg'
  },
  {
    key: 'onevoice_symbol',
    label: 'One Voice Official Symbol',
    role: 'Poster with Cricket Bat & Rise Your Voice',
    originalFileName: 'onevoice symbol.jpeg'
  }
];

export function PhotoUploadAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoStatus, setPhotoStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    checkLoadedPhotos();
  }, []);

  const checkLoadedPhotos = () => {
    const status: Record<string, boolean> = {};
    PHOTO_SLOTS.forEach(slot => {
      status[slot.key] = !!localStorage.getItem(`tpa_custom_img_${slot.key}`);
    });
    setPhotoStatus(status);
  };

  const handleFileChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        localStorage.setItem(`tpa_custom_img_${key}`, dataUrl);
        window.dispatchEvent(new Event('tpa_image_updated'));
        checkLoadedPhotos();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetSlot = (key: string) => {
    localStorage.removeItem(`tpa_custom_img_${key}`);
    window.dispatchEvent(new Event('tpa_image_updated'));
    checkLoadedPhotos();
  };

  const hasAnyLoaded = Object.values(photoStatus).some(Boolean);

  return (
    <>
      {/* Floating Pill in Bottom-Left corner */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-900/95 border border-amber-500/50 hover:border-amber-400 text-neutral-200 hover:text-white text-xs font-bold shadow-2xl backdrop-blur-md cursor-pointer transition-all active:scale-95"
        >
          <Camera className="w-4 h-4 text-amber-400" />
          <span>Original Photos {hasAnyLoaded ? '✓ Active' : 'Sync'}</span>
        </button>
      </div>

      {/* Modal Dialog for Exact Original Photos */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Camera className="w-4 h-4" />
              <span>Original Photo Manager</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight mb-2">
              USE YOUR EXACT ORIGINAL FILES
            </h3>

            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Select your 4 original unedited photos from your device to immediately display them across the site with 100% original quality, zero AI edits, and pixel-perfect fidelity.
            </p>

            <div className="space-y-3.5 mb-6">
              {PHOTO_SLOTS.map((slot) => {
                const isLoaded = photoStatus[slot.key];
                return (
                  <div
                    key={slot.key}
                    className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white truncate">
                          {slot.label}
                        </span>
                        {isLoaded && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400">
                            Active
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-neutral-500 block truncate">
                        File: {slot.originalFileName}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <label className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>{isLoaded ? 'Change' : 'Select'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileChange(slot.key, e)}
                        />
                      </label>
                      {isLoaded && (
                        <button
                          onClick={() => handleResetSlot(slot.key)}
                          className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800"
                          title="Reset to default"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                Changes take effect instantly on all pages and cards.
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
