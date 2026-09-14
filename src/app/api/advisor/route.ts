import { NextResponse } from 'next/server';
import { CAREERS_DATA } from '@/data/careers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { query, stream, educationLevel } = body;

    const matched = CAREERS_DATA.filter(c => 
      !stream || stream === 'All' || c.stream.includes(stream)
    ).slice(0, 3);

    return NextResponse.json({
      status: 'success',
      reply: `Recommendations compiled for ${stream || 'General'} education level (${educationLevel || 'Class 12'}).`,
      recommendations: matched.map(m => ({
        id: m.id,
        title: m.title,
        salaryMid: m.salaryRange.mid,
        growth: m.growthPercentage
      }))
    });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Invalid payload' }, { status: 400 });
  }
}
