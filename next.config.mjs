/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images :{
//         domains:['via.placeholder.com']
//     }
// };

// export default nextConfig;
