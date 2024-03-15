import axios from 'axios'
/**
 * JSON feed base url
 */
export const siteUrl = window.location.origin

/**
 * Axios POST request gutenberg block data from api
 */

// /wp-json/wp/v2/pages/

export default async function DataFetch(pageIndex: String) {
    console.log(pageIndex)
    await axios
    .get(`${siteUrl}/wp-json/wp/v2/pages/${pageIndex}/`)
    .then(res => {
        const blockData = res.data.block_data
        // Check if block_data exists and has content
        if (!res || !blockData || !blockData.length) {
            return []; // Return empty array if no block data found
        }

        console.log(blockData)
        return blockData;
    })
    .catch(err => {
        throw Error(err)
    })
}













    // const eckData = [{
    //         "title": "Accordion 1",
    //         "copy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    //     },
    //     {
    //         "title": "Accordion 2",
    //         "copy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    //     },
    //     {
    //         "title": "Accordion 3",
    //         "copy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    //     }];