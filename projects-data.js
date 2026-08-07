// projects-data.js
// Each project uses the folder name as its key (must match the URL ?id= parameter)
// sections: array of { title, content } — add as many as needed per project
// images: filenames inside images/projects/<key>/ 

const projects = {

    'zoom-zapier-asana': {
        title: 'Meeting Automation',
        siteUrl: '',
        cardImage: './images/checklist.png',
        cardDescription: 'Automated pipeline that turns Zoom recordings into documentation, tasks, and follow-up.',
        images: [
            './images/projects/zoom-zapier-asana/1.png',
            // './images/projects/zoom-zapier-asana/2.png',
        ],
        sections: [
            {
                title: 'Turning meeting conversations into organized knowledge',
                content: 'Meetings often contain important decisions, ideas, and next steps, but transforming those conversations into structured information can become a time-consuming process. After long meetings, teams may spend additional time reviewing recordings, organizing notes, identifying action items, and making sure everyone has access to the same information. This system was built to automate that process by transforming Zoom meeting data into organized documentation, actionable tasks, and a clear record of what happened during each conversation.'
            },
            {
                title: 'Creating an automated pipeline from recording to documentation',
                content: 'The process begins when a new Zoom cloud recording becomes available. The system automatically retrieves the meeting assets — video recording, audio file, and transcript — and organizes them inside Google Drive using a structured folder system, creating a dedicated location for each meeting where all related resources can be accessed and referenced. Each meeting is automatically identified and organized using the original meeting name, creating consistency between the recording, stored files, and generated documentation.'
            },
            {
                title: 'Connecting conversations with actionable follow-up',
                content: 'After processing the meeting information, the system creates a task inside a dedicated Asana board for Zoom recordings. Each task is automatically named based on the original meeting title and includes a processed transcript, meeting summary, key points discussed, action items, and automatically generated subtasks based on the next steps identified during the meeting. A comment is added containing the Google Drive folder link with the original files, keeping all relevant information connected in one place. Once the complete process is finished, a notification is sent through Google Chat with a direct link to the newly created Asana task.'
            },
            {
                title: 'Solving technical challenges behind the system',
                content: 'Building this automation required solving challenges related to large file processing, API connections, and platform limitations. Large video files could not always be handled reliably through standard automation steps, so a custom Python-based service hosted on Render was implemented to process video uploads. Transcript processing was also optimized to manage large amounts of information while preserving the most relevant content for documentation and task management. The final solution combined Zapier, APIs, custom code, and multiple integrations to create a reliable and scalable internal automation system.'
            },
            {
                title: 'Creating a reliable knowledge management process',
                content: 'The final system transformed meeting recordings into organized documentation and actionable workflows without requiring teams to spend additional hours processing information after each meeting. By connecting Zoom, Google Drive, Asana, Google Chat, Zapier, and custom services, the system created better traceability between discussions, decisions, and follow-up actions. Every meeting now has a structured record, connected files, documented next steps, and a clear place where the team can return to the information whenever needed.'
            }
        ]
    },

    'agricultural-website': {
        title: 'Website Development',
        siteUrl: '',
        cardImage: './images/browser.png',
        cardDescription: 'Modern website for an agriculture brand, built to showcase products and support content growth.',
        images: [
             './images/projects/agricultural-website/1.webp',
             './images/projects/agricultural-website/2.webp',
             './images/projects/agricultural-website/3.webp',
             './images/projects/agricultural-website/4.webp',
             './images/projects/agricultural-website/5.webp',
             './images/projects/agricultural-website/6.webp',
             './images/projects/agricultural-website/7.webp',
             './images/projects/agricultural-website/8.webp',
             './images/projects/agricultural-website/9.webp',
             './images/projects/agricultural-website/10.webp',
        ],
        sections: [
            {
                title: 'Building a complete digital experience for an established brand',
                content: 'As part of a team at Root Creative Marketing, I worked on the website development for an established agricultural brand, helping create a modern and scalable digital experience. The project focused on transforming the brand\'s online presence into a more structured and flexible website that could better showcase the company, its products, and its ongoing content. With a wide range of information to organize, the website needed to support both customer-facing pages and content that could continue growing over time.'
            },
            {
                title: 'Developing a content-rich website built for growth',
                content: 'The website included multiple sections designed to support different areas of the business, from showcasing different fruit categories and company information to supporting ongoing content through recipes, articles, and dedicated landing pages. The development required implementing a variety of page types while maintaining a consistent experience throughout the website. Each section was structured to make information easier to navigate and create a foundation that could continue expanding as new content was added.'
            },
            {
                title: 'Creating a website that supports ongoing updates',
                content: 'A business website is not a static project. Content changes, new information is added, and teams need the ability to keep their digital presence current. The website was built with ongoing content management in mind, allowing the team to continue publishing and updating sections such as recipes, blog content, and other site information. This helped create a platform that could continue evolving beyond the initial launch.'
            },
            {
                title: 'Building a strong foundation for the brand online',
                content: 'Large websites require more than individual pages. They need structure, consistency, and flexibility to support future growth. Through careful implementation and attention to the overall website experience, the project created a reliable digital foundation that allows the brand to continue sharing information and connecting with its audience online.'
            }
        ]
    },

    'ecommerce': {
        title: 'E-commerce Platform',
        siteUrl: '',
        cardImage: './images/price-tag.png',
        cardDescription: 'WooCommerce store combining product pages, educational resources, and customer discovery tools.',
        images: [
             './images/projects/ecommerce/1.webp',
             './images/projects/ecommerce/2.webp',
             './images/projects/ecommerce/3.webp',
             './images/projects/ecommerce/4.webp',
             './images/projects/ecommerce/5.webp',
             './images/projects/ecommerce/6.webp',
             './images/projects/ecommerce/7.webp',
        ],
        sections: [
            {
                title: 'Building an e-commerce experience beyond the shopping cart',
                content: 'As part of a team at Root Creative Marketing, I worked on the development of a WooCommerce website designed to help customers explore, understand, and purchase specialized products online. The website was built to do more than display products. It combined e-commerce functionality with educational resources, product information, and tools designed to guide visitors throughout their buying journey.'
            },
            {
                title: 'Creating a structured product experience',
                content: 'With multiple product categories and subcategories, the website required a clear structure that made it easier for visitors to browse and find the right products. Each product page was built to provide detailed information, including product descriptions, multiple images, additional information, downloadable resources, and frequently asked questions. This created a more complete experience where customers could understand the products before making a purchase decision.'
            },
            {
                title: 'Combining e-commerce with educational content',
                content: 'Beyond the store experience, the website included a learning hub designed to provide additional value to visitors. The platform included educational articles, a glossary, gardening resources, product usage videos, and additional guides that helped connect customers with relevant information. This created a website experience focused not only on selling products, but also on helping users make informed decisions.'
            },
            {
                title: 'Building tools that support customer discovery',
                content: 'The website also included additional features to help visitors interact with the brand beyond the product catalog. Resources such as a product locator, store locator, "where to buy" functionality, and interactive content sections helped create a more complete customer experience.'
            },
            {
                title: 'Creating a scalable e-commerce foundation',
                content: 'A successful e-commerce website requires more than adding products. It needs a structure that can support growth, new content, and an evolving product catalog. Through WooCommerce development and content organization, the project created a flexible platform that supports both online sales and customer education.'
            }
        ]
    },

    'lead-generator': {
        title: 'Lead Generation',
        siteUrl: '',
        cardImage: './images/contact-form.png',
        cardDescription: 'Landing pages connected to CRM systems and automated follow-up workflows for different industries.',
        images: [
            './images/projects/lead-generator/1.webp',
            './images/projects/lead-generator/2.webp',
            './images/projects/lead-generator/3.webp',
            './images/projects/lead-generator/4.webp',
        ],
        sections: [
            {
                title: 'Building landing pages connected to a complete lead system',
                content: 'As part of different projects, I worked on building lead generation funnels designed to turn website visitors into organized opportunities. These projects included landing pages for different industries, each built around a specific conversion goal such as generating inquiries, capturing contact information, promoting services, or collecting leads through dedicated forms. The focus was not only creating the page itself, but connecting the visitor journey from the first interaction through the follow-up process.'
            },
            {
                title: 'Creating focused conversion experiences',
                content: 'Unlike a traditional website where visitors can explore many different sections, landing pages are designed around one specific action. The funnels were structured to guide visitors through a clear path: understand the offer or service, provide their information through a form, and enter a follow-up process. Each landing page was created with a specific audience and goal in mind, making the experience more direct and focused.'
            },
            {
                title: 'Connecting lead capture with CRM systems',
                content: 'Once a visitor submitted a form or requested information, the lead was connected to a CRM system such as GoHighLevel, HubSpot, or similar platforms. The system allowed contacts to be organized, tracked, and moved through different stages of the customer journey. This created visibility into incoming leads and provided a structured way to manage opportunities after the initial conversion.'
            },
            {
                title: 'Automating follow-up after conversion',
                content: 'After a lead entered the system, automated processes helped maintain consistent communication and reduce manual follow-up. Depending on the funnel, this included automated email sequences, lead nurture campaigns, internal notifications, contact organization, and follow-up workflows. The goal was to make sure new leads continued receiving relevant communication after their initial interaction.'
            },
            {
                title: 'Designing funnels as complete systems',
                content: 'A landing page alone does not create a predictable lead process. The real value comes from connecting the page, the form, the CRM, and the follow-up automation together. By combining conversion-focused pages with backend systems, these funnels created a more organized process for capturing and managing new opportunities.'
            }
        ]
    },

    'interview-pipeline': {
        title: 'Outreach Automation',
        siteUrl: '',
        cardImage: './images/chat.png',
        cardDescription: 'GoHighLevel system to manage interview outreach, guest tracking, and follow-up sequences across channels.',
        images: [
            './images/projects/interview-pipeline/1.png',
            './images/projects/interview-pipeline/2.png',
        ],
        sections: [
            {
                title: 'Turning manual outreach into a structured system',
                content: 'Managing interview outreach across multiple channels can quickly become difficult when contacts, conversations, and follow-ups are tracked manually. This project focused on designing an automated outreach system inside GoHighLevel to organize the entire interview booking process, including guest management, communication sequences, and pipeline tracking. The goal was to create a scalable system where every opportunity could be tracked from the first contact through the final outcome.'
            },
            {
                title: 'Designing a flexible CRM pipeline structure',
                content: 'One of the main challenges was creating a system that could support different outreach channels without duplicating the entire process. Instead of creating separate pipelines for Podcast, Summit, and YouTube outreach, the system was designed around one shared pipeline where stages represent the status of the conversation, while the outreach channel is managed as a separate variable. This created a cleaner structure that allowed multiple outreach campaigns to run through the same automation framework.'
            },
            {
                title: 'Automating outreach and follow-up sequences',
                content: 'The system uses GoHighLevel workflows to manage the outreach process after a new opportunity enters the pipeline. Based on the selected outreach channel, the automation sends the appropriate initial message and manages follow-up sequences over time. The process includes channel-specific outreach emails, follow-up sequences, pipeline stage updates, opportunity tracking, and internal tasks for conversations requiring review. This reduces repetitive manual tracking while keeping each opportunity organized throughout the outreach cycle.'
            },
            {
                title: 'Building around real-world automation limitations',
                content: 'During the architecture process, one of the biggest challenges was handling email reply detection reliably. While CRM platforms provide built-in communication tools, certain limitations made it difficult to depend completely on native email synchronization for this specific use case. The system was designed with a future-ready architecture that allows additional services, APIs, and custom development to handle more advanced reply detection and classification when needed.'
            },
            {
                title: 'Creating a scalable outreach engine',
                content: 'The final system creates a foundation for managing interview outreach across multiple channels while maintaining clear visibility into every opportunity. By combining CRM structure, automation workflows, and scalable architecture, the process moves away from manual tracking and toward a repeatable system that can support future growth.'
            }
        ]
    },

    'magazine': {
        title: 'Digital Platform',
        siteUrl: 'https://www.lifestylemagazine.media/',
        cardImage: './images/browser.png',
        cardDescription: 'Publication website with content publishing, subscription support, and full analytics setup for ongoing growth.',
        images: [
            './images/projects/magazine/1.webp',
            './images/projects/magazine/2.webp',
            './images/projects/magazine/3.webp',
            './images/projects/magazine/4.webp',
        ],
        sections: [
            {
                title: 'Building a digital platform for a growing publication',
                content: 'As part of a team at Root Creative Marketing, I worked on the development and optimization of the Lifestyle Magazine website, creating a digital platform designed to support content publishing, subscriptions, and long-term growth. The project involved building a structured online experience where visitors could discover magazine content, learn about the publication, and interact with subscription opportunities while creating the technical foundation needed to measure and improve performance over time.'
            },
            {
                title: 'Creating a website experience built around content and engagement',
                content: 'Digital publications require more than simply displaying articles. They need a structure that allows content to be organized, discovered, and continuously updated as the platform grows. The website was developed to support different types of content and provide visitors with a clear experience when exploring the publication, learning about available offerings, and engaging with the brand online.'
            },
            {
                title: 'Building the foundation for digital measurement',
                content: 'Understanding how users interact with a website is essential for making informed improvements. To create better visibility into website performance, the platform was configured with key digital tools, including Google Analytics 4, Google Tag Manager, Google Search Console, and Google Business Profile. These integrations provide insights into visitor behavior, website performance, search visibility, and opportunities for continued optimization.'
            },
            {
                title: 'Connecting website data with growth opportunities',
                content: 'A website should not only exist online; it should provide information that helps guide future decisions. By implementing tracking and measurement tools, the platform gained a stronger understanding of how visitors discover and interact with the website, creating a foundation for ongoing improvements in content, visibility, and user experience.'
            },
            {
                title: 'Creating a scalable digital foundation',
                content: 'Successful digital platforms require the combination of content, technology, and data. Through website development, subscription support, and analytics implementation, this project created a stronger digital foundation that allows the publication to continue evolving and growing online.'
            }
        ]
    },

};