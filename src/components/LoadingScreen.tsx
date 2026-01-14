import { useState,useEffect } from 'react';
export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [text,setText] = useState("")
  const fullText = "Brewing something nice ☕️";

  useEffect(() =>{
    let index = 0;
    const interval =setInterval(() => {
        setText(fullText.substring(0, index));
        index++;
        
        if(index > fullText.length){
            clearInterval(interval);

            setTimeout (() =>{
                onComplete();
            }, 1000);
        }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);
    return (
        <div className="fixed inset-0 z-50 bg-stone-50 text-[#1c1c1c] flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-abril">{text}<span className="animate-blink ml-1 text-[#1c1c1c]"> | </span></div>
            <div className="w-[200px] h-[2px] bg-gray-300 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-gradient-to-r from-sky-300 via-violet-400 to-fuchsia-400 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                </div>
                </div>
            </div>
    )
}