import { A } from '../assets/acs1304_8182';


type ContentStatesProps = {
  className?: string;
  property1?: "Chat" | "Chat History" | "Chat Summary" | "Actions" | "Deliverables" | "Collaborators 1" | "Variant7";
};

export default function ContentStates({ className, property1 = "Chat" }: ContentStatesProps) {
  const isActions = property1 === "Actions";
  const isChat = property1 === "Chat";
  const isChatHistory = property1 === "Chat History";
  const isChatHistoryOrActions = ["Chat History", "Actions"].includes(property1);
  const isChatHistoryOrChatOrChatSummaryOrCollaborators1OrActionsOr = ["Chat History", "Chat", "Chat Summary", "Collaborators 1", "Actions", "Deliverables"].includes(property1);
  const isChatOrChatSummaryOrCollaborators1OrActionsOrDeliverables = ["Chat", "Chat Summary", "Collaborators 1", "Actions", "Deliverables"].includes(property1);
  const isChatSummary = property1 === "Chat Summary";
  const isCollaborators1 = property1 === "Collaborators 1";
  const isCollaborators1OrDeliverables = ["Collaborators 1", "Deliverables"].includes(property1);
  const isDeliverables = property1 === "Deliverables";
  const isVariant7 = property1 === "Variant7";
  return (
    <div className={className || `relative ${isVariant7 ? "h-[601px] w-[980px]" : isChatSummary ? "h-[681px] w-[1002px]" : isChat ? "h-[681px] w-[1001px]" : "h-[681px] w-[1000px]"}`} id={isVariant7 ? "node-1304_8385" : isDeliverables ? "node-1304_8339" : isActions ? "node-1304_8325" : isCollaborators1 ? "node-1304_8309" : isChatSummary ? "node-1304_8299" : isChat ? "node-1304_8191" : "node-1304_8183"}>
      <div className="absolute contents left-0 top-0" id={isVariant7 ? "node-1304_8386" : isDeliverables ? "node-1304_8340" : isActions ? "node-1304_8326" : isCollaborators1 ? "node-1304_8310" : isChatSummary ? "node-1304_8300" : isChat ? "node-1304_8192" : "node-1304_8184"}>
        {isChatHistoryOrChatOrChatSummaryOrCollaborators1OrActionsOr && (
          <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-[25px] top-0 w-[772px]" id={isDeliverables ? "node-1304_8342" : isActions ? "node-1304_8328" : isCollaborators1 ? "node-1304_8312" : isChatSummary ? "node-1304_8302" : isChat ? "node-1304_8194" : "node-1304_8186"} data-name="Tabs-dark">
            <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" id={isDeliverables ? "node-I1304_8342-54563_40455" : isActions ? "node-I1304_8328-54563_40455" : isCollaborators1 ? "node-I1304_8312-54563_40455" : isChatSummary ? "node-I1304_8302-54563_40455" : isChat ? "node-I1304_8194-54563_40455" : "node-I1304_8186-54563_40455"} data-name="Tab group">
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-I1304_8342-54563_40456" : isActions ? "node-I1304_8328-54563_40456" : isCollaborators1 ? "node-I1304_8312-54563_40456" : isChatSummary ? "node-I1304_8302-54563_40456" : isChat ? "node-I1304_8194-54563_40456" : "node-I1304_8186-54563_40456"} data-name="Tab 1">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8342-54563_40456-54563_40769" : isActions ? "node-I1304_8328-54563_40456-54563_40769" : isCollaborators1 ? "node-I1304_8312-54563_40456-54563_40769" : isChatSummary ? "node-I1304_8302-54563_40456-54563_40769" : isChat ? "node-I1304_8194-54563_40456-54563_40740" : "node-I1304_8186-54563_40456-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8342-54563_40456-54563_40770" : isActions ? "node-I1304_8328-54563_40456-54563_40770" : isCollaborators1 ? "node-I1304_8312-54563_40456-54563_40770" : isChatSummary ? "node-I1304_8302-54563_40456-54563_40770" : isChat ? "node-I1304_8194-54563_40456-54563_40741" : "node-I1304_8186-54563_40456-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChat ? "text-[#ccc2dc]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1304_8342-54563_40456-54563_40771" : isActions ? "node-I1304_8328-54563_40456-54563_40771" : isCollaborators1 ? "node-I1304_8312-54563_40456-54563_40771" : isChatSummary ? "node-I1304_8302-54563_40456-54563_40771" : isChat ? "node-I1304_8194-54563_40456-54563_40742" : "node-I1304_8186-54563_40456-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">{`Chat `}</p>
                    </div>
                  </div>
                  {isChat && <div className="absolute bg-[#ccc2dc] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8194;54563:40456;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-I1304_8342-54563_40457" : isActions ? "node-I1304_8328-54563_40457" : isCollaborators1 ? "node-I1304_8312-54563_40457" : isChatSummary ? "node-I1304_8302-54563_40457" : isChat ? "node-I1304_8194-54563_40457" : "node-I1304_8186-54563_40457"} data-name="Tab 2">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8342-54563_40457-54563_40769" : isActions ? "node-I1304_8328-54563_40457-54563_40769" : isCollaborators1 ? "node-I1304_8312-54563_40457-54563_40769" : isChatSummary ? "node-I1304_8302-54563_40457-54563_40769" : isChat ? "node-I1304_8194-54563_40457-54563_40769" : "node-I1304_8186-54563_40457-54563_40740"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8342-54563_40457-54563_40770" : isActions ? "node-I1304_8328-54563_40457-54563_40770" : isCollaborators1 ? "node-I1304_8312-54563_40457-54563_40770" : isChatSummary ? "node-I1304_8302-54563_40457-54563_40770" : isChat ? "node-I1304_8194-54563_40457-54563_40770" : "node-I1304_8186-54563_40457-54563_40741"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChatOrChatSummaryOrCollaborators1OrActionsOrDeliverables ? "text-[#d0bcff]" : "text-[#e6e0e9]"}`} id={isDeliverables ? "node-I1304_8342-54563_40457-54563_40771" : isActions ? "node-I1304_8328-54563_40457-54563_40771" : isCollaborators1 ? "node-I1304_8312-54563_40457-54563_40771" : isChatSummary ? "node-I1304_8302-54563_40457-54563_40771" : isChat ? "node-I1304_8194-54563_40457-54563_40771" : "node-I1304_8186-54563_40457-54563_40742"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat history</p>
                    </div>
                  </div>
                  {isChatHistory && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8186;54563:40457;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-I1304_8342-54563_40458" : isActions ? "node-I1304_8328-54563_40458" : isCollaborators1 ? "node-I1304_8312-54563_40458" : isChatSummary ? "node-I1304_8302-54563_40458" : isChat ? "node-I1304_8194-54563_40458" : "node-I1304_8186-54563_40458"} data-name="Tab 3">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8342-54563_40458-54563_40769" : isActions ? "node-I1304_8328-54563_40458-54563_40769" : isCollaborators1 ? "node-I1304_8312-54563_40458-54563_40769" : isChatSummary ? "node-I1304_8302-54563_40458-54563_40740" : isChat ? "node-I1304_8194-54563_40458-54563_40769" : "node-I1304_8186-54563_40458-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8342-54563_40458-54563_40770" : isActions ? "node-I1304_8328-54563_40458-54563_40770" : isCollaborators1 ? "node-I1304_8312-54563_40458-54563_40770" : isChatSummary ? "node-I1304_8302-54563_40458-54563_40741" : isChat ? "node-I1304_8194-54563_40458-54563_40770" : "node-I1304_8186-54563_40458-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChatSummary ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1304_8342-54563_40458-54563_40771" : isActions ? "node-I1304_8328-54563_40458-54563_40771" : isCollaborators1 ? "node-I1304_8312-54563_40458-54563_40771" : isChatSummary ? "node-I1304_8302-54563_40458-54563_40742" : isChat ? "node-I1304_8194-54563_40458-54563_40771" : "node-I1304_8186-54563_40458-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat summary</p>
                    </div>
                  </div>
                  {isChatSummary && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8302;54563:40458;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-I1304_8342-54563_40459" : isActions ? "node-I1304_8328-54563_40459" : isCollaborators1 ? "node-I1304_8312-54563_40459" : isChatSummary ? "node-I1304_8302-54563_40459" : isChat ? "node-I1304_8194-54563_40459" : "node-I1304_8186-54563_40459"} data-name="Tab 4">
                {isChatOrChatSummaryOrCollaborators1OrActionsOrDeliverables && (
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8342-54563_40459-54563_40769" : isActions ? "node-I1304_8328-54563_40459-54563_40740" : isCollaborators1 ? "node-I1304_8312-54563_40459-54563_40769" : isChatSummary ? "node-I1304_8302-54563_40459-54563_40769" : "node-I1304_8194-54563_40459-54563_40769"} data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8342-54563_40459-54563_40770" : isActions ? "node-I1304_8328-54563_40459-54563_40741" : isCollaborators1 ? "node-I1304_8312-54563_40459-54563_40770" : isChatSummary ? "node-I1304_8302-54563_40459-54563_40770" : "node-I1304_8194-54563_40459-54563_40770"} data-name="Tab Contents">
                      <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isActions ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1304_8342-54563_40459-54563_40771" : isActions ? "node-I1304_8328-54563_40459-54563_40742" : isCollaborators1 ? "node-I1304_8312-54563_40459-54563_40771" : isChatSummary ? "node-I1304_8302-54563_40459-54563_40771" : "node-I1304_8194-54563_40459-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">{isChatSummary ? " Suggested actions" : ["Collaborators 1", "Actions", "Deliverables"].includes(property1) ? "Suggested actions" : "Suggested actions"}</p>
                      </div>
                    </div>
                    {isActions && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8328;54563:40459;54563:40744" data-name="Indicator" />}
                  </div>
                )}
                {isChatHistory && (
                  <button className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1304:8186;54563:40459;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1304:8186;54563:40459;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8186;54563:40459;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Suggested actions</p>
                      </div>
                    </div>
                  </button>
                )}
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-I1304_8342-54563_40460" : isActions ? "node-I1304_8328-54563_40460" : isCollaborators1 ? "node-I1304_8312-54563_40460" : isChatSummary ? "node-I1304_8302-54563_40460" : isChat ? "node-I1304_8194-54563_40460" : "node-I1304_8186-54563_40460"} data-name="Tab 5">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8342-54563_40460-54563_40740" : isActions ? "node-I1304_8328-54563_40460-54563_40769" : isCollaborators1 ? "node-I1304_8312-54563_40460-54563_40769" : isChatSummary ? "node-I1304_8302-54563_40460-54563_40769" : isChat ? "node-I1304_8194-54563_40460-54563_40769" : "node-I1304_8186-54563_40460-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8342-54563_40460-54563_40741" : isActions ? "node-I1304_8328-54563_40460-54563_40770" : isCollaborators1 ? "node-I1304_8312-54563_40460-54563_40770" : isChatSummary ? "node-I1304_8302-54563_40460-54563_40770" : isChat ? "node-I1304_8194-54563_40460-54563_40770" : "node-I1304_8186-54563_40460-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isDeliverables ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1304_8342-54563_40460-54563_40742" : isActions ? "node-I1304_8328-54563_40460-54563_40771" : isCollaborators1 ? "node-I1304_8312-54563_40460-54563_40771" : isChatSummary ? "node-I1304_8302-54563_40460-54563_40771" : isChat ? "node-I1304_8194-54563_40460-54563_40771" : "node-I1304_8186-54563_40460-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Deliverables</p>
                    </div>
                  </div>
                  {isDeliverables && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8342;54563:40460;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" id={isDeliverables ? "node-I1304_8342-54847_25133" : isActions ? "node-I1304_8328-54847_25133" : isCollaborators1 ? "node-I1304_8312-54847_25133" : isChatSummary ? "node-I1304_8302-54847_25133" : isChat ? "node-I1304_8194-54847_25133" : "node-I1304_8186-54847_25133"} data-name="Tab 6">
                {["Chat History", "Chat", "Chat Summary", "Collaborators 1"].includes(property1) && (
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isCollaborators1 ? "node-I1304_8312-54847_25133-54563_40740" : isChatSummary ? "node-I1304_8302-54847_25133-54563_40769" : isChat ? "node-I1304_8194-54847_25133-54563_40769" : "node-I1304_8186-54847_25133-54563_40769"} data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isCollaborators1 ? "node-I1304_8312-54847_25133-54563_40741" : isChatSummary ? "node-I1304_8302-54847_25133-54563_40770" : isChat ? "node-I1304_8194-54847_25133-54563_40770" : "node-I1304_8186-54847_25133-54563_40770"} data-name="Tab Contents">
                      <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isCollaborators1 ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isCollaborators1 ? "node-I1304_8312-54847_25133-54563_40742" : isChatSummary ? "node-I1304_8302-54847_25133-54563_40771" : isChat ? "node-I1304_8194-54847_25133-54563_40771" : "node-I1304_8186-54847_25133-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">{isCollaborators1 ? "Collaborators (2)" : ["Chat History", "Chat Summary"].includes(property1) ? "Collaborators" : "Collaborators"}</p>
                      </div>
                    </div>
                    {isCollaborators1 && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1304:8312;54847:25133;54563:40744" data-name="Indicator" />}
                  </div>
                )}
                {["Actions", "Deliverables"].includes(property1) && (
                  <button className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1304_8342-54847_25133-54563_40769" : "node-I1304_8328-54847_25133-54563_40769"} data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1304_8342-54847_25133-54563_40770" : "node-I1304_8328-54847_25133-54563_40770"} data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isDeliverables ? "node-I1304_8342-54847_25133-54563_40771" : "node-I1304_8328-54847_25133-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Collaborators</p>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
            <div className="h-px relative shrink-0 w-full" id={isDeliverables ? "node-I1304_8342-54563_40461" : isActions ? "node-I1304_8328-54563_40461" : isCollaborators1 ? "node-I1304_8312-54563_40461" : isChatSummary ? "node-I1304_8302-54563_40461" : isChat ? "node-I1304_8194-54563_40461" : "node-I1304_8186-54563_40461"} data-name="Divider">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
            </div>
          </div>
        )}
        <div className={`absolute left-0 ${isVariant7 ? "bg-[#3c3d42] h-[58px] rounded-tl-[12px] rounded-tr-[12px] top-0 w-[980px]" : isDeliverables ? "h-0 top-[49px] w-[1000px]" : isActions ? "h-[0.003px] top-[48.5px] w-[1000px]" : "h-0 top-[49px] w-[1002px]"}`} id={isVariant7 ? "node-1304_8388" : isDeliverables ? "node-1304_8341" : isActions ? "node-1304_8327" : isCollaborators1 ? "node-1304_8311" : isChatSummary ? "node-1304_8301" : isChat ? "node-1304_8193" : "node-1304_8185"}>
          {isChatHistoryOrChatOrChatSummaryOrCollaborators1OrActionsOr && (
            <div className={`absolute ${isActions ? "inset-[-0.5px_0]" : "inset-[-1px_0_0_0]"}`}>
              <img alt="" className="block max-w-none size-full" src={isDeliverables ? A.imgLine201 : isActions ? A.imgLine200 : isChat ? A.imgLine199 : A.imgLine198} />
            </div>
          )}
        </div>
        {isVariant7 && (
          <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[874.52px] overflow-clip rounded-[100px] top-[9px] w-[91.96px]" data-node-id="1304:8389" data-name="Button-dark">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1304:8389;53923:27766" data-name="state-layer">
              <div className="relative shrink-0 size-[18px]" data-node-id="I1304:8389;53923:27767" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon1} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8389;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Close</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {["Chat History", "Chat Summary", "Collaborators 1", "Actions", "Deliverables", "Variant7"].includes(property1) && (
        <div className={`absolute ${isVariant7 ? '-translate-x-1/2 -translate-y-1/2 [word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] left-[111.5px] text-[20px] text-center text-white top-[31px] tracking-[0.15px] whitespace-nowrap' : isDeliverables ? "h-[622px] left-[17px] overflow-x-clip overflow-y-auto top-[49px] w-[1072px]" : isActions ? "h-[629px] left-[17px] overflow-clip top-[49px] w-[950px]" : isCollaborators1 ? "h-[631px] left-[7px] overflow-x-clip overflow-y-auto top-[50px] w-[985px]" : isChatSummary ? "h-[632px] left-[17px] overflow-x-clip overflow-y-auto top-[49px] w-[985px]" : "[word-break:break-word] h-[628px] left-[17px] overflow-clip top-[49px] w-[985px]"}`} id={isVariant7 ? "node-1304_8390" : isDeliverables ? "node-1304_8343" : isActions ? "node-1304_8329" : isCollaborators1 ? "node-1304_8313" : isChatSummary ? "node-1304_8303" : "node-1304_8187"} style={isVariant7 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
          {["Chat History", "Actions", "Deliverables", "Variant7"].includes(property1) && (
            <p className={`leading-[24px] ${isVariant7 ? "" : isDeliverables ? '[word-break:break-word] absolute font-roboto font-medium left-[8px] text-[16px] text-white top-[21px] tracking-[0.15px] whitespace-nowrap' : isActions ? '[word-break:break-word] absolute font-roboto font-medium left-[7.5px] text-[16px] text-white top-[14px] tracking-[0.15px] whitespace-nowrap' : 'absolute font-roboto font-medium left-[8px] text-[16px] text-white top-[21px] tracking-[0.15px] whitespace-nowrap'}`} id={isDeliverables ? "node-1304_8344" : isActions ? "node-1304_8330" : isChatHistory ? "node-1304_8188" : undefined} style={["Chat History", "Actions", "Deliverables"].includes(property1) ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isVariant7 ? "Detailed deliverable" : isDeliverables ? "Deliverables" : isActions ? "Suggested Suggested actions (3)" : isChatHistory ? "Chat history (6 questions)" : ""}
            </p>
          )}
          {["Chat History", "Chat Summary", "Collaborators 1", "Actions"].includes(property1) && (
            <div className={`absolute ${isActions ? '[word-break:break-word] font-roboto font-normal h-[120px] leading-[0] left-[11.5px] text-[0px] text-white top-[84px] tracking-[0.25px] w-[820px]' : isCollaborators1 ? "bg-[#141218] h-[261px] left-[10px] rounded-[8px] top-[99px] w-[443px]" : isChatSummary ? "contents left-[805px] top-[20px]" : 'font-roboto font-normal h-[390px] leading-[0] left-[103px] text-[14px] text-white top-[64px] tracking-[0.25px] w-[615px]'}`} id={isActions ? "node-1304_8331" : isCollaborators1 ? "node-1407_5428" : isChatSummary ? "node-1347_4052" : "node-1304_8189"} style={isChatHistoryOrActions ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {["Chat History", "Chat Summary", "Actions"].includes(property1) && (
                <p className={isActions ? 'font-roboto font-bold leading-[20px] mb-0 text-[14px]' : isChatSummary ? '[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[827px] text-[#d0bcff] text-[12px] top-[22px] whitespace-nowrap' : "leading-[20px] mb-[8px]"} id={isChatSummary ? "node-1347_4053" : undefined} style={["Chat Summary", "Actions"].includes(property1) ? { fontVariationSettings: '"wdth" 100' } : undefined}>
                  {isActions ? "Elevate employee awareness and phishing resilience:" : isChatSummary ? "Export summary" : isChatHistory ? "Which departments or teams are most vulnerable to phishing attacks?" : ""}
                </p>
              )}
              {isChatHistoryOrActions && (
                <>
                  <p className={`leading-[20px] ${isActions ? "mb-0 text-[14px]" : "mb-[8px]"}`}>{isActions ? "Prioritise employee awareness initiatives specifically tailored to remote work risks. Conduct targeted phishing simulations mimicking real-world threats relevant to specific departments and roles. Design engaging training modules focusing on social engineering tactics, cloud storage vulnerabilities, and unsecured home network risks. Utilize microlearning and gamification for better engagement and knowledge retention. Encourage a culture of security by recognizing and rewarding exemplary cybersecurity behaviour. Remember, informed and vigilant employees are your first line of defence." : isChatHistory ? "Are there any specific types of malware we're seeing more of since the shift to remote work?" : ""}</p>
                  <p className={`leading-[20px] ${isActions ? "text-[14px]" : "mb-[8px]"}`}>{isActions ? "​" : isChatHistory ? "How effective are our current endpoint security solutions in detecting and preventing unauthorized access?" : ""}</p>
                </>
              )}
              {isChatHistory && (
                <>
                  <p className="leading-[20px] mb-[8px]">Are there any weaknesses in our VPN configurations that I should be aware of?</p>
                  <p className="leading-[20px] mb-[8px]">What steps can we take to improve employee awareness of cybersecurity risks in the remote work environment?</p>
                  <p className="leading-[20px]">What resources are available to help me assess the overall cybersecurity posture of our remote workforce?</p>
                </>
              )}
              {isChatSummary && (
                <div className="absolute left-[805px] size-[20px] top-[20px]" data-node-id="1347:4054" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                </div>
              )}
            </div>
          )}
          {["Chat History", "Collaborators 1"].includes(property1) && (
            <div className={`absolute ${isCollaborators1 ? "bg-[#141218] h-[399px] left-[10px] rounded-[8px] top-[375px] w-[443px]" : 'font-roboto font-normal leading-[0] left-[18px] text-[#d0bcff] text-[14px] top-[64px] tracking-[0.25px] w-[73px] whitespace-pre-wrap'}`} id={isCollaborators1 ? "node-1407_5434" : "node-1304_8190"} style={isChatHistory ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isChatHistory && (
                <>
                  <p className="leading-[20px] mb-[8px]">Question 1</p>
                  <p className="leading-[20px] mb-[8px]">Question 2</p>
                  <p className="leading-[20px] mb-[8px]">{`Question 3  .`}</p>
                  <p className="leading-[20px] mb-[8px]">Question 4</p>
                  <p className="leading-[20px] mb-[8px]">{`Question 5  .`}</p>
                  <p className="leading-[20px]">Question 6</p>
                </>
              )}
            </div>
          )}
          {isChatSummary && (
            <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[9px] text-[16px] text-white top-[18px] tracking-[0.15px] whitespace-nowrap" data-node-id="1304:8305" style={{ fontVariationSettings: '"wdth" 100' }}>
              Chat summary
            </p>
          )}
          {["Chat Summary", "Deliverables"].includes(property1) && (
            <p className={`[word-break:break-word] absolute leading-[20px] text-[14px] tracking-[0.25px] whitespace-nowrap ${isDeliverables ? 'font-roboto font-bold left-[12px] text-white top-[98px]' : 'font-roboto font-normal left-[30px] text-[#959595] top-[45px]'}`} id={isDeliverables ? "node-1304_8345" : "node-1304_8306"} style={{ fontVariationSettings: '"wdth" 100' }}>
              {isDeliverables ? "Action: Elevate employee awareness and phishing resilience" : isChatSummary ? "Note: The chat summary is updated every time you ask a question." : ""}
            </p>
          )}
          {isChatSummary && (
            <>
              <div className="absolute inset-[7.59%_97.66%_90.19%_0.92%]" data-node-id="1304:8307" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector1} />
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal h-[716px] leading-[0] left-[13px] text-[14px] text-white top-[89px] tracking-[0.25px] w-[627px]" data-node-id="1304:8308" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Observations:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Increased phishing attempts and unauthorized access attempts since shift to remote work.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Potential weaknesses in endpoint security and VPN configurations.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Lack of employee awareness of remote work security risks.</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">Summary of responses:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">{`Departments like Marketing & Communications and Finance & Accounting might be more vulnerable to phishing.`}</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Recent malware trends include RATs, phishing campaigns leveraging collaboration tools, and weaponization of cloud storage.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Current endpoint security solutions are effective in some areas but could benefit from improved EDR utilization and addressing zero-day threats.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Potential VPN configuration weaknesses include split tunneling misconfiguration, outdated protocols, weak authentication, and inadequate logging.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Employee awareness needs improvement, with targeted phishing simulations, training focused on remote work risks, and interactive learning methods recommended.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Resources for assessing remote workforce cybersecurity posture include the digital twin, security incident reports, user behavior analysis, and security assessment tools.</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">Urgency:</p>
                <p className="leading-[20px] mb-[8px]">High. The rise in cyber threats and potential weaknesses in your security posture pose a significant risk to sensitive data, operations, and compliance. Immediate action is crucial to mitigate these risks and protect your remote workforce.</p>
                <p className="leading-[20px] mb-[8px]">Additional Notes:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">This summary does not constitute an exhaustive analysis and further investigation might be necessary.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Prioritize Suggested actions based on your specific risk tolerance and organizational context.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Regularly review and adapt your cybersecurity strategy to address evolving threats and vulnerabilities.</span>
                  </li>
                </ul>
              </div>
            </>
          )}
          {isCollaborators1 && (
            <>
              <div className="absolute bg-[#202125] h-[134px] left-[62px] top-[779px] w-[95px]" data-node-id="1407:5568" />
              <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[27px] overflow-clip rounded-[100px] top-[710px] w-[112px]" data-node-id="1407:5473" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1407:5474" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1407:5475" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Send invite</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[27px] overflow-clip rounded-[100px] top-[296px] w-[94px]" data-node-id="1407:5546" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1407:5547" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1407:5548" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">{`Remove `}</p>
                  </div>
                </div>
              </div>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[26px] rounded-tl-[4px] rounded-tr-[4px] top-[489px] w-[407px]" data-node-id="1407:5436" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1407:5436;52798:26685" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1407:5436;52798:26686" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1407:5436;52798:26687" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1407:5436;52798:26688" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1407:5436;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Collaborator
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1407:5436;52798:26690" data-name="trailing-icon">
                      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1407:5436;52798:26690;51525:5137" data-name="container">
                        <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1407:5436;52798:26690;51525:5138" data-name="state-layer">
                          <div className="relative shrink-0 size-[24px]" data-node-id="I1407:5436;52798:26690;51525:5139" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1407:5436;52798:26691" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <div className="absolute bg-[#141218] h-[261px] left-[469px] rounded-[8px] top-[99px] w-[443px]" data-node-id="1407:5433" />
              <div className="absolute bg-[#141218] h-[399px] left-[469px] rounded-[8px] top-[375px] w-[443px]" data-node-id="1407:5435" />
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[26px] rounded-tl-[4px] rounded-tr-[4px] top-[394px] w-[407px]" data-node-id="1304:8315" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1304:8315;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1304:8315;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1304:8315;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1304:8315;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1304:8315;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1304:8315;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <div className="absolute content-stretch flex flex-col h-[116px] items-start left-[26px] rounded-tl-[4px] rounded-tr-[4px] top-[568px] w-[407px]" data-node-id="1407:5463" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1407:5464" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1407:5465" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="1407:5466" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="1407:5467" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] tracking-[0.5px] whitespace-nowrap" data-node-id="1407:5468" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Message
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="1407:5469" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[10px] text-[16px] text-white top-[18px] tracking-[0.15px] whitespace-nowrap" data-node-id="1304:8318" style={{ fontVariationSettings: '"wdth" 100' }}>
                Add collaborators
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[10px] text-[14px] text-white top-[57px] tracking-[0.25px] w-[702px]" data-node-id="1304:8319" style={{ fontVariationSettings: '"wdth" 100' }}>{`Collaborators will be able to contribute to the chat, and access all the other tabs within this insight. `}</p>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[26px] right-[683px] text-[#cac4d0] text-[16px] top-[calc(50%-185.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1407:5429" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[24px]">alex.clickworthy@acme.arqui.com.au</p>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[26px] right-[865px] text-[#cac4d0] text-[16px] top-[calc(50%-150.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1407:5544" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[24px]">Collaborator</p>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[26px] right-[556px] text-[#cac4d0] text-[14px] top-[calc(50%-88.5px)]" data-node-id="1407:5545" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Alex, thanks for jumping into this chat - would love to get your questions/thoughts on the insight before we meet the broader team.</p>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[487px] right-[236px] text-[#cac4d0] text-[16px] top-[calc(50%-185.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1407:5430" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[24px]">jordan.phisher@acme.arqui.com.au</p>
              </div>
            </>
          )}
          {isCollaborators1OrDeliverables && (
            <p className={`[word-break:break-word] absolute text-white ${isDeliverables ? 'font-roboto font-bold leading-[20px] left-[12px] text-[14px] top-[422px] tracking-[0.25px] whitespace-nowrap' : 'font-roboto font-medium h-[25px] leading-[16px] left-[27px] text-[12px] top-[467px] tracking-[0.5px] w-[78px]'}`} id={isDeliverables ? "node-1304_8346" : "node-1407_5453"} style={{ fontVariationSettings: '"wdth" 100' }}>
              {isDeliverables ? "Action: Strengthen Endpoint Security and Vulnerability Management" : isCollaborators1 ? "Invite as" : ""}
            </p>
          )}
          {isCollaborators1 && (
            <>
              <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[488px] overflow-clip rounded-[100px] top-[710px] w-[112px]" data-node-id="1407:5510" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1407:5511" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1407:5512" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Send invite</p>
                  </div>
                </div>
              </div>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[487px] rounded-tl-[4px] rounded-tr-[4px] top-[489px] w-[407px]" data-node-id="1407:5513" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1407:5513;52798:26685" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1407:5513;52798:26686" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1407:5513;52798:26687" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1407:5513;52798:26688" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1407:5513;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Collaborator
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1407:5513;52798:26690" data-name="trailing-icon">
                      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1407:5513;52798:26690;51525:5137" data-name="container">
                        <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1407:5513;52798:26690;51525:5138" data-name="state-layer">
                          <div className="relative shrink-0 size-[24px]" data-node-id="I1407:5513;52798:26690;51525:5139" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1407:5513;52798:26691" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[487px] rounded-tl-[4px] rounded-tr-[4px] top-[394px] w-[407px]" data-node-id="1407:5514" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1407:5514;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1407:5514;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1407:5514;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1407:5514;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1407:5514;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1407:5514;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <div className="absolute content-stretch flex flex-col h-[116px] items-start left-[487px] rounded-tl-[4px] rounded-tr-[4px] top-[568px] w-[407px]" data-node-id="1407:5515" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1407:5516" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="1407:5517" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="1407:5518" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="1407:5519" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] tracking-[0.5px] whitespace-nowrap" data-node-id="1407:5520" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Message
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="1407:5521" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </div>
            </>
          )}
          {isCollaborators1OrDeliverables && (
            <p className={`[word-break:break-word] absolute text-white ${isDeliverables ? 'font-roboto font-bold leading-[20px] left-[26px] text-[14px] top-[753px] tracking-[0.25px] whitespace-nowrap' : 'font-roboto font-medium h-[25px] leading-[16px] left-[488px] text-[12px] top-[467px] tracking-[0.5px] w-[78px]'}`} id={isDeliverables ? "node-1304_8347" : "node-1407_5524"} style={{ fontVariationSettings: '"wdth" 100' }}>
              {isDeliverables ? "Action: Strengthen Endpoint Security and Vulnerability Management" : isCollaborators1 ? "Invite as" : ""}
            </p>
          )}
          {isCollaborators1 && (
            <>
              <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[488px] overflow-clip rounded-[100px] top-[296px] w-[94px]" data-node-id="1407:5549" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1407:5550" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1407:5551" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">{`Remove `}</p>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[487px] right-[404px] text-[#cac4d0] text-[16px] top-[calc(50%-150.5px)] tracking-[0.5px] whitespace-nowrap" data-node-id="1407:5552" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[24px]">Collaborator</p>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[487px] right-[95px] text-[#cac4d0] text-[14px] top-[calc(50%-98.5px)]" data-node-id="1407:5553" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Jordan, take a look at the chat for this insight. It looks like we could use additional documents to be uploaded - will make the suggestions more solid. Do you have any docs we can add?</p>
              </div>
            </>
          )}
          {isActions && (
            <>
              <button className="[word-break:break-word] absolute block cursor-pointer font-roboto font-normal leading-[0] left-[11.5px] text-[#d0bcff] text-[14px] text-left top-[209px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8332" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Arqui can help with 2 deliverables</p>
              </button>
              <div className="[word-break:break-word] absolute font-roboto font-normal h-[140px] leading-[0] left-[11.5px] text-[0px] text-white top-[254px] tracking-[0.25px] w-[820px]" data-node-id="1304:8333" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="font-roboto font-bold leading-[20px] mb-0 text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Strengthen endpoint security and vulnerability management
                </p>
                <p className="leading-[20px] text-[14px]">Evaluate and optimize your endpoint security solutions. Explore advanced EDR capabilities for proactive threat detection and incident response. Address zero-day vulnerabilities through threat intelligence integration and timely patching. Conduct regular vulnerability assessments of remote devices and network infrastructure, both internally and through external penetration testing. Prioritize patching critical vulnerabilities identified in VPN configurations, such as outdated protocols, weak authentication, and inadequate logging. Remember, a layered security approach with robust endpoint protection and proactive vulnerability management is essential.</p>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal h-[140px] leading-[0] left-[11.5px] text-[0px] text-white top-[444px] tracking-[0.25px] w-[820px]" data-node-id="1304:8334" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="font-roboto font-bold leading-[20px] mb-0 text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Leverage the digital twin for continuous monitoring and threat detection
                </p>
                <p className="leading-[20px] text-[14px]">Harness the power of your digital twin for real-time visibility into remote work security posture. Analyze network traffic, endpoint security data, and user behavior for suspicious activity, unauthorized access attempts, and potential malware infections. Leverage threat intelligence integration to tailor your monitoring to the most relevant remote work threats. Utilize historical data and trend analysis tools to identify emerging risks and prioritize assessment efforts. Remember, the digital twin provides a valuable platform for continuous monitoring, threat detection, and proactive security measures to safeguard your remote workforce.</p>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[29.5px] text-[#959595] text-[14px] top-[46px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8335" style={{ fontVariationSettings: '"wdth" 100' }}>
                Note: The list of Suggested Suggested actions is updated every time you ask a question.
              </p>
              <button className="[word-break:break-word] absolute block cursor-pointer font-roboto font-normal leading-[0] left-[11.5px] text-[#d0bcff] text-[14px] text-left top-[399px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8336" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Arqui can help with 2 deliverables</p>
              </button>
              <button className="[word-break:break-word] absolute block cursor-pointer font-roboto font-normal leading-[0] left-[11.5px] text-[#d0bcff] text-[14px] text-left top-[589px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8337" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Arqui can help with 2 deliverables</p>
              </button>
              <div className="absolute inset-[7.79%_97.58%_89.83%_0.84%]" data-node-id="1304:8338" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector2} />
              </div>
            </>
          )}
          {isDeliverables && (
            <>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[12px] text-[14px] text-white top-[166px] tracking-[0.25px] w-[691px]" data-node-id="1304:8348" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px] text-[#d0bcff]">Phishing simulation effectiveness report</p>
                <p className="leading-[20px]">This AI-driven report analyzes uploaded phishing simulation results, identifying click-through rates, most susceptible departments, and common vulnerabilities exploited. It provides insights into the overall effectiveness of your simulations and suggests areas for improvement.</p>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[12px] text-[14px] text-white top-[501px] tracking-[0.25px] w-[668px]" data-node-id="1304:8349" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Endpoint Security Posture Assessment</p>
                <p className="leading-[20px]">Leverage historical data and industry benchmarks to assess your current endpoint security posture. Identify areas needing improvement, prioritize vulnerabilities, and recommend suitable security solutions based on your specific environment.</p>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[832px] tracking-[0.25px] w-[668px]" data-node-id="1304:8350" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Anomaly Detection with Historical Trend Analysis:</p>
                <p className="leading-[20px]">Analyze historical network traffic, endpoint data, and user behavior within the digital twin to identify deviations from established patterns. Highlight potential anomalies that might indicate suspicious activity or emerging threats.</p>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[12px] text-[14px] text-white top-[291px] tracking-[0.25px] w-[691px]" data-node-id="1304:8351" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px] text-[#d0bcff]">Training Platform Suitability Review</p>
                <p className="leading-[20px]">{`The app generates an automated report assessing the current learning platforms' capabilities for delivering engaging and effective phishing awareness training. It evaluates features like microlearning modules, gamification elements, and knowledge assessment tools, recommending platform optimizations.`}</p>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[629px] tracking-[0.25px] w-[668px]" data-node-id="1304:8352" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">AI-Powered Vulnerability Prioritization</p>
                <p className="leading-[20px]">Analyze historical vulnerability scan data and threat intelligence feeds to prioritize vulnerabilities based on exploitability, potential impact, and available patches. This helps you focus your resources on addressing the most critical risks first.</p>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[960px] tracking-[0.25px] w-[668px]" data-node-id="1304:8353" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Cybersecurity Maturity Assessment and Benchmarking</p>
                <p className="leading-[20px]">Utilise the digital twin and industry benchmarks to assess your overall cybersecurity maturity. Identify areas for improvement and track progress over time, fostering a data-driven approach to security enhancement.</p>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[12px] text-[#989898] text-[12px] top-[271px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8354" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[12px] text-[#989898] text-[12px] top-[606px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8355" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[937px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8356" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[12px] text-[#989898] text-[12px] top-[148px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8357" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[12px] text-[#989898] text-[12px] top-[478px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8358" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[809px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8359" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <button className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[162px]" data-node-id="1304:8360" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1304:8361" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1304:8362" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Open</p>
                  </div>
                </div>
              </button>
              <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[498px]" data-node-id="1451:12360" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1451:12361" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1451:12362" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[829px]" data-node-id="1304:8364" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1304:8364;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8364;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[291px]" data-node-id="1304:8365" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1304:8365;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8365;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Open</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[629px]" data-node-id="1304:8366" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1304:8366;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8366;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[960px]" data-node-id="1304:8367" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1304:8367;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8367;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-0 left-[8px] top-[131px] w-[811px]" data-node-id="1304:8368">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[8px] top-[466px] w-[811px]" data-node-id="1304:8369">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[797px] w-[811px]" data-node-id="1304:8370">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[8px] top-[401px] w-[811px]" data-node-id="1304:8371">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[735px] w-[811px]" data-node-id="1304:8372">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[1066px] w-[811px]" data-node-id="1304:8373">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[27px] text-[#959595] text-[14px] top-[53px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8374" style={{ fontVariationSettings: '"wdth" 100' }}>
                Note: The list of suggested deliverables is updated every time you ask a question.
              </p>
              <div className="absolute inset-[9%_97.95%_88.75%_0.75%]" data-node-id="1304:8375" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector3} />
              </div>
              <div className="absolute contents left-[250px] top-[292px]" data-node-id="1304:8376">
                <div className="absolute bg-[#141218] border border-[#696969] border-solid h-[20px] left-[250px] rounded-[12px] top-[292px] w-[103px]" data-node-id="1304:8377" />
                <div className="absolute left-[256px] size-[12px] top-[296px]" data-node-id="1304:8378">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse13} />
                </div>
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[308px] text-[11px] text-center text-white top-[296px] tracking-[0.1px] whitespace-nowrap" data-node-id="1304:8379" style={{ fontVariationSettings: '"wdth" 100' }}>
                  IN PROGRESS
                </p>
              </div>
              <div className="absolute contents left-[284px] top-[165px]" data-node-id="1304:8380">
                <div className="absolute bg-[#141218] border border-[#696969] border-solid h-[20px] left-[284px] rounded-[12px] top-[165px] w-[94px]" data-node-id="1304:8381" />
                <div className="absolute left-[290px] size-[12px] top-[169px]" data-node-id="1304:8382">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse14} />
                </div>
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[337px] text-[11px] text-center text-white top-[169px] tracking-[0.1px] whitespace-nowrap" data-node-id="1304:8383" style={{ fontVariationSettings: '"wdth" 100' }}>
                  COMPLETE
                </p>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[624px] overflow-clip rounded-[100px] top-[43px]" data-node-id="1304:8384" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1304:8384;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8384;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
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
          <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[17px] rounded-tl-[4px] rounded-tr-[4px] top-[625px] w-[702px]" data-node-id="1304:8195" data-name="Text field-dark">
            <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1304:8195;52798:26685" data-name="text field">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1304:8195;52798:26686" data-name="state-layer">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1304:8195;52798:26687" data-name="content">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1304:8195;52798:26688" data-name="label-text">
                    <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1304:8195;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Ask Arqui
                    </p>
                  </div>
                </div>
                <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1304:8195;52798:26690" data-name="trailing-icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1304:8195;52798:26690;51525:5137" data-name="container">
                    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1304:8195;52798:26690;51525:5138" data-name="state-layer">
                      <div className="relative shrink-0 size-[24px]" data-node-id="I1304:8195;52798:26690;51525:5139" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIconsSendFill0Wght400Grad0Opsz241} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="I1304:8195;52798:26691" data-name="Active indicator">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator} />
              </div>
            </div>
          </button>
          <div className="absolute h-[575px] left-[9px] overflow-x-clip overflow-y-auto top-[49px] w-[985px]" data-node-id="1345:5479">
            <div className="absolute bg-[#2f3034] h-[80px] left-0 rounded-[12px] top-[-3888px] w-[940px]" data-node-id="1345:5480" />
            <div className="absolute left-[104px] size-[81px] top-[-3969px]" data-node-id="1345:5481" />
            <div className="absolute bg-[#2f3034] h-[80px] left-0 rounded-[12px] top-[-1733px] w-[942px]" data-node-id="1345:5482" />
            <div className="absolute bg-[#2f3034] h-[80px] left-0 rounded-[12px] top-[-3180px] w-[942px]" data-node-id="1345:5483" />
            <div className="absolute bg-[#2f3034] h-[103px] left-0 rounded-[12px] top-[-1063px] w-[942px]" data-node-id="1345:5484" />
            <div className="absolute bg-[#2f3034] h-[80px] left-0 rounded-[12px] top-[-2515px] w-[942px]" data-node-id="1345:5485" />
            <div className="absolute bg-[#2f3034] h-[80px] left-0 rounded-[12px] top-[-257px] w-[942px]" data-node-id="1345:5486" />
            <div className="absolute contents left-[8.93px] top-[-3871px]" data-node-id="1345:5487">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-3842.86px] tracking-[0.25px] whitespace-nowrap" data-node-id="1345:5488" style={{ fontVariationSettings: '"wdth" 100' }}>
                Which departments or teams are most vulnerable to phishing attacks?
              </p>
              <div className="absolute contents left-[8.93px] top-[-3871px]" data-node-id="1345:5489">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#a59df8] text-[12px] top-[-3870px] whitespace-nowrap" data-node-id="1345:5490" style={{ fontVariationSettings: '"wdth" 100' }}>
                  YOU
                </p>
                <div className="absolute inset-[-673.22%_97.56%_770.61%_0.91%]" data-node-id="1345:5491" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[8.93px] top-[-1715px]" data-node-id="1345:5492">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-1687.86px] tracking-[0.25px] whitespace-nowrap" data-node-id="1345:5493" style={{ fontVariationSettings: '"wdth" 100' }}>
                Are there any weaknesses in our VPN configurations that I should be aware of?
              </p>
              <div className="absolute contents left-[8.93px] top-[-1715px]" data-node-id="1345:5494">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#a59df8] text-[12px] top-[-1714px] whitespace-nowrap" data-node-id="1345:5495" style={{ fontVariationSettings: '"wdth" 100' }}>
                  YOU
                </p>
                <div className="absolute inset-[-298.26%_97.56%_395.65%_0.91%]" data-node-id="1345:5496" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[8.93px] top-[-3160px]" data-node-id="1345:5497">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-3132.86px] tracking-[0.25px] whitespace-nowrap" data-node-id="1345:5498" style={{ fontVariationSettings: '"wdth" 100' }}>{`Are there any specific types of malware we're seeing more of since the shift to remote work?`}</p>
              <div className="absolute contents left-[8.93px] top-[-3160px]" data-node-id="1345:5499">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#a59df8] text-[12px] top-[-3159px] whitespace-nowrap" data-node-id="1345:5500" style={{ fontVariationSettings: '"wdth" 100' }}>
                  YOU
                </p>
                <div className="absolute inset-[-549.57%_97.56%_646.96%_0.91%]" data-node-id="1345:5501" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[8.93px] top-[-1044px]" data-node-id="1345:5502">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-1015.86px] tracking-[0.25px] w-[689px]" data-node-id="1345:5503" style={{ fontVariationSettings: '"wdth" 100' }}>
                What steps can we take to improve employee awareness of cybersecurity risks in the remote work environment?
              </p>
              <div className="absolute contents left-[8.93px] top-[-1044px]" data-node-id="1345:5504">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#a59df8] text-[12px] top-[-1043px] whitespace-nowrap" data-node-id="1345:5505" style={{ fontVariationSettings: '"wdth" 100' }}>
                  YOU
                </p>
                <div className="absolute inset-[-181.57%_97.56%_278.96%_0.91%]" data-node-id="1345:5506" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[8.93px] top-[-2496px]" data-node-id="1345:5507">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[9px] text-[14px] text-white top-[-2468.86px] whitespace-nowrap" data-node-id="1345:5508" style={{ fontVariationSettings: '"wdth" 100' }}>
                How effective are our current endpoint security solutions in detecting and preventing unauthorized access?
              </p>
              <div className="absolute contents left-[8.93px] top-[-2496px]" data-node-id="1345:5509">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#a59df8] text-[12px] top-[-2495px] whitespace-nowrap" data-node-id="1345:5510" style={{ fontVariationSettings: '"wdth" 100' }}>
                  YOU
                </p>
                <div className="absolute inset-[-434.09%_97.56%_531.48%_0.91%]" data-node-id="1345:5511" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[8.93px] top-[-238px]" data-node-id="1345:5512">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[9px] text-[14px] text-white top-[-210.86px] whitespace-nowrap" data-node-id="1345:5513" style={{ fontVariationSettings: '"wdth" 100' }}>
                What resources are available to help me assess the overall cybersecurity posture of our remote workforce?
              </p>
              <div className="absolute contents left-[8.93px] top-[-238px]" data-node-id="1345:5514">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#a59df8] text-[12px] top-[-237px] whitespace-nowrap" data-node-id="1345:5515" style={{ fontVariationSettings: '"wdth" 100' }}>
                  YOU
                </p>
                <div className="absolute inset-[-41.39%_97.56%_138.78%_0.91%]" data-node-id="1345:5516" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-3763px]" data-node-id="1345:5517">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-3763px] tracking-[0.25px] w-[718px]" data-node-id="1345:5518" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Based on recent email analysis and user behaviour patterns within the digital twin, two departments seem particularly susceptible to phishing attacks:</p>
                <p className="leading-[20px] mb-[8px]">{`1. Marketing & Communications:`}</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">{`High Email Volume: The Marketing & Communications team receives a high volume of external emails, increasing the chance of encountering phishing attempts.`}</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">{`Social Engineering Targets: Attackers might exploit the team's need for images, press releases, or collaboration to send convincing phishing emails.`}</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Recent Phishing Incident: A successful phishing attack last month compromised the account of a team member, highlighting potential vulnerabilities. (Source: Digital Twin - Security Incident Report #2024-02-15)</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">{`2. Finance & Accounting:`}</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Access to Sensitive Data: This department handles sensitive financial information, making it a prime target for attackers seeking financial gain.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Spear Phishing Risk: Attackers might target specific individuals with personalized phishing emails based on information gleaned from internal systems.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">{`Limited Security Awareness Training: Compared to other departments, Finance & Accounting has received fewer cybersecurity awareness training sessions in the past year. (Source: HR Training Records Database)`}</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">Additional Insights:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">While these departments show higher susceptibility, phishing attempts have been detected across various teams.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Analysing user clicks on suspicious links within the digital twin can further pinpoint vulnerable individuals and training needs.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Comparing phishing susceptibility with factors like email volume, external collaboration frequency, and past security incidents can reveal broader trends.</span>
                  </li>
                </ul>
                <p className="leading-[20px]">Note: This analysis is based on available data and should not be considered exhaustive. Further investigation and context are needed for a comprehensive understanding of phishing risks within your organization.</p>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-1636px]" data-node-id="1345:5519">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-1608px] tracking-[0.25px] w-[718px]" data-node-id="1345:5520" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[normal] mb-[8px]">While a comprehensive vulnerability assessment requires deeper analysis, here are some areas in your VPN configurations that warrant closer attention:</p>
                <p className="leading-[normal] mb-[8px]">1. Split Tunneling Misconfiguration:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[normal]">Concern: If split tunneling is enabled by default or misconfigured, it could allow certain types of traffic to bypass the VPN encryption, potentially exposing sensitive data.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[normal]">Digital Twin Insight: Anomalous network traffic patterns suggest potential split tunneling usage by some users, requiring further investigation. (Source: Digital Twin - Network Traffic Analysis Report)</span>
                  </li>
                </ul>
                <p className="leading-[normal] mb-[8px]">2. Outdated VPN Protocols:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[normal]">Concern: Older VPN protocols like PPTP or L2TP/IPsec might have known vulnerabilities that attackers could exploit to intercept or decrypt traffic.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[normal]">Inventory Analysis: While most users utilize the recommended AES-256 encrypted OpenVPN protocol, a small number of legacy devices still connect using less secure protocols. (Source: IT Asset Management Database)</span>
                  </li>
                </ul>
                <p className="leading-[normal] mb-[8px]">3. Weak Authentication Mechanisms:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[normal]">Concern: Reliance solely on password-based authentication for VPN access poses a risk if credentials are compromised through phishing or other attacks.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[normal]">Security Audit Findings: A recent security audit identified that multi-factor authentication (MFA) is not mandatory for all VPN connections, leaving some users vulnerable to unauthorized access. (Source: Internal Security Audit Report)</span>
                  </li>
                </ul>
                <p className="leading-[normal] mb-[8px]">4. Inadequate Logging and Monitoring:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[normal]">Concern: Limited logging and monitoring of VPN activity make it difficult to detect suspicious behavior or unauthorized access attempts.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[normal]">Security Operations Insight: The current VPN logs lack granular details like user location and application access, hindering forensic analysis in case of security incidents. (Source: Security Operations Center Activity Logs)</span>
                  </li>
                </ul>
                <p className="leading-[normal]">{`Remember, this is not an exhaustive list, and vulnerabilities can emerge quickly. It's crucial to conduct regular penetration testing and vulnerability assessments of your VPN configurations to stay ahead of potential threats.`}</p>
              </div>
              <div className="absolute contents left-[9px] top-[-1636px]" data-node-id="1345:5521">
                <div className="absolute contents left-[9px] top-[-1636px]" data-node-id="1345:5522">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-1635px] whitespace-nowrap" data-node-id="1345:5523" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-1636px]" data-node-id="1345:5524">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1345:5525">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-3081px]" data-node-id="1345:5530">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-3053px] tracking-[0.25px] w-[718px]" data-node-id="1345:5531" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">{`Yes, we have observed a shift in the malware landscape since the adoption of remote work practices. Here's a breakdown of concerning trends:`}</p>
                <p className="leading-[20px] mb-[8px]">1. Increased Prevalence of Remote Access Trojans (RATs):</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Target: Primarily targeting IT or administrative personnel.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Function: Grants attackers remote access to devices and networks, potentially compromising sensitive data or disrupting operations.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Digital Twin Insight: Anomalous remote access attempts towards privileged accounts have increased by 20% since the shift to remote work. (Source: Digital Twin - Network Security Monitoring Report)</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">2. Rise of Phishing Campaigns Leveraging Collaboration Tools:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Target: Exploiting familiarity with popular platforms like Slack or Microsoft Teams.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Function: Encourages users to download malicious attachments or click on phishing links disguised as legitimate collaboration documents.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">{`Recent Example: A phishing campaign impersonating a "new project document" in Teams led to malware infections on 15 user devices last month. (Source: Digital Twin - Security Incident Report #2024-02-08)`}</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">3. Weaponization of Cloud Storage Services:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Target: Exploiting trust in cloud platforms like Dropbox or Google Drive.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Function: Malicious actors might use compromised cloud storage accounts to share infected files or lure victims into downloading malware disguised as legitimate documents.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">{`Emerging Threat: We've identified a recent increase in suspicious file uploads to personal cloud storage accounts by employees, potentially indicating compromised devices or targeted attacks. (Source: Endpoint Security Agent Logs)`}</span>
                  </li>
                </ul>
                <p className="leading-[20px]">{`It's important to note that this is not an exhaustive list, and the malware landscape constantly evolves. Continuous monitoring and adaptation of security measures are crucial.`}</p>
              </div>
              <div className="absolute contents left-[9px] top-[-3081px]" data-node-id="1345:5532">
                <div className="absolute contents left-[9px] top-[-3081px]" data-node-id="1345:5533">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-3080px] whitespace-nowrap" data-node-id="1345:5534" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-3081px]" data-node-id="1345:5535">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1345:5536">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-944px]" data-node-id="1345:5541">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-917px] tracking-[0.25px] w-[718px]" data-node-id="1345:5542" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Enhancing Employee Cybersecurity Awareness in a Remote Landscape: Data-Driven Insights</p>
                <p className="leading-[20px] mb-[8px]">Boosting employee awareness of cybersecurity risks in the remote work environment is crucial. Here are some key areas to focus on based on available data:</p>
                <p className="leading-[20px] mb-[8px]">1. Targeted Phishing Simulations:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Phishing Susceptibility Trends: Analyze recent phishing incident reports and user click data within the digital twin to identify departments or individuals most susceptible to phishing attacks. (Source: Digital Twin - Security Incident Reports, User Activity Logs)</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Personalized Simulations: Design targeted phishing simulations mimicking real-world threats relevant to specific departments or roles, increasing their effectiveness.</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">2. Security Awareness Training Reinforcements:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Training Completion Analysis: Identify individuals or departments with low completion rates for past security awareness training sessions. (Source: HR Training Records Database)</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Focus on Remote Work Risks: Design training modules specifically addressing common remote work security threats like social engineering, cloud storage vulnerabilities, and unsecured home networks.</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">3. Interactive Learning and Reinforcement:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Gamification and Microlearning: Utilize gamified learning modules and bite-sized microlearning content to engage employees and improve knowledge retention.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Real-World Scenarios and Quizzes: Incorporate case studies and interactive quizzes based on real-world security incidents to enhance understanding and application of training concepts.</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">4. Continuous Communication and Recognition:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Regular Security Newsletters and Updates: Keep employees informed about evolving threats, successful phishing attempts within the organization, and security best practices through regular communication channels.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Recognition and Incentives: Recognize and reward employees who demonstrate exemplary cybersecurity awareness and behavior to reinforce positive practices.</span>
                  </li>
                </ul>
                <p className="leading-[20px]">Remember, effective cybersecurity awareness requires a multi-layered approach and ongoing efforts. Continuously monitor the effectiveness of training programs, adapt content based on emerging threats, and foster a culture of security within your organization.</p>
              </div>
              <div className="absolute contents left-[9px] top-[-944px]" data-node-id="1345:5543">
                <div className="absolute contents left-[9px] top-[-944px]" data-node-id="1345:5544">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-943px] whitespace-nowrap" data-node-id="1345:5545" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-944px]" data-node-id="1345:5546">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1345:5547">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-2419px]" data-node-id="1345:5552">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-2393px] w-[718px]" data-node-id="1345:5553" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">{`Assessing the effectiveness of your endpoint security solutions requires a multifaceted approach. Here's what the data within the digital twin reveals:`}</p>
                <p className="leading-[20px] mb-[8px]">Positive Indicators:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Blocked Malware Attempts: Endpoint security solutions prevented an average of 2,500 malware infections per month across the organization in the last quarter. (Source: Endpoint Security Agent Logs)</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Reduced Unauthorized Access: The number of unauthorized access attempts detected and blocked has decreased by 15% since implementing multi-factor authentication. (Source: Digital Twin - Security Event Monitoring Report)</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Improved Patch Management: 98% of endpoints are now within the recommended patch compliance window, reducing vulnerabilities exploitable by malware. (Source: IT Asset Management Database)</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">Areas for Improvement:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Zero-Day Threats: While endpoint solutions effectively block known malware, recent security incidents involving zero-day exploits highlight the need for layered protection strategies. (Source: Digital Twin - Security Incident Report #2024-02-15)</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Endpoint Detection and Response (EDR) Utilization: While EDR is deployed across endpoints, its full potential for threat hunting and advanced incident response might not be fully utilized. (Source: Security Operations Centre Activity Logs)</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Employee Security Awareness: Phishing susceptibility remains a concern, with a recent campaign compromising 15 user devices despite endpoint protection. (Source: Digital Twin - Security Incident Report #2024-02-08)</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">Overall, your current endpoint security solutions provide a valuable layer of defence, but continuous evaluation and improvement are crucial. Consider these points for a more comprehensive assessment:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Threat Intelligence Integration: Leverage threat intelligence feeds to stay updated on emerging threats and adapt security measures accordingly.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">EDR Optimization: Explore advanced EDR capabilities like behavioural analysis and anomaly detection to proactively identify and respond to suspicious activities.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Security Awareness Training: Regularly conduct simulations and training to educate employees on phishing and other social engineering tactics.</span>
                  </li>
                </ul>
                <p className="leading-[20px]">{`Remember, endpoint security is just one part of a holistic cybersecurity strategy. Regularly reviewing security effectiveness and adapting your approach is essential in today's evolving threat landscape.`}</p>
              </div>
              <div className="absolute contents left-[9px] top-[-2419px]" data-node-id="1345:5554">
                <div className="absolute contents left-[9px] top-[-2419px]" data-node-id="1345:5555">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-2418px] whitespace-nowrap" data-node-id="1345:5556" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-2419px]" data-node-id="1345:5557">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1345:5558">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-161px]" data-node-id="1345:5563">
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-135px] w-[718px]" data-node-id="1345:5564" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Understanding the cybersecurity posture of your remote workforce is critical. Here are some valuable resources at your disposal:</p>
                <p className="leading-[20px] mb-[8px]">Internal Resources:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Digital Twin: Analyze anonymized user activity, network traffic, and endpoint security data within the digital twin to identify potential vulnerabilities and suspicious behavior. Leverage tools like network traffic analysis and user behavior baselines to detect anomalies. (Source: Digital Twin - User Activity Logs, Network Traffic Analysis Report, Endpoint Security Agent Logs)</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Security Operations Center (SOC): Collaborate with your SOC team to gain insights into recent security incidents involving remote users, identify common attack vectors, and understand the effectiveness of current security controls. (Source: Security Operations Center Activity Logs, Security Incident Reports)</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Internal Security Audit Reports: Review recent internal security audits for findings related to remote work security practices, endpoint configurations, and access controls. These reports often highlight potential weaknesses and offer remediation recommendations. (Source: Internal Security Audit Report)</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">External Resources:</p>
                <ul className="list-disc mb-[8px]">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">{`Industry Benchmarks: Compare your organization's remote workforce security posture with industry benchmarks and best practices published by reputable security organizations. This can help identify areas where you fall short and prioritize improvement efforts. (Source: Industry Cybersecurity Reports, Cybersecurity Frameworks)`}</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">Threat Intelligence Feeds: Subscribe to threat intelligence feeds that track emerging threats specifically targeting remote workers. These feeds can alert you to new attack methods and help you proactively adjust your security controls. (Source: Cybersecurity Threat Intelligence Feeds)</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Penetration Testing and Vulnerability Assessments: Consider engaging external security experts to conduct penetration testing and vulnerability assessments specifically focused on your remote work environment. These assessments can uncover hidden weaknesses and provide valuable insights for improvement. (Source: External Security Assessment Reports)</span>
                  </li>
                </ul>
                <p className="leading-[20px] mb-[8px]">Remember, a comprehensive assessment requires a combination of internal data analysis, external expertise, and ongoing monitoring. Utilize these resources effectively and adapt your approach based on evolving threats and the unique needs of your remote workforce.</p>
                <p className="leading-[20px] mb-[8px]">Additional Notes:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[20px]">This list is not exhaustive, and additional resources might be available depending on your specific needs and budget.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[20px]">Consider sharing your assessment findings with key stakeholders within the organization to raise awareness and promote a culture of cybersecurity shared responsibility.</span>
                  </li>
                </ul>
              </div>
              <div className="absolute contents left-[9px] top-[-161px]" data-node-id="1345:5565">
                <div className="absolute contents left-[9px] top-[-161px]" data-node-id="1345:5566">
                  <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-160px] whitespace-nowrap" data-node-id="1345:5567" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                  <div className="absolute left-[9px] size-[15px] top-[-161px]" data-node-id="1345:5568">
                    <div className="absolute left-0 size-[15px] top-0" data-node-id="1345:5569">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-3789px]" data-node-id="1345:5574">
              <div className="absolute contents left-[9px] top-[-3789px]" data-node-id="1345:5575">
                <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[28px] text-[#00c2a7] text-[12px] top-[-3788px] whitespace-nowrap" data-node-id="1345:5576" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
                <div className="absolute left-[9px] size-[15px] top-[-3789px]" data-node-id="1345:5577">
                  <div className="absolute left-0 size-[15px] top-0" data-node-id="1345:5578">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgGroup873} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-3872px]" data-node-id="1345:5583">
              <div className="absolute contents left-[746px] top-[-3872px]" data-node-id="1345:5584">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-3870px] whitespace-nowrap" data-node-id="1345:5585" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-3872px]" data-node-id="1345:5586" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-3788px]" data-node-id="1345:5588">
                <div className="absolute contents left-[745px] top-[-3728px]" data-node-id="1345:5589">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-3726px] whitespace-nowrap" data-node-id="1345:5590" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-3728px]" data-node-id="1345:5591" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[745px] top-[-3758px]" data-node-id="1345:5593">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-3756px] whitespace-nowrap" data-node-id="1345:5594" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-3758px]" data-node-id="1345:5595" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[745px] top-[-3788px]" data-node-id="1345:5597">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-3785px] whitespace-nowrap" data-node-id="1345:5598" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-3788px]" data-node-id="1345:5599" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-3163px]" data-node-id="1345:5601">
              <div className="absolute contents left-[746px] top-[-3163px]" data-node-id="1345:5602">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-3161px] whitespace-nowrap" data-node-id="1345:5603" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-3163px]" data-node-id="1345:5604" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-3079px]" data-node-id="1345:5606">
                <div className="absolute contents left-[745px] top-[-3019px]" data-node-id="1345:5607">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-3017px] whitespace-nowrap" data-node-id="1345:5608" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-3019px]" data-node-id="1345:5609" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[745px] top-[-3049px]" data-node-id="1345:5611">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-3047px] whitespace-nowrap" data-node-id="1345:5612" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-3049px]" data-node-id="1345:5613" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[745px] top-[-3079px]" data-node-id="1345:5615">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-3076px] whitespace-nowrap" data-node-id="1345:5616" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-3079px]" data-node-id="1345:5617" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-2499px]" data-node-id="1345:5619">
              <div className="absolute contents left-[746px] top-[-2499px]" data-node-id="1345:5620">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-2497px] whitespace-nowrap" data-node-id="1345:5621" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-2499px]" data-node-id="1345:5622" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-2415px]" data-node-id="1345:5624">
                <div className="absolute contents left-[745px] top-[-2355px]" data-node-id="1345:5625">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-2353px] whitespace-nowrap" data-node-id="1345:5626" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-2355px]" data-node-id="1345:5627" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[745px] top-[-2385px]" data-node-id="1345:5629">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-2383px] whitespace-nowrap" data-node-id="1345:5630" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-2385px]" data-node-id="1345:5631" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <div className="absolute contents left-[745px] top-[-2415px]" data-node-id="1345:5633">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-2412px] whitespace-nowrap" data-node-id="1345:5634" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-2415px]" data-node-id="1345:5635" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-1716px]" data-node-id="1345:5637">
              <div className="absolute contents left-[746px] top-[-1716px]" data-node-id="1345:5638">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-1714px] whitespace-nowrap" data-node-id="1345:5639" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-1716px]" data-node-id="1345:5640" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-1632px]" data-node-id="1345:5642">
                <div className="absolute contents left-[745px] top-[-1572px]" data-node-id="1345:5643">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1570px] whitespace-nowrap" data-node-id="1345:5644" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-1572px]" data-node-id="1345:5645" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <button className="absolute contents cursor-pointer left-[745px] top-[-1602px]" data-node-id="1345:5647">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-1600px] whitespace-nowrap" data-node-id="1345:5648" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-1602px]" data-node-id="1345:5649" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </button>
                <div className="absolute contents left-[745px] top-[-1632px]" data-node-id="1345:5651">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-1629px] whitespace-nowrap" data-node-id="1345:5652" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-1632px]" data-node-id="1345:5653" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-1044px]" data-node-id="1345:5655">
              <div className="absolute contents left-[746px] top-[-1044px]" data-node-id="1345:5656">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-1042px] whitespace-nowrap" data-node-id="1345:5657" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-1044px]" data-node-id="1345:5658" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-942px]" data-node-id="1345:5660">
                <div className="absolute contents left-[745px] top-[-882px]" data-node-id="1345:5661">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-880px] whitespace-nowrap" data-node-id="1345:5662" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-882px]" data-node-id="1345:5663" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <button className="absolute contents cursor-pointer left-[745px] top-[-912px]" data-node-id="1345:5665">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-910px] whitespace-nowrap" data-node-id="1345:5666" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-912px]" data-node-id="1345:5667" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </button>
                <div className="absolute contents left-[745px] top-[-942px]" data-node-id="1345:5669">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-939px] whitespace-nowrap" data-node-id="1345:5670" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-942px]" data-node-id="1345:5671" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgRedoFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[745px] top-[-238px]" data-node-id="1345:5673">
              <div className="absolute contents left-[746px] top-[-238px]" data-node-id="1345:5674">
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-236px] whitespace-nowrap" data-node-id="1345:5675" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit question
                </p>
                <div className="absolute left-[746px] size-[20px] top-[-238px]" data-node-id="1345:5676" data-name="edit_note_FILL0_wght400_GRAD0_opsz20 1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEditNoteFill0Wght400Grad0Opsz201} />
                </div>
              </div>
              <div className="absolute contents left-[745px] top-[-154px]" data-node-id="1345:5678">
                <div className="absolute contents left-[745px] top-[-94px]" data-node-id="1345:5679">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-92px] whitespace-nowrap" data-node-id="1345:5680" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Export response
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-94px]" data-node-id="1345:5681" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
                  </div>
                </div>
                <button className="absolute contents cursor-pointer left-[745px] top-[-124px]" data-node-id="1345:5683">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[767px] text-[#d0bcff] text-[12px] top-[-122px] whitespace-nowrap" data-node-id="1345:5684" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Check sources
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-124px]" data-node-id="1345:5685" data-name="verified_FILL0_wght400_GRAD0_opsz20 1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVerifiedFill0Wght400Grad0Opsz201} />
                  </div>
                </button>
                <div className="absolute contents left-[745px] top-[-154px]" data-node-id="1345:5687">
                  <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-151px] whitespace-nowrap" data-node-id="1345:5688" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Regenerate
                  </p>
                  <div className="absolute left-[745px] size-[20px] top-[-154px]" data-node-id="1345:5689" data-name="redo_FILL0_wght400_GRAD0_opsz20 1">
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
          <div className="absolute flex h-[38px] items-center justify-center left-[856px] top-[10px] w-0" data-node-id="1304:8391">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[38px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine217} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#202125] border border-[#3c3d42] border-solid h-[543px] left-0 overflow-auto top-[58px] w-[980px]" data-node-id="1304:8392">
            <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[21px] text-[16px] text-[color:var(--white,white)] top-[20px] tracking-[0.15px] whitespace-nowrap" data-node-id="1304:8393" style={{ fontVariationSettings: '"wdth" 100' }}>
              Phishing simulation effectiveness report
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[21px] text-[14px] text-white top-[47px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8394" style={{ fontVariationSettings: '"wdth" 100' }}>
              21-Mar-2024
            </p>
            <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[21px] text-[14px] text-white top-[364px] tracking-[0.25px] w-[695px]" data-node-id="1304:8395" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-[8px]">This report analyzes the effectiveness of recent phishing simulations conducted within your organization.</p>
              <p className="leading-[20px] mb-[8px]">Click-Through Rates:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Overall click-through rate: 12.5%</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">{`Highest click-through rate department: Marketing & Communications (25%)`}</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">{`Lowest click-through rate department: Finance & Accounting (8%)`}</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-[8px]">Most Susceptible Departments:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">{`Marketing & Communications: High volume of external emails, potential susceptibility to social engineering tactics, recent successful phishing attack.`}</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">{`Sales & Business Development: Frequent interaction with external clients, pressure to respond quickly to emails.`}</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Human Resources: Access to sensitive employee data, potential for spear phishing attacks.</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-[8px]">Common Vulnerabilities Exploited:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Spoofed sender addresses: Emails appearing to come from legitimate sources like colleagues or IT support.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Urgent language: Messages creating a sense of urgency or deadlines to pressure users into clicking.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Malicious attachments: Infected documents or files disguised as legitimate documents.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Suspicious links: Links leading to phishing websites designed to steal user credentials.</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-[8px]">Overall Effectiveness:</p>
              <p className="leading-[20px] mb-[8px]">While the overall click-through rate is below industry average, significant disparities exist across departments. This suggests targeted training and improvement strategies are needed.</p>
              <p className="leading-[20px] mb-[8px]">Suggested Areas for Improvement:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Targeted simulations: Design simulations specific to department roles and vulnerabilities identified above.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Increased training frequency: Consider more frequent simulations to maintain awareness and adapt to evolving tactics.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Incorporate real-world scenarios: Use realistic and up-to-date phishing methods to better mimic actual threats.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Post-click training: Provide targeted training modules for individuals who click on phishing attempts.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Gamification and incentives: Encourage participation and engagement through gamified elements and small rewards.</span>
                </li>
              </ul>
              <p className="leading-[20px] mb-[8px]">Uploaded Documents:</p>
              <ul className="list-disc mb-[8px]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Phishing Simulation Results (Internal File): Analyzed click-through rates, department performance, and individual data.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[20px]">Employee Training Records (HR Database): Identified departments with lower training completion rates.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[20px]">Recent Security Incident Reports (Internal Documents): Highlighted targeted attacks on specific departments.</span>
                </li>
              </ul>
              <p className="leading-[20px]">Disclaimer: This report is based on the data uploaded and may not represent the entirety of your phishing simulation efforts.</p>
            </div>
            <div className="absolute bg-[#323338] h-[167px] left-[21px] rounded-[4px] top-[171px] w-[933px]" data-node-id="1304:8396" />
            <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col items-center justify-center left-[766px] overflow-clip rounded-[100px] top-[185px]" data-node-id="1304:8397" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1304:8398" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1304:8399" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Upload documents</p>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-roboto font-bold leading-[20px] left-[35px] text-[14px] text-white top-[185px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8400" style={{ fontVariationSettings: '"wdth" 100' }}>
              Uploaded documents
            </p>
            <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[35px] text-[#d0bcff] text-[14px] top-[218px] tracking-[0.25px] whitespace-nowrap" data-node-id="1304:8401" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Phishing_Simulation_Results_2024.xlsx</p>
              <p className="leading-[20px] mb-0">Employee_Training_Records_2023.csv</p>
              <p className="leading-[20px] mb-0">Security_Incident_Reports_Q4_2023.pdf</p>
              <p className="leading-[20px] mb-0">Security_Incident_Reports_Q3_2023.pdf</p>
              <p className="leading-[20px]">Security_Incident_Reports_Q2_2023.pdf</p>
            </div>
            <div className="absolute contents left-[331px] top-[24px]" data-node-id="1304:8402">
              <div className="absolute bg-[#141218] border border-[#696969] border-solid h-[20px] left-[332px] rounded-[12px] top-[25px] w-[94px]" data-node-id="1304:8403" />
              <div className="absolute left-[338px] size-[12px] top-[29px]" data-node-id="1304:8404">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse14} />
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[385px] text-[11px] text-center text-white top-[29px] tracking-[0.1px] whitespace-nowrap" data-node-id="1304:8405" style={{ fontVariationSettings: '"wdth" 100' }}>
                COMPLETE
              </p>
            </div>
            <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[149px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1304:8406" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1304:8406;53923:27782" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1304:8406;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Export</p>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col h-[40px] items-center justify-center left-[21px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1304:8407" data-name="Button-dark">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1304:8408" data-name="state-layer">
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1304:8409" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Bookmark</p>
                </div>
              </div>
            </div>
          </div>
          <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-0 rounded-tl-[4px] rounded-tr-[4px] top-[610px] w-[980px]" data-node-id="1451:12346" data-name="Text field-dark">
            <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1451:12346;52798:26685" data-name="text field">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1451:12346;52798:26686" data-name="state-layer">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1451:12346;52798:26687" data-name="content">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1451:12346;52798:26688" data-name="label-text">
                    <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1451:12346;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Any edits Arqui should make
                    </p>
                  </div>
                </div>
                <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1451:12346;52798:26690" data-name="trailing-icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1451:12346;52798:26690;51525:5137" data-name="container">
                    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1451:12346;52798:26690;51525:5138" data-name="state-layer">
                      <div className="relative shrink-0 size-[24px]" data-node-id="I1451:12346;52798:26690;51525:5139" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIconsSendFill0Wght400Grad0Opsz241} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="I1451:12346;52798:26691" data-name="Active indicator">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator2} />
              </div>
            </div>
          </button>
        </>
      )}
    </div>
  );
}