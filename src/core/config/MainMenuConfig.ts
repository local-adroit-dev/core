const DocMenuConfig = [
  {
    pages: [
      {
        heading: "Dashboard",
        route: "/dashboard",
        svgIcon: "media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
    ],
  },
  {
    heading: "Micro Apps",
    route: "/microapp",
    pages: [
      {
        sectionTitle: "apps",
        route: "/pages",
        svgIcon: "media/icons/duotune/general/gen022.svg",
        fontIcon: "bi-archive",
        sub: [
          {
            heading: "Vue MicroApp",
            route: "/microapp/vue",
          },
          {
            heading: "React MicroApp",
            route: "/microapp/react",
          },
        ],
      },
    ],
  },
];

export default DocMenuConfig;
