import { NextResponse } from 'next/server';
import perfumesData from '../../../../perfumes.json';

export function GET() {
  return NextResponse.json(perfumesData);
}
