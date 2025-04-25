import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Fetches the all categories for the database
 *
 * @returns list of all categories
 */
export async function GET() {
  const fullUrl = `${BASE_URL}/api/LegalCaseFile`;
  try {
    const response = await axios.get(fullUrl);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch case files' },
      { status: 200 },
    );
  }
}
