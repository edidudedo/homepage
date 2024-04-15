import React, { useContext } from 'react';
import { LanguageContext } from '../../Components/Language/languageContext';

const EmploymentElements = () => {
  const { translations } = useContext(LanguageContext);

  const employmentList = [
    {
      id: 1,
      title: translations.employment.wasabi_title,
      location: translations.employment.wasabi_loc,
      description: translations.employment.wasabi_desc,
      date: "March 2022 - April 2022",
    },
    {
      id: 2,
      title: translations.employment.hello_title,
      location: translations.employment.hello_loc,
      description: translations.employment.hello_desc,
      date: "September 2022 - Present",
    },
    {
      id: 3,
      title: translations.employment.web_title,
      location: translations.employment.web_loc,
      description: translations.employment.web_desc,
      date: "March 2023 - Present",
    },
  ];

  return employmentList;
};

export default EmploymentElements;
