import React, {ChangeEvent} from 'react';

interface TrackProgressProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    left: number;
    right: number;
}

const TrackProgress = ({left, right, onChange}: TrackProgressProps) => {
    return (
        <div className={"flex"}>
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            <h2>{left}/{right}</h2>
        </div>
    );
};

export default TrackProgress;