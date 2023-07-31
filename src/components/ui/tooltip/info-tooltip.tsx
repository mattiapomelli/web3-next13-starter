import { InformationCircleIcon } from "@heroicons/react/24/solid";

import { Tooltip, TooltipProps } from "./tooltip";

export const InfoTooltip = (props: Omit<TooltipProps, "children">) => {
  return (
    <Tooltip {...props}>
      <span>
        <InformationCircleIcon className="h-4 w-4" />
      </span>
    </Tooltip>
  );
};
