import { A } from '../assets/acs1304_8513';


type ContentStatesProps = {
  className?: string;
  property1?: "Chat" | "Chat History" | "Chat Summary" | "Actions" | "Deliverables" | "Collaborators 1" | "Variant7";
};

export default function ContentStates({ className, property1 = "Chat" }: ContentStatesProps) {
  const isActions = property1 === "Actions";
  const isActionsOrDeliverables = ["Actions", "Deliverables"].includes(property1);
  const isChat = property1 === "Chat";
  const isChatHistory = property1 === "Chat History";
  const isChatHistoryOrActions = ["Chat History", "Actions"].includes(property1);
  const isChatHistoryOrActionsOrDeliverables = ["Chat History", "Actions", "Deliverables"].includes(property1);
  const isChatHistoryOrChatOrChatSummaryOrCollaborators1OrActionsOr = ["Chat History", "Chat", "Chat Summary", "Collaborators 1", "Actions", "Deliverables"].includes(property1);
  const isChatOrChatSummaryOrCollaborators1OrActionsOrDeliverables = ["Chat", "Chat Summary", "Collaborators 1", "Actions", "Deliverables"].includes(property1);
  const isChatSummary = property1 === "Chat Summary";
  const isCollaborators1 = property1 === "Collaborators 1";
  const isCollaborators1OrDeliverables = ["Collaborators 1", "Deliverables"].includes(property1);
  const isDeliverables = property1 === "Deliverables";
  const isVariant7 = property1 === "Variant7";
  return (
    <div className={className || `relative ${isVariant7 ? "h-[704px] w-[950px]" : "h-[681px] w-[1000px]"}`} id={isVariant7 ? "node-1304_8662" : isDeliverables ? "node-1304_8632" : isActions ? "node-1304_8622" : isCollaborators1 ? "node-1304_8606" : isChatSummary ? "node-1304_8596" : isChat ? "node-1304_8522" : "node-1304_8514"}>
      <div className={`absolute contents left-0 ${isVariant7 ? "top-[23px]" : "top-0"}`} id={isVariant7 ? "node-1304_8663" : isDeliverables ? "node-1304_8633" : isActions ? "node-1304_8623" : isCollaborators1 ? "node-1304_8607" : isChatSummary ? "node-1304_8597" : isChat ? "node-1304_8523" : "node-1304_8515"}>
        {isChatHistoryOrChatOrChatSummaryOrCollaborators1OrActionsOr && (
          <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-[8px] top-0 w-[772px]" id={isDeliverables ? "node-1304_8635" : isActions ? "node-1304_8625" : isCollaborators1 ? "node-1304_8609" : isChatSummary ? "node-1304_8599" : isChat ? "node-1304_8525" : "node-1304_8517"} data-name="Tabs-dark">
            <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" id={isDeliverables ? "node-I1304_8635-54563_40455" : isActions ? "node-I1304_8625-54563_40455" : isCollaborators1 ? "node-I1304_8609-54563_40455" : isChatSummary ? "node-I1304_8599-54563_40455" : isChat ? "node-I1304_8525-54563_40455" : "node-I1304_8517-54563_40455"} data-name="Tab group">
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1304_8635-54563_40456" : isActions ? "node-I1304_8625-54563_40456" : isCollaborators1 ? "node-I1304_8609-54563_40456" : isChatSummary ? "node-I1304_8599-54563_40456" : isChat ? "node-I1304_8525-54563_40456" : "node-I1304_8517-54563_40456"} data-name="Tab 1">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8635-54563_40456-54563_40769" : isActions ? "node-I1304_8625-54563_40456-54563_40769" : isCollaborators1 ? "node-I1304_8609-54563_40456-54563_40769" : isChatSummary ? "node-I1304_8599-54563_40456-54563_40769" : isChat ? "node-I1304_8525-54563_40456-54563_40740" : "node-I1304_8517-54563_40456-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8635-54563_40456-54563_40770" : isActions ? "node-I1304_8625-54563_40456-54563_40770" : isCollaborators1 ? "node-I1304_8609-54563_40456-54563_40770" : isChatSummary ? "node-I1304_8599-54563_40456-54563_40770" : isChat ? "node-I1304_8525-54563_40456-54563_40741" : "node-I1304_8517-54563_40456-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChat ? "text-[#ccc2dc]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1304_8635-54563_40456-54563_40771" : isActions ? "node-I1304_8625-54563_40456-54563_40771" : isCollaborators1 ? "node-I1304_8609-54563_40456-54563_40771" : isChatSummary ? "node-I1304_8599-54563_40456-54563_40771" : isChat ? "node-I1304_8525-54563_40456-54563_40742" : "node-I1304_8517-54563_40456-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">{`Chat `}</p>
                    </div>
                  </div>
                  {isChat && <div className="absolute bg-[#ccc2dc] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8525;54563:40456;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1304_8635-54563_40457" : isActions ? "node-I1304_8625-54563_40457" : isCollaborators1 ? "node-I1304_8609-54563_40457" : isChatSummary ? "node-I1304_8599-54563_40457" : isChat ? "node-I1304_8525-54563_40457" : "node-I1304_8517-54563_40457"} data-name="Tab 2">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8635-54563_40457-54563_40769" : isActions ? "node-I1304_8625-54563_40457-54563_40769" : isCollaborators1 ? "node-I1304_8609-54563_40457-54563_40769" : isChatSummary ? "node-I1304_8599-54563_40457-54563_40769" : isChat ? "node-I1304_8525-54563_40457-54563_40769" : "node-I1304_8517-54563_40457-54563_40740"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8635-54563_40457-54563_40770" : isActions ? "node-I1304_8625-54563_40457-54563_40770" : isCollaborators1 ? "node-I1304_8609-54563_40457-54563_40770" : isChatSummary ? "node-I1304_8599-54563_40457-54563_40770" : isChat ? "node-I1304_8525-54563_40457-54563_40770" : "node-I1304_8517-54563_40457-54563_40741"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChatOrChatSummaryOrCollaborators1OrActionsOrDeliverables ? "text-[#d0bcff]" : "text-[#e6e0e9]"}`} id={isDeliverables ? "node-I1304_8635-54563_40457-54563_40771" : isActions ? "node-I1304_8625-54563_40457-54563_40771" : isCollaborators1 ? "node-I1304_8609-54563_40457-54563_40771" : isChatSummary ? "node-I1304_8599-54563_40457-54563_40771" : isChat ? "node-I1304_8525-54563_40457-54563_40771" : "node-I1304_8517-54563_40457-54563_40742"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat history</p>
                    </div>
                  </div>
                  {isChatHistory && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8517;54563:40457;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1304_8635-54563_40458" : isActions ? "node-I1304_8625-54563_40458" : isCollaborators1 ? "node-I1304_8609-54563_40458" : isChatSummary ? "node-I1304_8599-54563_40458" : isChat ? "node-I1304_8525-54563_40458" : "node-I1304_8517-54563_40458"} data-name="Tab 3">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8635-54563_40458-54563_40769" : isActions ? "node-I1304_8625-54563_40458-54563_40769" : isCollaborators1 ? "node-I1304_8609-54563_40458-54563_40769" : isChatSummary ? "node-I1304_8599-54563_40458-54563_40740" : isChat ? "node-I1304_8525-54563_40458-54563_40769" : "node-I1304_8517-54563_40458-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8635-54563_40458-54563_40770" : isActions ? "node-I1304_8625-54563_40458-54563_40770" : isCollaborators1 ? "node-I1304_8609-54563_40458-54563_40770" : isChatSummary ? "node-I1304_8599-54563_40458-54563_40741" : isChat ? "node-I1304_8525-54563_40458-54563_40770" : "node-I1304_8517-54563_40458-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChatSummary ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1304_8635-54563_40458-54563_40771" : isActions ? "node-I1304_8625-54563_40458-54563_40771" : isCollaborators1 ? "node-I1304_8609-54563_40458-54563_40771" : isChatSummary ? "node-I1304_8599-54563_40458-54563_40742" : isChat ? "node-I1304_8525-54563_40458-54563_40771" : "node-I1304_8517-54563_40458-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat summary</p>
                    </div>
                  </div>
                  {isChatSummary && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8599;54563:40458;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1304_8635-54563_40459" : isActions ? "node-I1304_8625-54563_40459" : isCollaborators1 ? "node-I1304_8609-54563_40459" : isChatSummary ? "node-I1304_8599-54563_40459" : isChat ? "node-I1304_8525-54563_40459" : "node-I1304_8517-54563_40459"} data-name="Tab 4">
                {isChatOrChatSummaryOrCollaborators1OrActionsOrDeliverables && (
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8635-54563_40459-54563_40769" : isActions ? "node-I1304_8625-54563_40459-54563_40740" : isCollaborators1 ? "node-I1304_8609-54563_40459-54563_40769" : isChatSummary ? "node-I1304_8599-54563_40459-54563_40769" : "node-I1304_8525-54563_40459-54563_40769"} data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8635-54563_40459-54563_40770" : isActions ? "node-I1304_8625-54563_40459-54563_40741" : isCollaborators1 ? "node-I1304_8609-54563_40459-54563_40770" : isChatSummary ? "node-I1304_8599-54563_40459-54563_40770" : "node-I1304_8525-54563_40459-54563_40770"} data-name="Tab Contents">
                      <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isActions ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1304_8635-54563_40459-54563_40771" : isActions ? "node-I1304_8625-54563_40459-54563_40742" : isCollaborators1 ? "node-I1304_8609-54563_40459-54563_40771" : isChatSummary ? "node-I1304_8599-54563_40459-54563_40771" : "node-I1304_8525-54563_40459-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Suggested actions</p>
                      </div>
                    </div>
                    {isActions && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8625;54563:40459;54563:40744" data-name="Indicator" />}
                  </div>
                )}
                {isChatHistory && (
                  <button className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1304:8517;54563:40459;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1304:8517;54563:40459;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8517;54563:40459;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Suggested actions</p>
                      </div>
                    </div>
                  </button>
                )}
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1304_8635-54563_40460" : isActions ? "node-I1304_8625-54563_40460" : isCollaborators1 ? "node-I1304_8609-54563_40460" : isChatSummary ? "node-I1304_8599-54563_40460" : isChat ? "node-I1304_8525-54563_40460" : "node-I1304_8517-54563_40460"} data-name="Tab 5">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8635-54563_40460-54563_40740" : isActions ? "node-I1304_8625-54563_40460-54563_40769" : isCollaborators1 ? "node-I1304_8609-54563_40460-54563_40769" : isChatSummary ? "node-I1304_8599-54563_40460-54563_40769" : isChat ? "node-I1304_8525-54563_40460-54563_40769" : "node-I1304_8517-54563_40460-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8635-54563_40460-54563_40741" : isActions ? "node-I1304_8625-54563_40460-54563_40770" : isCollaborators1 ? "node-I1304_8609-54563_40460-54563_40770" : isChatSummary ? "node-I1304_8599-54563_40460-54563_40770" : isChat ? "node-I1304_8525-54563_40460-54563_40770" : "node-I1304_8517-54563_40460-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isDeliverables ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1304_8635-54563_40460-54563_40742" : isActions ? "node-I1304_8625-54563_40460-54563_40771" : isCollaborators1 ? "node-I1304_8609-54563_40460-54563_40771" : isChatSummary ? "node-I1304_8599-54563_40460-54563_40771" : isChat ? "node-I1304_8525-54563_40460-54563_40771" : "node-I1304_8517-54563_40460-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Deliverables</p>
                    </div>
                  </div>
                  {isDeliverables && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8635;54563:40460;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1304_8635-54847_25133" : isActions ? "node-I1304_8625-54847_25133" : isCollaborators1 ? "node-I1304_8609-54847_25133" : isChatSummary ? "node-I1304_8599-54847_25133" : isChat ? "node-I1304_8525-54847_25133" : "node-I1304_8517-54847_25133"} data-name="Tab 6">
                {["Chat History", "Chat", "Chat Summary", "Collaborators 1"].includes(property1) && (
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isCollaborators1 ? "node-I1304_8609-54847_25133-54563_40740" : isChatSummary ? "node-I1304_8599-54847_25133-54563_40769" : isChat ? "node-I1304_8525-54847_25133-54563_40769" : "node-I1304_8517-54847_25133-54563_40769"} data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isCollaborators1 ? "node-I1304_8609-54847_25133-54563_40741" : isChatSummary ? "node-I1304_8599-54847_25133-54563_40770" : isChat ? "node-I1304_8525-54847_25133-54563_40770" : "node-I1304_8517-54847_25133-54563_40770"} data-name="Tab Contents">
                      <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isCollaborators1 ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isCollaborators1 ? "node-I1304_8609-54847_25133-54563_40742" : isChatSummary ? "node-I1304_8599-54847_25133-54563_40771" : isChat ? "node-I1304_8525-54847_25133-54563_40771" : "node-I1304_8517-54847_25133-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">{isCollaborators1 ? "Collaborators (2)" : ["Chat History", "Chat Summary"].includes(property1) ? "Collaborators" : "Collaborators"}</p>
                      </div>
                    </div>
                    {isCollaborators1 && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8609;54847:25133;54563:40744" data-name="Indicator" />}
                  </div>
                )}
                {isActionsOrDeliverables && (
                  <button className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8635-54847_25133-54563_40769" : "node-I1304_8625-54847_25133-54563_40769"} data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8635-54847_25133-54563_40770" : "node-I1304_8625-54847_25133-54563_40770"} data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isDeliverables ? "node-I1304_8635-54847_25133-54563_40771" : "node-I1304_8625-54847_25133-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Collaborators</p>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
            <div className="h-px relative shrink-0 w-full" id={isDeliverables ? "node-I1304_8635-54563_40461" : isActions ? "node-I1304_8625-54563_40461" : isCollaborators1 ? "node-I1304_8609-54563_40461" : isChatSummary ? "node-I1304_8599-54563_40461" : isChat ? "node-I1304_8525-54563_40461" : "node-I1304_8517-54563_40461"} data-name="Divider">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
            </div>
          </div>
        )}
        <div className={`absolute left-0 ${isVariant7 ? "bg-[#3c3d42] h-[58px] rounded-tl-[12px] rounded-tr-[12px] top-[23px] w-[950px]" : "h-0 top-[49px] w-[1000px]"}`} id={isVariant7 ? "node-1304_8665" : isDeliverables ? "node-1304_8634" : isActions ? "node-1304_8624" : isCollaborators1 ? "node-1304_8608" : isChatSummary ? "node-1304_8598" : isChat ? "node-1304_8524" : "node-1304_8516"}>
          {isChatHistoryOrChatOrChatSummaryOrCollaborators1OrActionsOr && (
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={isChatSummary ? A.imgLine199 : A.imgLine198} />
            </div>
          )}
        </div>
        {isVariant7 && (
          <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[817px] overflow-clip rounded-[100px] top-[32px] w-[107.667px]" data-node-id="1304:8666" data-name="Button-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1304:8666;53923:27766" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I1304:8666;53923:27767" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon1} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8666;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Close</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {["Chat History", "Chat Summary", "Collaborators 1", "Actions", "Deliverables", "Variant7"].includes(property1) && (
        <div className={`absolute ${isVariant7 ? '-translate-x-1/2 -translate-y-1/2 [word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] left-[111.5px] text-[20px] text-center text-white top-[54px] tracking-[0.15px] whitespace-nowrap' : isDeliverables ? "h-[632px] left-0 overflow-x-clip overflow-y-auto top-[49px] w-[1072px]" : isActions ? "h-[629px] left-0 overflow-clip top-[49px] w-[1072px]" : isCollaborators1 ? "h-[631px] left-[7px] overflow-x-clip overflow-y-auto top-[50px] w-[985px]" : isChatSummary ? "h-[626px] left-0 overflow-x-clip overflow-y-auto top-[49px] w-[1072px]" : "[word-break:break-word] h-[628px] left-0 overflow-clip top-[49px] w-[1072px]"}`} id={isVariant7 ? "node-1304_8667" : isDeliverables ? "node-1425_12361" : isActions ? "node-1425_12352" : isCollaborators1 ? "node-1425_12395" : isChatSummary ? "node-1425_12343" : "node-1304_8518"} style={isVariant7 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
          {["Chat History", "Actions", "Deliverables", "Variant7"].includes(property1) && (
            <p className={`leading-[24px] ${isVariant7 ? "" : isActionsOrDeliverables ? '[word-break:break-word] absolute font-roboto font-medium left-[22px] text-[16px] text-white top-[14px] tracking-[0.15px] whitespace-nowrap' : 'absolute font-roboto font-medium left-[22px] text-[16px] text-white top-[21px] tracking-[0.15px] whitespace-nowrap'}`} id={isDeliverables ? "node-1425_12362" : isActions ? "node-1425_12353" : isChatHistory ? "node-1304_8519" : undefined} style={isChatHistoryOrActionsOrDeliverables ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isVariant7 ? "Detailed deliverable" : isDeliverables ? "Deliverables" : isActions ? "Actions (2)" : isChatHistory ? "Chat history (3 questions)" : ""}
            </p>
          )}
          {["Chat History", "Collaborators 1", "Actions", "Deliverables"].includes(property1) && (
            <div className={`absolute ${isDeliverables ? "contents left-[22px] top-[46px]" : isActions ? '[word-break:break-word] font-roboto font-normal h-[120px] leading-[0] left-[26px] text-[0px] text-white top-[84px] tracking-[0.25px] w-[820px]' : isCollaborators1 ? "bg-[#141218] h-[261px] left-[10px] rounded-[8px] top-[99px] w-[443px]" : 'font-roboto font-normal h-[130px] leading-[0] left-[107px] text-[14px] text-white top-[62px] tracking-[0.25px] w-[649px] whitespace-pre-wrap'}`} id={isDeliverables ? "node-1425_12363" : isActions ? "node-1425_12354" : isCollaborators1 ? "node-1425_12396" : "node-1425_12341"} style={isChatHistoryOrActions ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isChatHistoryOrActionsOrDeliverables && (
                <p className={`leading-[20px] ${isDeliverables ? '[word-break:break-word] absolute font-roboto font-normal left-[41px] text-[#959595] text-[14px] top-[46px] tracking-[0.25px] whitespace-nowrap' : isActions ? 'font-roboto font-bold mb-0 text-[14px]' : "mb-0"}`} id={isDeliverables ? "node-1425_12364" : undefined} style={isActionsOrDeliverables ? { fontVariationSettings: '"wdth" 100' } : undefined}>
                  {isDeliverables ? "Note: The list of suggested deliverables is updated every time you ask a question." : isActions ? "Initiate a cross-functional task force:" : isChatHistory ? "Does MIT research translate to real-world benefits? Need proof-of-concept for grid impact before major investment." : ""}
                </p>
              )}
              {isChatHistoryOrActions && <p className={`leading-[20px] mb-0 ${isActions ? "text-[14px]" : ""}`}>{isActions ? "Establish a dedicated team comprising representatives from R&D, IT, security, and strategy departments. This task force can:" : isChatHistory ? "​" : ""}</p>}
              {isChatHistory && (
                <>
                  <p className="leading-[20px] mb-0">Quantum for efficiency, but what about security risks? Can we integrate securely without jeopardizing current infrastructure?</p>
                  <p className="leading-[20px] mb-0">​</p>
                  <p className="leading-[20px]">The 5-year window is tight. How can we build internal expertise and partnerships to be ready for quantum adoption on time?</p>
                </>
              )}
              {isActions && (
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
              {isDeliverables && (
                <div className="absolute inset-[7.75%_96.64%_90.03%_2.05%]" data-node-id="1425:12365" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector3} />
                </div>
              )}
            </div>
          )}
          {["Chat History", "Collaborators 1"].includes(property1) && (
            <div className={`absolute ${isCollaborators1 ? "bg-[#141218] h-[399px] left-[10px] rounded-[8px] top-[375px] w-[443px]" : 'font-roboto font-normal leading-[0] left-[22px] text-[#d0bcff] text-[14px] top-[62px] tracking-[0.25px] whitespace-nowrap'}`} id={isCollaborators1 ? "node-1425_12397" : "node-1425_12342"} style={isChatHistory ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isChatHistory && (
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
          {isActionsOrDeliverables && (
            <>
              <p className={`[word-break:break-word] absolute leading-[20px] left-[26px] text-[14px] tracking-[0.25px] whitespace-nowrap ${isDeliverables ? 'font-roboto font-bold text-white top-[84px]' : 'font-roboto font-normal text-[#d0bcff] top-[295px]'}`} id={isDeliverables ? "node-1425_12366" : "node-1425_12355"} style={{ fontVariationSettings: '"wdth" 100' }}>
                {isDeliverables ? "Action: Cross-Functional Task Force" : isActions ? "Arqui can help with 3 deliverables" : ""}
              </p>
              <p className={`[word-break:break-word] absolute leading-[20px] left-[26px] text-[14px] tracking-[0.25px] whitespace-nowrap ${isDeliverables ? 'font-roboto font-bold text-white top-[402px]' : 'font-roboto font-normal text-[#d0bcff] top-[539px]'}`} id={isDeliverables ? "node-1425_12367" : "node-1425_12356"} style={{ fontVariationSettings: '"wdth" 100' }}>
                {isDeliverables ? "Action: Security assessment of FlashyAds" : isActions ? "Arqui can help with 2 deliverables" : ""}
              </p>
              <div className={`[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-white tracking-[0.25px] ${isDeliverables ? "text-[14px] top-[152px] w-[691px]" : "h-[120px] text-[0px] top-[352px] w-[820px]"}`} id={isDeliverables ? "node-1425_12368" : "node-1425_12357"} style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className={`leading-[20px] mb-0 ${isDeliverables ? "" : 'font-roboto font-bold text-[14px]'}`} style={isActions ? { fontVariationSettings: '"wdth" 100' } : undefined}>
                  {isDeliverables ? "Quantum Computing for Grid Optimization: Landscape Analysis Report" : isActions ? "Launch a proof-of-concept project" : ""}
                </p>
                <p className={`leading-[20px] ${isDeliverables ? "" : "mb-0 text-[14px]"}`}>{isDeliverables ? "This report would summarize key research findings, pilot projects, and industry trends related to quantum computing for grid optimization. It would identify potential vendors, research institutions, and consortia relevant to Acme's exploration." : isActions ? "Partner with a reputable quantum computing provider like IBM Quantum or Rigetti Computing to explore the feasibility and potential benefits for Acme's specific grid. This could involve:" : ""}</p>
                {isActions && (
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
                )}
              </div>
            </>
          )}
          {["Collaborators 1", "Actions", "Deliverables"].includes(property1) && (
            <div className={`absolute ${isDeliverables ? '[word-break:break-word] font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[470px] tracking-[0.25px] w-[668px]' : isActions ? "contents left-[22px] top-[46px]" : "bg-[#202125] h-[134px] left-[62px] top-[779px] w-[95px]"}`} id={isDeliverables ? "node-1425_12369" : isActions ? "node-1425_12358" : "node-1425_12398"} style={isDeliverables ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isActionsOrDeliverables && (
                <p className={`leading-[20px] ${isDeliverables ? "mb-0" : '[word-break:break-word] absolute font-roboto font-normal left-[41px] text-[#959595] text-[14px] top-[46px] tracking-[0.25px] whitespace-nowrap'}`} id={isActions ? "node-1425_12359" : undefined} style={isActions ? { fontVariationSettings: '"wdth" 100' } : undefined}>
                  {isDeliverables ? "Quantum Grid Optimization Simulation Report" : isActions ? "Note: The list of actions is updated every time you ask a question." : ""}
                </p>
              )}
              {isActions && (
                <div className="absolute inset-[7.79%_96.64%_89.98%_2.05%]" data-node-id="1425:12360" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector2} />
                </div>
              )}
              {isDeliverables && <p className="leading-[20px]">{`This report would document the findings of a simulation project using existing quantum simulators to model the impact of specific quantum algorithms on a chosen aspect of Acme's grid. It would analyze potential benefits, limitations, and resource requirements.`}</p>}
            </div>
          )}
          {["Chat Summary", "Collaborators 1"].includes(property1) && (
            <div className={`absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip rounded-[100px] ${isCollaborators1 ? "left-[27px] top-[710px] w-[112px]" : "cursor-pointer left-[543px] top-[15px]"}`} id={isCollaborators1 ? "node-1425_12399" : "node-1425_12344"} data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" id={isCollaborators1 ? "node-1425_12400" : "node-I1425_12344-53923_27782"} data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isCollaborators1 ? "node-1425_12401" : "node-I1425_12344-53923_27783"} style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">{isCollaborators1 ? "Send invite" : isChatSummary ? "Export summary" : ""}</p>
                </div>
              </div>
            </div>
          )}
          {isChatSummary && (
            <>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[22px] text-[16px] text-white top-[14px] tracking-[0.15px] whitespace-nowrap" data-node-id="1425:12345" style={{ fontVariationSettings: '"wdth" 100' }}>
                Chat summary
              </p>
              <div className="absolute contents left-[24px] top-[46px]" data-node-id="1425:12346">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[43px] text-[#959595] text-[14px] top-[46px] tracking-[0.25px] whitespace-nowrap" data-node-id="1425:12347" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Note: The chat summary is updated every time you ask a question.
                </p>
                <div className="absolute inset-[7.83%_96.46%_89.94%_2.24%]" data-node-id="1425:12348" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
                </div>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal h-[943px] leading-[0] left-[26px] text-[14px] text-white top-[91px] tracking-[0.25px] w-[688px]" data-node-id="1425:12349" style={{ fontVariationSettings: '"wdth" 100' }}>
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
          {isCollaborators1 && (
            <>
              <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[27px] overflow-clip rounded-[100px] top-[296px] w-[94px]" data-node-id="1425:12402" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1425:12403" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1425:12404" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">{`Remove `}</p>
                  </div>
                </div>
              </div>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[26px] rounded-tl-[4px] rounded-tr-[4px] top-[489px] w-[407px]" data-node-id="1425:12405" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1425:12405;52798:26685" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1425:12405;52798:26686" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1425:12405;52798:26687" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1425:12405;52798:26688" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1425:12405;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Collaborator
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1425:12405;52798:26690" data-name="trailing-icon">
                      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1425:12405;52798:26690;51525:5137" data-name="container">
                        <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1425:12405;52798:26690;51525:5138" data-name="state-layer">
                          <div className="relative shrink-0 size-[24px]" data-node-id="I1425:12405;52798:26690;51525:5139" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1425:12405;52798:26691" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
            </>
          )}
          {isCollaborators1OrDeliverables && (
            <>
              <div className={`absolute ${isDeliverables ? '[word-break:break-word] font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[271px] tracking-[0.25px] w-[691px]' : "bg-[#141218] h-[261px] left-[469px] rounded-[8px] top-[99px] w-[443px]"}`} id={isDeliverables ? "node-1425_12370" : "node-1425_12406"} style={isDeliverables ? { fontVariationSettings: '"wdth" 100' } : undefined}>
                {isDeliverables && (
                  <>
                    <p className="leading-[20px] mb-0">Acme Grid Impact Assessment: Initial Exploration</p>
                    <p className="leading-[20px]">{`This assessment would analyze the potential impact of quantum computing on Acme's specific grid infrastructure, energy mix, and operational efficiency. It would identify areas with the highest potential for benefit and outline potential risks and challenges.`}</p>
                  </>
                )}
              </div>
              <div className={`absolute ${isDeliverables ? '[word-break:break-word] font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[590px] tracking-[0.25px] w-[668px]' : "bg-[#141218] h-[399px] left-[469px] rounded-[8px] top-[375px] w-[443px]"}`} id={isDeliverables ? "node-1425_12371" : "node-1425_12407"} style={isDeliverables ? { fontVariationSettings: '"wdth" 100' } : undefined}>
                {isDeliverables && (
                  <>
                    <p className="leading-[20px] mb-0">Proof-of-Concept Project Proposal</p>
                    <p className="leading-[20px]">{`This proposal would outline a plan for a pilot project testing a specific quantum application on a non-critical part of Acme's grid. It would define project objectives, methodology, budget, timeline, and potential risks and mitigation strategies.`}</p>
                  </>
                )}
              </div>
            </>
          )}
          {isCollaborators1 && (
            <>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[26px] rounded-tl-[4px] rounded-tr-[4px] top-[394px] w-[407px]" data-node-id="1425:12408" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1425:12408;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1425:12408;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1425:12408;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1425:12408;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1425:12408;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1425:12408;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <div className="absolute content-stretch flex flex-col h-[116px] items-start left-[26px] rounded-tl-[4px] rounded-tr-[4px] top-[568px] w-[407px]" data-node-id="1425:12409" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1425:12410" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1425:12411" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="1425:12412" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="1425:12413" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] tracking-[0.5px] whitespace-nowrap" data-node-id="1425:12414" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Message
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="1425:12415" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[10px] text-[16px] text-white top-[18px] tracking-[0.15px] whitespace-nowrap" data-node-id="1425:12418" style={{ fontVariationSettings: '"wdth" 100' }}>
                Add collaborators
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[10px] text-[14px] text-white top-[57px] tracking-[0.25px] w-[702px]" data-node-id="1425:12419" style={{ fontVariationSettings: '"wdth" 100' }}>{`Collaborators will be able to contribute to the chat, and access all the other tabs within this insight. `}</p>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[26px] right-[715px] text-[#cac4d0] text-[16px] top-[calc(50%-185.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1425:12420" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[24px]">sam.forcast@acme.arqui.com.au</p>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[26px] right-[865px] text-[#cac4d0] text-[16px] top-[calc(50%-150.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1425:12421" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[24px]">Collaborator</p>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[26px] right-[556px] text-[#cac4d0] text-[14px] top-[calc(50%-88.5px)]" data-node-id="1425:12422" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Sam, I remember you shared something on this earlier - take a look at the chat about quantum computing, and what else we should consider before deciding on what to do with this.</p>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[487px] right-[232px] text-[#cac4d0] text-[16px] top-[calc(50%-185.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1425:12423" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[24px]">jamie.blueprint@acme.arqui.com.au</p>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-medium h-[25px] leading-[16px] left-[27px] text-[12px] text-white top-[467px] tracking-[0.5px] w-[78px]" data-node-id="1425:12424" style={{ fontVariationSettings: '"wdth" 100' }}>
                Invite as
              </p>
              <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[488px] overflow-clip rounded-[100px] top-[710px] w-[112px]" data-node-id="1425:12425" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1425:12426" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1425:12427" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Send invite</p>
                  </div>
                </div>
              </div>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[487px] rounded-tl-[4px] rounded-tr-[4px] top-[489px] w-[407px]" data-node-id="1425:12428" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1425:12428;52798:26685" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1425:12428;52798:26686" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1425:12428;52798:26687" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1425:12428;52798:26688" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1425:12428;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Collaborator
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1425:12428;52798:26690" data-name="trailing-icon">
                      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1425:12428;52798:26690;51525:5137" data-name="container">
                        <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1425:12428;52798:26690;51525:5138" data-name="state-layer">
                          <div className="relative shrink-0 size-[24px]" data-node-id="I1425:12428;52798:26690;51525:5139" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1425:12428;52798:26691" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[487px] rounded-tl-[4px] rounded-tr-[4px] top-[394px] w-[407px]" data-node-id="1425:12429" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1425:12429;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1425:12429;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1425:12429;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1425:12429;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1425:12429;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1425:12429;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <div className="absolute content-stretch flex flex-col h-[116px] items-start left-[487px] rounded-tl-[4px] rounded-tr-[4px] top-[568px] w-[407px]" data-node-id="1425:12430" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1425:12431" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1425:12432" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="1425:12433" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="1425:12434" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] tracking-[0.5px] whitespace-nowrap" data-node-id="1425:12435" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Message
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="1425:12436" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </div>
            </>
          )}
          {isCollaborators1OrDeliverables && (
            <p className={`[word-break:break-word] absolute text-[12px] ${isDeliverables ? 'font-roboto font-normal leading-[20px] left-[26px] text-[#989898] top-[251px] tracking-[0.25px] whitespace-nowrap' : 'font-roboto font-medium h-[25px] leading-[16px] left-[488px] text-white top-[467px] tracking-[0.5px] w-[78px]'}`} id={isDeliverables ? "node-1425_12372" : "node-1425_12439"} style={{ fontVariationSettings: '"wdth" 100' }}>
              {isDeliverables ? "DELIVERABLE " : isCollaborators1 ? "Invite as" : ""}
            </p>
          )}
          {isCollaborators1 && (
            <>
              <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[488px] overflow-clip rounded-[100px] top-[296px] w-[94px]" data-node-id="1425:12440" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1425:12441" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1425:12442" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">{`Remove `}</p>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[487px] right-[404px] text-[#cac4d0] text-[16px] top-[calc(50%-150.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1425:12443" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[24px]">Collaborator</p>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[487px] right-[95px] text-[#cac4d0] text-[14px] top-[calc(50%-90.5px)]" data-node-id="1425:12444" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Hi Jamie, looping you into this since it could potentially overlap with your conversations about innovation and technology policy. Feel free to add any info you gather to the chat!</p>
              </div>
            </>
          )}
          {isDeliverables && (
            <>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[567px] tracking-[0.25px] whitespace-nowrap" data-node-id="1425:12373" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[134px] tracking-[0.25px] whitespace-nowrap" data-node-id="1425:12374" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[447px] tracking-[0.25px] whitespace-nowrap" data-node-id="1425:12375" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[149px]" data-node-id="1425:12376" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1425:12376;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1425:12376;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[467px]" data-node-id="1425:12377" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1425:12377;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1425:12377;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[271px]" data-node-id="1425:12378" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1425:12378;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1425:12378;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[590px]" data-node-id="1425:12379" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1425:12379;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1425:12379;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[117px] w-[811px]" data-node-id="1425:12380">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[435px] w-[811px]" data-node-id="1425:12381">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[381px] w-[811px]" data-node-id="1425:12382">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[697px] w-[811px]" data-node-id="1425:12383">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[624px] overflow-clip rounded-[100px] top-[38px]" data-node-id="1425:12384" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1425:12384;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1425:12384;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Add a custom deliverable</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {isChat && (
        <>
          <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-0 rounded-tl-[4px] rounded-tr-[4px] top-[625px] w-[702px]" data-node-id="1304:8526" data-name="Text field-dark">
            <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1304:8526;52798:26685" data-name="text field">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1304:8526;52798:26686" data-name="state-layer">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1304:8526;52798:26687" data-name="content">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1304:8526;52798:26688" data-name="label-text">
                    <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1304:8526;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Ask Arqui
                    </p>
                  </div>
                </div>
                <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1304:8526;52798:26690" data-name="trailing-icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1304:8526;52798:26690;51525:5137" data-name="container">
                    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1304:8526;52798:26690;51525:5138" data-name="state-layer">
                      <div className="relative shrink-0 size-[24px]" data-node-id="I1304:8526;52798:26690;51525:5139" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIconsSendFill0Wght400Grad0Opsz241} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="I1304:8526;52798:26691" data-name="Active indicator">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator} />
              </div>
            </div>
          </button>
          <div className="absolute h-[576px] left-[8px] overflow-x-clip overflow-y-auto top-[49px] w-[985px]" data-node-id="1348:7701">
            <div className="absolute bg-[#2f3034] h-[98px] left-0 rounded-[12px] top-[-2175px] w-[950px]" data-node-id="1348:7702" />
            <div className="absolute contents left-[745px] top-[-2130px]" data-node-id="1348:7703">
              <div className="absolute contents left-[746px] top-[-2130px]" data-node-id="1348:7704">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-2128px] whitespace-nowrap" data-node-id="1348:7705" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-2130px]" data-node-id="1348:7706" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-2046px]" data-node-id="1348:7708">
                <div className="absolute contents left-[745px] top-[-1986px]" data-node-id="1348:7709">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1984px] whitespace-nowrap" data-node-id="1348:7710" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-1986px]" data-node-id="1348:7711" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <button className="absolute contents cursor-pointer left-[745px] top-[-2016px]" data-node-id="1348:7713">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-2014px] whitespace-nowrap" data-node-id="1348:7714" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-2016px]" data-node-id="1348:7715" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </button>
                <div className="absolute contents left-[745px] top-[-2046px]" data-node-id="1348:7717">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-2043px] whitespace-nowrap" data-node-id="1348:7718" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-2046px]" data-node-id="1348:7719" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#2f3034] h-[104px] left-0 rounded-[12px] top-[-229px] w-[950px]" data-node-id="1348:7721" />
            <div className="absolute bg-[#2f3034] h-[95px] left-0 rounded-[12px] top-[-1463px] w-[950px]" data-node-id="1348:7722" />
            <div className="absolute bg-[#2f3034] h-[96px] left-0 rounded-[12px] top-[-764px] w-[950px]" data-node-id="1348:7723" />
            <div className="absolute contents left-[9px] top-[-2159px]" data-node-id="1348:7724">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-2131px] tracking-[0.25px] w-[693px]" data-node-id="1348:7725" style={{ fontVariationSettings: '"wdth" 100' }}>
                Which specific regulations in our key markets pose the most immediate risk or require the most significant operational changes?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-2156.86px] whitespace-nowrap" data-node-id="1348:7726" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-374.83%_97.26%_471.88%_1.01%]" data-node-id="1348:7727" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-212px]" data-node-id="1348:7728">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-184px] tracking-[0.25px] w-[686px]" data-node-id="1348:7729" style={{ fontVariationSettings: '"wdth" 100' }}>
                an you help me assess the potential financial impact of different compliance scenarios, considering both costs and potential market opportunities?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-209.86px] whitespace-nowrap" data-node-id="1348:7730" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-36.81%_97.26%_133.85%_1.01%]" data-node-id="1348:7731" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-1448px]" data-node-id="1348:7732">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-1420px] tracking-[0.25px] w-[688px]" data-node-id="1348:7733" style={{ fontVariationSettings: '"wdth" 100' }}>{`Based on past trends and current legislative activities, what emerging regulations should we be proactively preparing for, even if they're not yet finalized?`}</p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-1445.86px] whitespace-nowrap" data-node-id="1348:7734" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-251.39%_97.26%_348.44%_1.01%]" data-node-id="1348:7735" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-746px]" data-node-id="1348:7736">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[9px] text-[14px] text-white top-[-718px] w-[676px]" data-node-id="1348:7737" style={{ fontVariationSettings: '"wdth" 100' }}>
                Do any of our competitors seem to be adopting innovative approaches to navigating regulatory uncertainty? If so, what can we learn from them?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-743.86px] whitespace-nowrap" data-node-id="1348:7738" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-129.51%_97.26%_226.56%_1.01%]" data-node-id="1348:7739" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[8px] top-[-2049px]" data-node-id="1348:7740">
              <div className="absolute contents left-[8px] top-[-2049px]" data-node-id="1348:7741">
                <div className="absolute contents left-[8px] top-[-2049px]" data-node-id="1348:7742">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[27px] text-[#00c2a7] text-[12px] top-[-2048px] whitespace-nowrap" data-node-id="1348:7743" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[8px] size-[15px] top-[-2049px]" data-node-id="1348:7744">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1348:7745">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-2020px] tracking-[0.25px] w-[718px]" data-node-id="1348:7750" style={{ fontVariationSettings: '"wdth" 100' }}>
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
            <div className="absolute contents left-[9px] top-[-111px]" data-node-id="1348:7751">
              <div className="absolute contents left-[9px] top-[-111px]" data-node-id="1348:7752">
                <div className="absolute contents left-[9px] top-[-111px]" data-node-id="1348:7753">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-110px] whitespace-nowrap" data-node-id="1348:7754" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-111px]" data-node-id="1348:7755">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1348:7756">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-85px] tracking-[0.25px] w-[718px]" data-node-id="1348:7761" style={{ fontVariationSettings: '"wdth" 100' }}>
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
            <div className="absolute contents left-[9px] top-[-1355px]" data-node-id="1348:7762">
              <div className="absolute contents left-[9px] top-[-1355px]" data-node-id="1348:7763">
                <div className="absolute contents left-[9px] top-[-1355px]" data-node-id="1348:7764">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-1354px] whitespace-nowrap" data-node-id="1348:7765" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-1355px]" data-node-id="1348:7766">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1348:7767">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-1328px] tracking-[0.25px] w-[718px]" data-node-id="1348:7772" style={{ fontVariationSettings: '"wdth" 100' }}>
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
            <div className="absolute contents left-[9px] top-[-654px]" data-node-id="1348:7773">
              <div className="absolute contents left-[9px] top-[-654px]" data-node-id="1348:7774">
                <div className="absolute contents left-[9px] top-[-654px]" data-node-id="1348:7775">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-653px] whitespace-nowrap" data-node-id="1348:7776" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-654px]" data-node-id="1348:7777">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1348:7778">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-628px] w-[718px]" data-node-id="1348:7783" style={{ fontVariationSettings: '"wdth" 100' }}>
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
            <div className="absolute contents left-[745px] top-[-1425px]" data-node-id="1348:7784">
              <div className="absolute contents left-[746px] top-[-1425px]" data-node-id="1348:7785">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-1423px] whitespace-nowrap" data-node-id="1348:7786" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-1425px]" data-node-id="1348:7787" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-1341px]" data-node-id="1348:7789">
                <div className="absolute contents left-[745px] top-[-1281px]" data-node-id="1348:7790">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1279px] whitespace-nowrap" data-node-id="1348:7791" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-1281px]" data-node-id="1348:7792" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <button className="absolute contents cursor-pointer left-[745px] top-[-1311px]" data-node-id="1348:7794">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1309px] whitespace-nowrap" data-node-id="1348:7795" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-1311px]" data-node-id="1348:7796" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </button>
                <div className="absolute contents left-[745px] top-[-1341px]" data-node-id="1348:7798">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-1338px] whitespace-nowrap" data-node-id="1348:7799" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-1341px]" data-node-id="1348:7800" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-716px]" data-node-id="1348:7802">
              <div className="absolute contents left-[746px] top-[-716px]" data-node-id="1348:7803">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-714px] whitespace-nowrap" data-node-id="1348:7804" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-716px]" data-node-id="1348:7805" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-632px]" data-node-id="1348:7807">
                <div className="absolute contents left-[745px] top-[-572px]" data-node-id="1348:7808">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-570px] whitespace-nowrap" data-node-id="1348:7809" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-572px]" data-node-id="1348:7810" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <button className="absolute contents cursor-pointer left-[745px] top-[-602px]" data-node-id="1348:7812">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-600px] whitespace-nowrap" data-node-id="1348:7813" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-602px]" data-node-id="1348:7814" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </button>
                <div className="absolute contents left-[745px] top-[-632px]" data-node-id="1348:7816">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-629px] whitespace-nowrap" data-node-id="1348:7817" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-632px]" data-node-id="1348:7818" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-185px]" data-node-id="1348:7820">
              <div className="absolute contents left-[746px] top-[-185px]" data-node-id="1348:7821">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-183px] whitespace-nowrap" data-node-id="1348:7822" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-185px]" data-node-id="1348:7823" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-101px]" data-node-id="1348:7825">
                <div className="absolute contents left-[745px] top-[-41px]" data-node-id="1348:7826">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-39px] whitespace-nowrap" data-node-id="1348:7827" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-41px]" data-node-id="1348:7828" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <button className="absolute contents cursor-pointer left-[745px] top-[-71px]" data-node-id="1348:7830">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-69px] whitespace-nowrap" data-node-id="1348:7831" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-71px]" data-node-id="1348:7832" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </button>
                <div className="absolute contents left-[745px] top-[-101px]" data-node-id="1348:7834">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-98px] whitespace-nowrap" data-node-id="1348:7835" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-101px]" data-node-id="1348:7836" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {isVariant7 && (
        <>
          <div className="absolute flex h-[38px] items-center justify-center left-[780px] top-[33px] w-0" data-node-id="1304:8668">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[38px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine217} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#3c3d42] border-solid h-[611px] left-0 overflow-auto top-[81px] w-[950px]" data-node-id="1304:8669">
            <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[21px] text-[16px] text-[color:var(--white,white)] top-[20px] tracking-[0.15px] whitespace-nowrap" data-node-id="1304:8670" style={{ fontVariationSettings: '"wdth" 100' }}>
              Phishing simulation effectiveness report
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[21px] text-[14px] text-white top-[47px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8671" style={{ fontVariationSettings: '"wdth" 100' }}>
              21-Mar-2024
            </p>
            <div className="absolute bg-[#323338] h-[167px] left-[21px] rounded-[4px] top-[171px] w-[904px]" data-node-id="1304:8672" />
            <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col items-center justify-center left-[739px] overflow-clip rounded-[100px] top-[185px]" data-node-id="1304:8673" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1304:8674" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1304:8675" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Upload documents</p>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-roboto font-bold leading-[20px] left-[35px] text-[14px] text-white top-[185px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8676" style={{ fontVariationSettings: '"wdth" 100' }}>
              Uploaded documents
            </p>
            <div className="absolute contents left-[331px] top-[24px]" data-node-id="1304:8677">
              <div className="absolute bg-[#141218] border border-[#696969] border-solid h-[20px] left-[332px] rounded-[12px] top-[25px] w-[94px]" data-node-id="1304:8678" />
              <div className="absolute left-[338px] size-[12px] top-[29px]" data-node-id="1304:8679">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse13} />
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[385px] text-[11px] text-center text-white top-[29px] tracking-[0.1px] whitespace-nowrap" data-node-id="1304:8680" style={{ fontVariationSettings: '"wdth" 100' }}>
                COMPLETE
              </p>
            </div>
            <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[302px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1304:8681" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1304:8681;53923:27782" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8681;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Export</p>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[174px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1304:8682" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1304:8682;53923:27782" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8682;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Bookmark</p>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[21px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1350:8027" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1350:8028" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1350:8029" style={{ fontVariationSettings: '"wdth" 100' }}>
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