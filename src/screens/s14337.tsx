import { A } from '../assets/a14337';
import { ContentHost } from './cs1304_8513host';


type Component12Props = {
  className?: string;
  property1?: "Group 886";
};

function Component12({ className, property1 = "Group 886" }: Component12Props) {
  return (
    <div className={className || "h-[41px] relative w-[147px]"} data-node-id="1340:4908">
      <button className="absolute bg-[#49454f] block cursor-pointer inset-[9.76%_66.67%_51.22%_0] rounded-bl-[16px] rounded-tl-[16px]" data-node-id="1340:4873" data-name="Track" />
      <div className="absolute bg-[#49454f] inset-[9.76%_33.33%_51.22%_33.33%]" data-node-id="1340:4874" data-name="Track" />
      <div className="absolute flex inset-[9.76%_0_51.22%_66.67%] items-center justify-center" data-node-id="1340:4875" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <button className="bg-[#49454f] block cursor-pointer relative rounded-bl-[16px] rounded-tl-[16px] size-full" data-name="Track" />
        </div>
      </div>
      <div className="absolute inset-[24.39%_93.2%_65.85%_4.08%]" data-node-id="1340:4876" data-name="Dot">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDot} />
      </div>
      <div className="absolute inset-[24.39%_48.98%_65.85%_48.3%]" data-node-id="1340:4877" data-name="Dot">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDot} />
      </div>
      <div className="absolute inset-[24.39%_4.08%_65.85%_93.2%]" data-node-id="1340:4878" data-name="Dot">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDot} />
      </div>
      <div className="absolute bg-[var(--white,white)] inset-[4.88%_48.98%_46.34%_48.3%] rounded-[4px]" data-node-id="1340:4879" data-name="State-layer" />
      <button className="[word-break:break-word] absolute block cursor-pointer font-roboto font-normal inset-[60.98%_88.44%_0_0] leading-[0] text-[#d0bcff] text-[12px] text-left whitespace-nowrap" data-node-id="1340:4880" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">NO</p>
      </button>
      <button className="[word-break:break-word] absolute block cursor-pointer font-roboto font-normal inset-[60.98%_0_0_85.03%] leading-[0] text-[#d0bcff] text-[12px] text-right whitespace-nowrap" data-node-id="1340:4883" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">YES</p>
      </button>
      <p className="[word-break:break-word] absolute font-roboto font-normal inset-[60.98%_27.21%_0_27.21%] leading-[16px] text-[12px] text-[color:var(--white,white)] text-center whitespace-nowrap" data-node-id="1340:4884" style={{ fontVariationSettings: '"wdth" 100' }}>
        SOMEWHAT
      </p>
    </div>
  );
}

type SearchBarDarkProps = {
  className?: string;
  placeholderText?: string;
  show1stTrailingIcon?: boolean;
  show2ndTrailingIcon?: boolean;
  showAvatar?: "False";
  state?: "enabled" | "pressed";
};

function SearchBarDark({ className, placeholderText = "Hinted search text", show1stTrailingIcon = true, show2ndTrailingIcon = false, showAvatar = "False", state = "pressed" }: SearchBarDarkProps) {
  const isEnabledAndFalse = state === "enabled" && showAvatar === "False";
  return (
    <div className={className || "bg-[#2b2930] content-stretch flex h-[56px] items-center max-w-[720px] min-w-[360px] overflow-clip relative rounded-[28px] w-[360px]"} id={isEnabledAndFalse ? "node-906_1696" : "node-906_1679"}>
      <div className={`content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-w-px p-[4px] relative ${isEnabledAndFalse ? "cursor-pointer" : "bg-[rgba(230,224,233,0.08)]"}`} id={isEnabledAndFalse ? "node-906_1697" : "node-906_1680"} data-name="state-layer">
        {state === "pressed" && showAvatar === "False" && (
          <div className="absolute bottom-[-45px] flex h-[125px] items-center justify-center left-0 w-[178px]" data-node-id="906:1681">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[125px] relative w-[178px]" data-name="Ripple">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRipple} />
              </div>
            </div>
          </div>
        )}
        <div className={`content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px] ${isEnabledAndFalse ? "" : "cursor-pointer"}`} id={isEnabledAndFalse ? "node-906_1698" : "node-906_1682"} data-name="Leading-icon">
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" id={isEnabledAndFalse ? "node-I906_1698-51525_5137" : "node-I906_1682-51525_5137"} data-name="container">
            <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" id={isEnabledAndFalse ? "node-I906_1698-51525_5138" : "node-I906_1682-51525_5138"} data-name="state-layer">
              <div className="relative shrink-0 size-[24px]" id={isEnabledAndFalse ? "node-I906_1698-51525_5139" : "node-I906_1682-51525_5139"} data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" id={isEnabledAndFalse ? "node-906_1699" : "node-906_1683"} data-name="Content">
          <div className="[word-break:break-word] flex flex-col font-roboto font-normal justify-center leading-[0] relative shrink-0 text-[#cac4d0] text-[16px] tracking-[0.5px] whitespace-nowrap" data-node-id="906:1684" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px]">{placeholderText}</p>
          </div>
        </div>
        <div className={`content-stretch flex items-center justify-end relative shrink-0 ${isEnabledAndFalse ? "" : "cursor-pointer"}`} id={isEnabledAndFalse ? "node-906_1701" : "node-906_1685"} data-name="Trailing-Elements">
          {show1stTrailingIcon && (
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="906:1686" data-name="1st trailing-icon">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I906:1686;51525:5137" data-name="container">
                <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I906:1686;51525:5138" data-name="state-layer">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I906:1686;51525:5139" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon1} />
                  </div>
                </div>
              </div>
            </div>
          )}
          {show2ndTrailingIcon && (
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="906:1687" data-name="2nd trailing-icon">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I906:1687;51525:5137" data-name="container">
                <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I906:1687;51525:5138" data-name="state-layer">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I906:1687;51525:5139" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon2} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Group605({ className }: { className?: string }) {
  return (
    <div className={className || "h-[27px] relative w-[69px]"} data-node-id="1305:11698">
      <div className="absolute inset-[0_4.35%_11.11%_60.87%]" data-node-id="1305:11696" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
      </div>
      <button className="absolute block cursor-pointer inset-[0_65.22%_11.11%_0]" data-node-id="1305:11697" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
      </button>
    </div>
  );
}

function Frame383({ className }: { className?: string }) {
  return (
    <div className={className || "h-[48px] relative w-[86px]"} data-node-id="727:829">
      <p className="[word-break:break-word] absolute font-logo leading-[normal] left-0 not-italic text-[#b4b4b4] text-[40px] top-0 whitespace-nowrap" data-node-id="727:828">
        ARQUI
      </p>
    </div>
  );
}

type SectionNavProps = {
  className?: string;
  property1?: "Scenario planning";
};

function SectionNav({ className, property1 = "Scenario planning" }: SectionNavProps) {
  return (
    <div className={className || "h-[956px] relative w-[242px]"} data-node-id="1305:11431">
      <div className="absolute bg-[#141218] h-[956px] left-0 top-0 w-[242px]" data-node-id="1305:11371" />
      <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[189px] px-[8px] size-[48px] top-[15px]" data-node-id="1333:16143" data-name="Icon button-dark">
        <div className="border border-[#4a4458] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1333:16143;51525:5077" data-name="container">
          <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1333:16143;51525:5078" data-name="state-layer">
            <div className="relative shrink-0 size-[24px]" data-node-id="I1333:16143;51525:5079" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon3} />
            </div>
          </div>
        </div>
      </div>
      <Frame383 className="absolute h-[48px] left-[21px] top-[15px] w-[86px]" />
      <a className="absolute contents cursor-pointer left-[21px] top-[233px]" data-node-id="1305:11373">
        <div className="absolute bg-[#141218] inset-[24.37%_10.33%_53.66%_8.68%] overflow-clip rounded-[34px]" data-node-id="1305:11374" data-name="Building blocks/Card states/Outlined - dark" />
        <div className="absolute flex inset-[26.78%_61.98%_67.78%_16.94%] items-center justify-center" data-node-id="1305:11375" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector2} />
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-[color:var(--white,white)] top-[323px] tracking-[0.15px] whitespace-nowrap" data-node-id="1305:11376" style={{ fontVariationSettings: '"wdth" 100' }}>
          Current work
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[35px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[353px] w-[157px]" data-node-id="1305:11377" style={{ fontVariationSettings: '"wdth" 100' }}>
          Navigate operational complexity, current priorities, and ongoing challenges.
        </p>
      </a>
      <a className="absolute contents cursor-pointer left-[21px] top-[697px]" data-node-id="1305:11378">
        <div className="absolute bg-[#141218] inset-[72.91%_10.33%_3.66%_8.68%] overflow-clip rounded-[34px]" data-node-id="1305:11379" data-name="Building blocks/Card states/Outlined - dark" />
        <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-white top-[787px] tracking-[0.15px] whitespace-nowrap" data-node-id="1305:11380" style={{ fontVariationSettings: '"wdth" 100' }}>
          Organisational views
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[81px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[819px] w-[168px]" data-node-id="1305:11381" style={{ fontVariationSettings: '"wdth" 100' }}>
          Review the organsation’s digital twin to see insights and opportunities for improving how the organisation works.
        </p>
        <div className="absolute inset-[75.1%_63.22%_18.93%_16.94%]" data-node-id="1305:11382" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector3} />
        </div>
      </a>
      <div className="absolute contents left-[21px] top-[461px]" data-node-id="1305:11383">
        <div className="absolute bg-[#06070a] inset-[48.22%_0_28.97%_8.68%] overflow-clip rounded-bl-[34px] rounded-tl-[34px]" data-node-id="1305:11384" data-name="Building blocks/Card states/Outlined - dark">
          <div className="absolute bg-[rgba(230,224,233,0.12)] inset-0" data-node-id="I1305:11384;52350:28403" data-name="State-layer" />
        </div>
        <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[#00c2a7] text-[18px] top-[545px] tracking-[0.15px] whitespace-nowrap" data-node-id="1305:11385" style={{ fontVariationSettings: '"wdth" 100' }}>
          Scenario planning
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[76px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[575px] w-[157px]" data-node-id="1305:11386" style={{ fontVariationSettings: '"wdth" 100' }}>
          Test strategic ideas, assess risks and opportunities, and visualise the implications of different choices.
        </p>
        <div className="absolute inset-[50.42%_57.85%_44.56%_16.94%]" data-node-id="1305:11387" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector4} />
        </div>
      </div>
      <a className="absolute contents cursor-pointer left-[21px] top-[105px]" data-node-id="1305:11388">
        <div className="absolute contents left-[21px] top-[105px]" data-node-id="1305:11389">
          <div className="absolute bg-[#141218] cursor-pointer inset-[10.98%_10.33%_77.51%_8.68%] overflow-clip rounded-[34px]" data-node-id="1305:11390" data-name="Building blocks/Card states/Outlined - dark" />
          <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-[color:var(--white,white)] top-[174px] tracking-[0.15px] whitespace-nowrap" data-node-id="1305:11391" style={{ fontVariationSettings: '"wdth" 100' }}>
            Daily dashboard
          </p>
        </div>
        <div className="absolute inset-[12.45%_68.6%_82.53%_18.18%]" data-node-id="1305:11392" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector5} />
        </div>
      </a>
    </div>
  );
}

export default function Root() {
  return (
    <div className="bg-[#202125] relative size-full" data-node-id="4801:14337" data-name="93">
      <div className="absolute bg-gradient-to-b from-[#1a1b1f] from-[6.132%] h-[273px] left-[728px] to-[#202125] top-[306px] w-[1000px]" data-node-id="4801:14338" />
      <div className="absolute bg-[#141218] h-[956px] left-0 top-0 w-[242px]" data-node-id="4801:14339" />
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[265px] text-[#ed00b8] text-[28px] top-[27px] whitespace-nowrap" data-node-id="4801:14340" style={{ fontVariationSettings: '"wdth" 100' }}>
        Scenario planning
      </p>
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[728px] text-[#00c2a7] text-[16px] top-[108px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14341" style={{ fontVariationSettings: '"wdth" 100' }}>{`Quantum computing's disruptive potential`}</p>
      <p className="[word-break:break-word] absolute font-roboto font-normal h-[57px] leading-[20px] left-[729px] text-[#acacac] text-[14px] top-[141px] tracking-[0.25px] w-[708px]" data-node-id="4801:14342" style={{ fontVariationSettings: '"wdth" 100' }}>{`Research from MIT suggests quantum computing algorithms could optimise energy distribution within smart grids, potentially reducing transmission losses by 15%. This breakthrough, expected within the next 5 years, could significantly impact Acme's grid management efficiency and competitiveness.`}</p>
      <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[729px] overflow-clip rounded-[8px] top-[213px]" data-node-id="4801:14343" data-name="Input chip-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14343;53923:29048" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14343;53923:29049" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14343;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16px]">SELF-GENERATED</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[896px] overflow-clip rounded-[8px] top-[213px]" data-node-id="4801:14344" data-name="Input chip-dark">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14344;53923:29057" data-name="state-layer">
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14344;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[681px] left-[728px] top-[257px] w-[1000px]" data-node-id="4801:14345" data-name="Content States">
        <div className="absolute contents left-0 top-0" data-node-id="I4801:14345;1304:8523">
          <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-[8px] top-0 w-[772px]" data-node-id="I4801:14345;1304:8525" data-name="Tabs-dark">
            <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-node-id="I4801:14345;1304:8525;54563:40455" data-name="Tab group">
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" data-node-id="I4801:14345;1304:8525;54563:40456" data-name="Tab 1">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I4801:14345;1304:8525;54563:40456;54563:40740" data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I4801:14345;1304:8525;54563:40456;54563:40741" data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#ccc2dc] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14345;1304:8525;54563:40456;54563:40742" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">{`Chat `}</p>
                    </div>
                  </div>
                  <div className="absolute bg-[#ccc2dc] bottom-0 h-[2px] left-0 right-0" data-node-id="I4801:14345;1304:8525;54563:40456;54563:40744" data-name="Indicator" />
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" data-node-id="I4801:14345;1304:8525;54563:40457" data-name="Tab 2">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I4801:14345;1304:8525;54563:40457;54563:40769" data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I4801:14345;1304:8525;54563:40457;54563:40770" data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14345;1304:8525;54563:40457;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat history</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" data-node-id="I4801:14345;1304:8525;54563:40458" data-name="Tab 3">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I4801:14345;1304:8525;54563:40458;54563:40769" data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I4801:14345;1304:8525;54563:40458;54563:40770" data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14345;1304:8525;54563:40458;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat summary</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" data-node-id="I4801:14345;1304:8525;54563:40459" data-name="Tab 4">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I4801:14345;1304:8525;54563:40459;54563:40769" data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I4801:14345;1304:8525;54563:40459;54563:40770" data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14345;1304:8525;54563:40459;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Suggested actions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" data-node-id="I4801:14345;1304:8525;54563:40460" data-name="Tab 5">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I4801:14345;1304:8525;54563:40460;54563:40769" data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I4801:14345;1304:8525;54563:40460;54563:40770" data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14345;1304:8525;54563:40460;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Deliverables</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" data-node-id="I4801:14345;1304:8525;54847:25133" data-name="Tab 6">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I4801:14345;1304:8525;54847:25133;54563:40769" data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I4801:14345;1304:8525;54847:25133;54563:40770" data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14345;1304:8525;54847:25133;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Collaborators</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-full" data-node-id="I4801:14345;1304:8525;54563:40461" data-name="Divider">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
            </div>
          </div>
          <div className="absolute h-0 left-0 top-[49px] w-[1000px]" data-node-id="I4801:14345;1304:8524">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={A.imgLine198} />
            </div>
          </div>
        </div>
        <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-0 rounded-tl-[4px] rounded-tr-[4px] top-[625px] w-[702px]" data-node-id="I4801:14345;1304:8526" data-name="Text field-dark">
          <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I4801:14345;1304:8526;52798:26685" data-name="text field">
            <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I4801:14345;1304:8526;52798:26686" data-name="state-layer">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I4801:14345;1304:8526;52798:26687" data-name="content">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I4801:14345;1304:8526;52798:26688" data-name="label-text">
                  <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14345;1304:8526;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Ask Arqui
                  </p>
                </div>
              </div>
              <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I4801:14345;1304:8526;52798:26690" data-name="trailing-icon">
                <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I4801:14345;1304:8526;52798:26690;51525:5137" data-name="container">
                  <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I4801:14345;1304:8526;52798:26690;51525:5138" data-name="state-layer">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I4801:14345;1304:8526;52798:26690;51525:5139" data-name="Icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIconsSendFill0Wght400Grad0Opsz241} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-node-id="I4801:14345;1304:8526;52798:26691" data-name="Active indicator">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator} />
            </div>
          </div>
        </button>
        <div className="absolute h-[576px] left-[8px] overflow-x-clip overflow-y-auto top-[49px] w-[985px]" data-node-id="I4801:14345;1348:7701">
          <div className="absolute bg-[#2f3034] h-[98px] left-0 rounded-[12px] top-[-2175px] w-[950px]" data-node-id="I4801:14345;1348:7702" />
          <div className="absolute contents left-[745px] top-[-2130px]" data-node-id="I4801:14345;1348:7703">
            <div className="absolute contents left-[746px] top-[-2130px]" data-node-id="I4801:14345;1348:7704">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-2128px] whitespace-nowrap" data-node-id="I4801:14345;1348:7705" style={{ fontVariationSettings: '"wdth" 100' }}>
                Edit question
              </p>
              <div className="absolute left-[746px] size-[20px] top-[-2130px]" data-node-id="I4801:14345;1348:7706" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-2046px]" data-node-id="I4801:14345;1348:7708">
              <div className="absolute contents left-[745px] top-[-1986px]" data-node-id="I4801:14345;1348:7709">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1984px] whitespace-nowrap" data-node-id="I4801:14345;1348:7710" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Export response
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-1986px]" data-node-id="I4801:14345;1348:7711" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <button className="absolute contents cursor-pointer left-[745px] top-[-2016px]" data-node-id="I4801:14345;1348:7713">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-2014px] whitespace-nowrap" data-node-id="I4801:14345;1348:7714" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Check sources
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-2016px]" data-node-id="I4801:14345;1348:7715" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                </div>
              </button>
              <div className="absolute contents left-[745px] top-[-2046px]" data-node-id="I4801:14345;1348:7717">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-2043px] whitespace-nowrap" data-node-id="I4801:14345;1348:7718" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Regenerate
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-2046px]" data-node-id="I4801:14345;1348:7719" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#2f3034] h-[104px] left-0 rounded-[12px] top-[-229px] w-[950px]" data-node-id="I4801:14345;1348:7721" />
          <div className="absolute bg-[#2f3034] h-[95px] left-0 rounded-[12px] top-[-1463px] w-[950px]" data-node-id="I4801:14345;1348:7722" />
          <div className="absolute bg-[#2f3034] h-[96px] left-0 rounded-[12px] top-[-764px] w-[950px]" data-node-id="I4801:14345;1348:7723" />
          <div className="absolute contents left-[9px] top-[-2159px]" data-node-id="I4801:14345;1348:7724">
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-2131px] tracking-[0.25px] w-[693px]" data-node-id="I4801:14345;1348:7725" style={{ fontVariationSettings: '"wdth" 100' }}>
              Which specific regulations in our key markets pose the most immediate risk or require the most significant operational changes?
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-2156.86px] whitespace-nowrap" data-node-id="I4801:14345;1348:7726" style={{ fontVariationSettings: '"wdth" 100' }}>
              YOU
            </p>
            <div className="absolute inset-[-374.83%_97.26%_471.88%_1.01%]" data-node-id="I4801:14345;1348:7727" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <div className="absolute contents left-[9px] top-[-212px]" data-node-id="I4801:14345;1348:7728">
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-184px] tracking-[0.25px] w-[686px]" data-node-id="I4801:14345;1348:7729" style={{ fontVariationSettings: '"wdth" 100' }}>
              an you help me assess the potential financial impact of different compliance scenarios, considering both costs and potential market opportunities?
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-209.86px] whitespace-nowrap" data-node-id="I4801:14345;1348:7730" style={{ fontVariationSettings: '"wdth" 100' }}>
              YOU
            </p>
            <div className="absolute inset-[-36.81%_97.26%_133.85%_1.01%]" data-node-id="I4801:14345;1348:7731" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <div className="absolute contents left-[9px] top-[-1448px]" data-node-id="I4801:14345;1348:7732">
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-1420px] tracking-[0.25px] w-[688px]" data-node-id="I4801:14345;1348:7733" style={{ fontVariationSettings: '"wdth" 100' }}>{`Based on past trends and current legislative activities, what emerging regulations should we be proactively preparing for, even if they're not yet finalized?`}</p>
            <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-1445.86px] whitespace-nowrap" data-node-id="I4801:14345;1348:7734" style={{ fontVariationSettings: '"wdth" 100' }}>
              YOU
            </p>
            <div className="absolute inset-[-251.39%_97.26%_348.44%_1.01%]" data-node-id="I4801:14345;1348:7735" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <div className="absolute contents left-[9px] top-[-746px]" data-node-id="I4801:14345;1348:7736">
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[9px] text-[14px] text-white top-[-718px] w-[676px]" data-node-id="I4801:14345;1348:7737" style={{ fontVariationSettings: '"wdth" 100' }}>
              Do any of our competitors seem to be adopting innovative approaches to navigating regulatory uncertainty? If so, what can we learn from them?
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-743.86px] whitespace-nowrap" data-node-id="I4801:14345;1348:7738" style={{ fontVariationSettings: '"wdth" 100' }}>
              YOU
            </p>
            <div className="absolute inset-[-129.51%_97.26%_226.56%_1.01%]" data-node-id="I4801:14345;1348:7739" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <div className="absolute contents left-[8px] top-[-2049px]" data-node-id="I4801:14345;1348:7740">
            <div className="absolute contents left-[8px] top-[-2049px]" data-node-id="I4801:14345;1348:7741">
              <div className="absolute contents left-[8px] top-[-2049px]" data-node-id="I4801:14345;1348:7742">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[27px] text-[#00c2a7] text-[12px] top-[-2048px] whitespace-nowrap" data-node-id="I4801:14345;1348:7743" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                <div className="absolute left-[8px] size-[15px] top-[-2049px]" data-node-id="I4801:14345;1348:7744">
                  <div className="absolute left-0 size-[15px] top-0" data-node-id="I4801:14345;1348:7745">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-2020px] tracking-[0.25px] w-[718px]" data-node-id="I4801:14345;1348:7750" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-[8px]">Certainly! Based on your historical inquiries and my analysis of current legislative activities, here are two specific regulations in your key markets posing immediate risk or requiring significant operational changes for Acme:</p>
              <p className="leading-[20px] mb-[8px]">1. GDPR Expansion in Southeast Asia:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Impact: The proposed expansion of GDPR-like data privacy regulations across Southeast Asia, particularly in Vietnam and Indonesia, could significantly impact your data collection, storage, and transfer practices in these key markets.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Risk: Non-compliance could lead to hefty fines, reputational damage, and operational disruptions due to potential data access restrictions.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Urgency: The Vietnamese regulations are expected to be finalized by Q3 2024, requiring immediate action. Indonesian regulations are still under development, but proactive preparation is crucial.</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-[8px]">2. California Consumer Privacy Act (CCPA) Updates:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">{`Impact: Recent amendments to the CCPA, including the upcoming "right to correct" mandate, could necessitate changes in your data management processes and user consent mechanisms, specifically impacting your California-based customers.`}</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Risk: Failing to comply with the updated CCPA could result in fines of up to $2,500 per violation, posing a significant financial risk.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Urgency: The right to correct mandate comes into effect on July 1st, 2024, requiring swift compliance efforts.</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-[8px]">Additional Considerations:</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">The potential impact of these regulations depends on the specific nature of your data collection and processing activities in each market. A more detailed analysis tailored to your business is recommended.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Beyond these immediate concerns, keep an eye on evolving regulations regarding cybersecurity, artificial intelligence, and environmental sustainability, as they might necessitate future operational adjustments.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute contents left-[9px] top-[-111px]" data-node-id="I4801:14345;1348:7751">
            <div className="absolute contents left-[9px] top-[-111px]" data-node-id="I4801:14345;1348:7752">
              <div className="absolute contents left-[9px] top-[-111px]" data-node-id="I4801:14345;1348:7753">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-110px] whitespace-nowrap" data-node-id="I4801:14345;1348:7754" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                <div className="absolute left-[9px] size-[15px] top-[-111px]" data-node-id="I4801:14345;1348:7755">
                  <div className="absolute left-0 size-[15px] top-0" data-node-id="I4801:14345;1348:7756">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-85px] tracking-[0.25px] w-[718px]" data-node-id="I4801:14345;1348:7761" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[normal] mb-[8px]">{` Here's an initial assessment of the potential financial impact of different compliance scenarios for the two key regulations we discussed:`}</p>
              <p className="leading-[normal] mb-[8px]">1. GDPR Expansion in Southeast Asia:</p>
              <p className="leading-[normal] mb-[8px]">Compliance Costs:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">{`Data Governance & Security: Implementing robust data governance practices, security measures, and data subject access request (DSAR) handling processes across Vietnam and Indonesia could cost ~$2-3 million.`}</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">{`Legal & Consulting Fees: Adapting contracts, obtaining legal advice, and navigating local regulations might incur fees of ~$1-2 million.`}</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[normal]">Technology Upgrades: Depending on existing infrastructure, upgrading data storage and management systems for compliance could range from ~$0.5-1.5 million.</span>
                </li>
              </ul>
              <p className="leading-[normal] mb-[8px]">Market Opportunities:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">Early Adopter Advantage: Demonstrating early compliance in these new markets could attract privacy-conscious customers and establish trust, potentially increasing market share by 5-10% in Vietnam and Indonesia within 2 years.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[normal]">Enhanced Brand Reputation: Building a reputation for responsible data handling could improve brand image and customer loyalty, potentially leading to a 2-3% increase in customer lifetime value.</span>
                </li>
              </ul>
              <p className="leading-[normal] mb-[8px]">2. CCPA Updates:</p>
              <p className="leading-[normal] mb-[8px]">Compliance Costs:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">{`Data Management System Updates: Implementing changes to accommodate the "right to correct" mandate and other CCPA updates might cost ~$0.5-1 million.`}</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">User Opt-Out Mechanism Enhancements: Refining user consent mechanisms and handling opt-out requests could require ~$0.2-0.5 million in technology and process adjustments.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[normal]">{`Legal & Training Costs: Legal consultations and employee training regarding the updated CCPA could incur fees of ~$0.1-0.2 million.`}</span>
                </li>
              </ul>
              <p className="leading-[normal] mb-[8px]">Market Opportunities:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">{`Increased Customer Trust & Retention: Demonstrating CCPA compliance in California could solidify trust with existing customers and potentially reduce churn by 1-2%, leading to increased customer lifetime value.`}</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[normal]">Competitive Advantage: Highlighting CCPA compliance in marketing materials could attract privacy-conscious consumers in California, potentially increasing market share by 2-3% within a year.</span>
                </li>
              </ul>
              <p className="leading-[normal] mb-[8px]">Important Note:</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">These figures are estimates and the actual impact will depend on various factors like your current compliance posture, existing technology infrastructure, and the scope of your operations in each market.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[normal]">{`It's crucial to conduct a more detailed cost-benefit analysis considering your specific business context and potential revenue impacts in each market.`}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute contents left-[9px] top-[-1355px]" data-node-id="I4801:14345;1348:7762">
            <div className="absolute contents left-[9px] top-[-1355px]" data-node-id="I4801:14345;1348:7763">
              <div className="absolute contents left-[9px] top-[-1355px]" data-node-id="I4801:14345;1348:7764">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-1354px] whitespace-nowrap" data-node-id="I4801:14345;1348:7765" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                <div className="absolute left-[9px] size-[15px] top-[-1355px]" data-node-id="I4801:14345;1348:7766">
                  <div className="absolute left-0 size-[15px] top-0" data-node-id="I4801:14345;1348:7767">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-1328px] tracking-[0.25px] w-[718px]" data-node-id="I4801:14345;1348:7772" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-[8px]">While predicting the future of legislation is impossible, I can highlight two emerging regulatory trends with potential implications for Acme, even though they are still in their early stages:</p>
              <p className="leading-[20px] mb-[8px]">1. Global AI Ethics Framework:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Trend: Growing international discourse calls for a unified framework governing the ethical development and deployment of Artificial Intelligence (AI). The European Union and the Organization for Economic Cooperation and Development (OECD) are spearheading discussions.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Impact: While the final framework details remain unclear, it could potentially impact your use of AI-powered solutions in areas like customer service, fraud detection, and risk assessment. Regulations might address data privacy, algorithmic bias, and transparency in AI decision-making.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Preparation: Start mapping your current AI applications and their potential ethical implications. Stay informed about ongoing discussions and consider participating in industry forums to shape the future regulations in a way that aligns with your needs.</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-[8px]">2. Mandatory ESG Reporting Standards:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Trend: The demand for standardized Environmental, Social, and Governance (ESG) reporting is rising, with initiatives like the Global Reporting Initiative (GRI) and the Sustainability Accounting Standards Board (SASB) gaining traction. Regulatory bodies are also exploring mandatory ESG reporting requirements.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Impact: Such regulations could require Acme to disclose detailed information on your environmental footprint, social impact, and governance practices. This could influence investor decisions, brand reputation, and even market access in certain regions.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Preparation: Conduct a preliminary assessment of your current ESG performance and reporting capabilities. Explore available ESG frameworks and identify potential gaps. Proactive adoption of robust ESG practices can position you as a leader in sustainability and mitigate future regulatory risks.</span>
                </li>
              </ul>
              <p className="leading-[20px]">Remember: Proactive preparation for emerging regulations, even if not yet finalized, can give you a competitive edge and avoid scrambling for compliance later. I recommend monitoring these trends closely, conducting regular risk assessments, and engaging with relevant stakeholders to stay ahead of the curve.</p>
            </div>
          </div>
          <div className="absolute contents left-[9px] top-[-654px]" data-node-id="I4801:14345;1348:7773">
            <div className="absolute contents left-[9px] top-[-654px]" data-node-id="I4801:14345;1348:7774">
              <div className="absolute contents left-[9px] top-[-654px]" data-node-id="I4801:14345;1348:7775">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-653px] whitespace-nowrap" data-node-id="I4801:14345;1348:7776" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                <div className="absolute left-[9px] size-[15px] top-[-654px]" data-node-id="I4801:14345;1348:7777">
                  <div className="absolute left-0 size-[15px] top-0" data-node-id="I4801:14345;1348:7778">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-628px] w-[718px]" data-node-id="I4801:14345;1348:7783" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-[8px]">{`While directly accessing your competitors' internal strategies is ethically impossible, I can analyze publicly available information and recent industry news to identify innovative approaches competitors might be adopting to navigate regulatory uncertainty. Here are two examples relevant to Acme:`}</p>
              <p className="leading-[20px] mb-[8px]">1. Green Cloud Initiative by TechTerra:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Challenge: TechTerra, a major competitor in the cloud computing space, faces stringent environmental regulations in the European Union.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">{`Approach: They launched the "Green Cloud Initiative," investing in renewable energy sources for their data centers and offering carbon-neutral cloud solutions to customers.`}</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Learning: Acme could explore similar sustainability initiatives to demonstrate compliance and potentially attract eco-conscious clients concerned about data center emissions.</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-[8px]">2. Regulatory Compliance Hub by Acumen Inc.:</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Challenge: Acumen, a player in the financial services sector, operates in markets with diverse and evolving financial regulations.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">{`Approach: They developed a centralized "Regulatory Compliance Hub," a digital platform that aggregates regulatory updates, automates compliance tasks, and provides real-time risk assessments.`}</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Learning: Acme could consider building a similar platform to streamline compliance processes, improve efficiency, and proactively manage regulatory risks across various markets.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute contents left-[745px] top-[-1425px]" data-node-id="I4801:14345;1348:7784">
            <div className="absolute contents left-[746px] top-[-1425px]" data-node-id="I4801:14345;1348:7785">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-1423px] whitespace-nowrap" data-node-id="I4801:14345;1348:7786" style={{ fontVariationSettings: '"wdth" 100' }}>
                Edit question
              </p>
              <div className="absolute left-[746px] size-[20px] top-[-1425px]" data-node-id="I4801:14345;1348:7787" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-1341px]" data-node-id="I4801:14345;1348:7789">
              <div className="absolute contents left-[745px] top-[-1281px]" data-node-id="I4801:14345;1348:7790">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1279px] whitespace-nowrap" data-node-id="I4801:14345;1348:7791" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Export response
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-1281px]" data-node-id="I4801:14345;1348:7792" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <button className="absolute contents cursor-pointer left-[745px] top-[-1311px]" data-node-id="I4801:14345;1348:7794">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1309px] whitespace-nowrap" data-node-id="I4801:14345;1348:7795" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Check sources
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-1311px]" data-node-id="I4801:14345;1348:7796" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                </div>
              </button>
              <div className="absolute contents left-[745px] top-[-1341px]" data-node-id="I4801:14345;1348:7798">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-1338px] whitespace-nowrap" data-node-id="I4801:14345;1348:7799" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Regenerate
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-1341px]" data-node-id="I4801:14345;1348:7800" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[745px] top-[-716px]" data-node-id="I4801:14345;1348:7802">
            <div className="absolute contents left-[746px] top-[-716px]" data-node-id="I4801:14345;1348:7803">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-714px] whitespace-nowrap" data-node-id="I4801:14345;1348:7804" style={{ fontVariationSettings: '"wdth" 100' }}>
                Edit question
              </p>
              <div className="absolute left-[746px] size-[20px] top-[-716px]" data-node-id="I4801:14345;1348:7805" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-632px]" data-node-id="I4801:14345;1348:7807">
              <div className="absolute contents left-[745px] top-[-572px]" data-node-id="I4801:14345;1348:7808">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-570px] whitespace-nowrap" data-node-id="I4801:14345;1348:7809" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Export response
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-572px]" data-node-id="I4801:14345;1348:7810" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <button className="absolute contents cursor-pointer left-[745px] top-[-602px]" data-node-id="I4801:14345;1348:7812">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-600px] whitespace-nowrap" data-node-id="I4801:14345;1348:7813" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Check sources
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-602px]" data-node-id="I4801:14345;1348:7814" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                </div>
              </button>
              <div className="absolute contents left-[745px] top-[-632px]" data-node-id="I4801:14345;1348:7816">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-629px] whitespace-nowrap" data-node-id="I4801:14345;1348:7817" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Regenerate
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-632px]" data-node-id="I4801:14345;1348:7818" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[745px] top-[-185px]" data-node-id="I4801:14345;1348:7820">
            <div className="absolute contents left-[746px] top-[-185px]" data-node-id="I4801:14345;1348:7821">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-183px] whitespace-nowrap" data-node-id="I4801:14345;1348:7822" style={{ fontVariationSettings: '"wdth" 100' }}>
                Edit question
              </p>
              <div className="absolute left-[746px] size-[20px] top-[-185px]" data-node-id="I4801:14345;1348:7823" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-101px]" data-node-id="I4801:14345;1348:7825">
              <div className="absolute contents left-[745px] top-[-41px]" data-node-id="I4801:14345;1348:7826">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-39px] whitespace-nowrap" data-node-id="I4801:14345;1348:7827" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Export response
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-41px]" data-node-id="I4801:14345;1348:7828" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <button className="absolute contents cursor-pointer left-[745px] top-[-71px]" data-node-id="I4801:14345;1348:7830">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-69px] whitespace-nowrap" data-node-id="I4801:14345;1348:7831" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Check sources
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-71px]" data-node-id="I4801:14345;1348:7832" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                </div>
              </button>
              <div className="absolute contents left-[745px] top-[-101px]" data-node-id="I4801:14345;1348:7834">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-98px] whitespace-nowrap" data-node-id="I4801:14345;1348:7835" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Regenerate
                </p>
                <div className="absolute left-[745px] size-[20px] top-[-101px]" data-node-id="I4801:14345;1348:7836" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionNav className="absolute h-[956px] left-0 top-0 w-[242px]" />
      <Group605 className="absolute h-[27px] left-[1630px] top-[35px] w-[69px]" />
      <SearchBarDark className="absolute bg-[#2b2930] content-stretch flex h-[56px] items-center left-[555px] max-w-[720px] min-w-[360px] overflow-clip rounded-[28px] top-[20px] w-[718px]" placeholderText="What’s on your mind?" state="enabled" />
      <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col items-center justify-center left-[1484px] overflow-clip rounded-[100px] top-[28px]" data-node-id="4801:14349" data-name="Button-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14349;53923:27766" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14349;53923:27767" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon5} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14349;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Get help</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[1292px] overflow-clip rounded-[100px] top-[27px]" data-node-id="4801:14350" data-name="Button-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14350;53923:27766" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14350;53923:27767" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon6} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14350;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Invite to meeting</p>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[1533px] top-[210px]" data-node-id="4801:14351">
        <div className="absolute contents left-[1533px] top-[210px]" data-node-id="4801:14352">
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[1555px] text-[#d0bcff] text-[12px] top-[212px] whitespace-nowrap" data-node-id="4801:14353" style={{ fontVariationSettings: '"wdth" 100' }}>
            Check sources
          </p>
          <div className="absolute left-[1533px] size-[20px] top-[210px]" data-node-id="4801:14354" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[1537px] text-[12px] text-white top-[125px] whitespace-nowrap" data-node-id="4801:14356" style={{ fontVariationSettings: '"wdth" 100' }}>
        Is this insight useful?
      </p>
      <div className="absolute flex h-[129px] items-center justify-center left-[1507px] top-[125px] w-0" data-node-id="4801:14357">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[129px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={A.imgLine220} />
            </div>
          </div>
        </div>
      </div>
      <Component12 className="absolute h-[41px] left-[1537px] top-[150px] w-[147px]" />
      <div className="absolute bg-[#202125] h-[845px] left-[265px] overflow-x-clip overflow-y-auto top-[111px] w-[427px]" data-node-id="4801:14359">
        <div className="absolute contents left-0 top-[182px]" data-node-id="4801:14360">
          <div className="absolute bg-[#141218] cursor-pointer inset-[21.54%_0_67.34%_0] overflow-clip rounded-[21px]" data-node-id="4801:14361" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[227px]" data-node-id="4801:14362" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14362;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14362;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14362;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">SELF-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[171px] overflow-clip rounded-[8px] top-[227px]" data-node-id="4801:14363" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14363;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14363;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[346px] top-[226px]" data-node-id="4801:14364">
            <div className="absolute contents left-[346px] top-[226px]" data-node-id="4801:14365">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[346px] overflow-clip rounded-[8px] top-[226px]" data-node-id="4801:14366" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14366;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14366;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[27.81%_12.72%_70.91%_83.84%]" data-node-id="4801:14367" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[196px] tracking-[0.25px] w-[406px]" data-node-id="4801:14368" style={{ fontVariationSettings: '"wdth" 100' }}>
            Shifting customer demographics and preferences
          </p>
        </div>
        <div className="absolute contents left-0 top-[380px]" data-node-id="4801:14369">
          <div className="absolute bg-[#141218] cursor-pointer inset-[44.97%_0_43.91%_0] overflow-clip rounded-[21px]" data-node-id="4801:14370" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[425px]" data-node-id="4801:14371" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14371;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14371;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14371;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[425px]" data-node-id="4801:14372" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14372;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14372;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[394px] tracking-[0.25px] w-[406px]" data-node-id="4801:14373" style={{ fontVariationSettings: '"wdth" 100' }}>
            Supply chain disruptions and resource scarcity
          </p>
        </div>
        <div className="absolute contents left-0 top-[776px]" data-node-id="4801:14374">
          <div className="absolute bg-[#141218] cursor-pointer inset-[91.83%_0_-2.96%_0] overflow-clip rounded-[21px]" data-node-id="4801:14375" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[821px]" data-node-id="4801:14376" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14376;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14376;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14376;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[821px]" data-node-id="4801:14377" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14377;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14377;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[790px] tracking-[0.25px] w-[406px]" data-node-id="4801:14378" style={{ fontVariationSettings: '"wdth" 100' }}>
            Remote workforce productivity paradox
          </p>
        </div>
        <div className="absolute contents left-0 top-[578px]" data-node-id="4801:14379">
          <div className="absolute bg-[#141218] cursor-pointer inset-[68.4%_0_20.47%_0] overflow-clip rounded-[21px]" data-node-id="4801:14380" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[624px]" data-node-id="4801:14381" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14381;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14381;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14381;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[623px]" data-node-id="4801:14382" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14382;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14382;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">COST OPTIMISATION</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[341px] top-[622px]" data-node-id="4801:14383">
            <div className="absolute contents left-[341px] top-[622px]" data-node-id="4801:14384">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[341px] overflow-clip rounded-[8px] top-[622px]" data-node-id="4801:14385" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14385;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14385;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[74.67%_13.89%_24.04%_82.67%]" data-node-id="4801:14386" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[592px] tracking-[0.25px] w-[406px]" data-node-id="4801:14387" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cloud cost optimization potential
          </p>
        </div>
        <div className="absolute contents left-0 top-[974px]" data-node-id="4801:14388">
          <div className="absolute bg-[#141218] cursor-pointer inset-[115.27%_0_-26.39%_0] overflow-clip rounded-[21px]" data-node-id="4801:14389" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1021px]" data-node-id="4801:14390" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14390;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14390;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14390;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1019px]" data-node-id="4801:14391" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14391;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14391;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[988px] tracking-[0.25px] w-[406px]" data-node-id="4801:14392" style={{ fontVariationSettings: '"wdth" 100' }}>
            Quantum computing threat landscape
          </p>
        </div>
        <div className="absolute contents left-0 top-[479px]" data-node-id="4801:14393">
          <div className="absolute bg-[#141218] cursor-pointer inset-[56.69%_0_32.19%_0] overflow-clip rounded-[21px]" data-node-id="4801:14394" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[524px]" data-node-id="4801:14395" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14395;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14395;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14395;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[524px]" data-node-id="4801:14396" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14396;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14396;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[353px] top-[523px]" data-node-id="4801:14397">
            <div className="absolute contents left-[353px] top-[523px]" data-node-id="4801:14398">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[353px] overflow-clip rounded-[8px] top-[523px]" data-node-id="4801:14399" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14399;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14399;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[62.96%_11.08%_35.76%_85.48%]" data-node-id="4801:14400" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[493px] tracking-[0.25px] w-[406px]" data-node-id="4801:14401" style={{ fontVariationSettings: '"wdth" 100' }}>
            Rise of automation and AI in the industry
          </p>
        </div>
        <div className="absolute contents left-0 top-[875px]" data-node-id="4801:14402">
          <div className="absolute bg-[#141218] cursor-pointer inset-[103.55%_0_-14.67%_0] overflow-clip rounded-[21px]" data-node-id="4801:14403" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[920px]" data-node-id="4801:14404" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14404;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14404;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14404;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[920px]" data-node-id="4801:14405" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14405;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14405;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[354px] top-[919px]" data-node-id="4801:14406">
            <div className="absolute contents left-[354px] top-[919px]" data-node-id="4801:14407">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[354px] overflow-clip rounded-[8px] top-[919px]" data-node-id="4801:14408" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14408;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14408;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[109.82%_10.85%_-11.11%_85.71%]" data-node-id="4801:14409" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[889px] tracking-[0.25px] w-[406px]" data-node-id="4801:14410" style={{ fontVariationSettings: '"wdth" 100' }}>
            Biometric authentication adoption surge
          </p>
        </div>
        <div className="absolute contents left-0 top-[677px]" data-node-id="4801:14411">
          <div className="absolute bg-[#141218] cursor-pointer inset-[80.12%_0_8.76%_0] overflow-clip rounded-[21px]" data-node-id="4801:14412" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[722px]" data-node-id="4801:14413" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14413;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14413;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14413;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[722px]" data-node-id="4801:14414" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14414;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14414;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[691px] tracking-[0.25px] w-[406px]" data-node-id="4801:14415" style={{ fontVariationSettings: '"wdth" 100' }}>
            AI-driven security automation
          </p>
        </div>
        <div className="absolute contents left-0 top-[1073px]" data-node-id="4801:14416">
          <div className="absolute bg-[#141218] cursor-pointer inset-[126.98%_0_-42.37%_0] overflow-clip rounded-[21px]" data-node-id="4801:14417" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1118px]" data-node-id="4801:14418" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14418;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14418;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14418;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1118px]" data-node-id="4801:14419" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14419;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14419;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1161px]" data-node-id="4801:14420" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14420;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14420;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[354px] top-[1117px]" data-node-id="4801:14421">
            <div className="absolute contents left-[354px] top-[1117px]" data-node-id="4801:14422">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[354px] overflow-clip rounded-[8px] top-[1117px]" data-node-id="4801:14423" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14423;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14423;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[133.25%_10.85%_-34.54%_85.71%]" data-node-id="4801:14424" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1087px] tracking-[0.25px] w-[406px]" data-node-id="4801:14425" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cybersecurity skills gap widens
          </p>
        </div>
        <div className="absolute contents left-0 top-[1407px]" data-node-id="4801:14426">
          <div className="absolute bg-[#141218] cursor-pointer inset-[166.51%_0_-77.63%_0] overflow-clip rounded-[21px]" data-node-id="4801:14427" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1452px]" data-node-id="4801:14428" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14428;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14428;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14428;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1452px]" data-node-id="4801:14429" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14429;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14429;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[372px] top-[1451px]" data-node-id="4801:14430">
            <div className="absolute contents left-[372px] top-[1451px]" data-node-id="4801:14431">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[372px] overflow-clip rounded-[8px] top-[1451px]" data-node-id="4801:14432" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14432;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14432;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[172.78%_6.63%_-74.06%_89.93%]" data-node-id="4801:14433" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1421px] tracking-[0.25px] w-[406px]" data-node-id="4801:14434" style={{ fontVariationSettings: '"wdth" 100' }}>
            Hyperautomation and job displacement
          </p>
        </div>
        <div className="absolute contents left-0 top-[1209px]" data-node-id="4801:14435">
          <div className="absolute bg-[#141218] cursor-pointer inset-[143.08%_0_-54.2%_0] overflow-clip rounded-[21px]" data-node-id="4801:14436" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1255px]" data-node-id="4801:14437" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14437;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14437;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14437;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1254px]" data-node-id="4801:14438" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14438;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14438;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1223px] tracking-[0.25px] w-[406px]" data-node-id="4801:14439" style={{ fontVariationSettings: '"wdth" 100' }}>
            Regulatory compliance transformation
          </p>
        </div>
        <div className="absolute contents left-0 top-[1506px]" data-node-id="4801:14440">
          <div className="absolute bg-[#141218] cursor-pointer inset-[178.22%_0_-89.35%_0] overflow-clip rounded-[21px]" data-node-id="4801:14441" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1551px]" data-node-id="4801:14442" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14442;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14442;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14442;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1551px]" data-node-id="4801:14443" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14443;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14443;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILE`}</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1520px] tracking-[0.25px] w-[406px]" data-node-id="4801:14444" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ethical implications of AI in business
          </p>
        </div>
        <div className="absolute contents left-0 top-[1308px]" data-node-id="4801:14445">
          <div className="absolute bg-[#141218] cursor-pointer inset-[154.79%_0_-65.92%_0] overflow-clip rounded-[21px]" data-node-id="4801:14446" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1353px]" data-node-id="4801:14447" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14447;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14447;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14447;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1353px]" data-node-id="4801:14448" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14448;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14448;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[317px] top-[1352px]" data-node-id="4801:14449">
            <div className="absolute contents left-[317px] top-[1352px]" data-node-id="4801:14450">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[317px] overflow-clip rounded-[8px] top-[1352px]" data-node-id="4801:14451" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14451;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14451;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[161.07%_19.52%_-62.35%_77.05%]" data-node-id="4801:14452" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1322px] tracking-[0.25px] w-[406px]" data-node-id="4801:14453" style={{ fontVariationSettings: '"wdth" 100' }}>
            Data privacy concerns intensify
          </p>
        </div>
        <div className="absolute contents left-0 top-[281px]" data-node-id="4801:14454">
          <div className="absolute bg-[#141218] inset-[33.25%_0_55.62%_0] overflow-clip rounded-[21px]" data-node-id="4801:14455" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute bg-[rgba(230,224,233,0.12)] inset-0" data-node-id="I4801:14455;52350:28403" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[326px]" data-node-id="4801:14456" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14456;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14456;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14456;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">SELF-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[326px]" data-node-id="4801:14457" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14457;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14457;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#00c2a7] text-[14px] top-[295px] tracking-[0.25px] whitespace-nowrap" data-node-id="4801:14458" style={{ fontVariationSettings: '"wdth" 100' }}>{`Quantum computing's disruptive potential`}</p>
        </div>
        <a className="absolute contents cursor-pointer left-0 top-[64px]" data-node-id="4801:14459">
          <div className="absolute bg-[#141218] inset-[7.57%_0_81.3%_0] overflow-clip rounded-[21px]" data-node-id="4801:14460" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute contents left-[153px] top-[108px]" data-node-id="4801:14461">
            <div className="absolute contents left-[153px] top-[108px]" data-node-id="4801:14462">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[153px] overflow-clip rounded-[8px] top-[108px]" data-node-id="4801:14463" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14463;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14463;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[13.85%_57.92%_84.87%_38.64%]" data-node-id="4801:14464" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[109px]" data-node-id="4801:14465" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14465;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14465;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14465;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">DEFAULT VIEW</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[78px] tracking-[0.25px] whitespace-nowrap" data-node-id="4801:14466" style={{ fontVariationSettings: '"wdth" 100' }}>
            Insights landscape
          </p>
        </a>
        <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-px overflow-clip rounded-[100px] top-0 w-[131px]" data-node-id="4801:14467" data-name="Button-dark">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14467;53923:27731" data-name="state-layer">
            <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14467;53923:27732" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon9} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14467;53923:27733" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Filter insights</p>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#4a4458] content-stretch cursor-pointer flex flex-col items-center justify-center left-[269px] overflow-clip rounded-[100px] top-0" data-node-id="4801:14468" data-name="Button-dark">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14468;53923:27661" data-name="state-layer">
            <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14468;53923:27662" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon10} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#e8def8] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14468;53923:27663" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Start new chat</p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[138px] overflow-clip rounded-[100px] top-0 w-[104px]" data-node-id="4801:14469" data-name="Button-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14469;53923:27747" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14469;53923:27748" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Sort by: Date</p>
            </div>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[171px] w-[427px]" data-node-id="4801:14470">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={A.imgLine232} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#202125]" style={{ left: 728, top: 257, width: 1000, height: 681 }} />
      <ContentHost x={728} y={257} />
    </div>
  );
}