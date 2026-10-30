import { useState } from 'react';
import ContentStates from './cs1434_13582';

const SIZE: Record<string, [number, number]> = {"Chat History": [1000, 681], "Chat Summary": [1000, 681], "Collaborators 1": [1000, 681], "Variant8": [1000, 681], "Actions": [1000, 681], "Deliverables": [1000, 681], "Variant7": [950, 704], "Chat": [1000, 681]};
const HOT: Record<string, [number, number, number, number, string][]> = {"Chat History": [[0, 0, 145, 48, "Chat"], [339, 0, 109, 48, "Chat Summary"], [448, 0, 125, 48, "Actions"], [573, 0, 118, 48, "Variant8"]], "Chat Summary": [[0, 0, 145, 48, "Chat"], [277, 0, 62, 48, "Chat History"], [448, 0, 125, 48, "Actions"], [573, 0, 118, 48, "Variant8"]], "Collaborators 1": [[743, 198, 90, 40, "Variant7"], [743, 320, 90, 40, "Variant7"]], "Variant8": [[0, 0, 145, 48, "Chat"], [277, 0, 62, 48, "Chat History"], [339, 0, 109, 48, "Chat Summary"], [448, 0, 125, 48, "Actions"]], "Actions": [[0, 0, 145, 48, "Chat"], [277, 0, 62, 48, "Chat History"], [339, 0, 109, 48, "Chat Summary"], [573, 0, 118, 48, "Variant8"]], "Deliverables": [[26, 344, 211, 20, "Collaborators 1"], [26, 588, 211, 20, "Collaborators 1"]], "Variant7": [[817, 32, 108, 40, "Collaborators 1"]], "Chat": [[277, 0, 62, 48, "Chat History"], [339, 0, 109, 48, "Chat Summary"], [448, 0, 125, 48, "Actions"], [573, 0, 118, 48, "Variant8"]]};

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
