import React, { useContext } from 'react';
import { LanguageContext } from '../../Components/Language/languageContext';

const EmploymentElements = () => {
  const { language, translations } = useContext(LanguageContext);

  const employmentList = [
    {
      id: 1,
      title: translations.employment.wasabi_title,
      location: translations.employment.wasabi_loc,
      description: translations.employment.wasabi_desc,
      date: language === "ja" ? "2022年" + translations.month.march + "  -  2022年" + translations.month.april : translations.month.march + " 2022 - " + translations.month.april + " 2022",
    },
    {
      id: 2,
      title: translations.employment.hello_title,
      location: translations.employment.hello_loc,
      description: translations.employment.hello_desc,
      date: language === "ja" ? "2022年" + translations.month.september + " - " + translations.month.present : translations.month.september + " 2022 - " + translations.month.present,
    },
    {
      id: 3,
      title: translations.employment.web_title,
      location: translations.employment.web_loc,
      description: translations.employment.web_desc,
      date: language === "ja" ? "2023年" + translations.month.march + " - " + translations.month.present : translations.month.march + " 2023 - " + translations.month.present,
    },
  ];

  return employmentList;
};

export default EmploymentElements;
