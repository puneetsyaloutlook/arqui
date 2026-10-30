import { A } from '../assets/a15065';


function CheckboxesDark({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Type=Unselected, State=Enabled">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
        <div className="border-2 border-[#cac4d0] border-solid relative rounded-[2px] shrink-0 size-[18px]" data-name="container" />
      </div>
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
const CB = "absolute content-stretch flex flex-col items-center justify-center p-[4px] ";
const OS = "[word-break:break-word] absolute font-opensans font-normal leading-[32px] text-[#f3f3f3] text-[16px] whitespace-nowrap ";

export default function Root() {
  return (
    <div className="bg-[#0d142a] relative size-full" data-node-id="4801:15065" data-name="110">
      <div className="absolute h-[956px] left-0 top-0 w-[1728px]" data-node-id="4801:15066" data-name="puneetsyal_hand_drawn_illustrated_organizational_structure_and__81829d98-dae4-4609-bd27-6d0b50ab4822 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={A.imgPuneetsyalHandDrawnIllustratedOrganizationalStructureAnd81829D98Dae44609Bd276D0B50Ab48221} />
        </div>
      </div>
      <Frame383 className="absolute h-[48px] left-[21px] top-[15px] w-[86px]" />
      <div className="absolute bg-black h-[739px] left-[249px] rounded-[12px] shadow-[79px_136px_44px_0px_rgba(38,28,53,0.01),51px_87px_40px_0px_rgba(38,28,53,0.06),28px_49px_34px_0px_rgba(38,28,53,0.2),13px_22px_25px_0px_rgba(38,28,53,0.34),3px_5px_14px_0px_rgba(38,28,53,0.39)] top-[117px] w-[1200px]" data-node-id="4801:15068" />
      <p className="[word-break:break-word] absolute font-opensans font-semibold leading-[normal] left-[298px] text-[#f3f3f3] text-[36px] top-[163px] whitespace-nowrap" data-node-id="4801:15069" style={{ fontVariationSettings: '"wdth" 100' }}>
        Before we start
      </p>
      <div className="absolute bg-black h-[564px] left-[249px] overflow-x-clip overflow-y-auto top-[245px] w-[1167px]" data-node-id="4801:15070">
        <div className="absolute bg-[#d0bcff] content-stretch cursor-pointer flex flex-col items-center justify-center left-[49px] overflow-clip rounded-[100px] top-[489px]" data-node-id="4801:15072" data-name="Button-dark">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#381e72] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Save</p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-roboto font-normal leading-[36px] left-[49px] text-[#f3f3f3] text-[28px] top-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Your role
        </p>
        <div className="[word-break:break-word] absolute font-opensans font-normal leading-[0] left-[49px] text-[#f3f3f3] text-[16px] top-[82px] w-[989px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px] mb-[8px]">Based on the information you entered, this is what Arqui understands about your role. Is this understanding of your role accurate? </p>
          <p className="leading-[20px]">Please edit or provide further details about your specific responsibilities and areas of focus within the CIO role at Acme.</p>
        </div>
        <div className="absolute bg-[#242424] h-[303px] left-[49px] rounded-[6px] top-[158px] w-[1050px]" data-node-id="4801:15092" />
        <div className="[word-break:break-word] absolute font-opensans font-normal leading-[0] left-[59px] text-[#f3f3f3] text-[16px] top-[170px] w-[997px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px] mb-[8px]">As the Chief Information Officer, you play a pivotal role in driving Acme's digital strategy and ensuring the effective utilization of information technology to achieve strategic objectives. Your responsibilities likely encompass:</p>
          <ul className="list-disc mb-[8px]">
            <li className="mb-0 ms-[24px]">
              <span className="leading-[20px]">Leading the IT department: Overseeing all technology operations, including infrastructure, applications, and cybersecurity.</span>
            </li>
            <li className="mb-0 ms-[24px]">
              <span className="leading-[20px]">Formulating IT strategy: Aligning technology investments with business goals, ensuring innovation and efficient resource allocation.</span>
            </li>
            <li className="mb-0 ms-[24px]">
              <span className="leading-[20px]">Managing IT governance: Establishing policies and frameworks for IT security, data privacy, and compliance.</span>
            </li>
            <li className="mb-0 ms-[24px]">
              <span className="leading-[20px]">Monitoring IT performance: Tracking key metrics and KPIs to measure the effectiveness and efficiency of IT services.</span>
            </li>
            <li className="mb-0 ms-[24px]">
              <span className="leading-[20px]">Facilitating digital transformation: Leading the organization's journey towards digital maturity, leveraging technology to drive innovation and competitive advantage.</span>
            </li>
            <li className="ms-[24px]">
              <span className="leading-[20px]">Staying informed: Keeping abreast of emerging technologies and industry trends to anticipate future needs and opportunities.</span>
            </li>
          </ul>
        </div>
        <div className="absolute h-0 left-[44px] top-[-9px] w-[1076px]" data-node-id="4801:15095">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={A.imgLine224} />
          </div>
        </div>
      </div>
    </div>
  );
}
