import { NextResponse } from 'next/server';

const jobs = [
  {
    title: "UI Designer",
    company: "Figma",
    location: "Remote",
    description: "Create beautiful UI designs Create beautiful UI designs Create beautiful UI designs Create beautiful UI designs Create beautiful UI designs.",
    deadline: new Date().toISOString().split('T')[0]
  },
  {
    title: "UI Designer",
    company: "Figma",
    location: "Remote",
    description: "Create beautiful UI designs.",
    deadline: new Date().toISOString().split('T')[0]
  },
  {
    title: "UI Designer",
    company: "Figma",
    location: "Remote",
    description: "Create beautiful UI designs.",
    deadline: new Date().toISOString().split('T')[0]
  },
  // Add more jobs...
];

export async function GET() {
  return NextResponse.json(jobs);
}
