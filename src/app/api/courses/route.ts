import { NextResponse } from 'next/server';
import { COURSES_DATA } from '@/data/courses';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let results = [...COURSES_DATA];

  if (category && category !== 'All') {
    results = results.filter(c => c.category === category);
  }

  return NextResponse.json({
    status: 'success',
    count: results.length,
    data: results
  });
}
