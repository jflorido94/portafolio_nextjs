import { NextResponse } from 'next/server';

export function middleware(req) {
  const ip = req.headers.get('x-forwarded-for') || req.ip || req.connection?.remoteAddress;
  console.log('IP Address:', ip);

  // Puedes agregar la IP al request para usarla más adelante
  req.nextUrl.searchParams.set('ip', ip);

  return NextResponse.next();
}