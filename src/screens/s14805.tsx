import { A } from '../assets/a14805';


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

type CheckboxesDarkProps = {
  className?: string;
  state?: "Enabled";
  type?: boolean;
};

function CheckboxesDark({ className, state = "Enabled", type = true }: CheckboxesDarkProps) {
  return (
    <button className={className || "content-stretch cursor-pointer flex flex-col items-center justify-center p-[4px] relative"} data-node-id="879:590">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[100px] shrink-0" data-node-id="879:591" data-name="state-layer">
        <div className="bg-[#d0bcff] relative rounded-[2px] shrink-0 size-[18px]" data-node-id="879:592" data-name="container" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="879:593" data-name="Icons/check_small">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIconsCheckSmall} />
        </div>
      </div>
    </button>
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
  property1?: "Dashboard";
};

function SectionNav({ className, property1 = "Dashboard" }: SectionNavProps) {
  return (
    <div className={className || "h-[956px] relative w-[242px]"} data-node-id="1305:11309">
      <div className="absolute bg-[#141218] h-[956px] left-0 top-0 w-[242px]" data-node-id="1304:7716" />
      <div className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[189px] px-[8px] size-[48px] top-[15px]" data-node-id="1333:15975" data-name="Icon button-dark">
        <div className="border border-[#4a4458] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1333:15975;51525:5077" data-name="container">
          <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1333:15975;51525:5078" data-name="state-layer">
            <div className="relative shrink-0 size-[24px]" data-node-id="I1333:15975;51525:5079" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
            </div>
          </div>
        </div>
      </div>
      <Frame383 className="absolute h-[48px] left-[21px] top-[15px] w-[86px]" />
      <a className="absolute contents cursor-pointer left-[21px] top-[233px]" data-node-id="1304:7719">
        <div className="absolute bg-[#141218] inset-[24.37%_10.33%_53.66%_8.68%] overflow-clip rounded-[34px]" data-node-id="1304:7720" data-name="Building blocks/Card states/Outlined - dark" />
        <div className="absolute flex inset-[26.78%_61.98%_67.78%_16.94%] items-center justify-center" data-node-id="1304:7721" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector2} />
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-white top-[323px] tracking-[0.15px] whitespace-nowrap" data-node-id="1304:7722" style={{ fontVariationSettings: '"wdth" 100' }}>
          Current work
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[35px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[353px] w-[157px]" data-node-id="1304:7723" style={{ fontVariationSettings: '"wdth" 100' }}>
          Navigate operational complexity, current priorities, and ongoing challenges.
        </p>
      </a>
      <a className="absolute contents cursor-pointer left-[21px] top-[697px]" data-node-id="1304:7724">
        <div className="absolute bg-[#141218] inset-[72.91%_10.33%_3.66%_8.68%] overflow-clip rounded-[34px]" data-node-id="1304:7725" data-name="Building blocks/Card states/Outlined - dark" />
        <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-white top-[787px] tracking-[0.15px] whitespace-nowrap" data-node-id="1304:7726" style={{ fontVariationSettings: '"wdth" 100' }}>
          Organisational views
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[81px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[819px] w-[168px]" data-node-id="1304:7727" style={{ fontVariationSettings: '"wdth" 100' }}>
          Review the organsation’s digital twin to see insights and opportunities for improving how the organisation works.
        </p>
        <div className="absolute inset-[75.1%_63.22%_18.93%_16.94%]" data-node-id="1304:7728" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector3} />
        </div>
      </a>
      <a className="absolute contents cursor-pointer left-[21px] top-[461px]" data-node-id="1304:7729">
        <div className="absolute bg-[#141218] inset-[48.22%_10.33%_28.97%_8.68%] overflow-clip rounded-[34px]" data-node-id="1304:7730" data-name="Building blocks/Card states/Outlined - dark" />
        <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[18px] text-white top-[545px] tracking-[0.15px] whitespace-nowrap" data-node-id="1304:7731" style={{ fontVariationSettings: '"wdth" 100' }}>
          Scenario planning
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[76px] leading-[normal] left-[44px] text-[#7d7d7d] text-[13px] top-[575px] w-[157px]" data-node-id="1304:7732" style={{ fontVariationSettings: '"wdth" 100' }}>
          Test strategic ideas, assess risks and opportunities, and visualise the implications of different choices.
        </p>
        <div className="absolute inset-[50.42%_57.85%_44.56%_16.94%]" data-node-id="1304:7733" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector4} />
        </div>
      </a>
      <div className="absolute contents left-[21px] top-[105px]" data-node-id="1305:11307">
        <div className="absolute contents left-[21px] top-[105px]" data-node-id="1304:7734">
          <div className="absolute bg-[#06070a] inset-[10.98%_0_77.51%_8.68%] overflow-clip rounded-bl-[34px] rounded-tl-[34px]" data-node-id="1305:11368" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute bg-[rgba(230,224,233,0.12)] inset-0" data-node-id="I1305:11368;52350:28403" data-name="State-layer" />
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[44px] text-[#00c2a7] text-[18px] top-[174px] tracking-[0.15px] whitespace-nowrap" data-node-id="1304:7736" style={{ fontVariationSettings: '"wdth" 100' }}>
            Daily dashboard
          </p>
        </div>
        <div className="absolute inset-[12.45%_68.6%_82.53%_18.18%]" data-node-id="1305:11304" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector5} />
        </div>
      </div>
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
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon1} />
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
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon2} />
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
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon3} />
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

export default function Root() {
  return (
    <div className="bg-[#202125] relative size-full" data-node-id="4801:14805" data-name="89">
      <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[280px] text-[#ed00b8] text-[28px] top-[29px] whitespace-nowrap" data-node-id="4801:14806" style={{ fontVariationSettings: '"wdth" 100' }}>
        Daily dashboard
      </p>
      <SearchBarDark className="absolute bg-[#2b2930] content-stretch flex h-[56px] items-center left-[555px] max-w-[720px] min-w-[360px] overflow-clip rounded-[28px] top-[20px] w-[718px]" placeholderText="What’s on your mind?" state="enabled" />
      <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col items-center justify-center left-[1484px] overflow-clip rounded-[100px] top-[28px]" data-node-id="4801:14808" data-name="Button-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14808;53923:27766" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14808;53923:27767" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon4} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14808;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Get help</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[1292px] overflow-clip rounded-[100px] top-[27px]" data-node-id="4801:14809" data-name="Button-dark">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14809;53923:27766" data-name="state-layer">
          <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14809;53923:27767" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon5} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14809;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Invite to meeting</p>
          </div>
        </div>
      </div>
      <SectionNav className="absolute h-[956px] left-0 top-0 w-[242px]" />
      <div className="absolute bg-[#202125] h-[851px] left-[265px] overflow-x-clip overflow-y-auto top-[105px] w-[1463px]" data-node-id="4801:14811">
        <div className="absolute bg-[#141218] h-[1143px] left-[246px] rounded-[34px] top-[105px] w-[1188px]" data-node-id="4801:14812" />
        <div className="absolute bg-[#141218] h-[825px] left-[246px] rounded-[21px] top-[1413px] w-[1188px]" data-node-id="4801:14813" />
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[12px] text-[#b5b5b5] text-[28px] top-0 whitespace-nowrap" data-node-id="4801:14814" style={{ fontVariationSettings: '"wdth" 100' }}>
          Today’s auto-insights (6)
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[12px] text-[#b5b5b5] text-[28px] top-[1308px] whitespace-nowrap" data-node-id="4801:14815" style={{ fontVariationSettings: '"wdth" 100' }}>
          Work-in-progress insights
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[12px] text-[#b5b5b5] text-[28px] top-[2326px] whitespace-nowrap" data-node-id="4801:14816" style={{ fontVariationSettings: '"wdth" 100' }}>
          Work-in-progress deliverables
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[12px] text-[#aeaeae] text-[16px] top-[46px] whitespace-nowrap" data-node-id="4801:14817" style={{ fontVariationSettings: '"wdth" 100' }}>
          Arqui has generated 6 new insights for you to review today.
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[12px] text-[#aeaeae] text-[16px] top-[1354px] whitespace-nowrap" data-node-id="4801:14818" style={{ fontVariationSettings: '"wdth" 100' }}>
          Insights that you are currently investigating.
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[12px] text-[#aeaeae] text-[16px] top-[2372px] whitespace-nowrap" data-node-id="4801:14819" style={{ fontVariationSettings: '"wdth" 100' }}>
          Deliverables you are working on in response to insights.
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[180px] whitespace-nowrap" data-node-id="4801:14820" style={{ fontVariationSettings: '"wdth" 100' }}>
          Current work
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[1488px] whitespace-nowrap" data-node-id="4801:14821" style={{ fontVariationSettings: '"wdth" 100' }}>
          Current work
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[2502px] whitespace-nowrap" data-node-id="4801:14822" style={{ fontVariationSettings: '"wdth" 100' }}>
          Current work
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[67px] text-[#aeaeae] text-[16px] top-[869px] whitespace-nowrap" data-node-id="4801:14823" style={{ fontVariationSettings: '"wdth" 100' }}>
          Collaborative
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[67px] text-[#aeaeae] text-[16px] top-[2177px] whitespace-nowrap" data-node-id="4801:14824" style={{ fontVariationSettings: '"wdth" 100' }}>
          Collaborative
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[382px] whitespace-nowrap" data-node-id="4801:14825" style={{ fontVariationSettings: '"wdth" 100' }}>
          Innovation and Agility
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[1690px] whitespace-nowrap" data-node-id="4801:14826" style={{ fontVariationSettings: '"wdth" 100' }}>
          Innovation and Agility
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[525px] whitespace-nowrap" data-node-id="4801:14827" style={{ fontVariationSettings: '"wdth" 100' }}>
          Cost Optimization
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[1833px] whitespace-nowrap" data-node-id="4801:14828" style={{ fontVariationSettings: '"wdth" 100' }}>
          Cost Optimization
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[228px] whitespace-nowrap" data-node-id="4801:14829" style={{ fontVariationSettings: '"wdth" 100' }}>
          Scenario planning
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[1536px] whitespace-nowrap" data-node-id="4801:14830" style={{ fontVariationSettings: '"wdth" 100' }}>
          Scenario planning
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[2550px] whitespace-nowrap" data-node-id="4801:14831" style={{ fontVariationSettings: '"wdth" 100' }}>
          Scenario planning
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[430px] whitespace-nowrap" data-node-id="4801:14832" style={{ fontVariationSettings: '"wdth" 100' }}>
          Strategic Alignment
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[1738px] whitespace-nowrap" data-node-id="4801:14833" style={{ fontVariationSettings: '"wdth" 100' }}>
          Strategic Alignment
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[573px] whitespace-nowrap" data-node-id="4801:14834" style={{ fontVariationSettings: '"wdth" 100' }}>
          Resource Management
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[1881px] whitespace-nowrap" data-node-id="4801:14835" style={{ fontVariationSettings: '"wdth" 100' }}>
          Resource Management
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[276px] whitespace-nowrap" data-node-id="4801:14836" style={{ fontVariationSettings: '"wdth" 100' }}>
          Organisational views
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[1584px] whitespace-nowrap" data-node-id="4801:14837" style={{ fontVariationSettings: '"wdth" 100' }}>
          Organisational views
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[2598px] whitespace-nowrap" data-node-id="4801:14838" style={{ fontVariationSettings: '"wdth" 100' }}>
          Organisational views
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[478px] whitespace-nowrap" data-node-id="4801:14839" style={{ fontVariationSettings: '"wdth" 100' }}>
          Cybersecurity
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[1786px] whitespace-nowrap" data-node-id="4801:14840" style={{ fontVariationSettings: '"wdth" 100' }}>
          Cybersecurity
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[622px] whitespace-nowrap" data-node-id="4801:14841" style={{ fontVariationSettings: '"wdth" 100' }}>
          Talent Management
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[1930px] whitespace-nowrap" data-node-id="4801:14842" style={{ fontVariationSettings: '"wdth" 100' }}>
          Talent Management
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[669px] whitespace-nowrap" data-node-id="4801:14843" style={{ fontVariationSettings: '"wdth" 100' }}>
          Adoption
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[1977px] whitespace-nowrap" data-node-id="4801:14844" style={{ fontVariationSettings: '"wdth" 100' }}>
          Adoption
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[718px] whitespace-nowrap" data-node-id="4801:14845" style={{ fontVariationSettings: '"wdth" 100' }}>
          Vendor Management
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[48px] text-[#aeaeae] text-[16px] top-[2026px] whitespace-nowrap" data-node-id="4801:14846" style={{ fontVariationSettings: '"wdth" 100' }}>
          Vendor Management
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[12px] text-[#aeaeae] text-[16px] top-[140px] whitespace-nowrap" data-node-id="4801:14847" style={{ fontVariationSettings: '"wdth" 100' }}>
          Insights about
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[12px] text-[#aeaeae] text-[16px] top-[1448px] whitespace-nowrap" data-node-id="4801:14848" style={{ fontVariationSettings: '"wdth" 100' }}>
          Insights about
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[12px] text-[#aeaeae] text-[16px] top-[2462px] whitespace-nowrap" data-node-id="4801:14849" style={{ fontVariationSettings: '"wdth" 100' }}>
          Deliverables for insights about
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[15px] text-[#aeaeae] text-[16px] top-[341px] whitespace-nowrap" data-node-id="4801:14850" style={{ fontVariationSettings: '"wdth" 100' }}>
          By theme
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[15px] text-[#aeaeae] text-[16px] top-[1649px] whitespace-nowrap" data-node-id="4801:14851" style={{ fontVariationSettings: '"wdth" 100' }}>
          By theme
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[15px] text-[#aeaeae] text-[16px] top-[824px] whitespace-nowrap" data-node-id="4801:14852" style={{ fontVariationSettings: '"wdth" 100' }}>
          By type
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[15px] text-[#aeaeae] text-[16px] top-[2132px] whitespace-nowrap" data-node-id="4801:14853" style={{ fontVariationSettings: '"wdth" 100' }}>
          By type
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[12px] text-[#696969] text-[16px] top-[105px] whitespace-nowrap" data-node-id="4801:14854" style={{ fontVariationSettings: '"wdth" 100' }}>
          FILTERS
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[12px] text-[16px] text-white top-[1413px] whitespace-nowrap" data-node-id="4801:14855" style={{ fontVariationSettings: '"wdth" 100' }}>
          FILTERS
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[12px] text-[16px] text-white top-[2427px] whitespace-nowrap" data-node-id="4801:14856" style={{ fontVariationSettings: '"wdth" 100' }}>
          FILTERS
        </p>
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[166px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[1474px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[2488px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[854px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[2162px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[367px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[1675px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[511px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[1819px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[214px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[1522px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[2536px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[415px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[1723px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[559px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[1867px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[655px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[1963px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[262px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[1570px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[2584px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[607px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[1915px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[463px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[1771px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[703px]" />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-0 p-[4px] top-[2011px]" />
        <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col items-center justify-center left-[15px] overflow-clip rounded-[100px] top-[762px]" data-node-id="4801:14884" data-name="Button-dark">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14884;53923:27766" data-name="state-layer">
            <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14884;53923:27767" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon6} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14884;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Add a theme</p>
            </div>
          </div>
        </div>
        <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col items-center justify-center left-[15px] overflow-clip rounded-[100px] top-[2070px]" data-node-id="4801:14885" data-name="Button-dark">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I4801:14885;53923:27766" data-name="state-layer">
            <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14885;53923:27767" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon6} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I4801:14885;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Add a theme</p>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[264px] top-[127px]" data-node-id="4801:14886">
          <div className="absolute bg-[#141218] cursor-pointer inset-[14.92%_3.42%_67.8%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14887" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14887;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[220px]" data-node-id="4801:14888" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14888;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14888;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14888;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[580px] overflow-clip rounded-[8px] top-[220px]" data-node-id="4801:14889" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14889;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14889;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[453px] overflow-clip rounded-[8px] top-[220px]" data-node-id="4801:14890" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14890;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14890;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CURRENT WORK</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[170px] w-[1065px]" data-node-id="4801:14891" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sales data and warehouse inventory levels reveal potential stockouts despite adequate recorded stock. Discrepancies might stem from inaccurate categorization, barcode errors, or internal theft, leading to missed sales and customer dissatisfaction.
          </p>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[142px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14892" style={{ fontVariationSettings: '"wdth" 100' }}>
            Inventory inaccuracy leading to stockouts and missed sales
          </p>
        </div>
        <div className="absolute contents left-[264px] top-[1435px]" data-node-id="4801:14893">
          <div className="absolute bg-[#141218] cursor-pointer inset-[168.63%_3.42%_-85.9%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14894" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14894;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[1528px]" data-node-id="4801:14895" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14895;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14895;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14895;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[578px] overflow-clip rounded-[8px] top-[1528px]" data-node-id="4801:14896" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14896;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14896;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[451px] overflow-clip rounded-[8px] top-[1528px]" data-node-id="4801:14897" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14897;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14897;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CURRENT WORK</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[1478px] w-[1065px]" data-node-id="4801:14898" style={{ fontVariationSettings: '"wdth" 100' }}>
            Employee use of unauthorized cloud applications and personal devices highlights potential security and compliance risks. While these tools might enhance individual productivity, they bypass security protocols and create data storage concerns outside controlled environments.
          </p>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[1450px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14899" style={{ fontVariationSettings: '"wdth" 100' }}>
            Unutilized data assets hinder decision-making
          </p>
        </div>
        <div className="absolute contents left-[264px] top-[887px]" data-node-id="4801:14900">
          <div className="absolute bg-[#141218] cursor-pointer inset-[104.23%_3.42%_-21.5%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14901" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14901;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[634px] overflow-clip rounded-[8px] top-[980px]" data-node-id="4801:14902" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14902;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14902;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">{`INNOVATION & AGILITY`}</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[453px] overflow-clip rounded-[8px] top-[980px]" data-node-id="4801:14903" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14903;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14903;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">ORGANISATIONAL VIEWS</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[980px]" data-node-id="4801:14904" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14904;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14904;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14904;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[929px] w-[1065px]" data-node-id="4801:14905" style={{ fontVariationSettings: '"wdth" 100' }}>{`While the "Innovation" strategic capability is well-funded, data from "Employee Satisfaction Surveys" and "Training Needs Assessment" suggests a potential skills gap in the "R&D" department. This could hinder the ability to translate innovative ideas into concrete products or services.`}</p>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[902px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14906" style={{ fontVariationSettings: '"wdth" 100' }}>
            Innovation bottleneck
          </p>
        </div>
        <div className="absolute contents left-[264px] top-[431px]" data-node-id="4801:14907">
          <div className="absolute bg-[#141218] cursor-pointer inset-[50.65%_3.42%_32.08%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14908" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14908;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[528px]" data-node-id="4801:14909" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14909;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14909;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14909;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[445px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14910" style={{ fontVariationSettings: '"wdth" 100' }}>
            Unutilized data assets hinder decision-making
          </p>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[40px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[475px] w-[1065px]" data-node-id="4801:14911" style={{ fontVariationSettings: '"wdth" 100' }}>
            Despite diverse data sources, valuable insights remain hidden due to siloed systems and limited analysis capabilities. This hinders informed decision-making, as evidenced by potential gaps in combining customer service and sales data for churn risk identification.
          </p>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[580px] overflow-clip rounded-[8px] top-[528px]" data-node-id="4801:14912" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14912;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14912;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[453px] overflow-clip rounded-[8px] top-[528px]" data-node-id="4801:14913" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14913;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14913;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CURRENT WORK</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[102.59%_95.85%_-3.86%_3.14%]" data-node-id="4801:14914" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
        </div>
        <div className="absolute inset-[256.29%_95.85%_-157.56%_3.14%]" data-node-id="4801:14915" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector6} />
        </div>
        <div className="absolute h-0 left-0 top-[1272px] w-[1463px]" data-node-id="4801:14916">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={A.imgLine218} />
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[2290px] w-[1463px]" data-node-id="4801:14917">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={A.imgLine218} />
          </div>
        </div>
        <div className="absolute contents left-[264px] top-[1039px]" data-node-id="4801:14918">
          <div className="absolute bg-[#141218] cursor-pointer inset-[122.09%_3.42%_-39.37%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14919" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14919;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[634px] overflow-clip rounded-[8px] top-[1132px]" data-node-id="4801:14920" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14920;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14920;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[453px] overflow-clip rounded-[8px] top-[1132px]" data-node-id="4801:14921" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14921;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14921;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">ORGANISATIONAL VIEWS</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[1132px]" data-node-id="4801:14922" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14922;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14922;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14922;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[1081px] w-[1065px]" data-node-id="4801:14923" style={{ fontVariationSettings: '"wdth" 100' }}>{`Customer satisfaction surveys (from "Sales and Marketing to Customer Service" value stream) reveal high customer loyalty. However, market research data and competitor analysis indicate potential for expansion, which is currently not reflected in the "Market Expansion" strategic capability.`}</p>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[1054px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14924" style={{ fontVariationSettings: '"wdth" 100' }}>
            Untapped market potential
          </p>
          <div className="absolute contents left-[809px] top-[1132px]" data-node-id="4801:14925">
            <div className="absolute contents left-[809px] top-[1132px]" data-node-id="4801:14926">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[809px] overflow-clip rounded-[8px] top-[1132px]" data-node-id="4801:14927" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14927;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14927;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[134.08%_42.88%_-35.35%_56.12%]" data-node-id="4801:14928" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[264px] top-[583px]" data-node-id="4801:14929">
          <div className="absolute bg-[#141218] cursor-pointer inset-[68.51%_3.42%_14.22%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14930" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14930;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[675px]" data-node-id="4801:14931" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14931;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14931;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14931;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[613px] overflow-clip rounded-[8px] top-[676px]" data-node-id="4801:14932" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14932;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14932;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[453px] overflow-clip rounded-[8px] top-[676px]" data-node-id="4801:14933" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14933;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14933;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">SCENARIO PLANNING</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[625px] w-[1065px]" data-node-id="4801:14934" style={{ fontVariationSettings: '"wdth" 100' }}>
            Analysis of social media trends and customer feedback reveals an emerging shift towards younger, tech-savvy consumers with evolving expectations. This presents both a challenge and an opportunity to adapt product offerings and marketing strategies to cater to these changing preferences.
          </p>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[598px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14935" style={{ fontVariationSettings: '"wdth" 100' }}>
            Shifting customer demographics and preferences
          </p>
          <div className="absolute contents left-[787px] top-[677px]" data-node-id="4801:14936">
            <div className="absolute contents left-[787px] top-[677px]" data-node-id="4801:14937">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[787px] overflow-clip rounded-[8px] top-[677px]" data-node-id="4801:14938" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14938;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14938;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[80.61%_44.38%_18.11%_54.61%]" data-node-id="4801:14939" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[264px] top-[735px]" data-node-id="4801:14940">
          <div className="absolute bg-[#141218] cursor-pointer inset-[86.37%_3.42%_-3.64%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14941" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14941;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[828px]" data-node-id="4801:14942" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14942;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14942;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14942;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[614px] overflow-clip rounded-[8px] top-[828px]" data-node-id="4801:14943" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14943;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14943;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[453px] overflow-clip rounded-[8px] top-[828px]" data-node-id="4801:14944" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14944;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14944;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">SCENARIO PLANNING</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[777px] tracking-[0.5px] w-[1065px]" data-node-id="4801:14945" style={{ fontVariationSettings: '"wdth" 100' }}>{`Recent legislative changes and proposed regulations in key markets pose potential compliance risks and operational challenges for Acme's global operations. This requires close monitoring and proactive adaptation to ensure adherence to evolving regulations.`}</p>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[750px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14946" style={{ fontVariationSettings: '"wdth" 100' }}>
            Regulatory landscape uncertainty in key markets
          </p>
          <div className="absolute contents left-[787px] top-[828px]" data-node-id="4801:14947">
            <div className="absolute contents left-[787px] top-[828px]" data-node-id="4801:14948">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[787px] overflow-clip rounded-[8px] top-[828px]" data-node-id="4801:14949" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14949;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14949;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[98.35%_44.38%_0.37%_54.61%]" data-node-id="4801:14950" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
        </div>
        <a className="absolute contents cursor-pointer left-[264px] top-[279px]" data-node-id="4801:14951">
          <div className="absolute bg-[#141218] inset-[32.78%_3.42%_49.94%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14952" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14952;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[373px]" data-node-id="4801:14953" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14953;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14953;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon7} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14953;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">AUTO-GENERATED</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[296px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14954" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cybersecurity risks in remote work environment
          </p>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[39px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[324px] w-[1065px]" data-node-id="4801:14955" style={{ fontVariationSettings: '"wdth" 100' }}>
            Increased remote work coincides with a rise in incidents like phishing and unauthorized access attempts. Network traffic and employee behavior analysis suggest potential weaknesses in endpoint security and VPN configurations, posing risks to sensitive data and operations.
          </p>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[580px] overflow-clip rounded-[8px] top-[373px]" data-node-id="4801:14956" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14956;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14956;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[453px] overflow-clip rounded-[8px] top-[373px]" data-node-id="4801:14957" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14957;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14957;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CURRENT WORK</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[715px] top-[373px]" data-node-id="4801:14958">
            <div className="absolute contents left-[715px] top-[373px]" data-node-id="4801:14959">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[715px] overflow-clip rounded-[8px] top-[373px]" data-node-id="4801:14960" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14960;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14960;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[44.89%_49.3%_53.84%_49.69%]" data-node-id="4801:14961" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
        </a>
        <div className="absolute contents left-[264px] top-[1587px]" data-node-id="4801:14962">
          <div className="absolute bg-[#141218] cursor-pointer inset-[186.49%_3.42%_-103.76%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14963" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14963;52350:28399" data-name="State-layer" />
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[1604px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14964" style={{ fontVariationSettings: '"wdth" 100' }}>
            Supply chain disruptions and resource scarcity
          </p>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[39px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[1632px] w-[1065px]" data-node-id="4801:14965" style={{ fontVariationSettings: '"wdth" 100' }}>
            Global events and climate concerns point towards potential disruptions in critical supply chains and increasing scarcity of key resources. This necessitates exploring alternative sourcing strategies, diversifying suppliers, and investing in sustainable practices to mitigate future risks.
          </p>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[579px] overflow-clip rounded-[8px] top-[1681px]" data-node-id="4801:14966" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14966;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14966;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">RESOURCE MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[452px] overflow-clip rounded-[8px] top-[1681px]" data-node-id="4801:14967" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14967;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14967;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CURRENT WORK</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[767px] top-[1681px]" data-node-id="4801:14968">
            <div className="absolute contents left-[767px] top-[1681px]" data-node-id="4801:14969">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[767px] overflow-clip rounded-[8px] top-[1681px]" data-node-id="4801:14970" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14970;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14970;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[198.59%_45.75%_-99.86%_53.25%]" data-node-id="4801:14971" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[1681px]" data-node-id="4801:14972" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14972;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14972;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14972;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[264px] top-[1739px]" data-node-id="4801:14973">
          <div className="absolute bg-[#141218] cursor-pointer inset-[204.35%_3.42%_-121.62%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14974" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14974;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute contents left-[744px] top-[1836px]" data-node-id="4801:14975">
            <div className="absolute contents left-[744px] top-[1836px]" data-node-id="4801:14976">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[744px] overflow-clip rounded-[8px] top-[1836px]" data-node-id="4801:14977" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14977;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14977;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[216.8%_47.32%_-118.08%_51.67%]" data-node-id="4801:14978" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[1753px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14979" style={{ fontVariationSettings: '"wdth" 100' }}>
            Rise of automation and AI in the industry
          </p>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[40px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[1783px] w-[1065px]" data-node-id="4801:14980" style={{ fontVariationSettings: '"wdth" 100' }}>
            Rapid advancements in automation and AI threaten to disrupt traditional industry practices and potentially displace certain job roles. This presents an opportunity to upskill the workforce, embrace automation for efficiency gains, and explore innovative applications of AI to stay competitive.
          </p>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[613px] overflow-clip rounded-[8px] top-[1836px]" data-node-id="4801:14981" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14981;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14981;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">CYBERSECURITY</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[452px] overflow-clip rounded-[8px] top-[1836px]" data-node-id="4801:14982" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14982;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14982;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">SCENARIO PLANNING</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[1836px]" data-node-id="4801:14983" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14983;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14983;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14983;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[264px] top-[1891px]" data-node-id="4801:14984">
          <div className="absolute bg-[#141218] cursor-pointer inset-[222.21%_3.42%_-139.48%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14985" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14985;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute contents left-[809px] top-[1984px]" data-node-id="4801:14986">
            <div className="absolute contents left-[809px] top-[1984px]" data-node-id="4801:14987">
              <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[809px] overflow-clip rounded-[8px] top-[1984px]" data-node-id="4801:14988" data-name="Input chip-dark">
                <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14988;53923:29057" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#141218] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14988;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px] whitespace-pre">{`...  `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[234.2%_42.88%_-135.47%_56.12%]" data-node-id="4801:14989" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector7} />
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[633px] overflow-clip rounded-[8px] top-[1984px]" data-node-id="4801:14990" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14990;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14990;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[452px] overflow-clip rounded-[8px] top-[1984px]" data-node-id="4801:14991" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14991;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14991;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">ORGANISATIONAL VIEWS</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[1933px] w-[1065px]" data-node-id="4801:14992" style={{ fontVariationSettings: '"wdth" 100' }}>{`Analysis of "Sustainability Programs" and "Environmental Regulations" highlights a potential risk of non-compliance with regulations. Conversely, the "Sustainability" strategic capability and "CSR Initiatives Report" suggest an opportunity to leverage sustainability as a competitive advantage.`}</p>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[1906px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:14993" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sustainability risks and opportunities
          </p>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[1984px]" data-node-id="4801:14994" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14994;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:14994;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14994;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[264px] top-[2043px]" data-node-id="4801:14995">
          <div className="absolute bg-[#141218] cursor-pointer inset-[240.07%_3.42%_-157.34%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:14996" data-name="Building blocks/Card states/Outlined - dark">
            <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:14996;52350:28399" data-name="State-layer" />
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[634px] overflow-clip rounded-[8px] top-[2136px]" data-node-id="4801:14997" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14997;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14997;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">STRATEGIC ALIGNMENT</p>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[452px] overflow-clip rounded-[8px] top-[2136px]" data-node-id="4801:14998" data-name="Input chip-dark">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:14998;53923:29057" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:14998;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">ORGANISATIONAL VIEWS</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[2085px] w-[1065px]" data-node-id="4801:14999" style={{ fontVariationSettings: '"wdth" 100' }}>{`While departments like "Sales and Marketing" and "Manufacturing" collect customer data, the information architecture and data integration capabilities might be hindering efficient information sharing, as evidenced by limited collaboration reflected in "Meeting Minutes - Exec Stakeholders."`}</p>
          <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[2058px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:15000" style={{ fontVariationSettings: '"wdth" 100' }}>
            Siloed information sharing
          </p>
          <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[2136px]" data-node-id="4801:15001" data-name="Input chip-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-node-id="I4801:15001;53923:29048" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I4801:15001;53923:29049" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon8} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:15001;53923:29050" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[16px]">USER-GENERATED</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#141218] cursor-pointer inset-[285.66%_3.42%_-202.94%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:15002" data-name="Building blocks/Card states/Outlined - dark">
          <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:15002;52350:28399" data-name="State-layer" />
        </div>
        <div className="absolute bg-[#141218] cursor-pointer inset-[321.39%_3.42%_-238.66%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:15003" data-name="Building blocks/Card states/Outlined - dark">
          <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:15003;52350:28399" data-name="State-layer" />
        </div>
        <div className="absolute bg-[#141218] cursor-pointer inset-[303.53%_3.42%_-220.8%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:15004" data-name="Building blocks/Card states/Outlined - dark">
          <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:15004;52350:28399" data-name="State-layer" />
        </div>
        <div className="absolute bg-[#141218] cursor-pointer inset-[339.25%_3.42%_-256.52%_18.05%] overflow-clip rounded-[24px]" data-node-id="4801:15005" data-name="Building blocks/Card states/Outlined - dark">
          <div className="absolute inset-0 rounded-[24px]" data-node-id="I4801:15005;52350:28399" data-name="State-layer" />
        </div>
        <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[2524px]" data-node-id="4801:15006" data-name="Input chip-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:15006;53923:29057" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:15006;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[16px]">CURRENT WORK</p>
            </div>
          </div>
        </div>
        <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[2828px]" data-node-id="4801:15007" data-name="Input chip-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:15007;53923:29057" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:15007;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[16px]">SCENARIO PLANNING</p>
            </div>
          </div>
        </div>
        <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[2676px]" data-node-id="4801:15008" data-name="Input chip-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:15008;53923:29057" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:15008;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[16px]">CURRENT WORK</p>
            </div>
          </div>
        </div>
        <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[290px] overflow-clip rounded-[8px] top-[2980px]" data-node-id="4801:15009" data-name="Input chip-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:15009;53923:29057" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:15009;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[16px]">ORGANISATIONAL VIEWS</p>
            </div>
          </div>
        </div>
        <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[418px] overflow-clip rounded-[8px] top-[2524px]" data-node-id="4801:15010" data-name="Input chip-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:15010;53923:29057" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:15010;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[16px]">16-JAN-2024</p>
            </div>
          </div>
        </div>
        <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[452px] overflow-clip rounded-[8px] top-[2828px]" data-node-id="4801:15011" data-name="Input chip-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:15011;53923:29057" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:15011;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[16px]">16-JAN-2024</p>
            </div>
          </div>
        </div>
        <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[418px] overflow-clip rounded-[8px] top-[2676px]" data-node-id="4801:15012" data-name="Input chip-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:15012;53923:29057" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:15012;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[16px]">16-JAN-2024</p>
            </div>
          </div>
        </div>
        <div className="absolute border border-[#4e4b53] border-solid content-stretch flex h-[32px] items-center justify-center left-[474px] overflow-clip rounded-[8px] top-[2980px]" data-node-id="4801:15013" data-name="Input chip-dark">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-node-id="I4801:15013;53923:29057" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#7a7480] text-[12px] text-center tracking-[0.5px] whitespace-nowrap" data-node-id="I4801:15013;53923:29058" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[16px]">16-JAN-2024</p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[2473px] w-[1065px]" data-node-id="4801:15014" style={{ fontVariationSettings: '"wdth" 100' }}>
          Analyzing cycle count data from high-demand areas to identify root causes of inventory discrepancies. This will help determine if inaccuracies stem from categorization errors, barcode scanning issues, or potential theft.
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[2777px] w-[1065px]" data-node-id="4801:15015" style={{ fontVariationSettings: '"wdth" 100' }}>
          Creating detailed customer personas representing the emerging younger, tech-savvy demographic. These personas will inform product roadmap decisions, marketing campaigns, and customer service training to ensure alignment with evolving customer preferences.
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[2625px] w-[1065px]" data-node-id="4801:15016" style={{ fontVariationSettings: '"wdth" 100' }}>
          Evaluating endpoint security software across user devices and identifying potential weaknesses in configurations. This assessment will inform recommendations for strengthening overall security posture and mitigating cyber risks in the remote work environment.
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[290px] text-[#aeaeae] text-[16px] top-[2929px] w-[1065px]" data-node-id="4801:15017" style={{ fontVariationSettings: '"wdth" 100' }}>
          Creating detailed customer personas representing the emerging younger, tech-savvy demographic. These personas will inform product roadmap decisions, marketing campaigns, and customer service training to ensure alignment with evolving customer preferences.
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[2446px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:15018" style={{ fontVariationSettings: '"wdth" 100' }}>
          Warehouse cycle count analysis
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[2750px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:15019" style={{ fontVariationSettings: '"wdth" 100' }}>
          Customer persona development
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[2598px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:15020" style={{ fontVariationSettings: '"wdth" 100' }}>
          Endpoint security vulnerability assessment
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[290px] text-[#d0bcff] text-[16px] top-[2902px] tracking-[0.5px] whitespace-nowrap" data-node-id="4801:15021" style={{ fontVariationSettings: '"wdth" 100' }}>
          Customer persona development
        </p>
      </div>
      <Group605 className="absolute h-[27px] left-[1630px] top-[35px] w-[69px]" />
    </div>
  );
}