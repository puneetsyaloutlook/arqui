import { A } from '../assets/a14558';
import { ContentHost } from './cs1378_20056host';



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
  property1?: "Org views";
};

function SectionNav({ className, property1 = "Org views" }: SectionNavProps) {
  return (
    <div className={className || "h-[956px] relative w-[242px]"} data-node-id="1305:11432">
      <div className="absolute bg-[#141218] h-[956px] left-0 top-0 w-[242px]" data-node-id="1305:11400" />
      <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[189px] px-[8px] size-[48px] top-[15px]" data-node-id="1333:16207" data-name="Icon button-dark">
        <div className="border border-[#4a4458] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1333:16207;51525:5077" data-name="container">
          <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1333:16207;51525:5078" data-name="state-layer">
            <div className="relative shrink-0 size-[24px]" data-node-id="I1333:16207;51525:5079" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon3} />
            </div>
          </div>
        </div>
      </div>
      <Frame383 className="absolute h-[48px] left-[21px] top-[15px] w-[86px]" />
      <a className="absolute contents cursor-pointer left-[21px] top-[233px]" data-node-id="1305:11402">
        <div className="absolute bg-[#141218] inset-[24.37%_10.33%_53.66%_8.68%] overflow-clip rounded-[34px]" data-node-id="1305:11403" data-name="Building blocks/Card states/Outlined - dark" />
        <div className="absolute flex inset-[26.78%_61.98%_67.78%_16.94%] items-center justify-center" data-node-id="1305:11404" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector2} />
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-[color:var(--white,white)] top-[323px] tracking-[0.15px] whitespace-nowrap" data-node-id="1305:11405" style={{ fontVariationSettings: '"wdth" 100' }}>
          Current work
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[35px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[353px] w-[157px]" data-node-id="1305:11406" style={{ fontVariationSettings: '"wdth" 100' }}>
          Navigate operational complexity, current priorities, and ongoing challenges.
        </p>
      </a>
      <div className="absolute contents left-[21px] top-[697px]" data-node-id="1305:11407">
        <div className="absolute bg-[#06070a] inset-[72.91%_0_3.66%_8.68%] overflow-clip rounded-bl-[34px] rounded-tl-[34px]" data-node-id="1305:11408" data-name="Building blocks/Card states/Outlined - dark">
          <div className="absolute bg-[rgba(230,224,233,0.12)] inset-0" data-node-id="I1305:11408;52350:28403" data-name="State-layer" />
        </div>
        <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[#00c2a7] text-[18px] top-[787px] tracking-[0.15px] whitespace-nowrap" data-node-id="1305:11409" style={{ fontVariationSettings: '"wdth" 100' }}>
          Organisational views
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[81px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[819px] w-[168px]" data-node-id="1305:11410" style={{ fontVariationSettings: '"wdth" 100' }}>
          Review the organsation’s digital twin to see insights and opportunities for improving how the organisation works.
        </p>
        <div className="absolute inset-[75.1%_63.22%_18.93%_16.94%]" data-node-id="1305:11411" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector3} />
        </div>
      </div>
      <a className="absolute contents cursor-pointer left-[21px] top-[461px]" data-node-id="1305:11412">
        <div className="absolute bg-[#141218] inset-[48.22%_10.33%_28.97%_8.68%] overflow-clip rounded-[34px]" data-node-id="1305:11413" data-name="Building blocks/Card states/Outlined - dark" />
        <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-white top-[545px] tracking-[0.15px] whitespace-nowrap" data-node-id="1305:11414" style={{ fontVariationSettings: '"wdth" 100' }}>
          Scenario planning
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[76px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[575px] w-[157px]" data-node-id="1305:11415" style={{ fontVariationSettings: '"wdth" 100' }}>
          Test strategic ideas, assess risks and opportunities, and visualise the implications of different choices.
        </p>
        <div className="absolute inset-[50.42%_57.85%_44.56%_16.94%]" data-node-id="1305:11416" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector4} />
        </div>
      </a>
      <a className="absolute contents cursor-pointer left-[21px] top-[105px]" data-node-id="1305:11417">
        <div className="absolute contents left-[21px] top-[105px]" data-node-id="1305:11418">
          <div className="absolute bg-[#141218] cursor-pointer inset-[10.98%_10.33%_77.51%_8.68%] overflow-clip rounded-[34px]" data-node-id="1305:11419" data-name="Building blocks/Card states/Outlined - dark" />
          <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-[color:var(--white,white)] top-[174px] tracking-[0.15px] whitespace-nowrap" data-node-id="1305:11420" style={{ fontVariationSettings: '"wdth" 100' }}>
            Daily dashboard
          </p>
        </div>
        <div className="absolute inset-[12.45%_68.6%_82.53%_18.18%]" data-node-id="1305:11421" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector5} />
        </div>
      </a>
    </div>
  );
}

export default function Root() {
  return (
    <div className="bg-[#202125] relative size-full" data-node-id="4801:14558" data-name="112">
      <div className="absolute bg-gradient-to-b from-[#1a1b1f] from-[6.132%] h-[273px] left-[728px] to-[#202125] top-[241px] w-[1000px]" data-node-id="4801:14559" />
      <div className="absolute bg-[#141218] h-[956px] left-0 top-0 w-[242px]" data-node-id="4801:14560" />
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[265px] text-[#ed00b8] text-[28px] top-[27px] whitespace-nowrap" data-node-id="4801:14561" style={{ fontVariationSettings: '"wdth" 100' }}>
        Organisational views
      </p>
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[728px] text-[#00c2a7] text-[16px] top-[108px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14562" style={{ fontVariationSettings: '"wdth" 100' }}>
        Data quality assessment
      </p>
      <SectionNav className="absolute h-[956px] left-0 top-0 w-[242px]" />
      <Group605 className="absolute h-[27px] left-[1630px] top-[35px] w-[69px]" />
      <SearchBarDark className="absolute bg-[#2b2930] content-stretch flex h-[56px] items-center left-[555px] max-w-[720px] min-w-[360px] overflow-clip rounded-[28px] top-[20px] w-[718px]" placeholderText="What’s on your mind?" state="enabled" />
      <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col items-center justify-center left-[1484px] overflow-clip rounded-[100px] top-[28px]" data-node-id="4801:14566" data-name="Button-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14566;53923:27766" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14566;53923:27767" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14566;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Get help</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[1292px] overflow-clip rounded-[100px] top-[27px]" data-node-id="4801:14567" data-name="Button-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14567;53923:27766" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14567;53923:27767" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon5} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14567;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Invite to meeting</p>
          </div>
        </div>
      </div>
      <ContentHost x={728} y={191} />
      <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[20px] left-[729px] text-[14px] text-white top-[141px] tracking-[0.25px] w-[763px] whitespace-pre-wrap" data-node-id="4801:14569" style={{ fontVariationSettings: '"wdth" 100' }}>{`To ensure the insights you see are as reliable as possible, this section  provides a quick assessment of the data quality within the organisation’s digital  twin.`}</p>
      <div className="absolute bg-[#202125] h-[848px] left-[265px] overflow-x-clip overflow-y-auto top-[107px] w-[427px]" data-node-id="4801:14570">
        <div className="absolute contents left-0 top-[158px]" data-node-id="4801:14571">
          <div className="absolute bg-[#141218] inset-[18.63%_0_70.28%_0] overflow-clip rounded-[21px]" data-node-id="4801:14572" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute bg-[rgba(230,224,233,0.12)] inset-0" data-node-id="I4801:14572;52350:28403" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[203px]" data-node-id="4801:14573" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14573;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14573;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon6} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14573;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">DEFAULT VIEW</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[156px] overflow-clip rounded-[8px] top-[203px]" data-node-id="4801:14574" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14574;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14574;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">DIGITAL TWIN</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#00c2a7] text-[14px] top-[172px] tracking-[0.25px] w-[406px]" data-node-id="4801:14575" style={{ fontVariationSettings: '"wdth" 100' }}>
            Data quality assessment
          </p>
        </div>
        <a className="absolute contents cursor-pointer left-0 top-[274px]" data-node-id="4801:14576">
          <div className="absolute bg-[#141218] inset-[32.31%_0_56.6%_0] overflow-clip rounded-[21px]" data-node-id="4801:14577" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[319px]" data-node-id="4801:14578" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14578;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14578;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14578;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[319px]" data-node-id="4801:14579" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14579;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14579;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[288px] tracking-[0.25px] w-[406px]" data-node-id="4801:14580" style={{ fontVariationSettings: '"wdth" 100' }}>
            Innovation bottleneck
          </p>
        </a>
        <div className="absolute contents left-0 top-[670px]" data-node-id="4801:14581">
          <div className="absolute bg-[#141218] cursor-pointer inset-[79.01%_0_9.91%_0] overflow-clip rounded-[21px]" data-node-id="4801:14582" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[715px]" data-node-id="4801:14583" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14583;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14583;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14583;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[715px]" data-node-id="4801:14584" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14584;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14584;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[684px] tracking-[0.25px] w-[406px]" data-node-id="4801:14585" style={{ fontVariationSettings: '"wdth" 100' }}>
            Mitigating talent retention risks
          </p>
        </div>
        <div className="absolute contents left-0 top-[472px]" data-node-id="4801:14586">
          <div className="absolute bg-[#141218] cursor-pointer inset-[55.66%_0_33.25%_0] overflow-clip rounded-[21px]" data-node-id="4801:14587" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[518px]" data-node-id="4801:14588" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14588;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14588;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14588;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[517px]" data-node-id="4801:14589" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14589;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14589;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">COST OPTIMISATION</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[341px] top-[516px]" data-node-id="4801:14590">
            <div className="absolute contents left-[341px] top-[516px]" data-node-id="4801:14591">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[341px] overflow-clip rounded-[8px] top-[516px]" data-node-id="4801:14592" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14592;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14592;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[61.91%_13.89%_36.81%_82.67%]" data-node-id="4801:14593" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[486px] tracking-[0.25px] w-[406px]" data-node-id="4801:14594" style={{ fontVariationSettings: '"wdth" 100' }}>
            Potential for automation
          </p>
        </div>
        <div className="absolute contents left-0 top-[868px]" data-node-id="4801:14595">
          <div className="absolute bg-[#141218] cursor-pointer inset-[102.36%_0_-13.44%_0] overflow-clip rounded-[21px]" data-node-id="4801:14596" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[915px]" data-node-id="4801:14597" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14597;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14597;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14597;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[913px]" data-node-id="4801:14598" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14598;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14598;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[882px] tracking-[0.25px] w-[406px]" data-node-id="4801:14599" style={{ fontVariationSettings: '"wdth" 100' }}>
            Potential for data-driven decision making
          </p>
        </div>
        <div className="absolute contents left-0 top-[373px]" data-node-id="4801:14600">
          <div className="absolute bg-[#141218] cursor-pointer inset-[43.99%_0_44.93%_0] overflow-clip rounded-[21px]" data-node-id="4801:14601" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[418px]" data-node-id="4801:14602" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14602;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14602;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14602;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[418px]" data-node-id="4801:14603" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14603;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14603;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[353px] top-[417px]" data-node-id="4801:14604">
            <div className="absolute contents left-[353px] top-[417px]" data-node-id="4801:14605">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[353px] overflow-clip rounded-[8px] top-[417px]" data-node-id="4801:14606" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14606;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14606;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[50.24%_11.08%_48.48%_85.48%]" data-node-id="4801:14607" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[387px] tracking-[0.25px] w-[406px]" data-node-id="4801:14608" style={{ fontVariationSettings: '"wdth" 100' }}>
            Siloed information sharing
          </p>
        </div>
        <div className="absolute contents left-0 top-[769px]" data-node-id="4801:14609">
          <div className="absolute bg-[#141218] cursor-pointer inset-[90.68%_0_-1.77%_0] overflow-clip rounded-[21px]" data-node-id="4801:14610" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[814px]" data-node-id="4801:14611" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14611;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14611;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14611;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[814px]" data-node-id="4801:14612" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14612;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14612;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">TALENT MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[354px] top-[813px]" data-node-id="4801:14613">
            <div className="absolute contents left-[354px] top-[813px]" data-node-id="4801:14614">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[354px] overflow-clip rounded-[8px] top-[813px]" data-node-id="4801:14615" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14615;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14615;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[96.93%_10.85%_1.79%_85.71%]" data-node-id="4801:14616" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[783px] tracking-[0.25px] w-[406px]" data-node-id="4801:14617" style={{ fontVariationSettings: '"wdth" 100' }}>
            Overlooking internal talent
          </p>
        </div>
        <div className="absolute contents left-0 top-[571px]" data-node-id="4801:14618">
          <div className="absolute bg-[#141218] cursor-pointer inset-[67.33%_0_21.58%_0] overflow-clip rounded-[21px]" data-node-id="4801:14619" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[616px]" data-node-id="4801:14620" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14620;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14620;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14620;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[616px]" data-node-id="4801:14621" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14621;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14621;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[585px] tracking-[0.25px] w-[406px]" data-node-id="4801:14622" style={{ fontVariationSettings: '"wdth" 100' }}>
            Evolving stakeholder expectations
          </p>
        </div>
        <div className="absolute contents left-0 top-[967px]" data-node-id="4801:14623">
          <div className="absolute bg-[#141218] cursor-pointer inset-[114.03%_0_-25.59%_0] overflow-clip rounded-[21px]" data-node-id="4801:14624" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[1012px]" data-node-id="4801:14625" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14625;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14625;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14625;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[181px] overflow-clip rounded-[8px] top-[1012px]" data-node-id="4801:14626" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14626;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14626;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[368px] top-[1011px]" data-node-id="4801:14627">
            <div className="absolute contents left-[368px] top-[1011px]" data-node-id="4801:14628">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[368px] overflow-clip rounded-[8px] top-[1011px]" data-node-id="4801:14629" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14629;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14629;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[120.28%_7.57%_-21.56%_88.99%]" data-node-id="4801:14630" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[981px] tracking-[0.25px] w-[406px]" data-node-id="4801:14631" style={{ fontVariationSettings: '"wdth" 100' }}>
            Risk of project management silos
          </p>
        </div>
        <a className="absolute contents cursor-pointer left-0 top-[57px]" data-node-id="4801:14632">
          <div className="absolute bg-[#141218] inset-[6.72%_0_82.19%_0] overflow-clip rounded-[21px]" data-node-id="4801:14633" data-name="Building blocks/Card states/Outlined - dark" />
          <div className="absolute contents left-[275px] top-[101px]" data-node-id="4801:14634">
            <div className="absolute contents left-[275px] top-[101px]" data-node-id="4801:14635">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[275px] overflow-clip rounded-[8px] top-[101px]" data-node-id="4801:14636" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14636;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14636;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[12.97%_29.35%_85.75%_67.21%]" data-node-id="4801:14637" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[14px] overflow-clip rounded-[8px] top-[102px]" data-node-id="4801:14638" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14638;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14638;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon6} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14638;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">DEFAULT VIEW</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[158px] overflow-clip rounded-[8px] top-[102px]" data-node-id="4801:14639" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14639;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14639;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">DIGITAL TWIN</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[14px] text-[#d0bcff] text-[14px] top-[71px] tracking-[0.25px] w-[406px]" data-node-id="4801:14640" style={{ fontVariationSettings: '"wdth" 100' }}>
            Digital twin overview
          </p>
        </a>
        <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-px overflow-clip rounded-[100px] top-0 w-[131px]" data-node-id="4801:14641" data-name="Button-dark">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14641;53923:27731" data-name="state-layer">
            <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14641;53923:27732" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon9} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14641;53923:27733" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Filter insights</p>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#4a4458] content-stretch cursor-pointer flex flex-col items-center justify-center left-[269px] overflow-clip rounded-[100px] top-0" data-node-id="4801:14642" data-name="Button-dark">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14642;53923:27661" data-name="state-layer">
            <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14642;53923:27662" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon10} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#e8def8] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14642;53923:27663" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Start new chat</p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[138px] overflow-clip rounded-[100px] top-0 w-[104px]" data-node-id="4801:14643" data-name="Button-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14643;53923:27747" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14643;53923:27748" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Sort by: Date</p>
            </div>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[263px] w-[427px]" data-node-id="4801:14644">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={A.imgLine221} />
          </div>
        </div>
      </div>
    </div>
  );
}