import { useRef } from 'react';

export const useSwipe = (onSwipe) => {
    const touchStartX = useRef(null);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(deltaX) > 50) {
            onSwipe(deltaX > 0 ? 'right' : 'left');
        }
        
        touchStartX.current = null;
    };

    return {
        swipeHandlers: {
            onTouchStart: handleTouchStart,
            onTouchEnd: handleTouchEnd
        }
    };
};