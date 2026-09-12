import React, { useState, useRef } from 'react';
import { useMedia } from '../context/MediaContext';
import { X, Upload, CheckCircle2, RotateCcw, Image as ImageIcon, Sparkles, AlertCircle } from 'lucide-react';

export const MediaUploadModal: React.FC = () => {
  const {
    isMediaModalOpen,
    closeMediaModal,
    profilePhoto,
    logoImage,
    setProfilePhotoFromFile,
    setLogoFromFile,
    resetProfilePhoto,
    resetLogo,
    isCustomPhoto,
    isCustomLogo,
  } = useMedia();

  const [photoDragOver, setPhotoDragOver] = useState(false);
  const [logoDragOver, setLogoDragOver] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const photoInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  if (!isMediaModalOpen) return null;

  const handlePhotoUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPEG, PNG, WEBP).');
      return;
    }
    await setProfilePhotoFromFile(file);
    showNotice('Real portrait photo updated successfully!');
  };

  const handleLogoUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPEG, SVG, WEBP).');
      return;
    }
    await setLogoFromFile(file);
    showNotice('Real brand logo updated successfully!');
  };

  const showNotice = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={closeMediaModal}
    >
      <div
        className="relative w-full max-w-2xl bg-[#141418] border border-[#2a2a35] rounded-2xl shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#22222c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5500]/20 flex items-center justify-center text-[#FF5500]">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Use Your Real Photo &amp; Logo
              </h2>
              <p className="text-xs text-zinc-400">
                Directly attach your genuine WhatsApp images without any AI alterations
              </p>
            </div>
          </div>
          <button
            onClick={closeMediaModal}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-[#202028] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Alert */}
        {successMsg && (
          <div className="mt-4 p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl flex items-center gap-2.5 text-emerald-400 text-sm">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        <div className="mt-6 space-y-6">
          {/* Section 1: Real Portrait Photo */}
          <div className="p-4 rounded-xl bg-[#1a1a22] border border-[#272733] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">1. Real Personal Portrait</span>
                {isCustomPhoto && (
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                    Custom Photo Active
                  </span>
                )}
              </div>
              {isCustomPhoto && (
                <button
                  onClick={resetProfilePhoto}
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Preview Thumbnail */}
              <div className="w-24 h-28 rounded-lg overflow-hidden border border-[#333342] bg-black flex-shrink-0 relative">
                <img
                  src={profilePhoto}
                  alt="Profile Preview"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Upload Drop Zone */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setPhotoDragOver(true);
                }}
                onDragLeave={() => setPhotoDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setPhotoDragOver(false);
                  if (e.dataTransfer.files?.[0]) {
                    handlePhotoUpload(e.dataTransfer.files[0]);
                  }
                }}
                onClick={() => photoInputRef.current?.click()}
                className={`flex-1 w-full border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                  photoDragOver
                    ? 'border-[#FF5500] bg-[#FF5500]/10'
                    : 'border-[#2e2e3c] hover:border-[#FF5500]/60 hover:bg-[#20202a]'
                }`}
              >
                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handlePhotoUpload(e.target.files[0]);
                    }
                  }}
                />
                <Upload className="w-6 h-6 text-[#FF5500] mb-2" />
                <p className="text-xs font-semibold text-white">
                  Click to select or drag &amp; drop your real photo
                </p>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  (e.g., <code className="text-zinc-300">WhatsApp Image...10.35.17 AM.jpeg</code>)
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Real Brand Logo */}
          <div className="p-4 rounded-xl bg-[#1a1a22] border border-[#272733] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">2. Real Brand Logo</span>
                {isCustomLogo ? (
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                    Custom File Active
                  </span>
                ) : (
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/30 rounded-full">
                    Vector Graphic Active
                  </span>
                )}
              </div>
              {isCustomLogo && (
                <button
                  onClick={resetLogo}
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset to Vector
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Preview Thumbnail */}
              <div className="w-32 h-20 rounded-lg overflow-hidden border border-[#333342] bg-black flex-shrink-0 flex items-center justify-center p-2">
                {logoImage ? (
                  <img src={logoImage} alt="Custom Logo" className="max-h-full max-w-full object-contain" />
                ) : (
                  <span className="text-[11px] text-zinc-400 text-center font-medium">
                    Rendered via Crisp Vector
                  </span>
                )}
              </div>

              {/* Upload Drop Zone */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setLogoDragOver(true);
                }}
                onDragLeave={() => setLogoDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setLogoDragOver(false);
                  if (e.dataTransfer.files?.[0]) {
                    handleLogoUpload(e.dataTransfer.files[0]);
                  }
                }}
                onClick={() => logoInputRef.current?.click()}
                className={`flex-1 w-full border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                  logoDragOver
                    ? 'border-[#FF5500] bg-[#FF5500]/10'
                    : 'border-[#2e2e3c] hover:border-[#FF5500]/60 hover:bg-[#20202a]'
                }`}
              >
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleLogoUpload(e.target.files[0]);
                    }
                  }}
                />
                <Upload className="w-6 h-6 text-[#FF5500] mb-2" />
                <p className="text-xs font-semibold text-white">
                  Click to select or drag &amp; drop your real logo
                </p>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  (e.g., <code className="text-zinc-300">WhatsApp Image...6.32.37 PM.jpeg</code>)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Guidance */}
        <div className="mt-6 p-3.5 bg-[#17171e] rounded-xl border border-[#242430] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-zinc-400 space-y-1">
            <p>
              <strong className="text-zinc-200">How it works:</strong> File selection instantly loads your raw, unmodified camera/design file in full high definition and keeps it active across your session.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={closeMediaModal}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#E61E00] text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-[#FF5500]/20 transition-opacity"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
