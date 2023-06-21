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
      "description": "Please choose the mission code",
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
      "description": "A secret code has been assigned to the mission. Please enter the code",
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
        "html": "<p>Thank you for taking the time to participate in the subject matter expert questionnaire for the footprint assessment model of the Foreign Policy and Diplomacy Service (FPDS). \n</p>\n<p>\nAs part of a broader effort to support evidence-based decision-making regarding Canada’s footprint of missions abroad, GAC has begun to develop a tool to help assess the footprint FPDS officers abroad. Ideally, this tool would compare the overall cost required to have each FPDS position abroad with the results achieved by the officer; in reality, a lack of data regarding results achieved impedes such an analysis. While data contained in Strategia is of increasing use—and will soon be complemented by data gathered by the new client management system ECHO—there is currently no other way to gather data linking results achieved by FPDS officers than by directly asking mission managers. This is the intent of the questionnaire below.  \n</p>\n<p>\nThe FPDS tool combines data gathered from the questionnaire, together with the number of FPDS officers at a particular mission, to optimize the number of FPDS officers compared with their cost. The tool’s output is intended to foster discussion among subject-matter experts and senior management; it is only one element for consideration of the governance structure ultimately responsible for making footprint decisions.  \n</p>\n<p>\nThe questionnaire below is divided into two main sections: mission-level and officer-level. The mission-level questions are intended to determine the relative priority of FPDS core services delivered by the mission, as well as the number (and level) of officers responsible for that work. The officer-level questions are intended to break down the amount of time spent on each core service by each officer. \n</p>\n<p>\nYour responses will be converted into data for the FPDS multilateral footprint assessment model to guide and support decisions on the placement of FPDS positions at missions abroad. \n</p>\n"
       }
      ]
     },
     {
      "type": "panel",
      "name": "panel3",
      "elements": [
       {
        "type": "html",
        "name": "question9",
        "html": "<h2>Part A: Mission-Level Questions </h2>\n\nThe FPDS position works to advance Canadian interests with a focus on the following seven Core Services: Information and Analysis, Policy Development, Policy Integration, Advocacy, Access, Program Delivery, Visits Guidance; source: <a href=\"https://intra.signet.international.gc.ca/foreign_affairs-affaires_etrangeres/poli_diplo/index.aspx?lang=eng\">Foreign Policy and Diplomacy (international.gc.ca) . </a> "
       }
      ]
     },
     {
      "type": "boolean",
      "name": "question1",
      "title": "Do permanent CBS FPDS officers at this multilateral mission perform any services in addition to the FPDS seven core services?",
      "description": "If the answer is positive, the domain experts in the HQ will contact you.  ",
      "isRequired": true
     },
     {
      "type": "matrix",
      "name": "question2",
      "title": "Please identify the importance of each core service at this multilateral mission",
      "description": "The model assigns a priority level to each core service using the scale of: \"Very Low\"= 0-20, \"Low\": 20-40, \"Medium\": 40-60, \"High\":60-80, \"Very High\": 80-100. These priority designations represent the relative significance of each core service within the scope of the mission. However, they should not be misconstrued as directives for the allocation of resources based solely on high-priority ratings. To ensure a balanced and equitable approach, irrespective of the individual priority scores, the model normalizes the sum of all priorities within any given mission to unity. In other words, choosing high priority will not lead to a higher staffing level, and choosing low priority will not lead to a lower staffing level.",
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
      "title": "What is the total count of Full-Time Equivalent (FTE) positions for Non-FPDS CBS officers performing FPDS core services?",
      "isRequired": true,
      "inputType": "number",
      "min": 0,
      "max": 100
     },
     {
      "type": "matrixdropdown",
      "name": "question6",
      "title": {
       "default": "Specify the current Full-Time Equivalent (FTE) for each classification of permanent CBS FPDS officers in this mission? Please note that the total should correspond with the figure provided in question 3.",
       "fr": "frTell us about the classification and current FTE number of permanent CBS FPDS officers:"
      },
      "description": "Please note that the total FTE should match with the answer provided in question 3.",
      "isRequired": true,
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
        "name": "AS 01",
        "title": "AS 01",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "AS 02",
        "title": "AS 02",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "AS 03",
        "title": "AS 03",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "AS 04",
        "title": "AS 04",
        "cellType": "text",
        "inputType": "number",
        "min": 0,
        "max": 100,
        "step": 1
       },
       {
        "name": "AS 05",
        "title": "AS 05",
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
      "type": "html",
      "name": "question8",
      "html": "<h2>Part B: Officer-Level Questions </h2>\n\n"
     },
     {
      "type": "matrixdynamic",
      "name": "question7",
      "title": "What percentage of time each permanent CBS FPDS officer has spent on each of their core services over the past year?",
      "isRequired": true,
      "columns": [
       {
        "name": "Officer's name",
        "title": "Name of incumbent",
        "cellType": "text"
       },
       {
        "name": "Classification",
        "cellType": "dropdown",
        "choices": [
         "FS 01",
         "FS 02",
         "FS 03",
         "FS 04",
         "AS 01",
         "As 02",
         "AS 03",
         "AS 04",
         "AS 05",
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
      ]
     }
    ],
    "description": {
     "fr": "frThank you for taking the time to participate in the subject matter expert questionnaire for the Foreign Policy and Diplomacy Service (FPDS) staffing model. Your responses will be converted into data for the FPDS multilateral staffing model to guide and support FPDS staffing decisions."
    }
   }
  ]
 }