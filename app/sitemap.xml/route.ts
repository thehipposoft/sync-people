
import { NextResponse } from 'next/server';
import { getTalents } from '@/lib/api';
import type { TalentTypeAcf } from '@/types';

async function getTalentIds(): Promise<number[]> {
  const talents: TalentTypeAcf[] = await getTalents();
  return talents.map((talent) => talent.id);
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const talentIds = await getTalentIds();

  const staticRoutes = [
    '',
    'login',
    'signup',
    'terms',
    'privacy-policy',
    'faqs',
    'talents',
    'blog/why-create-a-presentation-video',
    'categories/cleaning',
    'categories/construction',
    'categories/farming',
    'categories/hospitality',
    'categories/logistics',
    'categories/warehousing',
  ];

  const urls = [
    ...staticRoutes.map((route) => `${baseUrl}/${route}`),
    ...talentIds.map((id) => `${baseUrl}/talents/${id}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `<url><loc>${url}</loc></url>`
    )
    .join('\n  ')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
