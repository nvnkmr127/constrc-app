import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function GET() {
  const payload = await getPayload({ config: configPromise })
  
  try {
    // 1. BBMP Approvals
    await payload.create({
      collection: 'posts',
      data: {
        title: 'Navigating BBMP Construction Approvals',
        slug: 'bbmp-approvals-guide',
        publishedDate: new Date().toISOString(),
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'text',
                    text: 'Getting your building plan approved by the Bruhat Bengaluru Mahanagara Palike (BBMP) can be a daunting process for new homeowners. In this guide, we break down the step-by-step process to ensure your construction starts without legal hiccups.',
                    version: 1,
                  }
                ]
              }
            ]
          }
        }
      }
    });

    // 2. Bangalore Climate
    await payload.create({
      collection: 'posts',
      data: {
        title: "Designing for Bangalore's Unique Climate",
        slug: 'bangalore-climate-design',
        publishedDate: new Date().toISOString(),
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'text',
                    text: 'Bangalore enjoys a moderate climate year-round, but heavy monsoons require special attention during the design phase. From rainwater harvesting to cross-ventilation, here is how to build a home perfectly suited for the Garden City.',
                    version: 1,
                  }
                ]
              }
            ]
          }
        }
      }
    });

    // 3. Real Estate
    await payload.create({
      collection: 'posts',
      data: {
        title: 'Why Timely Delivery Matters in Bangalore Real Estate',
        slug: 'timely-delivery-real-estate',
        publishedDate: new Date().toISOString(),
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'text',
                    text: 'With rent prices skyrocketing in tech hubs like Whitefield and HSR Layout, every month of construction delay costs you money. Learn how Screw Wood guarantees on-time delivery using modern project management techniques.',
                    version: 1,
                  }
                ]
              }
            ]
          }
        }
      }
    });

    return NextResponse.json({ success: true, message: 'Posts Seeded Successfully!' })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
