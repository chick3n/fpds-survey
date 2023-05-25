export const json = {
  "title": {
   "default": "FPDS Multilateral Staffing Model",
   "fr": "frFPDS Multilateral Staffing Model"
  },
  "description": {
   "default": "Subject Matter Expert Questionnaire",
   "fr": "frSubject Matter Expert Questionnaire"
  },
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "dropdown",
      "name": "mission",
      "title": "Multilateral Mission",
      "titleLocation": "left",
      "hideNumber": true,
      "isRequired": true,
      "choices": [
       "PRMNY",
       "GENEV",
       "BNATO",
       "BREU",
       "VPERM",
       "PRMOAS",
       "POECD",
       "VOSCE",
       "PESCO",
       "PARIS",
       "ROME-RPERM",
       "HAGUE",
       "JKRTA-ASEAN",
       "ADDIS",
       "NROBI",
       "LDN",
       "GENEV-WTO"
      ],
      "placeholder": "Choose an item..."
     },
     {
      "type": "text",
      "name": "code",
      "title": "Enter Code",
      "titleLocation": "left",
      "hideNumber": true,
      "isRequired": true,
      "maxLength": 32
     },
     {
      "type": "panel",
      "name": "panel1",
      "elements": [
       {
        "type": "html",
        "name": "text1",
        "html": "Thank you for taking the time to participate in the subject matter expert questionnaire for the\nForeign Policy and Diplomacy Service (FPDS) staffing model. Your responses will be converted into\ndata for the FPDS multilateral staffing model to guide and support FPDS staffing decisions.\n<br/></br>\nThe FPDS position works to advance Canadian interests with a focus on the following seven Core Services:\nInformation and Analysis, Policy Development, Policy Integration, Advocacy, Access, Program Delivery,\nVisits Guidance; source: <a href=\"https://intra.signet.international.gc.ca/foreign_affairs-affaires_etrangeres/poli_diplo/index.aspx?lang=eng\" target=\"blank\">Foreign Policy and Diplomacy (international.gc.ca)</a>."
       }
      ]
     },
     {
      "type": "boolean",
      "name": "question1",
      "title": "Are there other core services FPDS officers perform at this multilateral mission?",
      "isRequired": true
     },
     {
      "type": "matrix",
      "name": "question2",
      "title": "Please identify the importance of each core service at this multilateral mission",
      "isRequired": true,
      "columns": [
       "Very Low",
       "Low",
       "Medium",
       "High",
       "Very High"
      ],
      "rows": [
       {
        "value": "Information and Analysis",
        "text": {
         "default": "Information and Analysis",
         "fr": "frInformation and Analysis"
        }
       },
       {
        "value": "Policy Development",
        "text": {
         "default": "Policy Development",
         "fr": "frPolicy Development"
        }
       },
       {
        "value": "Policy Integration",
        "text": {
         "default": "Policy Integration",
         "fr": "frPolicy Integration"
        }
       },
       {
        "value": "Advocacy",
        "text": {
         "default": "Advocacy",
         "fr": "frAdvocacy"
        }
       },
       {
        "value": "Access",
        "text": {
         "default": "Access",
         "fr": "frAccess"
        }
       },
       {
        "value": "Program Delivery",
        "text": {
         "default": "Program Delivery",
         "fr": "frProgram Delivery"
        }
       },
       {
        "value": "Visits Guidance",
        "text": {
         "default": "Visits Guidance",
         "fr": "frVisits Guidance"
        }
       }
      ]
     },
     {
      "type": "text",
      "name": "question3",
      "title": {
       "default": "What is the total count of Full-Time Equivalent (FTE) positions for permanent CBS FPDS officers?",
       "fr": "frWhat is the current number of permanent CBS FPDS officers’ positions in this multilateral mission?"
      },
      "isRequired": true,
      "inputType": "number",
      "min": 0,
      "max": 100,
      "step": 1
     },
     {
      "type": "text",
      "name": "question4",
      "title": "What is the total count of Full-Time Equivalent (FTE) positions for temporary CBS FPDS officers?",
      "isRequired": true,
      "inputType": "number",
      "min": 0,
      "max": 100
     },
     {
      "type": "text",
      "name": "question5",
      "title": "What is the total count of Full-Time Equivalent (FTE) positions for Non-FPDS CBS officers performing\nFPDS core services?",
      "isRequired": true,
      "inputType": "number",
      "min": 0,
      "max": 100
     },
     {
      "type": "matrixdropdown",
      "name": "question6",
      "title": {
       "default": "Specify the current Full-Time Equivalent (FTE) for each classification of permanent CBS FPDS officers in\nthis mission? Please note that the total should correspond with the figure provided in question 3.",
       "fr": "frTell us about the classification and current FTE number of permanent CBS FPDS officers:"
      },
      "columns": [
       {
        "name": "FS 01",
        "title": "FS 01",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "FS 02",
        "title": "FS 02",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "FS 03",
        "title": "FS 03",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "FS 04",
        "title": "FS 04",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "EX 01",
        "title": "EX 01",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "EX 02",
        "title": "EX 02",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "EX 03",
        "title": "EX 03",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "EX 04",
        "title": "EX 04",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "EX 05",
        "title": "EX 05",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       }
      ],
      "rows": [
       {
        "value": "FTE",
        "text": {
         "default": "FTE",
         "fr": "frFTE"
        }
       }
      ]
     },
     {
      "type": "matrixdynamic",
      "name": "question7",
      "title": "What percentage of time each permanent CBS FPDS officer has spent on each of their core services over\nthe past year?",
      "columns": [
       {
        "name": "Classification",
        "cellType": "dropdown",
        "choices": [
         "FS 01",
         "FS 02",
         "FS 03",
         "FS 04",
         "EX 01",
         "EX 02",
         "EX 03",
         "EX 04",
         "EX 05"
        ]
       },
       {
        "name": "Service 1",
        "title": {
         "default": "Service 1: Information & Analysis",
         "fr": "frService 1: Information & Analysis"
        },
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "Service 2",
        "title": {
         "default": "Service 2: Policy Development",
         "fr": "frService 2: Policy Development"
        },
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "Service 3",
        "title": {
         "default": "Service 3: Policy Integration",
         "fr": "frService 3: Policy Integration"
        },
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "Service 4",
        "title": {
         "default": "Service 4: Advocacy",
         "fr": "frService 4: Advocacy"
        },
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "Service 5",
        "title": {
         "default": "Service 5: Access",
         "fr": "frService 5: Access"
        },
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "Service 6",
        "title": {
         "default": "Service 6: Program Delivery",
         "fr": "frService 6: Program Delivery"
        },
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "Service 7",
        "title": {
         "default": "Service 7: Visits",
         "fr": "frService 7: Visits"
        },
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       }
      ],
      "rowCount": 5
     },
     {
      "type": "panel",
      "name": "panel2",
      "elements": [
       {
        "type": "html",
        "name": "text3",
        "html": "a) Please identify the positions (by their numerical identifiers) within this service that need to be staffed concurrently in order to effectively contribute to this task. For instance, if the Full-Time Equivalent (FTE) of position #1 should be twice that of position #2 in this task, then notate it as (#1)=2(#2) (indicating a twinning relation). <b>(twinning relation).</b>\n<br/><br/>\nb) Please specify the positions (identified by their numbers) within this service that need to be filled for successful task execution. For instance, if the Full-Time Equivalent (FTE) of position #3 needs to be more than twice that of position #4 in this task, you would represent this as (#3) - 2*(#4) &gt; 0. <b>(supervisory relation).</b>\n<br/><br/>\nc) Express any other relation that exists in staffing to provide this service in the mission <b>(Miscellaneous relation)</b>"
       },
       {
        "type": "matrixdropdown",
        "name": "question8",
        "titleLocation": "hidden",
        "columns": [
         {
          "name": "twinning_relation",
          "title": "Twinning relation",
          "cellType": "text"
         },
         {
          "name": "supervisory_relation",
          "title": "Supervisory relation",
          "cellType": "text"
         },
         {
          "name": "miscellaneous_relation",
          "title": "Miscellaneous relation",
          "cellType": "text"
         }
        ],
        "rows": [
         {
          "value": "Core service 1",
          "text": "Core service 1: Information Analysis"
         },
         {
          "value": "Core service 2",
          "text": "Core service 2: Policy Development"
         },
         {
          "value": "Core service 3",
          "text": "Core service 3: Policy Integration"
         },
         {
          "value": "Core service 4",
          "text": "Core service 4: Advocacy"
         },
         {
          "value": "Core service 5",
          "text": "Core service 5: Access"
         },
         {
          "value": "Core service 6",
          "text": "Core service 6: Program Delivery"
         },
         {
          "value": "Core service 7",
          "text": "Core service 7: Visits Guidance"
         }
        ]
       }
      ],
      "title": "8. Relations"
     }
    ],
    "description": {
     "fr": "frThank you for taking the time to participate in the subject matter expert questionnaire for the Foreign Policy and Diplomacy Service (FPDS) staffing model. Your responses will be converted into data for the FPDS multilateral staffing model to guide and support FPDS staffing decisions."
    }
   }
  ]
 }