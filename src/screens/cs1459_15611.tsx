import { A } from '../assets/acs1459_15611';


type ContentStatesProps = {
  className?: string;
  property1?: "Chat" | "Chat History" | "Chat Summary" | "Actions" | "Deliverables" | "Collaborators 1" | "Variant7";
};

export default function ContentStates({ className, property1 = "Chat" }: ContentStatesProps) {
  const isActions = property1 === "Actions";
  const isActionsOrDeliverables = ["Actions", "Deliverables"].includes(property1);
  const isChat = property1 === "Chat";
  const isChatHistory = property1 === "Chat History";
  const isChatOrChatSummaryOrCollaborators1OrActionsOrDeliverables = ["Chat", "Chat Summary", "Collaborators 1", "Actions", "Deliverables"].includes(property1);
  const isChatSummary = property1 === "Chat Summary";
  const isCollaborators1 = property1 === "Collaborators 1";
  const isCollaborators1OrVariant7 = ["Collaborators 1", "Variant7"].includes(property1);
  const isDeliverables = property1 === "Deliverables";
  const isVariant7 = property1 === "Variant7";
  return (
    <div className={className || "h-[681px] relative w-[1087px]"} id={isVariant7 ? "node-1459_15777" : isDeliverables ? "node-1459_15747" : isActions ? "node-1459_15737" : isCollaborators1 ? "node-1459_15721" : isChatSummary ? "node-1459_15711" : isChat ? "node-1459_15620" : "node-1459_15612"}>
      <div className="absolute contents left-0 top-0" id={isVariant7 ? "node-1459_15778" : isDeliverables ? "node-1459_15748" : isActions ? "node-1459_15738" : isCollaborators1 ? "node-1459_15722" : isChatSummary ? "node-1459_15712" : isChat ? "node-1459_15621" : "node-1459_15613"}>
        <div className="absolute h-0 left-0 top-[49px] w-[1087px]" id={isVariant7 ? "node-1459_15779" : isDeliverables ? "node-1459_15749" : isActions ? "node-1459_15739" : isCollaborators1 ? "node-1459_15723" : isChatSummary ? "node-1459_15713" : isChat ? "node-1459_15622" : "node-1459_15614"}>
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={A.imgLine198} />
          </div>
        </div>
        {["Chat History", "Chat", "Chat Summary", "Collaborators 1", "Actions", "Deliverables"].includes(property1) && (
          <div className="absolute bg-[#202125] content-stretch flex flex-col items-start left-[8px] top-0 w-[772px]" id={isDeliverables ? "node-1459_15750" : isActions ? "node-1459_15740" : isCollaborators1 ? "node-1459_15724" : isChatSummary ? "node-1459_15714" : isChat ? "node-1459_15623" : "node-1459_15615"} data-name="Tabs-dark">
            <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" id={isDeliverables ? "node-I1459_15750-54563_40455" : isActions ? "node-I1459_15740-54563_40455" : isCollaborators1 ? "node-I1459_15724-54563_40455" : isChatSummary ? "node-I1459_15714-54563_40455" : isChat ? "node-I1459_15623-54563_40455" : "node-I1459_15615-54563_40455"} data-name="Tab group">
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1459_15750-54563_40456" : isActions ? "node-I1459_15740-54563_40456" : isCollaborators1 ? "node-I1459_15724-54563_40456" : isChatSummary ? "node-I1459_15714-54563_40456" : isChat ? "node-I1459_15623-54563_40456" : "node-I1459_15615-54563_40456"} data-name="Tab 1">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1459_15750-54563_40456-54563_40769" : isActions ? "node-I1459_15740-54563_40456-54563_40769" : isCollaborators1 ? "node-I1459_15724-54563_40456-54563_40769" : isChatSummary ? "node-I1459_15714-54563_40456-54563_40769" : isChat ? "node-I1459_15623-54563_40456-54563_40740" : "node-I1459_15615-54563_40456-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1459_15750-54563_40456-54563_40770" : isActions ? "node-I1459_15740-54563_40456-54563_40770" : isCollaborators1 ? "node-I1459_15724-54563_40456-54563_40770" : isChatSummary ? "node-I1459_15714-54563_40456-54563_40770" : isChat ? "node-I1459_15623-54563_40456-54563_40741" : "node-I1459_15615-54563_40456-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChat ? "text-[#ccc2dc]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1459_15750-54563_40456-54563_40771" : isActions ? "node-I1459_15740-54563_40456-54563_40771" : isCollaborators1 ? "node-I1459_15724-54563_40456-54563_40771" : isChatSummary ? "node-I1459_15714-54563_40456-54563_40771" : isChat ? "node-I1459_15623-54563_40456-54563_40742" : "node-I1459_15615-54563_40456-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">{`Chat `}</p>
                    </div>
                  </div>
                  {isChat && <div className="absolute bg-[#ccc2dc] bottom-0 h-[2px] left-0 right-0" data-node-id="I1459:15623;54563:40456;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1459_15750-54563_40457" : isActions ? "node-I1459_15740-54563_40457" : isCollaborators1 ? "node-I1459_15724-54563_40457" : isChatSummary ? "node-I1459_15714-54563_40457" : isChat ? "node-I1459_15623-54563_40457" : "node-I1459_15615-54563_40457"} data-name="Tab 2">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1459_15750-54563_40457-54563_40769" : isActions ? "node-I1459_15740-54563_40457-54563_40769" : isCollaborators1 ? "node-I1459_15724-54563_40457-54563_40769" : isChatSummary ? "node-I1459_15714-54563_40457-54563_40769" : isChat ? "node-I1459_15623-54563_40457-54563_40769" : "node-I1459_15615-54563_40457-54563_40740"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1459_15750-54563_40457-54563_40770" : isActions ? "node-I1459_15740-54563_40457-54563_40770" : isCollaborators1 ? "node-I1459_15724-54563_40457-54563_40770" : isChatSummary ? "node-I1459_15714-54563_40457-54563_40770" : isChat ? "node-I1459_15623-54563_40457-54563_40770" : "node-I1459_15615-54563_40457-54563_40741"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChatOrChatSummaryOrCollaborators1OrActionsOrDeliverables ? "text-[#d0bcff]" : "text-[#e6e0e9]"}`} id={isDeliverables ? "node-I1459_15750-54563_40457-54563_40771" : isActions ? "node-I1459_15740-54563_40457-54563_40771" : isCollaborators1 ? "node-I1459_15724-54563_40457-54563_40771" : isChatSummary ? "node-I1459_15714-54563_40457-54563_40771" : isChat ? "node-I1459_15623-54563_40457-54563_40771" : "node-I1459_15615-54563_40457-54563_40742"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat history</p>
                    </div>
                  </div>
                  {isChatHistory && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1459:15615;54563:40457;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1459_15750-54563_40458" : isActions ? "node-I1459_15740-54563_40458" : isCollaborators1 ? "node-I1459_15724-54563_40458" : isChatSummary ? "node-I1459_15714-54563_40458" : isChat ? "node-I1459_15623-54563_40458" : "node-I1459_15615-54563_40458"} data-name="Tab 3">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1459_15750-54563_40458-54563_40769" : isActions ? "node-I1459_15740-54563_40458-54563_40769" : isCollaborators1 ? "node-I1459_15724-54563_40458-54563_40769" : isChatSummary ? "node-I1459_15714-54563_40458-54563_40740" : isChat ? "node-I1459_15623-54563_40458-54563_40769" : "node-I1459_15615-54563_40458-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1459_15750-54563_40458-54563_40770" : isActions ? "node-I1459_15740-54563_40458-54563_40770" : isCollaborators1 ? "node-I1459_15724-54563_40458-54563_40770" : isChatSummary ? "node-I1459_15714-54563_40458-54563_40741" : isChat ? "node-I1459_15623-54563_40458-54563_40770" : "node-I1459_15615-54563_40458-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isChatSummary ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1459_15750-54563_40458-54563_40771" : isActions ? "node-I1459_15740-54563_40458-54563_40771" : isCollaborators1 ? "node-I1459_15724-54563_40458-54563_40771" : isChatSummary ? "node-I1459_15714-54563_40458-54563_40742" : isChat ? "node-I1459_15623-54563_40458-54563_40771" : "node-I1459_15615-54563_40458-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Chat summary</p>
                    </div>
                  </div>
                  {isChatSummary && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1459:15714;54563:40458;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1459_15750-54563_40459" : isActions ? "node-I1459_15740-54563_40459" : isCollaborators1 ? "node-I1459_15724-54563_40459" : isChatSummary ? "node-I1459_15714-54563_40459" : isChat ? "node-I1459_15623-54563_40459" : "node-I1459_15615-54563_40459"} data-name="Tab 4">
                {isChatOrChatSummaryOrCollaborators1OrActionsOrDeliverables && (
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1459_15750-54563_40459-54563_40769" : isActions ? "node-I1459_15740-54563_40459-54563_40740" : isCollaborators1 ? "node-I1459_15724-54563_40459-54563_40769" : isChatSummary ? "node-I1459_15714-54563_40459-54563_40769" : "node-I1459_15623-54563_40459-54563_40769"} data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1459_15750-54563_40459-54563_40770" : isActions ? "node-I1459_15740-54563_40459-54563_40741" : isCollaborators1 ? "node-I1459_15724-54563_40459-54563_40770" : isChatSummary ? "node-I1459_15714-54563_40459-54563_40770" : "node-I1459_15623-54563_40459-54563_40770"} data-name="Tab Contents">
                      <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isActions ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1459_15750-54563_40459-54563_40771" : isActions ? "node-I1459_15740-54563_40459-54563_40742" : isCollaborators1 ? "node-I1459_15724-54563_40459-54563_40771" : isChatSummary ? "node-I1459_15714-54563_40459-54563_40771" : "node-I1459_15623-54563_40459-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Actions</p>
                      </div>
                    </div>
                    {isActions && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1459:15740;54563:40459;54563:40744" data-name="Indicator" />}
                  </div>
                )}
                {isChatHistory && (
                  <button className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="I1459:15615;54563:40459;54563:40769" data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-node-id="I1459:15615;54563:40459;54563:40770" data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15615;54563:40459;54563:40771" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Actions</p>
                      </div>
                    </div>
                  </button>
                )}
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1459_15750-54563_40460" : isActions ? "node-I1459_15740-54563_40460" : isCollaborators1 ? "node-I1459_15724-54563_40460" : isChatSummary ? "node-I1459_15714-54563_40460" : isChat ? "node-I1459_15623-54563_40460" : "node-I1459_15615-54563_40460"} data-name="Tab 5">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1459_15750-54563_40460-54563_40740" : isActions ? "node-I1459_15740-54563_40460-54563_40769" : isCollaborators1 ? "node-I1459_15724-54563_40460-54563_40769" : isChatSummary ? "node-I1459_15714-54563_40460-54563_40769" : isChat ? "node-I1459_15623-54563_40460-54563_40769" : "node-I1459_15615-54563_40460-54563_40769"} data-name="State-layer">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1459_15750-54563_40460-54563_40741" : isActions ? "node-I1459_15740-54563_40460-54563_40770" : isCollaborators1 ? "node-I1459_15724-54563_40460-54563_40770" : isChatSummary ? "node-I1459_15714-54563_40460-54563_40770" : isChat ? "node-I1459_15623-54563_40460-54563_40770" : "node-I1459_15615-54563_40460-54563_40770"} data-name="Tab Contents">
                    <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isDeliverables ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isDeliverables ? "node-I1459_15750-54563_40460-54563_40742" : isActions ? "node-I1459_15740-54563_40460-54563_40771" : isCollaborators1 ? "node-I1459_15724-54563_40460-54563_40771" : isChatSummary ? "node-I1459_15714-54563_40460-54563_40771" : isChat ? "node-I1459_15623-54563_40460-54563_40771" : "node-I1459_15615-54563_40460-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Deliverables</p>
                    </div>
                  </div>
                  {isDeliverables && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1459:15750;54563:40460;54563:40744" data-name="Indicator" />}
                </div>
              </div>
              <div className="bg-[#202125] content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-w-px overflow-clip relative" id={isDeliverables ? "node-I1459_15750-54847_25133" : isActions ? "node-I1459_15740-54847_25133" : isCollaborators1 ? "node-I1459_15724-54847_25133" : isChatSummary ? "node-I1459_15714-54847_25133" : isChat ? "node-I1459_15623-54847_25133" : "node-I1459_15615-54847_25133"} data-name="Tab 6">
                {["Chat History", "Chat", "Chat Summary", "Collaborators 1"].includes(property1) && (
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isCollaborators1 ? "node-I1459_15724-54847_25133-54563_40740" : isChatSummary ? "node-I1459_15714-54847_25133-54563_40769" : isChat ? "node-I1459_15623-54847_25133-54563_40769" : "node-I1459_15615-54847_25133-54563_40769"} data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isCollaborators1 ? "node-I1459_15724-54847_25133-54563_40741" : isChatSummary ? "node-I1459_15714-54847_25133-54563_40770" : isChat ? "node-I1459_15623-54847_25133-54563_40770" : "node-I1459_15615-54847_25133-54563_40770"} data-name="Tab Contents">
                      <div className={`[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${isCollaborators1 ? "text-[#e6e0e9]" : "text-[#d0bcff]"}`} id={isCollaborators1 ? "node-I1459_15724-54847_25133-54563_40742" : isChatSummary ? "node-I1459_15714-54847_25133-54563_40771" : isChat ? "node-I1459_15623-54847_25133-54563_40771" : "node-I1459_15615-54847_25133-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">{isCollaborators1 ? "Collaborators (2)" : ["Chat History", "Chat Summary"].includes(property1) ? "Collaborators" : "Collaborators"}</p>
                      </div>
                    </div>
                    {isCollaborators1 && <div className="absolute bg-[#d0bcff] bottom-0 h-[2px] left-0 right-0" data-node-id="I1459:15724;54847:25133;54563:40744" data-name="Indicator" />}
                  </div>
                )}
                {isActionsOrDeliverables && (
                  <button className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip px-[16px] py-[14px] relative w-full" id={isDeliverables ? "node-I1459_15750-54847_25133-54563_40769" : "node-I1459_15740-54847_25133-54563_40769"} data-name="State-layer">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" id={isDeliverables ? "node-I1459_15750-54847_25133-54563_40770" : "node-I1459_15740-54847_25133-54563_40770"} data-name="Tab Contents">
                      <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" id={isDeliverables ? "node-I1459_15750-54847_25133-54563_40771" : "node-I1459_15740-54847_25133-54563_40771"} style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[20px]">Collaborators</p>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
            <div className="h-px relative shrink-0 w-full" id={isDeliverables ? "node-I1459_15750-54563_40461" : isActions ? "node-I1459_15740-54563_40461" : isCollaborators1 ? "node-I1459_15724-54563_40461" : isChatSummary ? "node-I1459_15714-54563_40461" : isChat ? "node-I1459_15623-54563_40461" : "node-I1459_15615-54563_40461"} data-name="Divider">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgDivider} />
            </div>
          </div>
        )}
        {isVariant7 && (
          <>
            <div className="absolute bg-[#3c3d42] h-[58px] left-0 rounded-tl-[12px] rounded-tr-[12px] top-0 w-[1087px]" data-node-id="1459:15780" />
            <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[970px] overflow-clip rounded-[100px] top-[9px]" data-node-id="1459:15781" data-name="Button-dark">
              <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15781;53923:27766" data-name="state-layer">
                <div className="relative shrink-0 size-[18px]" data-node-id="I1459:15781;53923:27767" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIcon} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15781;53923:27768" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">Close</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {["Chat History", "Chat Summary", "Collaborators 1", "Actions", "Deliverables", "Variant7"].includes(property1) && (
        <div className={`absolute ${isVariant7 ? '-translate-x-1/2 -translate-y-1/2 [word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] left-[111.5px] text-[20px] text-center text-white top-[31px] tracking-[0.15px] whitespace-nowrap' : isDeliverables ? "bg-[#202125] h-[622px] left-0 overflow-x-clip overflow-y-auto top-[49px] w-[1072px]" : ["Collaborators 1", "Actions"].includes(property1) ? "bg-[#202125] h-[629px] left-0 overflow-clip top-[49px] w-[1072px]" : isChatSummary ? "bg-[#202125] h-[632px] left-0 overflow-x-clip overflow-y-auto top-[49px] w-[1068px]" : "[word-break:break-word] bg-[#202125] h-[628px] left-0 overflow-clip top-[49px] w-[1072px]"}`} id={isVariant7 ? "node-1459_15782" : isDeliverables ? "node-1459_15751" : isActions ? "node-1459_15741" : isCollaborators1 ? "node-1459_15725" : isChatSummary ? "node-1459_15715" : "node-1459_15616"} style={isVariant7 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
          {["Chat History", "Actions", "Deliverables", "Variant7"].includes(property1) && (
            <p className={`leading-[24px] ${isVariant7 ? "" : isDeliverables ? '[word-break:break-word] absolute font-roboto font-medium left-[22px] text-[16px] text-white top-[21px] tracking-[0.15px] whitespace-nowrap' : isActions ? '[word-break:break-word] absolute font-roboto font-medium left-[22px] text-[16px] text-white top-[14px] tracking-[0.15px] whitespace-nowrap' : 'absolute font-roboto font-medium left-[22px] text-[16px] text-white top-[21px] tracking-[0.15px] whitespace-nowrap'}`} id={isDeliverables ? "node-1459_15752" : isActions ? "node-1459_15742" : isChatHistory ? "node-1459_15617" : undefined} style={["Chat History", "Actions", "Deliverables"].includes(property1) ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isVariant7 ? "Detailed deliverable" : isDeliverables ? "Deliverables" : isActions ? "Actions (3)" : isChatHistory ? "Chat history (6 questions)" : ""}
            </p>
          )}
          {["Chat History", "Actions"].includes(property1) && (
            <div className={`absolute font-roboto font-normal leading-[0] text-[14px] text-white tracking-[0.25px] ${isActions ? "[word-break:break-word] h-[120px] left-[26px] top-[84px] w-[820px]" : "h-[390px] left-[117px] top-[64px] w-[615px]"}`} id={isActions ? "node-1459_15743" : "node-1459_15618"} style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className={`leading-[20px] ${isActions ? "mb-0" : "mb-[8px]"}`}>{isActions ? "Action 1" : isChatHistory ? "What specific skill gaps are most prevalent in the R&D department?" : ""}</p>
              <p className={`leading-[20px] ${isActions ? "" : "mb-[8px]"}`}>{isActions ? "​" : isChatHistory ? "Which innovation projects have been most impacted due to these skill gaps?" : ""}</p>
              {isChatHistory && (
                <>
                  <p className="leading-[20px] mb-[8px]">{`Are there industry benchmarks for R&D skills that we can compare ourselves against?`}</p>
                  <p className="leading-[20px]">What are potential solutions for filling these skill gaps: upskilling, targeted recruitment, or partnerships?</p>
                </>
              )}
            </div>
          )}
          {isActionsOrDeliverables && (
            <>
              <p className={`[word-break:break-word] absolute leading-[20px] left-[26px] text-[14px] tracking-[0.25px] whitespace-nowrap ${isDeliverables ? 'font-roboto font-bold text-white top-[98px]' : 'font-roboto font-normal text-[#d0bcff] top-[111px]'}`} id={isDeliverables ? "node-1459_15753" : "node-1459_15744"} style={{ fontVariationSettings: '"wdth" 100' }}>
                {isDeliverables ? "Action" : isActions ? "Arqui can help with 3 deliverables" : ""}
              </p>
              <p className={`[word-break:break-word] absolute leading-[20px] text-[14px] tracking-[0.25px] whitespace-nowrap ${isDeliverables ? 'font-roboto font-bold left-[26px] text-white top-[753px]' : 'font-roboto font-normal left-[41px] text-[#959595] top-[46px]'}`} id={isDeliverables ? "node-1459_15754" : "node-1459_15745"} style={{ fontVariationSettings: '"wdth" 100' }}>
                {isDeliverables ? "Action: Strengthen Endpoint Security and Vulnerability Management" : isActions ? "Note: The list of actions is updated every time you ask a question." : ""}
              </p>
            </>
          )}
          {isChatHistory && (
            <div className="absolute font-roboto font-normal leading-[0] left-[32px] text-[#d0bcff] text-[14px] top-[64px] tracking-[0.25px] w-[73px] whitespace-pre-wrap" data-node-id="1459:15619" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-[8px]">{`Question 1 `}</p>
              <p className="leading-[20px] mb-[8px]">{`Question 2 `}</p>
              <p className="leading-[20px] mb-[8px]">{`Question 3 `}</p>
              <p className="leading-[20px]">Question 4</p>
            </div>
          )}
          {isChatSummary && (
            <>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[683px] overflow-clip rounded-[100px] top-[15px]" data-node-id="1459:15716" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15716;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15716;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Export summary</p>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[22px] text-[16px] text-white top-[18px] tracking-[0.15px] whitespace-nowrap" data-node-id="1459:15717" style={{ fontVariationSettings: '"wdth" 100' }}>
                Chat summary
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[43px] text-[#959595] text-[14px] top-[45px] tracking-[0.25px] whitespace-nowrap" data-node-id="1459:15718" style={{ fontVariationSettings: '"wdth" 100' }}>
                Note: The chat summary is updated every time you ask a question.
              </p>
            </>
          )}
          {["Chat Summary", "Actions"].includes(property1) && (
            <div className={`absolute ${isActions ? "inset-[7.79%_96.64%_89.98%_2.05%]" : "inset-[7.59%_96.46%_90.19%_2.24%]"}`} id={isActions ? "node-1459_15746" : "node-1459_15719"} data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isActions ? A.imgVector2 : A.imgVector1} />
            </div>
          )}
          {["Chat Summary", "Deliverables"].includes(property1) && (
            <div className={`[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white tracking-[0.25px] ${isDeliverables ? "top-[166px] w-[691px]" : "h-[716px] top-[89px] w-[627px]"}`} id={isDeliverables ? "node-1459_15755" : "node-1459_15720"} style={{ fontVariationSettings: '"wdth" 100' }}>
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
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[34px] rounded-tl-[4px] rounded-tr-[4px] top-[308px] w-[348px]" data-node-id="1459:15726" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1459:15726;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1459:15726;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1459:15726;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1459:15726;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1459:15726;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1459:15726;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[34px] rounded-tl-[4px] rounded-tr-[4px] top-[225px] w-[348px]" data-node-id="1459:15727" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1459:15727;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1459:15727;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1459:15727;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1459:15727;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1459:15727;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1459:15727;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[34px] rounded-tl-[4px] rounded-tr-[4px] top-[391px] w-[348px]" data-node-id="1459:15728" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1459:15728;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1459:15728;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1459:15728;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1459:15728;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1459:15728;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1459:15728;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-[34px] rounded-tl-[4px] rounded-tr-[4px] top-[476px] w-[348px]" data-node-id="1459:15729" data-name="Text field-dark">
                <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1459:15729;52798:26731" data-name="text field">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px px-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1459:15729;52798:26732" data-name="state-layer">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1459:15729;52798:26733" data-name="content">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1459:15729;52798:26734" data-name="label-text">
                        <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1459:15729;52798:26735" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I1459:15729;52798:26736" data-name="Active indicator">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator1} />
                  </div>
                </div>
              </button>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[24px] left-[33px] text-[16px] text-white top-[18px] tracking-[0.15px] whitespace-nowrap" data-node-id="1459:15730" style={{ fontVariationSettings: '"wdth" 100' }}>
                Add collaborators
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[33px] text-[14px] text-white top-[57px] tracking-[0.25px] w-[702px]" data-node-id="1459:15731" style={{ fontVariationSettings: '"wdth" 100' }}>{`Collaborators will be able to contribute to the chat, and access all the other tabs within this insight. `}</p>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[32px] overflow-clip rounded-[100px] top-[561px]" data-node-id="1459:15732" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15732;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15732;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Send invite</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {isDeliverables && (
            <>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[832px] tracking-[0.25px] w-[668px]" data-node-id="1459:15756" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Anomaly Detection with Historical Trend Analysis:</p>
                <p className="leading-[20px]">Analyze historical network traffic, endpoint data, and user behavior within the digital twin to identify deviations from established patterns. Highlight potential anomalies that might indicate suspicious activity or emerging threats.</p>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[629px] tracking-[0.25px] w-[668px]" data-node-id="1459:15757" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">AI-Powered Vulnerability Prioritization</p>
                <p className="leading-[20px]">Analyze historical vulnerability scan data and threat intelligence feeds to prioritize vulnerabilities based on exploitability, potential impact, and available patches. This helps you focus your resources on addressing the most critical risks first.</p>
              </div>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[26px] text-[14px] text-white top-[960px] tracking-[0.25px] w-[668px]" data-node-id="1459:15758" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">Cybersecurity Maturity Assessment and Benchmarking</p>
                <p className="leading-[20px]">Utilise the digital twin and industry benchmarks to assess your overall cybersecurity maturity. Identify areas for improvement and track progress over time, fostering a data-driven approach to security enhancement.</p>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[937px] tracking-[0.25px] whitespace-nowrap" data-node-id="1459:15759" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[148px] tracking-[0.25px] whitespace-nowrap" data-node-id="1459:15760" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[26px] text-[#989898] text-[12px] top-[809px] tracking-[0.25px] whitespace-nowrap" data-node-id="1459:15761" style={{ fontVariationSettings: '"wdth" 100' }}>{`DELIVERABLE `}</p>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[162px]" data-node-id="1459:15762" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15762;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15762;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Open</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[829px]" data-node-id="1459:15763" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15763;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15763;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[629px]" data-node-id="1459:15764" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15764;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15764;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[743px] overflow-clip rounded-[100px] top-[960px]" data-node-id="1459:15765" data-name="Button-dark">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15765;53923:27782" data-name="state-layer">
                  <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15765;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Create</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[131px] w-[811px]" data-node-id="1459:15766">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[797px] w-[811px]" data-node-id="1459:15767">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[735px] w-[811px]" data-node-id="1459:15768">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <div className="absolute h-0 left-[22px] top-[1066px] w-[811px]" data-node-id="1459:15769">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={A.imgLine207} />
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[41px] text-[#959595] text-[14px] top-[53px] tracking-[0.25px] whitespace-nowrap" data-node-id="1459:15770" style={{ fontVariationSettings: '"wdth" 100' }}>
                Note: The list of suggested deliverables is updated every time you ask a question.
              </p>
              <div className="absolute inset-[9%_96.64%_88.75%_2.05%]" data-node-id="1459:15771" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector3} />
              </div>
              <div className="absolute contents left-[149px] top-[165px]" data-node-id="1459:15772">
                <div className="absolute bg-[#141218] border border-[#696969] border-solid h-[20px] left-[149px] rounded-[12px] top-[165px] w-[94px]" data-node-id="1459:15773" />
                <div className="absolute left-[155px] size-[12px] top-[169px]" data-node-id="1459:15774">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse13} />
                </div>
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[202px] text-[11px] text-center text-white top-[169px] tracking-[0.1px] whitespace-nowrap" data-node-id="1459:15775" style={{ fontVariationSettings: '"wdth" 100' }}>
                  COMPLETE
                </p>
              </div>
            </>
          )}
        </div>
      )}
      {isCollaborators1OrVariant7 && (
        <>
          <div className={`absolute flex justify-center ${isVariant7 ? "h-[38px] items-center left-[948px] top-[10px] w-0" : '-translate-y-1/2 [word-break:break-word] flex-col font-roboto font-normal leading-[0] left-[34px] right-[777px] text-[#cac4d0] text-[16px] top-[calc(50%-153.5px)] tracking-[0.5px] whitespace-nowrap'}`} id={isVariant7 ? "node-1459_15783" : "node-1459_15733"} style={isCollaborators1 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
            {isCollaborators1 && <p className="leading-[24px]">alex.clickworthy@acme.arqui.com.au</p>}
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
          <div className={`absolute ${isVariant7 ? "bg-[#202125] border border-[#3c3d42] border-solid h-[623px] left-0 overflow-auto top-[58px] w-[1087px]" : '-translate-y-1/2 [word-break:break-word] flex flex-col font-roboto font-normal justify-center leading-[0] left-[34px] right-[791px] text-[#cac4d0] text-[16px] top-[calc(50%-108.5px)] tracking-[0.5px] whitespace-nowrap'}`} id={isVariant7 ? "node-1459_15784" : "node-1459_15734"} style={isCollaborators1 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
            <p className={`leading-[24px] ${isVariant7 ? '[word-break:break-word] absolute font-roboto font-medium left-[21px] text-[16px] text-[color:var(--white,white)] top-[20px] tracking-[0.15px] whitespace-nowrap' : ""}`} id={isVariant7 ? "node-1459_15785" : undefined} style={isVariant7 ? { fontVariationSettings: '"wdth" 100' } : undefined}>
              {isVariant7 ? "Phishing simulation effectiveness report" : isCollaborators1 ? "jordan.phisher@acme.arqui.com.au" : ""}
            </p>
            {isVariant7 && (
              <>
                <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[21px] text-[14px] text-white top-[47px] tracking-[0.25px] whitespace-nowrap" data-node-id="1459:15786" style={{ fontVariationSettings: '"wdth" 100' }}>
                  21-Mar-2024
                </p>
                <div className="absolute bg-[#323338] h-[167px] left-[21px] rounded-[4px] top-[171px] w-[1045px]" data-node-id="1459:15787" />
                <div className="absolute border border-[#938f99] border-solid content-stretch flex flex-col items-center justify-center left-[879px] overflow-clip rounded-[100px] top-[185px]" data-node-id="1459:15788" data-name="Button-dark">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="1459:15789" data-name="state-layer">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="1459:15790" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Upload documents</p>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] absolute font-roboto font-bold leading-[20px] left-[35px] text-[14px] text-white top-[185px] tracking-[0.25px] whitespace-nowrap" data-node-id="1459:15791" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Uploaded documents
                </p>
                <div className="absolute contents left-[331px] top-[24px]" data-node-id="1459:15792">
                  <div className="absolute bg-[#141218] border border-[#696969] border-solid h-[20px] left-[332px] rounded-[12px] top-[25px] w-[94px]" data-node-id="1459:15793" />
                  <div className="absolute left-[338px] size-[12px] top-[29px]" data-node-id="1459:15794">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse13} />
                  </div>
                  <p className="-translate-x-1/2 [word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[385px] text-[11px] text-center text-white top-[29px] tracking-[0.1px] whitespace-nowrap" data-node-id="1459:15795" style={{ fontVariationSettings: '"wdth" 100' }}>
                    COMPLETE
                  </p>
                </div>
                <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[302px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1459:15796" data-name="Button-dark">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15796;53923:27782" data-name="state-layer">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15796;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Export</p>
                    </div>
                  </div>
                </div>
                <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[174px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1459:15797" data-name="Button-dark">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15797;53923:27782" data-name="state-layer">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15797;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Bookmark</p>
                    </div>
                  </div>
                </div>
                <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[21px] overflow-clip rounded-[100px] top-[85px]" data-node-id="1459:15798" data-name="Button-dark">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15798;53923:27782" data-name="state-layer">
                    <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15798;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">Comments (3)</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
      {isChat && (
        <>
          <button className="absolute content-stretch cursor-pointer flex flex-col h-[56px] items-start left-0 rounded-tl-[4px] rounded-tr-[4px] top-[625px] w-[702px]" data-node-id="1459:15624" data-name="Text field-dark">
            <div className="bg-[#36343b] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1459:15624;52798:26685" data-name="text field">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pl-[16px] py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-node-id="I1459:15624;52798:26686" data-name="state-layer">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-node-id="I1459:15624;52798:26687" data-name="content">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1459:15624;52798:26688" data-name="label-text">
                    <p className="[word-break:break-word] font-roboto font-normal leading-[24px] relative shrink-0 text-[#cac4d0] text-[16px] text-left tracking-[0.5px] whitespace-nowrap" data-node-id="I1459:15624;52798:26689" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Ask Arqui
                    </p>
                  </div>
                </div>
                <div className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-node-id="I1459:15624;52798:26690" data-name="trailing-icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-node-id="I1459:15624;52798:26690;51525:5137" data-name="container">
                    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="I1459:15624;52798:26690;51525:5138" data-name="state-layer">
                      <div className="relative shrink-0 size-[24px]" data-node-id="I1459:15624;52798:26690;51525:5139" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgIconsSendFill0Wght400Grad0Opsz241} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="I1459:15624;52798:26691" data-name="Active indicator">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={A.imgActiveIndicator} />
              </div>
            </div>
          </button>
          <div className="absolute bg-[#202125] h-[572px] left-0 overflow-x-clip overflow-y-auto top-[49px] w-[1072px]" data-node-id="1459:15625">
            <div className="absolute bg-[#2f3034] h-[81px] left-0 top-[-1256px] w-[714px]" data-node-id="1459:15626" />
            <div className="absolute bg-[#2f3034] h-[85px] left-0 top-[-310px] w-[714px]" data-node-id="1459:15627" />
            <div className="absolute bg-[#2f3034] h-[85px] left-0 top-[-36px] w-[714px]" data-node-id="1459:15628" />
            <div className="absolute bg-[#2f3034] h-[77px] left-0 top-[-922px] w-[714px]" data-node-id="1459:15629" />
            <div className="absolute bg-[#2f3034] h-[81px] left-0 top-[-647px] w-[714px]" data-node-id="1459:15630" />
            <div className="absolute contents left-[9px] top-[-1240px]" data-node-id="1459:15631">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-1212px] tracking-[0.25px] w-[693px]" data-node-id="1459:15632" style={{ fontVariationSettings: '"wdth" 100' }}>{`What specific skill gaps are most prevalent in the R&D department?`}</p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-1237.86px] whitespace-nowrap" data-node-id="1459:15633" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-216.78%_97.25%_313.57%_1.01%]" data-node-id="1459:15634" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-293px]" data-node-id="1459:15635">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-265px] tracking-[0.25px] w-[686px]" data-node-id="1459:15636" style={{ fontVariationSettings: '"wdth" 100' }}>
                What are potential solutions for filling these skill gaps: upskilling, targeted recruitment, or partnerships?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-290.86px] whitespace-nowrap" data-node-id="1459:15637" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-51.22%_97.25%_148.01%_1.01%]" data-node-id="1459:15638" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-19px]" data-node-id="1459:15639">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[9px] tracking-[0.25px] w-[686px]" data-node-id="1459:15640" style={{ fontVariationSettings: '"wdth" 100' }}>
                what aspects of the digital twin are impacted by this?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-16.86px] whitespace-nowrap" data-node-id="1459:15641" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-3.32%_97.25%_100.11%_1.01%]" data-node-id="1459:15642" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-907px]" data-node-id="1459:15643">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[20px] left-[9px] text-[14px] text-white top-[-879px] tracking-[0.25px] w-[688px]" data-node-id="1459:15644" style={{ fontVariationSettings: '"wdth" 100' }}>
                Which innovation projects have been most impacted due to these skill gaps?
              </p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-904.86px] whitespace-nowrap" data-node-id="1459:15645" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-158.57%_97.25%_255.35%_1.01%]" data-node-id="1459:15646" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-629px]" data-node-id="1459:15647">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[normal] left-[9px] text-[14px] text-white top-[-601px] w-[676px]" data-node-id="1459:15648" style={{ fontVariationSettings: '"wdth" 100' }}>{`Are there industry benchmarks for R&D skills that we can compare ourselves against?`}</p>
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#a59df8] text-[12px] top-[-626.86px] whitespace-nowrap" data-node-id="1459:15649" style={{ fontVariationSettings: '"wdth" 100' }}>
                YOU
              </p>
              <div className="absolute inset-[-109.97%_97.25%_206.75%_1.01%]" data-node-id="1459:15650" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgVector} />
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-1151px]" data-node-id="1459:15651">
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#81b9af] text-[12px] top-[-1148px] whitespace-nowrap" data-node-id="1459:15652" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-1122px] tracking-[0.25px] w-[718px]" data-node-id="1459:15653" style={{ fontVariationSettings: '"wdth" 100' }}>
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
              <div className="absolute contents left-[9px] top-[-1151px]" data-node-id="1459:15654">
                <div className="absolute inset-[-201.22%_97.29%_297.77%_0.84%]" data-node-id="1459:15655">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse12} />
                </div>
                <p className="[word-break:break-word] absolute font-roboto h-[13.333px] leading-[normal] left-[14.71px] not-italic text-[#81b9af] text-[12px] top-[-1149.14px] w-[8.571px]" data-node-id="1459:15656">
                  A
                </p>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-205px]" data-node-id="1459:15657">
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#81b9af] text-[12px] top-[-201px] whitespace-nowrap" data-node-id="1459:15658" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-175px] tracking-[0.25px] w-[718px]" data-node-id="1459:15659" style={{ fontVariationSettings: '"wdth" 100' }}>
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
              <div className="absolute contents left-[9px] top-[-205px]" data-node-id="1459:15660">
                <div className="absolute inset-[-35.84%_97.29%_132.38%_0.84%]" data-node-id="1459:15661">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse12} />
                </div>
                <p className="[word-break:break-word] absolute font-roboto h-[13.333px] leading-[normal] left-[14.71px] not-italic text-[#81b9af] text-[12px] top-[-202.14px] w-[8.571px]" data-node-id="1459:15662">
                  A
                </p>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[68px]" data-node-id="1459:15663">
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#81b9af] text-[12px] top-[72px] whitespace-nowrap" data-node-id="1459:15664" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[98px] w-[718px]" data-node-id="1459:15665" style={{ fontVariationSettings: '"wdth" 100' }}>
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
              <div className="absolute contents left-[9px] top-[68px]" data-node-id="1459:15666">
                <div className="absolute inset-[11.89%_97.29%_84.65%_0.84%]" data-node-id="1459:15667">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse12} />
                </div>
                <p className="[word-break:break-word] absolute font-roboto h-[13.333px] leading-[normal] left-[14.71px] not-italic text-[#81b9af] text-[12px] top-[70.86px] w-[8.571px]" data-node-id="1459:15668">
                  A
                </p>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-823px]" data-node-id="1459:15669">
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#81b9af] text-[12px] top-[-819px] whitespace-nowrap" data-node-id="1459:15670" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-793px] w-[718px]" data-node-id="1459:15671" style={{ fontVariationSettings: '"wdth" 100' }}>
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
              <div className="absolute contents left-[9px] top-[-823px]" data-node-id="1459:15672">
                <div className="absolute inset-[-143.88%_97.29%_240.42%_0.84%]" data-node-id="1459:15673">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse12} />
                </div>
                <p className="[word-break:break-word] absolute font-roboto h-[13.333px] leading-[normal] left-[14.71px] not-italic text-[#81b9af] text-[12px] top-[-820.14px] w-[8.571px]" data-node-id="1459:15674">
                  A
                </p>
              </div>
            </div>
            <div className="absolute contents left-[9px] top-[-547px]" data-node-id="1459:15675">
              <p className="[word-break:break-word] absolute font-roboto font-medium leading-[normal] left-[32.23px] text-[#81b9af] text-[12px] top-[-544px] whitespace-nowrap" data-node-id="1459:15676" style={{ fontVariationSettings: '"wdth" 100' }}>{`ARQUI `}</p>
              <div className="[word-break:break-word] absolute font-roboto font-normal leading-[0] left-[9px] text-[14px] text-white top-[-518px] w-[718px]" data-node-id="1459:15677" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px] mb-[8px]">{`According to the "2024 Global Innovation Talent Report" by the Smith Innovation Institute, leading companies in your industry allocate an average of 20% of their R&D budget towards training and upskilling their workforce on emerging technologies. Additionally, the report highlights the growing demand for R&D professionals with dual expertise in their domain and data science/analytics.`}</p>
                <p className="leading-[20px]">{`Furthermore, a recent article in "Industry Today" magazine, titled "The Future of R&D: Embracing New Skills and Technologies," emphasizes the importance of fostering a culture of continuous learning and knowledge sharing within R&D teams. The article cites a study by the World Economic Forum which predicts that by 2030, up to 50% of the workforce will require reskilling or upskilling due to the rapid pace of technological change.`}</p>
              </div>
              <div className="absolute contents left-[9px] top-[-547px]" data-node-id="1459:15678">
                <div className="absolute inset-[-95.63%_97.29%_192.17%_0.84%]" data-node-id="1459:15679">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgEllipse12} />
                </div>
                <p className="[word-break:break-word] absolute font-roboto h-[13.333px] leading-[normal] left-[14.71px] not-italic text-[#81b9af] text-[12px] top-[-545.14px] w-[8.571px]" data-node-id="1459:15680">
                  A
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[747px] text-[12px] text-white top-[-500px] whitespace-nowrap" data-node-id="1459:15681" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sources
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[747px] text-[12px] text-white top-[-1125px] whitespace-nowrap" data-node-id="1459:15682" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sources
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[747px] text-[12px] text-white top-[-220px] whitespace-nowrap" data-node-id="1459:15683" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sources
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[747px] text-[12px] text-white top-[68px] whitespace-nowrap" data-node-id="1459:15684" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sources
            </p>
            <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[747px] text-[12px] text-white top-[-771px] whitespace-nowrap" data-node-id="1459:15685" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sources
            </p>
            <ul className="[word-break:break-word] absolute block font-roboto font-normal leading-[0] left-[747px] list-disc text-[#d0bcff] text-[12px] top-[-480px] w-[284px]" data-node-id="1459:15686" style={{ fontVariationSettings: '"wdth" 100' }}>
              <li className="mb-0 ms-[18px]">
                <span className="leading-[16px]">{`"2024 Global Innovation Talent Report" by the Smith Innovation Institute`}</span>
              </li>
              <li className="mb-0 ms-[18px]">
                <span className="leading-[16px]">{`"Industry Today" magazine article titled "The Future of R&D: Embracing New Skills and Technologies"`}</span>
              </li>
              <li className="ms-[18px]">
                <span className="leading-[16px]">{`World Economic Forum study referenced in "Industry Today" article`}</span>
              </li>
            </ul>
            <ul className="[word-break:break-word] absolute block font-roboto font-normal leading-[0] left-[747px] list-disc text-[#d0bcff] text-[12px] top-[-1105px] whitespace-nowrap" data-node-id="1459:15687" style={{ fontVariationSettings: '"wdth" 100' }}>
              <li className="mb-0 ms-[18px]">
                <span className="leading-[16px]">Training Needs Assessment</span>
              </li>
              <li className="ms-[18px]">
                <span className="leading-[16px]">Employee Skill-Set Mapping</span>
              </li>
            </ul>
            <ul className="[word-break:break-word] absolute block font-roboto font-normal leading-[0] left-[747px] text-[#d0bcff] text-[12px] top-[-200px] whitespace-nowrap" data-node-id="1459:15688" style={{ fontVariationSettings: '"wdth" 100' }}>
              <li className="list-disc ms-[18px]">
                <span className="leading-[16px] text-[12px]">​</span>
              </li>
            </ul>
            <button className="[word-break:break-word] absolute block cursor-pointer font-roboto font-normal leading-[0] left-[747px] text-[#d0bcff] text-[12px] text-left top-[88px] whitespace-nowrap" data-node-id="1459:15689" style={{ fontVariationSettings: '"wdth" 100' }}>
              <ul>
                <li className="list-disc ms-[18px]">
                  <span className="leading-[16px]">Digital twin</span>
                </li>
              </ul>
            </button>
            <ul className="[word-break:break-word] absolute block font-roboto font-normal leading-[0] left-[747px] text-[#d0bcff] text-[12px] top-[-751px] w-[242px]" data-node-id="1459:15690" style={{ fontVariationSettings: '"wdth" 100' }}>
              <li className="list-disc ms-[18px]">
                <span className="leading-[16px]">{`Project Management Reports (Project Horizon & Project Phoenix)`}</span>
              </li>
            </ul>
            <div className="absolute contents left-[747px] top-[-1058px]" data-node-id="1459:15691">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-1054px] whitespace-nowrap" data-node-id="1459:15692" style={{ fontVariationSettings: '"wdth" 100' }}>
                Export
              </p>
              <div className="absolute left-[747px] size-[20px] top-[-1058px]" data-node-id="1459:15693" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
              </div>
            </div>
            <div className="absolute contents left-[747px] top-[-705px]" data-node-id="1459:15695">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-701px] whitespace-nowrap" data-node-id="1459:15696" style={{ fontVariationSettings: '"wdth" 100' }}>
                Export
              </p>
              <div className="absolute left-[747px] size-[20px] top-[-705px]" data-node-id="1459:15697" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
              </div>
            </div>
            <div className="absolute contents left-[747px] top-[-355px]" data-node-id="1459:15699">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-351px] whitespace-nowrap" data-node-id="1459:15700" style={{ fontVariationSettings: '"wdth" 100' }}>
                Export
              </p>
              <div className="absolute left-[747px] size-[20px] top-[-355px]" data-node-id="1459:15701" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
              </div>
            </div>
            <div className="absolute contents left-[747px] top-[-175px]" data-node-id="1459:15703">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[-171px] whitespace-nowrap" data-node-id="1459:15704" style={{ fontVariationSettings: '"wdth" 100' }}>
                Export
              </p>
              <div className="absolute left-[747px] size-[20px] top-[-175px]" data-node-id="1459:15705" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
              </div>
            </div>
            <div className="absolute contents left-[747px] top-[113px]" data-node-id="1459:15707">
              <p className="[word-break:break-word] absolute font-roboto font-normal leading-[16px] left-[769px] text-[#d0bcff] text-[12px] top-[117px] whitespace-nowrap" data-node-id="1459:15708" style={{ fontVariationSettings: '"wdth" 100' }}>
                Export
              </p>
              <div className="absolute left-[747px] size-[20px] top-[113px]" data-node-id="1459:15709" data-name="share_windows_FILL0_wght400_GRAD0_opsz20 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={A.imgShareWindowsFill0Wght400Grad0Opsz201} />
              </div>
            </div>
          </div>
        </>
      )}
      {isCollaborators1 && (
        <>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[329px] text-[#d0bcff] text-[16px] top-[187px] tracking-[0.5px] whitespace-nowrap" data-node-id="1459:15735" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px]">Remove</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-roboto font-normal justify-center leading-[0] left-[329px] text-[#d0bcff] text-[16px] top-[232px] tracking-[0.5px] whitespace-nowrap" data-node-id="1459:15736" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px]">Remove</p>
          </div>
        </>
      )}
      {isDeliverables && (
        <div className="absolute border border-[#938f99] border-solid content-stretch cursor-pointer flex flex-col h-[40px] items-center justify-center left-[624px] overflow-clip rounded-[100px] top-[97px]" data-node-id="1459:15776" data-name="Button-dark">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 w-full" data-node-id="I1459:15776;53923:27782" data-name="state-layer">
            <div className="[word-break:break-word] flex flex-col font-roboto font-medium justify-center leading-[0] relative shrink-0 text-[#d0bcff] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" data-node-id="I1459:15776;53923:27783" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Add a custom deliverable</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}