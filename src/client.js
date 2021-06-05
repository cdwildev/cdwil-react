import sanityClient from '@sanity/client';

export default sanityClient({
    projectId:"5e3iqbhv",
    dataset:"production",
    useCdn: true,
    apiVersion: '2021-06-01', // use a UTC date string
})