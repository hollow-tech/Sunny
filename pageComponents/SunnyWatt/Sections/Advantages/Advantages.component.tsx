import { useTranslation } from "next-i18next";

import {
  Advantage,
  AdvantageIcon,
  AdvantageText,
  AdvantageTitle,
  AdvantagesStyled,
  AdvantagesText,
  AdvantagesTitle,
  AdvantagesInner,
  Item,
  List,
} from "./Advantages.styles";

import { AdvantagesProps } from "./Advantages.types";

import { advantages } from "./Advantages.data";

const Advantages: React.FC<AdvantagesProps> = () => {
  const { t } = useTranslation("Home");
  return (
    <AdvantagesStyled>
      <AdvantagesInner>
        <AdvantageTitle variants="headline1">{t("advantageTitle")}</AdvantageTitle>
        <AdvantagesText variants="body1">{t("advantagesText")}</AdvantagesText>
        <List>
          {advantages.map(({ icon }, index) => (
            <Item key={index}>
              <Advantage>
                <AdvantageIcon>{icon}</AdvantageIcon>
                <AdvantagesTitle variants="headline2">{t(`advantageItemTitle${index}`)}</AdvantagesTitle>
                <AdvantageText variants="body1">{t(`advantageItemText${index}`)}</AdvantageText>
              </Advantage>
            </Item>
          ))}
        </List>
      </AdvantagesInner>
    </AdvantagesStyled>
  );
};

export default Advantages;
