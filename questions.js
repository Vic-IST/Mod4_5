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
  },
  {
    q: "21. Which component of a VPC must be present in order for instances in a public subnet to access the internet?",
    choices: [
      "NAT Gateway",
      "Internet Gateway",
      "Transit Gateway",
      "VPC Endpoint"
    ],
    answer: 1,
    explain: "An Internet Gateway enables instances in a VPC (typically in a public subnet) to access the internet and enables inbound connections from the internet when routing and security allow it.",
    why_others_are_not_correct: {
      0: "A NAT Gateway allows instances in a private subnet to access the internet, but doesn’t allow inbound internet access directly.",
      2: "A Transit Gateway connects multiple VPCs and on-premises networks, not simply enabling internet access to a public subnet.",
      3: "A VPC Endpoint allows private connectivity to AWS services without using the internet, not general internet access."
    }
  },
  {
    q: "22. What is the primary benefit of using Amazon CloudFront in front of your web application?",
    choices: [
      "Autoscaling compute instances globally",
      "Caching static and dynamic content at edge locations to reduce latency",
      "Automating database backups",
      "Encrypting data at rest in S3"
    ],
    answer: 1,
    explain: "CloudFront is a content delivery network (CDN) that caches content—both static and dynamic—at edge locations around the world, thereby reducing latency for end-users.",
    why_others_are_not_correct: {
      0: "Autoscaling compute instances is handled by services like Auto Scaling, not CloudFront.",
      2: "Database backups are managed by database services or backup tools, not CloudFront.",
      3: "Encrypting data at rest in S3 is a storage-service feature, unrelated to CloudFront’s caching and delivery role."
    }
  },
  {
    q: "23. In the context of AWS networking, what characteristic best describes a Network ACL (Access Control List)?",
    choices: [
      "Instance-level stateful firewall",
      "Subnet-level stateless filter",
      "Managed by AWS automatically for all traffic",
      "Replaces security groups"
    ],
    answer: 1,
    explain: "A Network ACL is applied at the subnet level, is stateless (you must explicitly allow inbound and outbound rules), and it controls traffic entering or leaving a subnet.",
    why_others_are_not_correct: {
      0: "Security Groups are instance-level and stateful; Network ACLs are subnet-level and stateless.",
      2: "Network ACLs must be configured by the customer; they are not fully managed by AWS automatically.",
      3: "They do not replace security groups; both operate in their respective scopes."
    }
  },
  {
    q: "24. A company wants DNS name resolution globally, high availability, and traffic routing based on latency. Which service should they use?",
    choices: [
      "Amazon Route 53",
      "AWS Directory Service",
      "Amazon CloudFront",
      "AWS Global Accelerator"
    ],
    answer: 0,
    explain: "Amazon Route 53 is the DNS service that supports global name resolution and routing policies (such as latency-based routing) to direct users to the optimal endpoint.",
    why_others_are_not_correct: {
      1: "AWS Directory Service provides managed Active Directory services, not global DNS & routing.",
      2: "CloudFront is for content delivery, not DNS name resolution or traffic-routing based on latency.",
      3: "AWS Global Accelerator improves performance for user traffic by using the AWS global network, but it is not a DNS service that provides routing policies like Route 53."
    }
  },
  {
    q: "25. What does an AWS VPC private subnet typically mean in terms of routing capabilities?",
    choices: [
      "It has a route to an Internet Gateway for bi-directional internet access",
      "It is accessible via the public internet with a public IP by default",
      "It has no direct route to the internet and uses a NAT or similar for outbound traffic",
      "It cannot connect to any AWS service endpoints"
    ],
    answer: 2,
    explain: "A private subnet typically does not have a route to an Internet Gateway. Instead, instances in it might access the internet via a NAT Gateway or NAT instance for outbound traffic, while remaining inaccessible from the public internet.",
    why_others_are_not_correct: {
      0: "That describes a public subnet, not a private one.",
      1: "Private subnets are not directly accessible from the internet by default.",
      3: "Instances in private subnets can still connect to AWS service endpoints (via endpoint or NAT), so statement is false."
    }
  },
  {
    q: "26. Which AWS service provides a managed firewall and intrusion prevention system at the VPC perimeter?",
    choices: [
      "AWS WAF",
      "AWS Shield",
      "AWS Network Firewall",
      "AWS Config"
    ],
    answer: 2,
    explain: "AWS Network Firewall is a managed network security service that offers firewall and intrusion prevention functionality at the VPC boundary or as a central inspection point.",
    why_others_are_not_correct: {
      0: "AWS WAF is a web application firewall that protects HTTP/HTTPS traffic at the application layer.",
      1: "AWS Shield provides DDoS protection, not full firewall/IPS at VPC perimeter.",
      3: "AWS Config is a configuration monitoring service, not a network firewall."
    }
  },
  {
    q: "27. A business wants to deliver static content globally with the lowest possible latency and cost. They do not want to manage caching manually. What is the most appropriate AWS option?",
    choices: [
      "Deploy EC2 instances in every AWS Region",
      "Use Amazon S3 standard storage with cross-region replication",
      "Use Amazon CloudFront with an origin in S3",
      "Deploy a VPN to every user location"
    ],
    answer: 2,
    explain: "Using CloudFront with S3 as the origin allows global caching via edge locations, reducing latency and cost, while requiring minimal management for caching.",
    why_others_are_not_correct: {
      0: "Deploying EC2 in every region adds significant cost and management overhead.",
      1: "S3 + replication stores content globally but does not inherently provide edge caching or optimal latency to end-users.",
      3: "VPNs are designed for secure network connectivity, not content distribution."
    }
  },
  {
    q: "28. What advantage does using AWS Direct Connect provide compared to an internet-based VPN for connecting on-premises to AWS?",
    choices: [
      "Lower upfront cost than internet VPN",
      "Encrypted connections by default without user setup",
      "Consistent, dedicated network bandwidth with lower latency",
      "Auto-scaling bandwidth based on usage"
    ],
    answer: 2,
    explain: "AWS Direct Connect provides a dedicated physical connection into AWS, which typically results in lower latency, more consistent performance, and reliable bandwidth compared to internet-based VPNs.",
    why_others_are_not_correct: {
      0: "Direct Connect typically has higher upfront cost than a standard internet VPN.",
      1: "Encryption is optional and must be configured; VPNs provide encryption by default over the public internet.",
      3: "Bandwidth for Direct Connect is fixed and must be provisioned; it does not auto-scale automatically based on usage."
    }
  },
  {
    q: "29. When a VPC is peered with another VPC, which of the following statements is **true**?",
    choices: [
      "Transit traffic can route through this peering to a third VPC",
      "You can peer VPCs across different AWS accounts",
      "VPC peering supports transitive routing via a central hub VPC",
      "VPC peering automatically enables DNS resolution across the peered VPCs"
    ],
    answer: 1,
    explain: "VPC Peering allows two VPCs (within or across accounts) to route traffic privately between them. Cross-account peering is supported.",
    why_others_are_not_correct: {
      0: "Peering does not support routing to a third VPC via the peer (no transitive routing).",
      2: "Transitive routing is not supported in VPC peering; you must use Transit Gateway or other routing solution.",
      3: "DNS resolution across peered VPCs is optional and must be explicitly configured (via enabling DNS resolution)."
    }
  },
  {
    q: "30. A video streaming service wants to deliver high-quality content globally, and they expect sudden peaks in demand (for example, when a new show is released). Which architecture best supports this scenario?",
    choices: [
      "Deploy large EC2 instances in one region and scale vertically",
      "Use on-premises servers with remote caching appliances globally",
      "Use S3 + CloudFront and deploy origin in nearest region",
      "Use RDS Multi-AZ in one region and replicate to edge locations"
    ],
    answer: 2,
    explain: "Using S3 to store content (origin) combined with CloudFront edge caching enables global delivery, handles sudden spikes in demand by caching near users, and decouples from compute scaling concerns.",
    why_others_are_not_correct: {
      0: "Single region large instances would struggle with global latency and spikes; vertical scaling is limited.",
      1: "On-premises caching adds complexity, cost and lost benefit of AWS global network.",
      3: "RDS Multi-AZ handles database resilience, not content delivery or edge caching."
    }
  },

  // ---------- Module 6: Compute ----------
  {
    q: "31. Which AWS compute service is **ideal** for event-driven code execution without provisioning servers or containers?",
    choices: [
      "Amazon EC2",
      "AWS Fargate",
      "AWS Lambda",
      "Amazon Lightsail"
    ],
    answer: 2,
    explain: "AWS Lambda is a serverless compute service where you write code that runs in response to events, without managing servers or containers.",
    why_others_are_not_correct: {
      0: "EC2 requires you to manage servers (instances) yourself.",
      1: "Fargate manages containers but you still define tasks/containers.",
      3: "Lightsail is simplified virtual servers or containers, not purely event-driven serverless."
    }
  },
  {
    q: "32. A customer has a predictable baseline workload with occasional peaks. Which EC2 pricing model gives them significant cost savings with commitment but flexibility across instance sizes and families?",
    choices: [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
      "Savings Plans"
    ],
    answer: 3,
    explain: "AWS Savings Plans provide cost-effective pricing across instance families and regions when you commit to a certain spend level, offering more flexibility compared to Reserved Instances tied to a specific instance type.",
    why_others_are_not_correct: {
      0: "On-Demand offers flexibility but at higher cost and no commitment savings.",
      1: "Spot Instances offer deep discounts but are interruptible and not ideal for predictable baseline workloads.",
      2: "Reserved Instances provide savings but less flexibility across instance types/families compared to Savings Plans."
    }
  },
  {
    q: "33. Which service allows you to deploy and manage scalable web applications by automatically provisioning the environment including compute, load balancing, and auto-scaling?",
    choices: [
      "AWS Elastic Beanstalk",
      "Amazon EC2 Auto Scaling",
      "AWS CloudFormation",
      "AWS OpsWorks"
    ],
    answer: 0,
    explain: "AWS Elastic Beanstalk simplifies deployment and management of web applications by provisioning the necessary resources (compute, load balancing, auto-scaling) and allowing you to focus on code.",
    why_others_are_not_correct: {
      1: "EC2 Auto Scaling only manages scaling of EC2 instances; you still handle provisioning and orchestration.",
      2: "CloudFormation orchestrates resources via templates but you still manage resource definitions.",
      3: "OpsWorks is a configuration management service; it does not provide the fully managed app-platform experience Beanstalk does."
    }
  },
  {
    q: "34. A research team is running high-performance computing jobs that are interruptible and can tolerate pause or termination. Which EC2 pricing model should they choose to maximize savings?",
    choices: [
      "On-Demand",
      "Reserved Instances",
      "Spot Instances",
      "Savings Plans"
    ],
    answer: 2,
    explain: "Spot Instances allow you to use spare EC2 capacity at a much reduced cost, and are suitable for workloads that are flexible and can tolerate interruptions.",
    why_others_are_not_correct: {
      0: "On-Demand gives no cost savings compared to alternatives.",
      1: "Reserved Instances require long-term commitment and are less flexible.",
      3: "Savings Plans cover spend commitment but do not provide as deep discounts for interruptible workloads as Spot."
    }
  },
  {
    q: "35. Which EC2 instance family would you choose for memory-intensive database workloads?",
    choices: [
      "Compute Optimized",
      "Memory Optimized",
      "Storage Optimized",
      "General Purpose"
    ],
    answer: 1,
    explain: "Memory Optimized instance families are designed for workloads that require large amounts of memory, such as in-memory databases, caching, and real-time big data processing.",
    why_others_are_not_correct: {
      0: "Compute Optimized is for CPU-intensive workloads.",
      2: "Storage Optimized is for high I/O workloads requiring lots of local storage.",
      3: "General Purpose is balanced but not specialized for high memory demands."
    }
  },
  {
    q: "36. What billing characteristic best describes the On-Demand pricing model for EC2 instances?",
    choices: [
      "One-year upfront payment required",
      "Pay per second with no long-term commitment",
      "Lowest cost for reserved workloads",
      "Bid price determines capacity availability"
    ],
    answer: 1,
    explain: "On-Demand billing allows you to pay per second (with a 60-second minimum for many instance types) with no long-term commitment—ideal for unpredictable workloads.",
    why_others_are_not_correct: {
      0: "One-year upfront payments are required for some Reserved Instances, not On-Demand.",
      2: "Lowest cost for reserved workloads is more applicable to Reserved Instances or Savings Plans.",
      3: "Bid price and capacity availability describes Spot Instances, not On-Demand."
    }
  },
  {
    q: "37. If a developer wants to run multiple microservices packaged as containers and avoid managing the underlying servers, which AWS compute service should they choose?",
    choices: [
      "Amazon EC2",
      "AWS Lambda",
      "AWS Fargate",
      "AWS Batch"
    ],
    answer: 2,
    explain: "AWS Fargate is a serverless compute engine for containers that lets you run containers without managing servers or clusters—ideal for microservices packaged as containers.",
    why_others_are_not_correct: {
      0: "EC2 would require managing servers and containers manually.",
      1: "Lambda is for functions, not full container workloads (though technically supports containers but at a smaller scale).",
      3: "AWS Batch is for batch processing jobs, not necessarily microservice container architectures."
    }
  },
  {
    q: "38. A new application must run continuously in the cloud, process user requests, and auto-scale based on traffic with minimal architectural effort. Which service combo delivers this with the least management overhead?",
    choices: [
      "EC2 instances + manual autoscaling",
      "Elastic Beanstalk environment with auto-scaling",
      "On-premises VMs connected to AWS",
      "Lambda functions triggered by HTTP requests"
    ],
    answer: 1,
    explain: "Elastic Beanstalk environment provides a PaaS layer: you deploy your application code and the platform handles provisioning, load balancing, auto-scaling—thus minimizing management overhead while supporting continuous processing of user requests.",
    why_others_are_not_correct: {
      0: "Requires manual configuration of autoscaling and infrastructure management.",
      2: "On-premises adds operational overhead and doesn’t use native AWS auto-scaling capabilities fully.",
      3: "Lambda is suitable for event-driven or request-triggered functions, but less ideal for full continuously-running web applications that may maintain sessions or long-lived processes."
    }
  },
  {
    q: "39. What is a key benefit of using the AWS Free Tier when beginning with compute services like EC2 or Lambda?",
    choices: [
      "Guarantees production-grade SLA for free usage",
      "Provides an unlimited number of instance hours for learning",
      "Allows users to experiment and learn with minimal cost risk",
      "Locks in pricing for five years"
    ],
    answer: 2,
    explain: "The AWS Free Tier provides limited free usage of services so that users can experiment, learn, and prototype without committing large cost—reducing risk during learning phases.",
    why_others_are_not_correct: {
      0: "Free Tier usage does not come with production-grade SLA beyond standard service levels.",
      1: "Usage is limited (hours, instance types, resources) – not unlimited.",
      3: "Free Tier doesn’t lock pricing; you still pay standard rates after the free usage ends."
    }
  },
  {
    q: "40. A company has an on-premises data center and wants to gradually migrate an application to AWS, but keep full control of the operating system, runtime, and application code. Which AWS compute model fits best for the initial lift-and-shift phase?",
    choices: [
      "Serverless functions (Lambda)",
      "Containers (Fargate)",
      "Managed database service (RDS)",
      "Virtual machines (EC2) in AWS"
    ],
    answer: 3,
    explain: "Using EC2 virtual machines in AWS provides the same VM model as on-premises: you retain control of OS, runtime, and application code. This makes it suitable for an initial lift-and-shift migration.",
    why_others_are_not_correct: {
      0: "Serverless functions abstract away OS/runtime control, so not suitable if you need full control.",
      1: "Containers (Fargate) still introduce abstraction and may require architectural changes.",
      2: "Managed database service (RDS) addresses database workloads, not application infrastructure migration."
    }
  }
];

window.quizBanks.mod4_5 = window.quizBanks.practice;
window.practiceQuestions = window.quizBanks.practice;
