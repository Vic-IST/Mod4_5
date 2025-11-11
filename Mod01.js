window.quizBanks = window.quizBanks || {};
window.quizBanks.practice = 
  [
  {
    "q": "Which of the following best describes one of the six key advantages of cloud computing?",
    "choices": [
      "Reduced global reach and agility",
      "The ability to trade fixed expense for variable expense",
      "Higher upfront capital expenditure",
      "Manual scaling of resources"
    ],
    "answer": 1,
    "explain": "AWS allows organizations to replace large upfront costs with variable, pay-as-you-go expenses that scale with demand.",
    "why_others_are_not_correct": {
      "0": "Cloud computing increases global reach and agility, not reduces them.",
      "2": "One of the benefits of cloud computing is avoiding high upfront capital expenses.",
      "3": "Scaling in AWS is automated and elastic, not manual."
    }
  },
  {
    "q": "A startup wants to deploy an application globally within minutes without building new data centers. Which AWS cloud benefit makes this possible?",
    "choices": [
      "Massive economies of scale",
      "Increased hardware ownership",
      "Go global in minutes",
      "Reduced elasticity"
    ],
    "answer": 2,
    "explain": "AWS Regions and Availability Zones allow global deployment within minutes, improving latency and user experience worldwide.",
    "why_others_are_not_correct": {
      "0": "Economies of scale refer to cost savings, not deployment speed.",
      "1": "AWS eliminates the need for hardware ownership.",
      "3": "AWS enhances elasticity, allowing quick scaling up or down."
    }
  },
  {
    "q": "Which AWS design principle emphasizes reducing human error through automation?",
    "choices": [
      "Use disposable resources",
      "Automate to make architectural experimentation easier",
      "Enable traceability",
      "Stop spending money running data centers"
    ],
    "answer": 1,
    "explain": "Automation in AWS allows faster experimentation and minimizes manual intervention, a principle in the Well-Architected Framework.",
    "why_others_are_not_correct": {
      "0": "Disposable resources refer to replacing failed components, not automation.",
      "2": "Traceability tracks system changes but doesn't reduce manual effort.",
      "3": "That statement relates to cost optimization, not automation."
    }
  },
  {
    "q": "Which pillar of the AWS Well-Architected Framework focuses on using computing resources efficiently to meet system requirements?",
    "choices": [
      "Operational Excellence",
      "Performance Efficiency",
      "Reliability",
      "Cost Optimization"
    ],
    "answer": 1,
    "explain": "Performance Efficiency emphasizes using resources efficiently and adapting to changing technologies and demand.",
    "why_others_are_not_correct": {
      "0": "Operational Excellence focuses on operations and monitoring improvements.",
      "2": "Reliability focuses on recovery and fault tolerance.",
      "3": "Cost Optimization aims at minimizing expenses, not performance."
    }
  },
  {
    "q": "A company wants to increase revenue and reduce risk by migrating to AWS. Which AWS resource helps them plan this migration?",
    "choices": [
      "AWS Trusted Advisor",
      "AWS Cloud Adoption Framework (CAF)",
      "AWS Cost Explorer",
      "AWS Pricing Calculator"
    ],
    "answer": 1,
    "explain": "The AWS Cloud Adoption Framework provides guidance for migration by aligning technology and business goals.",
    "why_others_are_not_correct": {
      "0": "Trusted Advisor focuses on cost, performance, and security recommendations.",
      "2": "Cost Explorer analyzes spending but not migration strategies.",
      "3": "Pricing Calculator estimates costs, not migration planning."
    }
  },
  {
    "q": "Which scenario best demonstrates cloud elasticity?",
    "choices": [
      "A company overprovisions hardware for holiday traffic",
      "An EC2 Auto Scaling group adds more instances when demand spikes",
      "A customer manually adds servers for new users",
      "A company runs the same number of servers year-round"
    ],
    "answer": 1,
    "explain": "Elasticity allows AWS resources to automatically scale up or down based on demand—like EC2 Auto Scaling handling peak loads.",
    "why_others_are_not_correct": {
      "0": "Overprovisioning wastes resources instead of scaling dynamically.",
      "2": "Manual scaling lacks elasticity.",
      "3": "Fixed server counts ignore fluctuating demand."
    }
  },
  {
    "q": "A healthcare company is comparing costs of on-premises vs AWS cloud. Which economic benefit supports cost savings on AWS?",
    "choices": [
      "Paying for idle servers",
      "Economies of scale",
      "Fixed capital expenditure",
      "Manual infrastructure management"
    ],
    "answer": 1,
    "explain": "Economies of scale let AWS reduce costs as more customers use its services, passing savings to users.",
    "why_others_are_not_correct": {
      "0": "AWS avoids paying for idle resources through pay-as-you-go pricing.",
      "2": "AWS replaces fixed CAPEX with variable OPEX.",
      "3": "Infrastructure management is largely automated in AWS."
    }
  },
  {
    "q": "A business wants to test new ideas quickly without long-term hardware commitments. Which AWS benefit supports this?",
    "choices": [
      "Reduced agility",
      "Stop guessing capacity",
      "Increased capital investment",
      "Limited scalability"
    ],
    "answer": 1,
    "explain": "With AWS, you can provision and deprovision capacity as needed, avoiding capacity guesswork and fostering rapid experimentation.",
    "why_others_are_not_correct": {
      "0": "AWS improves agility, not reduces it.",
      "2": "AWS replaces large capital investments with pay-as-you-go pricing.",
      "3": "AWS provides near-infinite scalability, not limited scalability."
    }
  },
  {
    "q": "Which AWS service can help a company automate infrastructure provisioning and management using templates?",
    "choices": [
      "AWS CloudFormation",
      "Amazon EC2",
      "AWS Trusted Advisor",
      "AWS Artifact"
    ],
    "answer": 0,
    "explain": "AWS CloudFormation automates resource deployment using infrastructure-as-code templates, improving consistency and efficiency.",
    "why_others_are_not_correct": {
      "1": "EC2 provides compute resources but doesn’t automate infrastructure creation.",
      "2": "Trusted Advisor gives recommendations, not provisioning.",
      "3": "Artifact provides compliance reports, not infrastructure automation."
    }
  },
  {
    "q": "An organization needs to deploy workloads in multiple countries while maintaining low latency. Which AWS capability best supports this?",
    "choices": [
      "Elastic Load Balancing",
      "AWS Global Infrastructure with multiple Regions",
      "Amazon CloudWatch",
      "AWS Systems Manager"
    ],
    "answer": 1,
    "explain": "AWS’s global network of Regions and Availability Zones enables deploying resources closer to users worldwide to reduce latency.",
    "why_others_are_not_correct": {
      "0": "Elastic Load Balancing distributes traffic, but within a Region or AZ.",
      "2": "CloudWatch monitors resources, not deploys them globally.",
      "3": "Systems Manager manages configurations, not global distribution."
    }
  },
    [
  {
    "q": "Which of the following scenarios demonstrates agility in the AWS Cloud?",
    "choices": [
      "A business can provision hundreds of servers in minutes for a new product launch.",
      "A company builds a physical data center in a new country to support users there.",
      "A team purchases hardware months in advance for predictable workloads.",
      "A developer manually installs software updates on all company servers."
    ],
    "answer": 0,
    "explain": "Agility refers to how quickly resources can be provisioned and deployed. AWS lets users launch servers within minutes to respond to new opportunities.",
    "why_others_are_not_correct": {
      "1": "Building a physical data center reduces agility by adding delays.",
      "2": "Buying hardware in advance increases cost and reduces flexibility.",
      "3": "Manual updates slow down agility and risk inconsistency."
    }
  },
  {
    "q": "A media company needs to scale its video streaming service automatically as traffic increases. Which AWS feature enables this?",
    "choices": [
      "AWS Auto Scaling",
      "AWS IAM",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    "answer": 0,
    "explain": "AWS Auto Scaling automatically adjusts compute capacity to maintain performance at the lowest possible cost.",
    "why_others_are_not_correct": {
      "1": "IAM manages access control, not scaling.",
      "2": "CloudTrail logs API activity, not scaling operations.",
      "3": "Inspector analyzes security vulnerabilities, not traffic scaling."
    }
  },
  {
    "q": "Which AWS tool helps ensure architectures align with best practices for operational excellence, reliability, and cost optimization?",
    "choices": [
      "AWS Well-Architected Tool",
      "AWS Budgets",
      "AWS Cloud9",
      "AWS Organizations"
    ],
    "answer": 0,
    "explain": "The AWS Well-Architected Tool evaluates workloads against the five pillars of the Well-Architected Framework to identify improvements.",
    "why_others_are_not_correct": {
      "1": "AWS Budgets tracks spending, not architectural quality.",
      "2": "Cloud9 is an IDE for coding, not architecture assessment.",
      "3": "AWS Organizations manages accounts, not architectural design."
    }
  },
  {
    "q": "A company uses Amazon RDS instead of managing its own database servers. Which AWS benefit does this demonstrate?",
    "choices": [
      "Increased manual administration",
      "Managed services reduce operational overhead",
      "Greater capital expenses",
      "Limited scalability"
    ],
    "answer": 1,
    "explain": "Amazon RDS is a managed service that handles backups, patching, and scaling, allowing teams to focus on application development instead of maintenance.",
    "why_others_are_not_correct": {
      "0": "Managed services reduce, not increase, manual administration.",
      "2": "Using managed services lowers capital expenditure through pay-as-you-go pricing.",
      "3": "Managed services enhance scalability."
    }
  },
  {
    "q": "Which type of cloud deployment model allows a company to connect its on-premises infrastructure with AWS resources?",
    "choices": [
      "Private cloud",
      "Hybrid cloud",
      "Public cloud",
      "Distributed cloud"
    ],
    "answer": 1,
    "explain": "A hybrid cloud combines on-premises resources with cloud environments, allowing seamless integration and flexibility.",
    "why_others_are_not_correct": {
      "0": "A private cloud operates entirely on-premises.",
      "2": "A public cloud runs entirely in AWS without local integration.",
      "3": "Distributed cloud isn’t an AWS deployment term."
    }
  },
  {
    "q": "An organization plans to migrate to AWS to reduce business risk and improve efficiency. Which AWS resource provides strategic guidance for this transition?",
    "choices": [
      "AWS Migration Hub",
      "AWS Cloud Adoption Framework (CAF)",
      "AWS CloudFormation",
      "AWS CodePipeline"
    ],
    "answer": 1,
    "explain": "The AWS Cloud Adoption Framework helps organizations plan migrations through structured perspectives on business, people, governance, and technology.",
    "why_others_are_not_correct": {
      "0": "Migration Hub tracks migration progress but doesn’t provide strategic planning.",
      "2": "CloudFormation automates resource deployment, not migration strategy.",
      "3": "CodePipeline manages CI/CD workflows, not migration planning."
    }
  },
  {
    "q": "Which cloud computing characteristic allows AWS customers to avoid buying physical hardware for short-term projects?",
    "choices": [
      "Security by default",
      "Elasticity",
      "On-demand self-service",
      "Capital expenditure"
    ],
    "answer": 2,
    "explain": "On-demand self-service lets customers provision resources instantly as needed, eliminating the need for upfront hardware purchases.",
    "why_others_are_not_correct": {
      "0": "Security by default ensures protection, not provisioning.",
      "1": "Elasticity allows scaling but doesn’t directly handle resource creation.",
      "3": "AWS minimizes capital expenditure by switching to operational costs."
    }
  },
  {
    "q": "Which AWS concept describes the ability to scale resources up and down automatically to meet changing demand?",
    "choices": [
      "Global availability",
      "Elasticity",
      "Performance efficiency",
      "Reliability"
    ],
    "answer": 1,
    "explain": "Elasticity refers to the ability to automatically add or remove resources based on workload changes, optimizing cost and performance.",
    "why_others_are_not_correct": {
      "0": "Global availability refers to AWS’s geographic reach, not scaling.",
      "2": "Performance efficiency focuses on resource use, not scaling behavior.",
      "3": "Reliability ensures uptime, not scalability."
    }
  },
  {
    "q": "Which of the following is an example of rightsizing in AWS?",
    "choices": [
      "Turning off unused EC2 instances during off-hours",
      "Choosing smaller EC2 instance types that meet performance needs",
      "Running multiple EC2 instances to increase redundancy",
      "Purchasing more instances than required for growth"
    ],
    "answer": 1,
    "explain": "Rightsizing means matching instance types and sizes to your actual workload, improving efficiency and reducing cost.",
    "why_others_are_not_correct": {
      "0": "Turning off instances helps optimize cost, but rightsizing refers to selecting the appropriate size, not usage time.",
      "2": "Adding redundancy increases reliability, not rightsizing.",
      "3": "Overprovisioning increases cost and contradicts rightsizing."
    }
  },
  {
    "q": "A startup runs tests on AWS without worrying about large upfront investments or hardware maintenance. Which AWS principle enables this?",
    "choices": [
      "Pay-as-you-go pricing",
      "Dedicated hosting",
      "Complex licensing",
      "Multi-year capital funding"
    ],
    "answer": 0,
    "explain": "AWS’s pay-as-you-go model allows customers to pay only for what they use, eliminating upfront capital investment and hardware maintenance costs.",
    "why_others_are_not_correct": {
      "1": "Dedicated hosting increases cost and commitment.",
      "2": "AWS simplifies licensing rather than making it complex.",
      "3": "AWS eliminates the need for multi-year capital investments."
    }
  }
]
