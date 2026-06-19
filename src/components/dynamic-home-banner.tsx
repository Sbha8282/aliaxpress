'use client';

import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function DynamicHomeBanner() {
  const { homeBanners } = useAppContext();

  if (homeBanners.length === 0) {
    return null; // Don't render if no banners
  }

  const banner = homeBanners[0]; // Display the first/latest banner
  const bgColor = banner.background_color || 'rgb(255, 174, 0)';

  return (
    <div
      className=" px-0 sm:px-0 lg:px-0 py-0 md:py-24 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-18 overflow-hidden text-white relative"
      style={{ backgroundColor: bgColor }}
    >
      <style jsx>{`
        .banner {
          background: linear-gradient(135deg, ${bgColor}, ${bgColor}dd);
          padding: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          position: relative;
        }
      `}</style>

      <div className="relative z-10 flex-1 w-full md:w-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{banner.title}</h1>
        {banner.subtitle && (
          <p className="text-base sm:text-lg opacity-90 mb-6">{banner.subtitle}</p>
        )}
        {banner.button_text && banner.button_link ? (
          <Link href={banner.button_link}>
            <Button variant="light" className="font-semibold">
              {banner.button_text}
            </Button>
          </Link>
        ) : banner.button_text ? (
          <Button variant="light" className="font-semibold">
            {banner.button_text}
          </Button>
        ) : null}
      </div>

      {banner.image_url && (
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0 opacity-80 md:opacity-100">
          <Image
            src={banner.image_url}
            alt={banner.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
}
