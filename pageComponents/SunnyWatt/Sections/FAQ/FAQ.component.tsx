import { FAQAccordion, FAQItem, FAQList, FAQInner, FAQTitle, FAQstyled } from "./FAQ.styles";

import { FAQProps } from "./FAQ.types";
import { useTranslation } from "next-i18next";
const FAQ: React.FC<FAQProps> = (props) => {
  const { t } = useTranslation("Home");
  return (
    <FAQstyled {...props}>
      <FAQInner>
        <FAQTitle variants="headline1">{t("FAQTitle")}</FAQTitle>
        <FAQList>
          <FAQItem>
            <FAQAccordion title={t("FAQAccordionTitleOne")} open>
              {t("FAQAccordionTextOne")}
            </FAQAccordion>
          </FAQItem>
          <FAQItem>
            <FAQAccordion title={t("FAQAccordionTitleTwo")}>{t("FAQAccordionTextTwo")}</FAQAccordion>
          </FAQItem>
          <FAQItem>
            <FAQAccordion title={t("FAQAccordionTitleThree")}>{t("FAQAccordionTextThree")}</FAQAccordion>
          </FAQItem>
          <FAQItem>
            <FAQAccordion title={t("FAQAccordionTitleFour")}>{t("FAQAccordionTextFour")}</FAQAccordion>
          </FAQItem>
        </FAQList>
      </FAQInner>
    </FAQstyled>
  );
};

export default FAQ;
