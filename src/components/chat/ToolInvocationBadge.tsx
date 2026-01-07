"use client";

import { Loader2 } from "lucide-react";

interface ToolInvocationBadgeProps {
  toolInvocation: {
    toolName: string;
    state: "partial-call" | "call" | "result";
    args: {
      command?: string;
      path?: string;
      new_path?: string;
      [key: string]: any;
    };
    result?: any;
    toolCallId: string;
  };
}

function getStrReplaceMessage(
  args: Record<string, any>,
  isComplete: boolean
): string {
  const command = args.command;
  const path = args.path || "file";

  switch (command) {
    case "view":
      return isComplete ? `Viewed ${path}` : `Viewing ${path}`;
    case "create":
      return isComplete ? `Created ${path}` : `Creating ${path}`;
    case "str_replace":
      return isComplete ? `Edited ${path}` : `Editing ${path}`;
    case "insert":
      return isComplete
        ? `Inserted into ${path}`
        : `Inserting into ${path}`;
    case "undo_edit":
      return isComplete
        ? `Undid changes to ${path}`
        : `Undoing changes to ${path}`;
    default:
      return isComplete ? `Modified ${path}` : `Modifying ${path}`;
  }
}

function getFileManagerMessage(
  args: Record<string, any>,
  isComplete: boolean
): string {
  const command = args.command;
  const path = args.path || "file";
  const newPath = args.new_path;

  switch (command) {
    case "rename":
      return isComplete
        ? `Renamed ${path} to ${newPath}`
        : `Renaming ${path} to ${newPath}`;
    case "delete":
      return isComplete ? `Deleted ${path}` : `Deleting ${path}`;
    default:
      return isComplete ? `Completed operation` : `Running operation...`;
  }
}

function getToolMessage(
  tool: ToolInvocationBadgeProps["toolInvocation"]
): string {
  const { toolName, state, args } = tool;
  const isComplete = state === "result";

  if (toolName === "str_replace_editor") {
    return getStrReplaceMessage(args, isComplete);
  } else if (toolName === "file_manager") {
    return getFileManagerMessage(args, isComplete);
  } else {
    return isComplete ? `Completed ${toolName}` : `Running ${toolName}...`;
  }
}

export function ToolInvocationBadge({
  toolInvocation,
}: ToolInvocationBadgeProps) {
  const isLoading = toolInvocation.state !== "result";
  const message = getToolMessage(toolInvocation);

  return (
    <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 bg-neutral-50 rounded-lg text-xs font-mono border border-neutral-200">
      {isLoading ? (
        <Loader2 className="w-3 h-3 animate-spin text-blue-600" />
      ) : (
        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
      )}
      <span className="text-neutral-700">{message}</span>
    </div>
  );
}
