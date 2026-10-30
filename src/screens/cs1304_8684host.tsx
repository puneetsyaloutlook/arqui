import { useState } from 'react';
import ContentStates from './cs1304_8684';

const SIZE: Record<string, [number, number]> = {"Chat History": [1000, 800], "Variant8": [1000, 760], "Chat": [1000, 760], "Chat Summary": [1087, 800], "Collaborators 1": [1000, 800], "Actions": [1000, 800], "Deliverables": [1000, 800], "Variant7": [950, 704]};
const HOT: Record<string, [number, number, number, number, string][]> = {"Chat History": [[8, 0, 104, 48, "Chat"], [112, 0, 62, 48, "Variant8"], [283, 0, 125, 48, "Chat Summary"], [408, 0, 151, 48, "Actions"], [559, 0, 110, 48, "Deliverables"], [669, 0, 118, 48, "Collaborators 1"]], "Variant8": [[8, 0, 104, 48, "Chat"], [174, 0, 109, 48, "Chat History"], [283, 0, 125, 48, "Chat Summary"], [408, 0, 151, 48, "Actions"], [559, 0, 110, 48, "Deliverables"], [669, 0, 118, 48, "Collaborators 1"]], "Chat": [[112, 0, 62, 48, "Variant8"], [174, 0, 109, 48, "Chat History"], [283, 0, 125, 48, "Chat Summary"], [408, 0, 151, 48, "Actions"], [559, 0, 110, 48, "Deliverables"], [669, 0, 118, 48, "Collaborators 1"]], "Chat Summary": [[8, 0, 104, 48, "Chat"], [112, 0, 62, 48, "Variant8"], [174, 0, 109, 48, "Chat History"], [408, 0, 151, 48, "Actions"], [559, 0, 110, 48, "Deliverables"], [669, 0, 118, 48, "Collaborators 1"]], "Collaborators 1": [[8, 0, 104, 48, "Chat"], [112, 0, 62, 48, "Variant8"], [174, 0, 109, 48, "Chat History"], [283, 0, 125, 48, "Chat Summary"], [408, 0, 151, 48, "Actions"], [559, 0, 110, 48, "Deliverables"]], "Actions": [[8, 0, 104, 48, "Chat"], [112, 0, 62, 48, "Variant8"], [174, 0, 109, 48, "Chat History"], [283, 0, 125, 48, "Chat Summary"], [559, 0, 110, 48, "Deliverables"], [669, 0, 118, 48, "Collaborators 1"]], "Deliverables": [[743, 211, 82, 40, "Variant7"], [8, 0, 104, 48, "Chat"], [112, 0, 62, 48, "Variant8"], [174, 0, 109, 48, "Chat History"], [283, 0, 125, 48, "Chat Summary"], [408, 0, 151, 48, "Actions"], [669, 0, 118, 48, "Collaborators 1"]], "Variant7": [[817, 32, 108, 40, "Deliverables"]]};

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
