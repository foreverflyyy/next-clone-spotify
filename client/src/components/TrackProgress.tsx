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
                min={left}
                max={right}
                value={left}
                onChange={e => onChange(e)}
            />
            <h2>{left}/{right}</h2>
        </div>
    );
};

export default TrackProgress;