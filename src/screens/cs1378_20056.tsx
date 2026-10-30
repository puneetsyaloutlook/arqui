import { A } from '../assets/acs1378_20056';


type ContentStatesProps = {
  className?: string;
  property1?: "Chat History" | "Chat Summary" | "Actions" | "Deliverables" | "Collaborators 1" | "Variant7" | "Variant8" | "Chat";
};

export default function ContentStates({ className, property1 = "Chat" }: ContentStatesProps) {
  const isActions = property1 === "Actions";
  const isActionsOrDeliverables = ["Actions", "Deliverables"].includes(property1);
  const isChat = property1 === "Chat";
  const isChatHistory = property1 === "Chat History";
  const isChatHistoryOrActions = ["Chat History", "Actions"].includes(property1);
  const isChatHistoryOrChatSummaryOrActions = ["Chat History", "Chat Summary", "Actions"].includes(property1);
  const isChatSummary = property1 === "Chat Summary";
  const isChatSummaryOrActions = ["Chat Summary", "Actions"].includes(property1);
  const isCollaborators1 = property1 === "Collaborators 1";
  const isCollaborators1OrVariant7 = ["Collaborators 1", "Variant7"].includes(property1);
  const isDeliverables = property1 === "Deliverables";
  const isVariant7 = property1 === "Variant7";
  const isVariant8 = property1 === "Variant8";
  return (
    <div className={className || `relative ${isVariant7 ? "h-[704px] w-[950px]" : isChatSummary ? "h-[800px] w-[1087px]" : ["Variant8", "Chat"].includes(property1) ? "h-[760px] w-[1000px]" : "h-[800px] w-[1000px]"}`} id={isChat ? "node-1378_20216" : isVariant7 ? "node-1378_20287" : isDeliverables ? "node-1378_20257" : isActions ? "node-1378_20247" : isCollaborators1 ? "node-1378_20231" : isChatSummary ? "node-1378_20221" : isVariant8 ? "node-1378_20065" : "node-1378_20057"}>
      {["Chat History", "Chat Summary", "Collaborators 1", "Actions", "Deliverables", "Variant7", "Chat"].includes(property1) && (
        <div className={`absolute left-0 ${isChat ? "contents top-0" : isVariant7 ? "contents top-[23px]" : isDeliverables ? "h-[622px] overflow-x-clip overflow-y-auto top-[49px] w-[1000px]" : ["Collaborators 1", "Actions"].includes(property1) ? "h-[629px] overflow-clip top-[49px] w-[1000px]" : isChatSummary ? "h-[632px] overflow-x-clip overflow-y-auto top-[49px] w-[1068px]" : "[word-break:break-word] h-[628px] overflow-clip top-[49px] w-[1000px]"}`} id={isChat ? "node-1378_20217" : isVariant7 ? "node-1378_20288" : isDeliverables ? "node-1378_20258" : isActions ? "node-1378_20248" : isCollaborators1 ? "node-1378_20232" : isChatSummary ? "node-1378_20222" : "node-1378_20058"}>
          {["Chat History", "Actions", "Deliverables"].includes(property1) && (
            <p className={`absolute font-roboto font-medium leading-[24px] left-[22px] text-[16px] text-white tracking-[0.15px] whitespace-nowrap ${isDeliverables ? "[word-break:break-word] top-[21px]" : isActions ? "[word-break:break-word] top-[14px]" : "top-[21px]"}`} id={isDeliverables ? "node-1378_20259" : isActions ? "node-1378_20249" : "node-1378_20059"} style={{ fontVariationSettings: '"wdth" 100' }}>
              {isDeliverables ? "Deliverables" : isActions ? "Suggested actions (3)" : isChatHistory ? "Chat history (6 questions)" : ""}
            </p>
          )}
          {["Chat History", "Actions", "Variant7", "Chat"].includes(property1) && (
            <div className={`absolute ${isChat ? "h-0 left-0 top-[49px] w-[1000px]" : isVariant7 ? "bg-[#3c3d42] h-[58px] left-0 rounded-tl-[12px] rounded-tr-[12px] top-[23px] w-[950px]" : isActions ? '[word-break:break-word] font-roboto font-normal h-[120px] leading-[0] left-[26px] text-[14px] text-white top-[84px] tracking-[0.25px] w-[820px]' : 'font-roboto font-normal h-[390px] leading-[0] left-[117px] text-[14px] text-white top-[64px] tracking-[0.25px] w-[615px]'}`} id={isChat ? "node-1378_20218" : isVariant7 ? "node-1378_20289" : isActions ? "node-1378_20250" : "node-1378_20060"} style={isChatHistoryOrActions ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isChatHistoryOrActions && (
                <>
                  <p className={`leading-[20px] ${isActions ? "mb-0" : "mb-[8px]"}`}>{isActions ? "Action 1" : isChatHistory ? "What specific skill gaps are most prevalent in the R&D department?" : ""}</p>
                  <p className={`leading-[20px] ${isActions ? "" : "mb-[8px]"}`}>{isActions ? "​" : isChatHistory ? "Which innovation projects have been most impacted due to these skill gaps?" : ""}</p>
                </>
              )}
              {isChatHistory && (
                <>
                  <p className="leading-[20px] mb-[8px]">{`Are there industry benchmarks for R&D skills that we can compare ourselves against?`}</p>
                  <p className="leading-[20px]">What are potential solutions for filling these skill gaps: upskilling, targeted recruitment, or partnerships?</p>
                </>
              )}
              {isChat && (
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine198} />
                </div>
              )}
            </div>
          )}
          {["Chat Summary", "Variant7"].includes(property1) && (
            <div className={`absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center overflow-clip rounded-[100px] ${isVariant7 ? "left-[817px] top-[32px] w-[107.667px]" : "left-[683px] top-[15px]"}`} id={isVariant7 ? "node-1378_20290" : "node-1378_20223"} data-name="Button-dark">
              <div className={`content-stretch flex items-center justify-center py-[10px] relative shrink-0 w-full ${isVariant7 ? "gap-[8px] pl-[16px] pr-[24px]" : "px-[24px]"}`} id={isVariant7 ? "node-I1378_20290-53923_27766" : "node-I1378_20223-53923_27782"} data-name="state-layer">
                {isChatSummary && (
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20223;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Export summary</p>
                  </div>
                )}
                {isVariant7 && (
                  <>
                    <div className="relative shrink-0 size-[18px]" data-node-id="I1378:20290;53923:27767" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20290;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Close</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          {isActionsOrDeliverables && (
            <>
              <p className={`[word-break:break-word] absolute leading-[20px] left-[26px] text-[14px] tracking-[0.25px] whitespace-nowrap ${isDeliverables ? 'font-roboto font-bold text-white top-[98px]' : 'font-roboto font-normal text-[#d0bcff] top-[111px]'}`} id={isDeliverables ? "node-1378_20260" : "node-1378_20251"} style={{ fontVariationSettings: '"wdth" 100' }}>
                {isDeliverables ? "Action" : isActions ? "Arqui can help with 3 deliverables" : ""}
              </p>
              <p className={`[word-break:break-word] absolute leading-[20px] text-[14px] tracking-[0.25px] whitespace-nowrap ${isDeliverables ? 'font-roboto font-bold left-[26px] text-white top-[753px]' : 'font-roboto font-normal left-[41px] text-[#959595] top-[46px]'}`} id={isDeliverables ? "node-1378_20261" : "node-1378_20252"} style={{ fontVariationSettings: '"wdth" 100' }}>
                {isDeliverables ? "Action: Strengthen Endpoint Security and Vulnerability Management" : isActions ? "Note: The list of Suggested actions is updated every time you ask a question." : ""}
              </p>
            </>
          )}
          {isChatHistory && (
            <div className="absolute font-roboto font-normal leading-[0] left-[32px] text-[#d0bcff] text-[14px] top-[64px] tracking-[0.25px] w-[73px] whitespace-pre-wrap" data-node-id="1378:20061" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-[8px]">{`Question 1 `}</p>
              <p className="leading-[20px] mb-[8px]">{`Question 2 `}</p>
              <p className="leading-[20px] mb-[8px]">{`Question 3 `}</p>
              <p className="leading-[20px]">Question 4</p>
            </div>
          )}
          {isChatSummary && (
            <>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[22px] text-[16px] text-white top-[18px] tracking-[0.15px] whitespace-nowrap" data-node-id="1378:20224" style={{ fontVariationSettings: '"wdth" 100' }}>
                Chat summary
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[43px] text-[#959595] text-[14px] top-[45px] tracking-[0.25px] whitespace-nowrap" data-node-id="1378:20225" style={{ fontVariationSettings: '"wdth" 100' }}>
                Note: The chat summary is updated every time you ask a question.
              </p>
            </>
          )}
          {isChatSummaryOrActions && (
            <div className={`absolute ${isActions ? "inset-[7.79%_96.64%_89.98%_2.05%]" : "inset-[7.59%_96.46%_90.19%_2.24%]"}`} id={isActions ? "node-1378_20253" : "node-1378_20226"} data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isActions ? A.imgVector4 : A.imgVector3} />
            </div>
          )}
          {["Chat Summary", "Deliverables"].includes(property1) && (
            <div className={`[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white tracking-[0.25px] ${isDeliverables ? "top-[166px] w-[691px]" : "h-[716px] top-[89px] w-[627px]"}`} id={isDeliverables ? "node-1378_20262" : "node-1378_20227"} style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className={`leading-[20px] mb-[8px] ${isDeliverables ? "text-[#d0bcff]" : "whitespace-pre-wrap"}`}>{isDeliverables ? "Deliverable name" : isChatSummary ? "Observations:" : ""}</p>
              {isChatSummary && (
                <ul className="mb-[8px]">
                  <li className="list-disc ms-[21px]">
                    <span className="leading-[20px] text-[14px]">​</span>
                  </li>
                </ul>
              )}
              <p className={`leading-[20px] ${isDeliverables ? "" : "mb-[8px] whitespace-pre-wrap"}`}>{isDeliverables ? "Description" : isChatSummary ? "Summary of responses:" : ""}</p>
              {isChatSummary && (
                <>
                  <ul className="mb-[8px]">
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[20px] text-[14px]">​</span>
                    </li>
                  </ul>
                  <p className="leading-[20px] mb-[8px] whitespace-pre-wrap">Urgency:</p>
                  <p className="leading-[20px] mb-[8px] whitespace-pre-wrap">​</p>
                  <p className="leading-[20px] mb-[8px] whitespace-pre-wrap">Additional Notes:</p>
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[20px] text-[14px]">​</span>
                    </li>
                  </ul>
                </>
              )}
            </div>
          )}
          {isCollaborators1 && (
            <>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[34px] rounded-tl-[4px] rounded-tr-[4px] top-[308px] w-[348px]" data-node-id="1378:20233" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1378:20233;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1378:20233;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1378:20233;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1378:20233;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1378:20233;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1378:20233;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[34px] rounded-tl-[4px] rounded-tr-[4px] top-[225px] w-[348px]" data-node-id="1378:20234" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1378:20234;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1378:20234;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1378:20234;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1378:20234;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1378:20234;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1378:20234;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[34px] rounded-tl-[4px] rounded-tr-[4px] top-[391px] w-[348px]" data-node-id="1378:20235" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1378:20235;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1378:20235;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1378:20235;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1378:20235;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1378:20235;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1378:20235;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[34px] rounded-tl-[4px] rounded-tr-[4px] top-[476px] w-[348px]" data-node-id="1378:20236" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1378:20236;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1378:20236;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1378:20236;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1378:20236;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1378:20236;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1378:20236;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[33px] text-[16px] text-white top-[18px] tracking-[0.15px] whitespace-nowrap" data-node-id="1378:20237" style={{ fontVariationSettings: '"wdth" 100' }}>
                Add collaborators
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[33px] text-[14px] text-white top-[57px] tracking-[0.25px] w-[702px]" data-node-id="1378:20238" style={{ fontVariationSettings: '"wdth" 100' }}>{`Collaborators will be able to contribute to the chat, and access all the other tabs within this insight. `}</p>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[32px] overflow-clip rounded-[100px] top-[561px]" data-node-id="1378:20239" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1378:20239;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20239;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Send invite</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {isDeliverables && (
            <>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[832px] tracking-[0.25px] w-[668px]" data-node-id="1378:20263" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Anomaly Detection with Historical Trend Analysis:</p>
                <p className="leading-[20px]">Analyze historical network traffic, endpoint data, and user behavior within the digital twin to identify deviations from established patterns. Highlight potential anomalies that might indicate suspicious activity or emerging threats.</p>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[629px] tracking-[0.25px] w-[668px]" data-node-id="1378:20264" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">AI-Powered Vulnerability Prioritization</p>
                <p className="leading-[20px]">Analyze historical vulnerability scan data and threat intelligence feeds to prioritize vulnerabilities based on exploitability, potential impact, and available patches. This helps you focus your resources on addressing the most critical risks first.</p>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[960px] tracking-[0.25px] w-[668px]" data-node-id="1378:20265" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Cybersecurity Maturity Assessment and Benchmarking</p>
                <p className="leading-[20px]">Utilise the digital twin and industry benchmarks to assess your overall cybersecurity maturity. Identify areas for improvement and track progress over time, fostering a data-driven approach to security enhancement.</p>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[937px] tracking-[0.25px] whitespace-nowrap" data-node-id="1378:20266" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[148px] tracking-[0.25px] whitespace-nowrap" data-node-id="1378:20267" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[809px] tracking-[0.25px] whitespace-nowrap" data-node-id="1378:20268" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[162px]" data-node-id="1378:20269" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1378:20269;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20269;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Open</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[829px]" data-node-id="1378:20270" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1378:20270;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20270;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[629px]" data-node-id="1378:20271" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1378:20271;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20271;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[960px]" data-node-id="1378:20272" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1378:20272;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20272;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[131px] w-[811px]" data-node-id="1378:20273">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[797px] w-[811px]" data-node-id="1378:20274">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[735px] w-[811px]" data-node-id="1378:20275">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[1066px] w-[811px]" data-node-id="1378:20276">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[41px] text-[#959595] text-[14px] top-[53px] tracking-[0.25px] whitespace-nowrap" data-node-id="1378:20277" style={{ fontVariationSettings: '"wdth" 100' }}>
                Note: The list of suggested deliverables is updated every time you ask a question.
              </p>
              <div className="absolute inset-[9%_96.64%_88.75%_2.05%]" data-node-id="1378:20278" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector5} />
              </div>
              <div className="absolute contents left-[149px] top-[165px]" data-node-id="1378:20279">
                <div className="absolute bg-[#141218] border border-[#696969] border-solid h-[20px] left-[149px] rounded-[12px] top-[165px] w-[94px]" data-node-id="1378:20280" />
                <div className="absolute left-[155px] size-[12px] top-[169px]" data-node-id="1378:20281">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse13} />
                </div>
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[202px] text-[11px] text-center text-white top-[169px] tracking-[0.1px] whitespace-nowrap" data-node-id="1378:20282" style={{ fontVariationSettings: '"wdth" 100' }}>
                  COMPLETE
                </p>
              </div>
            </>
          )}
          {isChat && (
            <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-[8px] top-0 w-[904px]" data-node-id="1378:20219" data-name="Tabs-dark">
              <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-node-id="I1378:20219;54563:40455" data-name="Tab group">
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20219;54563:40456" data-name="Tab 1">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20219;54563:40456;54563:40740" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20219;54563:40456;54563:40741" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#ccc2dc] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20219;54563:40456;54563:40742" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Assessment</p>
                      </div>
                    </div>
                    <div className="absolute bg-[#ccc2dc] bottom-0 h-[2px] left-0 right-0" data-node-id="I1378:20219;54563:40456;54563:40744" data-name="Indicator" />
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20219;54563:40457" data-name="Tab 2">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20219;54563:40457;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20219;54563:40457;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20219;54563:40457;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">{`Chat `}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20219;54563:40458" data-name="Tab 3">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20219;54563:40458;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20219;54563:40458;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20219;54563:40458;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Chat history</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20219;54563:40459" data-name="Tab 4">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20219;54563:40459;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20219;54563:40459;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20219;54563:40459;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Chat summary</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20219;54563:40460" data-name="Tab 5">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20219;54563:40460;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20219;54563:40460;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20219;54563:40460;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Suggested actions</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20219;54847:25133" data-name="Tab 6">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20219;54847:25133;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20219;54847:25133;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20219;54847:25133;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Deliverables</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20219;54847:25139" data-name="Tab 7">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20219;54847:25139;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20219;54847:25139;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20219;54847:25139;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Collaborators</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px relative shrink-0 w-full" data-node-id="I1378:20219;54563:40461" data-name="Divider">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
              </div>
            </div>
          )}
        </div>
      )}
      {["Chat History", "Chat Summary", "Collaborators 1", "Actions", "Variant7", "Chat"].includes(property1) && (
        <div className={`absolute ${isChat ? "h-[711px] left-[8px] overflow-x-clip overflow-y-auto top-[49px] w-[950px]" : isVariant7 ? '-translate-x-1/2 -translate-y-1/2 [word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] left-[111.5px] text-[20px] text-center text-white top-[54px] tracking-[0.15px] whitespace-nowrap' : isCollaborators1 ? '-translate-y-1/2 [word-break:break-word] flex flex-col font-roboto font-normal justify-center leading-[0] left-[34px] right-[777px] text-[#cac4d0] text-[16px] top-[calc(50%-142px)] tracking-[0.5px]' : "contents left-0 top-0"}`} id={isChat ? "node-1385_6076" : isVariant7 ? "node-1378_20291" : isActions ? "node-1378_20254" : isCollaborators1 ? "node-1378_20240" : isChatSummary ? "node-1378_20228" : "node-1378_20062"} style={isCollaborators1OrVariant7 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
          {isChatHistoryOrChatSummaryOrActions && (
            <>
              <div className="absolute h-0 left-0 top-[49px] w-[1000px]" id={isActions ? "node-1378_20255" : isChatSummary ? "node-1378_20229" : "node-1378_20063"}>
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine198} />
                </div>
              </div>
              <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-[8px] top-0 w-[904px]" id={isActions ? "node-1378_20256" : isChatSummary ? "node-1378_20230" : "node-1378_20064"} data-name="Tabs-dark">
                <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" id={isActions ? "node-I1378_20256-54563_40455" : isChatSummary ? "node-I1378_20230-54563_40455" : "node-I1378_20064-54563_40455"} data-name="Tab group">
                  <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isActions ? "node-I1378_20256-54563_40456" : isChatSummary ? "node-I1378_20230-54563_40456" : "node-I1378_20064-54563_40456"} data-name="Tab 1">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isActions ? "node-I1378_20256-54563_40456-54563_40769" : isChatSummary ? "node-I1378_20230-54563_40456-54563_40769" : "node-I1378_20064-54563_40456-54563_40769"} data-name="State-layer">
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isActions ? "node-I1378_20256-54563_40456-54563_40770" : isChatSummary ? "node-I1378_20230-54563_40456-54563_40770" : "node-I1378_20064-54563_40456-54563_40770"} data-name="Tab Contents">
                        <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isActions ? "node-I1378_20256-54563_40456-54563_40771" : isChatSummary ? "node-I1378_20230-54563_40456-54563_40771" : "node-I1378_20064-54563_40456-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                          <p className="leading-[20px]">{isChatSummary ? "Digital twin" : isChatHistoryOrActions ? "Assessment" : ""}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isActions ? "node-I1378_20256-54563_40457" : isChatSummary ? "node-I1378_20230-54563_40457" : "node-I1378_20064-54563_40457"} data-name="Tab 2">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isActions ? "node-I1378_20256-54563_40457-54563_40769" : isChatSummary ? "node-I1378_20230-54563_40457-54563_40769" : "node-I1378_20064-54563_40457-54563_40769"} data-name="State-layer">
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isActions ? "node-I1378_20256-54563_40457-54563_40770" : isChatSummary ? "node-I1378_20230-54563_40457-54563_40770" : "node-I1378_20064-54563_40457-54563_40770"} data-name="Tab Contents">
                        <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isActions ? "node-I1378_20256-54563_40457-54563_40771" : isChatSummary ? "node-I1378_20230-54563_40457-54563_40771" : "node-I1378_20064-54563_40457-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                          <p className="leading-[20px]">{`Chat `}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isActions ? "node-I1378_20256-54563_40458" : isChatSummary ? "node-I1378_20230-54563_40458" : "node-I1378_20064-54563_40458"} data-name="Tab 3">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isActions ? "node-I1378_20256-54563_40458-54563_40769" : isChatSummary ? "node-I1378_20230-54563_40458-54563_40769" : "node-I1378_20064-54563_40458-54563_40740"} data-name="State-layer">
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isActions ? "node-I1378_20256-54563_40458-54563_40770" : isChatSummary ? "node-I1378_20230-54563_40458-54563_40770" : "node-I1378_20064-54563_40458-54563_40741"} data-name="Tab Contents">
                        <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChatSummaryOrActions ? "text-[#d0bcff]" : "text-[#e6e0e9]"}`} id={isActions ? "node-I1378_20256-54563_40458-54563_40771" : isChatSummary ? "node-I1378_20230-54563_40458-54563_40771" : "node-I1378_20064-54563_40458-54563_40742"} style={{ fontVariationSettings: '"wdth" 100' }}>
                          <p className="leading-[20px]">Chat history</p>
                        </div>
                      </div>
                      {isChatHistory && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1378:20064;54563:40458;54563:40744" data-name="Indicator" />}
                    </div>
                  </div>
                  <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isActions ? "node-I1378_20256-54563_40459" : isChatSummary ? "node-I1378_20230-54563_40459" : "node-I1378_20064-54563_40459"} data-name="Tab 4">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isActions ? "node-I1378_20256-54563_40459-54563_40769" : isChatSummary ? "node-I1378_20230-54563_40459-54563_40740" : "node-I1378_20064-54563_40459-54563_40769"} data-name="State-layer">
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isActions ? "node-I1378_20256-54563_40459-54563_40770" : isChatSummary ? "node-I1378_20230-54563_40459-54563_40741" : "node-I1378_20064-54563_40459-54563_40770"} data-name="Tab Contents">
                        <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChatSummary ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isActions ? "node-I1378_20256-54563_40459-54563_40771" : isChatSummary ? "node-I1378_20230-54563_40459-54563_40742" : "node-I1378_20064-54563_40459-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                          <p className="leading-[20px]">Chat summary</p>
                        </div>
                      </div>
                      {isChatSummary && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1378:20230;54563:40459;54563:40744" data-name="Indicator" />}
                    </div>
                  </div>
                  <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isActions ? "node-I1378_20256-54563_40460" : isChatSummary ? "node-I1378_20230-54563_40460" : "node-I1378_20064-54563_40460"} data-name="Tab 5">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isActions ? "node-I1378_20256-54563_40460-54563_40740" : isChatSummary ? "node-I1378_20230-54563_40460-54563_40769" : "node-I1378_20064-54563_40460-54563_40769"} data-name="State-layer">
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isActions ? "node-I1378_20256-54563_40460-54563_40741" : isChatSummary ? "node-I1378_20230-54563_40460-54563_40770" : "node-I1378_20064-54563_40460-54563_40770"} data-name="Tab Contents">
                        <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isActions ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isActions ? "node-I1378_20256-54563_40460-54563_40742" : isChatSummary ? "node-I1378_20230-54563_40460-54563_40771" : "node-I1378_20064-54563_40460-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                          <p className="leading-[20px]">Suggested actions</p>
                        </div>
                      </div>
                      {isActions && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1378:20256;54563:40460;54563:40744" data-name="Indicator" />}
                    </div>
                  </div>
                  <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isActions ? "node-I1378_20256-54847_25133" : isChatSummary ? "node-I1378_20230-54847_25133" : "node-I1378_20064-54847_25133"} data-name="Tab 6">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isActions ? "node-I1378_20256-54847_25133-54563_40769" : isChatSummary ? "node-I1378_20230-54847_25133-54563_40769" : "node-I1378_20064-54847_25133-54563_40769"} data-name="State-layer">
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isActions ? "node-I1378_20256-54847_25133-54563_40770" : isChatSummary ? "node-I1378_20230-54847_25133-54563_40770" : "node-I1378_20064-54847_25133-54563_40770"} data-name="Tab Contents">
                        <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isActions ? "node-I1378_20256-54847_25133-54563_40771" : isChatSummary ? "node-I1378_20230-54847_25133-54563_40771" : "node-I1378_20064-54847_25133-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                          <p className="leading-[20px]">Deliverables</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isActions ? "node-I1378_20256-54847_25139" : isChatSummary ? "node-I1378_20230-54847_25139" : "node-I1378_20064-54847_25139"} data-name="Tab 7">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isActions ? "node-I1378_20256-54847_25139-54563_40769" : isChatSummary ? "node-I1378_20230-54847_25139-54563_40769" : "node-I1378_20064-54847_25139-54563_40769"} data-name="State-layer">
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isActions ? "node-I1378_20256-54847_25139-54563_40770" : isChatSummary ? "node-I1378_20230-54847_25139-54563_40770" : "node-I1378_20064-54847_25139-54563_40770"} data-name="Tab Contents">
                        <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isActions ? "node-I1378_20256-54847_25139-54563_40771" : isChatSummary ? "node-I1378_20230-54847_25139-54563_40771" : "node-I1378_20064-54847_25139-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                          <p className="leading-[20px]">Collaborators</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-px relative shrink-0 w-full" id={isActions ? "node-I1378_20256-54563_40461" : isChatSummary ? "node-I1378_20230-54563_40461" : "node-I1378_20064-54563_40461"} data-name="Divider">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
                </div>
              </div>
            </>
          )}
          {["Collaborators 1", "Variant7", "Chat"].includes(property1) && (
            <p className={isChat ? '[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[22px] text-[16px] text-white top-[29px] w-[882px] whitespace-pre-wrap' : "leading-[24px]"} id={isChat ? "node-I1385_6076-1385_5445" : undefined} style={isChat ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isVariant7 ? "Detailed deliverable" : isCollaborators1 ? "alex.clickworthy@acme.arqui.com.au" : "This section provides a quick overview of the data quality within your  digital twin to ensure the insights you see are as reliable as possible.  Here's a breakdown for each aspect:"}
            </p>
          )}
          {isChat && (
            <>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[28px] left-[22px] text-[22px] text-[color:var(--white,white)] top-[150px] whitespace-nowrap" data-node-id="I1385:6076;1385:5458" style={{ fontVariationSettings: '"wdth" 100' }}>
                Data accuracy
              </p>
              <div className="absolute bg-[#202125] h-[131px] left-[51px] top-[2253px] w-[115px]" data-node-id="I1385:6076;1385:5462" />
              <div className="absolute h-0 left-[22px] top-[883px] w-[916px]" data-node-id="I1385:6076;1385:5463">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine222} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[1636px] w-[916px]" data-node-id="I1385:6076;1385:5699">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine222} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[537px] w-[916px]" data-node-id="I1385:6076;1385:5698">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine222} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[109px] w-[916px]" data-node-id="I1385:6076;1385:5700">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine222} />
                </div>
              </div>
              <div className="absolute bg-[#141414] h-[291px] left-[19px] rounded-[12px] top-[203px] w-[432px]" data-node-id="I1385:6076;1385:5652" />
              <div className="absolute bg-[#141414] h-[291px] left-[472px] rounded-[12px] top-[203px] w-[432px]" data-node-id="I1385:6076;1385:5653" />
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[40px] text-[16px] text-[color:var(--white,white)] top-[225px] tracking-[0.15px] whitespace-nowrap" data-node-id="I1385:6076;1385:5654" style={{ fontVariationSettings: '"wdth" 100' }}>
                Metrics
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[22px] text-[16px] text-[color:var(--white,white)] top-[633px] tracking-[0.15px] whitespace-nowrap" data-node-id="I1385:6076;1385:5660" style={{ fontVariationSettings: '"wdth" 100' }}>
                Assessment
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[19px] text-[16px] text-[color:var(--white,white)] top-[963px] tracking-[0.15px] whitespace-nowrap" data-node-id="I1385:6076;1385:5666" style={{ fontVariationSettings: '"wdth" 100' }}>
                Source Information
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[498px] text-[16px] text-[color:var(--white,white)] top-[225px] tracking-[0.15px] whitespace-nowrap" data-node-id="I1385:6076;1385:5656" style={{ fontVariationSettings: '"wdth" 100' }}>
                Indicators
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[22px] text-[16px] text-[color:var(--white,white)] top-[745px] tracking-[0.15px] whitespace-nowrap" data-node-id="I1385:6076;1385:5661" style={{ fontVariationSettings: '"wdth" 100' }}>
                Inconsistent Data
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[19px] text-[16px] text-[color:var(--white,white)] top-[1477px] tracking-[0.15px] whitespace-nowrap" data-node-id="I1385:6076;1385:5667" style={{ fontVariationSettings: '"wdth" 100' }}>
                Source Credibility
              </p>
              <div className="absolute h-[476.328px] left-0 top-[1018px] w-[475.276px]" data-node-id="I1385:6076;1385:6563">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup911} />
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[40px] text-[16px] text-white top-[264px] w-[379px]" data-node-id="I1385:6076;1385:5670" style={{ fontVariationSettings: '"wdth" 100' }}>
                Arqui employs a multi-step data validation process to ensure accuracy. During the latest upload:
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[57px] leading-[normal] left-[498px] text-[16px] text-white top-[296px] w-[379px] whitespace-pre-wrap" data-node-id="I1385:6076;1385:5675" style={{ fontVariationSettings: '"wdth" 100' }}>{`Duplicate records identified (primarily within employee names and  contact information in HR documents and Leadership Team documents).`}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[38px] leading-[normal] left-[498px] text-[16px] text-white top-[417px] w-[379px]" data-node-id="I1385:6076;1385:5677" style={{ fontVariationSettings: '"wdth" 100' }}>
                Data outliers detected (e.g., a significant fluctuation in a specific KPI within a departmental report)
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-light leading-[normal] left-[40px] text-[24px] text-white top-[317px] whitespace-nowrap" data-node-id="I1385:6076;1385:5671" style={{ fontVariationSettings: '"wdth" 100' }}>
                98.7%
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-light leading-[normal] left-[498px] text-[24px] text-white top-[261px] whitespace-nowrap" data-node-id="I1385:6076;1385:5676" style={{ fontVariationSettings: '"wdth" 100' }}>
                25
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-light leading-[normal] left-[498px] text-[24px] text-white top-[382px] whitespace-nowrap" data-node-id="I1385:6076;1385:5678" style={{ fontVariationSettings: '"wdth" 100' }}>
                10
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-light leading-[normal] left-[40px] text-[24px] text-white top-[385px] whitespace-nowrap" data-node-id="I1385:6076;1385:5673" style={{ fontVariationSettings: '"wdth" 100' }}>
                1.3%
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-light leading-[normal] left-[847px] text-[24px] text-white top-[1098px] whitespace-nowrap" data-node-id="I1385:6076;1385:5687" style={{ fontVariationSettings: '"wdth" 100' }}>
                60%
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-light leading-[normal] left-[847px] text-[24px] text-white top-[1186px] whitespace-nowrap" data-node-id="I1385:6076;1385:5688" style={{ fontVariationSettings: '"wdth" 100' }}>
                20%
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-light leading-[normal] left-[847px] text-[24px] text-white top-[1274px] whitespace-nowrap" data-node-id="I1385:6076;1385:5690" style={{ fontVariationSettings: '"wdth" 100' }}>
                10%
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-light leading-[normal] left-[847px] text-[24px] text-white top-[1368px] whitespace-nowrap" data-node-id="I1385:6076;1385:5692" style={{ fontVariationSettings: '"wdth" 100' }}>
                10%
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[19px] leading-[normal] left-[40px] text-[16px] text-white top-[345px] w-[379px]" data-node-id="I1385:6076;1385:5672" style={{ fontVariationSettings: '"wdth" 100' }}>
                of data points passed automated validation checks
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[19px] leading-[normal] left-[40px] text-[16px] text-white top-[413px] w-[379px]" data-node-id="I1385:6076;1385:5674" style={{ fontVariationSettings: '"wdth" 100' }}>
                were flagged for potential inconsistencies and require manual review
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[95px] leading-[normal] left-[22px] text-[16px] text-white top-[672px] w-[892px] whitespace-pre-wrap" data-node-id="I1385:6076;1385:5662" style={{ fontVariationSettings: '"wdth" 100' }}>{`Overall, the data exhibits a good level of consistency in terms of  formatting and categorization. Arqui automatically standardized data  formats (e.g., dates, currencies) during upload.`}</p>
              <div className="[word-break:break-word] absolute font-roboto font-normal h-[57px] leading-[0] left-[19px] text-[16px] text-white top-[784px] w-[895px] whitespace-pre-wrap" data-node-id="I1385:6076;1385:5663" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[normal] mb-0">{`Minor inconsistencies were identified  in product category classifications between marketing materials  (Market_Trends_Forecasts_2023-2025.doc) and financial statements Income_Statements_Q3_2022.pdf).`}</p>
                <p className="leading-[normal]">{`Variations in terminology used across departments for similar concepts (e.g., "employee satisfaction" vs. "staff morale").`}</p>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[57px] leading-[normal] left-[513px] text-[16px] text-white top-[1097px] w-[309px] whitespace-pre-wrap" data-node-id="I1385:6076;1385:5686" style={{ fontVariationSettings: '"wdth" 100' }}>{`Internal documents: The majority of data originates from internal  reports, presentations, and policies.`}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[57px] leading-[normal] left-[513px] text-[16px] text-white top-[1185px] w-[309px]" data-node-id="I1385:6076;1385:5689" style={{ fontVariationSettings: '"wdth" 100' }}>
                External reports and data: This includes industry analyses, market research, and public data sources
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[57px] leading-[normal] left-[513px] text-[16px] text-white top-[1273px] w-[309px]" data-node-id="I1385:6076;1385:5691" style={{ fontVariationSettings: '"wdth" 100' }}>
                Third-party agreements: Contracts with suppliers, partners, and insurance providers provide data on external relationships
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[57px] leading-[normal] left-[513px] text-[16px] text-white top-[1367px] w-[309px]" data-node-id="I1385:6076;1385:5693" style={{ fontVariationSettings: '"wdth" 100' }}>
                Employee surveys: Data on employee sentiment and skills is captured through internal surveys
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[19px] text-[16px] text-white top-[998px] whitespace-nowrap" data-node-id="I1385:6076;1385:5679" style={{ fontVariationSettings: '"wdth" 100' }}>
                The digital twin is populated with data from a variety of sources, categorized as follows:
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal h-[95px] leading-[normal] left-[19px] text-[16px] text-white top-[1512px] w-[873px] whitespace-pre-wrap" data-node-id="I1385:6076;1385:5669" style={{ fontVariationSettings: '"wdth" 100' }}>{`Arqui assesses the credibility of each data source based on factors like  publisher reputation, data collection methodology, and alignment with  industry standards.  For example, industry reports from reputable firms  (Industry_Analyses_2023.pdf) are considered highly credible, while  customer satisfaction surveys conducted internally  (Customer_Satisfaction_Surveys_Q4_2022.xlsx) might require additional  context regarding sampling methodology.`}</p>
              <div className="absolute left-[469px] size-[28px] top-[1100px]" data-node-id="I1385:6076;1385:5694">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse49} />
              </div>
              <div className="absolute left-[469px] size-[28px] top-[1186px]" data-node-id="I1385:6076;1385:5695">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse50} />
              </div>
              <div className="absolute left-[469px] size-[28px] top-[1273px]" data-node-id="I1385:6076;1385:5696">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse51} />
              </div>
              <div className="absolute left-[469px] size-[28px] top-[1368px]" data-node-id="I1385:6076;1385:5697">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse52} />
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[28px] left-[22px] text-[22px] text-[color:var(--white,white)] top-[573px] whitespace-nowrap" data-node-id="I1385:6076;1385:6338" style={{ fontVariationSettings: '"wdth" 100' }}>
                Data consistency
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[28px] left-[22px] text-[22px] text-[color:var(--white,white)] top-[912px] whitespace-nowrap" data-node-id="I1385:6076;1385:6339" style={{ fontVariationSettings: '"wdth" 100' }}>
                Data source transparency
              </p>
            </>
          )}
        </div>
      )}
      {isCollaborators1OrVariant7 && (
        <>
          <div className={`absolute flex justify-center ${isVariant7 ? "h-[38px] items-center left-[780px] top-[33px] w-0" : '-translate-y-1/2 [word-break:break-word] flex-col font-roboto font-normal leading-[0] left-[34px] right-[791px] text-[#cac4d0] text-[16px] top-[calc(50%-97px)] tracking-[0.5px]'}`} id={isVariant7 ? "node-1378_20292" : "node-1378_20241"} style={isCollaborators1 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
            {isCollaborators1 && <p className="leading-[24px]">jordan.phisher@acme.arqui.com.au</p>}
            {isVariant7 && (
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[38px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgLine217} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={`absolute ${isVariant7 ? "border border-[#3c3d42] border-solid h-[611px] left-0 overflow-auto top-[81px] w-[950px]" : '-translate-y-1/2 [word-break:break-word] flex flex-col font-roboto font-normal justify-center leading-[0] left-[329px] text-[#d0bcff] text-[16px] top-[187px] tracking-[0.5px] whitespace-nowrap'}`} id={isVariant7 ? "node-1378_20293" : "node-1378_20242"} style={isCollaborators1 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
            <p className={`leading-[24px] ${isVariant7 ? '[word-break:break-word] absolute font-roboto font-medium left-[21px] text-[16px] text-[color:var(--white,white)] top-[20px] tracking-[0.15px] whitespace-nowrap' : ""}`} id={isVariant7 ? "node-1378_20294" : undefined} style={isVariant7 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isVariant7 ? "Phishing simulation effectiveness report" : isCollaborators1 ? "Remove" : ""}
            </p>
            {isVariant7 && (
              <>
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[21px] text-[14px] text-white top-[47px] tracking-[0.25px] whitespace-nowrap" data-node-id="1378:20295" style={{ fontVariationSettings: '"wdth" 100' }}>
                  21-Mar-2024
                </p>
                <div className="absolute bg-[#323338] h-[167px] left-[21px] rounded-[4px] top-[171px] w-[904px]" data-node-id="1378:20296" />
                <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col items-center justify-center left-[739px] overflow-clip rounded-[100px] top-[185px]" data-node-id="1378:20297" data-name="Button-dark">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1378:20298" data-name="state-layer">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1378:20299" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Upload documents</p>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] absolute font-roboto font-bold leading-[20px] left-[35px] text-[14px] text-white top-[185px] tracking-[0.25px] whitespace-nowrap" data-node-id="1378:20300" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Uploaded documents
                </p>
                <div className="absolute contents left-[331px] top-[24px]" data-node-id="1378:20301">
                  <div className="absolute bg-[#141218] border border-[#696969] border-solid h-[20px] left-[332px] rounded-[12px] top-[25px] w-[94px]" data-node-id="1378:20302" />
                  <div className="absolute left-[338px] size-[12px] top-[29px]" data-node-id="1378:20303">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse13} />
                  </div>
                  <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[385px] text-[11px] text-center text-white top-[29px] tracking-[0.1px] whitespace-nowrap" data-node-id="1378:20304" style={{ fontVariationSettings: '"wdth" 100' }}>
                    COMPLETE
                  </p>
                </div>
                <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[302px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1378:20305" data-name="Button-dark">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1378:20305;53923:27782" data-name="state-layer">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20305;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Export</p>
                    </div>
                  </div>
                </div>
                <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[174px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1378:20306" data-name="Button-dark">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1378:20306;53923:27782" data-name="state-layer">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20306;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Bookmark</p>
                    </div>
                  </div>
                </div>
                <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[21px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1378:20307" data-name="Button-dark">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1378:20308" data-name="state-layer">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1378:20309" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Comments (3)</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
      {isVariant8 && (
        <>
          <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-0 rounded-tl-[4px] rounded-tr-[4px] top-[704px] w-[702px]" data-node-id="1378:20066" data-name="Text field-dark">
            <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1378:20066;52798:26685" data-name="text field">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1378:20066;52798:26686" data-name="state-layer">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1378:20066;52798:26687" data-name="content">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1378:20066;52798:26688" data-name="label-text">
                    <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1378:20066;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Ask Arqui
                    </p>
                  </div>
                </div>
                <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1378:20066;52798:26690" data-name="trailing-icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1378:20066;52798:26690;51525:5137" data-name="container">
                    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1378:20066;52798:26690;51525:5138" data-name="state-layer">
                      <div className="relative shrink-0 size-[24px]" data-node-id="I1378:20066;52798:26690;51525:5139" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIconsSendFill0Wght400Grad0Opsz241} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="I1378:20066;52798:26691" data-name="Active indicator">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator} />
              </div>
            </div>
          </button>
          <div className="absolute contents left-0 top-0" data-node-id="1378:20067">
            <div className="absolute h-0 left-0 top-[49px] w-[1000px]" data-node-id="1378:20068">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgLine198} />
              </div>
            </div>
            <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-[8px] top-0 w-[904px]" data-node-id="1378:20069" data-name="Tabs-dark">
              <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-node-id="I1378:20069;54563:40455" data-name="Tab group">
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20069;54563:40456" data-name="Tab 1">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20069;54563:40456;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20069;54563:40456;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20069;54563:40456;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Assessment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20069;54563:40457" data-name="Tab 2">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20069;54563:40457;54563:40740" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20069;54563:40457;54563:40741" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#e6e0e9] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20069;54563:40457;54563:40742" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">{`Chat `}</p>
                      </div>
                    </div>
                    <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1378:20069;54563:40457;54563:40744" data-name="Indicator" />
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20069;54563:40458" data-name="Tab 3">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20069;54563:40458;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20069;54563:40458;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20069;54563:40458;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Chat history</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20069;54563:40459" data-name="Tab 4">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20069;54563:40459;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20069;54563:40459;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20069;54563:40459;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Chat summary</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20069;54563:40460" data-name="Tab 5">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20069;54563:40460;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20069;54563:40460;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20069;54563:40460;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Suggested actions</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20069;54847:25133" data-name="Tab 6">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20069;54847:25133;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20069;54847:25133;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20069;54847:25133;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Deliverables</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20069;54847:25139" data-name="Tab 7">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20069;54847:25139;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20069;54847:25139;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20069;54847:25139;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Collaborators</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px relative shrink-0 w-full" data-node-id="I1378:20069;54563:40461" data-name="Divider">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
              </div>
            </div>
          </div>
          <div className="absolute h-[655px] left-0 overflow-x-clip overflow-y-auto top-[49px] w-[950px]" data-node-id="1378:20070">
            <div className="absolute bg-[#2f3034] h-[81px] left-0 rounded-[12px] top-[-1173px] w-[931px]" data-node-id="1378:20071" />
            <div className="absolute bg-[#2f3034] h-[85px] left-0 rounded-[12px] top-[-227px] w-[931px]" data-node-id="1378:20072" />
            <div className="absolute bg-[#2f3034] h-[85px] left-0 rounded-[12px] top-[49px] w-[931px]" data-node-id="1378:20073" />
            <div className="absolute bg-[#2f3034] h-[77px] left-0 rounded-[12px] top-[-839px] w-[931px]" data-node-id="1378:20074" />
            <div className="absolute bg-[#2f3034] h-[81px] left-0 rounded-[12px] top-[-564px] w-[931px]" data-node-id="1378:20075" />
            <div className="absolute inset-[-176.79%_97.16%_274.2%_1.05%]" data-node-id="1378:20076" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
            </div>
            <div className="absolute contents left-[9px] top-[-1065px]" data-node-id="1378:20077">
              <div className="absolute contents left-[9px] top-[-1065px]" data-node-id="1378:20078">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-1064px] whitespace-nowrap" data-node-id="1378:20079" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                <div className="absolute left-[9px] size-[17px] top-[-1065px]" data-node-id="1378:20080" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
                </div>
              </div>
            </div>
            <div className="absolute inset-[-126.11%_97.26%_223.51%_0.95%]" data-node-id="1378:20081" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
            </div>
            <div className="absolute inset-[-83.51%_97.26%_180.92%_0.95%]" data-node-id="1378:20082" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
            </div>
            <div className="absolute contents left-[9px] top-[-740px]" data-node-id="1378:20083">
              <div className="absolute contents left-[9px] top-[-740px]" data-node-id="1378:20084">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-739px] whitespace-nowrap" data-node-id="1378:20085" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                <div className="absolute left-[9px] size-[17px] top-[-740px]" data-node-id="1378:20086" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-467px]" data-node-id="1378:20087">
              <div className="absolute contents left-[9px] top-[-467px]" data-node-id="1378:20088">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-466px] whitespace-nowrap" data-node-id="1378:20089" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                <div className="absolute left-[9px] size-[17px] top-[-467px]" data-node-id="1378:20090" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-122px]" data-node-id="1378:20091">
              <div className="absolute contents left-[9px] top-[-122px]" data-node-id="1378:20092">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-121px] whitespace-nowrap" data-node-id="1378:20093" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                <div className="absolute left-[9px] size-[17px] top-[-122px]" data-node-id="1378:20094" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[152px]" data-node-id="1378:20095">
              <div className="absolute contents left-[9px] top-[152px]" data-node-id="1378:20096">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[153px] whitespace-nowrap" data-node-id="1378:20097" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                <div className="absolute left-[9px] size-[17px] top-[152px]" data-node-id="1378:20098" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[781px] top-[-1129px]" data-node-id="1378:20099">
              <div className="absolute contents left-[782px] top-[-1129px]" data-node-id="1378:20100">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[805px] text-[#d0bcff] text-[12px] top-[-1127px] whitespace-nowrap" data-node-id="1378:20101" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[782px] size-[20px] top-[-1129px]" data-node-id="1378:20102" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[781px] top-[-1045px]" data-node-id="1378:20104">
                <div className="absolute contents left-[781px] top-[-985px]" data-node-id="1378:20105">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[803px] text-[#d0bcff] text-[12px] top-[-983px] whitespace-nowrap" data-node-id="1378:20106" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-985px]" data-node-id="1378:20107" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[781px] top-[-1015px]" data-node-id="1378:20109">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[803px] text-[#d0bcff] text-[12px] top-[-1013px] whitespace-nowrap" data-node-id="1378:20110" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-1015px]" data-node-id="1378:20111" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[781px] top-[-1045px]" data-node-id="1378:20113">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[805px] text-[#d0bcff] text-[12px] top-[-1042px] whitespace-nowrap" data-node-id="1378:20114" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-1045px]" data-node-id="1378:20115" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute contents left-[9px] top-[-1154.86px]" data-node-id="1378:20117">
              <p className="absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-1129px] tracking-[0.25px] w-[693px]" data-node-id="1378:20118" style={{ fontVariationSettings: '"wdth" 100' }}>{`What specific skill gaps are most prevalent in the R&D department?`}</p>
              <p className="absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-1154.86px] whitespace-nowrap" data-node-id="1378:20119" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
            </div>
            <div className="absolute contents left-[9px] top-[-210px]" data-node-id="1378:20120">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-182px] tracking-[0.25px] w-[686px]" data-node-id="1378:20121" style={{ fontVariationSettings: '"wdth" 100' }}>
                What are potential solutions for filling these skill gaps: upskilling, targeted recruitment, or partnerships?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-207.86px] whitespace-nowrap" data-node-id="1378:20122" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-32.06%_97.2%_129.47%_1.01%]" data-node-id="1378:20123" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector2} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[64px]" data-node-id="1378:20124">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[92px] tracking-[0.25px] w-[686px]" data-node-id="1378:20125" style={{ fontVariationSettings: '"wdth" 100' }}>
                what aspects of the digital twin are impacted by this?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[66.14px] whitespace-nowrap" data-node-id="1378:20126" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[9.77%_97.2%_87.63%_1.01%]" data-node-id="1378:20127" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="[word-break:break-word] absolute contents left-[9px] top-[-821.86px]" data-node-id="1378:20128">
              <p className="absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-796px] tracking-[0.25px] w-[688px]" data-node-id="1378:20129" style={{ fontVariationSettings: '"wdth" 100' }}>
                Which innovation projects have been most impacted due to these skill gaps?
              </p>
              <p className="absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-821.86px] whitespace-nowrap" data-node-id="1378:20130" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
            </div>
            <div className="[word-break:break-word] absolute contents leading-[normal] left-[9px] top-[-543.86px]" data-node-id="1378:20131">
              <p className="absolute font-roboto font-normal left-[9px] text-[14px] text-white top-[-518px] w-[676px]" data-node-id="1378:20132" style={{ fontVariationSettings: '"wdth" 100' }}>{`Are there industry benchmarks for R&D skills that we can compare ourselves against?`}</p>
              <p className="absolute font-roboto font-medium left-[32.23px] text-[#a59df8] text-[12px] top-[-543.86px] whitespace-nowrap" data-node-id="1378:20133" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
            </div>
            <div className="absolute contents left-[9px] top-[-1039px]" data-node-id="1378:20134">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-1039px] tracking-[0.25px] w-[718px]" data-node-id="1378:20135" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">{`Based on the "Training Needs Assessment" and "Employee Skill-Set Mapping," the most critical skill gaps in R&D include:`}</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Advanced data analytics and machine learning expertise, particularly in the context of product development and process optimization.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Experience with emerging technologies relevant to your industry, such as artificial intelligence, blockchain, and internet of things (IoT).</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Strong understanding of user experience (UX) design principles to ensure developed products are user-friendly and meet customer needs.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-92px]" data-node-id="1378:20136">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-92px] tracking-[0.25px] w-[718px]" data-node-id="1378:20137" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[normal] mb-[8px]">Here are potential solutions to address the identified skill gaps:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[normal]">{`Upskilling initiatives: Partner with training providers to offer specialized courses and workshops on relevant data analytics, emerging technologies, and UX design for R&D personnel.`}</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[normal]">Targeted recruitment: Focus recruitment efforts on attracting candidates with the necessary skill sets, leveraging job boards and professional networks specific to these areas.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[normal]">Partnerships: Consider collaborating with universities or research institutions to access expertise and talent or explore joint research projects to bridge the knowledge gap.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[181px]" data-node-id="1378:20138">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[181px] w-[718px]" data-node-id="1378:20139" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">1. Core:</p>
                <ul className="mb-[8px]">
                  <li className="list-disc mb-0 ms-[21px]">
                    <span className="leading-[20px]">Capabilities:</span>
                  </li>
                  <ul className="mb-0">
                    <li className="list-disc mb-0 ms-[42px]">
                      <span className="leading-[20px]">Strategic:</span>
                    </li>
                    <ul>
                      <li className="list-disc ms-[63px]">
                        <span className="leading-[20px]">{`Innovation: This insight highlights a potential gap between the well-funded "Innovation" capability and its effectiveness due to skill deficiencies within the R&D department.`}</span>
                      </li>
                    </ul>
                  </ul>
                  <li className="list-disc mb-0 ms-[21px]">
                    <span className="leading-[20px]">Information:</span>
                  </li>
                  <ul>
                    <li className="list-disc ms-[42px]">
                      <span className="leading-[20px]">{`Data and Analytics: While data and analytics capabilities might exist, the insight suggests a potential underutilization of these resources in addressing the R&D skill gap.`}</span>
                    </li>
                  </ul>
                </ul>
                <p className="leading-[20px] mb-[8px]">2. Extended:</p>
                <ul className="mb-[8px]">
                  <li className="list-disc mb-0 ms-[21px]">
                    <span className="leading-[20px]">Stakeholders:</span>
                  </li>
                  <ul className="mb-0">
                    <li className="list-disc ms-[42px]">
                      <span className="leading-[20px]">{`Internal: The skills gap in R&D could impact stakeholder engagement, particularly with employees seeking opportunities for growth and development within the department.`}</span>
                    </li>
                  </ul>
                  <li className="list-disc mb-0 ms-[21px]">
                    <span className="leading-[20px]">Metrics and KPIs:</span>
                  </li>
                  <ul className="mb-0">
                    <li className="list-disc ms-[42px]">
                      <span className="leading-[20px]">Innovation KPIs: The insight suggests a potential need to re-evaluate or refine KPIs related to innovation output or project completion rates, considering the identified skill gap.</span>
                    </li>
                  </ul>
                  <li className="list-disc mb-0 ms-[21px]">
                    <span className="leading-[20px]">Initiatives:</span>
                  </li>
                  <ul>
                    <li className="list-disc ms-[42px]">
                      <span className="leading-[20px]">{`Strategic Initiatives: Depending on the nature of strategic initiatives, the R&D skill gap could potentially hinder the successful execution of innovation-related projects.`}</span>
                    </li>
                  </ul>
                </ul>
                <p className="leading-[20px]">{`It's important to remember that the digital twin is a dynamic representation of your organization. As you address the identified skills gap and implement solutions, the impacted aspects of the digital twin will be updated to reflect the evolving state of your organization.`}</p>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-710px]" data-node-id="1378:20140">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-710px] w-[718px]" data-node-id="1378:20141" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Two innovation projects most affected by these skill gaps are:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">{`Project "Horizon": Development of a smart home appliance, currently facing delays due to the lack of expertise in integrating AI and IoT functionalities.`}</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">{`Project "Phoenix": Redesigning the manufacturing process for sustainable materials, experiencing setbacks due to limited knowledge of data-driven process optimization techniques.`}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-435px]" data-node-id="1378:20142">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-435px] w-[718px]" data-node-id="1378:20143" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">{`According to the "2024 Global Innovation Talent Report" by the Smith Innovation Institute, leading companies in your industry allocate an average of 20% of their R&D budget towards training and upskilling their workforce on emerging technologies. Additionally, the report highlights the growing demand for R&D professionals with dual expertise in their domain and data science/analytics.`}</p>
                <p className="leading-[20px]">{`Furthermore, a recent article in "Industry Today" magazine, titled "The Future of R&D: Embracing New Skills and Technologies," emphasizes the importance of fostering a culture of continuous learning and knowledge sharing within R&D teams. The article cites a study by the World Economic Forum which predicts that by 2030, up to 50% of the workforce will require reskilling or upskilling due to the rapid pace of technological change.`}</p>
              </div>
            </div>
            <div className="absolute contents left-[781px] top-[-800px]" data-node-id="1378:20144">
              <div className="absolute contents left-[782px] top-[-800px]" data-node-id="1378:20145">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[805px] text-[#d0bcff] text-[12px] top-[-798px] whitespace-nowrap" data-node-id="1378:20146" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[782px] size-[20px] top-[-800px]" data-node-id="1378:20147" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[781px] top-[-716px]" data-node-id="1378:20149">
                <div className="absolute contents left-[781px] top-[-656px]" data-node-id="1378:20150">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[803px] text-[#d0bcff] text-[12px] top-[-654px] whitespace-nowrap" data-node-id="1378:20151" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-656px]" data-node-id="1378:20152" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[781px] top-[-686px]" data-node-id="1378:20154">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[803px] text-[#d0bcff] text-[12px] top-[-684px] whitespace-nowrap" data-node-id="1378:20155" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-686px]" data-node-id="1378:20156" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[781px] top-[-716px]" data-node-id="1378:20158">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[805px] text-[#d0bcff] text-[12px] top-[-713px] whitespace-nowrap" data-node-id="1378:20159" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-716px]" data-node-id="1378:20160" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[781px] top-[-518px]" data-node-id="1378:20162">
              <div className="absolute contents left-[782px] top-[-518px]" data-node-id="1378:20163">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[805px] text-[#d0bcff] text-[12px] top-[-516px] whitespace-nowrap" data-node-id="1378:20164" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[782px] size-[20px] top-[-518px]" data-node-id="1378:20165" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[781px] top-[-434px]" data-node-id="1378:20167">
                <div className="absolute contents left-[781px] top-[-374px]" data-node-id="1378:20168">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[803px] text-[#d0bcff] text-[12px] top-[-372px] whitespace-nowrap" data-node-id="1378:20169" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-374px]" data-node-id="1378:20170" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[781px] top-[-404px]" data-node-id="1378:20172">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[803px] text-[#d0bcff] text-[12px] top-[-402px] whitespace-nowrap" data-node-id="1378:20173" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-404px]" data-node-id="1378:20174" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[781px] top-[-434px]" data-node-id="1378:20176">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[805px] text-[#d0bcff] text-[12px] top-[-431px] whitespace-nowrap" data-node-id="1378:20177" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-434px]" data-node-id="1378:20178" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[781px] top-[-182px]" data-node-id="1378:20180">
              <div className="absolute contents left-[782px] top-[-182px]" data-node-id="1378:20181">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[805px] text-[#d0bcff] text-[12px] top-[-180px] whitespace-nowrap" data-node-id="1378:20182" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[782px] size-[20px] top-[-182px]" data-node-id="1378:20183" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[781px] top-[-98px]" data-node-id="1378:20185">
                <div className="absolute contents left-[781px] top-[-38px]" data-node-id="1378:20186">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[803px] text-[#d0bcff] text-[12px] top-[-36px] whitespace-nowrap" data-node-id="1378:20187" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-38px]" data-node-id="1378:20188" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[781px] top-[-68px]" data-node-id="1378:20190">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[803px] text-[#d0bcff] text-[12px] top-[-66px] whitespace-nowrap" data-node-id="1378:20191" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-68px]" data-node-id="1378:20192" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[781px] top-[-98px]" data-node-id="1378:20194">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[805px] text-[#d0bcff] text-[12px] top-[-95px] whitespace-nowrap" data-node-id="1378:20195" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[-98px]" data-node-id="1378:20196" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[781px] top-[92px]" data-node-id="1378:20198">
              <div className="absolute contents left-[782px] top-[92px]" data-node-id="1378:20199">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[805px] text-[#d0bcff] text-[12px] top-[94px] whitespace-nowrap" data-node-id="1378:20200" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[782px] size-[20px] top-[92px]" data-node-id="1378:20201" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[781px] top-[176px]" data-node-id="1378:20203">
                <div className="absolute contents left-[781px] top-[236px]" data-node-id="1378:20204">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[803px] text-[#d0bcff] text-[12px] top-[238px] whitespace-nowrap" data-node-id="1378:20205" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[236px]" data-node-id="1378:20206" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[781px] top-[206px]" data-node-id="1378:20208">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[803px] text-[#d0bcff] text-[12px] top-[208px] whitespace-nowrap" data-node-id="1378:20209" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[206px]" data-node-id="1378:20210" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[781px] top-[176px]" data-node-id="1378:20212">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[805px] text-[#d0bcff] text-[12px] top-[179px] whitespace-nowrap" data-node-id="1378:20213" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[781px] size-[20px] top-[176px]" data-node-id="1378:20214" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {isCollaborators1 && (
        <>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[329px] text-[#d0bcff] text-[16px] top-[232px] tracking-[0.5px] whitespace-nowrap" data-node-id="1378:20243" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px]">Remove</p>
          </div>
          <div className="absolute contents left-0 top-0" data-node-id="1378:20244">
            <div className="absolute h-0 left-0 top-[49px] w-[1000px]" data-node-id="1378:20245">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgLine198} />
              </div>
            </div>
            <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-[8px] top-0 w-[904px]" data-node-id="1378:20246" data-name="Tabs-dark">
              <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-node-id="I1378:20246;54563:40455" data-name="Tab group">
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20246;54563:40456" data-name="Tab 1">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20246;54563:40456;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20246;54563:40456;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20246;54563:40456;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Assessment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20246;54563:40457" data-name="Tab 2">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20246;54563:40457;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20246;54563:40457;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20246;54563:40457;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">{`Chat `}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20246;54563:40458" data-name="Tab 3">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20246;54563:40458;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20246;54563:40458;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20246;54563:40458;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Chat history</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20246;54563:40459" data-name="Tab 4">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20246;54563:40459;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20246;54563:40459;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20246;54563:40459;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Chat summary</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20246;54563:40460" data-name="Tab 5">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20246;54563:40460;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20246;54563:40460;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20246;54563:40460;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Suggested actions</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20246;54847:25133" data-name="Tab 6">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20246;54847:25133;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20246;54847:25133;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20246;54847:25133;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Deliverables</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20246;54847:25139" data-name="Tab 7">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20246;54847:25139;54563:40740" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20246;54847:25139;54563:40741" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#e6e0e9] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20246;54847:25139;54563:40742" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Collaborators</p>
                      </div>
                    </div>
                    <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1378:20246;54847:25139;54563:40744" data-name="Indicator" />
                  </div>
                </div>
              </div>
              <div className="h-px relative shrink-0 w-full" data-node-id="I1378:20246;54563:40461" data-name="Divider">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
              </div>
            </div>
          </div>
        </>
      )}
      {isDeliverables && (
        <>
          <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[624px] overflow-clip rounded-[100px] top-[97px]" data-node-id="1378:20283" data-name="Button-dark">
            <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1378:20283;53923:27782" data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20283;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Add a custom deliverable</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-0 top-0" data-node-id="1378:20284">
            <div className="absolute h-0 left-0 top-[49px] w-[1000px]" data-node-id="1378:20285">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgLine198} />
              </div>
            </div>
            <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-[8px] top-0 w-[904px]" data-node-id="1378:20286" data-name="Tabs-dark">
              <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-node-id="I1378:20286;54563:40455" data-name="Tab group">
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20286;54563:40456" data-name="Tab 1">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20286;54563:40456;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20286;54563:40456;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20286;54563:40456;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Assessment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20286;54563:40457" data-name="Tab 2">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20286;54563:40457;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20286;54563:40457;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20286;54563:40457;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">{`Chat `}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20286;54563:40458" data-name="Tab 3">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20286;54563:40458;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20286;54563:40458;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20286;54563:40458;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Chat history</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20286;54563:40459" data-name="Tab 4">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20286;54563:40459;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20286;54563:40459;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20286;54563:40459;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Chat summary</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20286;54563:40460" data-name="Tab 5">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20286;54563:40460;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20286;54563:40460;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20286;54563:40460;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Suggested actions</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20286;54847:25133" data-name="Tab 6">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20286;54847:25133;54563:40740" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20286;54847:25133;54563:40741" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#e6e0e9] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20286;54847:25133;54563:40742" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Deliverables</p>
                      </div>
                    </div>
                    <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1378:20286;54847:25133;54563:40744" data-name="Indicator" />
                  </div>
                </div>
                <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-node-id="I1378:20286;54847:25139" data-name="Tab 7">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1378:20286;54847:25139;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1378:20286;54847:25139;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1378:20286;54847:25139;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Collaborators</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px relative shrink-0 w-full" data-node-id="I1378:20286;54563:40461" data-name="Divider">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}