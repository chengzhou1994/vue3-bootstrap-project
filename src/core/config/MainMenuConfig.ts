const DocMenuConfig: object = [
  {
    pages: [
      {
        heading: "Dashboard",
        route: "/dashboard",
        svgIcon: "media/icons/duotone/Design/PenAndRuller.svg",
        fontIcon: "bi-app-indicator"
      },
      {
        heading: "Layout builder",
        route: "/builder",
        svgIcon: "media/icons/duotone/Interface/Settings-02.svg",
        fontIcon: "bi-layers"
      }
    ]
  },
  {
    heading: "Crafted",
    route: "/crafted",
    pages: [
      {
        sectionTitle: "Pages",
        route: "/pages",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-archive",
        sub: [
          {
            sectionTitle: "Profile",
            route: "/profile",
            sub: [
              {
                heading: "Overview",
                route: "/crafted/pages/profile/overview"
              },
              {
                heading: "Projects",
                route: "/crafted/pages/profile/projects"
              },
              {
                heading: "Campaigns",
                route: "/crafted/pages/profile/campaigns"
              },
              {
                heading: "Documents",
                route: "/crafted/pages/profile/documents"
              },
              {
                heading: "Connections",
                route: "/crafted/pages/profile/connections"
              }
            ]
          }
        ]
      },
      {
        sectionTitle: "Account",
        route: "/account",
        svgIcon: "media/icons/duotone/General/User.svg",
        fontIcon: "bi-person",
        sub: [
          {
            heading: "Overview",
            route: "/crafted/account/overview"
          },
          {
            heading: "Settings",
            route: "/crafted/account/settings"
          }
        ]
      },
      {
        sectionTitle: "Authentication",
        svgIcon: "media/icons/duotone/Interface/Lock.svg",
        fontIcon: "bi-sticky",
        sub: [
          {
            sectionTitle: "Basic Flow",
            sub: [
              {
                heading: "Sign-in",
                route: "/sign-in"
              },
              {
                heading: "Sign-up",
                route: "/sign-up"
              },
              {
                heading: "Password Reset",
                route: "/password-reset"
              }
            ]
          },
          {
            heading: "Error 404",
            route: "/404"
          },
          {
            heading: "Error 500",
            route: "/500"
          }
        ]
      }
    ]
  }
];

export default DocMenuConfig;
