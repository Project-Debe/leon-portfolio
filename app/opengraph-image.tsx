import { ImageResponse } from 'next/server';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Leono';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          backgroundColor: '#0c0c0c',
          color: '#fff',
          fontSize: 400,
        }}
      >
        <div>Leono</div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
