import React, { useState } from 'react';
// Default V2 theme
import 'survey-core/defaultV2.min.css';
// Modern theme
// import 'survey-core/modern.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import "survey-core/survey.i18n";

import { json as SurveyJson } from './Survey'
import './App.css'
import env from "react-dotenv";

// const SURVEY_ID = 1;

function Locale({survey}) {
  const [locale, setLocale] = useState("en");

  function englishLocale() {
    survey.locale = "en";
    setLocale('en');
  }
  function frenchLocale() {
    survey.locale = "fr";
    setLocale('fr');
  }

  if(locale === "fr") {
    return <button className='locale' onClick={englishLocale}>English</button>
  }
  return <button className='locale' onClick={frenchLocale}>Français</button>
}

function App() {
  const survey = new Model(SurveyJson);
  survey.sendResultOnPageNext = true;
  const storageItemKey = "fpds-survey";

    function saveSurveyData (survey) {
        const data = survey.data;
        data.pageNo = survey.currentPageNo;
        window.localStorage.setItem(storageItemKey, JSON.stringify(data));
    }

    function deleteSurveyData () {
        window.localStorage.removeItem(storageItemKey);
    }

    survey.onValueChanged.add((sender) => {
        saveSurveyData(sender);
    });

    survey.onComplete.add((sender) => {
        deleteSurveyData();
        const data = JSON.stringify(sender.data);
        saveSurveyResults('/save', data)
    });

    // Restore survey results
    const prevData = window.localStorage.getItem(storageItemKey) || null;
    if (prevData) {
        const data = JSON.parse(prevData);
        survey.data = data;
        if (data.pageNo) {
            survey.currentPageNo = data.pageNo;
        }
    }

  return (
    <>
    <Locale survey={survey} />
    <Survey model={survey} />
    </>
  )
}

function saveSurveyResults(url, json) {
  fetch(env.API_URL + url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: json
  }).then((res) => console.log(res));
}

export default App;