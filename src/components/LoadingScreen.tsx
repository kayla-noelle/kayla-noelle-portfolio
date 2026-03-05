import { useEffect } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white text-[#1c1c1c] flex flex-col items-center justify-center gap-6">
      <p className="font-inter text-2xl tracking-widest">Loading</p>
      <div className="flex items-end gap-2">
        <div className="w-2 bg-[#2C7A7B] rounded-full animate-bar-1" style={{ height: '12px' }}></div>
        <div className="w-2 bg-[#2C7A7B] rounded-full animate-bar-2" style={{ height: '12px' }}></div>
        <div className="w-2 bg-[#2C7A7B] rounded-full animate-bar-3" style={{ height: '12px' }}></div>
      </div>
    </div>
  );
}