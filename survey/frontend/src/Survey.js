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
        "type": "text",
        "name": "question1",
        "title": "Mission",
        "description": "",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "question2",
        "title": "Are there other core services FPDS officers perform at this mission?",
        "isRequired": true
       },
       {
        "type": "matrix",
        "name": "question3",
        "title": "Please identify the importance of each core service at your mission!",
        "isRequired": true,
        "columns": [
         {
          "value": "Very Low",
          "text": "Very Low"
         },
         {
          "value": "Low",
          "text": "Low"
         },
         {
          "value": "Medium",
          "text": "Medium"
         },
         {
          "value": "High",
          "text": "High"
         },
         {
          "value": "Very High",
          "text": "Very High"
         }
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
        "type": "panel",
        "name": "panel1",
        "elements": [
         {
          "type": "text",
          "name": "question4",
          "title": {
            "default": "What is the current number of permanent CBS FPDS officers’ positions in this multilateral mission?",
            "fr": "frWhat is the current number of permanent CBS FPDS officers’ positions in this multilateral mission?"
          },
          "isRequired": true,
          "inputType": "number"
         },
         {
          "type": "text",
          "name": "question5",
          "title": "What is the current number of temporary CBS FPDS officers’ positions in this multilateral mission?",
          "isRequired": true,
          "inputType": "number"
         },
         {
          "type": "text",
          "name": "question6",
          "title": "What is the number of the Non-FPDS CBS officers performing core services normally done by FPDSofficers?",
          "isRequired": true,
          "inputType": "number"
         }
        ],
        "title": {
         "default": "Number of FPDS officers (performing FPDS work)",
         "fr": "frNumber of FPDS officers (performing FPDS work)"
        }
       },
       {
        "type": "matrixdropdown",
        "name": "question7",
        "title": {
            "default": "Tell us about the classification and current FTE number of permanent CBS FPDS officers:",
            "fr": "frTell us about the classification and current FTE number of permanent CBS FPDS officers:"
        },
        "columns": [
         {
          "name": "FS 01",
          "title": "FS 01",
          "cellType": "text",
          "inputType": "number"
         },
         {
          "name": "FS 02",
          "title": "FS 02",
          "cellType": "text",
          "inputType": "number"
         },
         {
          "name": "FS 03",
          "title": "FS 03",
          "cellType": "text",
          "inputType": "number"
         },
         {
          "name": "FS 04",
          "title": "FS 04",
          "cellType": "text",
          "inputType": "number"
         },
         {
          "name": "EX 01",
          "title": "EX 01",
          "cellType": "text",
          "inputType": "number"
         },
         {
          "name": "EX 02",
          "title": "EX 02",
          "cellType": "text",
          "inputType": "number"
         },
         {
          "name": "EX 03",
          "title": "EX 03",
          "cellType": "text",
          "inputType": "number"
         },
         {
          "name": "EX 04",
          "title": "EX 04",
          "cellType": "text",
          "inputType": "number"
         },
         {
          "name": "EX 05",
          "title": "EX 05",
          "cellType": "text",
          "inputType": "number"
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
        "name": "question8",
        "title": {
            "default": "What percentage of time each permanent CBS FPDS officer has spent on each of their core services over the past year?",
            "fr": "What percentage of time each permanent CBS FPDS officer has spent on each of their core services over the past year?"
        },
        "columns": [
            {
            "name": "Officer",
            "cellType": "text",
            "inputType": "number",
            "min": 0,
            "max": 1000,
            "step": 1
            },
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
            },   
        ]
       },
       {
          "type": "panel",
          "name": "panel2",
          "elements": [
           {
            "type": "text",
            "name": "question9",
            "isRequired": true,
            "title": {
              "default": "positions (by their numbers) within this service that must be staffed simultaneously to contribute to this task. For example, if the FTE of position #1 must be twice the FTE of position #2 in this task, then write down (#1)= 2(#2) (twinning relation).",
              "fr": "positions (by their numbers) within this service that must be staffed simultaneously to contribute to this task. For example, if the FTE of position #1 must be twice the FTE of position #2 in this task, then write down (#1)= 2(#2) (twinning relation)."
            },
            "inputType": "number"
           },
           {
            "type": "text",
            "name": "question10",
            "isRequired": true,
            "title": {
              "default": "positions (by their numbers) within this service that must be staffed in order to contribute to this task. For example, if the FTE of position #3 must larger than twice the FTE of position #4 in this task, then write down (#3) -2 *(#4) > 0 (supervisory relation).",
              "fr": "positions (by their numbers) within this service that must be staffed in order to contribute to this task. For example, if the FTE of position #3 must larger than twice the FTE of position #4 in this task, then write down (#3) -2 *(#4) > 0 (supervisory relation)."
            },
            "inputType": "number"
           },
           {
            "type": "text",
            "name": "question11",
            "isRequired": true,
            "title": {
              "default": "Express any other relation that exists in staffing to provide this service in the mission (Miscellaneous relation)",
              "fr": "Express any other relation that exists in staffing to provide this service in the mission (Miscellaneous relation)"
            },
            "inputType": "number"
           },
           {
            "type": "matrixdropdown",
            "name": "question12",
            "title": "Core Service",
            "titleLocation": "top",
            "columns": [
             {
              "name": "Column 1",
              "title": "Twinning relation",
              "cellType": "text",
              "inputType": "number"
             },
             {
              "name": "Column 2",
              "title": "Supervisory relation",
              "cellType": "text",
              "inputType": "number"
             },
             {
              "name": "Column 3",
              "title": "Miscellaneous relation",
              "cellType": "text",
              "inputType": "number"
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
          "title": "Please Identify"
         }
      ],
      "description": {
       "default": "Thank you for taking the time to participate in the subject matter expert questionnaire for the Foreign Policy and Diplomacy Service (FPDS) staffing model. Your responses will be converted into data for the FPDS multilateral staffing model to guide and support FPDS staffing decisions.",
       "fr": "frThank you for taking the time to participate in the subject matter expert questionnaire for the Foreign Policy and Diplomacy Service (FPDS) staffing model. Your responses will be converted into data for the FPDS multilateral staffing model to guide and support FPDS staffing decisions."
      }
     }
    ]
   }