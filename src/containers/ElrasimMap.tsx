'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Map from '@/components/Map';

export default function ElrasimMap() {
  const [dimensions, setDimensions] = useState({ width: '', height: '' });
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (ref !== null) {
      setDimensions({
        width: `${(ref.current?.clientWidth ?? 0) - 4}px`,
        height: `${(ref.current?.clientHeight ?? 0) - 4}px`,
      })
    }
  }, [])

  return (
    <div ref={ref} className="flex-1">
      <Map width={dimensions.width} height={dimensions.height} />
    </div>
  );
}