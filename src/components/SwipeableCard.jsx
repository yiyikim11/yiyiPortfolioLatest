import { useState, useRef } from 'react';

export default function SwipeableCards() {
  const [cards, setCards] = useState([
    { id: 1, image: './card/img1.jpg', color: 'bg-none' },
    { id: 2, image: './card/img2.jpg', color: 'bg-none' },
    { id: 3, image: './card/img3.jpg', color: 'bg-none' },
    { id: 4, image: './card/img4.jpg', color: 'bg-none'  },
    { id: 5, image: './card/img5.jpg', color: 'bg-none'  },
    { id: 6, image: './card/img6.jpg', color: 'bg-none' },
  ]);
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const swipeThreshold = 100; // Minimum distance to swipe before card moves to back
  
  const topCardRef = useRef(null);
  
  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
    setCurrentOffset(0);
    
    // Prevent default behavior on mobile
    if (e.cancelable) e.preventDefault();
  };
  
  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const newOffset = clientX - dragStartX;
    setCurrentOffset(newOffset);
    
    // Prevent default behavior on mobile
    if (e.cancelable) e.preventDefault();
  };
  
  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // If swiped far enough, move the first card to the back
    if (Math.abs(currentOffset) > swipeThreshold) {
      const direction = currentOffset > 0 ? 1 : -1;
      cycleFrontCardToBack(direction);
    } else {
      // Reset position if not swiped far enough
      setCurrentOffset(0);
    }
  };
  
  const cycleFrontCardToBack = (direction = 1) => {
    setCards(prevCards => {
      const newCards = [...prevCards];
      const firstCard = newCards.shift();
      newCards.push(firstCard);
      return newCards;
    });
    setCurrentOffset(0);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      cycleFrontCardToBack(-1);
    } else if (e.key === 'ArrowRight') {
      cycleFrontCardToBack(1);
    }
  };

  // Manual swipe buttons for demonstration
  const handleSwipeLeft = () => {
    cycleFrontCardToBack(-1);
  };

  const handleSwipeRight = () => {
    cycleFrontCardToBack(1);
  };

  // Calculate the staggered offset for cards
  const getCardStyle = (index) => {
    // Base positioning for all cards
    const baseStyle = {
      left: '50%',
      top: '50%',
      zIndex: cards.length - index,
      cursor: index === 0 ? 'grab' : 'default',
      transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    };
    
    // Additional positioning for different cards
    if (index === 0) {
      // Top card - allow movement and interaction
      return {
        ...baseStyle,
        transform: `translate(-50%, -50%) translateX(${currentOffset - 15}px) rotate(${currentOffset * 0.05}deg)`,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
      };
    }
    
    // Card staggering - we want to show more of the cards below
    // The further down the stack, the more offset
    const xOffset = index * 6-4; // More pronounced horizontal offset
    const yOffset = index * 4; // More visible vertical offset
    const scaleReduction = 1 - (index * 0.05); // Less scaling to keep more visible
    const rotationDeg = index * -1.5; // Slight rotation
    
    return {
      ...baseStyle,
      transform: `translate(-50%, -50%) translateX(${xOffset}px) translateY(${yOffset}px) scale(${scaleReduction}) rotate(${rotationDeg}deg)`,
      boxShadow: `0 ${5 + index * 2}px ${10 + index * 3}px rgba(0, 0, 0, ${0.3 - index * 0.05})`,
    };
  };

  return (
    <div className="flex flex-col p-4 w-50 mx-auto">
      <div className="w-30 relative h-30  perspective-1000">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={index === 0 ? topCardRef : null}
            className={`absolute w-32 h-32 rounded-xl flex items-center justify-center text-white text-3xl font-bold border-2 border-white/10 backdrop-blur-sm ${card.color}`}
            style={getCardStyle(index)}
            onMouseDown={index === 0 ? handleDragStart : undefined}
            onTouchStart={index === 0 ? handleDragStart : undefined}
            onMouseMove={index === 0 ? handleDragMove : undefined}
            onTouchMove={index === 0 ? handleDragMove : undefined}
            onMouseUp={index === 0 ? handleDragEnd : undefined}
            onTouchEnd={index === 0 ? handleDragEnd : undefined}
            onMouseLeave={index === 0 && isDragging ? handleDragEnd : undefined}
            onKeyDown={index === 0 ? handleKeyDown : undefined}
            tabIndex={index === 0 ? 0 : -1}
          >
            <img
  src={card.image}
  alt="Card"
  className="w-full h-full object-cover rounded-xl"
/>

          </div>
        ))}
      </div>
      
      <div className="flex gap-4">
      </div>
    </div>
  );
}