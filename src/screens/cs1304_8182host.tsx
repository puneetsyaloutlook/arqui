import { useState } from 'react';
import ContentStates from './cs1304_8182';

const SIZE: Record<string, [number, number]> = {"Chat History": [1000, 681], "Chat": [1001, 681], "Chat Summary": [1002, 681], "Collaborators 1": [1000, 681], "Actions": [1000, 681], "Deliverables": [1000, 681], "Variant7": [980, 601]};
const HOT: Record<string, [number, number, number, number, string][]> = {"Chat History": [[25, 0, 62, 48, "Chat"], [196, 0, 125, 48, "Chat Summary"], [321, 0, 151, 48, "Actions"], [472, 0, 110, 48, "Deliverables"], [582, 0, 118, 48, "Collaborators 1"]], "Chat": [[87, 0, 109, 48, "Chat History"], [196, 0, 125, 48, "Actions"], [321, 0, 151, 48, "Actions"], [472, 0, 110, 48, "Deliverables"], [582, 0, 118, 48, "Collaborators 1"]], "Chat Summary": [[25, 0, 62, 48, "Chat"], [87, 0, 109, 48, "Chat History"], [321, 0, 154, 48, "Actions"], [475, 0, 110, 48, "Actions"], [585, 0, 118, 48, "Collaborators 1"]], "Collaborators 1": [[25, 0, 62, 48, "Chat"], [87, 0, 109, 48, "Chat History"], [196, 0, 125, 48, "Chat Summary"], [321, 0, 151, 48, "Actions"], [472, 0, 110, 48, "Deliverables"]], "Actions": [[25, 0, 62, 48, "Chat"], [87, 0, 109, 48, "Chat History"], [196, 0, 125, 48, "Chat Summary"], [472, 0, 110, 48, "Deliverables"], [582, 0, 118, 48, "Collaborators 1"], [29, 258, 211, 20, "Deliverables"], [29, 448, 211, 20, "Deliverables"], [29, 638, 211, 20, "Deliverables"]], "Deliverables": [[25, 0, 62, 48, "Chat"], [87, 0, 109, 48, "Chat History"], [196, 0, 125, 48, "Chat Summary"], [321, 0, 151, 48, "Actions"], [582, 0, 118, 48, "Collaborators 1"], [760, 211, 82, 40, "Variant7"]], "Variant7": [[875, 9, 92, 40, "Deliverables"]]};

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
