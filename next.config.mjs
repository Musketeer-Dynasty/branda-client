/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
      },
      images : {
        remotePatterns :[
          {
            protocol : "https",
            hostname : "oaidalleapiprodscus.blob.core.windows.net",
          }
        ]
      }
};

export default nextConfig;
