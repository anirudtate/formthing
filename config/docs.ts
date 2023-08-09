import { MainNavItem, SidebarNavItem } from "types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Figma",
      href: "/docs/figma",
    },
    {
      title: "GitHub",
      href: "https://github.com/shadcn/ui",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/shadcn",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
        {
          title: "Theming",
          href: "/docs/theming",
        },
        {
          title: "CLI",
          href: "/docs/cli",
        },
        {
          title: "Typography",
          href: "/docs/components/typography",
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          title: "Figma",
          href: "/docs/figma",
        },
      ],
    },
    {
      title: "Forms",
      items: [
        {
          title: "React Hook Form",
          href: "/docs/forms/react-hook-form",
          label: "New",
        },
        {
          title: "TanStack Form",
          href: "#",
          label: "Soon",
          disabled: true,
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
        },
        {
          title: "Alert",
          href: "/docs/components/alert",
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog",
        },
        {
          title: "Aspect Ratio",
          href: "/docs/components/aspect-ratio",
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
        },
        {
          title: "Button",
          href: "/docs/components/button",
        },
        {
          title: "Calendar",
          href: "/docs/components/calendar",
        },
        {
          title: "Card",
          href: "/docs/components/card",
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible",
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
        },
        {
          title: "Command",
          href: "/docs/components/command",
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
        },
        {
          title: "Data Table",
          href: "/docs/components/data-table",
          label: "New",
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
        },
        {
          title: "Hover Card",
          href: "/docs/components/hover-card",
        },
        {
          title: "Input",
          href: "/docs/components/input",
        },
        {
          title: "Label",
          href: "/docs/components/label",
        },
        {
          title: "Menubar",
          href: "/docs/components/menubar",
        },
        {
          title: "Navigation Menu",
          href: "/docs/components/navigation-menu",
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
        },
        {
          title: "Progress",
          href: "/docs/components/progress",
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
        },
      ],
    },
  ],
};
