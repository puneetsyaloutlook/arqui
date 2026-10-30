import { A } from '../assets/acs1434_13582';


type ContentStatesProps = {
  className?: string;
  property1?: "Chat History" | "Chat Summary" | "Actions" | "Deliverables" | "Collaborators 1" | "Variant7" | "Variant8" | "Chat";
};

export default function ContentStates({ className, property1 = "Chat" }: ContentStatesProps) {
  const isActions = property1 === "Actions";
  const isChat = property1 === "Chat";
  const isChatHistory = property1 === "Chat History";
  const isChatSummary = property1 === "Chat Summary";
  const isChatSummaryOrCollaborators1OrDeliverables = ["Chat Summary", "Collaborators 1", "Deliverables"].includes(property1);
  const isChatSummaryOrDeliverables = ["Chat Summary", "Deliverables"].includes(property1);
  const isCollaborators1 = property1 === "Collaborators 1";
  const isCollaborators1OrDeliverables = ["Collaborators 1", "Deliverables"].includes(property1);
  const isDeliverables = property1 === "Deliverables";
  const isVariant7 = property1 === "Variant7";
  const isVariant8 = property1 === "Variant8";
  const isVariant8OrActions = ["Variant8", "Actions"].includes(property1);
  return (
    <div className={className || `relative ${isVariant7 ? "h-[704px] w-[950px]" : "h-[681px] w-[1000px]"}`} id={isChat ? "node-1434_13591" : isVariant7 ? "node-1434_13839" : isDeliverables ? "node-1434_13811" : isActions ? "node-1434_13798" : isVariant8 ? "node-1434_15105" : isCollaborators1 ? "node-1434_13744" : isChatSummary ? "node-1434_13733" : "node-1434_13583"}>
      <div className={`absolute ${isChat ? "h-0 left-0 top-[49px] w-[1000px]" : isVariant7 ? "contents left-0 top-[23px]" : isDeliverables ? "h-[629px] left-0 overflow-clip top-[49px] w-[1072px]" : isActions ? "h-[626px] left-0 overflow-x-clip overflow-y-auto top-[49px] w-[1072px]" : isVariant8 ? "h-[631px] left-[7px] overflow-x-clip overflow-y-auto top-[50px] w-[985px]" : isCollaborators1 ? "h-[632px] left-0 overflow-x-clip overflow-y-auto top-[49px] w-[1072px]" : isChatSummary ? "[word-break:break-word] h-[628px] left-0 overflow-clip top-[49px] w-[1072px]" : "h-[576px] left-[8px] overflow-x-clip overflow-y-auto top-[49px] w-[985px]"}`} id={isChat ? "node-1434_13592" : isVariant7 ? "node-1434_13840" : isDeliverables ? "node-1434_15290" : isActions ? "node-1434_15299" : isVariant8 ? "node-1434_15109" : isCollaborators1 ? "node-1434_15247" : isChatSummary ? "node-1434_15308" : "node-1434_15367"}>
        {["Chat History", "Variant8", "Variant7", "Chat"].includes(property1) && (
          <div className={`absolute ${isChat ? "inset-[-1px_0_0_0]" : isVariant7 ? "bg-[#3c3d42] h-[58px] left-0 rounded-tl-[12px] rounded-tr-[12px] top-[23px] w-[950px]" : isVariant8 ? "bg-[#141218] h-[261px] left-[10px] rounded-[8px] top-[99px] w-[443px]" : "bg-[#2f3034] h-[98px] left-0 rounded-[12px] top-[-2175px] w-[950px]"}`} id={isVariant7 ? "node-1434_13841" : isVariant8 ? "node-1434_15110" : isChatHistory ? "node-1434_15368" : undefined}>
            {isChat && <img alt="" className="block max-w-none size-full" src={A.imgGroup800} />}
          </div>
        )}
        {isChatSummaryOrCollaborators1OrDeliverables && (
          <>
            <p className={`absolute font-roboto font-medium leading-[24px] left-[22px] text-[16px] text-white tracking-[0.15px] whitespace-nowrap ${isCollaborators1OrDeliverables ? "[word-break:break-word] top-[14px]" : "top-[21px]"}`} id={isDeliverables ? "node-1434_15291" : isCollaborators1 ? "node-1434_15248" : "node-1434_15309"} style={{ fontVariationSettings: '"wdth" 100' }}>
              {isDeliverables ? "Actions (2)" : isCollaborators1 ? "Deliverables" : isChatSummary ? "Chat history (3 questions)" : ""}
            </p>
            <div className={`absolute ${isDeliverables ? '[word-break:break-word] font-roboto font-normal h-[120px] leading-[0] left-[26px] text-[0px] text-white top-[84px] tracking-[0.25px] w-[820px]' : isCollaborators1 ? "contents left-[22px] top-[46px]" : 'font-roboto font-normal h-[130px] leading-[0] left-[107px] text-[14px] text-white top-[62px] tracking-[0.25px] w-[649px] whitespace-pre-wrap'}`} id={isDeliverables ? "node-1434_15292" : isCollaborators1 ? "node-1434_15249" : "node-1434_15310"} style={isChatSummaryOrDeliverables ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              <p className={`leading-[20px] ${isDeliverables ? 'font-roboto font-bold mb-0 text-[14px]' : isCollaborators1 ? '[word-break:break-word] absolute font-roboto font-normal left-[41px] text-[#959595] text-[14px] top-[46px] tracking-[0.25px] whitespace-nowrap' : "mb-0"}`} id={isCollaborators1 ? "node-1434_15250" : undefined} style={isCollaborators1OrDeliverables ? { fontVariationSettings: '"wdth" 100' } : undefined}>
                {isDeliverables ? "Initiate a cross-functional task force:" : isCollaborators1 ? "Note: The list of suggested deliverables is updated every time you ask a question." : isChatSummary ? "Does MIT research translate to real-world benefits? Need proof-of-concept for grid impact before major investment." : ""}
              </p>
              {isChatSummaryOrDeliverables && <p className={`leading-[20px] mb-0 ${isDeliverables ? "text-[14px]" : ""}`}>{isDeliverables ? "Establish a dedicated team comprising representatives from R&D, IT, security, and strategy departments. This task force can:" : isChatSummary ? "​" : ""}</p>}
              {isChatSummary && (
                <>
                  <p className="leading-[20px] mb-0">Quantum for efficiency, but what about security risks? Can we integrate securely without jeopardizing current infrastructure?</p>
                  <p className="leading-[20px] mb-0">​</p>
                  <p className="leading-[20px]">The 5-year window is tight. How can we build internal expertise and partnerships to be ready for quantum adoption on time?</p>
                </>
              )}
              {isCollaborators1 && (
                <div className="absolute inset-[7.75%_96.64%_90.03%_2.05%]" data-node-id="1434:15251" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
                </div>
              )}
              {isDeliverables && (
                <>
                  <ul className="list-disc mb-0">
                    <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                      <span className="leading-[20px] text-[14px]">Track developments: Monitor research progress, pilot projects, and industry trends related to quantum computing for grid optimization.</span>
                    </li>
                    <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                      <span className="leading-[20px] text-[14px]">{`Conduct initial assessment: Analyze potential impact on Acme's grid infrastructure, energy mix, and operational efficiency. Identify potential risks and opportunities for cost savings and competitive advantage.`}</span>
                    </li>
                    <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                      <span className="leading-[20px] text-[14px]">Develop a roadmap: Based on the assessment, create a phased roadmap for exploring and potentially integrating quantum solutions. This roadmap should include milestones, resource allocation plans, and partnerships to be pursued.</span>
                    </li>
                    <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                      <span className="leading-[20px] text-[14px]">{`Advocate and educate: Raise awareness within Acme's leadership about the potential of quantum computing and the strategic importance of early exploration.`}</span>
                    </li>
                  </ul>
                  <p className="leading-[20px] text-[14px]">​</p>
                </>
              )}
            </div>
          </>
        )}
        {["Chat History", "Chat Summary", "Variant8"].includes(property1) && (
          <div className={`absolute ${isVariant8 ? "bg-[#141218] h-[399px] left-[10px] rounded-[8px] top-[375px] w-[443px]" : isChatSummary ? 'font-roboto font-normal leading-[0] left-[22px] text-[#d0bcff] text-[14px] top-[62px] tracking-[0.25px] whitespace-nowrap' : "contents left-[745px] top-[-2130px]"}`} id={isVariant8 ? "node-1434_15111" : isChatSummary ? "node-1434_15311" : "node-1434_15369"} style={isChatSummary ? { fontVariationSettings: '"wdth" 100' } : undefined}>
            {isChatHistory && (
              <>
                <div className="absolute contents left-[746px] top-[-2130px]" data-node-id="1434:15370">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-2128px] whitespace-nowrap" data-node-id="1434:15371" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Edit question
                  </p>
                  <div className="absolute left-[746px] size-[20px] top-[-2130px]" data-node-id="1434:15372" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[745px] top-[-2046px]" data-node-id="1434:15374">
                  <div className="absolute contents left-[745px] top-[-1986px]" data-node-id="1434:15375">
                    <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1984px] whitespace-nowrap" data-node-id="1434:15376" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Export response
                    </p>
                    <div className="absolute left-[745px] size-[20px] top-[-1986px]" data-node-id="1434:15377" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                    </div>
                  </div>
                  <button className="absolute contents cursor-pointer left-[745px] top-[-2016px]" data-node-id="1434:15379">
                    <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-2014px] whitespace-nowrap" data-node-id="1434:15380" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Check sources
                    </p>
                    <div className="absolute left-[745px] size-[20px] top-[-2016px]" data-node-id="1434:15381" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                    </div>
                  </button>
                  <div className="absolute contents left-[745px] top-[-2046px]" data-node-id="1434:15383">
                    <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-2043px] whitespace-nowrap" data-node-id="1434:15384" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Regenerate
                    </p>
                    <div className="absolute left-[745px] size-[20px] top-[-2046px]" data-node-id="1434:15385" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                    </div>
                  </div>
                </div>
              </>
            )}
            {isChatSummary && (
              <>
                <p className="leading-[20px] mb-0 whitespace-pre">Question 1</p>
                <p className="leading-[20px] mb-0 whitespace-pre">​</p>
                <p className="leading-[20px] mb-0 whitespace-pre">​</p>
                <p className="leading-[20px] mb-0 whitespace-pre">Question 2</p>
                <p className="leading-[20px] mb-0 whitespace-pre">​</p>
                <p className="leading-[20px] mb-0 whitespace-pre">​</p>
                <p className="leading-[20px] whitespace-pre">Question 3</p>
              </>
            )}
          </div>
        )}
        {["Chat History", "Variant8"].includes(property1) && <div className={`absolute ${isVariant8 ? "bg-[#202125] h-[134px] left-[62px] top-[779px] w-[95px]" : "bg-[#2f3034] h-[104px] left-0 rounded-[12px] top-[-229px] w-[950px]"}`} id={isVariant8 ? "node-1434_15112" : "node-1434_15387"} />}
        {["Variant8", "Actions", "Variant7"].includes(property1) && (
          <div className={`absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip rounded-[100px] ${isVariant7 ? "cursor-pointer left-[817px] top-[32px] w-[107.667px]" : isActions ? "cursor-pointer left-[543px] top-[15px]" : "left-[27px] top-[710px] w-[112px]"}`} id={isVariant7 ? "node-1434_13842" : isActions ? "node-1434_15300" : "node-1434_15113"} data-name="Button-dark">
            <div className={`content-stretch flex items-center justify-center py-[10px] relative shrink-0 w-full ${isVariant7 ? "gap-[8px] pl-[16px] pr-[24px]" : "px-[24px]"}`} id={isVariant7 ? "node-I1434_13842-53923_27766" : isActions ? "node-I1434_15300-53923_27782" : "node-1434_15114"} data-name="state-layer">
              {isVariant8OrActions && (
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isActions ? "node-I1434_15300-53923_27783" : "node-1434_15115"} style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">{isActions ? "Export summary" : isVariant8 ? "Send invite" : ""}</p>
                </div>
              )}
              {isVariant7 && (
                <>
                  <div className="relative shrink-0 size-[18px]" data-node-id="I1434:13842;53923:27767" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon1} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1434:13842;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Close</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        {isChatHistory && (
          <>
            <div className="absolute bg-[#2f3034] h-[95px] left-0 rounded-[12px] top-[-1463px] w-[950px]" data-node-id="1434:15388" />
            <div className="absolute bg-[#2f3034] h-[96px] left-0 rounded-[12px] top-[-764px] w-[950px]" data-node-id="1434:15389" />
            <div className="absolute contents left-[9px] top-[-2159px]" data-node-id="1434:15390">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-2131px] tracking-[0.25px] w-[693px]" data-node-id="1434:15391" style={{ fontVariationSettings: '"wdth" 100' }}>
                Which specific regulations in our key markets pose the most immediate risk or require the most significant operational changes?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-2156.86px] whitespace-nowrap" data-node-id="1434:15392" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-374.83%_97.26%_471.88%_1.01%]" data-node-id="1434:15393" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-212px]" data-node-id="1434:15394">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-184px] tracking-[0.25px] w-[686px]" data-node-id="1434:15395" style={{ fontVariationSettings: '"wdth" 100' }}>
                an you help me assess the potential financial impact of different compliance scenarios, considering both costs and potential market opportunities?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-209.86px] whitespace-nowrap" data-node-id="1434:15396" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-36.81%_97.26%_133.85%_1.01%]" data-node-id="1434:15397" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-1448px]" data-node-id="1434:15398">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-1420px] tracking-[0.25px] w-[688px]" data-node-id="1434:15399" style={{ fontVariationSettings: '"wdth" 100' }}>{`Based on past trends and current legislative activities, what emerging regulations should we be proactively preparing for, even if they're not yet finalized?`}</p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-1445.86px] whitespace-nowrap" data-node-id="1434:15400" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-251.39%_97.26%_348.44%_1.01%]" data-node-id="1434:15401" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-746px]" data-node-id="1434:15402">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[9px] text-[14px] text-white top-[-718px] w-[676px]" data-node-id="1434:15403" style={{ fontVariationSettings: '"wdth" 100' }}>
                Do any of our competitors seem to be adopting innovative approaches to navigating regulatory uncertainty? If so, what can we learn from them?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-743.86px] whitespace-nowrap" data-node-id="1434:15404" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-129.51%_97.26%_226.56%_1.01%]" data-node-id="1434:15405" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[8px] top-[-2049px]" data-node-id="1434:15406">
              <div className="absolute contents left-[8px] top-[-2049px]" data-node-id="1434:15407">
                <div className="absolute contents left-[8px] top-[-2049px]" data-node-id="1434:15408">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[27px] text-[#00c2a7] text-[12px] top-[-2048px] whitespace-nowrap" data-node-id="1434:15409" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[8px] size-[15px] top-[-2049px]" data-node-id="1434:15410">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1434:15411">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-2020px] tracking-[0.25px] w-[718px]" data-node-id="1434:15416" style={{ fontVariationSettings: '"wdth" 100' }}>
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
            <div className="absolute contents left-[9px] top-[-111px]" data-node-id="1434:15417">
              <div className="absolute contents left-[9px] top-[-111px]" data-node-id="1434:15418">
                <div className="absolute contents left-[9px] top-[-111px]" data-node-id="1434:15419">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-110px] whitespace-nowrap" data-node-id="1434:15420" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-111px]" data-node-id="1434:15421">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1434:15422">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-85px] tracking-[0.25px] w-[718px]" data-node-id="1434:15427" style={{ fontVariationSettings: '"wdth" 100' }}>
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
            <div className="absolute contents left-[9px] top-[-1355px]" data-node-id="1434:15428">
              <div className="absolute contents left-[9px] top-[-1355px]" data-node-id="1434:15429">
                <div className="absolute contents left-[9px] top-[-1355px]" data-node-id="1434:15430">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-1354px] whitespace-nowrap" data-node-id="1434:15431" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-1355px]" data-node-id="1434:15432">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1434:15433">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-1328px] tracking-[0.25px] w-[718px]" data-node-id="1434:15438" style={{ fontVariationSettings: '"wdth" 100' }}>
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
            <div className="absolute contents left-[9px] top-[-654px]" data-node-id="1434:15439">
              <div className="absolute contents left-[9px] top-[-654px]" data-node-id="1434:15440">
                <div className="absolute contents left-[9px] top-[-654px]" data-node-id="1434:15441">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-653px] whitespace-nowrap" data-node-id="1434:15442" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-654px]" data-node-id="1434:15443">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1434:15444">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-628px] w-[718px]" data-node-id="1434:15449" style={{ fontVariationSettings: '"wdth" 100' }}>
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
            <div className="absolute contents left-[745px] top-[-1425px]" data-node-id="1434:15450">
              <div className="absolute contents left-[746px] top-[-1425px]" data-node-id="1434:15451">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-1423px] whitespace-nowrap" data-node-id="1434:15452" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-1425px]" data-node-id="1434:15453" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-1341px]" data-node-id="1434:15455">
                <div className="absolute contents left-[745px] top-[-1281px]" data-node-id="1434:15456">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1279px] whitespace-nowrap" data-node-id="1434:15457" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-1281px]" data-node-id="1434:15458" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <button className="absolute contents cursor-pointer left-[745px] top-[-1311px]" data-node-id="1434:15460">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1309px] whitespace-nowrap" data-node-id="1434:15461" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-1311px]" data-node-id="1434:15462" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </button>
                <div className="absolute contents left-[745px] top-[-1341px]" data-node-id="1434:15464">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-1338px] whitespace-nowrap" data-node-id="1434:15465" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-1341px]" data-node-id="1434:15466" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-716px]" data-node-id="1434:15468">
              <div className="absolute contents left-[746px] top-[-716px]" data-node-id="1434:15469">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-714px] whitespace-nowrap" data-node-id="1434:15470" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-716px]" data-node-id="1434:15471" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-632px]" data-node-id="1434:15473">
                <div className="absolute contents left-[745px] top-[-572px]" data-node-id="1434:15474">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-570px] whitespace-nowrap" data-node-id="1434:15475" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-572px]" data-node-id="1434:15476" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <button className="absolute contents cursor-pointer left-[745px] top-[-602px]" data-node-id="1434:15478">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-600px] whitespace-nowrap" data-node-id="1434:15479" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-602px]" data-node-id="1434:15480" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </button>
                <div className="absolute contents left-[745px] top-[-632px]" data-node-id="1434:15482">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-629px] whitespace-nowrap" data-node-id="1434:15483" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-632px]" data-node-id="1434:15484" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-185px]" data-node-id="1434:15486">
              <div className="absolute contents left-[746px] top-[-185px]" data-node-id="1434:15487">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-183px] whitespace-nowrap" data-node-id="1434:15488" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-185px]" data-node-id="1434:15489" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-101px]" data-node-id="1434:15491">
                <div className="absolute contents left-[745px] top-[-41px]" data-node-id="1434:15492">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-39px] whitespace-nowrap" data-node-id="1434:15493" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-41px]" data-node-id="1434:15494" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <button className="absolute contents cursor-pointer left-[745px] top-[-71px]" data-node-id="1434:15496">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-69px] whitespace-nowrap" data-node-id="1434:15497" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-71px]" data-node-id="1434:15498" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </button>
                <div className="absolute contents left-[745px] top-[-101px]" data-node-id="1434:15500">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-98px] whitespace-nowrap" data-node-id="1434:15501" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-101px]" data-node-id="1434:15502" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {isCollaborators1 && (
          <>
            <p className="[word-break:break-word] absolute font-roboto font-bold leading-[20px] left-[26px] text-[14px] text-white top-[84px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:15252" style={{ fontVariationSettings: '"wdth" 100' }}>
              Action: Cross-Functional Task Force
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-bold leading-[20px] left-[26px] text-[14px] text-white top-[402px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:15253" style={{ fontVariationSettings: '"wdth" 100' }}>
              Action: Security assessment of FlashyAds
            </p>
            <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[152px] tracking-[0.25px] w-[691px]" data-node-id="1434:15254" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Quantum Computing for Grid Optimization: Landscape Analysis Report</p>
              <p className="leading-[20px]">{`This report would summarize key research findings, pilot projects, and industry trends related to quantum computing for grid optimization. It would identify potential vendors, research institutions, and consortia relevant to Acme's exploration.`}</p>
            </div>
            <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[470px] tracking-[0.25px] w-[668px]" data-node-id="1434:15255" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Quantum Grid Optimization Simulation Report</p>
              <p className="leading-[20px]">{`This report would document the findings of a simulation project using existing quantum simulators to model the impact of specific quantum algorithms on a chosen aspect of Acme's grid. It would analyze potential benefits, limitations, and resource requirements.`}</p>
            </div>
            <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[271px] tracking-[0.25px] w-[691px]" data-node-id="1434:15256" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Acme Grid Impact Assessment: Initial Exploration</p>
              <p className="leading-[20px]">{`This assessment would analyze the potential impact of quantum computing on Acme's specific grid infrastructure, energy mix, and operational efficiency. It would identify areas with the highest potential for benefit and outline potential risks and challenges.`}</p>
            </div>
            <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[590px] tracking-[0.25px] w-[668px]" data-node-id="1434:15257" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Proof-of-Concept Project Proposal</p>
              <p className="leading-[20px]">{`This proposal would outline a plan for a pilot project testing a specific quantum application on a non-critical part of Acme's grid. It would define project objectives, methodology, budget, timeline, and potential risks and mitigation strategies.`}</p>
            </div>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[251px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:15258" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[567px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:15259" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[134px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:15260" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[447px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:15261" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
            <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[149px]" data-node-id="1434:15262" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1434:15262;53923:27782" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1434:15262;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Create</p>
                </div>
              </div>
            </div>
          </>
        )}
        {["Collaborators 1", "Variant8"].includes(property1) && (
          <div className={`absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip rounded-[100px] ${isVariant8 ? "left-[27px] top-[296px] w-[94px]" : "cursor-pointer left-[743px] top-[467px]"}`} id={isVariant8 ? "node-1434_15116" : "node-1434_15263"} data-name="Button-dark">
            <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" id={isVariant8 ? "node-1434_15117" : "node-I1434_15263-53923_27782"} data-name="state-layer">
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isVariant8 ? "node-1434_15118" : "node-I1434_15263-53923_27783"} style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">{isVariant8 ? "Remove " : isCollaborators1 ? "Create" : ""}</p>
              </div>
            </div>
          </div>
        )}
        {isCollaborators1 && (
          <>
            <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[271px]" data-node-id="1434:15264" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1434:15264;53923:27782" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1434:15264;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Create</p>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[590px]" data-node-id="1434:15265" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1434:15265;53923:27782" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1434:15265;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Create</p>
                </div>
              </div>
            </div>
            <div className="absolute h-0 left-[22px] top-[117px] w-[811px]" data-node-id="1434:15266">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
              </div>
            </div>
            <div className="absolute h-0 left-[22px] top-[435px] w-[811px]" data-node-id="1434:15267">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
              </div>
            </div>
            <div className="absolute h-0 left-[22px] top-[381px] w-[811px]" data-node-id="1434:15268">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
              </div>
            </div>
            <div className="absolute h-0 left-[22px] top-[697px] w-[811px]" data-node-id="1434:15269">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
              </div>
            </div>
            <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[624px] overflow-clip rounded-[100px] top-[38px]" data-node-id="1434:15270" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1434:15270;53923:27782" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1434:15270;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Add a custom deliverable</p>
                </div>
              </div>
            </div>
          </>
        )}
        {isVariant8 && (
          <>
            <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[26px] rounded-tl-[4px] rounded-tr-[4px] top-[489px] w-[407px]" data-node-id="1434:15119" data-name="Text field-dark">
              <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1434:15119;52798:26685" data-name="text field">
                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1434:15119;52798:26686" data-name="state-layer">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1434:15119;52798:26687" data-name="content">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1434:15119;52798:26688" data-name="label-text">
                      <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15119;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Collaborator
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1434:15119;52798:26690" data-name="trailing-icon">
                    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1434:15119;52798:26690;51525:5137" data-name="container">
                      <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1434:15119;52798:26690;51525:5138" data-name="state-layer">
                        <div className="relative shrink-0 size-[24px]" data-node-id="I1434:15119;52798:26690;51525:5139" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="I1434:15119;52798:26691" data-name="Active indicator">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                </div>
              </div>
            </button>
            <div className="absolute bg-[#141218] h-[261px] left-[469px] rounded-[8px] top-[99px] w-[443px]" data-node-id="1434:15120" />
            <div className="absolute bg-[#141218] h-[399px] left-[469px] rounded-[8px] top-[375px] w-[443px]" data-node-id="1434:15121" />
            <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[26px] rounded-tl-[4px] rounded-tr-[4px] top-[394px] w-[407px]" data-node-id="1434:15122" data-name="Text field-dark">
              <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1434:15122;52798:26731" data-name="text field">
                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1434:15122;52798:26732" data-name="state-layer">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1434:15122;52798:26733" data-name="content">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1434:15122;52798:26734" data-name="label-text">
                      <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15122;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Email
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="I1434:15122;52798:26736" data-name="Active indicator">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                </div>
              </div>
            </button>
            <div className="absolute content-stretch flex flex-col h-[116px] items-start left-[26px] rounded-tl-[4px] rounded-tr-[4px] top-[568px] w-[407px]" data-node-id="1434:15123" data-name="Text field-dark">
              <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1434:15124" data-name="text field">
                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1434:15125" data-name="state-layer">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="1434:15126" data-name="content">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="1434:15127" data-name="label-text">
                      <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] tracking-[0.5px] whitespace-nowrap" data-node-id="1434:15128" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Message
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="1434:15129" data-name="Active indicator">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                </div>
              </div>
            </div>
          </>
        )}
        {isVariant8OrActions && (
          <p className={`[word-break:break-word] absolute font-roboto font-medium leading-[24px] text-[16px] text-white tracking-[0.15px] whitespace-nowrap ${isActions ? "left-[22px] top-[14px]" : "left-[10px] top-[18px]"}`} id={isActions ? "node-1434_15301" : "node-1434_15132"} style={{ fontVariationSettings: '"wdth" 100' }}>
            {isActions ? "Chat summary" : isVariant8 ? "Add collaborators" : ""}
          </p>
        )}
        {isVariant8 && (
          <>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[10px] text-[14px] text-white top-[57px] tracking-[0.25px] w-[702px]" data-node-id="1434:15133" style={{ fontVariationSettings: '"wdth" 100' }}>{`Collaborators will be able to contribute to the chat, and access all the other tabs within this insight. `}</p>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[26px] right-[715px] text-[#cac4d0] text-[16px] top-[calc(50%-185.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1434:15134" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[24px]">sam.forcast@acme.arqui.com.au</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[26px] right-[865px] text-[#cac4d0] text-[16px] top-[calc(50%-150.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1434:15135" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[24px]">Collaborator</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[26px] right-[556px] text-[#cac4d0] text-[14px] top-[calc(50%-88.5px)]" data-node-id="1434:15136" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Sam, thanks for jumping into this chat - would love to get your questions/thoughts on the insight before we meet the broader team.</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[487px] right-[232px] text-[#cac4d0] text-[16px] top-[calc(50%-185.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1434:15137" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[24px]">jamie.blueprint@acme.arqui.com.au</p>
            </div>
            <p className="[word-break:break-word] absolute font-roboto font-medium h-[25px] leading-[16px] left-[27px] text-[12px] text-white top-[467px] tracking-[0.5px] w-[78px]" data-node-id="1434:15138" style={{ fontVariationSettings: '"wdth" 100' }}>
              Invite as
            </p>
            <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[488px] overflow-clip rounded-[100px] top-[710px] w-[112px]" data-node-id="1434:15139" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1434:15140" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1434:15141" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Send invite</p>
                </div>
              </div>
            </div>
            <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[487px] rounded-tl-[4px] rounded-tr-[4px] top-[489px] w-[407px]" data-node-id="1434:15142" data-name="Text field-dark">
              <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1434:15142;52798:26685" data-name="text field">
                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1434:15142;52798:26686" data-name="state-layer">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1434:15142;52798:26687" data-name="content">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1434:15142;52798:26688" data-name="label-text">
                      <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15142;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Collaborator
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1434:15142;52798:26690" data-name="trailing-icon">
                    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1434:15142;52798:26690;51525:5137" data-name="container">
                      <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1434:15142;52798:26690;51525:5138" data-name="state-layer">
                        <div className="relative shrink-0 size-[24px]" data-node-id="I1434:15142;52798:26690;51525:5139" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="I1434:15142;52798:26691" data-name="Active indicator">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                </div>
              </div>
            </button>
            <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[487px] rounded-tl-[4px] rounded-tr-[4px] top-[394px] w-[407px]" data-node-id="1434:15143" data-name="Text field-dark">
              <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1434:15143;52798:26731" data-name="text field">
                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1434:15143;52798:26732" data-name="state-layer">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1434:15143;52798:26733" data-name="content">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1434:15143;52798:26734" data-name="label-text">
                      <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15143;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Email
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="I1434:15143;52798:26736" data-name="Active indicator">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                </div>
              </div>
            </button>
            <div className="absolute content-stretch flex flex-col h-[116px] items-start left-[487px] rounded-tl-[4px] rounded-tr-[4px] top-[568px] w-[407px]" data-node-id="1434:15144" data-name="Text field-dark">
              <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1434:15145" data-name="text field">
                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1434:15146" data-name="state-layer">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="1434:15147" data-name="content">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="1434:15148" data-name="label-text">
                      <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] tracking-[0.5px] whitespace-nowrap" data-node-id="1434:15149" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Message
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="1434:15150" data-name="Active indicator">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-roboto font-medium h-[25px] leading-[16px] left-[488px] text-[12px] text-white top-[467px] tracking-[0.5px] w-[78px]" data-node-id="1434:15153" style={{ fontVariationSettings: '"wdth" 100' }}>
              Invite as
            </p>
            <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[488px] overflow-clip rounded-[100px] top-[296px] w-[94px]" data-node-id="1434:15154" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1434:15155" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1434:15156" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">{`Remove `}</p>
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[487px] right-[404px] text-[#cac4d0] text-[16px] top-[calc(50%-150.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1434:15157" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[24px]">Collaborator</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[487px] right-[95px] text-[#cac4d0] text-[14px] top-[calc(50%-98.5px)]" data-node-id="1434:15158" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Jamie, take a look at the chat for this insight. It looks like we could use additional documents to be uploaded - will make the suggestions more solid. Do you have any docs we can add?</p>
            </div>
          </>
        )}
        {isActions && (
          <>
            <div className="absolute contents left-[24px] top-[46px]" data-node-id="1434:15302">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[43px] text-[#959595] text-[14px] top-[46px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:15303" style={{ fontVariationSettings: '"wdth" 100' }}>
                Note: The chat summary is updated every time you ask a question.
              </p>
              <div className="absolute inset-[7.83%_96.46%_89.94%_2.24%]" data-node-id="1434:15304" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector2} />
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-roboto font-normal h-[943px] leading-[0] left-[26px] text-[14px] text-white top-[91px] tracking-[0.25px] w-[688px]" data-node-id="1434:15305" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">Overview:</p>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">{`Quantum computing holds immense potential to revolutionize grid optimization, potentially reducing transmission losses by 15% within the next 5 years. This breakthrough could significantly enhance Acme's efficiency and competitiveness in the energy market.`}</p>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">​</p>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">Challenges:</p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Uncertainty about real-world benefits: While promising research exists, translating it to tangible grid impact requires further validation. Acme needs proof-of-concept demonstrations before major investments.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Security risks: Integrating quantum systems introduces potential vulnerabilities and requires proactive measures like post-quantum cryptography and Zero-Trust security frameworks.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Building internal expertise: Developing quantum talent within 5 years is ambitious. Collaborations, targeted training, and strategic hiring are crucial for early adoption.</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">​</p>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">Opportunities:</p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">{`Increased efficiency: Optimized energy distribution can reduce costs, improve reliability, and enhance Acme's sustainability profile.`}</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Competitive advantage: Early adopters of quantum solutions can gain a significant edge in the evolving energy landscape.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Partnerships: Collaboration with research institutions, industry consortiums, and quantum computing companies can accelerate expertise and access to cutting-edge solutions.</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">​</p>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">Timeframe:</p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Research and development: Significant progress is expected within the next 5 years, with pilot projects showcasing potential benefits.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Early adoption: Acme can position itself for early adoption through strategic partnerships and internal knowledge building within the next 2-3 years.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Widespread impact: Full integration and industry-wide adoption might take longer, potentially 5-10 years or more, depending on technological advancements and regulatory frameworks.</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">​</p>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">Acme-Specific Considerations:</p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Partner with NREL: Leverage existing collaborations with the National Renewable Energy Laboratory (NREL) to explore joint research projects and access cybersecurity expertise for quantum integration.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Utilize Berkeley training: Send key personnel to the upcoming quantum computing program at UC Berkeley in Fall 2024 to build internal expertise.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Join QED-C and EBA: Participate in industry consortiums like QED-C and EBA to stay informed about trends, standards, and potential partner opportunities.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">{`Pilot project with IBM Quantum: Explore early access programs or pilot projects with IBM Quantum to gain practical experience and evaluate potential benefits for Acme's specific grid infrastructure.`}</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-0 whitespace-pre-wrap">​</p>
              <p className="leading-[20px] whitespace-pre-wrap">By proactively addressing challenges and seizing opportunities, Acme can leverage the disruptive potential of quantum computing to optimize its grid management, gain a competitive edge, and contribute to a more sustainable energy future.</p>
            </div>
          </>
        )}
        {isDeliverables && (
          <>
            <button className="[word-break:break-word] absolute block cursor-pointer font-roboto font-normal leading-[0] left-[26px] text-[#d0bcff] text-[14px] text-left top-[295px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:15293" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Arqui can help with 3 deliverables</p>
            </button>
            <button className="[word-break:break-word] absolute block cursor-pointer font-roboto font-normal leading-[0] left-[26px] text-[#d0bcff] text-[14px] text-left top-[539px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:15294" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Arqui can help with 2 deliverables</p>
            </button>
            <div className="[word-break:break-word] absolute font-roboto font-normal h-[120px] leading-[0] left-[26px] text-[0px] text-white top-[352px] tracking-[0.25px] w-[820px]" data-node-id="1434:15295" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="font-roboto font-bold leading-[20px] mb-0 text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                Launch a proof-of-concept project
              </p>
              <p className="leading-[20px] mb-0 text-[14px]">{`Partner with a reputable quantum computing provider like IBM Quantum or Rigetti Computing to explore the feasibility and potential benefits for Acme's specific grid. This could involve:`}</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[20px] text-[14px]">{`Simulating specific scenarios: Utilize existing quantum simulators to model the impact of quantum algorithms on Acme's grid, focusing on areas like transmission loss reduction or renewable energy integration.`}</span>
                </li>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[20px] text-[14px]">Developing a small-scale pilot: Depending on feasibility and resource availability, consider a pilot project testing a specific quantum application on a non-critical part of the grid to gain practical experience and address integration challenges.</span>
                </li>
                <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[20px] text-[14px]">{`Collaborating with experts: Leverage the expertise of the chosen provider and involve relevant researchers from NREL or universities like Berkeley to ensure the project's scientific rigor and relevance to Acme's needs.`}</span>
                </li>
              </ul>
            </div>
            <div className="absolute contents left-[22px] top-[46px]" data-node-id="1434:15296">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[41px] text-[#959595] text-[14px] top-[46px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:15297" style={{ fontVariationSettings: '"wdth" 100' }}>
                Note: The list of actions is updated every time you ask a question.
              </p>
              <div className="absolute inset-[7.79%_96.64%_89.98%_2.05%]" data-node-id="1434:15298" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector3} />
              </div>
            </div>
          </>
        )}
      </div>
      {["Chat Summary", "Collaborators 1", "Variant8", "Actions", "Deliverables"].includes(property1) && (
        <div className="absolute h-[49px] left-0 top-0 w-[772px]" id={isDeliverables ? "node-1454_15205" : isActions ? "node-1454_15157" : isVariant8 ? "node-1454_15299" : isCollaborators1 ? "node-1454_15252" : "node-1454_15107"} data-name="Content States">
          <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-0 top-0 w-[772px]" id={isDeliverables ? "node-1454_15206" : isActions ? "node-1454_15158" : isVariant8 ? "node-1454_15300" : isCollaborators1 ? "node-1454_15253" : "node-1454_15108"} data-name="Tabs-dark">
            <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" id={isDeliverables ? "node-1454_15207" : isActions ? "node-1454_15159" : isVariant8 ? "node-1454_15301" : isCollaborators1 ? "node-1454_15254" : "node-1454_15109"} data-name="Tab group">
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-1454_15208" : isActions ? "node-1454_15160" : isVariant8 ? "node-1454_15302" : isCollaborators1 ? "node-1454_15255" : "node-1454_15110"} data-name="Tab 1">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1454_15208-54563_40769" : isActions ? "node-I1454_15160-54563_40769" : isVariant8 ? "node-I1454_15302-54563_40769" : isCollaborators1 ? "node-I1454_15255-54563_40769" : "node-I1454_15110-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1454_15208-54563_40770" : isActions ? "node-I1454_15160-54563_40770" : isVariant8 ? "node-I1454_15302-54563_40770" : isCollaborators1 ? "node-I1454_15255-54563_40770" : "node-I1454_15110-54563_40770"} data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isDeliverables ? "node-I1454_15208-54563_40771" : isActions ? "node-I1454_15160-54563_40771" : isVariant8 ? "node-I1454_15302-54563_40771" : isCollaborators1 ? "node-I1454_15255-54563_40771" : "node-I1454_15110-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Insight landscape</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-1454_15209" : isActions ? "node-1454_15161" : isVariant8 ? "node-1454_15303" : isCollaborators1 ? "node-1454_15256" : "node-1454_15111"} data-name="Tab 1.5">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1454_15209-54563_40769" : isActions ? "node-I1454_15161-54563_40769" : isVariant8 ? "node-I1454_15303-54563_40769" : isCollaborators1 ? "node-I1454_15256-54563_40769" : "node-I1454_15111-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1454_15209-54563_40770" : isActions ? "node-I1454_15161-54563_40770" : isVariant8 ? "node-I1454_15303-54563_40770" : isCollaborators1 ? "node-I1454_15256-54563_40770" : "node-I1454_15111-54563_40770"} data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isDeliverables ? "node-I1454_15209-54563_40771" : isActions ? "node-I1454_15161-54563_40771" : isVariant8 ? "node-I1454_15303-54563_40771" : isCollaborators1 ? "node-I1454_15256-54563_40771" : "node-I1454_15111-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Insight analysis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-1454_15210" : isActions ? "node-1454_15162" : isVariant8 ? "node-1454_15304" : isCollaborators1 ? "node-1454_15257" : "node-1454_15112"} data-name="Tab 2">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative" id={isDeliverables ? "node-I1454_15210-54563_40769" : isActions ? "node-I1454_15162-54563_40769" : isVariant8 ? "node-I1454_15304-54563_40769" : isCollaborators1 ? "node-I1454_15257-54563_40769" : "node-I1454_15112-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1454_15210-54563_40770" : isActions ? "node-I1454_15162-54563_40770" : isVariant8 ? "node-I1454_15304-54563_40770" : isCollaborators1 ? "node-I1454_15257-54563_40770" : "node-I1454_15112-54563_40770"} data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isDeliverables ? "node-I1454_15210-54563_40771" : isActions ? "node-I1454_15162-54563_40771" : isVariant8 ? "node-I1454_15304-54563_40771" : isCollaborators1 ? "node-I1454_15257-54563_40771" : "node-I1454_15112-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-1454_15211" : isActions ? "node-1454_15163" : isVariant8 ? "node-1454_15305" : isCollaborators1 ? "node-1454_15258" : "node-1454_15113"} data-name="Tab 3">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1454_15211-54563_40769" : isActions ? "node-I1454_15163-54563_40769" : isVariant8 ? "node-I1454_15305-54563_40769" : isCollaborators1 ? "node-I1454_15258-54563_40769" : "node-I1454_15113-54563_40740"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1454_15211-54563_40770" : isActions ? "node-I1454_15163-54563_40770" : isVariant8 ? "node-I1454_15305-54563_40770" : isCollaborators1 ? "node-I1454_15258-54563_40770" : "node-I1454_15113-54563_40741"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${["Collaborators 1", "Variant8", "Actions", "Deliverables"].includes(property1) ? "text-[#d0bcff]" : "text-[#e6e0e9]"}`} id={isDeliverables ? "node-I1454_15211-54563_40771" : isActions ? "node-I1454_15163-54563_40771" : isVariant8 ? "node-I1454_15305-54563_40771" : isCollaborators1 ? "node-I1454_15258-54563_40771" : "node-I1454_15113-54563_40742"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat history</p>
                    </div>
                  </div>
                  {isChatSummary && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1454:15113;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-1454_15212" : isActions ? "node-1454_15164" : isVariant8 ? "node-1454_15306" : isCollaborators1 ? "node-1454_15259" : "node-1454_15114"} data-name="Tab 4">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1454_15212-54563_40769" : isActions ? "node-I1454_15164-54563_40740" : isVariant8 ? "node-I1454_15306-54563_40769" : isCollaborators1 ? "node-I1454_15259-54563_40769" : "node-I1454_15114-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1454_15212-54563_40770" : isActions ? "node-I1454_15164-54563_40741" : isVariant8 ? "node-I1454_15306-54563_40770" : isCollaborators1 ? "node-I1454_15259-54563_40770" : "node-I1454_15114-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isActions ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1454_15212-54563_40771" : isActions ? "node-I1454_15164-54563_40742" : isVariant8 ? "node-I1454_15306-54563_40771" : isCollaborators1 ? "node-I1454_15259-54563_40771" : "node-I1454_15114-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat summary</p>
                    </div>
                  </div>
                  {isActions && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1454:15164;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-1454_15213" : isActions ? "node-1454_15165" : isVariant8 ? "node-1454_15307" : isCollaborators1 ? "node-1454_15260" : "node-1454_15115"} data-name="Tab 7">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1454_15213-54563_40769" : isActions ? "node-I1454_15165-54563_40769" : isVariant8 ? "node-I1454_15307-54563_40740" : isCollaborators1 ? "node-I1454_15260-54563_40769" : "node-I1454_15115-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1454_15213-54563_40770" : isActions ? "node-I1454_15165-54563_40770" : isVariant8 ? "node-I1454_15307-54563_40741" : isCollaborators1 ? "node-I1454_15260-54563_40770" : "node-I1454_15115-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isVariant8 ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1454_15213-54563_40771" : isActions ? "node-I1454_15165-54563_40771" : isVariant8 ? "node-I1454_15307-54563_40742" : isCollaborators1 ? "node-I1454_15260-54563_40771" : "node-I1454_15115-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Collaborators</p>
                    </div>
                  </div>
                  {isVariant8 && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1454:15307;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-1454_15214" : isActions ? "node-1454_15166" : isVariant8 ? "node-1454_15308" : isCollaborators1 ? "node-1454_15261" : "node-1454_15116"} data-name="Tab 6">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1454_15214-54563_40769" : isActions ? "node-I1454_15166-54563_40769" : isVariant8 ? "node-I1454_15308-54563_40769" : isCollaborators1 ? "node-I1454_15261-54563_40769" : "node-I1454_15116-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative w-[24px]" id={isDeliverables ? "node-I1454_15214-54563_40770" : isActions ? "node-I1454_15166-54563_40770" : isVariant8 ? "node-I1454_15308-54563_40770" : isCollaborators1 ? "node-I1454_15261-54563_40770" : "node-I1454_15116-54563_40770"} data-name="Tab Contents" />
                </div>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-full" id={isDeliverables ? "node-1454_15215" : isActions ? "node-1454_15167" : isVariant8 ? "node-1454_15309" : isCollaborators1 ? "node-1454_15262" : "node-1454_15117"} data-name="Divider">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
            </div>
          </div>
        </div>
      )}
      {["Variant7", "Chat"].includes(property1) && (
        <div className={`absolute ${isChat ? "h-[632px] left-0 overflow-x-clip overflow-y-auto top-[49px] w-[950px]" : '-translate-x-1/2 -translate-y-1/2 [word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] left-[111.5px] text-[20px] text-center text-white top-[54px] tracking-[0.15px] whitespace-nowrap'}`} id={isChat ? "node-1434_15986" : "node-1434_13843"} style={isVariant7 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
          <p className={isChat ? '[word-break:break-word] absolute font-roboto font-normal leading-[28px] left-[22px] text-[22px] text-[color:var(--white,white)] top-[38px] whitespace-nowrap' : "leading-[24px]"} id={isChat ? "node-I1434_15986-1434_13875" : undefined} style={isChat ? { fontVariationSettings: '"wdth" 100' } : undefined}>
            {isVariant7 ? "Detailed deliverable" : "Insights landscape"}
          </p>
          {isChat && (
            <>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[28px] left-[22px] text-[22px] text-[color:var(--white,white)] top-[745px] whitespace-nowrap" data-node-id="I1434:15986;1434:13876" style={{ fontVariationSettings: '"wdth" 100' }}>
                Insights risk/opportunity balance
              </p>
              <div className="absolute h-0 left-[22px] top-[680px] w-[916px]" data-node-id="I1434:15986;1434:13877">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine222} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[350px] w-[904px]" data-node-id="I1434:15986;1434:13878">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine227} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[486px] w-[904px]" data-node-id="I1434:15986;1434:13879">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine227} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[232px] w-[904px]" data-node-id="I1434:15986;1434:13880">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine227} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[96px] w-[904px]" data-node-id="I1434:15986;1434:13881">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine227} />
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[35px] text-[16px] text-white top-[603px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13882" style={{ fontVariationSettings: '"wdth" 100' }}>
                Low impact
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[497px] text-[16px] text-white top-[603px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13883" style={{ fontVariationSettings: '"wdth" 100' }}>
                Low likelihood
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[158px] text-[16px] text-white top-[603px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13884" style={{ fontVariationSettings: '"wdth" 100' }}>
                Medium impact
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[638px] text-[16px] text-white top-[603px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13885" style={{ fontVariationSettings: '"wdth" 100' }}>
                Medium likelihood
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[304px] text-[16px] text-white top-[603px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13886" style={{ fontVariationSettings: '"wdth" 100' }}>
                High impact
              </p>
              <div className="absolute contents left-[267px] top-[844px]" data-node-id="I1434:15986;1434:13887">
                <div className="absolute bg-[#202125] border border-[#797979] border-solid h-[42px] left-[267px] rounded-[34px] top-[844px] w-[382px]" data-node-id="I1434:15986;1434:13888" />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[458.5px] text-[#d0bcff] text-[16px] text-center top-[853px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13889" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Cloud Cost Optimization Potential
                </p>
              </div>
              <div className="absolute contents left-[267px] top-[905px]" data-node-id="I1434:15986;1434:13890">
                <div className="absolute bg-[#202125] border border-[#797979] border-solid h-[42px] left-[267px] rounded-[34px] top-[905px] w-[382px]" data-node-id="I1434:15986;1434:13891" />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[458.5px] text-[#d0bcff] text-[16px] text-center top-[915px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13892" style={{ fontVariationSettings: '"wdth" 100' }}>
                  AI-Driven Security Automation
                </p>
              </div>
              <div className="absolute contents left-[267px] top-[966px]" data-node-id="I1434:15986;1434:13893">
                <div className="absolute bg-[#202125] border border-[#797979] border-solid h-[42px] left-[267px] rounded-[34px] top-[966px] w-[382px]" data-node-id="I1434:15986;1434:13894" />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[459px] text-[#d0bcff] text-[16px] text-center top-[975px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13895" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Remote Workforce Productivity Paradox
                </p>
              </div>
              <div className="absolute contents left-[267px] top-[1027px]" data-node-id="I1434:15986;1434:13896">
                <div className="absolute bg-[#202125] border border-[#797979] border-solid h-[42px] left-[267px] rounded-[34px] top-[1027px] w-[382px]" data-node-id="I1434:15986;1434:13897" />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[458.5px] text-[#d0bcff] text-[16px] text-center top-[1037px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13898" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Biometric Authentication Adoption Surge
                </p>
              </div>
              <div className="absolute contents left-[267px] top-[1088px]" data-node-id="I1434:15986;1434:13899">
                <div className="absolute bg-[#202125] border border-[#797979] border-solid h-[42px] left-[267px] rounded-[34px] top-[1088px] w-[382px]" data-node-id="I1434:15986;1434:13900" />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[459px] text-[#d0bcff] text-[16px] text-center top-[1097px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13901" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Quantum Computing Threat Landscape
                </p>
              </div>
              <div className="absolute contents left-[267px] top-[1149px]" data-node-id="I1434:15986;1434:13902">
                <div className="absolute bg-[#202125] border border-[#797979] border-solid h-[42px] left-[267px] rounded-[34px] top-[1149px] w-[382px]" data-node-id="I1434:15986;1434:13903" />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[458.5px] text-[#d0bcff] text-[16px] text-center top-[1158px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13904" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Cybersecurity Skills Gap Widens
                </p>
              </div>
              <div className="absolute contents left-[267px] top-[1210px]" data-node-id="I1434:15986;1434:13905">
                <div className="absolute bg-[#202125] border border-[#797979] border-solid h-[42px] left-[267px] rounded-[34px] top-[1210px] w-[382px]" data-node-id="I1434:15986;1434:13906" />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[459px] text-[#d0bcff] text-[16px] text-center top-[1219px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13907" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Regulatory Compliance Transformation
                </p>
              </div>
              <div className="absolute contents left-[267px] top-[1271px]" data-node-id="I1434:15986;1434:13908">
                <div className="absolute bg-[#202125] border border-[#797979] border-solid h-[42px] left-[267px] rounded-[34px] top-[1271px] w-[382px]" data-node-id="I1434:15986;1434:13909" />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[458.5px] text-[#d0bcff] text-[16px] text-center top-[1280px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13910" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Data Privacy Concerns Intensify
                </p>
              </div>
              <div className="absolute contents left-[267px] top-[1332px]" data-node-id="I1434:15986;1434:13911">
                <div className="absolute bg-[#202125] border border-[#797979] border-solid h-[42px] left-[267px] rounded-[34px] top-[1332px] w-[382px]" data-node-id="I1434:15986;1434:13912" />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[459px] text-[#d0bcff] text-[16px] text-center top-[1341px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13913" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Hyperautomation and Job Displacement
                </p>
              </div>
              <div className="absolute contents left-[267px] top-[1393px]" data-node-id="I1434:15986;1434:13914">
                <div className="absolute bg-[#202125] border border-[#797979] border-solid h-[42px] left-[267px] rounded-[34px] top-[1393px] w-[382px]" data-node-id="I1434:15986;1434:13915" />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[458.5px] text-[#d0bcff] text-[16px] text-center top-[1402px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13916" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Ethical Implications of AI in Business
                </p>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[804px] text-[16px] text-white top-[603px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13917" style={{ fontVariationSettings: '"wdth" 100' }}>
                High likelihood
              </p>
              <div className="absolute left-[35px] size-[27px] top-[568px]" data-node-id="I1434:15986;1434:13918">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse53} />
              </div>
              <div className="absolute left-[804px] size-[44px] top-[546px]" data-node-id="I1434:15986;1434:13919">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse63} />
              </div>
              <div className="absolute left-[158px] size-[44px] top-[551px]" data-node-id="I1434:15986;1434:13920">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse54} />
              </div>
              <div className="absolute left-[638px] size-[44px] top-[551px]" data-node-id="I1434:15986;1434:13921">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse61} />
              </div>
              <div className="absolute left-[497px] size-[44px] top-[551px]" data-node-id="I1434:15986;1434:13922">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse62} />
              </div>
              <div className="absolute contents left-[22px] top-[269px]" data-node-id="I1434:15986;1434:13923">
                <div className="[word-break:break-word] absolute font-roboto font-normal h-[39px] leading-[0] left-[22px] text-[16px] text-white top-[271px] tracking-[0.5px] w-[70px]" data-node-id="I1434:15986;1434:13924" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[24px] mb-0">MEDIUM</p>
                  <p className="leading-[24px]">TERM</p>
                </div>
                <button className="absolute block cursor-pointer left-[181px] size-[44px] top-[269px]" data-node-id="I1434:15986;1434:13925">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse59} />
                </button>
                <button className="absolute block cursor-pointer left-[715px] size-[31px] top-[275px]" data-node-id="I1434:15986;1434:13926">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse70} />
                </button>
                <button className="absolute block cursor-pointer left-[798px] size-[44px] top-[269px]" data-node-id="I1434:15986;1434:13927">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse68} />
                </button>
                <button className="absolute block cursor-pointer left-[462px] size-[44px] top-[269px]" data-node-id="I1434:15986;1434:13928">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse65} />
                </button>
              </div>
              <div className="absolute contents left-[22px] top-[133px]" data-node-id="I1434:15986;1434:13929">
                <div className="[word-break:break-word] absolute font-roboto font-normal h-[39px] leading-[0] left-[22px] text-[16px] text-white top-[145px] tracking-[0.5px] w-[70px]" data-node-id="I1434:15986;1434:13930" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[24px] mb-0">LONG</p>
                  <p className="leading-[24px]">TERM</p>
                </div>
                <button className="absolute block cursor-pointer left-[181px] size-[44px] top-[142px]" data-node-id="I1434:15986;1434:13931">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse59} />
                </button>
                <button className="absolute block cursor-pointer left-[700px] size-[62px] top-[133px]" data-node-id="I1434:15986;1434:13932">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse67} />
                </button>
                <button className="absolute block cursor-pointer left-[469px] size-[28px] top-[150px]" data-node-id="I1434:15986;1434:13933">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse66} />
                </button>
              </div>
              <div className="absolute contents left-[22px] top-[131px]" data-node-id="I1434:15986;1434:13934">
                <div className="[word-break:break-word] absolute font-roboto font-normal h-[39px] leading-[0] left-[22px] text-[16px] text-white top-[399px] tracking-[0.5px] w-[70px]" data-node-id="I1434:15986;1434:13935" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[24px] mb-0">SHORT</p>
                  <p className="leading-[24px]">TERM</p>
                </div>
                <button className="absolute block cursor-pointer left-[189px] size-[27px] top-[405px]" data-node-id="I1434:15986;1434:13936">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse56} />
                </button>
                <button className="absolute block cursor-pointer left-[276px] size-[62px] top-[388px]" data-node-id="I1434:15986;1434:13937">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse58} />
                </button>
                <button className="absolute block cursor-pointer left-[715px] size-[31px] top-[403px]" data-node-id="I1434:15986;1434:13938">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse70} />
                </button>
                <button className="absolute block cursor-pointer left-[453px] size-[62px] top-[387px]" data-node-id="I1434:15986;1434:13939">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse64} />
                </button>
                <button className="absolute block cursor-pointer left-[534px] size-[62px] top-[131px]" data-node-id="I1434:15986;1434:13940">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse64} />
                </button>
              </div>
              <div className="absolute left-[304px] size-[62px] top-[533px]" data-node-id="I1434:15986;1434:13941">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse55} />
              </div>
              <div className="absolute flex h-[99px] items-center justify-center left-[443px] top-[528px] w-0" data-node-id="I1434:15986;1434:13942">
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[99px]">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={A.imgLine231} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="-translate-x-full [word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[250px] text-[16px] text-right text-white top-[820px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13943" style={{ fontVariationSettings: '"wdth" 100' }}>
                Level of risk
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[666px] text-[16px] text-white top-[820px] tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15986;1434:13944" style={{ fontVariationSettings: '"wdth" 100' }}>
                Level of opportunity
              </p>
              <div className="absolute h-[27px] left-[93px] top-[852px] w-[159px]" data-node-id="I1434:15986;1434:13945">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup945} />
              </div>
              <div className="absolute h-[27px] left-[666px] top-[852px] w-[159px]" data-node-id="I1434:15986;1434:13951">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup955} />
              </div>
              <div className="absolute h-[27px] left-[93px] top-[1097px] w-[159px]" data-node-id="I1434:15986;1434:13957">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup949} />
              </div>
              <div className="absolute h-[27px] left-[666px] top-[1097px] w-[159px]" data-node-id="I1434:15986;1434:13963">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup959} />
              </div>
              <div className="absolute h-[27px] left-[93px] top-[974px] w-[159px]" data-node-id="I1434:15986;1434:13969">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup947} />
              </div>
              <div className="absolute h-[27px] left-[666px] top-[974px] w-[159px]" data-node-id="I1434:15986;1434:13975">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup957} />
              </div>
              <div className="absolute h-[27px] left-[93px] top-[1219px] w-[159px]" data-node-id="I1434:15986;1434:13981">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup947} />
              </div>
              <div className="absolute h-[27px] left-[666px] top-[1219px] w-[159px]" data-node-id="I1434:15986;1434:13987">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup955} />
              </div>
              <div className="absolute h-[27px] left-[93px] top-[1341px] w-[159px]" data-node-id="I1434:15986;1434:13993">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup953} />
              </div>
              <div className="absolute h-[27px] left-[666px] top-[1341px] w-[159px]" data-node-id="I1434:15986;1434:13999">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup963} />
              </div>
              <div className="absolute h-[27px] left-[93px] top-[913px] w-[159px]" data-node-id="I1434:15986;1434:14005">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup945} />
              </div>
              <div className="absolute h-[27px] left-[666px] top-[913px] w-[159px]" data-node-id="I1434:15986;1434:14011">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup956} />
              </div>
              <div className="absolute h-[27px] left-[93px] top-[1158px] w-[159px]" data-node-id="I1434:15986;1434:14017">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup953} />
              </div>
              <div className="absolute h-[27px] left-[666px] top-[1158px] w-[159px]" data-node-id="I1434:15986;1434:14023">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup959} />
              </div>
              <div className="absolute h-[27px] left-[93px] top-[1035px] w-[159px]" data-node-id="I1434:15986;1434:14029">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup949} />
              </div>
              <div className="absolute h-[27px] left-[666px] top-[1035px] w-[159px]" data-node-id="I1434:15986;1434:14035">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup957} />
              </div>
              <div className="absolute h-[27px] left-[93px] top-[1280px] w-[159px]" data-node-id="I1434:15986;1434:14041">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup949} />
              </div>
              <div className="absolute h-[27px] left-[666px] top-[1280px] w-[159px]" data-node-id="I1434:15986;1434:14047">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup957} />
              </div>
              <div className="absolute h-[27px] left-[93px] top-[1402px] w-[159px]" data-node-id="I1434:15986;1434:14053">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup947} />
              </div>
              <div className="absolute h-[27px] left-[666px] top-[1402px] w-[159px]" data-node-id="I1434:15986;1434:14059">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup955} />
              </div>
            </>
          )}
        </div>
      )}
      {isChatHistory && (
        <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-0 rounded-tl-[4px] rounded-tr-[4px] top-[625px] w-[702px]" data-node-id="1434:15546" data-name="Text field-dark">
          <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1434:15546;52798:26685" data-name="text field">
            <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1434:15546;52798:26686" data-name="state-layer">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1434:15546;52798:26687" data-name="content">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1434:15546;52798:26688" data-name="label-text">
                  <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1434:15546;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Ask Arqui
                  </p>
                </div>
              </div>
              <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1434:15546;52798:26690" data-name="trailing-icon">
                <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1434:15546;52798:26690;51525:5137" data-name="container">
                  <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1434:15546;52798:26690;51525:5138" data-name="state-layer">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I1434:15546;52798:26690;51525:5139" data-name="Icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIconsSendFill0Wght400Grad0Opsz241} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-node-id="I1434:15546;52798:26691" data-name="Active indicator">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator} />
            </div>
          </div>
        </button>
      )}
      {["Chat History", "Chat"].includes(property1) && (
        <div className="absolute h-[49px] left-0 top-0 w-[772px]" id={isChat ? "node-1454_14777" : "node-1454_15059"} data-name="Content States">
          <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-0 top-0 w-[772px]" id={isChat ? "node-1454_14778" : "node-1454_15060"} data-name="Tabs-dark">
            <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" id={isChat ? "node-1454_14779" : "node-1454_15061"} data-name="Tab group">
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isChat ? "node-1454_14780" : "node-1454_15062"} data-name="Tab 1">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isChat ? "node-I1454_14780-54563_40740" : "node-I1454_15062-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isChat ? "node-I1454_14780-54563_40741" : "node-I1454_15062-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChat ? "text-[#ccc2dc]" : "text-[#d0bcff]"}`} id={isChat ? "node-I1454_14780-54563_40742" : "node-I1454_15062-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Insight landscape</p>
                    </div>
                  </div>
                  {isChat && <div className="absolute bg-[#ccc2dc] bottom-0 h-[2px] left-0 right-0" data-node-id="I1454:14780;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isChat ? "node-1454_14781" : "node-1454_15063"} data-name="Tab 1.5">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isChat ? "node-I1454_14781-54563_40769" : "node-I1454_15063-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isChat ? "node-I1454_14781-54563_40770" : "node-I1454_15063-54563_40770"} data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isChat ? "node-I1454_14781-54563_40771" : "node-I1454_15063-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Insight analysis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isChat ? "node-1454_14782" : "node-1454_15064"} data-name="Tab 2">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative" id={isChat ? "node-I1454_14782-54563_40769" : "node-I1454_15064-54563_40740"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isChat ? "node-I1454_14782-54563_40770" : "node-I1454_15064-54563_40741"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChat ? "text-[#d0bcff]" : "text-[#e6e0e9]"}`} id={isChat ? "node-I1454_14782-54563_40771" : "node-I1454_15064-54563_40742"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat</p>
                    </div>
                  </div>
                  {isChatHistory && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1454:15064;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isChat ? "node-1454_14783" : "node-1454_15065"} data-name="Tab 3">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isChat ? "node-I1454_14783-54563_40769" : "node-I1454_15065-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isChat ? "node-I1454_14783-54563_40770" : "node-I1454_15065-54563_40770"} data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isChat ? "node-I1454_14783-54563_40771" : "node-I1454_15065-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat history</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isChat ? "node-1454_14784" : "node-1454_15066"} data-name="Tab 4">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isChat ? "node-I1454_14784-54563_40769" : "node-I1454_15066-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isChat ? "node-I1454_14784-54563_40770" : "node-I1454_15066-54563_40770"} data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isChat ? "node-I1454_14784-54563_40771" : "node-I1454_15066-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat summary</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isChat ? "node-1454_14785" : "node-1454_15067"} data-name="Tab 7">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isChat ? "node-I1454_14785-54563_40769" : "node-I1454_15067-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isChat ? "node-I1454_14785-54563_40770" : "node-I1454_15067-54563_40770"} data-name="Tab Contents">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isChat ? "node-I1454_14785-54563_40771" : "node-I1454_15067-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Collaborators</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isChat ? "node-1454_14786" : "node-1454_15068"} data-name="Tab 6">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isChat ? "node-I1454_14786-54563_40769" : "node-I1454_15068-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative w-[24px]" id={isChat ? "node-I1454_14786-54563_40770" : "node-I1454_15068-54563_40770"} data-name="Tab Contents" />
                </div>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-full" id={isChat ? "node-1454_14787" : "node-1454_15069"} data-name="Divider">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
            </div>
          </div>
        </div>
      )}
      {isVariant7 && (
        <>
          <div className="absolute flex h-[38px] items-center justify-center left-[780px] top-[33px] w-0" data-node-id="1434:13844">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[38px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine217} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#3c3d42] border-solid h-[611px] left-0 overflow-auto top-[81px] w-[950px]" data-node-id="1434:13845">
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[24px] left-[21px] text-[16px] text-white top-[20px] tracking-[0.5px] whitespace-nowrap" data-node-id="1434:13846" style={{ fontVariationSettings: '"wdth" 100' }}>
              Quantum Computing for Grid Optimization: Landscape Analysis Report
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[21px] text-[14px] text-white top-[47px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:13847" style={{ fontVariationSettings: '"wdth" 100' }}>
              21-Mar-2024
            </p>
            <div className="absolute bg-[#323338] h-[167px] left-[21px] rounded-[4px] top-[171px] w-[904px]" data-node-id="1434:13848" />
            <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col items-center justify-center left-[739px] overflow-clip rounded-[100px] top-[185px]" data-node-id="1434:13849" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1434:13850" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1434:13851" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Upload documents</p>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-roboto font-bold leading-[20px] left-[35px] text-[14px] text-white top-[185px] tracking-[0.25px] whitespace-nowrap" data-node-id="1434:13852" style={{ fontVariationSettings: '"wdth" 100' }}>
              Uploaded documents
            </p>
            <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[302px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1434:13857" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1434:13857;53923:27782" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1434:13857;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Export</p>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[174px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1434:13858" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1434:13858;53923:27782" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1434:13858;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Bookmark</p>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[21px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1434:13859" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1434:13860" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1434:13861" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Comments (3)</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}