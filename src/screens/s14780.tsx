import { A } from '../assets/a14780';


function CheckboxesDark({ className, type = true }: { className?: string; type?: boolean }) {
  if (!type) {
    return (
      <div className={className || "content-stretch flex flex-col items-center justify-center p-[4px] relative"} data-node-id="879:632" data-name="Type=Unselected, State=Enabled">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[100px] shrink-0" data-node-id="879:633" data-name="state-layer">
          <div className="border-2 border-[#cac4d0] border-solid relative rounded-[2px] shrink-0 size-[18px]" data-node-id="879:634" data-name="container" />
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

function Frame383({ className }: { className?: string }) {
  return (
    <div className={className || "h-[48px] relative w-[86px]"} data-node-id="727:829">
      <p className="[word-break:break-word] absolute font-logo leading-[normal] left-0 not-italic text-[#b4b4b4] text-[40px] top-0 whitespace-nowrap" data-node-id="727:828">
        ARQUI
      </p>
    </div>
  );
}

function Field({ className, label, trailing }: { className: string; label: string; trailing?: boolean }) {
  return (
    <button className={className} data-name="Text field-dark">
      <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="text field">
        <div className={"content-stretch flex flex-[1_0_0] items-start min-h-px py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full " + (trailing ? "pl-[16px]" : "px-[16px]")} data-name="state-layer">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-name="content">
            <div className="content-stretch flex items-center relative shrink-0" data-name="label-text">
              <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                {label}
              </p>
            </div>
          </div>
          {trailing && (
            <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0">
                <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
                  <div className="relative shrink-0 size-[24px]" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator} />
        </div>
      </div>
    </button>
  );
}

const FIELD = "absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[49px] rounded-tl-[4px] rounded-tr-[4px] w-[348px] ";

export default function Root() {
  return (
    <div className="bg-[#0d142a] relative size-full" data-node-id="4801:14780" data-name="109">
      <div className="absolute h-[956px] left-0 top-0 w-[1728px]" data-node-id="4801:14781" data-name="puneetsyal_hand_drawn_illustrated_organizational_structure_and__81829d98-dae4-4609-bd27-6d0b50ab4822 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={A.imgPuneetsyalHandDrawnIllustratedOrganizationalStructureAnd81829D98Dae44609Bd276D0B50Ab48221} />
        </div>
      </div>
      <Frame383 className="absolute h-[48px] left-[21px] top-[15px] w-[86px]" />
      <div className="absolute bg-black h-[739px] left-[249px] rounded-[12px] shadow-[79px_136px_44px_0px_rgba(38,28,53,0.01),51px_87px_40px_0px_rgba(38,28,53,0.06),28px_49px_34px_0px_rgba(38,28,53,0.2),13px_22px_25px_0px_rgba(38,28,53,0.34),3px_5px_14px_0px_rgba(38,28,53,0.39)] top-[117px] w-[1200px]" data-node-id="4801:14783" />
      <p className="[word-break:break-word] absolute font-opensans font-semibold leading-[normal] left-[298px] text-[#f3f3f3] text-[36px] top-[163px] whitespace-nowrap" data-node-id="4801:14784" style={{ fontVariationSettings: '"wdth" 100' }}>
        Before we start
      </p>
      <div className="absolute bg-black h-[499px] left-[249px] overflow-x-clip overflow-y-auto top-[245px] w-[1167px]" data-node-id="4801:14785">
        <div className="absolute bg-[#d0bcff] content-stretch cursor-pointer flex flex-col items-center justify-center left-[49px] overflow-clip rounded-[100px] top-[399px]" data-node-id="4801:14786" data-name="Button-dark">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#381e72] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Save</p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[49px] text-[#f3f3f3] text-[28px] top-[84px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          About you
        </p>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[463px] text-[#f3f3f3] text-[28px] top-[84px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Areas of interest
        </p>
        <p className="[word-break:break-word] absolute font-opensans font-normal leading-[32px] left-[496px] text-[#f3f3f3] text-[16px] top-[135px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Finance &amp; Performance</p>
        <p className="[word-break:break-word] absolute font-opensans font-normal leading-[32px] left-[496px] text-[#f3f3f3] text-[16px] top-[231px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Innovation &amp; Technology</p>
        <p className="[word-break:break-word] absolute font-opensans font-normal leading-[32px] left-[778px] text-[#f3f3f3] text-[16px] top-[183px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Risk &amp; Compliance</p>
        <p className="[word-break:break-word] absolute font-opensans font-normal leading-[32px] left-[496px] text-[#f3f3f3] text-[16px] top-[183px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Market &amp; Customer Trends</p>
        <p className="[word-break:break-word] absolute font-opensans font-normal leading-[32px] left-[778px] text-[#f3f3f3] text-[16px] top-[135px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Workforce &amp; Talent</p>
        <p className="[word-break:break-word] absolute font-opensans font-normal leading-[32px] left-[778px] text-[#f3f3f3] text-[16px] top-[231px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Sustainability &amp; Social Responsibility</p>
        <Field className={FIELD + "top-[141px]"} label="Your name" />
        <Field className={FIELD + "top-[225px]"} label="Your department/group" trailing />
        <Field className={FIELD + "top-[309px]"} label="Your job title" trailing />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[448px] p-[4px] top-[129px]" type={false} />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[448px] p-[4px] top-[225px]" type={false} />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[730px] p-[4px] top-[177px]" type={false} />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[448px] p-[4px] top-[177px]" type={false} />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[730px] p-[4px] top-[129px]" type={false} />
        <CheckboxesDark className="absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[730px] p-[4px] top-[225px]" type={false} />
        <p className="[word-break:break-word] absolute font-opensans font-normal leading-[32px] left-[49px] text-[#f3f3f3] text-[16px] top-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>To provide the most relevant insights, we'll need some information about you and your role at Acme:</p>
      </div>
    </div>
  );
}
