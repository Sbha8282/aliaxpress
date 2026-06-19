'use client';

import { useEffect, useState } from 'react';

export function NewYearBanner() {
  const [bannerSettings, setBannerSettings] = useState({
    imageUrl: '',
    backgroundColor: '#ff0000',
  });

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const response = await fetch('/api/settings/banner');
        if (!response.ok) return;
        const data = await response.json();
        setBannerSettings({
          imageUrl: data.imageUrl || '',
          backgroundColor: data.backgroundColor || '#ff7300',
        });
      } catch (error) {
        console.error('Failed to load banner settings:', error);
      }
    };

    loadSettings();
  }, []);

  const bgColor = bannerSettings.backgroundColor || '#ff0000';

  return (
    <>
      <style jsx>{`
        .banner {
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          width: 100vw;
          background: linear-gradient(135deg, ${bgColor}, ${bgColor}dd);
          border-radius: 0;
          padding: 30px 0;
          display: flex;
          justify-content: center;
          overflow: hidden;
          color: #fff;
          text-align: left;
        }

        .banner-content {
          width: 100%;
          display: flex;
          gap: 2rem;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .banner-panel {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(16px);
        }

        .left {
          width: 100%;
          text-align: left;
          min-width: 280px;
          flex: 1 1 60%;
        }

        .right {
          width: 100%;
          min-width: 280px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1 1 40%;
        }

        @media (min-width: 768px) {
          .banner {
            padding: 40px 0;
          }

          .banner-panel {
            padding: 38px;
          }

          .left {
            width: 58%;
            flex: 1 1 auto;
          }

          .right {
            width: 40%;
            flex: 1 1 auto;
          }
        }

        .sale-time {
          font-size: 14px;
          opacity: 0.9;
          margin-bottom: 10px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }

        .title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: slideIn 1.2s ease forwards;
          flex-wrap: wrap;
        }

        @media (min-width: 640px) {
          .title {
            font-size: 40px;
          }
        }

        @media (min-width: 768px) {
          .title {
            font-size: 48px;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .arrow {
          background: #fff;
          color: #ff0000;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 22px;
        }

        .offers {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          scroll-behavior: smooth;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        @media (min-width: 640px) {
          .offers {
            gap: 15px;
          }
        }

        .card {
          background: #fff;
          color: #000;
          border-radius: 10px;
          padding: 12px;
          width: 140px;
          text-align: center;
          transition: 0.3s ease;
          animation: float 4s ease-in-out infinite;
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .card {
            padding: 16px;
            width: 160px;
          }
        }

        @media (min-width: 768px) {
          .card {
            width: 180px;
          }
        }

        .card:nth-child(2) {
          animation-delay: 1s;
        }
        .card:nth-child(3) {
          animation-delay: 2s;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .card:hover {
          transform: scale(1.05);
        }

        .price {
          font-weight: 700;
          color: #331f00;
        }

        .code {
          margin-top: 8px;
          font-size: 13px;
          color: #444;
        }

        .right {
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          width: 100%;
          max-width: 420px;
          min-height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 0;
        }

        @media (max-width: 900px) {
          .banner {
            flex-direction: column;
            gap: 30px;
          }
          .left,
          .right {
            width: 100%;
          }
          .left {
            text-align: left;
          }
          .offers {
            justify-content: flex-start;
            flex-wrap: wrap;
          }
        }
      `}</style>
      <div className="banner">
        <div className="banner-content container mx-auto px-0 sm:px-1 lg:px-8">
          <div className="banner-panel">
            <div className="left">
              <div className="sale-time">Sale Ends: Jan 8, 13:29 (GMT +5.5)</div>
              <div className="title">
                NEW YEAR DEALS
                <div className="arrow">›</div>
              </div>

              <div className="offers">
                <div className="card">
                  <div className="price">৳ 5,599.39 OFF</div>
                  <small>Orders ৳49,367.97+</small>
                  <div className="code">Code: 01CD60</div>
                </div>

                <div className="card">
                  <div className="price">৳ 2,333.08 OFF</div>
                  <small>Orders ৳19,504.55+</small>
                  <div className="code">Code: 01CD25</div>
                </div>

                <div className="card">
                  <div className="price">৳ 1,866.46 OFF</div>
                  <small>Orders ৳14,838.39+</small>
                  <div className="code">Code: 01CD20</div>
                </div>
              </div>
            </div>

            <div className="right">
              {bannerSettings.imageUrl ? (
                <div className="image-wrapper">
                  <img src={bannerSettings.imageUrl} alt="Banner graphic" loading="lazy" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
