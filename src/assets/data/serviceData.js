const serviceData = [
  {
    id: 1,
    title: "Project planning & implementation",
    icon: "ri-map-pin-2-line",
    desc: "On request, CONTEXT absorbs the complete management regarding project set-up, project implementation and project completion analysis.",
    desc2:
      "Regardless of whether it is optimization tasks or solving acute quality problems.",
    subLinks: [
      {
        title: "Case study production shift",
        text: "A supplier to the manufacturing industry relocates its production site.",
        subTexts: [
          {
            title: "Initial situation",
            paragraphs: [
              "Potential loss of quality and threat of collapse in production volumes",
              "Preventive measures at the source location and transfer location have to be taken",
            ],
          },
          {
            title: "Approach",
            paragraphs: [
              "Determining the status quo via: check of the process FMEA and control plans, process capability studies and measurement system analyses, review of all production-related drawings and documents",
              "Time and volume planning including inventory buildup for the time of transfer",
              "Support in launching the transferred line at the new site",
              "Approval of the serial processes",
              "Conduction of performance tests",
              "Control by new process capability studies and measurement system analyses",
            ],
          },
          {
            title: "Results",
            paragraphs: [
              "Comparison with historical data from the old production site",
              "Setting up and monitoring the launch management at the new site",
              "Approval and Lessons Learned",
            ],
          },
        ],
      },
      {
        title: "Case study increase of complaints",
        text: "A car manufacturer identifies an increased volume of customer complaints.",
        subTexts: [
          {
            title: "Initial situation",
            paragraphs: [
              "Increasing number of complaints due to engine start problems",
              "Increased warranty costs for a particular vehicle model",
              "Error patterns suggest correlations with the exhaust system",
            ],
          },
          {
            title: "Approach",
            paragraphs: [
              "Demarcating the problem area to be considered by evaluation of field data",
              "Identifying an illegal drift of the lambda probe values 1 as root cause using the root cause analysis and suitable DoE",
              "1  Lambda probe: Sensor for detection and control of the air content in the exhaust",
            ],
          },
          {
            title: "Results",
            paragraphs: [
              "Compensation of the drift behaviour by appropriate engine remapping in the ECU’s lambda control as a consequence of the results of the design",
            ],
          },
        ],
      },
      {
        title: "Case study AQP",
        text: "A system supplier in the field of electric drives ensures the required quality standards within the scope of a development project.",
        subTexts: [
          {
            title: "Initial situation",
            paragraphs: [
              "Search for a support service within the scope of a development project with a high level of innovation",
              "Demand for: advanced quality planning (AQP), internal coordination and implementation of methods for the detection and evaluation of development risks, and external to the participating development partners/suppliers",
            ],
          },
          {
            title: "Approach",
            paragraphs: [
              "Project planning as part of a service contract",
              "Staffing the required role with an experienced quality manager",
              "Analyzing of the project status",
              "Identifying and evaluating the prior project risks of the development components using a risk filter  ",
            ],
          },
          {
            title: "Results",
            paragraphs: [
              "Creation of an adjusted AQP and coordination with the project plan",
              "Process trainings for the development partners",
              "Coordination, implementation and monitoring of the methods (e.g. FMEA, test planning, software analysis)",
            ],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Consulting",
    icon: "ri-community-line",
    desc: "The focus here is on the ambition that our solutions are both, practical and efficient, while fitting to our customers' processes.",
    desc2:
      "As needed, CONTEXT provides concrete recommendations for action, preceded by pinpoint analyses and leading to tangible results. For instance, when it comes to selecting and using appropriate methods and tools.",
    subLinks: [
      {
        title: "Case study DoE",
        text: "For engines to be developed, the significant influencing factors of selected target parameters need to be identified and optimized.",
        subTexts: [
          {
            title: "Initial situation",
            paragraphs: [
              "Adapting an engine to the increased demands of the European standard Euro 5 in order to meet emission limits  ",
            ],
          },
          {
            title: "Approach",
            paragraphs: [
              "Determining the parameters with siginificant impact on consumption, smoothness and CO/HC/NOx emissions",
              "Setting the identified drivers with the aim of minimizing the specific consumption and the CO/HC/NOx emissions and maximizing the smoothness",
            ],
          },
          {
            title: "Results",
            paragraphs: [
              "System analysis highlights 9 setting parameters with influence on the resulting target parameters",
              "Reduction of the temporal experimental effort by a factor of 300",
              "Identification of the significant influencing factors",
              "Derivation of optimal parameter values considering existing trade-offs",
            ],
          },
        ],
      },
      {
        title: "Case study NRA",
        text: "The system inherent risks for hybrid drives need to be analyzed. The complexity of these systems with all the interactions between their (software) modules lets conventional risk analyses reach their limits and makes an own approach, such as our developed network risk analysis (NRA), necessary.",
        subTexts: [
          {
            title: "Initial situation",
            paragraphs: [
              "Many control units interact with the drive of hybrid vehicles",
              "Combustion engine, electric motor and transmission have to work together flawlessly and customer-optimized – possibly even with further control units",
            ],
          },
          {
            title: "Approach",
            paragraphs: [
              "Analyzing the system environment (control unit software)",
              "Evaluating the system elements (software modules)",
              "Analyzing the connections between the modules",
              "Calculating the modules' own risks",
              "Calculating the linkage risks for the complete control unit",
              "Analyzing the results",
              "Interpreting and presenting the results",
            ],
          },
          {
            title: "Results",
            paragraphs: [
              "Presentation of the modules which bear the highest risks",
              "Presentation of the modules which inherit the highest risks from other modules",
              "Identification of improvement potentials: Which improvement of a module provides most benefit to the overall system?",
            ],
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Trainings",
    icon: "ri-roadster-line",
    desc: "The CONTEXT Academy offers both, company-specific trainings and public seminars open to anyone.",
    desc2:
      "The practical relevance is always in the foreground. The direct implementation in realistic scenarios enables the participants to apply their newly acquired skills immediately.",
    subLinks: [
      {
        title: "Company trainings",
        text: "In addition to the main topics of our training programme we offer individually tailored trainings to meet your needs. The content can be designed in consideration of the field of application, the business constellation and industry. On request we will provide additional support in the form of mentoring the transfer and implementation of the new knowledge into your daily business.",
        subTexts: [
          {
            title: "In-house",
            paragraphs: [
              "Trainings at your site save travel costs for your employees. Furthermore, the usual corporate IT environment gives the participants a feeling of security.",
            ],
          },
          {
            title: "Off-site",
            paragraphs: [
              "In our own modern seminar rooms you are able to concentrate on your chosen topic, far from the distracting daily business.",
              "We assure our personal care in a comfortable learning environment.",
            ],
          },
        ],
      },
      {
        title: "Open trainings",
        text: "Our open trainings address a wide range of participants and thus are bookable for anyone interested.",
        subTexts: [
          {
            title: "Topics and dates",
            paragraphs: [
              "Our open trainings are held regularly. For details please refer to our training programme.",
            ],
          },
          {
            title: "Venue",
            paragraphs: [
              "In our own modern seminar rooms in the north of Munich experienced tutors impart to you methodological knowledge and special skills on selected topics.",
              "We assure our personal care in small, manageable groups and in a comfortable learning environment.",
            ],
          },
        ],
      },
      {
        title: "Conference room rental",
        text: "You are welcome to hire our meeting rooms for your conferences and business meetings, too.",
        subTexts: [
          {
            title: "Range of rooms",
            paragraphs: [
              "We have seven seminar rooms – each with 25 to 50 m² and daylight. By simply combining our two largest rooms, usually separated by a sliding wall, a seated area for about 30 to 70 people can be realized.",
            ],
          },
          {
            title: "Additional services",
            paragraphs: [
              "Optionally, apart from hospitality with hot and cold drinks and biscuits, we offer moderation support, catering and technical equipment.",
              "For inquiries and rates please use the contact form.",
            ],
          },
        ],
      },
    ],
  },

  // {
  //   id: 4,
  //   title: "Lorem Ipsumr",
  //   icon: "ri-timer-flash-line",
  //   desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  // },

  // {
  //   id: 5,
  //   title: "Lorem Ipsumr",
  //   icon: "ri-map-pin-line",
  //   desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  // },

  // {
  //   id: 6,
  //   title: "Lorem Ipsumr",
  //   icon: "ri-flight-takeoff-line",
  //   desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  // },
];

export default serviceData;
