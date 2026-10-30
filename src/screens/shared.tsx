import { A } from '../assets/aadmin';


export function Group605({ className }: { className?: string }) {
  return (
    <div className={className || "h-[37px] relative w-[93px]"} data-node-id="754:9341">
      <div className="absolute inset-[2.7%_0_0_61.29%]" data-node-id="754:9337" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
      </div>
      <button className="absolute block cursor-pointer inset-[0_61.29%_2.7%_0]" data-node-id="754:9339" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
      </button>
    </div>
  );
}

export function Frame383({ className }: { className?: string }) {
  return (
    <div className={className || "h-[48px] relative w-[86px]"} data-node-id="727:829">
      <p className="[word-break:break-word] absolute font-logo leading-[normal] left-0 not-italic text-[#b4b4b4] text-[40px] top-0 whitespace-nowrap" data-node-id="727:828">
        ARQUI
      </p>
    </div>
  );
}

type CheckboxesDarkProps = {
  className?: string;
  state?: "Enabled" | "Disabled";
  type?: boolean;
};

export function CheckboxesDark({ className, state = "Enabled", type = true }: CheckboxesDarkProps) {
  if (type && state === "Disabled") {
    return (
      <div className={className || "content-stretch flex flex-col items-center justify-center opacity-38 p-[4px] relative"} data-node-id="879:594" data-name="Type=Selected, State=Disabled">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[100px] shrink-0" data-node-id="879:595" data-name="state-layer">
          <div className="bg-[#e6e0e9] relative rounded-[2px] shrink-0 size-[18px]" data-node-id="879:596" data-name="container" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="879:597" data-name="Icons/check_small">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIconsCheckSmall1} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "content-stretch cursor-pointer flex flex-col items-center justify-center p-[4px] relative"} data-node-id="879:590" data-name="Type=Selected, State=Enabled">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[100px] shrink-0" data-node-id="879:591" data-name="state-layer">
        <div className="bg-[#d0bcff] relative rounded-[2px] shrink-0 size-[18px]" data-node-id="879:592" data-name="container" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="879:593" data-name="Icons/check_small">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIconsCheckSmall} />
        </div>
      </div>
    </button>
  );
}

type BuildingBlocksCardStatesFilledDarkProps = {
  className?: string;
  state?: "Enabled";
};

export function BuildingBlocksCardStatesFilledDark({ className, state = "Enabled" }: BuildingBlocksCardStatesFilledDarkProps) {
  return <div className={className || "bg-[#36343b] cursor-pointer overflow-clip relative rounded-[12px] size-[360px]"} data-node-id="765:2507" />;
}

type LinearDeterminateProps = {
  className?: string;
  progress?: "0" | "10" | "30" | "50" | "80" | "100";
};

export function LinearDeterminate({ className, progress = "0" }: LinearDeterminateProps) {
  const is10 = progress === "10";
  const is100 = progress === "100";
  const is30 = progress === "30";
  const is30Or50Or80Or100 = ["30", "50", "80", "100"].includes(progress);
  const is50 = progress === "50";
  const is50Or80Or100 = ["50", "80", "100"].includes(progress);
  const is80 = progress === "80";
  return (
    <div className={className || "h-[12px] relative w-[404px]"} id={is100 ? "node-765_2343" : is80 ? "node-765_2330" : is50 ? "node-765_2317" : is30 ? "node-765_2306" : is10 ? "node-765_2297" : "node-765_2291"}>
      {["10", "30", "50", "80", "100"].includes(progress) && (
        <div className={`-translate-y-1/2 absolute content-stretch flex items-center left-0 top-1/2 ${is100 ? "px-[2px] right-0" : is80 ? "pl-[2px] pr-[6px] right-[18.81%]" : is50 ? "pl-[2px] pr-[6px] right-[48.51%]" : is30 ? "pl-[2px] pr-[6px] right-[69.06%]" : "pl-[2px] pr-[6px] right-[88.12%]"}`} id={is100 ? "node-765_2344" : is80 ? "node-765_2331" : is50 ? "node-765_2318" : is30 ? "node-765_2307" : "node-765_2298"} data-name="Active indicator">
          <div className={`h-[12px] relative ${is30Or50Or80Or100 ? "shrink-0 w-[40px]" : "flex-[1_0_0] min-w-px"}`} id={is100 ? "node-765_2345" : is80 ? "node-765_2332" : is50 ? "node-765_2319" : is30 ? "node-765_2308" : "node-765_2299"} data-name="Segment - start">
            <div className="absolute inset-[0_-5%]">
              <img alt="" className="block max-w-none size-full" src={is30Or50Or80Or100 ? A.imgSegmentStart1 : A.imgSegmentStart} />
            </div>
          </div>
          {is50Or80Or100 && (
            <div className="flex-[1_0_0] h-[12px] min-w-px relative" id={is100 ? "node-765_2347" : is80 ? "node-765_2334" : "node-765_2321"} data-name="Segment">
              <div className={`absolute ${is100 ? "inset-[0_-0.63%]" : is80 ? "inset-[0_-0.83%]" : "inset-[0_-1.67%]"}`}>
                <img alt="" className="block max-w-none size-full" src={is100 ? A.imgSegment2 : is80 ? A.imgSegment1 : A.imgSegment} />
              </div>
            </div>
          )}
          {is30Or50Or80Or100 && (
            <div className={`h-[12px] relative ${is50Or80Or100 ? "shrink-0 w-[40px]" : "flex-[1_0_0] min-w-px"}`} id={is100 ? "node-765_2349" : is80 ? "node-765_2336" : is50 ? "node-765_2323" : "node-765_2310"} data-name="Segment - end">
              <div className={`absolute ${is50Or80Or100 ? "inset-[0_-5%]" : "inset-[0_-2.6%]"}`}>
                <img alt="" className="block max-w-none size-full" src={["80", "100"].includes(progress) ? A.imgSegmentEnd2 : is50 ? A.imgSegmentEnd1 : A.imgSegmentEnd} />
              </div>
            </div>
          )}
        </div>
      )}
      {["0", "10", "30", "50", "80"].includes(progress) && (
        <div className={`-translate-y-1/2 absolute content-stretch flex items-center right-0 top-1/2 ${is80 ? "left-[81.19%]" : is50 ? "left-[51.49%]" : is30 ? "left-[30.94%]" : is10 ? "left-[11.88%]" : "left-0 pl-[2px]"}`} id={is80 ? "node-765_2338" : is50 ? "node-765_2325" : is30 ? "node-765_2312" : is10 ? "node-765_2301" : "node-765_2292"} data-name="track-and-stop">
          <div className="flex-[1_0_0] h-[12px] min-w-px relative" id={is80 ? "node-765_2339" : is50 ? "node-765_2326" : is30 ? "node-765_2313" : is10 ? "node-765_2302" : "node-765_2293"} data-name="Track">
            <div className="-translate-y-1/2 absolute bg-[#eaddff] h-[4px] left-0 right-0 rounded-[8px] top-1/2" id={is80 ? "node-765_2340" : is50 ? "node-765_2327" : is30 ? "node-765_2314" : is10 ? "node-765_2303" : "node-765_2294"} data-name="track" />
          </div>
          <div className="-translate-y-1/2 absolute right-0 size-[4px] top-1/2" id={is80 ? "node-765_2341" : is50 ? "node-765_2328" : is30 ? "node-765_2315" : is10 ? "node-765_2304" : "node-765_2295"} data-name="Stop">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#6750a4] left-1/2 rounded-[26px] size-[4px] top-1/2" id={is80 ? "node-765_2342" : is50 ? "node-765_2329" : is30 ? "node-765_2316" : is10 ? "node-765_2305" : "node-765_2296"} data-name="Stop shape" />
          </div>
        </div>
      )}
    </div>
  );
}

type BuildingBlocksCardStatesElevatedDarkProps = {
  className?: string;
  state?: "Enabled";
};

export function BuildingBlocksCardStatesElevatedDark({ className, state = "Enabled" }: BuildingBlocksCardStatesElevatedDarkProps) {
  return <div className={className || "bg-[#1d1b20] cursor-pointer overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15),0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[360px]"} data-node-id="765:2521" />;
}

type RadioButtonsDarkProps = {
  className?: string;
  selected?: boolean;
  state?: "Enabled" | "Pressed";
};

export function RadioButtonsDark({ className, selected = false, state = "Pressed" }: RadioButtonsDarkProps) {
  if (!selected && state === "Enabled") {
    return (
      <div className={className || "content-stretch flex items-center justify-center relative size-[48px]"} data-node-id="759:1184" data-name="Selected=false, State=Enabled">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="759:1185" data-name="container">
          <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="759:1186" data-name="state-layer">
            <div className="relative shrink-0 size-[24px]" data-node-id="759:1187" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Enabled") {
    return (
      <button className={className || "content-stretch cursor-pointer flex items-center justify-center relative size-[48px]"} data-node-id="759:1204" data-name="Selected=true, State=Enabled">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="759:1205" data-name="container">
          <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="759:1206" data-name="state-layer">
            <div className="relative shrink-0 size-[24px]" data-node-id="759:1207" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon2} />
            </div>
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "content-stretch cursor-pointer flex items-center justify-center relative size-[48px]"} data-node-id="759:1172" data-name="Selected=false, State=Pressed">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="759:1173" data-name="container">
        <div className="bg-[rgba(208,188,255,0.12)] content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="759:1174" data-name="state-layer">
          <div className="relative shrink-0 size-[24px]" data-node-id="759:1175" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

