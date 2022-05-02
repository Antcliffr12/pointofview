
const HeroImage = `
{
   heroSectionCollection{
       items{
           media{
               url
           }
           heroTitle
           subText
           slug
       }
   }
}
`;

const ServiceCTAQuery = `
{
    serviceCtaCollection{
        items{
            id,
            serviceTitle,
            serviceExcerpt
        }
    }
}    
`;

export { HeroImage, ServiceCTAQuery }