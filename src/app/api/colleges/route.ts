import { NextResponse } from 'next/server';
import { COLLEGES_DATA } from '@/data/colleges';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const state = searchParams.get('state');
  const type = searchParams.get('type');

  let results = [...COLLEGES_DATA];

  if (state && state !== 'All') {
    results = results.filter(c => c.location.state === state);
  }

  if (type && type !== 'All') {
    results = results.filter(c => c.type === type);
  }

  return NextResponse.json({
    status: 'success',
    count: results.length,
    data: results
  });
}
