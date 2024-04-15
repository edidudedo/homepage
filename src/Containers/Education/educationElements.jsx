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
      date: translations.month.july + " 2006 - " + translations.month.june + " 2012",
    },
    {
      id: 2,
      title: "SMPK Immanuel Pontianak",
      location: translations.education.westKalimantan + ", " + translations.education.indonesia,
      description: translations.education.junior,
      date: translations.month.july + " 2012 - " + translations.month.june + " 2015",
    },
    {
      id: 3,
      title: "SMAK Immanuel Pontianak",
      location: translations.education.westKalimantan + ", " + translations.education.indonesia,
      description: translations.education.senior,
      date: translations.month.july + " 2015 - " + translations.month.june + " 2018",
    },
    {
      id: 4,
      title: "Bandung Institute of Technology",
      location: translations.education.westJawa + ", " + translations.education.indonesia,
      description: translations.education.itb_desc,
      date: translations.month.august + " 2018 - " + translations.month.february + " 2019",
    },
    {
      id: 5,
      title: "Japanese Language Center for International Students",
      location: translations.education.tokyo + ", " + translations.education.japan,
      description: translations.education.jlc,
      date: translations.month.april + " 2019 - " + translations.month.march + " 2020",
    },
    {
      id: 6,
      title: "Osaka University",
      location: translations.education.osaka + ", " + translations.education.japan,
      description: translations.education.handai_under,
      date: translations.month.april + " 2020 - " + translations.month.march + " 2024",
    },
    {
      id: 7,
      title: "Osaka University",
      location: translations.education.osaka + ", " + translations.education.japan,
      description: translations.education.handai_master,
      date: translations.month.april + " 2014 - " + translations.month.present,
    },
  ];

  return educationList;
};

export default EducationElements;