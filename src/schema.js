const HomeQuery = `{
    sectionCollection(limit: 1){
        items{
            title
            slug
            contentCollection {
                items{
                    ... on SectionHeroSection{
                        title
                        headline
                        media{
                            url
                        }
                    }
                }
            }
        }
    }
}
`;

const SectionSlider = `{
    sectionSliderCollection{
        items{
        	id
           title
          excerpt
        }
      }
}    
`;




export { HomeQuery, SectionSlider }

