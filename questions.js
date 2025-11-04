window.quizBanks = window.quizBanks || {};
window.quizBanks.practice = [
  // ---------- Module 5: Networking & Content Delivery ----------
  {
    q: "1. What is the primary purpose of Amazon VPC?",
    choices: [
      "To deliver content globally at low latency",
      "To create an isolated virtual network within AWS",
      "To automatically scale compute resources",
      "To store objects in buckets"
    ],
    answer: 1,
    explain: "Amazon Virtual Private Cloud (VPC) lets you create an isolated section of the AWS Cloud where you can launch AWS resources in a virtual network you define.",
    why_others_are_not_correct: {
      0: "CloudFront, not VPC, delivers global content.",
      2: "Auto Scaling manages compute resources, not VPC.",
      3: "Amazon S3 stores objects in buckets."
    }
  },
  {
    q: "2. Which component of a VPC allows communication between the VPC and the internet?",
    choices: [
      "Internet Gateway",
      "Security Group",
      "Route Table",
      "Network ACL"
    ],
    answer: 0,
    explain: "An Internet Gateway enables communication between resources in your VPC and the internet.",
    why_others_are_not_correct: {
      1: "Security Groups control instance-level traffic but do not provide internet access.",
      2: "Route Tables define traffic rules but require an Internet Gateway for external routing.",
      3: "Network ACLs are stateless filters, not gateways."
    }
  },
  {
    q: "3. What does Amazon Route 53 provide?",
    choices: [
      "Domain registration and DNS routing",
      "Secure storage for static website content",
      "Real-time data streaming",
      "Firewall protection for VPCs"
    ],
    answer: 0,
    explain: "Amazon Route 53 is AWS’s scalable DNS service that handles domain registration, DNS routing, and health checks.",
    why_others_are_not_correct: {
      1: "Amazon S3 stores website content, not Route 53.",
      2: "Amazon Kinesis provides real-time streaming, not DNS services.",
      3: "AWS Network Firewall protects VPCs, not Route 53."
    }
  },
  {
    q: "4. Which AWS service helps distribute content to users globally with low latency?",
    choices: [
      "Amazon CloudFront",
      "Amazon EC2",
      "Amazon S3",
      "AWS Lambda"
    ],
    answer: 0,
    explain: "Amazon CloudFront is AWS’s Content Delivery Network (CDN) that caches content at edge locations to reduce latency.",
    why_others_are_not_correct: {
      1: "Amazon EC2 provides compute capacity, not content delivery.",
      2: "S3 stores content but doesn’t deliver it globally.",
      3: "Lambda runs code; it’s not a CDN."
    }
  },
  {
    q: "5. What is the function of a subnet in a VPC?",
    choices: [
      "It isolates resources within specific IP ranges inside the VPC.",
      "It provides internet access to all instances.",
      "It controls inbound and outbound traffic rules.",
      "It stores security credentials."
    ],
    answer: 0,
    explain: "Subnets divide a VPC’s IP address range into segments to isolate and organize resources.",
    why_others_are_not_correct: {
      1: "Internet access is handled by gateways, not subnets.",
      2: "Security Groups and ACLs control traffic rules.",
      3: "AWS Secrets Manager stores credentials, not subnets."
    }
  },
  {
    q: "6. What type of firewall acts at the instance level in a VPC?",
    choices: [
      "Network ACL",
      "Security Group",
      "Internet Gateway",
      "Elastic Load Balancer"
    ],
    answer: 1,
    explain: "Security Groups act as virtual firewalls controlling inbound and outbound traffic for EC2 instances.",
    why_others_are_not_correct: {
      0: "Network ACLs act at the subnet level, not instance level.",
      2: "Internet Gateways provide connectivity, not filtering.",
      3: "Load Balancers distribute traffic but don’t filter it."
    }
  },
  {
    q: "7. Which AWS service improves website availability by routing traffic to healthy endpoints?",
    choices: [
      "AWS Shield",
      "AWS WAF",
      "Amazon Route 53",
      "Amazon CloudFront"
    ],
    answer: 2,
    explain: "Amazon Route 53 performs health checks and routes traffic to healthy endpoints for high availability.",
    why_others_are_not_correct: {
      0: "AWS Shield protects against DDoS attacks, not routing.",
      1: "AWS WAF filters web requests, not route traffic.",
      3: "CloudFront caches content but doesn’t perform health-based routing."
    }
  },
  {
    q: "8. What does Amazon CloudFront use to cache content close to end users?",
    choices: [
      "Availability Zones",
      "Regions",
      "Edge Locations",
      "VPCs"
    ],
    answer: 2,
    explain: "CloudFront uses Edge Locations around the world to cache content near users for faster delivery.",
    why_others_are_not_correct: {
      0: "Availability Zones host compute resources, not cached content.",
      1: "Regions are large geographical areas, not individual cache points.",
      3: "VPCs are isolated networks, not caching locations."
    }
  },
  {
    q: "9. Which service would best reduce latency for a globally accessed web application?",
    choices: [
      "Amazon CloudFront",
      "AWS Config",
      "Amazon S3 Glacier",
      "AWS Batch"
    ],
    answer: 0,
    explain: "CloudFront delivers cached content through its global Edge network, reducing latency.",
    why_others_are_not_correct: {
      1: "AWS Config tracks configuration changes, not latency.",
      2: "S3 Glacier is for archival storage, not web delivery.",
      3: "AWS Batch runs batch jobs, unrelated to latency reduction."
    }
  },
  {
    q: "10. Which AWS service provides a secure connection between an on-premises network and AWS?",
    choices: [
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Trusted Advisor",
      "Amazon EC2"
    ],
    answer: 0,
    explain: "AWS Direct Connect establishes a dedicated private network connection between your data center and AWS.",
    why_others_are_not_correct: {
      1: "CloudFront delivers content, not network connections.",
      2: "Trusted Advisor provides best-practice recommendations.",
      3: "EC2 provides compute resources, not network connectivity."
    }
  },

  // ---------- Module 6: Compute ----------
  {
    q: "11. What is Amazon EC2 primarily used for?",
    choices: [
      "Storing and retrieving files",
      "Running virtual servers in the cloud",
      "Analyzing large data sets",
      "Delivering static content"
    ],
    answer: 1,
    explain: "Amazon Elastic Compute Cloud (EC2) provides scalable compute capacity for running virtual machines in AWS.",
    why_others_are_not_correct: {
      0: "Amazon S3 is used for file storage.",
      2: "Amazon Athena or Redshift analyze data sets.",
      3: "CloudFront delivers static content."
    }
  },
  {
    q: "12. Which EC2 pricing option offers the highest discount but requires upfront commitment?",
    choices: [
      "On-Demand Instances",
      "Savings Plans",
      "Spot Instances",
      "Reserved Instances"
    ],
    answer: 3,
    explain: "Reserved Instances provide up to 75% savings compared to On-Demand pricing when you commit for 1–3 years.",
    why_others_are_not_correct: {
      0: "On-Demand Instances have no long-term commitment but higher cost.",
      1: "Savings Plans are flexible but generally lower discounts than Reserved Instances.",
      2: "Spot Instances offer high discounts but no guaranteed capacity."
    }
  },
  {
    q: "13. How are customers charged for AWS Lambda usage?",
    choices: [
      "Per server hour",
      "Per number of running instances",
      "Per request and compute time",
      "Flat monthly subscription"
    ],
    answer: 2,
    explain: "AWS Lambda charges based on the number of requests and compute time in GB-seconds used by your functions.",
    why_others_are_not_correct: {
      0: "Lambda is serverless — no servers to bill hourly.",
      1: "You don’t manage instances in Lambda.",
      3: "There is no flat fee; it’s pay-per-use."
    }
  },
  {
    q: "14. Which AWS compute service allows you to run containers without managing servers?",
    choices: [
      "Amazon ECS with AWS Fargate",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon Lightsail"
    ],
    answer: 0,
    explain: "AWS Fargate lets you run containers on Amazon ECS without managing the underlying servers.",
    why_others_are_not_correct: {
      1: "EC2 requires managing servers yourself.",
      2: "Lambda runs functions, not containerized applications.",
      3: "Lightsail is for simple hosting, not container orchestration."
    }
  },
  {
    q: "15. What is the minimum billing time for an On-Demand EC2 instance?",
    choices: [
      "One second",
      "One minute (60 seconds)",
      "One hour",
      "One day"
    ],
    answer: 1,
    explain: "EC2 bills On-Demand Instances per second with a 60-second minimum charge.",
    why_others_are_not_correct: {
      0: "Billing is per second, but minimum duration is 60 seconds.",
      2: "Hourly billing is outdated for EC2.",
      3: "No daily billing model exists for EC2."
    }
  },
  {
    q: "16. What benefit does EC2 Auto Scaling provide?",
    choices: [
      "Automatically adjusts the number of instances based on demand",
      "Improves DNS resolution speed",
      "Encrypts data in transit",
      "Manages VPC routing tables"
    ],
    answer: 0,
    explain: "Auto Scaling dynamically adjusts EC2 capacity based on workload demand to maintain performance and control cost.",
    why_others_are_not_correct: {
      1: "DNS resolution is handled by Route 53.",
      2: "Encryption is handled by AWS KMS and security features.",
      3: "Routing tables are configured in VPC, not Auto Scaling."
    }
  },
  {
    q: "17. What is AWS Elastic Beanstalk used for?",
    choices: [
      "Hosting websites directly from S3 buckets",
      "Running applications without managing infrastructure",
      "Streaming real-time data",
      "Delivering content via CDN"
    ],
    answer: 1,
    explain: "Elastic Beanstalk deploys and manages applications automatically, handling provisioning, load balancing, and scaling.",
    why_others_are_not_correct: {
      0: "Static hosting is done via Amazon S3, not Beanstalk.",
      2: "Amazon Kinesis handles real-time streaming.",
      3: "CloudFront delivers CDN content."
    }
  },
  {
    q: "18. Which EC2 instance type is best for compute-intensive tasks like gaming servers or scientific modeling?",
    choices: [
      "Compute Optimized",
      "Memory Optimized",
      "Storage Optimized",
      "General Purpose"
    ],
    answer: 0,
    explain: "Compute Optimized instances are designed for CPU-bound workloads requiring high-performance processors.",
    why_others_are_not_correct: {
      1: "Memory Optimized suits large in-memory databases.",
      2: "Storage Optimized suits heavy I/O workloads.",
      3: "General Purpose is balanced, not specialized for compute."
    }
  },
  {
    q: "19. What AWS service allows developers to run virtual servers with a simplified management interface?",
    choices: [
      "Amazon Lightsail",
      "Amazon EC2",
      "AWS Fargate",
      "AWS Batch"
    ],
    answer: 0,
    explain: "Amazon Lightsail offers simplified virtual server deployment for small applications with predictable pricing.",
    why_others_are_not_correct: {
      1: "EC2 provides more granular control but is more complex.",
      2: "Fargate runs containers, not full servers.",
      3: "AWS Batch runs scheduled batch workloads."
    }
  },
  {
    q: "20. What is the main difference between AWS Lambda and Amazon EC2?",
    choices: [
      "Lambda requires users to manage operating systems",
      "Lambda scales automatically without server management",
      "EC2 can only run short tasks",
      "EC2 is serverless"
    ],
    answer: 1,
    explain: "Lambda automatically scales and runs code without provisioning or managing servers, unlike EC2 which requires manual management.",
    why_others_are_not_correct: {
      0: "Lambda is managed by AWS, no OS management required.",
      2: "EC2 can run continuously for long workloads.",
      3: "EC2 is not serverless."
    }
  }
];

window.practiceQuestions = window.quizBanks.practice;
