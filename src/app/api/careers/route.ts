import { NextResponse } from 'next/server';
import { CAREERS_DATA } from '@/data/careers';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const stream = searchParams.get('stream');
  const query = searchParams.get('q');

  let results = [...CAREERS_DATA];

  if (stream && stream !== 'All') {
    results = results.filter(c => c.stream.includes(stream as any));
  }

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(c => 
      c.title.toLowerCase().includes(q) ||
      c.overview.toLowerCase().includes(q) ||
      c.requiredSkills.some(s => s.toLowerCase().includes(q))
    );
  }

  return NextResponse.json({
    status: 'success',
    count: results.length,
    data: results
  });
}
