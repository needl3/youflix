//
// Length is in seconds
//
export type VideoDataSchema = {
    title: string,
    img: string,
    views: number,
    uploadedAt: Date,
    length: number,     // In milliseconds
    studioImage: string,
    studio: string
}
export const videoData: VideoDataSchema[] = [
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 10000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 100000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 10000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 20000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 50000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 1000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 100000000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 1000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 10000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 30000000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 10000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 1000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 10000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 1000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 10000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 1000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 10000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 1000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 10000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 1000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 10000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 1000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    },
    {
        title: "video title haha",
        img: "https://i.ytimg.com/vi/4EMcm9vzlnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5K_ELLjhgRry6H8EzUmhD2IaJnA",
        views: 10000,
        uploadedAt: new Date(Date.now() - 1000000),
        length: 1000,
        studioImage: "http://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png",
        studio: "Studio Ghibli"
    }
]
