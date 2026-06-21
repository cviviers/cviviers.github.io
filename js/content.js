window.siteContent = {
    profile: {
        name: "Christiaan G.A. Viviers",
        shortName: "Chris Viviers",
        title: "Machine Learning Researcher",
        affiliation: "Eindhoven University of Technology",
        affiliationUrl: "https://www.tue.nl/en/",
        location: "The Netherlands",
        email: "c.g.a.viviers@gmail.com",
        photo: "img/chris_2.jpg",
        cv: "resume/Christiaan_Viviers_CV.pdf",
        links: [
            { label: "Google Scholar", url: "https://scholar.google.com/citations?user=wE8xva4AAAAJ&hl=en&authuser=3", icon: "img/google-scholar.svg" },
            { label: "GitHub", url: "https://github.com/cviviers", icon: "img/github.svg" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/chrisviviers/", icon: "img/linkedin.svg" },
            { label: "Email", url: "mailto:c.g.a.viviers@gmail.com", icon: "img/email.svg" }
        ],
        bio: [
            "I work on machine learning systems that turn complex data into useful representations, with a particular interest in visual understanding, foundation models, and generative methods. My research sits at the intersection of discovery and engineering: building models that can reveal structure in data, support reliable decision-making, and translate scientific ideas into working technology. Across healthcare and other high-impact domains, I am interested in systems that do more than perform well on benchmarks - they should help us understand, design, and build things that were previously out of reach"
        ],
        interests: [
            "machine learning",
            "computer vision",
            "generative models",
            "medical imaging",
            "out-of-distribution detection",
            "robotics",
            "optimization",
            "signal processing",
            "biology",
            "physics"
        ],
        personalNote: "Away from the desk I travel, run, read around the edges of science, and occasionally daydream about humanity as a Type III Kardashev-scale civilization."
    },

    updates: [
        {
            date: "2025-11",
            text: "Developed SPECTRE, a transformer-based foundation model for volumetric CT, with Cris Claessens.",
            link: "projects.html"
        },
        {
            date: "2025-11",
            text: "Won the Purple NECtar X Innovation in Defence 2025 challenge with a synthetic data pipeline for novel object detection.",
            link: "projects.html"
        },
        {
            date: "2025",
            text: "DisCoPatch accepted to ICCV 2025.",
            link: "research.html"
        },
        {
            date: "2024",
            text: "Completed PhD thesis on enhanced computer vision methods for cancer detection and precision guidance in medical imaging.",
            link: "projects/thesis/CV_thesis_20241129.pdf"
        }
    ],

    career: [
        {
            period: "Jan 2025 - present",
            title: "Machine Learning Engineer",
            organization: "Theta Vision",
            location: "The Netherlands",
            description: "Leading applied machine learning work, from data curation and model development to robustness evaluation, ISO compliance, and deployment.",
            highlights: [
                "Built and maintained NVIDIA Jetson deployment stacks with quantization, hardware-aware profiling, and real-time parallel processing pipelines.",
                "Won the Purple NECtar X Innovation in Defense 2025 challenge using synthetic data and generative models for novel object detection."
            ]
        },
        {
            period: "Jun 2024 - present",
            title: "Postdoctoral Researcher, Image Generative Models",
            organization: "Eindhoven University of Technology",
            location: "Eindhoven, The Netherlands",
            description: "Work package lead in the TASTI project, developing image generative models and evaluation pipelines for synthetic data with downstream utility across healthcare, automotive, manufacturing, and agriculture.",
            highlights: [
                "Developing dataset curation and benchmarking pipelines for synthetic-to-real transfer.",
                "Collaborating with academic and industry partners on robust evaluation and technical dissemination."
            ],
            link: "https://www.tue.nl/en/"
        },
        {
            period: "Jun 2018 - Dec 2020",
            title: "Software Engineer, Computer Vision",
            organization: "Philips Image Guided Therapy",
            location: "The Netherlands",
            description: "Built computer vision methods and tooling for automated testing and validation of production image-guided therapy systems.",
            highlights: [
                "Worked with R&D and engineering teams on system-level validation, robustness, and maintainability of deployed vision solutions."
            ]
        },
        {
            period: "Jan 2016 - Mar 2016",
            title: "Researcher, Biosensors & Microfluidics",
            organization: "SAND Microfluidics Lab, Stellenbosch University",
            location: "South Africa",
            description: "Developed and patented a biosensor prototype for bacteria detection, contributing to experimental design and prototyping."
        },
    ],

    publications: [
        {
            year: 2026,
            venue: "CVPR",
            title: "Scaling Self-Supervised and Cross-Modal Pretraining for Volumetric CT Transformers",
            authors: "Cris Claessens*, Christiaan Viviers*, Giacomo D'Amicantonio, Egor Bondarev, Fons van der Sommen",
            source: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
            highlight: true,
            tags: ["foundation models", "computed tomography", "vision-language pretraining"],
            links: [
                { label: "pdf", url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Claessens_Scaling_Self-Supervised_and_Cross-Modal_Pretraining_for_Volumetric_CT_Transformers_CVPR_2026_paper.pdf" },
                { label: "code", url: "https://github.com/cclaess/SPECTRE" }
            ]
        },
        {
            year: 2026,
            venue: "Preprint",
            title: "Evidence-Grounded Frontier Mapping and Agentic Hypothesis Generation in Nanomedicine",
            authors: "Christiaan G.A. Viviers, Koen de Bruin, Mirre M. Trines, Ayla M. Hokke, Roy van der Meel, Avi Schroeder, Twan Lammers, Willem J.M. Mulder, Fons van der Sommen",
            source: "arXiv preprint",
            tags: ["pArticleMap", "agentic AI", "nanomedicine"],
            links: [
                { label: "pdf", url: "https://arxiv.org/pdf/2605.18144" },
                { label: "arxiv", url: "https://arxiv.org/abs/2605.18144" }
            ]
        },
        {
            year: 2025,
            venue: "ICCV",
            title: "DisCoPatch: Taming Adversarially-driven Batch Statistics for Improved Out-of-Distribution Detection",
            authors: "C.G.A. Viviers*, F. Caetano*, L. A. Zavala-Mondragon, P.H.N. de With, F. van der Sommen",
            source: "International Conference on Computer Vision",
            highlight: true,
            tags: ["OOD detection", "computer vision"],
            links: [
                { label: "project", url: "https://caetas.github.io/discopatch.html" },
                { label: "code", url: "https://github.com/caetas/DisCoPatch" },
                { label: "arxiv", url: "https://arxiv.org/abs/2501.08005" }
            ]
        },
        {
            year: 2025,
            venue: "ICCV AIM",
            title: "MedShift: Implicit Conditional Transport for X-Ray Domain Adaptation",
            authors: "C.G.A. Viviers*, F. Caetano*, P.H.N. de With, F. van der Sommen",
            source: "Advances in Image Manipulation Workshop at ICCV 2025",
            tags: ["domain adaptation", "x-ray"],
            links: [
                { label: "project", url: "https://caetas.github.io/medshift.html" },
                { label: "code", url: "https://github.com/caetas/MedShift" }
            ]
        },
        {
            year: 2025,
            venue: "ICCV ADFM",
            title: "Zero-Shot Image Anomaly Detection Using Generative Foundation Models",
            authors: "L. Abdi, M.M.A. Valiuddin, F. Caetano, C.G.A. Viviers, F. van der Sommen",
            source: "Anomaly Detection with Foundation Models Workshop at ICCV 2025",
            tags: ["anomaly detection", "foundation models"],
            links: [
                { label: "arxiv", url: "https://arxiv.org/abs/2507.22692" }
            ]
        },
        {
            year: 2025,
            venue: "MICCAI DGM",
            title: "MedSymmFlow: Bridging Generative Modeling and Classification in Medical Imaging through Symmetrical Flow Matching",
            authors: "F. Caetano, L. Abdi, C.G.A. Viviers, M.M.A. Valiuddin, F. van der Sommen",
            source: "Deep Generative Models Workshop at MICCAI 2025",
            tags: ["generative models", "medical imaging"],
            links: [
                { label: "project", url: "https://caetas.github.io/medsymmflow.html" },
                { label: "code", url: "https://github.com/caetas/MedSymmFlow" },
                { label: "arxiv", url: "https://arxiv.org/abs/2501.08005" }
            ]
        },
        {
            year: 2025,
            venue: "MICCAI UNSURE",
            title: "Out-of-Distribution Detection in Medical Imaging via Diffusion Trajectories",
            authors: "L. Abdi, F. Caetano, M.M.A. Valiuddin, C.G.A. Viviers, H. Joudeh, F. van der Sommen",
            source: "Uncertainty for Safe Utilization of Machine Learning in Medical Imaging at MICCAI 2025",
            tags: ["diffusion", "OOD detection"],
            links: [
                { label: "arxiv", url: "https://arxiv.org/abs/2507.23411" }
            ]
        },
        {
            year: 2025,
            venue: "SPIE MI",
            title: "AdverX-Ray: Ensuring X-Ray Integrity through Frequency-Sensitive Adversarial VAEs",
            authors: "C.G.A. Viviers*, F. Caetano*, Lena Filatova, P.H.N. de With, F. van der Sommen",
            source: "SPIE Medical Imaging",
            tags: ["x-ray", "generative models"],
            links: [
                { label: "abstract", url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13406/134060I/AdverX-Ray--ensuring--x-ray-integrity-through-frequency/10.1117/12.3045893.short" },
                { label: "project", url: "https://caetas.github.io/adverx.html" },
                { label: "arxiv", url: "https://arxiv.org/abs/2502.16610" },
                { label: "code", url: "https://github.com/caetas/AdverX" }
            ]
        },
        {
            year: 2025,
            venue: "TBD",
            title: "A Review of Bayesian Uncertainty Quantification in Deep Probabilistic Image Segmentation",
            authors: "M.M.A. Valiuddin, R.J.G. van Sloun*, C.G.A. Viviers*, P.H.N. de With, F. van der Sommen",
            source: "Preprint",
            tags: ["uncertainty", "segmentation"],
            links: [
                { label: "arxiv", url: "https://arxiv.org/abs/2411.16370" }
            ]
        },
        {
            year: 2024,
            venue: "ECCV",
            title: "Can Your Generative Model Detect Out-of-Distribution Covariate Shift?",
            authors: "C.G.A. Viviers, M.M.A. Valiuddin*, F. Caetano*, L. Abdi, Lena Filatova, P.H.N. de With, F. van der Sommen",
            source: "European Conference on Computer Vision",
            highlight: true,
            tags: ["generative models", "OOD detection"],
            links: [
                { label: "abstract", url: "https://link.springer.com/chapter/10.1007/978-3-031-91585-7_12" },
                { label: "arxiv", url: "https://arxiv.org/abs/2409.03043" },
                { label: "code", url: "https://github.com/cviviers/CovariateFlow" }
            ]
        },
        {
            year: 2024,
            venue: "IEEE TMI",
            title: "Investigating and Improving Latent Density Segmentation Models for Aleatoric Uncertainty Quantification in Medical Imaging",
            authors: "M.M.A. Valiuddin, C.G.A. Viviers, Ruud J. G. Van Sloun, P.H.N. de With, F. van der Sommen",
            source: "IEEE Transactions on Medical Imaging",
            tags: ["uncertainty", "segmentation"],
            links: [
                { label: "abstract", url: "https://ieeexplore.ieee.org/abstract/document/10639444" },
                { label: "pdf", url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10639444" }
            ]
        },
        {
            year: 2024,
            venue: "MICCAI UNSURE",
            title: "Typicality Excels Likelihood for Unsupervised Out-of-Distribution Detection in Medical Imaging",
            authors: "L. Abdi, M.M.A. Valiuddin*, C.G.A. Viviers*, P.H.N. de With, F. van der Sommen",
            source: "Uncertainty for Safe Utilization of Machine Learning in Medical Imaging at MICCAI",
            tags: ["OOD detection", "medical imaging"],
            links: [
                { label: "code", url: "https://github.com/lemarabd/typicality-MOOD" },
                { label: "pdf", url: "https://openreview.net/pdf?id=a5Z1p2n7CN" }
            ]
        },
        {
            year: 2024,
            venue: "Cancers",
            title: "Improved Pancreatic Cancer Detection and Localization on CT Scans: A Computer-Aided Detection Model Utilizing Secondary Features",
            authors: "Mark Ramaekers*, Christiaan G. A. Viviers*, Terese A. E. Hellstrom, Lotte Ewals, Joost Nederend, Igor Jacobs, Fons van der Sommen, Misha D. P. Luyer",
            source: "Cancers",
            tags: ["cancer detection", "CT"],
            links: [
                { label: "abstract", url: "https://www.mdpi.com/2072-6694/16/13/2403" },
                { label: "pdf", url: "https://www.mdpi.com/2072-6694/16/13/2403/pdf?version=1719652902" },
                { label: "code", url: "https://github.com/cviviers/3D_UNetSecondaryFeatures" }
            ]
        },
        {
            year: 2024,
            venue: "IEEE ICASSP",
            title: "Retaining Informative Latent Variables in Probabilistic Segmentation",
            authors: "Amaan Valiuddin, Christiaan Viviers, Ruud van Sloun, Peter de With, Fons van der Sommen",
            source: "IEEE International Conference on Acoustics, Speech, and Signal Processing",
            tags: ["segmentation", "uncertainty"],
            links: [
                { label: "abstract", url: "https://ieeexplore.ieee.org/abstract/document/10447580" },
                { label: "pdf", url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10447580" }
            ]
        },
        {
            year: 2024,
            venue: "SPIE MI",
            title: "Evaluating Task-Specific Augmentations in Self-Supervised Pre-Training for 3D Medical Image Analysis",
            authors: "C. H. B. Claessens, J. J. M. Hamm, C. G. A. Viviers, J. Nederend, D. J. Grunhagen, P. J. Tanis, P. H. N. de With, F. van der Sommen",
            source: "SPIE Medical Imaging",
            tags: ["self-supervised learning", "3D imaging"],
            links: [
                { label: "abstract", url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12926/3000850/Evaluating-task-specific-augmentations-in-self-supervised-pre-training-for/10.1117/12.3000850.short" },
                { label: "pdf", url: "https://www.spiedigitallibrary.org/proceedings/Download?urlId=10.1117%2F12.3000850" },
                { label: "code", url: "https://github.com/cclaess/3DMedDINO" }
            ]
        },
        {
            year: 2024,
            venue: "SPIE MI",
            title: "Robustness Evaluation of CAD Systems for Lung Nodule Segmentation Using Clinically Relevant Image Perturbations",
            authors: "Fidan Mammadli*, Terese A. E. Hellstrom*, Christiaan G. A. Viviers, Igor Jacobs, Lotte J. S. Ewals, Nick Tasios, Dimitrios Mavroeidis, Hendrika P. M. Verhees, Peter H. N. de With, Joost Nederend, Fons van der Sommen",
            source: "SPIE Medical Imaging",
            tags: ["robustness", "segmentation"],
            links: [
                { label: "abstract", url: "https://doi.org/10.1117/12.3006211" },
                { label: "pdf", url: "https://www.spiedigitallibrary.org/proceedings/Download?urlId=10.1117%2F12.3006211" }
            ]
        },
        {
            year: 2024,
            venue: "IEEE TIP",
            title: "Advancing 6-DoF Instrument Pose Estimation in Variable X-Ray Imaging Geometries",
            authors: "Christiaan G.A. Viviers, Lena Filatova, Maurice Termeer, Peter H.N. De With, Fons van der Sommen",
            source: "IEEE Transactions on Image Processing",
            highlight: true,
            tags: ["pose estimation", "x-ray"],
            links: [
                { label: "abstract", url: "https://ieeexplore.ieee.org/document/10478293" },
                { label: "arxiv", url: "https://arxiv.org/abs/2405.11677" },
                { label: "code", url: "https://github.com/cviviers/YOLOv5-6D-Pose" }
            ]
        },
        {
            year: 2023,
            venue: "MICCAI AMAI",
            title: "Advancing Abdominal Organ and PDAC Segmentation Accuracy with Task-Specific Interactive Models",
            authors: "Sanne E. Okel*, Christiaan G. A. Viviers*, Mark Ramaekers, Terese A. E. Hellstrom, Nick Tasios, Dimitrios Mavroeidis, Jon Pluyter, Igor Jacobs, Misha Luyer, Peter H. N. de With, Fons van der Sommen",
            source: "MICCAI Applications of Medical Artificial Intelligence",
            tags: ["segmentation", "PDAC"],
            links: [
                { label: "abstract", url: "https://link.springer.com/chapter/10.1007/978-3-031-47076-9_6" },
                { label: "pdf", url: "https://link.springer.com/content/pdf/10.1007/978-3-031-47076-9.pdf" }
            ]
        },
        {
            year: 2023,
            venue: "ICCV CVAMD",
            title: "Segmentation-Based Assessment of Tumor-Vessel Involvement for Surgical Resectability Prediction of Pancreatic Ductal Adenocarcinoma",
            authors: "Christiaan Viviers*, Mark Ramaekers*, Amaan Valiuddin, Terese Hellstrom, Nick Tasios, John van der Ven, Igor Jacobs, Lotte Ewals, Joost Nederend, Peter de With, Misha Luyer, Fons van der Sommen",
            source: "Computer Vision for Automated Medical Diagnosis Workshop at ICCV",
            tags: ["PDAC", "segmentation"],
            links: [
                { label: "abstract", url: "https://openaccess.thecvf.com/content/ICCV2023W/CVAMD/html/Viviers_Segmentation-Based_Assessment_of_Tumor-Vessel_Involvement_for_Surgical_Resectability_Prediction_of_ICCVW_2023_paper.html" },
                { label: "pdf", url: "https://openaccess.thecvf.com/content/ICCV2023W/CVAMD/papers/Viviers_Segmentation-Based_Assessment_of_Tumor-Vessel_Involvement_for_Surgical_Resectability_Prediction_of_ICCVW_2023_paper.pdf" }
            ]
        },
        {
            year: 2023,
            venue: "JCM",
            title: "Computer-Aided Detection for Pancreatic Cancer Diagnosis: Radiological Challenges and Future Directions",
            authors: "Mark Ramaekers*, Christiaan G. A. Viviers*, Boris V. Janssen, Terese A. E. Hellstrom, Lotte Ewals, Kasper van der Wulp, Joost Nederend, Igor Jacobs, Jon R. Pluyter, Dimitrios Mavroeidis, Fons van der Sommen, Marc G. Besselink, Misha D. P. Luyer",
            source: "Journal of Clinical Medicine",
            tags: ["pancreatic cancer", "CAD"],
            links: [
                { label: "abstract", url: "https://www.mdpi.com/2077-0383/12/13/4209" },
                { label: "pdf", url: "https://www.mdpi.com/2077-0383/12/13/4209#" }
            ]
        },
        {
            year: 2023,
            venue: "SPIE MI",
            title: "Probabilistic 3D Segmentation for Aleatoric Uncertainty Quantification in Full 3D Medical Data",
            authors: "Christiaan G. A. Viviers, M. M. Amaan Valiuddin, Peter H. N. de With, Fons van der Sommen",
            source: "SPIE Medical Imaging",
            tags: ["uncertainty", "3D segmentation"],
            links: [
                { label: "abstract", url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12465/2654255/Probabilistic-3D-segmentation-for-aleatoric-uncertainty-quantification-in-full-3D/10.1117/12.2654255.full" },
                { label: "pdf", url: "https://www.spiedigitallibrary.org/proceedings/Download?urlId=10.1117%2F12.2654255" },
                { label: "code", url: "https://github.com/cviviers/prob_3D_segmentation" }
            ]
        },
        {
            year: 2023,
            venue: "SPIE MI",
            title: "Clinical Segmentation for Improved Pancreatic Ductal Adenocarcinoma Detection and Segmentation",
            authors: "Terese A. E. Hellstrom*, Christiaan G. A. Viviers*, Mark Ramaekers, Nick Tasios, Joost Nederend, Misha D. P. Luyer, Peter H. N. de With, Fons van der Sommen",
            source: "SPIE Medical Imaging",
            tags: ["PDAC", "segmentation"],
            links: [
                { label: "abstract", url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12465/124652M/Clinical-segmentation-for-improved-pancreatic-ductal-adenocarcinoma-detection-and-segmentation/10.1117/12.2654164.full" },
                { label: "pdf", url: "https://www.spiedigitallibrary.org/proceedings/Download?urlId=10.1117%2F12.2654164" }
            ]
        },
        {
            year: 2022,
            venue: "MICCAI CAPTION",
            title: "Efficient Out-of-Distribution Detection of Melanoma with Wavelet-Based Normalizing Flows",
            authors: "M. M. Amaan Valiuddin, Christiaan G. A. Viviers, Ruud J. G. van Sloun, Peter H. N. de With, Fons van der Sommen",
            source: "Cancer Prevention Through Early Detection at MICCAI",
            tags: ["OOD detection", "normalizing flows"],
            links: [
                { label: "abstract", url: "https://link.springer.com/chapter/10.1007/978-3-031-17979-2_10" },
                { label: "pdf", url: "https://link.springer.com/content/pdf/10.1007/978-3-031-17979-2.pdf" }
            ]
        },
        {
            year: 2022,
            venue: "MICCAI CAPTION",
            title: "Improved Pancreatic Tumor Detection by Utilizing Clinically-Relevant Secondary Features",
            authors: "Christiaan GA Viviers, Mark Ramaekers, Peter HN de With, Dimitrios Mavroeidis, Joost Nederend, Misha Luyer, Fons van der Sommen",
            source: "Cancer Prevention Through Early Detection at MICCAI",
            tags: ["pancreatic cancer", "CT"],
            links: [
                { label: "abstract", url: "https://link.springer.com/chapter/10.1007/978-3-031-17979-2_14" },
                { label: "pdf", url: "https://link.springer.com/content/pdf/10.1007/978-3-031-17979-2.pdf" },
                { label: "arxiv", url: "https://arxiv.org/abs/2208.03581" }
            ]
        },
        {
            year: 2022,
            venue: "SPIE MI",
            title: "Towards Real-Time 6D Pose Estimation of Objects in Single-View Cone-Beam X-Ray",
            authors: "Christiaan GA Viviers, Joel de Bruijn, Lena Filatova, Fons van der Sommen",
            source: "SPIE Medical Imaging",
            tags: ["pose estimation", "x-ray"],
            links: [
                { label: "abstract", url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12465/124652M/Clinical-segmentation-for-improved-pancreatic-ductal-adenocarcinoma-detection-and-segmentation/10.1117/12.2654164.full" },
                { label: "pdf", url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12034/120341V/Towards-real-time-6D-pose-estimation-of-objects-in-single/10.1117/12.2611143.pdf" },
                { label: "arxiv", url: "https://arxiv.org/pdf/2211.03211" }
            ]
        },
        {
            year: 2021,
            venue: "MICCAI UNSURE",
            title: "Improving Aleatoric Uncertainty Quantification in Multi-Annotated Medical Image Segmentation with Normalizing Flows",
            authors: "M.M.A. Valiuddin, C.G.A. Viviers, R.J.G. van Sloun, P.H.N. de With, F. van der Sommen",
            source: "Uncertainty for Safe Utilization of Machine Learning in Medical Imaging at MICCAI",
            tags: ["uncertainty", "normalizing flows"],
            links: [
                { label: "abstract", url: "https://link.springer.com/chapter/10.1007/978-3-030-87735-4_8" },
                { label: "pdf", url: "https://link.springer.com/content/pdf/10.1007/978-3-030-87735-4.pdf" },
                { label: "arxiv", url: "https://arxiv.org/abs/2108.02155" }
            ]
        },
        {
            year: 2020,
            venue: "IEEE Sensors Journal",
            title: "A Resistive Biosensor for the Detection of LC3 Protein in Autophagy",
            authors: "C.G.A. Viviers, A. Du Toit, W. Perold, B. Loos, J.H. Hofmeyr",
            source: "IEEE Sensors Journal",
            tags: ["biosensors"],
            links: [
                { label: "abstract", url: "https://ieeexplore.ieee.org/abstract/document/8979366" },
                { label: "pdf", url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8979366" }
            ]
        },
        {
            year: 2019,
            venue: "Patent",
            title: "Device for Detecting Target Biomolecules",
            authors: "Christiaan Gunter Alwyn Viviers, Willem Jacobus Perold, Leon Milner Theodore Dicks, Giles Hubert Coyle Maybery",
            source: "Worldwide Applications",
            tags: ["patent", "biosensors"],
            links: [
                { label: "patent", url: "https://patents.google.com/patent/US10302637B2/en" }
            ]
        }
    ],

    service: [
        { year: 2026, venue: "CVPR", role: "Reviewer for the Conference on Computer Vision and Pattern Recognition 2026", link: "https://cvpr2026.thecvf.com/" },
        { year: 2026, venue: "Teaching", role: "Assistant teacher for Neural Networks for Computer Vision", description: "Lectures on fundamentals of CNNs and Transformers and applications in object detection, segmentation, and pose estimation.", link: "https://research.tue.nl/nl/courses/neural-networks-for-computer-vision" },
        { year: 2025, venue: "IEEE TMI", role: "Reviewer for IEEE Transactions on Medical Imaging", link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=42" },
        { year: 2025, venue: "AAAI", role: "Reviewer for Association for the Advancement of Artificial Intelligence 2026", link: "https://aaai.org/conference/aaai/aaai-26/" },
        { year: 2025, venue: "MICCAI", role: "Reviewer for MICCAI 2025", link: "https://conferences.miccai.org/2025/en/" },
        { year: 2025, venue: "MICCAI UNSURE", role: "Reviewer for MICCAI 2025 UNSURE workshop", link: "https://unsuremiccai.github.io/" },
        { year: 2025, venue: "Teaching", role: "Assistant teacher for Neural Networks for Computer Vision", description: "Lectures on fundamentals of CNNs and Transformers and applications in object detection, segmentation, and pose estimation.", link: "https://research.tue.nl/nl/courses/neural-networks-for-computer-vision" },
        { year: 2024, venue: "MICCAI", role: "Reviewer for MICCAI 2024", link: "https://conferences.miccai.org/2024/en/" },
        { year: 2024, venue: "MICCAI CAPTION", role: "Reviewer for MICCAI 2024 CAPTION workshop", link: "https://caption-workshop.github.io/#Keynote%20speakers" },
        { year: 2024, venue: "Teaching", role: "Assistant teacher for Neural Networks for Computer Vision", description: "Lectures on fundamentals of CNNs and Transformers and applications in object detection, segmentation, and pose estimation.", link: "https://research.tue.nl/nl/courses/neural-networks-for-computer-vision" },
        { year: 2023, venue: "MICCAI CAPTION", role: "Reviewer for MICCAI 2023 CAPTION workshop", link: "https://caption-workshop.github.io/miccai2023/" },
        { year: 2023, venue: "Teaching", role: "Assistant teacher for Convolutional Neural Networks for Computer Vision", description: "Lectures on fundamentals of CNNs and Transformers and applications in object detection, segmentation, and pose estimation.", link: "https://research.tue.nl/nl/courses/neural-networks-for-computer-vision" },
        { year: 2022, venue: "Teaching", role: "Assistant teacher for Convolutional Neural Networks for Computer Vision", description: "Lectures on normalizing flows.", link: "https://research.tue.nl/nl/courses/neural-networks-for-computer-vision" },
        { year: 2021, venue: "Teaching", role: "Assistant teacher for Convolutional Neural Networks for Computer Vision", description: "Lectures on normalizing flows.", link: "https://research.tue.nl/nl/courses/neural-networks-for-computer-vision" },
        { year: 2020, venue: "Teaching", role: "Teaching assistant for Convolutional Neural Networks for Computer Vision", link: "https://research.tue.nl/nl/courses/neural-networks-for-computer-vision" }
    ],

    serviceStats: [
        { label: "Graduation projects supervised", value: 10 },
        { label: "Internships supervised", value: 7 }
    ],

    projects: [
        {
            title: "Synthetic Data Generation for Novel Object Detection",
            year: 2025,
            tags: ["generative AI", "few-shot object detection", "Jetson Orin"],
            summary: "A custom synthetic data generation pipeline for improving novel object detection in low-data scenarios. The solution won the Purple NECtar X Innovation in Defence 2025 challenge.",
            details: "The pipeline uses open-source generative models to synthesize objects and scene variations, assemble annotated detection datasets, train cross-domain few-shot object detectors, and deploy lightweight models on NVIDIA Jetson Orin for real-time inference.",
            image: "projects/purple/20251106_160936.jpg",
            links: [
                { label: "LinkedIn", url: "https://www.linkedin.com/feed/update/urn:li:activity:7393574976555032576/" }
            ]
        },
        {
            title: "Foundation Model for Computed Tomography",
            year: 2025,
            tags: ["computer vision", "CT", "foundation models"],
            summary: "SPECTRE is a fully transformer-based foundation model for volumetric computed tomography developed with Cris Claessens.",
            details: "The model combines scalable 3D Vision Transformer architectures with self-supervised and vision-language pretraining to learn general-purpose CT representations from openly available datasets.",
            image: "projects/spectre/methods_overview.jpg",
            links: [
                { label: "TU/e News", url: "https://www.tue.nl/en/news-and-events/news-overview/12-11-2025-super-powered-ai-from-eindhoven-helps-doctors-identify-cancer-and-other-diseases-more-quickly" },
                { label: "NVIDIA post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7395203880596221954/" }
            ]
        },
        {
            title: "Enhanced Computer Vision Methods for Cancer Detection and Precision Guidance in Medical Imaging",
            year: 2024,
            tags: ["computer vision", "cancer detection", "medical imaging"],
            summary: "PhD research on cancer detection, segmentation robustness, uncertainty quantification, out-of-distribution detection, and image-guided intervention.",
            details: "The thesis includes clinically informed PDAC detection, probabilistic segmentation, tumor resectability prediction, semantic and covariate OOD detection, and 6-DoF pose estimation for X-ray-guided minimally invasive surgery.",
            image: "projects/thesis/cover.png",
            links: [
                { label: "Thesis", url: "projects/thesis/CV_thesis_20241129.pdf" },
                { label: "Cover", url: "projects/thesis/thesis_cover.png" },
                { label: "LinkedIn", url: "https://www.linkedin.com/posts/chrisviviers_phdcompleted-deeplearning-medicalimaging-activity-7281688275277209602-XpG7?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxAjjcBSUG5KnHpHcHoeVaCQAIHSuDvJHU" }
            ]
        }
    ],

    posts: []
};
