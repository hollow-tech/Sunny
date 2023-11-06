import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { useIsMounted } from "../../hooks/useIsMounted";

import {
  LanguagesItem,
  LanguagesLink,
  LanguagesList,
  LanguagesMain,
  LanguagesStyled,
  LanguagesIcon,
  LanguagesLabel,
  ArrowIcon,
  Animation,
  Overlaid,
} from "./Languages.styles";

import { LanguagesProps } from "./Languages.types";

export const Languages: React.FC<LanguagesProps> = ({ languages, color, ...props }) => {
  const isMounted = useIsMounted();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currenLang = useMemo(() => languages.find(({ locale }) => locale === router.locale), [router.locale]);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleLink = useCallback(
    (locale: string) => () => {
      router.push("", "", { locale, scroll: false });
      handleToggle();
    },
    []
  );

  if (!isMounted) {
    return null;
  }

  return (
    <LanguagesStyled {...props}>
      <LanguagesMain onClick={handleToggle}>
        <LanguagesItem>
          <LanguagesLink>
            <LanguagesIcon>{currenLang?.icon}</LanguagesIcon>
            <LanguagesLabel color={color} active>
              {currenLang?.label}
            </LanguagesLabel>
          </LanguagesLink>

          <ArrowIcon color={color} isOpen={isOpen} />
        </LanguagesItem>
      </LanguagesMain>
      <AnimatePresence>
        {isOpen && (
          <>
            <Overlaid onClick={handleToggle} />
            <LanguagesList exit="hidden" animate="visible" initial="hidden" variants={Animation}>
              {languages.map(({ icon, id, label, locale }) => (
                <LanguagesItem key={id} onClick={handleLink(locale)}>
                  <LanguagesLink>
                    <LanguagesIcon>{icon}</LanguagesIcon>
                    <LanguagesLabel active={router.locale === locale}>{label}</LanguagesLabel>
                  </LanguagesLink>
                </LanguagesItem>
              ))}
            </LanguagesList>
          </>
        )}
      </AnimatePresence>
    </LanguagesStyled>
  );
};
