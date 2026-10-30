import { A } from '../assets/a14079';
import { ContentHost } from './cs1304_8182host';



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
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
      </div>
      <button className="absolute block cursor-pointer inset-[0_65.22%_11.11%_0]" data-node-id="1305:11697" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector2} />
      </button>
    </div>
  );
}

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

function Frame383({ className }: { className?: string }) {
  return (
    <div className={className || "h-[48px] relative w-[86px]"} data-node-id="727:829">
      <p className="[word-break:break-word] absolute font-logo leading-[normal] left-0 not-italic text-[#b4b4b4] text-[40px] top-0 whitespace-nowrap" data-node-id="727:828">
        ARQUI
      </p>
    </div>
  );
}

export default function Root() {
  return (
    <div className="bg-[#202125] relative size-full" data-node-id="4801:14079" data-name="92">
      <div className="absolute bg-gradient-to-b from-[#1a1b1f] from-[6.132%] h-[273px] left-[728px] to-[#202125] top-[306px] w-[1000px]" data-node-id="4801:14080" />
      <div className="absolute bg-[#141218] h-[956px] left-0 top-0 w-[242px]" data-node-id="4801:14081" />
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[265px] text-[#ed00b8] text-[28px] top-[27px] whitespace-nowrap" data-node-id="4801:14082" style={{ fontVariationSettings: '"wdth" 100' }}>
        Current work
      </p>
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[728px] text-[#00c2a7] text-[16px] top-[112px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14083" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cybersecurity risks in remote work environment
      </p>
      <p className="[word-break:break-word] absolute font-roboto font-normal h-[80px] leading-[20px] left-[728px] text-[#aeaeae] text-[14px] top-[143px] tracking-[0.25px] w-[749px]" data-node-id="4801:14084" style={{ fontVariationSettings: '"wdth" 100' }}>
        With the adoption of remote work arrangements, the app detects a rise in security incidents like phishing attempts and unauthorized access attempts. Analysis of network traffic and employee behavior reveals potential weaknesses in endpoint security and VPN configurations. This poses a significant risk to sensitive data and business operations
      </p>
      <div className="absolute contents left-[1533px] top-[210px]" data-node-id="4801:14085">
        <div className="absolute contents left-[1533px] top-[210px]" data-node-id="4801:14086">
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[1555px] text-[#d0bcff] text-[12px] top-[212px] whitespace-nowrap" data-node-id="4801:14087" style={{ fontVariationSettings: '"wdth" 100' }}>
            Check sources
          </p>
          <div className="absolute left-[1533px] size-[20px] top-[210px]" data-node-id="4801:14088" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
          </div>
        </div>
      </div>
      <div className="absolute h-[956px] left-0 top-0 w-[242px]" data-node-id="4801:14090" data-name="Section nav">
        <div className="absolute bg-[#141218] h-[956px] left-0 top-0 w-[242px]" data-node-id="I4801:14090;1305:11340" />
        <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[189px] px-[8px] size-[48px] top-[15px]" data-node-id="I4801:14090;1333:16079" data-name="Icon button-dark">
          <div className="border border-[#4a4458] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I4801:14090;1333:16079;51525:5077" data-name="container">
            <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I4801:14090;1333:16079;51525:5078" data-name="state-layer">
              <div className="relative shrink-0 size-[24px]" data-node-id="I4801:14090;1333:16079;51525:5079" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon3} />
              </div>
            </div>
          </div>
        </div>
        <Frame383 className="absolute h-[48px] left-[21px] top-[15px] w-[86px]" />
        <div className="absolute contents left-[21px] top-[233px]" data-node-id="I4801:14090;1305:11342">
          <div className="absolute bg-[#06070a] inset-[24.37%_0_53.66%_8.68%] overflow-clip rounded-bl-[34px] rounded-tl-[34px]" data-node-id="I4801:14090;1305:11343" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute bg-[rgba(230,224,233,0.12)] inset-0" data-node-id="I4801:14090;1305:11343;52350:28403" data-name="State-layer" />
          </div>
          <div className="absolute flex inset-[26.78%_61.98%_67.78%_16.94%] items-center justify-center" data-node-id="I4801:14090;1305:11344" style={{ containerType: "size" }}>
            <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
              <div className="relative size-full" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector3} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[#00c2a7] text-[18px] top-[323px] tracking-[0.15px] whitespace-nowrap" data-node-id="I4801:14090;1305:11345" style={{ fontVariationSettings: '"wdth" 100' }}>
            Current work
          </p>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[35px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[353px] w-[157px]" data-node-id="I4801:14090;1305:11346" style={{ fontVariationSettings: '"wdth" 100' }}>
            Navigate operational complexity, current priorities, and ongoing challenges.
          </p>
        </div>
        <a className="absolute contents cursor-pointer left-[21px] top-[697px]" data-node-id="I4801:14090;1305:11347">
          <div className="absolute bg-[#141218] inset-[72.91%_10.33%_3.66%_8.68%] overflow-clip rounded-[34px]" data-node-id="I4801:14090;1305:11348" data-name="Building blocks/Card states/Outlined - dark" />
          <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-white top-[787px] tracking-[0.15px] whitespace-nowrap" data-node-id="I4801:14090;1305:11349" style={{ fontVariationSettings: '"wdth" 100' }}>
            Organisational views
          </p>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[81px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[819px] w-[168px]" data-node-id="I4801:14090;1305:11350" style={{ fontVariationSettings: '"wdth" 100' }}>
            Review the organsation’s digital twin to see insights and opportunities for improving how the organisation works.
          </p>
          <div className="absolute inset-[75.1%_63.22%_18.93%_16.94%]" data-node-id="I4801:14090;1305:11351" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector4} />
          </div>
        </a>
        <a className="absolute contents cursor-pointer left-[21px] top-[461px]" data-node-id="I4801:14090;1305:11352">
          <div className="absolute bg-[#141218] inset-[48.22%_10.33%_28.97%_8.68%] overflow-clip rounded-[34px]" data-node-id="I4801:14090;1305:11353" data-name="Building blocks/Card states/Outlined - dark" />
          <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-white top-[545px] tracking-[0.15px] whitespace-nowrap" data-node-id="I4801:14090;1305:11354" style={{ fontVariationSettings: '"wdth" 100' }}>
            Scenario planning
          </p>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[76px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[575px] w-[157px]" data-node-id="I4801:14090;1305:11355" style={{ fontVariationSettings: '"wdth" 100' }}>
            Test strategic ideas, assess risks and opportunities, and visualise the implications of different choices.
          </p>
          <div className="absolute inset-[50.42%_57.85%_44.56%_16.94%]" data-node-id="I4801:14090;1305:11356" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector5} />
          </div>
        </a>
        <a className="absolute contents cursor-pointer left-[21px] top-[105px]" data-node-id="I4801:14090;1305:11357">
          <div className="absolute contents left-[21px] top-[105px]" data-node-id="I4801:14090;1305:11358">
            <div className="absolute bg-[#141218] cursor-pointer inset-[10.98%_10.33%_77.51%_8.68%] overflow-clip rounded-[34px]" data-node-id="I4801:14090;1305:11359" data-name="Building blocks/Card states/Outlined - dark" />
            <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-[color:var(--white,white)] top-[174px] tracking-[0.15px] whitespace-nowrap" data-node-id="I4801:14090;1305:11360" style={{ fontVariationSettings: '"wdth" 100' }}>
              Daily dashboard
            </p>
          </div>
          <div className="absolute inset-[12.45%_68.6%_82.53%_18.18%]" data-node-id="I4801:14090;1305:11361" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
          </div>
        </a>
      </div>
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[1537px] text-[12px] text-white top-[125px] whitespace-nowrap" data-node-id="4801:14091" style={{ fontVariationSettings: '"wdth" 100' }}>
        Is this insight useful?
      </p>
      <div className="absolute bg-[#202125] h-[844px] left-[265px] overflow-x-clip overflow-y-auto top-[112px] w-[427px]" data-node-id="4801:14092">
        <div className="absolute contents left-0 top-[50px]" data-node-id="4801:14093">
          <div className="absolute bg-[#141218] cursor-pointer inset-[5.92%_0_82.94%_0] overflow-clip rounded-[21px]" data-node-id="4801:14094" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[95px]" data-node-id="4801:14095" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14095;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14095;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14095;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[95px]" data-node-id="4801:14096" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14096;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14096;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[372px] top-[94px]" data-node-id="4801:14097">
            <div className="absolute contents left-[372px] top-[94px]" data-node-id="4801:14098">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[372px] overflow-clip rounded-[8px] top-[94px]" data-node-id="4801:14099" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14099;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14099;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[12.2%_6.63%_86.51%_89.93%]" data-node-id="4801:14100" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[64px] tracking-[0.25px] w-[406px]" data-node-id="4801:14101" style={{ fontVariationSettings: '"wdth" 100' }}>
            Inventory inaccuracy leading to stockouts and missed sales
          </p>
        </div>
        <div className="absolute contents left-0 top-[248px]" data-node-id="4801:14102">
          <div className="absolute bg-[#141218] cursor-pointer inset-[29.38%_0_59.48%_0] overflow-clip rounded-[21px]" data-node-id="4801:14103" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[293px]" data-node-id="4801:14104" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14104;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14104;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14104;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[293px]" data-node-id="4801:14105" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14105;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14105;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[262px] tracking-[0.25px] w-[406px]" data-node-id="4801:14106" style={{ fontVariationSettings: '"wdth" 100' }}>
            Unutilized data assets hinder decision-making
          </p>
        </div>
        <div className="absolute contents left-0 top-[644px]" data-node-id="4801:14107">
          <div className="absolute bg-[#141218] cursor-pointer inset-[76.3%_0_12.56%_0] overflow-clip rounded-[21px]" data-node-id="4801:14108" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[689px]" data-node-id="4801:14109" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14109;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14109;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14109;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[689px]" data-node-id="4801:14110" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14110;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14110;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[658px] tracking-[0.25px] w-[406px]" data-node-id="4801:14111" style={{ fontVariationSettings: '"wdth" 100' }}>
            Declining customer satisfaction scores
          </p>
        </div>
        <div className="absolute contents left-0 top-[446px]" data-node-id="4801:14112">
          <div className="absolute bg-[#141218] cursor-pointer inset-[52.84%_0_36.02%_0] overflow-clip rounded-[21px]" data-node-id="4801:14113" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[492px]" data-node-id="4801:14114" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14114;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14114;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon5} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14114;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[491px]" data-node-id="4801:14115" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14115;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14115;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">VENDOR MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[359px] top-[490px]" data-node-id="4801:14116">
            <div className="absolute contents left-[359px] top-[490px]" data-node-id="4801:14117">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[359px] overflow-clip rounded-[8px] top-[490px]" data-node-id="4801:14118" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14118;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14118;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[59.12%_9.68%_39.59%_86.89%]" data-node-id="4801:14119" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[460px] tracking-[0.25px] w-[406px]" data-node-id="4801:14120" style={{ fontVariationSettings: '"wdth" 100' }}>
            Vendor management inefficiencies impacting delivery
          </p>
        </div>
        <div className="absolute contents left-0 top-[842px]" data-node-id="4801:14121">
          <div className="absolute bg-[#141218] cursor-pointer inset-[99.76%_0_-10.9%_0] overflow-clip rounded-[21px]" data-node-id="4801:14122" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[889px]" data-node-id="4801:14123" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14123;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14123;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon5} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14123;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[887px]" data-node-id="4801:14124" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14124;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14124;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[856px] tracking-[0.25px] w-[406px]" data-node-id="4801:14125" style={{ fontVariationSettings: '"wdth" 100' }}>
            Marketing automation ROI below expectations
          </p>
        </div>
        <div className="absolute contents left-0 top-[347px]" data-node-id="4801:14126">
          <div className="absolute bg-[#141218] cursor-pointer inset-[41.11%_0_47.75%_0] overflow-clip rounded-[21px]" data-node-id="4801:14127" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[392px]" data-node-id="4801:14128" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14128;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14128;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14128;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[392px]" data-node-id="4801:14129" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14129;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14129;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[372px] top-[391px]" data-node-id="4801:14130">
            <div className="absolute contents left-[372px] top-[391px]" data-node-id="4801:14131">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[372px] overflow-clip rounded-[8px] top-[391px]" data-node-id="4801:14132" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14132;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14132;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[47.39%_6.63%_51.32%_89.93%]" data-node-id="4801:14133" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[361px] tracking-[0.25px] w-[406px]" data-node-id="4801:14134" style={{ fontVariationSettings: '"wdth" 100' }}>
            Unutilized data assets hinder decision-making
          </p>
        </div>
        <div className="absolute contents left-0 top-[743px]" data-node-id="4801:14135">
          <div className="absolute bg-[#141218] cursor-pointer inset-[88.03%_0_0.83%_0] overflow-clip rounded-[21px]" data-node-id="4801:14136" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[788px]" data-node-id="4801:14137" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14137;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14137;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14137;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[788px]" data-node-id="4801:14138" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14138;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14138;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[354px] top-[787px]" data-node-id="4801:14139">
            <div className="absolute contents left-[354px] top-[787px]" data-node-id="4801:14140">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[354px] overflow-clip rounded-[8px] top-[787px]" data-node-id="4801:14141" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14141;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14141;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[94.31%_10.85%_4.4%_85.71%]" data-node-id="4801:14142" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[757px] tracking-[0.25px] w-[406px]" data-node-id="4801:14143" style={{ fontVariationSettings: '"wdth" 100' }}>
            Employee productivity lags in remote work model
          </p>
        </div>
        <div className="absolute contents left-0 top-[545px]" data-node-id="4801:14144">
          <div className="absolute bg-[#141218] cursor-pointer inset-[64.57%_0_24.29%_0] overflow-clip rounded-[21px]" data-node-id="4801:14145" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[590px]" data-node-id="4801:14146" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14146;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14146;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon5} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14146;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[590px]" data-node-id="4801:14147" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14147;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14147;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">COST OPTIMISATION</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[559px] tracking-[0.25px] w-[406px]" data-node-id="4801:14148" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cloud migration costs exceeding budget
          </p>
        </div>
        <div className="absolute contents left-0 top-[941px]" data-node-id="4801:14149">
          <div className="absolute bg-[#141218] cursor-pointer inset-[111.49%_0_-22.63%_0] overflow-clip rounded-[21px]" data-node-id="4801:14150" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[986px]" data-node-id="4801:14151" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14151;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14151;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14151;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[986px]" data-node-id="4801:14152" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14152;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14152;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[372px] top-[985px]" data-node-id="4801:14153">
            <div className="absolute contents left-[372px] top-[985px]" data-node-id="4801:14154">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[372px] overflow-clip rounded-[8px] top-[985px]" data-node-id="4801:14155" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14155;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14155;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[117.77%_6.63%_-19.06%_89.93%]" data-node-id="4801:14156" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[955px] tracking-[0.25px] w-[406px]" data-node-id="4801:14157" style={{ fontVariationSettings: '"wdth" 100' }}>
            Untapped data assets hinder decision-making
          </p>
        </div>
        <div className="absolute contents left-0 top-[1238px]" data-node-id="4801:14158">
          <div className="absolute bg-[#141218] cursor-pointer inset-[146.68%_0_-57.82%_0] overflow-clip rounded-[21px]" data-node-id="4801:14159" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1283px]" data-node-id="4801:14160" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14160;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14160;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14160;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1283px]" data-node-id="4801:14161" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14161;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14161;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[372px] top-[1282px]" data-node-id="4801:14162">
            <div className="absolute contents left-[372px] top-[1282px]" data-node-id="4801:14163">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[372px] overflow-clip rounded-[8px] top-[1282px]" data-node-id="4801:14164" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14164;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14164;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[152.96%_6.63%_-54.25%_89.93%]" data-node-id="4801:14165" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1252px] tracking-[0.25px] w-[406px]" data-node-id="4801:14166" style={{ fontVariationSettings: '"wdth" 100' }}>
            Inventory inaccuracy leading to stockouts
          </p>
        </div>
        <div className="absolute contents left-0 top-[1040px]" data-node-id="4801:14167">
          <div className="absolute bg-[#141218] cursor-pointer inset-[123.22%_0_-34.36%_0] overflow-clip rounded-[21px]" data-node-id="4801:14168" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1086px]" data-node-id="4801:14169" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14169;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14169;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon5} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14169;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1085px]" data-node-id="4801:14170" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14170;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14170;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1054px] tracking-[0.25px] w-[406px]" data-node-id="4801:14171" style={{ fontVariationSettings: '"wdth" 100' }}>
            Shadow IT usage poses security and compliance concerns
          </p>
        </div>
        <div className="absolute contents left-0 top-[1337px]" data-node-id="4801:14172">
          <div className="absolute bg-[#141218] cursor-pointer inset-[158.41%_0_-69.55%_0] overflow-clip rounded-[21px]" data-node-id="4801:14173" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1382px]" data-node-id="4801:14174" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14174;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14174;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon5} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14174;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1382px]" data-node-id="4801:14175" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14175;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14175;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1351px] tracking-[0.25px] w-[406px]" data-node-id="4801:14176" style={{ fontVariationSettings: '"wdth" 100' }}>
            Skills gap hinders innovation in key area
          </p>
        </div>
        <div className="absolute contents left-0 top-[1139px]" data-node-id="4801:14177">
          <div className="absolute bg-[#141218] cursor-pointer inset-[134.95%_0_-46.09%_0] overflow-clip rounded-[21px]" data-node-id="4801:14178" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1184px]" data-node-id="4801:14179" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14179;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14179;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon5} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14179;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1184px]" data-node-id="4801:14180" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14180;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14180;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[372px] top-[1183px]" data-node-id="4801:14181">
            <div className="absolute contents left-[372px] top-[1183px]" data-node-id="4801:14182">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[372px] overflow-clip rounded-[8px] top-[1183px]" data-node-id="4801:14183" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14183;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14183;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[141.23%_6.63%_-42.52%_89.93%]" data-node-id="4801:14184" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[1153px] tracking-[0.25px] w-[406px]" data-node-id="4801:14185" style={{ fontVariationSettings: '"wdth" 100' }}>
            Remote work silos hinder collaboration
          </p>
        </div>
        <div className="absolute contents left-0 top-[149px]" data-node-id="4801:14186">
          <div className="absolute bg-[#141218] inset-[17.65%_0_71.21%_0] overflow-clip rounded-[21px]" data-node-id="4801:14187" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute bg-[rgba(230,224,233,0.12)] inset-0" data-node-id="I4801:14187;52350:28403" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[194px]" data-node-id="4801:14188" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14188;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14188;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14188;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[194px]" data-node-id="4801:14189" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14189;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14189;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#00c2a7] text-[14px] top-[163px] tracking-[0.25px] w-[406px]" data-node-id="4801:14190" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cybersecurity risks in remote work environment
          </p>
        </div>
        <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-px overflow-clip rounded-[100px] top-0 w-[131px]" data-node-id="4801:14191" data-name="Button-dark">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14191;53923:27731" data-name="state-layer">
            <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14191;53923:27732" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon6} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14191;53923:27733" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Filter insights</p>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#4a4458] content-stretch cursor-pointer flex flex-col items-center justify-center left-[269px] overflow-clip rounded-[100px] top-0" data-node-id="4801:14192" data-name="Button-dark">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14192;53923:27661" data-name="state-layer">
            <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14192;53923:27662" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#e8def8] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14192;53923:27663" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Start new chat</p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[138px] overflow-clip rounded-[100px] top-0 w-[104px]" data-node-id="4801:14193" data-name="Button-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14193;53923:27747" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14193;53923:27748" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Sort by: Date</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[728px] overflow-clip rounded-[8px] top-[216px]" data-node-id="4801:14194" data-name="Input chip-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14194;53923:29048" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14194;53923:29049" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14194;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16px]">AUTO-GENERATED</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[893px] overflow-clip rounded-[8px] top-[216px]" data-node-id="4801:14195" data-name="Input chip-dark">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14195;53923:29057" data-name="state-layer">
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14195;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16px]">CYBERSECURITY</p>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[129px] items-center justify-center left-[1507px] top-[125px] w-0" data-node-id="4801:14196">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[129px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={A.imgLine220} />
            </div>
          </div>
        </div>
      </div>
      <Component12 className="absolute h-[41px] left-[1537px] top-[150px] w-[147px]" />
      <Group605 className="absolute h-[27px] left-[1630px] top-[35px] w-[69px]" />
      <SearchBarDark className="absolute bg-[#2b2930] content-stretch flex h-[56px] items-center left-[555px] max-w-[720px] min-w-[360px] overflow-clip rounded-[28px] top-[20px] w-[718px]" placeholderText="What’s on your mind?" state="enabled" />
      <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col items-center justify-center left-[1484px] overflow-clip rounded-[100px] top-[28px]" data-node-id="4801:14200" data-name="Button-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14200;53923:27766" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14200;53923:27767" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14200;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Get help</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[1292px] overflow-clip rounded-[100px] top-[27px]" data-node-id="4801:14201" data-name="Button-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14201;53923:27766" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14201;53923:27767" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon9} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14201;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Invite to meeting</p>
          </div>
        </div>
      </div>
      <ContentHost x={728} y={257} />
    </div>
  );
}