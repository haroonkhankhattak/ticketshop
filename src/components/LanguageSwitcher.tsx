"use client";

import { useRouter, usePathname } from "next/navigation";

interface Props {
  currentLocale: string;
  locales: string[];
}

const LanguageSwitcher = ({ currentLocale, locales }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: string) => {
    const segments = pathname.split("/");
    segments[1] = lng; // Replace locale in path
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div>
      {locales.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          disabled={lng === currentLocale}
          style={{ marginRight: "10px" }}>
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
