// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Welcome to my project&#39;s section",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-teaching",
              title: "teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-how-to-generate-ssh-pair-keys",
      
        title: "How to generate ssh pair keys",
      
      description: "How to generate ssh pair keys",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/code/";
        
      },
    },{id: "post-graduation-of-m-sc-information-sciences-and-technologies",
      
        title: "Graduation of M.Sc Information Sciences and Technologies",
      
      description: "I finally graduated from my Masters of Science degree now.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/graduation/";
        
      },
    },{id: "news-course-jetson-nano-for-computer-vision",
          title: 'Course: Jetson Nano for Computer Vision',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/projects/jetson_nano_computer_vision/";
            },},{id: "projects-svarm-uami",
          title: 'SVARM-UAMI',
          description: "Sistema de visión artificial para el reconocimiento de matriculas vehiculares de la UAMI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SVARM-UAMI/";
            },},{id: "projects-jetson-nano-for-computer-vision",
          title: 'Jetson Nano for Computer Vision',
          description: "Course Page",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jetson_nano_computer_vision/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%73%74%61%76%6F@%61%62%6F%67%61%64%61%73%66%6D.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/gusflrso", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/darksidehacker", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/gustavofl0res", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gus-fls", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
