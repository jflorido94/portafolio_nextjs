import { NextResponse } from 'next/server';

export function middleware(req) {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(/, /)[0] : req.ip;

  const response = NextResponse.next();
  response.cookies.set('ip', ip);
  console.log('IP Middelware:', ip);

  return response;
}
