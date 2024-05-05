import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        graphhopperKey: process.env.NEXT_GRAPHHOPPER_KEY
    }
};

export default withNextIntl(nextConfig);
