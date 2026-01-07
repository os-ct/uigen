import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ToolInvocationBadge } from "../ToolInvocationBadge";

afterEach(() => {
  cleanup();
});

describe("ToolInvocationBadge", () => {
  describe("str_replace_editor commands", () => {
    describe("view command", () => {
      it("renders loading state for view command", () => {
        const toolInvocation = {
          toolName: "str_replace_editor",
          state: "call" as const,
          args: { command: "view", path: "/App.jsx" },
          toolCallId: "test-1",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(screen.getByText("Viewing /App.jsx")).toBeDefined();
      });

      it("renders completed state for view command", () => {
        const toolInvocation = {
          toolName: "str_replace_editor",
          state: "result" as const,
          args: { command: "view", path: "/App.jsx" },
          result: "file contents",
          toolCallId: "test-1",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(screen.getByText("Viewed /App.jsx")).toBeDefined();
      });
    });

    describe("create command", () => {
      it("renders loading state for create command", () => {
        const toolInvocation = {
          toolName: "str_replace_editor",
          state: "call" as const,
          args: { command: "create", path: "/components/Button.jsx" },
          toolCallId: "test-2",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(
          screen.getByText("Creating /components/Button.jsx")
        ).toBeDefined();
      });

      it("renders completed state for create command", () => {
        const toolInvocation = {
          toolName: "str_replace_editor",
          state: "result" as const,
          args: { command: "create", path: "/components/Button.jsx" },
          result: "File created",
          toolCallId: "test-2",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(
          screen.getByText("Created /components/Button.jsx")
        ).toBeDefined();
      });
    });

    describe("str_replace command", () => {
      it("renders loading state for str_replace command", () => {
        const toolInvocation = {
          toolName: "str_replace_editor",
          state: "call" as const,
          args: {
            command: "str_replace",
            path: "/App.jsx",
            old_str: "old",
            new_str: "new",
          },
          toolCallId: "test-3",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(screen.getByText("Editing /App.jsx")).toBeDefined();
      });

      it("renders completed state for str_replace command", () => {
        const toolInvocation = {
          toolName: "str_replace_editor",
          state: "result" as const,
          args: {
            command: "str_replace",
            path: "/App.jsx",
            old_str: "old",
            new_str: "new",
          },
          result: "String replaced",
          toolCallId: "test-3",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(screen.getByText("Edited /App.jsx")).toBeDefined();
      });
    });

    describe("insert command", () => {
      it("renders loading state for insert command", () => {
        const toolInvocation = {
          toolName: "str_replace_editor",
          state: "call" as const,
          args: {
            command: "insert",
            path: "/components/Form.jsx",
            insert_line: 10,
            new_str: "new code",
          },
          toolCallId: "test-4",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(
          screen.getByText("Inserting into /components/Form.jsx")
        ).toBeDefined();
      });

      it("renders completed state for insert command", () => {
        const toolInvocation = {
          toolName: "str_replace_editor",
          state: "result" as const,
          args: {
            command: "insert",
            path: "/components/Form.jsx",
            insert_line: 10,
            new_str: "new code",
          },
          result: "Text inserted",
          toolCallId: "test-4",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(
          screen.getByText("Inserted into /components/Form.jsx")
        ).toBeDefined();
      });
    });

    describe("undo_edit command", () => {
      it("renders loading state for undo_edit command", () => {
        const toolInvocation = {
          toolName: "str_replace_editor",
          state: "call" as const,
          args: { command: "undo_edit", path: "/App.jsx" },
          toolCallId: "test-5",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(
          screen.getByText("Undoing changes to /App.jsx")
        ).toBeDefined();
      });

      it("renders completed state for undo_edit command", () => {
        const toolInvocation = {
          toolName: "str_replace_editor",
          state: "result" as const,
          args: { command: "undo_edit", path: "/App.jsx" },
          result: "Edit undone",
          toolCallId: "test-5",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(
          screen.getByText("Undid changes to /App.jsx")
        ).toBeDefined();
      });
    });
  });

  describe("file_manager commands", () => {
    describe("rename command", () => {
      it("renders loading state for rename command", () => {
        const toolInvocation = {
          toolName: "file_manager",
          state: "call" as const,
          args: {
            command: "rename",
            path: "/old.jsx",
            new_path: "/new.jsx",
          },
          toolCallId: "test-6",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(
          screen.getByText("Renaming /old.jsx to /new.jsx")
        ).toBeDefined();
      });

      it("renders completed state for rename command", () => {
        const toolInvocation = {
          toolName: "file_manager",
          state: "result" as const,
          args: {
            command: "rename",
            path: "/old.jsx",
            new_path: "/new.jsx",
          },
          result: { success: true },
          toolCallId: "test-6",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(
          screen.getByText("Renamed /old.jsx to /new.jsx")
        ).toBeDefined();
      });
    });

    describe("delete command", () => {
      it("renders loading state for delete command", () => {
        const toolInvocation = {
          toolName: "file_manager",
          state: "call" as const,
          args: { command: "delete", path: "/components/Old.jsx" },
          toolCallId: "test-7",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(
          screen.getByText("Deleting /components/Old.jsx")
        ).toBeDefined();
      });

      it("renders completed state for delete command", () => {
        const toolInvocation = {
          toolName: "file_manager",
          state: "result" as const,
          args: { command: "delete", path: "/components/Old.jsx" },
          result: { success: true },
          toolCallId: "test-7",
        };

        render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
        expect(
          screen.getByText("Deleted /components/Old.jsx")
        ).toBeDefined();
      });
    });
  });

  describe("edge cases", () => {
    it("handles missing path in args", () => {
      const toolInvocation = {
        toolName: "str_replace_editor",
        state: "call" as const,
        args: { command: "create" },
        toolCallId: "test-8",
      };

      render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
      expect(screen.getByText("Creating file")).toBeDefined();
    });

    it("handles unknown command for str_replace_editor", () => {
      const toolInvocation = {
        toolName: "str_replace_editor",
        state: "call" as const,
        args: { command: "unknown_command", path: "/test.jsx" },
        toolCallId: "test-9",
      };

      render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
      expect(screen.getByText("Modifying /test.jsx")).toBeDefined();
    });

    it("handles unknown command for file_manager", () => {
      const toolInvocation = {
        toolName: "file_manager",
        state: "call" as const,
        args: { command: "unknown_command", path: "/test.jsx" },
        toolCallId: "test-10",
      };

      render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
      expect(screen.getByText("Running operation...")).toBeDefined();
    });

    it("handles unknown tool name", () => {
      const toolInvocation = {
        toolName: "unknown_tool",
        state: "call" as const,
        args: {},
        toolCallId: "test-11",
      };

      render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
      expect(screen.getByText("Running unknown_tool...")).toBeDefined();
    });

    it("handles partial-call state", () => {
      const toolInvocation = {
        toolName: "str_replace_editor",
        state: "partial-call" as const,
        args: { command: "create", path: "/App.jsx" },
        toolCallId: "test-12",
      };

      render(<ToolInvocationBadge toolInvocation={toolInvocation} />);
      expect(screen.getByText("Creating /App.jsx")).toBeDefined();
    });
  });

  describe("visual elements", () => {
    it("renders spinner for loading state", () => {
      const toolInvocation = {
        toolName: "str_replace_editor",
        state: "call" as const,
        args: { command: "create", path: "/App.jsx" },
        toolCallId: "test-13",
      };

      const { container } = render(
        <ToolInvocationBadge toolInvocation={toolInvocation} />
      );
      const spinner = container.querySelector(".animate-spin");
      expect(spinner).toBeDefined();
    });

    it("renders green dot for completed state", () => {
      const toolInvocation = {
        toolName: "str_replace_editor",
        state: "result" as const,
        args: { command: "create", path: "/App.jsx" },
        result: "success",
        toolCallId: "test-14",
      };

      const { container } = render(
        <ToolInvocationBadge toolInvocation={toolInvocation} />
      );
      const greenDot = container.querySelector(".bg-emerald-500");
      expect(greenDot).toBeDefined();
    });

    it("applies correct CSS classes", () => {
      const toolInvocation = {
        toolName: "str_replace_editor",
        state: "call" as const,
        args: { command: "create", path: "/App.jsx" },
        toolCallId: "test-15",
      };

      const { container } = render(
        <ToolInvocationBadge toolInvocation={toolInvocation} />
      );
      const badge = container.firstChild as HTMLElement;
      const className = badge.className;

      expect(className).toContain("inline-flex");
      expect(className).toContain("items-center");
      expect(className).toContain("gap-2");
      expect(className).toContain("mt-2");
      expect(className).toContain("px-3");
      expect(className).toContain("py-1.5");
      expect(className).toContain("bg-neutral-50");
      expect(className).toContain("rounded-lg");
      expect(className).toContain("text-xs");
      expect(className).toContain("font-mono");
      expect(className).toContain("border");
      expect(className).toContain("border-neutral-200");
    });
  });
});
