interface IprojectCard {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
  }
  
  interface Itheme {
    index: number;
    label: string;
    icon: ReactNode;
  }
  
  interface IhamburgerProps {
    setHamburger?: Dispatch<SetStateAction<boolean>>;
    hamburger: boolean;
  }
  
  interface InavigationMenu {
    index: number;
    label: string;
    link: string;
  }
  
  interface IsocialmediaProps {
    icon: IconType;
    label: string;
    link: string;
  }
  
  interface InewProps {
    source: string;
    title?: string;
    description: string;
    url: string;
    image_url: string;
    published_at: string;
    content?: string;
  }
  
  interface IapiResponse {
    data: InewProps[];
  }
  
  interface InavigationProps {
    setHamburger: Dispatch<SetStateAction<boolean>>;
    hamburger: boolean;
  }