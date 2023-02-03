export const jsonConfigStyle = {
  theme: {
    sidebar: {
      inner:
        "h-full font-sans font-semibold tracking-wide overflow-y-auto overflow-x-hidden rounded rounded-sm text-white dark:text-white py-4 px-3 bg-gray-800",
      base: "font-bodyFont h-full text-black bg-gray-800",
      item: {
        base: "flex items-center justify-center rounded-lg p-2 text-sm font-normal text-gray-400 hover:text-black hover:bg-gray-600 dark:text-white dark:hover:bg-gray-600",
        active: "bg-sky-700 dark:bg-gray-400",

        icon: {
          base: "h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-black",
        },
      },
      collapse: {
        button:
          "group flex w-full items-center rounded-lg p-2 text-base font-normal text-white transition duration-75 hover:bg-gray-600 dark:text-gray-900 dark:hover:bg-gray-600",
        label: {
          base: "ml-3 flex-1 whitespace-nowrap text-left text-white",
        },
      },
    },
    formControls: {
      textInput: {
        field: {
          input: {
            base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
            sizes: {
              sm: "p-2 sm:text-xs",
              md: "p-2.5 text-sm",
              lg: "sm:text-md p-4",
            },
            colors: {
              gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
              info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
              failure:
                "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
              warning:
                "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
              success:
                "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
            },
            withIcon: {
              on: "pl-10",
              off: "",
            },
            withAddon: {
              on: "rounded-r-lg",
              off: "rounded-lg",
            },
            withShadow: {
              on: "",
              off: "",
            },
          },
        },
      },
    },
    carousel: {
      base: "relative h-full w-full",
      indicators: {
        active: {
          off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
          on: "bg-blue-300 dark:bg-gray-800",
        },
        base: "h-3 w-3 rounded-full bg-blue-500",
        wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3 ",
      },
      item: {
        base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
      control: {
        base: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-200 group-hover:bg-blue-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-blue-500 dark:group-hover:bg-blue-300 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      },
      leftControl:
        "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
      scrollContainer: {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        snap: "snap-x",
      },
    },
    card: {
      base: "flex rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 h-full",
      children: "flex flex-col justify-center p-[13px]",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
      img: {
        base: "h-[120px]",
        horizontal: {
          off: "rounded-t-lg",
          on: "w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
        },
      },
    },
    modal: {
      base: "fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      show: {
        on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
        off: "hidden",
      },
      content: {
        base: "relative h-full w-full p-4 md:h-full",
        inner: "relative rounded-lg bg-white dark:bg-gray-700",
      },
      body: {
        base: "p-6",
        popup: "pt-0",
      },
    },
    tab: {
      base: "flex flex-col gap-2",
      tablist: {
        base: "flex text-center",
        styles: {
          default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
          underline:
            "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
          pills:
            "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400",
          fullWidth:
            "hidden text-sm font-medium rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-700 dark:text-gray-400",
        },
        tabitem: {
          base: "flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
          styles: {
            default: {
              base: "rounded-t-lg",
              active: {
                on: "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-500",
                off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
              },
            },
            underline: {
              base: "rounded-t-lg",
              active: {
                on: "text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
                off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
              },
            },
            pills: {
              base: "",
              active: {
                on: "rounded-lg bg-blue-600 text-white",
                off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
              },
            },
            fullWidth: {
              base: "ml-2 first:ml-0 w-full first:rounded-l-lg last:rounded-r-lg",
              active: {
                on: "inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white",
                off: "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
              },
            },
          },
          icon: "mr-2 h-5 w-5",
        },
      },
      tabpanel: "p-4",
    },
    navbar: {
      base: "border-gray-200 bg-blue-600 px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 text-white",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between text-white",
        fluid: {
          on: "",
          off: "container",
        },
      },
      brand: "flex items-center",
      collapse: {
        base: "w-full md:block md:w-auto",
        list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
        hidden: {
          on: "hidden",
          off: "",
        },
      },
      link: {
        base: "block py-2 pr-4 pl-3 md:p-0 text-white",
        active: {
          on: "bg-blue-700 text-black dark:text-white md:bg-transparent",
          off: "border-b border-gray-100  text-gray-700 hover:bg-blue-400 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-black md:dark:hover:bg-transparent md:dark:hover:text-white",
        },
        disabled: {
          on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
          off: "",
        },
      },
      toggle: {
        base: "inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
        icon: "h-6 w-6 shrink-0",
      },
    },
    dropdown: {
      floating: {
        target: "w-full",
        base: "z-20 w-fit rounded divide-y divide-gray-100 shadow",
        animation: "transition-opacity",
        hidden: "hidden opacity-0",
        style: {
          dark: "bg-gray-900 text-white dark:bg-gray-700",
          light: "border border-gray-200 bg-white text-gray-900",
          auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
        },
        header: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
        content: "py-1 text-sm text-gray-700 dark:text-gray-200",
        arrow: {
          base: "absolute z-10 h-2 w-2 rotate-45",
          style: {
            dark: "bg-gray-900 dark:bg-gray-700",
            light: "bg-white",
            auto: "bg-white dark:bg-gray-700",
          },
          placement: "-4px",
        },
        item: {
          base: "flex items-center justify-start py-2 px-4 text-xs text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
          icon: "mr-2 h-4 w-4",
        },
        divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
      },
      arrowIcon: "ml-2 h-4 w-4",
      inlineWrapper: "flex items-center",
      content: "py-1",
    },
  },
};
