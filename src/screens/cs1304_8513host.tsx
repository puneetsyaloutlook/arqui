import { useState } from 'react';
import ContentStates from './cs1304_8513';

const SIZE: Record<string, [number, number]> = {"Chat History": [1000, 681], "Chat": [1000, 681], "Chat Summary": [1000, 681], "Collaborators 1": [1000, 681], "Actions": [1000, 681], "Deliverables": [1000, 681], "Variant7": [950, 704]};
const HOT: Record<string, [number, number, number, number, string][]> = {"Chat History": [[8, 0, 129, 48, "Chat"], [265, 0, 129, 48, "Chat Summary"], [394, 0, 129, 48, "Actions"], [523, 0, 129, 48, "Deliverables"], [651, 0, 129, 48, "Collaborators 1"]], "Chat": [[137, 0, 129, 48, "Chat History"], [265, 0, 129, 48, "Chat Summary"], [394, 0, 129, 48, "Actions"], [523, 0, 129, 48, "Deliverables"], [651, 0, 129, 48, "Collaborators 1"]], "Chat Summary": [[8, 0, 129, 48, "Chat"], [137, 0, 129, 48, "Chat History"], [394, 0, 129, 48, "Actions"], [523, 0, 129, 48, "Deliverables"], [651, 0, 129, 48, "Collaborators 1"]], "Collaborators 1": [[8, 0, 129, 48, "Chat"], [137, 0, 129, 48, "Chat History"], [265, 0, 129, 48, "Chat Summary"], [394, 0, 129, 48, "Actions"], [523, 0, 129, 48, "Deliverables"]], "Actions": [[8, 0, 129, 48, "Chat"], [137, 0, 129, 48, "Chat History"], [265, 0, 129, 48, "Chat Summary"], [523, 0, 129, 48, "Deliverables"], [651, 0, 129, 48, "Collaborators 1"]], "Deliverables": [[8, 0, 129, 48, "Chat"], [137, 0, 129, 48, "Chat History"], [265, 0, 129, 48, "Chat Summary"], [394, 0, 129, 48, "Actions"], [651, 0, 129, 48, "Collaborators 1"]], "Variant7": [[817, 32, 108, 40, "Deliverables"]]};

export function ContentHost({ x, y }: { x: number; y: number }) {
  const [view, setView] = useState('Chat');
  const [w, h] = SIZE[view] ?? SIZE.Chat;
  return (
    <div style={{ position: 'absolute', left: x, top: y, width: w, height: h }}>
      <ContentStates property1={view as never} className="absolute inset-0 size-full" />
      {(HOT[view] ?? []).map(([hx, hy, hw, hh, to], i) => (
        <button
          key={i}
          type="button"
          aria-label={to}
          className="absolute cursor-pointer border-0 bg-transparent p-0 hover:bg-white/5"
          style={{ left: hx, top: hy, width: hw, height: hh }}
          onClick={() => setView(to)}
        />
      ))}
    </div>
  );
}
