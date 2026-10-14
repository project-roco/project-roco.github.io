// RoCo content for the shared project website template.
// Edit this file for project text, links, media, and colors, then run:
// node ../project-website-template/scripts/update-project.mjs .
window.PAPER_CONTENT = {
  "schemaVersion": 1,
  "sectionOrder": [
    "abstract",
    "rocobench",
    "method",
    "episodes",
    "real-world",
    "dataset",
    "acknowledgements",
    "citation",
    "contact"
  ],
  "theme": {
    "accent": "#4780bd",
    "text": "#253243",
    "tintBackground": false,
    "backgroundTintPercent": 0,
    "codeTintPercent": 8
  },
  "media": {
    "autoplay": true,
    "pauseOthers": false
  },
  "paper": {
    "name": "RoCo",
    "title": "Dialectic Multi-Robot Collaboration with Large Language Models",
    "titleLines": [
      "Dialectic Multi-Robot Collaboration",
      "with Large Language Models"
    ],
    "description": "We propose a novel approach to multi-robot collaboration that harnesses the power of pre-trained large language models (LLMs) for both high-level communication and low-level path planning.",
    "siteUrl": "https://project-roco.github.io/",
    "socialImage": "assets/images/rocobench.jpg",
    "analyticsId": "G-W89SB0LDFH",
    "authors": [
      {
        "name": "Mandi Zhao",
        "website": "https://mandizhao.github.io",
        "affiliations": ["1"]
      },
      {
        "name": "Shreeya Jain",
        "website": "https://www.linkedin.com/in/shreeyajain/",
        "affiliations": ["2"]
      },
      {
        "name": "Shuran Song",
        "website": "https://www.cs.columbia.edu/~shurans/",
        "affiliations": ["1", "2"]
      }
    ],
    "affiliations": [
      {
        "id": "1",
        "name": "Columbia University",
        "website": ""
      },
      {
        "id": "2",
        "name": "Stanford University",
        "website": ""
      }
    ],
    "authorNotes": "",
    "conference": "",
    "logos": [],
    "links": [
      {
        "label": "Arxiv",
        "url": "https://arxiv.org/abs/2307.04738"
      },
      {
        "label": "Code",
        "url": "https://github.com/MandiZhao/robot-collab"
      },
      {
        "label": "Appendix",
        "url": "RoCo_ICRA2024_appendix.pdf"
      },
      {
        "label": "Video",
        "url": "https://www.youtube.com/embed/NoaDMlbrrWY"
      }
    ],
    "video": {
      "src": "assets/videos/teaser.mp4",
      "poster": "assets/images/teaser-poster.jpg",
      "title": "",
      "caption": "",
      "links": [],
      "loop": false,
      "width": 1280,
      "height": 720,
      "alt": "RoCo multi-robot collaboration teaser",
      "type": "video/mp4"
    }
  },
  "abstract": {
    "title": "Abstract",
    "paragraphs": [
      "We propose a novel approach to multi-robot collaboration that harnesses the power of pre-trained large language models (LLMs) for both high-level communication and low-level path planning. Robots are equipped with LLMs to discuss and collectively reason task strategies; then generate sub-task plans and task space waypoint paths, which are used by a multi-arm motion planner to accelerate trajectory planning. We also provide feedback from the environment, such as collision checking, and prompt the LLM agents to improve their plan and waypoints in-context. For evaluation, we introduce RoCoBench, a 6-task benchmark covering a wide range of multi-robot collaboration scenarios, accompanied by a text-only dataset for agent representation and reasoning. We experimentally demonstrate the effectiveness of our approach: it achieves high success rates across all tasks in RoCoBench and adapts to variations in task semantics. Our dialog setup offers high interpretability and flexibility: in real world experiments, we show RoCo easily incorporates human-in-the-loop, where a user can communicate and collaborate with a robot agent to complete tasks together."
    ]
  },
  "rocobench": {
    "title": "RoCoBench",
    "navTitle": "RoCoBench",
    "blocks": [
      {
        "figure": {
          "src": "assets/images/rocobench.jpg",
          "alt": "The six RoCoBench multi-robot collaboration tasks.",
          "width": 2400,
          "height": 1110,
          "captionLabel": "",
          "caption": ""
        }
      },
      {
        "paragraphs": [
          "We introduce RoCoBench, a suite of 6 multi-robot collaboration tasks in a tabletop manipulation setting. The tasks involve common-sense objects that are semantically easy to understand for LLMs, and span a repertoire of collaboration scenarios that require different robot communication and coordination behaviors."
        ]
      }
    ]
  },
  "method": {
    "title": "Method Overview",
    "navTitle": "Method",
    "blocks": [
      {
        "figure": {
          "src": "assets/images/method.jpg",
          "alt": "RoCo dialog, sub-task planning, and multi-arm motion planning.",
          "width": 2400,
          "height": 767,
          "captionLabel": "",
          "caption": ""
        }
      },
      {
        "paragraphs": [
          "RoCo consists of three main components: 1) Multi-agent dialog via LLMs: each robot is equipped with an LLM that `talks' on its behalf, enabling a discussion of task strategy. 2) LLM-Generated Sub-task Plan: the dialog ends with a proposal of sub-task plan, including optionally a path of task space waypoints, and environment feedback on invalid plans are provided for the agents to improve. 3) Multi-arm motion planning: A validated sub-task plan then produces goal configurations for the robot arms, which are used by a centralized multi-arm motion planner that outputs trajectories for each robot."
        ]
      },
      {
        "title": "Technical Summary Video",
        "embed": {
          "src": "https://www.youtube.com/embed/NoaDMlbrrWY",
          "url": "https://www.youtube.com/watch?v=NoaDMlbrrWY",
          "title": "Technical Summary Video",
          "width": 800,
          "height": 450
        }
      }
    ]
  },
  "episodes": {
    "title": "Example Successful Episodes in RoCoBench",
    "videos": [
      {
        "src": "demos/demo_sort_dialog_seed2/video_step_3_full_episode_6seconds.m4v",
        "title": "Task: Sort Cubes",
        "caption": "",
        "links": [
          {
            "label": "[LLM dialog]",
            "url": "demos/demo_sort_dialog_seed2/response_only.html"
          },
          {
            "label": "[LLM dialog and prompts]",
            "url": "demos/demo_sort_dialog_seed2/full_prompt_and_response.html"
          }
        ],
        "loop": false,
        "width": 1800,
        "height": 1440,
        "alt": "Task: Sort Cubes",
        "type": "video/mp4"
      },
      {
        "src": "demos/demo_pack_dialogNoHistory_seed1/video_step_7_full_episode_6seconds.m4v",
        "title": "Task: Pack Grocery",
        "caption": "",
        "links": [
          {
            "label": "[LLM dialog]",
            "url": "demos/demo_pack_dialogNoHistory_seed1/response_only.html"
          },
          {
            "label": "[LLM dialog and prompts]",
            "url": "demos/demo_pack_dialogNoHistory_seed1/full_prompt_and_response.html"
          }
        ],
        "loop": false,
        "width": 1250,
        "height": 1000,
        "alt": "Task: Pack Grocery",
        "type": "video/mp4"
      },
      {
        "src": "demos/demo_sandwich_dialog_seed8/video_step_7_full_episode_6seconds.m4v",
        "title": "Task: Make Sandwich",
        "caption": "",
        "links": [
          {
            "label": "[LLM dialog]",
            "url": "demos/demo_sandwich_dialog_seed8/response_only.html"
          },
          {
            "label": "[LLM dialog and prompts]",
            "url": "demos/demo_sandwich_dialog_seed8/full_prompt_and_response.html"
          }
        ],
        "loop": false,
        "width": 1800,
        "height": 1440,
        "alt": "Task: Make Sandwich",
        "type": "video/mp4"
      },
      {
        "src": "demos/demo_sweep_dialog_seed0/video_step_6_full_episode_6seconds.m4v",
        "title": "Task: Sweep Floor",
        "caption": "",
        "links": [
          {
            "label": "[LLM dialog]",
            "url": "demos/demo_sweep_dialog_seed0/response_only.html"
          },
          {
            "label": "[LLM dialog and prompts]",
            "url": "demos/demo_sweep_dialog_seed0/full_prompt_and_response.html"
          }
        ],
        "loop": false,
        "width": 1800,
        "height": 1440,
        "alt": "Task: Sweep Floor",
        "type": "video/mp4"
      },
      {
        "src": "demos/demo_cabinet_dialog_seed5/video_step_3_full_episode_6seconds.m4v",
        "title": "Task: Arrange Cabinet",
        "caption": "",
        "links": [
          {
            "label": "[LLM dialog]",
            "url": "demos/demo_cabinet_dialog_seed5/response_only.html"
          },
          {
            "label": "[LLM dialog and prompts]",
            "url": "demos/demo_cabinet_dialog_seed5/full_prompt_and_response.html"
          }
        ],
        "loop": false,
        "width": 1250,
        "height": 1000,
        "alt": "Task: Arrange Cabinet",
        "type": "video/mp4"
      },
      {
        "src": "demos/demo_rope_dialog_seed4/video_step_2_full_episode_6seconds.m4v",
        "title": "Task: Move Rope",
        "caption": "",
        "links": [
          {
            "label": "[LLM dialog]",
            "url": "demos/demo_rope_dialog_seed4/response_only.html"
          },
          {
            "label": "[LLM dialog and prompts]",
            "url": "demos/demo_rope_dialog_seed4/full_prompt_and_response.html"
          }
        ],
        "loop": false,
        "width": 1800,
        "height": 1440,
        "alt": "Task: Move Rope",
        "type": "video/mp4"
      }
    ]
  },
  "real-world": {
    "title": "Real World Experiments",
    "navTitle": "Experiments",
    "blocks": [
      {
        "paragraphs": [
          "We validate RoCo on a real world setup, where a robot arm collaborates with a human to complete a sorting blocks task. We run RoCo with the modification that only the robot agent is controlled by a GPT-4, and it discusses with a human user that interacts with part of the task workspace. For perception, we use the OWL-ViT object detection model to generate scene description. We evaluate 2 main variation categories: 1) object initialization, i.e. initial block locations are randomized for each run; 2) task order specification, where the agents are asked to follow a fixed order to move the blocks."
        ]
      },
      {
        "videos": [
          {
            "src": "assets/videos/1-no-order-faster.mp4",
            "title": "Successful episode with object initialization and no task order specification",
            "caption": "",
            "links": [],
            "loop": true,
            "width": 1024,
            "height": 798,
            "alt": "Successful episode with object initialization and no task order specification",
            "type": "video/mp4"
          },
          {
            "src": "assets/videos/2-order-faster.mp4",
            "title": "Successful episode with task order specification \"place blocks in order blue, yellow, red\"",
            "caption": "",
            "links": [],
            "loop": true,
            "width": 1024,
            "height": 796,
            "alt": "Successful episode with task order specification \"place blocks in order blue, yellow, red\"",
            "type": "video/mp4"
          }
        ]
      },
      {
        "paragraphs": [
          "The task performance is primarily bottle-necked by incorrect object detection from OWL-ViT, which leads to failure if an incorrect object is picked up or if the task ends early because no objects were detected on the table or inside cups. Thus, we also evaluate two types of human behaviors: first is an oracle human that corrects mistakes in the OWL-ViT-guided scene descriptions and the robot's responses; second is an imperfect human that provides no feedback to those errors."
        ]
      },
      {
        "videos": [
          {
            "src": "assets/videos/3-failure-analysis.mp4",
            "title": "Failure episode with task order specification \"place red block first\"",
            "caption": "",
            "links": [],
            "loop": true,
            "width": 1024,
            "height": 804,
            "alt": "Failure episode with task order specification \"place red block first\"",
            "type": "video/mp4"
          }
        ]
      },
      {
        "videos": [
          {
            "src": "assets/videos/4-failure-analysis.mp4",
            "title": "Failure episode with improper human",
            "caption": "",
            "links": [],
            "loop": false,
            "width": 1024,
            "height": 796,
            "alt": "Failure episode with improper human",
            "type": "video/mp4"
          },
          {
            "src": "assets/videos/4-failure-analysis-oracle.mp4",
            "title": "Successful episode with oracle human",
            "caption": "",
            "links": [],
            "loop": false,
            "width": 1024,
            "height": 796,
            "alt": "Successful episode with oracle human",
            "type": "video/mp4"
          }
        ]
      }
    ]
  },
  "dataset": {
    "title": "RoCoBench-Text: Multi-Agent Representation and Reasoning Dataset",
    "navTitle": "Dataset",
    "paragraphs": [
      "We curate a text-based dataset that evaluates an LLM's agent representation and task reasoning ability, without requiring robotic environment interaction. RoCoBench-Text builds on data from our evaluation runs on RoCoBench, and contains a series of additional questions that are more open-ended and go beyond simply finding the next best action plan. This dataset contains yes/no, multiple-choice or short question-answering questions that evaluate a range of different reasoning abilities, we explain each category below. Click expand to view each example questions in the dataset."
    ],
    "blocks": [
      {
        "title": "1. Self-Knowledge - Agent Capability",
        "paragraphs": [
          "This category contains 57 questions, based on Sort Cubes task from RoCoBench. By asking an LLM to explain an agent's own capability under the given task constraints, these questions evaluate how well the LLM represents and establishes the identity of individual agents."
        ],
        "details": [
          {
            "title": "Example#1: Sort Cubes - Alice",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ### \n 7 panels on the table, ordered left to right: panel1,...,panel7. They form a straight assembly line, panel1 is closed to panel2 and farthest from panel7.\n You are robot Alice in front of panel2. You are collaborating with Bob, Chad to sort cubes into their target panels. The task is NOT done until all three cubes are sorted.\n At current round:\n blue_square is on panel5\n pink_polygon is on panel7\n yellow_trapezoid is on panel1\n Your goal is to place blue_square on panel2, but you can only reach panel1, panel2, panel3: this means you can only pick cubes from these panels, and can only place cubes on these panels.\n Never forget you are Alice! Never forget you can only reach panel1, panel2, panel3!\n \n ### User Prompt ### \n You are Alice. List all panels that are out of your reach. Think step-by-step. Answer with a list of panel numbers, e.g. [1, 2] means you can't reach panel 1 and 2.\n \n ### Solution ### \n ",
                {
                  "text": "[4, 5, 6, 7]",
                  "highlight": true
                },
                ""
              ]
            ]
          },
          {
            "title": "Example#2: Sort Cubes - Bob",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ### \n 7 panels on the table, ordered left to right: panel1,...,panel7. They form a straight assembly line, panel1 is closed to panel2 and farthest from panel7.\n You are robot Bob in front of panel4. You are collaborating with Alice, Chad to sort cubes into their target panels. The task is NOT done until all three cubes are sorted.\n At current round:\n blue_square is on panel5\n pink_polygon is on panel7\n yellow_trapezoid is on panel3\n Your goal is to place pink_polygon on panel4, but you can only reach panel3, panel4, panel5: this means you can only pick cubes from these panels, and can only place cubes on these panels.\n Never forget you are Bob! Never forget you can only reach panel3, panel4, panel5!\n \n ### User Prompt ### \n You are Bob. At the current round, which cube(s) among blue_square,pink_polygon,yellow_trapezoid can you reach? Think step-by-step. Answer with a list of all cube names that you can reach, answer None if you can't reach any cube. \n ### Solution ### \n ",
                {
                  "text": "blue_square, yellow_trapezoid",
                  "highlight": true
                },
                ""
              ]
            ]
          }
        ]
      },
      {
        "title": "2. Self-Knowledge - Memory Retrival",
        "paragraphs": [
          "This category contains 44 total questions, based on Make Sandwich and Sweep Floor tasks from RoCoBench. By providing a history of agent dialog and environment actions and asking an LLM to reason about an agent's past, the questions evaluates how well the LLM performs memory retrieval and reasoning for individual agents."
        ],
        "details": [
          {
            "title": "Example: Sweep Floor - Alice",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ### \n [History] \n == Round#0 == \n [Chat History] \n [Alice]: \n Bob, let's sweep up the blue_cube first since it's closest to me. I'll MOVE to the blue_cube, and you should do the same. After that, we can proceed with the SWEEP action. What do you think?\n [Bob]:\n Alice, I think we should go for the green_cube first since it's closer to me. Let's both MOVE to the green_cube, and then we can SWEEP it up. What do you think?\n \n NAME Bob ACTION MOVE green_cube\n PROCEED\n [Alice]:\n Bob, I understand the green_cube is closer to you, but the blue_cube is closer to me and we can save time by going for it first. Let's both MOVE to the blue_cube, and then we can SWEEP it up. What do you think?\n \n NAME Alice ACTION MOVE blue_cube\n PROCEED\n [Bob]:\n Alice, I see your point. Let's both MOVE to the blue_cube first, and then we can SWEEP it up.\n \n NAME Bob ACTION MOVE blue_cube\n PROCEED\n [Alice]:\n EXECUTE\n NAME Alice ACTION MOVE blue_cube\n NAME Bob ACTION MOVE blue_cube\n [Executed Action]\n Alice: MOVE blue_cube\n Bob: MOVE blue_cube\n == Round#1 ==\n [Omitted]\n == Round#2 ==\n [Omitted] \n == Current Round ==\n You are a robot called Alice, and you are collaborating with Bob to sweep up all the cubes on the table.\n You hold a dustpan.\n To sweep up a cube, you and Bob must get close to it by MOVE to opposite sides of the same cube. You must WAIT at the same cube while Bob SWEEPs.\n Talk with Bob to coordinate together and decide which cube to sweep up first.\n At the current round:\n Your gripper is at (0.8, 0.1, 0.2), holding dustpan, in front of green_cube with distance: 0.31\n red_cube is at (0.8, 0.3, 0.2), inside dustpan;\n green_cube is at (1.0, 0.6, 0.2), on the table;\n blue_cube is at (0.7, 0.3, 0.2), inside dustpan;\n \n ### User Prompt ### \n You are Alice. Based on [History] and all the past executed actions, what's the exact order of cubes that got swept into the dustpan? List them in the exact order, first to last, don't list cubes that are not swept yet. For example, output 'yellow_cube, blue_cube'. Think step-by-step.\n ### Solution ### \n ",
                {
                  "text": "blue_cube, red_cube",
                  "highlight": true
                },
                ""
              ]
            ]
          }
        ]
      },
      {
        "title": "3. Communication - Inquiry",
        "paragraphs": [
          "This category contains 41 multiple-choice questions, based on Arrange Cabinet task from RoCoBench. The questions ask an LLM to speak as an agent and choose the most appropriate inquiry to seek information that helps their task reasoning."
        ],
        "details": [
          {
            "title": "Example#1: Arrange Cabinet - Alice",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ### \n You are a robot Alice, collaborating with Bob, Chad to pick a mug and a cup out of cabinet, and place them on correct coasters. \n Both left and right cabinet doors should be opened and held open, while anything inside can be picked. You must coordinate together to complete the task. \n Remember that you can only reach left_door_handle, mug, cup\n At current round: \n left door is open, right door is open,\n mug is inside cabinet; cup is inside cabinet;\n Your gripper is holding left_door_handle,\n Bob's gripper is holding right_door_handle,\n Chad's gripper is holding nothing,\n \n ### User Prompt ### \n You are thinking about picking right_door_handle. Who and what should you ask to confirm this action? \n Reason about the task and select the best response from the options below. You must first output a single option number, then give a very short, one-line reason for why you choose it. For example: output '[A] because it's the most appropriate.'\n [A] tell others about this plan because you are free and right_door_handle is within your reach.\n ",
                {
                  "text": "[B] since right_door_handle is not within your reach, you ask if Bob or Chad can reach it.",
                  "highlight": true
                },
                "\n [C] you can reach right_door_handle, but your gripper is occupied, so you ask if Bob or Chad can help since they are free.\n [D] all three of your grippers are occupied, so it's better to wait until later."
              ]
            ]
          },
          {
            "title": "Example#2: Arrange Cabinet - Bob",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ### \n You are a robot Bob, collaborating with Alice, Chad to pick a mug and a cup out of cabinet, and place them on correct coasters.\n Both left and right cabinet doors should be opened and held open, while anything inside can be picked. You must coordinate together to complete the task.\n Remember that you can only reach right_door_handle\n At current round:\n left door is closed, right door is closed,\n mug is inside cabinet; cup is inside cabinet;\n Alice's gripper is holding nothing,\n Your gripper is holding nothing,\n Chad's gripper is holding nothing\n \n ### User Prompt ### \n You are thinking about picking right_door_handle. Who and what should you ask to confirm this action?\n Reason about the task and select the best response from the options below. You must first output a single option number, then give a very short, one-line reason for why you choose it. For example: output '[A] because it's the most appropriate.'\n ",
                {
                  "text": "[A] tell others about this plan because you are free and right_door_handle is within your reach.",
                  "highlight": true
                },
                "\n [B] since right_door_handle is not within your reach, you ask if Alice or Chad can reach it.\n [C] you can reach right_door_handle, but your gripper is occupied, so you ask if Alice or Chad can help since they are free.\n [D] all three of your grippers are occupied, so it's better to wait until later."
              ]
            ]
          },
          {
            "title": "Example#3: Arrange Cabinet - Chad",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ### \n You are a robot Chad, collaborating with Alice, Bob to pick a mug and a cup out of cabinet, and place them on correct coasters.\n Both left and right cabinet doors should be opened and held open, while anything inside can be picked. You must coordinate together to complete the task.\n Remember that you can only reach right_door_handle, mug, cup\n At current round:\n left door is closed, right door is closed,\n mug is inside cabinet; cup is inside cabinet;\n Alice's gripper is holding nothing,\n Bob's gripper is holding nothing,\n Your gripper is holding nothing,\n \n ### User Prompt ### \n You are thinking about picking right_door_handle. Who and what should you ask to confirm this action?\n Reason about the task and select the best response from the options below. You must first output a single option number, then give a very short, one-line reason for why you choose it. For example: output '[A] because it's the most appropriate.'\n ",
                {
                  "text": "[A] tell others about this plan because you are free and right_door_handle is within your reach.",
                  "highlight": true
                },
                "\n [B] since right_door_handle is not within your reach, you ask if Alice or Bob can reach it.\n [C] you can reach right_door_handle, but your gripper is occupied, so you ask if Alice or Bob can help since they are free.\n [D] all three of your grippers are occupied, so it's better to wait until later."
              ]
            ]
          }
        ]
      },
      {
        "title": "4. Communication - Respond",
        "paragraphs": [
          "This category contains 96 yes/no questions, based on Sort Cubes task from RoCoBench. The questions ask an LLM to speak for one agent and choose the most appropriate response to other agents under a given task context."
        ],
        "details": [
          {
            "title": "Example#1: Sort Cubes - Alice",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ### \n 7 panels on the table, ordered left to right: panel1,...,panel7. They form a straight assembly line, panel1 is closed to panel2 and farthest from panel7.\n You are a robot Alice in front of panel2. You are collaborating with Bob, Chad to sort cubes into their target panels. The task is NOT done until all three cubes are sorted.\n At current round:\n blue_square is on panel3\n pink_polygon is on panel3\n yellow_trapezoid is on panel5\n Your goal is to place blue_square on panel2, but you can only reach panel1, panel2, panel3: this means you can only pick cubes from these panels, and can only place cubes on these panels.\n You can help others by moving other cubes that are within your reachable panels.\n \n ### User Prompt ### \n You are Alice. Chad needs to put yellow_trapezoid on panel6, and asked you for help.\n How should you respond? Think step-by-step, remember you can only reach panel1, panel2, panel3. If you can help, answer YES and propose a consice plan to help. If you can't help, you must answer NO.\n YES \n ",
                {
                  "text": "NO",
                  "highlight": true
                },
                ""
              ]
            ]
          },
          {
            "title": "Example#2: Sort Cubes - Bob",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ### \n 7 panels on the table, ordered left to right: panel1,...,panel7. They form a straight assembly line, panel1 is closed to panel2 and farthest from panel7.\n You are a robot Bob in front of panel4. You are collaborating with Alice, Chad to sort cubes into their target panels. The task is NOT done until all three cubes are sorted.\n At current round:\n blue_square is on panel3\n pink_polygon is on panel3\n yellow_trapezoid is on panel5\n Your goal is to place pink_polygon on panel4, but you can only reach panel3, panel4, panel5: this means you can only pick cubes from these panels, and can only place cubes on these panels. You can help others by moving other cubes that are within your reachable panels.\n \n ### User Prompt ### \n You are Bob. Chad needs to put yellow_trapezoid on panel6, and asked you for help.\n How should you respond? Think step-by-step, remember you can only reach panel1, panel2, panel3. If you can help, answer YES and propose a consice plan to help. If you can't help, you must answer NO.\n ",
                {
                  "text": "YES",
                  "highlight": true
                },
                "\n NO"
              ]
            ]
          },
          {
            "title": "Example#3: Sort Cubes - Chad",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ### \n 7 panels on the table, ordered left to right: panel1,...,panel7. They form a straight assembly line, panel1 is closed to panel2 and farthest from panel7.\n You are a robot Chad in front of panel6. You are collaborating with Alice, Bob to sort cubes into their target panels. The task is NOT done until all three cubes are sorted.\n At current round:\n blue_square is on panel3\n pink_polygon is on panel3\n yellow_trapezoid is on panel5\n Your goal is to place yellow_trapezoid on panel6, but you can only reach panel5, panel6, panel7: this means you can only pick cubes from these panels, and can only place cubes on these panels. You can help others by moving other cubes that are within your reachable panels.\n UserPrompt\n \n ### User Prompt ### \n You are Chad. Bob needs to put pink_polygon on panel4, and asked you for help.\n How should you respond? Think step-by-step, remember you can only reach panel1, panel2, panel3. If you can help, answer YES and propose a consice plan to help. If you can't help, you must answer NO.\n YES\n ",
                {
                  "text": "NO",
                  "highlight": true
                },
                ""
              ]
            ]
          }
        ]
      },
      {
        "title": "5. Adaptation: Unexpected Scenarios",
        "paragraphs": [
          "This category contains 31 questions in the format of multiple choice (A, B, C), based on 3 RoCoBench tasks: Arrange Cabinet, Make Sandwich, Sweep Floor. The questions hypothesize unexpected situations that were not specified in the task context, and evaluate an LLM-represented agent's ability to choose the most appropriate response."
        ],
        "details": [
          {
            "title": "Example#1: Arrange Cabinet",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ###\n You are a robot Alice, collaborate with Bob, Chad to pick a mug and a cup out of cabinet, and place them on correct coasters. Both left and right cabinet doors should be OPENed and held open, while anything inside can be PICKed. You must coordinate to complete the task most efficiently while avoiding collision. You can only reach left_door_handle, mug, cup. \n At current round: left door is open, right door is open, mug is inside cabinet; cup is inside cabinet. Your gripper is holding left_door_handle, Bob's gripper is holding right_door_handle, Chad's gripper is holding nothing. \n \n ### User Prompt ###\n You are Alice. Your gripper is stuck at holding left_door_handle and can't move anywhere else. What would you say to Bob and Chad? Select exactly one option from below. You must output a single option number (e.g. [D], then give a very short, one-line reason for why you choose it. Options: \n ",
                {
                  "text": "[A]: My gripper is stuck but it shouldn't affect us completing the task, since I need to hold the left door open.",
                  "highlight": true
                },
                " \n [B]: Guys, my gripper is stuck, we can't complete the task anymore.\n [C]: Guys, I need to fix my stuck gripper, please pause and wait for me."
              ]
            ]
          },
          {
            "title": "Example#2: Make Sandwich",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ###\n You are a robot Dave, collaborating with Chad to make a [vegetarian_sandwich]. Food items must be stacked following this order: bread_slice1, tomato, cheese, cucumber, bread_slice2, where bread_slice1 must be PUT on cutting_board. You must stay on left side of the table! This means you can only PICK food from left side, and Chad can only PICK from the other side. Only one robot can PUT at a time, so you must coordinate with Chad. At the current round: You can see these food items are on your reachable side:\n bread_slice1: on cutting_board\n bacon: on your side\n cheese: atop tomato\n tomato: atop bread_slice1\n cucumber: atop cheese\n Your gripper is holding bread_slice2\n \n ### User Prompt ###\n You are Dave. Chad said he just saw bread_slice2 sitting on his side of the table. What should you say to Chad? Select exactly one option from below. You must first output a single option number (e.g. [D]), then give a very short, one-line reason for why you choose it. Options: [A]: Sounds good Chad, go ahead and pick it up.\n ",
                {
                  "text": "[B]: I suggest we use my slice since I already have it in my gripper, it would finish the task faster.",
                  "highlight": true
                },
                "\n [C]: Thanks Chad, you can pick and place it to finish the sandwich since I don't have bread_slice2 on my side."
              ]
            ]
          },
          {
            "title": "Example#3: Sweep Floor",
            "format": "code",
            "paragraphs": [
              [
                "### System Prompt ###\n You are a robot called Bob, and you are collaborating with Alice to sweep up all the cubes on the table.\n You hold a broom and Alice holds a dustpan. To sweep up a cube, you and Alice must get close to it by MOVE to opposite sides of the same cube. You must move to the same cube as Alice before she sweeps it up. Then Alice can dump the cubes into trash_bin.\n Talk with Alice to coordinate together and decide which cube to sweep up first.\n At the current round: red_cube is on the table; green_cube is on the table; blue_cube is on the table\n \n ### User Prompt ### \n You are Bob. Alice just told you the trash_bin is too far for her to dump the cubes, but the trash_bin is within your reach. What would you say to Alice? Reason about the task and select the best response from the three options below. You must first output a single option number, then give a very short, one-line reason for why you choose it. For example: output '[A] because it gives the most appropriate response.' Options:\n [A]: Alice, since I can reach the trash_bin, I will do the dumping instead.\n [B]: Alice, since my gripper is free, I can help you move the trasn_bin closer.\n ",
                {
                  "text": "[C]: Alice, I can help you move trash_bin closer to you, but first I need to put my broom down.",
                  "highlight": true
                },
                ""
              ]
            ]
          }
        ]
      }
    ]
  },
  "acknowledgements": {
    "title": "Acknowledgements",
    "paragraphs": [
      "This work was supported in part by NSF Award #2143601, #2037101, and #2132519. We would like to thank Google for the UR5 robot hardware. The views and conclusions contained herein are those of the authors and should not be interpreted as necessarily representing the official policies, either expressed or implied, of the sponsors. The authors would like to thank Zeyi Liu, Zhenjia Xu, Huy Ha, Cheng Chi, Samir Gadre, Mengda Xu, and Dominik Bauer for their fruitful discussions throughout the project and for providing helpful feedback on initial drafts of the manuscript."
    ]
  },
  "citation": {
    "title": "BibTeX",
    "bibtex": "@misc{mandi2023roco,\n\ttitle={RoCo: Dialectic Multi-Robot Collaboration with Large Language Models}, \n\tauthor={Zhao Mandi and Shreeya Jain and Shuran Song},\n\tyear={2023},\n\teprint={2307.04738},\n\tarchivePrefix={arXiv},\n\tprimaryClass={cs.RO}\n}"
  },
  "contact": {
    "title": "Contact",
    "paragraphs": [
      [
        "Please reach out to ",
        {
          "text": "Mandi Zhao",
          "url": "https://mandizhao.github.io/"
        },
        ": mandi.zhao AT cs.columbia.edu"
      ]
    ]
  }
};
