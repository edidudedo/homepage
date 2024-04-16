import React, { useContext } from 'react';
import { LanguageContext } from '../../Components/Language/languageContext';

const EducationElements = () => {
  const { language, translations } = useContext(LanguageContext);

  const educationList = [
    {
      id: 1,
      title: "SDK Immanuel Pontianak",
      location: translations.education.westKalimantan + ", " + translations.education.indonesia,
      description: translations.education.elementary,
      date: language === "ja"? "2006年" + translations.month.july + " - 2012年" + translations.month.june : translations.month.july + " 2006 - " + translations.month.june + " 2012",
    },
    {
      id: 2,
      title: "SMPK Immanuel Pontianak",
      location: translations.education.westKalimantan + ", " + translations.education.indonesia,
      description: translations.education.junior,
      date: language === "ja"? "2012年" + translations.month.july + " - 2015年" + translations.month.june  : translations.month.july + " 2012 - " + translations.month.june + " 2015",
    },
    {
      id: 3,
      title: "SMAK Immanuel Pontianak",
      location: translations.education.westKalimantan + ", " + translations.education.indonesia,
      description: translations.education.senior,
      date: language === "ja"? "2015年" + translations.month.july + " - 2018年" + translations.month.june  : translations.month.july + " 2015 - " + translations.month.june + " 2018",
    },
    {
      id: 4,
      title: "Bandung Institute of Technology",
      location: translations.education.westJawa + ", " + translations.education.indonesia,
      description: translations.education.itb_desc,
      date: language === "ja"? "2018年" + translations.month.august + " - 2019年" + translations.month.february  : translations.month.august + " 2018 - " + translations.month.february + " 2019",
    },
    {
      id: 5,
      title: "Japanese Language Center for International Students",
      location: translations.education.tokyo + ", " + translations.education.japan,
      description: translations.education.jlc,
      date: language === "ja"? "2019年" + translations.month.april + " - 2020年" + translations.month.march  : translations.month.april + " 2019 - " + translations.month.march + " 2020",
    },
    {
      id: 6,
      title: "Osaka University",
      location: translations.education.osaka + ", " + translations.education.japan,
      description: translations.education.handai_under,
      date: language === "ja"? "2020年" + translations.month.april + " - 2024年" + translations.month.march : translations.month.april + " 2020 - " + translations.month.march + " 2024",
    },
    {
      id: 7,
      title: "Osaka University",
      location: translations.education.osaka + ", " + translations.education.japan,
      description: translations.education.handai_master,
      date: language === "ja"? " 2024年" + translations.month.april + " - " + translations.month.present : translations.month.april + " 2024 - " + translations.month.present,
    },
  ];

  return educationList;
};

export default EducationElements;