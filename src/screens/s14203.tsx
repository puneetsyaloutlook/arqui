import { A } from '../assets/a14203';
import { ContentHost } from './cs1434_13582host';



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
      <a className="absolute contents cursor-pointer left-[21px] top-[461px]" data-node-id="1305:11383">
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
      </a>
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
    <div className="bg-[#202125] relative size-full" data-node-id="4801:14203" data-name="113">
      <div className="absolute bg-gradient-to-b from-[#1a1b1f] from-[6.132%] h-[273px] left-[728px] to-[#202125] top-[306px] w-[1000px]" data-node-id="4801:14204" />
      <div className="absolute bg-[#141218] h-[956px] left-0 top-0 w-[242px]" data-node-id="4801:14205" />
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[265px] text-[#ed00b8] text-[28px] top-[27px] whitespace-nowrap" data-node-id="4801:14206" style={{ fontVariationSettings: '"wdth" 100' }}>
        Scenario planning
      </p>
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[728px] text-[#00c2a7] text-[16px] top-[108px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14207" style={{ fontVariationSettings: '"wdth" 100' }}>
        Insight landscape
      </p>
      <p className="[word-break:break-word] absolute font-roboto font-normal h-[57px] leading-[20px] left-[729px] text-[#acacac] text-[14px] top-[141px] tracking-[0.25px] w-[708px] whitespace-pre-wrap" data-node-id="4801:14208" style={{ fontVariationSettings: '"wdth" 100' }}>{`The future scenarios explore a range of possibilities impacting your organization, from managing a remote workforce and the evolving threat landscape to the ethical considerations of AI and the potential for cost  savings through cloud optimization.`}</p>
      <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[729px] overflow-clip rounded-[8px] top-[213px]" data-node-id="4801:14209" data-name="Input chip-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14209;53923:29048" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14209;53923:29049" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14209;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16px]">SELF-GENERATED</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[896px] overflow-clip rounded-[8px] top-[213px]" data-node-id="4801:14210" data-name="Input chip-dark">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14210;53923:29057" data-name="state-layer">
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14210;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
          </div>
        </div>
      </div>
      <SectionNav className="absolute h-[956px] left-0 top-0 w-[242px]" />
      <Group605 className="absolute h-[27px] left-[1630px] top-[35px] w-[69px]" />
      <SearchBarDark className="absolute bg-[#2b2930] content-stretch flex h-[56px] items-center left-[555px] max-w-[720px] min-w-[360px] overflow-clip rounded-[28px] top-[20px] w-[718px]" placeholderText="What’s on your mind?" state="enabled" />
      <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col items-center justify-center left-[1484px] overflow-clip rounded-[100px] top-[28px]" data-node-id="4801:14214" data-name="Button-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14214;53923:27766" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14214;53923:27767" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon5} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14214;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Get help</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[1292px] overflow-clip rounded-[100px] top-[27px]" data-node-id="4801:14215" data-name="Button-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14215;53923:27766" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14215;53923:27767" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon6} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14215;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Invite to meeting</p>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[1533px] top-[210px]" data-node-id="4801:14216">
        <div className="absolute contents left-[1533px] top-[210px]" data-node-id="4801:14217">
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[1555px] text-[#d0bcff] text-[12px] top-[212px] whitespace-nowrap" data-node-id="4801:14218" style={{ fontVariationSettings: '"wdth" 100' }}>
            Check sources
          </p>
          <div className="absolute left-[1533px] size-[20px] top-[210px]" data-node-id="4801:14219" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[1537px] text-[12px] text-white top-[125px] whitespace-nowrap" data-node-id="4801:14221" style={{ fontVariationSettings: '"wdth" 100' }}>
        Is this insight useful?
      </p>
      <div className="absolute flex h-[129px] items-center justify-center left-[1507px] top-[125px] w-0" data-node-id="4801:14222">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[129px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={A.imgLine220} />
            </div>
          </div>
        </div>
      </div>
      <Component12 className="absolute h-[41px] left-[1537px] top-[150px] w-[147px]" />
      <div className="absolute bg-[#202125] h-[845px] left-[265px] overflow-x-clip overflow-y-auto top-[111px] w-[427px]" data-node-id="4801:14224">
        <div className="absolute contents left-0 top-[182px]" data-node-id="4801:14225">
          <div className="absolute bg-[#141218] cursor-pointer inset-[21.54%_0_67.34%_0] overflow-clip rounded-[21px]" data-node-id="4801:14226" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[227px]" data-node-id="4801:14227" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14227;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14227;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14227;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">SELF-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[171px] overflow-clip rounded-[8px] top-[227px]" data-node-id="4801:14228" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14228;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14228;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[346px] top-[226px]" data-node-id="4801:14229">
            <div className="absolute contents left-[346px] top-[226px]" data-node-id="4801:14230">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[346px] overflow-clip rounded-[8px] top-[226px]" data-node-id="4801:14231" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14231;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14231;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[27.81%_12.72%_70.91%_83.84%]" data-node-id="4801:14232" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[196px] tracking-[0.25px] w-[406px]" data-node-id="4801:14233" style={{ fontVariationSettings: '"wdth" 100' }}>
            Shifting customer demographics and preferences
          </p>
        </div>
        <div className="absolute contents left-0 top-[380px]" data-node-id="4801:14234">
          <div className="absolute bg-[#141218] cursor-pointer inset-[44.97%_0_43.91%_0] overflow-clip rounded-[21px]" data-node-id="4801:14235" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[425px]" data-node-id="4801:14236" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14236;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14236;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14236;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[425px]" data-node-id="4801:14237" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14237;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14237;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[394px] tracking-[0.25px] w-[406px]" data-node-id="4801:14238" style={{ fontVariationSettings: '"wdth" 100' }}>
            Supply chain disruptions and resource scarcity
          </p>
        </div>
        <div className="absolute contents left-0 top-[776px]" data-node-id="4801:14239">
          <div className="absolute bg-[#141218] cursor-pointer inset-[91.83%_0_-2.96%_0] overflow-clip rounded-[21px]" data-node-id="4801:14240" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[821px]" data-node-id="4801:14241" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14241;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14241;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14241;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[821px]" data-node-id="4801:14242" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14242;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14242;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[790px] tracking-[0.25px] w-[406px]" data-node-id="4801:14243" style={{ fontVariationSettings: '"wdth" 100' }}>
            Remote workforce productivity paradox
          </p>
        </div>
        <div className="absolute contents left-0 top-[578px]" data-node-id="4801:14244">
          <div className="absolute bg-[#141218] cursor-pointer inset-[68.4%_0_20.47%_0] overflow-clip rounded-[21px]" data-node-id="4801:14245" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[624px]" data-node-id="4801:14246" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14246;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14246;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14246;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[623px]" data-node-id="4801:14247" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14247;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14247;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">COST OPTIMISATION</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[341px] top-[622px]" data-node-id="4801:14248">
            <div className="absolute contents left-[341px] top-[622px]" data-node-id="4801:14249">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[341px] overflow-clip rounded-[8px] top-[622px]" data-node-id="4801:14250" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14250;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14250;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[74.67%_13.89%_24.04%_82.67%]" data-node-id="4801:14251" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[592px] tracking-[0.25px] w-[406px]" data-node-id="4801:14252" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cloud cost optimization potential
          </p>
        </div>
        <div className="absolute contents left-0 top-[974px]" data-node-id="4801:14253">
          <div className="absolute bg-[#141218] cursor-pointer inset-[115.27%_0_-26.39%_0] overflow-clip rounded-[21px]" data-node-id="4801:14254" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1021px]" data-node-id="4801:14255" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14255;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14255;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14255;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1019px]" data-node-id="4801:14256" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14256;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14256;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[988px] tracking-[0.25px] w-[406px]" data-node-id="4801:14257" style={{ fontVariationSettings: '"wdth" 100' }}>
            Quantum computing threat landscape
          </p>
        </div>
        <div className="absolute contents left-0 top-[479px]" data-node-id="4801:14258">
          <div className="absolute bg-[#141218] cursor-pointer inset-[56.69%_0_32.19%_0] overflow-clip rounded-[21px]" data-node-id="4801:14259" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[524px]" data-node-id="4801:14260" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14260;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14260;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14260;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[524px]" data-node-id="4801:14261" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14261;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14261;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[353px] top-[523px]" data-node-id="4801:14262">
            <div className="absolute contents left-[353px] top-[523px]" data-node-id="4801:14263">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[353px] overflow-clip rounded-[8px] top-[523px]" data-node-id="4801:14264" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14264;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14264;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[62.96%_11.08%_35.76%_85.48%]" data-node-id="4801:14265" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[493px] tracking-[0.25px] w-[406px]" data-node-id="4801:14266" style={{ fontVariationSettings: '"wdth" 100' }}>
            Rise of automation and AI in the industry
          </p>
        </div>
        <div className="absolute contents left-0 top-[875px]" data-node-id="4801:14267">
          <div className="absolute bg-[#141218] cursor-pointer inset-[103.55%_0_-14.67%_0] overflow-clip rounded-[21px]" data-node-id="4801:14268" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[920px]" data-node-id="4801:14269" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14269;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14269;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14269;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[920px]" data-node-id="4801:14270" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14270;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14270;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[354px] top-[919px]" data-node-id="4801:14271">
            <div className="absolute contents left-[354px] top-[919px]" data-node-id="4801:14272">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[354px] overflow-clip rounded-[8px] top-[919px]" data-node-id="4801:14273" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14273;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14273;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[109.82%_10.85%_-11.11%_85.71%]" data-node-id="4801:14274" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[889px] tracking-[0.25px] w-[406px]" data-node-id="4801:14275" style={{ fontVariationSettings: '"wdth" 100' }}>
            Biometric authentication adoption surge
          </p>
        </div>
        <div className="absolute contents left-0 top-[677px]" data-node-id="4801:14276">
          <div className="absolute bg-[#141218] cursor-pointer inset-[80.12%_0_8.76%_0] overflow-clip rounded-[21px]" data-node-id="4801:14277" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[722px]" data-node-id="4801:14278" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14278;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14278;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14278;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[722px]" data-node-id="4801:14279" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14279;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14279;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[691px] tracking-[0.25px] w-[406px]" data-node-id="4801:14280" style={{ fontVariationSettings: '"wdth" 100' }}>
            AI-driven security automation
          </p>
        </div>
        <div className="absolute contents left-0 top-[1073px]" data-node-id="4801:14281">
          <div className="absolute bg-[#141218] cursor-pointer inset-[126.98%_0_-42.37%_0] overflow-clip rounded-[21px]" data-node-id="4801:14282" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1118px]" data-node-id="4801:14283" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14283;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14283;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14283;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1118px]" data-node-id="4801:14284" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14284;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14284;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1161px]" data-node-id="4801:14285" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14285;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14285;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[354px] top-[1117px]" data-node-id="4801:14286">
            <div className="absolute contents left-[354px] top-[1117px]" data-node-id="4801:14287">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[354px] overflow-clip rounded-[8px] top-[1117px]" data-node-id="4801:14288" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14288;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14288;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[133.25%_10.85%_-34.54%_85.71%]" data-node-id="4801:14289" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1087px] tracking-[0.25px] w-[406px]" data-node-id="4801:14290" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cybersecurity skills gap widens
          </p>
        </div>
        <div className="absolute contents left-0 top-[1407px]" data-node-id="4801:14291">
          <div className="absolute bg-[#141218] cursor-pointer inset-[166.51%_0_-77.63%_0] overflow-clip rounded-[21px]" data-node-id="4801:14292" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1452px]" data-node-id="4801:14293" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14293;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14293;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14293;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1452px]" data-node-id="4801:14294" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14294;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14294;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[372px] top-[1451px]" data-node-id="4801:14295">
            <div className="absolute contents left-[372px] top-[1451px]" data-node-id="4801:14296">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[372px] overflow-clip rounded-[8px] top-[1451px]" data-node-id="4801:14297" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14297;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14297;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[172.78%_6.63%_-74.06%_89.93%]" data-node-id="4801:14298" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1421px] tracking-[0.25px] w-[406px]" data-node-id="4801:14299" style={{ fontVariationSettings: '"wdth" 100' }}>
            Hyperautomation and job displacement
          </p>
        </div>
        <div className="absolute contents left-0 top-[1209px]" data-node-id="4801:14300">
          <div className="absolute bg-[#141218] cursor-pointer inset-[143.08%_0_-54.2%_0] overflow-clip rounded-[21px]" data-node-id="4801:14301" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1255px]" data-node-id="4801:14302" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14302;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14302;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14302;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1254px]" data-node-id="4801:14303" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14303;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14303;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1223px] tracking-[0.25px] w-[406px]" data-node-id="4801:14304" style={{ fontVariationSettings: '"wdth" 100' }}>
            Regulatory compliance transformation
          </p>
        </div>
        <div className="absolute contents left-0 top-[1506px]" data-node-id="4801:14305">
          <div className="absolute bg-[#141218] cursor-pointer inset-[178.22%_0_-89.35%_0] overflow-clip rounded-[21px]" data-node-id="4801:14306" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1551px]" data-node-id="4801:14307" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14307;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14307;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14307;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1551px]" data-node-id="4801:14308" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14308;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14308;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILE`}</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1520px] tracking-[0.25px] w-[406px]" data-node-id="4801:14309" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ethical implications of AI in business
          </p>
        </div>
        <div className="absolute contents left-0 top-[1308px]" data-node-id="4801:14310">
          <div className="absolute bg-[#141218] cursor-pointer inset-[154.79%_0_-65.92%_0] overflow-clip rounded-[21px]" data-node-id="4801:14311" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1353px]" data-node-id="4801:14312" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14312;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14312;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14312;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1353px]" data-node-id="4801:14313" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14313;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14313;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[317px] top-[1352px]" data-node-id="4801:14314">
            <div className="absolute contents left-[317px] top-[1352px]" data-node-id="4801:14315">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[317px] overflow-clip rounded-[8px] top-[1352px]" data-node-id="4801:14316" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14316;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14316;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[161.07%_19.52%_-62.35%_77.05%]" data-node-id="4801:14317" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1322px] tracking-[0.25px] w-[406px]" data-node-id="4801:14318" style={{ fontVariationSettings: '"wdth" 100' }}>
            Data privacy concerns intensify
          </p>
        </div>
        <a className="absolute contents cursor-pointer left-0 top-[281px]" data-node-id="4801:14319">
          <div className="absolute bg-[#141218] inset-[33.25%_0_55.62%_0] overflow-clip rounded-[21px]" data-node-id="4801:14320" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[326px]" data-node-id="4801:14321" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14321;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14321;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14321;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">SELF-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[326px]" data-node-id="4801:14322" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14322;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14322;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[295px] tracking-[0.25px] whitespace-nowrap" data-node-id="4801:14323" style={{ fontVariationSettings: '"wdth" 100' }}>{`Quantum computing's disruptive potential`}</p>
        </a>
        <div className="absolute contents left-0 top-[64px]" data-node-id="4801:14324">
          <div className="absolute bg-[#141218] inset-[7.57%_0_81.3%_0] overflow-clip rounded-[21px]" data-node-id="4801:14325" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute bg-[rgba(230,224,233,0.12)] inset-0" data-node-id="I4801:14325;52350:28403" data-name="State-layer" />
          </div>
          <div className="absolute contents left-[153px] top-[108px]" data-node-id="4801:14326">
            <div className="absolute contents left-[153px] top-[108px]" data-node-id="4801:14327">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[153px] overflow-clip rounded-[8px] top-[108px]" data-node-id="4801:14328" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14328;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14328;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[13.85%_57.92%_84.87%_38.64%]" data-node-id="4801:14329" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[109px]" data-node-id="4801:14330" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14330;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14330;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14330;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">DEFAULT VIEW</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#00c2a7] text-[14px] top-[78px] tracking-[0.25px] whitespace-nowrap" data-node-id="4801:14331" style={{ fontVariationSettings: '"wdth" 100' }}>
            Insights landscape
          </p>
        </div>
        <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-px overflow-clip rounded-[100px] top-0 w-[131px]" data-node-id="4801:14332" data-name="Button-dark">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14332;53923:27731" data-name="state-layer">
            <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14332;53923:27732" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon9} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14332;53923:27733" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Filter insights</p>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#4a4458] content-stretch cursor-pointer flex flex-col items-center justify-center left-[269px] overflow-clip rounded-[100px] top-0" data-node-id="4801:14333" data-name="Button-dark">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14333;53923:27661" data-name="state-layer">
            <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14333;53923:27662" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon10} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#e8def8] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14333;53923:27663" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Start new chat</p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[138px] overflow-clip rounded-[100px] top-0 w-[104px]" data-node-id="4801:14334" data-name="Button-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14334;53923:27747" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14334;53923:27748" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Sort by: Date</p>
            </div>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[171px] w-[427px]" data-node-id="4801:14335">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={A.imgLine232} />
          </div>
        </div>
      </div>
      <ContentHost x={728} y={258} />
    </div>
  );
}