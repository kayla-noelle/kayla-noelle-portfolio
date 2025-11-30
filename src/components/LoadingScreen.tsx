import { useState,useEffect } from 'react';
export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [text,setText] = useState("")
  const fullText = "<Hello World />";

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
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-sans font-bold">{text}<span className="animate-blink ml-1 text-blue-500 dark:text-blue-400"> | </span></div>
            <div className="w-[200px] h-[2px] bg-gray-300 dark:bg-gray-700 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-gradient-to-r from-yellow-200 via-orange-400 to-pink-600 shadow-[0_0_15px_#3b82f6] dark:shadow-[0_0_15px_#60a5fa] animate-loading-bar">
                </div>
                </div>
            </div>
    )
}