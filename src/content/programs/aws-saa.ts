import type { Program } from "@/lib/types";

/**
 * **AWS Solutions Architect Associate** (SAA-C03, "2026") — VillaAula's third program
 * and the one that lights up the **Cloud & Certs** category, so the catalog finally
 * spans three real shelves (Languages · Cloud & Certs · Career — §19.5).
 *
 * Shape = a **ladder**, not a single-course collection: one cert reachable only after
 * *all* of AWS would be years of churn, so the climb is paced into six domain-courses,
 * each dropping a badge, ending in one capstone certificate (same reasoning as the ESL
 * milestone certs, §19.3). Organized by **what you build with** (compute, networking,
 * data, security, resilience) rather than strictly by the four exam domains — security
 * threads through everything — with each course flagging the domain(s) it feeds.
 *
 * Plan: `CURRICULA_C1_C2_AWS_SAA.md` (Part 2). All courses are `status:"soon"` — the
 * program/cards exist; **no course content is authored yet**.
 */
export const awsSaaProgram: Program = {
  slug: "aws-saa",
  title: "AWS Solutions Architect Associate",
  tagline: "Architect on AWS — and pass the SAA",
  summary:
    "A paced climb to the AWS Certified Solutions Architect – Associate (SAA-C03): the services, the trade-offs, and the architectural judgment the exam tests. Built scenario-first — you practice 'which service, and why' in short skims, earn a badge for each domain, and finish exam-ready.",
  kind: "ladder",
  category: "cloud-certs",
  courses: [
    {
      slug: "aws-foundations",
      status: "soon",
      title: "Cloud Foundations",
      focus: "Regions & AZs · shared responsibility · IAM basics · Well-Architected · console & CLI",
    },
    {
      slug: "aws-compute-storage",
      status: "soon",
      title: "Compute & Storage",
      focus: "EC2 · Auto Scaling · Lambda · containers · EBS · S3 · EFS",
    },
    {
      slug: "aws-networking",
      status: "soon",
      title: "Networking & Delivery",
      focus: "VPC · SG vs NACL · Route 53 · ELB · CloudFront · PrivateLink · Direct Connect / VPN",
    },
    {
      slug: "aws-databases",
      status: "soon",
      title: "Databases & Analytics",
      focus: "RDS · Aurora · DynamoDB · ElastiCache · Redshift · Athena · Kinesis · which-DB-when",
    },
    {
      slug: "aws-security",
      status: "soon",
      title: "Security & Identity",
      focus: "IAM deep · STS · KMS · Secrets Manager · Cognito · WAF/Shield · CloudTrail · Organizations",
    },
    {
      slug: "aws-resilience-cost",
      status: "soon",
      title: "Resilience, Performance & Cost",
      focus: "multi-AZ/Region · SQS/SNS/EventBridge · DR strategies · scaling · Savings Plans · Spot · exam strategy",
    },
  ],
  certificates: [
    {
      id: "aws-saa-exam-ready",
      kind: "certificate",
      title: "AWS SAA · Exam-Ready",
      subtitle: "Solutions Architect Associate, end to end",
      requires: { type: "program", programSlug: "aws-saa" },
    },
  ],
};
