import React from 'react';
import {IconComponent} from "@/components";

interface StarRatingProps {
    rating: any;
    maxStars?: number;
}

export function Rating({rating, maxStars = 5}: StarRatingProps) {
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
        stars.push(i < rating);
    }

    return (
        <div className={"flex items-center gap-0.5"}>
            {stars.map((star, index) => (
                <IconComponent key={index} iconName={"star-rating"}
                               className={`fill-[#CDCDCD] ${star ? "fill-yellow-500" : ""}`} width={16}
                               height={16}/>
            ))}
            <span
                style={{
                    fontSize: '12px',
                    color: '#7E7E7E',
                    marginLeft: '4px',
                    marginTop: '-4px',
                    userSelect: 'none',
                }}
            >
        ({parseFloat(rating).toFixed(1)})
      </span>
        </div>
    );
}
